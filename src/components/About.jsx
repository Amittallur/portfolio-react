import { Button, Card, CardBody, Chip, Link } from '@nextui-org/react'
import { motion } from 'framer-motion'
const contactLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Amittallur',
    color: 'success',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/amittallur/',
    color: 'primary',
  },
  {
    label: 'Email',
    href: 'mailto:amittalluratom@gmail.com',
    color: 'secondary',
  },
]

const MotionButton = motion(Button)

const ContactActions = () => (
  <div className="flex flex-wrap justify-center gap-4">
    {contactLinks.map((item) => (
      <Link key={item.label} href={item.href} target="_blank" className="text-white">
        <MotionButton
          variant="shadow"
          color={item.color}
          whileHover={{ y: -4, scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 260, damping: 18 }}
          className="min-w-[120px] text-sm font-semibold text-white"
        >
          {item.label}
        </MotionButton>
      </Link>
    ))}
  </div>
)

const About = ({ isContactOnly = false }) => {
  if (isContactOnly) {
    return (
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.4 }}
        className="rounded-3xl border border-white/5 bg-black/30 p-6 shadow-xl shadow-cyan-500/10 backdrop-blur"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">Let us build something</p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-50">Open to full stack and frontend roles</h2>
            <p className="mt-2 text-sm text-zinc-300">
              Based in Belgaum, Karnataka, India. Available for remote opportunities and on-site roles across India.
            </p>
          </div>
          <ContactActions />
        </div>
      </motion.section>
    )
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.35 }}
      className="rounded-3xl border border-white/5 bg-black/30 p-6 shadow-xl shadow-cyan-500/10 backdrop-blur transition-transform transition-shadow duration-500 hover:-translate-y-1 hover:border-cyan-400/70 hover:shadow-cyan-500/30 md:p-8"
    >
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex-1 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">Professional Summary</p>
          <h2 className="text-2xl font-semibold text-zinc-50 md:text-3xl">
            Dynamic Full Stack Developer with 2+ years of hands-on experience.
          </h2>
          <p className="text-sm leading-relaxed text-zinc-300 md:text-base">
            Specializing in React.js, Node.js, and modern web technologies, with a proven track record of building
            scalable client applications, deploying to AWS cloud infrastructure, and delivering production-ready
            solutions. Comfortable owning features end-to-end, from design discussions to final deployment.
          </p>
          <p className="text-sm leading-relaxed text-zinc-300 md:text-base">
            I thrive in fast-paced environments, quickly adopting new technologies like Next.js and advanced UI
            ecosystems. My focus is on building pixel-perfect, accessible interfaces that feel fast, intuitive, and
            delightful to use.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Chip color="success" variant="flat">
              React.js • Next.js • TypeScript
            </Chip>
            <Chip color="primary" variant="flat">
              Node.js • Express.js • REST APIs
            </Chip>
            <Chip color="warning" variant="flat">
              MySQL • AWS • Cloud Deployments
            </Chip>
            <Chip color="secondary" variant="flat">
              Material UI • Formik • Yup
            </Chip>
          </div>
        </div>
        <div className="flex-1 space-y-4">
          <Card className="border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-zinc-900 transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-cyan-500/30">
            <CardBody className="space-y-3 text-sm text-zinc-200">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-zinc-400">
                <span>Current Role</span>
                <span>2024 · Present</span>
              </div>
              <p className="text-base font-semibold text-zinc-50">Full Stack Developer • Sedona Management Solutions</p>
              <ul className="space-y-1 text-sm leading-relaxed text-zinc-300">
                <li>Develop and maintain full stack React + Node.js applications for clients.</li>
                <li>Design MySQL schemas and implement performant APIs and data flows.</li>
                <li>Deploy scalable applications to AWS with a focus on reliability and cost.</li>
              </ul>
            </CardBody>
          </Card>
          <Card className="border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-zinc-900 transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-cyan-500/30">
            <CardBody className="space-y-3 text-sm text-zinc-200">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-zinc-400">
                <span>Previous Role</span>
                <span>2023 · 2024</span>
              </div>
              <p className="text-base font-semibold text-zinc-50">Frontend Developer • Applied Materials</p>
              <ul className="space-y-1 text-sm leading-relaxed text-zinc-300">
                <li>Transitioned into automation team, adopting Next.js within one week.</li>
                <li>Introduced Material UI, Formik, and Yup for rapid UI and form builds.</li>
                <li>Owned 6+ confidential front-end projects used across CloudOps teams.</li>
              </ul>
            </CardBody>
          </Card>
          <div className="mt-2">
            <ContactActions />
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default About
