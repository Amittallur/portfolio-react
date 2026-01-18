import { Card, CardBody, CardHeader, Chip, Divider } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Sedona Management Solutions',
    period: 'September 2024 – Present',
    location: 'Remote · India',
    tech: ['React.js', 'Express.js', 'Node.js', 'MySQL', 'AWS'],
    bullets: [
      'Develop and maintain full stack client applications with React.js and Express.js.',
      'Build responsive UIs implementing modern React patterns and best practices.',
      'Design and manage MySQL schemas with efficient querying and data handling.',
      'Deploy applications to AWS, ensuring scalability, reliability, and performance.',
      'Implement RESTful APIs enabling smooth frontend–backend integration.',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Applied Materials',
    period: 'July 2023 – August 2024',
    location: 'Bangalore, Karnataka',
    tech: ['React.js', 'Next.js', 'TypeScript', 'Redux', 'Material UI', 'Formik', 'Yup'],
    bullets: [
      'Transitioned from self-taught trainee to automation team contributor.',
      'Adopted Next.js within one week to deliver production-ready applications.',
      'Introduced Material UI, Formik, and Yup for rapid UI and form development.',
      'Owned 6+ in-house confidential front-end projects for CloudOps teams.',
      'Collaborated using Git and Jira, maintaining clean code and clear workflows.',
    ],
  },
]

const skillGroups = {
  frontend: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Redux', 'Material UI'],
  backend: ['Node.js', 'Express.js', 'RESTful APIs', 'MySQL'],
  tooling: ['AWS', 'Git', 'Jira', 'Formik', 'Yup'],
}

const education = [
  {
    degree: 'Bachelor of Engineering in Computer Science',
    institution: 'KLE Dr. MS Sheshgiri College of Engineering and Technology, Udyambag, Belgaum',
    year: '2022',
    details: 'CGPA: 8.74 / 10 (Distinction)',
  },
  {
    degree: 'Higher Secondary Education (10+2)',
    institution: "KLE Society's Raja Lakhamagouda Science College, Belgaum",
    year: '2018',
    details: 'Percentage: 90.33%',
  },
]

const Work = () => {
  const [activeSkillsTab, setActiveSkillsTab] = useState('frontend')

  return (
    <section className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-6"
      >
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">Experience</p>
            <h2 className="mt-1 text-2xl font-semibold text-zinc-50 md:text-3xl">Professional journey</h2>
            <p className="mt-2 max-w-xl text-sm text-zinc-300 md:text-base">
              From rapidly adopting Next.js in enterprise environments to shipping full stack features on AWS, I bring
              a balance of speed, quality, and ownership.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Chip
              size="sm"
              variant="flat"
              color="primary"
              className="transition-transform transition-shadow duration-300 hover:-translate-y-0.5 hover:shadow-cyan-500/30"
            >
              2+ years experience
            </Chip>
            <Chip
              size="sm"
              variant="flat"
              color="success"
              className="transition-transform transition-shadow duration-300 hover:-translate-y-0.5 hover:shadow-emerald-500/30"
            >
              Full stack and frontend
            </Chip>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((experience) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 220, damping: 20 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <Card className="h-full border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-zinc-900 transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-cyan-500/30">
                <CardHeader className="flex flex-col items-start gap-1 px-5 pb-3 pt-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-zinc-400">{experience.period}</p>
                  <p className="text-base font-semibold text-zinc-50">{experience.title}</p>
                  <p className="text-sm text-zinc-300">@ {experience.company}</p>
                  <p className="text-xs text-zinc-500">{experience.location}</p>
                </CardHeader>
                <CardBody className="space-y-3 px-5 pb-5 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {experience.tech.map((item) => (
                      <Chip
                        key={item}
                        size="sm"
                        variant="flat"
                        className="bg-white/5 text-xs text-zinc-200 transition-transform transition-colors duration-300 hover:-translate-y-0.5 hover:bg-cyan-500/10"
                      >
                        {item}
                      </Chip>
                    ))}
                  </div>
                  <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-zinc-300">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <Divider className="border-zinc-700/60" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
        className="grid gap-8 md:grid-cols-[1.3fr,1fr]"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-zinc-50">Technical skills</h3>
            <div className="flex gap-2 rounded-full border border-white/10 bg-black/40 p-1 text-xs text-zinc-300">
              {['frontend', 'backend', 'tooling'].map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveSkillsTab(key)}
                  className={`rounded-full px-3 py-1 capitalize transition ${
                    activeSkillsTab === key ? 'bg-cyan-500 text-white shadow shadow-cyan-500/40' : 'hover:bg-white/5'
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>
          <p className="text-sm text-zinc-300">
            A stack focused on building fast, reliable applications with clean, maintainable code and confident
            deployments.
          </p>
          <div className="flex flex-wrap gap-2">
            {skillGroups[activeSkillsTab].map((skill) => (
              <Chip
                key={skill}
                variant="flat"
                className="bg-gradient-to-r from-slate-800 to-slate-900 text-xs text-zinc-50 transition-transform transition-shadow duration-300 hover:-translate-y-0.5 hover:shadow-cyan-500/30"
              >
                {skill}
              </Chip>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-zinc-50">Education</h3>
          <div className="space-y-3">
            {education.map((item) => (
              <Card
                key={item.degree}
                className="border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-zinc-900 transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-cyan-500/30"
              >
                <CardBody className="space-y-1 px-4 py-3">
                  <p className="text-sm font-semibold text-zinc-50">{item.degree}</p>
                  <p className="text-xs text-zinc-300">{item.institution}</p>
                  <p className="text-xs text-zinc-400">
                    {item.year} · {item.details}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Work
