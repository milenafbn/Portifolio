import { useEffect, useState, useRef } from 'react';
import { useTranslation } from '../context/useTranslation';

const DynamicText = () => {
  const t = useTranslation();
  const fullText = t.hero.dynamicText;
  const [displayText, setDisplayText] = useState('');
  const speed = 50;
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    let index = 0;
    let timer: ReturnType<typeof setTimeout>;
    setDisplayText(''); 
    const typeText = () => {
      if (index < fullText.length) {
        setDisplayText(prev => prev + fullText.charAt(index));
        index++;
        const randomSpeed = speed + Math.random() * 50;
        timer = setTimeout(typeText, randomSpeed);
      }
    };
    const startTimer = setTimeout(() => typeText(), 1000);

    return () => {
      clearTimeout(timer);
      clearTimeout(startTimer);
    };
  }, [fullText]);

    const highlightKeywords = (text: string) => {
        const keywords = ['efficient', 'user-friendly', 'learning', 'improving', 'eficientes', 'aprendendo', 'melhorando'];
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
    />
  );
};

export default DynamicText;
