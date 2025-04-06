import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {LanguageProvider} from './context/LanguageContext.tsx'
import './styles/index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)
