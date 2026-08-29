import { motion } from 'framer-motion'
import profile from '../assets/amit.jpg'
import { MacIcon } from './MacIcon'

const Desk = ({ clock, onOpenPhoto, onEnter2026 }) => (
  <div className="desk">
    <div className="desk-wash" />
    <div className="desk-grain" />

    <motion.button
      type="button"
      className="era-alias"
      onClick={onEnter2026}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.96 }}
    >
      <MacIcon name="era" size={56} />
      <span>Portfolio</span>
    </motion.button>

    <motion.button
      type="button"
      className="polaroid"
      onClick={onOpenPhoto}
      drag
      dragMomentum={false}
      initial={{ rotate: -7, opacity: 0 }}
      animate={{ rotate: -5, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      whileHover={{ rotate: -2, scale: 1.03 }}
    >
      <img src={profile} alt="Amit Tallur" />
      <span>Belgaum</span>
    </motion.button>

    <motion.div
      className="desk-clock"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      <time>{clock}</time>
      <p>
        {new Date().toLocaleDateString('en-IN', {
          weekday: 'long',
          day: 'numeric',
          month: 'short',
        })}
      </p>
    </motion.div>
  </div>
)

export default Desk
