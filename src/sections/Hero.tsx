import React from 'react';
import '../styles/Hero.css';
import { useTranslation } from '../context/useTranslation';
import DynamicText from '../components/DynamicText';

const Hero: React.FC = () => {
    const t = useTranslation();

    return (
        <div className="hero-container">
            <div className="hero-content-pt">
                <p className="greeting">{t.hero.greeting}</p>
                <h1 className="name">Milena Neves<span className="cursor">_</span></h1>
                <h2 className="title">{t.hero.title}</h2>
                
                <DynamicText/>
                
                <button className='cv-button'>{t.hero.cv}</button>
            </div>
            
            <div className="social-links">
                <a href="https://github.com/milenafbn" target="_blank" rel="noopener noreferrer" className="social-icon github">
                    <i className="bi-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/milena-neves-227739223/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                    <i className="bi-linkedin"></i>
                </a>
                <a href="mailto:milena.neves.dev@gmail.com" className="social-icon email">
                    <i className="bi-envelope"></i>
                </a>
            </div>
      </div>
    );
}

export default Hero;
