import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import type { Lang } from '../types';

export type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider');
  return ctx;
}

/** Tailwind font-family class for the active language so native scripts render well. */
export function fontClassFor(lang: Lang): string {
  switch (lang) {
    case 'en':
      return 'font-sans';
    case 'ml':
      return 'font-ml';
    case 'hi':
      return 'font-hi';
    default: {
      const _exhaustive: never = lang;
      return _exhaustive;
    }
  }
}
