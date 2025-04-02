import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Header from './components/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
    </>
  )
}

export default App
