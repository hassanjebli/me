
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import translationEN from './locales/en.json';
import translationFR from './locales/fr.json';

// The translations
const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  }
};

// Get language from localStorage or use default
const getDefaultLanguage = () => {
  const savedLanguage = localStorage.getItem('language');
  return savedLanguage || 'en';
};

// Initialize i18next
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: getDefaultLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already safes from XSS
    }
  });

// Set document direction based on language
const setDocumentDirection = (language: string) => {
  const dir = 'ltr';
  document.documentElement.dir = dir;
  document.documentElement.lang = language;
};

// Set direction on initial load
setDocumentDirection(getDefaultLanguage());

// Listen for language changes
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
  setDocumentDirection(lng);
});

export default i18n;
