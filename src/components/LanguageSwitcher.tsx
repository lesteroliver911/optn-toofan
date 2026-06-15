import { useEffect, useRef, useState } from 'react';
import { useLang } from '../i18n/useLang';
import type { Lang } from '../types';

type LangOption = { id: Lang; label: string; short: string };

const LANGS: LangOption[] = [
  { id: 'en', label: 'English', short: 'EN' },
  { id: 'ml', label: 'മലയാളം', short: 'ML' },
  { id: 'hi', label: 'हिन्दी', short: 'HI' },
];

export function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [open]);

  const current = LANGS.find((l) => l.id === lang) ?? LANGS[0];

  return (
    <div ref={ref} className="relative flex-shrink-0">
      {/* Trigger */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold transition-colors"
      >
        {/* Globe icon */}
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <circle cx="7" cy="7" r="5.5" stroke="white" strokeWidth="1.2" />
          <ellipse cx="7" cy="7" rx="2.5" ry="5.5" stroke="white" strokeWidth="1.2" />
          <path d="M1.5 5h11M1.5 9h11" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
        <span>{current.short}</span>
        {/* Chevron */}
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          aria-hidden="true"
          className={`transition-transform duration-150 ${open ? 'rotate-180' : ''}`}
        >
          <path
            d="M2.5 3.75L5 6.25l2.5-2.5"
            stroke="white"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {open && (
        <div
          role="listbox"
          aria-label="Select language"
          className="absolute right-0 top-full mt-1.5 w-36 bg-white rounded-xl shadow-float border border-line z-[1600] overflow-hidden py-1"
        >
          {LANGS.map((l) => {
            const isActive = l.id === lang;
            return (
              <button
                key={l.id}
                role="option"
                aria-selected={isActive}
                onClick={() => {
                  setLang(l.id);
                  setOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'text-indigoInk bg-canvas'
                    : 'text-gray-600 hover:bg-canvas hover:text-indigoInk'
                }`}
              >
                <span>{l.label}</span>
                {isActive && (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path
                      d="M2.5 7l3.5 3.5 5.5-7"
                      stroke="#12183A"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
