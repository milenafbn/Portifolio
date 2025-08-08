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
import { LanguageProvider } from './context/LanguageContext';


function App() {

  return (
    <>
      <LanguageProvider>
        <CustomCursor />
        <Header />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
        <ScrollToTop />
      </LanguageProvider>
    </>
  )
}

export default App
