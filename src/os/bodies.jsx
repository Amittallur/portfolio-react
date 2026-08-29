import { useState } from 'react'
import { education, experiences, links, profile, projects, skillKits } from '../data/site'
import Terminal from './Terminal'

export const WelcomeBody = ({ onOpen, onEnter2026 }) => {
  const files = [
    { id: 'about', name: 'About.txt', kind: 'Document' },
    { id: 'work', name: 'Experience.pdf', kind: 'Document' },
    { id: 'skills', name: 'Stack.md', kind: 'Document' },
    { id: 'contact', name: 'Contact.vcf', kind: 'Card' },
    { id: 'terminal', name: 'Terminal.app', kind: 'Application' },
    { id: 'now', name: 'Portfolio', kind: 'Website', era: true },
  ]
  return (
    <div className="finder">
      <aside>
        <p className="finder-fav">Favorites</p>
        <button type="button" className="finder-link" onClick={() => onOpen('welcome')}>
          Home
        </button>
        <button type="button" className="finder-link" onClick={() => onOpen('work')}>
          Work
        </button>
        <button type="button" className="finder-link finder-link-era" onClick={onEnter2026}>
          Portfolio
        </button>
      </aside>
      <div>
        <p className="os-kicker">Home — Amit Tallur</p>
        <p className="finder-lead">
          {profile.pitch} Open{' '}
          <button type="button" className="inline-era" onClick={onEnter2026}>
            Portfolio
          </button>{' '}
          from the dock.
        </p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Kind</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file) => (
              <tr
                key={file.id}
                className={file.era ? 'era-row' : undefined}
                onDoubleClick={() => (file.era ? onEnter2026() : onOpen(file.id))}
                onClick={() => {
                  if (window.matchMedia('(pointer: coarse)').matches) {
                    if (file.era) onEnter2026()
                    else onOpen(file.id)
                  }
                }}
              >
                <td>{file.name}</td>
                <td>{file.kind}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="os-meta">Spotlight ⌘K · Terminal for commands · double-click a row</p>
      </div>
    </div>
  )
}

export const AboutBody = () => (
  <div className="os-copy">
    <h2>Amit Tallur</h2>
    <p>{profile.pitch}</p>
    <p>
      Applied Materials: six internal GIS and CloudOps tools. Sedona: healthcare RBAC, appointments, insurance, Twilio
      between staff and patients.
    </p>
    <h3>Education</h3>
    {education.map((item) => (
      <p key={item.year}>
        <strong>
          {item.year} · {item.title}
        </strong>
        <br />
        {item.place} · {item.detail}
      </p>
    ))}
  </div>
)

export const WorkBody = () => {
  const [active, setActive] = useState(0)
  const job = experiences[active]
  return (
    <div className="split">
      <aside>
        {experiences.map((item, index) => (
          <button key={item.company} type="button" className={active === index ? 'on' : ''} onClick={() => setActive(index)}>
            {item.company}
          </button>
        ))}
        <p className="os-kicker">Projects</p>
        {projects.map((project) => (
          <p key={project.name} className="os-meta">
            {project.name}
          </p>
        ))}
      </aside>
      <div className="os-copy">
        <h2>{job.role}</h2>
        <p className="os-meta">
          {job.company} · {job.period} · {job.location}
        </p>
        <ul>
          {job.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        <p className="os-meta">{job.tech.join(' · ')}</p>
        {active === 0 && (
          <section className="os-block">
            <h3>{projects[0].name}</h3>
            <p>{projects[0].summary}</p>
          </section>
        )}
        {active === 1 && (
          <section className="os-block">
            <h3>{projects[1].name}</h3>
            <p>{projects[1].summary}</p>
          </section>
        )}
      </div>
    </div>
  )
}

export const SkillsBody = () => {
  const [copied, setCopied] = useState('')
  return (
    <div className="os-copy">
      <h2>Stack</h2>
      <p>Click a skill to copy it.</p>
      {skillKits.map((kit) => (
        <section key={kit.id} className="os-block">
          <h3>{kit.name}</h3>
          <div className="chips">
            {kit.samples.map((sample) => (
              <button
                key={sample}
                type="button"
                onClick={() => {
                  navigator.clipboard?.writeText(sample)
                  setCopied(sample)
                }}
              >
                {sample}
              </button>
            ))}
          </div>
        </section>
      ))}
      {copied && <p className="os-meta">Copied “{copied}”</p>}
    </div>
  )
}

export const ContactBody = () => {
  const [sent, setSent] = useState(false)
  return (
    <div className="os-copy">
      <h2>Mail</h2>
      <p>Open to frontend and full-stack roles. Belgaum, Karnataka, India.</p>
      <form
        className="mail-form"
        onSubmit={(event) => {
          event.preventDefault()
          const data = new FormData(event.currentTarget)
          const body = encodeURIComponent(String(data.get('body') || ''))
          window.location.href = `mailto:amittalluratom@gmail.com?subject=${encodeURIComponent('Hello Amit')}&body=${body}`
          setSent(true)
        }}
      >
        <label>
          Message
          <textarea name="body" rows={5} required placeholder="A short note…" />
        </label>
        <button type="submit" className="mac-pill">
          Open in Mail
        </button>
      </form>
      {sent && <p className="os-meta">If nothing opened, use the links below.</p>}
      <ul className="os-links">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const TerminalBody = ({ onOpen, onEnter2026 }) => <Terminal onOpen={onOpen} onEnter2026={onEnter2026} />

export const bodies = {
  welcome: WelcomeBody,
  about: AboutBody,
  work: WorkBody,
  skills: SkillsBody,
  contact: ContactBody,
  terminal: TerminalBody,
}
