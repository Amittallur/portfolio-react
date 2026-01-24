import { Button, Chip, Image } from '@nextui-org/react'
import { motion } from 'framer-motion'
import profile from '../assets/amit.jpg'

const MotionButton = motion(Button)

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      className="group relative overflow-hidden rounded-3xl border border-white/5 bg-black/40 px-6 py-10 shadow-2xl shadow-cyan-500/20 backdrop-blur transition-transform transition-shadow duration-500 hover:-translate-y-1 hover:border-cyan-400/70 hover:shadow-cyan-500/40 md:px-10 md:py-14"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 140, damping: 20 }}
        className="grid gap-10 md:grid-cols-[1.6fr,1fr] md:items-center"
      >
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-cyan-200 transition-colors duration-300 group-hover:border-cyan-300 group-hover:bg-cyan-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 group-hover:bg-cyan-300" />
            <span>Full Stack Developer</span>
          </div>
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold leading-tight text-zinc-50 md:text-5xl">
              Building performant, beautiful experiences with
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
                {' '}
                React and Node.js
              </span>
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-zinc-300 md:text-base">
              I am Amit Tallur, a developer focused on crafting responsive, production-ready interfaces and APIs. I love
              turning complex business problems into delightful digital products using React.js, Next.js, Node.js, and
              AWS.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <MotionButton
              as="a"
              href="#experience"
              color="primary"
              size="md"
              radius="full"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.96, y: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 16 }}
              className="bg-gradient-to-r from-cyan-500 to-sky-500 px-6 text-sm font-semibold text-white shadow-lg shadow-cyan-500/40"
            >
              View Experience
            </MotionButton>
            <MotionButton
              as="a"
              href="#contact"
              variant="bordered"
              radius="full"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.96, y: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              className="border-cyan-400/60 bg-white/5 px-6 text-sm font-semibold text-cyan-200 backdrop-blur"
            >
              Connect with me
            </MotionButton>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400">
            <Chip
              size="sm"
              color="default"
              variant="flat"
              className="bg-white/5 text-zinc-200 transition-transform transition-colors duration-300 hover:-translate-y-0.5 hover:bg-cyan-500/10"
            >
              React.js • Next.js • TypeScript
            </Chip>
            <Chip
              size="sm"
              color="default"
              variant="flat"
              className="bg-white/5 text-zinc-200 transition-transform transition-colors duration-300 hover:-translate-y-0.5 hover:bg-cyan-500/10"
            >
              Node.js • Express.js • REST APIs
            </Chip>
            <span className="text-xs text-zinc-400">Belgaum, Karnataka, India · 2+ years experience</span>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 140, damping: 18 }}
          whileHover={{ scale: 1.03, rotate: -1.5 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-cyan-500 via-sky-400 to-emerald-400 opacity-60 blur-xl transition duration-500 group-hover:opacity-90 group-hover:blur-[26px]" />
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-4 transition-transform duration-500 group-hover:-translate-y-1">
              <Image
                isBlurred
                src={profile}
                alt="Amit Tallur"
                width={220}
                height={220}
                className="h-52 w-52 rounded-2xl object-cover md:h-60 md:w-60"
              />
              <div className="mt-4 space-y-1">
                <p className="text-sm font-semibold text-zinc-50">Currently</p>
                <p className="text-xs text-zinc-300">Full Stack Developer at Sedona Management Solutions</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Hero
