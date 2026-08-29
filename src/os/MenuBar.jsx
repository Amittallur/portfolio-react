import { motion } from 'framer-motion'

const MenuBar = ({ clock, focusedLabel, onEnter2026, onOpen, onSpotlight, onLaunchpad, onNotice }) => (
  <motion.header
    className="mac-menubar"
    initial={{ y: -28, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
  >
    <button type="button" className="mac-apple" onClick={() => onOpen('welcome')} aria-label="Home">
      AT
    </button>
    <strong>{focusedLabel ?? 'Finder'}</strong>
    <button type="button" onClick={onLaunchpad}>
      Launchpad
    </button>
    <button type="button" onClick={onSpotlight}>
      Spotlight
    </button>
    <motion.button type="button" className="mac-era-cta" onClick={onEnter2026} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
      Portfolio
    </motion.button>
    <span className="mac-menubar-right">
      <button type="button" onClick={onNotice} title="Notifications">
        ●
      </button>
      <span>Belgaum, Karnataka, India</span>
      <time>{clock}</time>
    </span>
  </motion.header>
)

export default MenuBar
