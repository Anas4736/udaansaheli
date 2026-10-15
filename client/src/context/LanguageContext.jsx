import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from '../translations/en.js';
import { hi } from '../translations/hi.js';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Default to Hindi as primary target audience is rural Indian women entrepreneurs
  const [language, setLanguageState] = useState(() => {
    try {
      return localStorage.getItem('udaansaheli_lang') || 'hi';
    } catch {
      return 'hi';
    }
  });

  const [textSize, setTextSizeState] = useState(() => {
    try {
      return localStorage.getItem('udaansaheli_text_size') || 'normal';
    } catch {
      return 'normal';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('udaansaheli_lang', language);
    } catch (e) {
      console.warn('localStorage error', e);
    }
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    try {
      localStorage.setItem('udaansaheli_text_size', textSize);
    } catch (e) {
      console.warn('localStorage error', e);
    }
    document.body.classList.remove('text-size-normal', 'text-size-large', 'text-size-xlarge');
    document.body.classList.add(`text-size-${textSize}`);
  }, [textSize]);

  const toggleLanguage = () => {
    setLanguageState(prev => (prev === 'hi' ? 'en' : 'hi'));
  };

  const setLanguage = (lang) => {
    if (lang === 'hi' || lang === 'en') {
      setLanguageState(lang);
    }
  };

  const cycleTextSize = () => {
    setTextSizeState(prev => {
      if (prev === 'normal') return 'large';
      if (prev === 'large') return 'xlarge';
      return 'normal';
    });
  };

  const t = language === 'hi' ? hi : en;

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        setLanguage,
        textSize,
        cycleTextSize,
        setTextSize: setTextSizeState,
        t,
        isHindi: language === 'hi'
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
