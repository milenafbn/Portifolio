import { useState } from 'react'
import './styles/App.css'
import Header from './components/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
    </>
  )
}

export default App
