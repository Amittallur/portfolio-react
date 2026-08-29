import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/site'

const Boot = ({ onDone }) => {
  useEffect(() => {
    const timer = window.setTimeout(onDone, 2200)
    return () => window.clearTimeout(timer)
  }, [onDone])

  return (
    <motion.div
      className="mac-boot"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(8px)' }}
      transition={{ duration: 0.55 }}
    >
      <motion.p className="mac-boot-place" initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        {profile.place}
      </motion.p>
      <motion.h1 initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.12 }}>
        Amit Tallur
      </motion.h1>
      <motion.p
        className="mac-boot-line"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.28 }}
      >
        {profile.line}
      </motion.p>
      <div className="mac-boot-bar">
        <motion.div
          className="mac-boot-fill"
          initial={{ width: '4%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.85, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  )
}

export default Boot
