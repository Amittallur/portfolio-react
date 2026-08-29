import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { education, experiences, links, profile, projects, skillKits } from '../data/site'
import EraField from './EraField'

gsap.registerPlugin(ScrollTrigger)

const jobs = [
  {
    id: '01',
    tone: 'pink',
    title: experiences[0].company,
    role: experiences[0].role,
    when: experiences[0].period,
    where: experiences[0].location,
    text: experiences[0].bullets.slice(0, 3),
    tech: experiences[0].tech,
  },
  {
    id: '02',
    tone: 'violet',
    title: experiences[1].company,
    role: experiences[1].role,
    when: experiences[1].period,
    where: experiences[1].location,
    text: experiences[1].bullets.slice(0, 3),
    tech: experiences[1].tech,
  },
]

const projectCards = projects.map((project, index) => {
  const job = experiences[project.job]
  return {
    id: String(index + 1).padStart(2, '0'),
    tone: index === 0 ? 'lime' : 'orange',
    title: project.name,
    role: job.company,
    when: '',
    where: '',
    text: [project.summary],
    tech: job.tech.slice(0, 5),
  }
})

const Card = ({ card }) => (
  <article className={`era-card is-${card.tone}`}>
    <p className="era-card-id">[{card.id}]</p>
    <h2>{card.title}</h2>
    <p className="era-card-role">
      {card.role}
      {card.where ? ` · ${card.where}` : ''}
    </p>
    {card.when ? <p className="era-card-when">{card.when}</p> : null}
    <ul>
      {card.text.map((line) => (
        <li key={line}>{line}</li>
      ))}
    </ul>
    <p className="era-card-tech">{card.tech.join(' · ')}</p>
  </article>
)

const go = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const Era2026 = ({ onBack }) => {
  const root = useRef(null)
  const progress = useRef(0)

  useEffect(() => {
    const scroller = root.current
    if (!scroller) return undefined
    const bar = scroller.querySelector('.era-progress span')
    const meter = ScrollTrigger.create({
      scroller,
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        progress.current = self.progress
        if (bar) bar.style.transform = `scaleX(${self.progress})`
      },
    })
    const cardsEl = scroller.querySelectorAll('.era-card')
    const tweens = [...cardsEl].map((card) =>
      gsap.from(card, {
        y: 28,
        duration: 0.65,
        ease: 'power3.out',
        scrollTrigger: { scroller, trigger: card, start: 'top 90%' },
      }),
    )
    const ready = window.setTimeout(() => ScrollTrigger.refresh(), 180)
    return () => {
      window.clearTimeout(ready)
      tweens.forEach((t) => t.kill())
      meter.kill()
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])

  return (
    <motion.div ref={root} className="era" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="era-bg" aria-hidden>
        <EraField progress={progress} />
      </div>

      <nav className="era-nav">
        <div className="era-progress" aria-hidden>
          <span />
        </div>
        <div className="era-nav-inner">
          <button type="button" onClick={onBack}>
            Desktop
          </button>
          <div className="era-nav-links">
            <button type="button" onClick={() => go('work')}>
              Experience
            </button>
            <button type="button" onClick={() => go('projects')}>
              Projects
            </button>
            <button type="button" onClick={() => go('about')}>
              About
            </button>
            <button type="button" onClick={() => go('ask')}>
              Contact
            </button>
          </div>
        </div>
      </nav>

      <div className="era-page">
        <header className="era-hero" id="intro">
          <div className="era-hero-top">
            <div>
              <p className="era-hero-kicker">
                {profile.role} · {profile.tenure}
              </p>
              <h1>
                <span>Amit</span>
                <em>Tallur</em>
              </h1>
              <p className="era-hero-sub">{profile.place}</p>
            </div>
            <p className="era-hero-quote">
              <em>{profile.tagline}</em>
              {profile.pitch}
            </p>
          </div>
          <ul className="era-hero-stats">
            <li>
              <strong>{profile.tenure}</strong>
              <span>frontend</span>
            </li>
            <li>
              <strong>React · Next.js</strong>
              <span>healthcare and enterprise</span>
            </li>
            <li>
              <strong>2 roles</strong>
              <span>
                {experiences[0].code} and {experiences[1].code}
              </span>
            </li>
          </ul>
          <p className="era-hero-chips">
            {skillKits[0].samples.slice(0, 8).map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </p>
        </header>

        <section className="era-look" id="work">
          <p className="era-label">Experience</p>
          <div className="era-grid">
            {jobs.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        </section>

        <section className="era-look" id="projects">
          <p className="era-label">Projects</p>
          <div className="era-grid">
            {projectCards.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        </section>

        <section className="era-about" id="about">
          <h2>
            <span>Software</span>
            <span>engineer</span>
            <em>at {experiences[0].code}</em>
          </h2>
          <p>
            {profile.tagline} {profile.pitch}
          </p>
        </section>

        <section className="era-edu">
          <p className="era-label">Education</p>
          <div className="era-edu-grid">
            {education.map((item) => (
              <article key={item.year} className="era-edu-card">
                <p className="era-edu-year">{item.year}</p>
                <h2>{item.title}</h2>
                <p>{item.place}</p>
                <p className="era-edu-detail">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="era-index" id="craft">
          <p className="era-label">Skills</p>
          <ol>
            {skillKits.map((kit) => (
              <li key={kit.id}>
                <span>[{kit.id}]</span>
                <strong>{kit.name}</strong>
                <p>{kit.samples.join(' · ')}</p>
              </li>
            ))}
          </ol>
        </section>

        <footer className="era-end" id="ask">
          <p className="era-label">Contact</p>
          <a className="era-end-mail" href={links[2].href}>
            {profile.email}
          </a>
          <a className="era-end-phone" href={links[3].href}>
            {profile.phone}
          </a>
          <div className="era-links">
            {links.map((link) => (
              <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
          <p className="era-colophon">
            {profile.name} · {profile.place}
          </p>
        </footer>
      </div>
    </motion.div>
  )
}

export default Era2026
