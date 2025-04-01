import React, { useState, useEffect, useRef } from 'react';
import '../styles/Hero.css';
import {Button} from 'antd';

const Hero: React.FC = () => {

    const [displayText, setDisplayText] = useState('');
    const fullText = 'CCom foco em back-end, gosto de criar, estruturar e organizar soluções, eficientes, sempre explorando e estudando novas tecnologias.';
    const speed = 50;
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        let index = 0;
        let timer: ReturnType<typeof setTimeout>;

// Para adicionar variações aleatórias na velocidade de digitação:
        const typeText = () => {
            if (index < fullText.length) {
            setDisplayText(prev => prev + fullText.charAt(index));
            index++;
            // Velocidade base + variação aleatória
            const randomSpeed = speed + Math.random() * 50;
            timer = setTimeout(typeText, randomSpeed);
            }
        };

        const startTimer  = setTimeout(() => {
            typeText();
        }, 1000); 

        return () => {
            clearTimeout(timer);
            clearTimeout(startTimer);
        }
    
    }, [])

      // Função para destacar palavras-chave
    const highlightKeywords = (text: string) => {
        const keywords = ['back-end', 'criar', 'estruturar', 'organizar', 'eficientes'];
        let highlightedText = text;
        
        keywords.forEach(keyword => {
        const regex = new RegExp(`\\b${keyword}\\b`, 'g');
        highlightedText = highlightedText.replace(regex, `<span class="highlight">${keyword}</span>`);
        });
        
        return highlightedText;
    };

    return (
        <div className="hero-container">
            <div className="hero-content">
                <p className="greeting">Olá! meu nome é</p>
                <h1 className="name">Milena Neves<span className="cursor">_</span></h1>
                <h2 className="title">Desenvolvedora de Software</h2>

                
                
                <p 
                    className="brief-description" 
                    ref={textRef}
                    dangerouslySetInnerHTML={{ __html: highlightKeywords(displayText) }}
                ></p>
                
                <button className='cv-button'>Baixar CV</button>
            </div>
            
            <div className="social-links">
                <a href="https://github.com/milenafbn" target="_blank" rel="noopener noreferrer" className="social-icon github">
                    <i className="bi-github"></i>
                </a>
                <a href="https://linkedin.com/in/seuusuario" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                    <i className="bi-linkedin"></i>
                </a>
                <a href="mailto:seuemail@exemplo.com" className="social-icon email">
                    <i className="bi-envelope"></i>
                </a>
                <a href="https://wa.me/seunumero" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">
                    <i className="bi-whatsapp"></i>
                </a>
            </div>
      </div>
    );
}

export default Hero;
