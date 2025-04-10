import { createContext, useContext } from 'react';
import zh from './zh';

export type Language = 'zh';
export type TranslationKeys = typeof zh;

const translations = {
  zh,
};

export const defaultLanguage: Language = 'zh';

export const I18nContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}>({
  language: defaultLanguage,
  setLanguage: () => {},
  t: (key: string) => key,
});

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};

export const translate = (language: Language, key: string): string => {
  const keys = key.split('.');
  let value: any = translations[language];

  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k];
    } else {
      return key;
    }
  }

  return typeof value === 'string' ? value : key;
}; 