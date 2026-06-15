import { useLang } from '../i18n/useLang';
import type { Lang } from '../types';

const langs: { id: Lang; label: string }[] = [
  { id: 'en', label: 'EN' },
  { id: 'ml', label: 'ML' },
  { id: 'hi', label: 'HI' },
];

export function LanguageSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex items-center gap-0.5 bg-white/10 rounded-full p-0.5">
      {langs.map((l) => (
        <button
          key={l.id}
          onClick={() => setLang(l.id)}
          className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-colors ${
            lang === l.id
              ? 'bg-white text-indigoInk'
              : 'text-white/80 hover:text-white'
          }`}
          aria-pressed={lang === l.id}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
