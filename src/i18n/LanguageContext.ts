import { createContext } from 'react';
import type { LanguageContextValue } from './useLang';

export const LanguageContext = createContext<LanguageContextValue | null>(null);
