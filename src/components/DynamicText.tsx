import React, { useState, useEffect, useRef } from 'react';
import '../styles/Hero.css';
import { useLanguage } from '../context/LanguageContext';

const DynamicText: React.FC = () => {
        const { textos } = useLanguage();
        const [displayText, setDisplayText] = useState('');
        const textRef = useRef<HTMLParagraphElement>(null);
        const fullText = textos.hero[0].description.replace(/<[^>]*>?/gm, ''); // limpa HTML
        const speed = 50;
    
        useEffect(() => {
            let index = 0;
            let timer: ReturnType<typeof setTimeout>;
    
    // Para adicionar variações aleatórias na velocidade de digitação:
            const typeText = () => {
                if (index < fullText.length) {
                    setDisplayText(prev => prev + fullText.charAt(index));
                    index++;
                    const randomSpeed = speed + Math.random() * 50;
                    timer = setTimeout(typeText, randomSpeed);
                    }
            };
    
            const startTimer  = setTimeout(() => {
                typeText();
            }, 5000); 
    
            return () => {
                clearTimeout(timer);
                clearTimeout(startTimer);
            }
        
        }, [fullText])
    
          // Função para destacar palavras-chave
        const highlightKeywords = (text: string) => {
            const keywords = ['efficient', 'user-friendly', 'learning', 'improving', 'eficientes', 'user-friendly', 'aprendendo', 'melhorando'];
            let highlightedText = text;
            
            keywords.forEach(keyword => {
            const regex = new RegExp(`\\b${keyword}\\b`, 'g');
            highlightedText = highlightedText.replace(regex, `<span class="highlight">${keyword}</span>`);
            });
            
            return highlightedText;
        };

        return (
            <p 
                className="brief-description" 
                ref={textRef}
                dangerouslySetInnerHTML={{ __html: highlightKeywords(displayText) }}
            ></p>
        );
}

export default DynamicText;