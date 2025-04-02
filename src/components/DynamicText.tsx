import React, { useState, useEffect, useRef } from 'react';
import '../styles/Hero.css';

const DynamicText: React.FC = () => {
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
            <p 
                className="brief-description" 
                ref={textRef}
                dangerouslySetInnerHTML={{ __html: highlightKeywords(displayText) }}
            ></p>
        );
}

export default DynamicText;