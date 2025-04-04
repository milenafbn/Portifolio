import { useState } from 'react'
import './styles/App.css'
import Header from './layout/Header'
import Footer from './layout/Footer'
import ScrollToTop from './components/ScrollToTop'
import CustomCursor from './components/CustomCursor'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'

function App() {

  return (
    <>
      <CustomCursor />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
