import { useLanguage } from './LanguageContext';
import { translations } from '../translations/translations';

export const useTranslation = () => {
  const { language } = useLanguage();
  return translations[language];
};
