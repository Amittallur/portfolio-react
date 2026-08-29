import { useEffect, useRef, useState } from 'react'
import { apps, profile } from '../data/site'

const Terminal = ({ onOpen, onEnter2026 }) => {
  const [lines, setLines] = useState(['Terminal. Type help.'])
  const [value, setValue] = useState('')
  const end = useRef(null)

  useEffect(() => {
    end.current?.scrollIntoView({ block: 'end' })
  }, [lines])

  const run = (raw) => {
    const input = raw.trim().toLowerCase()
    const print = (text) => setLines((prev) => [...prev, `› ${raw}`, text])
    if (!input) return
    if (input === 'help') {
      print('whoami · ls · open about|experience|projects|craft|mail · 2026 · contact · clear')
      return
    }
    if (input === 'whoami') {
      print(`${profile.name} — ${profile.line}`)
      return
    }
    if (input === 'ls') {
      print(apps.map((app) => app.id).join('  '))
      return
    }
    if (input === 'clear') {
      setLines([])
      return
    }
    if (input === '2026' || input === 'open 2026') {
      print('Opening 2026…')
      onEnter2026()
      return
    }
    if (input === 'contact') {
      print('amittalluratom@gmail.com · +91 7996389821')
      return
    }
    if (input.startsWith('open ')) {
      const id = input.slice(5).trim()
      const map = {
        about: 'about',
        work: 'work',
        experience: 'work',
        projects: 'projects',
        craft: 'skills',
        skills: 'skills',
        mail: 'contact',
        contact: 'contact',
        finder: 'welcome',
        welcome: 'welcome',
      }
      const target = map[id]
      if (target) {
        print(`Opening ${target}`)
        onOpen(target)
        return
      }
    }
    print(`command not found: ${raw}`)
  }

  return (
    <div className="term">
      {lines.map((line, i) => (
        <p key={`${line}-${i}`}>{line}</p>
      ))}
      <form
        onSubmit={(event) => {
          event.preventDefault()
          run(value)
          setValue('')
        }}
      >
        <span>amit ~ %</span>
        <input value={value} onChange={(event) => setValue(event.target.value)} autoFocus spellCheck={false} />
      </form>
      <div ref={end} />
    </div>
  )
}

export default Terminal
