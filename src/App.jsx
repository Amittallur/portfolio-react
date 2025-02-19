import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'

const App = () => (
  <div className='min-h-screen bg-gradient-to-r from-zinc-800 to-gray-900'>
    <Hero/>
    <About/>
    <Work/>
   </div>
)

export default App