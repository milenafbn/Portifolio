import React from 'react';
import '../styles/Hero.css';
import DynamicText from '../components/DynamicText';

const Hero: React.FC = () => {

    return (
        <div className="hero-container">
            <div className="hero-content">
                <p className="greeting">Olá! meu nome é</p>
                <h1 className="name">Milena Neves<span className="cursor">_</span></h1>
                <h2 className="title">Desenvolvedora Full-stack</h2>
                
                <DynamicText/>
                
                <button className='cv-button'>Baixar CV</button>
            </div>
            
            <div className="social-links">
                <a href="https://github.com/milenafbn" target="_blank" rel="noopener noreferrer" className="social-icon github">
                    <i className="bi-github"></i>
                </a>
                <a href="https://linkedin.com/in/seuusuario" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
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
