import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { apps } from '../data/site'
import { MacIcon } from './MacIcon'

const Spotlight = ({ open, onClose, onOpen, onEnter2026 }) => {
  const [q, setQ] = useState('')
  const results = useMemo(() => {
    const query = q.trim().toLowerCase()
    return apps.filter(
      (app) =>
        !query ||
        app.label.toLowerCase().includes(query) ||
        app.title.toLowerCase().includes(query) ||
        app.id.includes(query),
    )
  }, [q])

  useEffect(() => {
    if (open) setQ('')
  }, [open])

  if (!open) return null

  return (
    <motion.div className="spot-scrim" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div
        className="spot"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-label="Spotlight"
        initial={{ y: -24, scale: 0.96, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 380, damping: 26 }}
      >
        <input
          autoFocus
          placeholder="Search"
          value={q}
          onChange={(event) => setQ(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Escape') onClose()
            if (event.key === 'Enter' && results[0]) {
              if (results[0].era) onEnter2026()
              else onOpen(results[0].id)
              onClose()
            }
          }}
        />
        <ul>
          {results.map((app) => (
            <li key={app.id}>
              <button
                type="button"
                onClick={() => {
                  if (app.era) onEnter2026()
                  else onOpen(app.id)
                  onClose()
                }}
              >
                <MacIcon name={app.icon} size={28} />
                <span>
                  {app.label}
                  <small>{app.era ? 'Full-page site' : 'Application'}</small>
                </span>
              </button>
            </li>
          ))}
        </ul>
        <p className="spot-hint">⌘K · Enter to open</p>
      </motion.div>
    </motion.div>
  )
}

export default Spotlight
