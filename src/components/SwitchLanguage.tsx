import '../styles/SwitchLanguage.css';
import { useLanguage } from '../context/LanguageContext';

function SwitchLanguage() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <label className="lang-switch" aria-label="Toggle language">
      <input
        type="checkbox"
        checked={language === 'en'}
        onChange={toggleLanguage}
      />
      <span className="lang-switch-track">
        <span className="lang-switch-handle" />
      </span>
    </label>
  );
}

export default SwitchLanguage;
