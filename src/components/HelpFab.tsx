import { useState } from 'react';
import { HelplinesSheet } from './HelplinesSheet';
import { useLang } from '../i18n/useLang';
import { useStrings } from '../i18n/strings';

/**
 * Globally mounted floating action button. Sits above the mobile tab bar
 * on small screens and drops to a lower offset on desktop where the tab
 * bar is hidden.
 */
export function HelpFab() {
  const [open, setOpen] = useState(false);
  const { lang } = useLang();
  const s = useStrings(lang);

  return (
    <>
      {/* bottom-20 (80px) clears the ~56px mobile tab bar + safe area.
          md:bottom-6 on desktop where TabBar is hidden. */}
      <button
        onClick={() => setOpen(true)}
        aria-label={s.helplines.fabLabel}
        className="fixed right-4 bottom-20 md:right-6 md:bottom-6 z-[1050] w-14 h-14 rounded-full bg-indigoInk text-white shadow-float flex items-center justify-center hover:bg-indigoInk/90 active:scale-95 transition-all"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 9.77a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .9h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {/* Red dot to indicate actionable numbers */}
        <span
          className="absolute top-1.5 right-1.5 w-3.5 h-3.5 rounded-full bg-toofanRed border-2 border-indigoInk flex items-center justify-center"
          aria-hidden="true"
        >
          <svg width="7" height="7" viewBox="0 0 8 8" fill="none">
            <path d="M4 1v6M1 4h6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <HelplinesSheet isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
