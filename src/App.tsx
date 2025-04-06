import { useState, useEffect } from 'react';
import './styles/App.css';
import LoadingScreen from './layout/LoadingScreen';
import Header from './layout/Header';
import Footer from './layout/Footer';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';

function App() {
  const [loading, setLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);


  // Função chamada quando o loading completa sua animação de saída
  const handleLoadingComplete = () => {
    // Remove completamente o componente de loading
    setLoading(false);
    // Mostra o conteúdo com uma pequena animação de entrada
    setTimeout(() => {
      setContentVisible(true);
    }, 10);
  };

  return (
    <>
      {loading && (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      )}
        <div className={`main-content ${contentVisible ? 'visible' : ''}`}>
          <Header />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Footer />
          <ScrollToTop />
        </div>
    </>
  );
}

export default App;

