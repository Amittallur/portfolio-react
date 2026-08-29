import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { apps } from '../data/site'
import { MacIcon } from './MacIcon'

const DockItem = ({ mouseX, title, open, onClick, name }) => {
  const ref = useRef(null)
  const distance = useTransform(mouseX, (value) => {
    const bounds = ref.current?.getBoundingClientRect()
    if (!bounds || !Number.isFinite(value)) return 160
    return value - bounds.x - bounds.width / 2
  })
  const size = useTransform(distance, [-140, 0, 140], [52, 78, 52])
  const lift = useTransform(distance, [-140, 0, 140], [0, -16, 0])
  const iconSize = useSpring(size, { stiffness: 380, damping: 26, mass: 0.35 })
  const iconLift = useSpring(lift, { stiffness: 380, damping: 26, mass: 0.35 })

  return (
    <motion.button
      ref={ref}
      type="button"
      className={`mac-dock-item ${open ? 'open' : ''}`}
      aria-label={title}
      onClick={onClick}
    >
      <span className="mac-dock-tip">{title}</span>
      <motion.span style={{ width: iconSize, height: iconSize, y: iconLift }} className="mac-dock-glyph">
        <MacIcon name={name} fill />
      </motion.span>
      <i className={`mac-dock-dot ${open ? 'is-on' : ''}`} />
    </motion.button>
  )
}

const Dock = ({ openIds, onOpen, onRestore, onEnter2026, onLaunchpad }) => {
  const mouseX = useMotionValue(Infinity)

  return (
    <div className="mac-dock-wrap">
      <motion.nav
        className="mac-dock"
        aria-label="Dock"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 280, damping: 24, delay: 0.15 }}
        onMouseMove={(event) => mouseX.set(event.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
      <DockItem mouseX={mouseX} title="Launchpad" name="launchpad" onClick={onLaunchpad} />
      <span className="mac-dock-rule" />
      {apps
        .filter((app) => !app.era)
        .map((app) => (
          <DockItem
            key={app.id}
            mouseX={mouseX}
            title={app.label}
            name={app.icon}
            open={openIds.includes(app.id)}
            onClick={() => (openIds.includes(app.id) ? onRestore(app.id) : onOpen(app.id))}
          />
        ))}
      <span className="mac-dock-rule" />
      <DockItem mouseX={mouseX} title="Portfolio" name="era" onClick={onEnter2026} />
      </motion.nav>
    </div>
  )
}

export default Dock
