import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Header from './components/Header'
import Hero from './sections/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
    </>
  )
}

export default App
