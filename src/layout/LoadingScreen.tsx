import React, { useState, useEffect } from 'react';
import '../styles/LoadingScreen.css';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Incrementa o progresso gradualmente até 100%
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          // Quando atingir 100%, inicia a animação de saída
          setIsExiting(true);
          // Após a animação de saída (1s), notifica o componente pai
          setTimeout(() => {
            if (onLoadingComplete) onLoadingComplete();
          }, 1000);
          return 100;
        }
        // Velocidade de incremento ajustável (aumenta no final para parecer mais natural)
        const increment = prevProgress > 85 ? 1 : prevProgress > 60 ? 2 : 3;
        return Math.min(prevProgress + increment, 100);
      });
    }, 50); // Ajuste este valor para aumentar/diminuir a velocidade da contagem

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className={`loading-container ${isExiting ? 'exiting' : ''}`}>
      <div className="loading-content">
        <div className="progress-container">
          <div 
            className="progress-bar" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="progress-text">{progress}%</div>
      </div>
    </div>
  );
};

export default LoadingScreen;