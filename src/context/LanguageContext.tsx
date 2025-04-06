// src/context/LanguageContext.tsx
import React, { createContext, useState, ReactNode, useContext } from 'react';
import { Traducoes } from '../layout/Traducoes';

type Idioma = 'pt' | 'en';

interface LanguageContextProps {
  idioma: Idioma;
  setIdioma: (idioma: Idioma) => void;
  textos: typeof Traducoes['pt'];
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [idioma, setIdioma] = useState<Idioma>('pt');
  const textos = Traducoes[idioma] as typeof Traducoes['pt'];

  return (
    <LanguageContext.Provider value={{ idioma, setIdioma, textos }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage precisa estar dentro de LanguageProvider');
  return context;
};
