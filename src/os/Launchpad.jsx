import { motion } from 'framer-motion'
import { apps } from '../data/site'
import { MacIcon } from './MacIcon'

const Launchpad = ({ open, onClose, onOpen, onEnter2026 }) => {
  if (!open) return null
  return (
    <motion.div className="pad" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="pad-grid" onClick={(event) => event.stopPropagation()}>
        {apps.map((app, index) => (
          <motion.button
            key={app.id}
            type="button"
            initial={{ opacity: 0, y: 18, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.04 * index, type: 'spring', stiffness: 360, damping: 22 }}
            whileHover={{ y: -8 }}
            onClick={() => {
              if (app.era) onEnter2026()
              else onOpen(app.id)
              onClose()
            }}
          >
            <MacIcon name={app.icon} size={72} fill />
            <span>{app.label}</span>
          </motion.button>
        ))}
      </div>
      <p>Esc to close</p>
    </motion.div>
  )
}

export default Launchpad
