import { useCallback, useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { apps } from './data/site'
import Boot from './os/Boot'
import Window from './os/Window'
import MenuBar from './os/MenuBar'
import Desk from './os/Desk'
import Dock from './os/Dock'
import Spotlight from './os/Spotlight'
import Launchpad from './os/Launchpad'
import { bodies } from './os/bodies'
import Era2026 from './era/Era2026'

const defaults = {
  welcome: { x: 36, y: 56, w: 520 },
  work: { x: 180, y: 72, w: 620 },
  projects: { x: 220, y: 96, w: 560 },
  about: { x: 240, y: 100, w: 460 },
  skills: { x: 90, y: 86, w: 480 },
  contact: { x: 260, y: 96, w: 420 },
  terminal: { x: 160, y: 120, w: 520 },
}

const App = () => {
  const [booted, setBooted] = useState(false)
  const [era, setEra] = useState(false)
  const [clock, setClock] = useState('')
  const [spot, setSpot] = useState(false)
  const [pad, setPad] = useState(false)
  const [note, setNote] = useState(false)
  const [wins, setWins] = useState({})

  useEffect(() => {
    document.body.style.overflow = era ? '' : 'hidden'
    const tick = () => setClock(new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }))
    tick()
    const id = window.setInterval(tick, 1000)
    return () => {
      document.body.style.overflow = ''
      window.clearInterval(id)
    }
  }, [era])

  useEffect(() => {
    if (!booted || era) return undefined
    const t = window.setTimeout(() => setNote(true), 4200)
    const hide = window.setTimeout(() => setNote(false), 11000)
    return () => {
      window.clearTimeout(t)
      window.clearTimeout(hide)
    }
  }, [booted, era])

  const finishBoot = useCallback(() => setBooted(true), [])
  const enter2026 = useCallback(() => {
    setSpot(false)
    setPad(false)
    setEra(true)
  }, [])
  const leave2026 = useCallback(() => setEra(false), [])

  const bump = useCallback((id, patch = {}) => {
    setWins((prev) => {
      const z = Math.max(9, ...Object.values(prev).map((win) => win.z || 0)) + 1
      const base = prev[id] ?? defaults[id]
      return { ...prev, [id]: { ...defaults[id], ...base, ...patch, z } }
    })
  }, [])

  const openApp = useCallback(
    (id) => {
      const meta = apps.find((app) => app.id === id)
      if (meta?.era) {
        enter2026()
        return
      }
      bump(id, { open: true, minimized: false })
    },
    [bump, enter2026],
  )
  const focusApp = useCallback((id) => bump(id, { minimized: false }), [bump])
  const restoreApp = useCallback((id) => bump(id, { open: true, minimized: false }), [bump])
  const closeApp = useCallback((id) => {
    setWins((prev) => ({ ...prev, [id]: { ...prev[id], open: false, minimized: false } }))
  }, [])
  const minimizeApp = useCallback((id) => {
    setWins((prev) => ({ ...prev, [id]: { ...prev[id], minimized: true } }))
  }, [])

  const windowApps = useMemo(() => apps.filter((app) => !app.era), [])
  const openIds = useMemo(
    () => windowApps.filter((app) => wins[app.id]?.open).map((app) => app.id),
    [wins, windowApps],
  )
  const focused = useMemo(() => {
    const open = windowApps.filter((app) => wins[app.id]?.open && !wins[app.id]?.minimized)
    if (!open.length) return null
    return open.sort((a, b) => (wins[b.id].z ?? 0) - (wins[a.id].z ?? 0))[0]
  }, [wins, windowApps])

  useEffect(() => {
    const onKey = (event) => {
      if (era) {
        if (event.key === 'Escape') leave2026()
        return
      }
      const typing = ['INPUT', 'TEXTAREA'].includes(event.target.tagName)
      if (typing && event.key !== 'Escape') return
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setSpot((v) => !v)
        setPad(false)
      }
      if ((event.metaKey || event.ctrlKey) && event.key === ' ') {
        event.preventDefault()
        setSpot((v) => !v)
      }
      if (event.key === 'Escape') {
        setSpot(false)
        setPad(false)
        setNote(false)
      }
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'w' && focused) {
        event.preventDefault()
        closeApp(focused.id)
      }
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'm' && focused) {
        event.preventDefault()
        minimizeApp(focused.id)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [era, focused, closeApp, minimizeApp, leave2026])

  return (
    <div className="mac-root">
      <AnimatePresence>{!booted && <Boot key="boot" onDone={finishBoot} />}</AnimatePresence>
      {booted && !era && (
        <>
          <MenuBar
            clock={clock}
            focusedLabel={focused?.title}
            onEnter2026={enter2026}
            onOpen={openApp}
            onSpotlight={() => setSpot(true)}
            onLaunchpad={() => setPad(true)}
            onNotice={() => setNote((v) => !v)}
          />
          <div className="mac-desktop">
            <Desk clock={clock} onOpenPhoto={() => openApp('about')} onEnter2026={enter2026} />
            <AnimatePresence>
              {windowApps.map((app) => {
                const state = wins[app.id]
                if (!state?.open || state.minimized) return null
                const Body = bodies[app.id]
                return (
                  <Window
                    key={app.id}
                    app={{ ...app, ...state }}
                    z={state.z}
                    onFocus={focusApp}
                    onClose={closeApp}
                    onMinimize={minimizeApp}
                  >
                    <Body onEnter2026={enter2026} onOpen={openApp} />
                  </Window>
                )
              })}
            </AnimatePresence>
            <AnimatePresence>
              {note && (
                <motion.aside
                  className="mac-toast"
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 40, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                >
                  <p className="mac-toast-app">Portfolio</p>
                  <strong>Open the site from the dock</strong>
                  <button
                    type="button"
                    onClick={() => {
                      setNote(false)
                      enter2026()
                    }}
                  >
                    Open
                  </button>
                  <button type="button" className="mac-toast-x" onClick={() => setNote(false)} aria-label="Dismiss">
                    ×
                  </button>
                </motion.aside>
              )}
            </AnimatePresence>
          </div>
          <Dock
            openIds={openIds}
            onOpen={openApp}
            onRestore={restoreApp}
            onEnter2026={enter2026}
            onLaunchpad={() => setPad(true)}
          />
          <AnimatePresence>
            {spot && <Spotlight key="spot" open onClose={() => setSpot(false)} onOpen={openApp} onEnter2026={enter2026} />}
          </AnimatePresence>
          <AnimatePresence>
            {pad && <Launchpad key="pad" open onClose={() => setPad(false)} onOpen={openApp} onEnter2026={enter2026} />}
          </AnimatePresence>
        </>
      )}
      <AnimatePresence>{booted && era && <Era2026 key="era" onBack={leave2026} />}</AnimatePresence>
    </div>
  )
}

export default App
