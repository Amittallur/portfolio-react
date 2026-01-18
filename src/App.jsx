import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const App = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-zinc-900 text-white">
    <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(249,115,22,0.18),_transparent_55%)] opacity-60" />
    <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-6 md:px-8">
      <header className="flex items-center justify-between rounded-2xl border border-white/5 bg-black/20 px-4 py-3 shadow-md shadow-cyan-500/10 backdrop-blur transition hover:border-cyan-400/70 hover:shadow-cyan-500/30">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 ring-2 ring-cyan-400/60">
            <span className="text-lg font-semibold tracking-tight text-cyan-100">AT</span>
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-zinc-50">Amit Tallur</p>
            <p className="text-xs text-zinc-400">Full Stack Developer • React | Node.js | AWS</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-300 md:flex">
          <button
            onClick={() => scrollToSection('hero')}
            className="relative pb-1 transition hover:text-white after:absolute after:left-0 after:top-full after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-sky-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="relative pb-1 transition hover:text-white after:absolute after:left-0 after:top-full after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-sky-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="relative pb-1 transition hover:text-white after:absolute after:left-0 after:top-full after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-sky-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="relative pb-1 transition hover:text-white after:absolute after:left-0 after:top-full after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-sky-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </button>
        </nav>
        <select
          aria-label="Navigate sections"
          className="rounded-xl border border-white/10 bg-black/40 px-3 py-1 text-xs text-zinc-200 outline-none ring-cyan-400/60 focus:ring md:hidden"
          onChange={(event) => scrollToSection(event.target.value)}
        >
          <option value="hero">Home</option>
          <option value="about">About</option>
          <option value="experience">Experience</option>
          <option value="contact">Contact</option>
        </select>
      </header>
      <main className="mt-10 flex flex-1 flex-col gap-20 pb-10 md:mt-16 md:gap-24">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Work />
        </section>
        <section id="contact" className="mt-4">
          <About isContactOnly />
        </section>
      </main>
      <footer className="mt-2 flex items-center justify-between text-xs text-zinc-500">
        <p>© {new Date().getFullYear()} Amit Tallur. All rights reserved.</p>
        <p className="hidden md:inline">Built with React, NextUI, Tailwind CSS, and Framer Motion.</p>
      </footer>
    </div>
  </div>
)

export default App
