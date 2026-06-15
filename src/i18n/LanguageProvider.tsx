import { useMemo, useState, type ReactNode } from 'react';
import { LanguageContext } from './LanguageContext';
import type { Lang } from '../types';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  const value = useMemo(() => ({ lang, setLang }), [lang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
