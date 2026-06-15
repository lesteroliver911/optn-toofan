import { LanguageSwitcher } from './LanguageSwitcher';
import { Container } from './ui/Container';
import { useLang, fontClassFor } from '../i18n/useLang';
import { useStrings } from '../i18n/strings';
import type { TabId } from '../types';

type HeaderProps = {
  activeTab: TabId;
  onTabSelect: (tab: TabId) => void;
  onSubmitConcern: () => void;
  /** Render accent colour for Parents view. */
  green?: boolean;
};

const NAV_TABS: TabId[] = ['overview', 'map', 'news', 'learn', 'parents', 'community'];

export function Header({ activeTab, onTabSelect, onSubmitConcern, green }: HeaderProps) {
  const { lang } = useLang();
  const s = useStrings(lang);
  const bg = green ? 'bg-parentGreen' : 'bg-indigoInk';

  return (
    <header className={`${bg} ${fontClassFor(lang)} sticky top-0 z-[1100] w-full`}>
      <Container className="flex items-center justify-between h-16 gap-3">

        {/* Brand */}
        <button
          onClick={() => onTabSelect('overview')}
          className="flex items-center flex-shrink-0"
          aria-label="Go to overview"
        >
          <img
            src="/toofan-logo.png"
            alt={s.appName}
            className="h-9 md:h-10 w-auto object-contain"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </button>

        {/* Desktop nav tabs */}
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center" aria-label="Main navigation">
          {NAV_TABS.map((tab) => {
            const isActive = tab === activeTab;
            return (
              <button
                key={tab}
                onClick={() => onTabSelect(tab)}
                aria-current={isActive ? 'page' : undefined}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-white text-indigoInk'
                    : 'text-white/75 hover:text-white hover:bg-white/15'
                }`}
              >
                {s.tabs[tab]}
              </button>
            );
          })}
        </nav>

        {/* Right cluster: Submit CTA + language dropdown */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Submit a concern CTA */}
          <button
            onClick={onSubmitConcern}
            aria-label={s.community.submitButton}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-toofanRed hover:bg-red-500 border border-toofanRed text-white text-xs font-semibold transition-colors"
          >
            {/* Megaphone icon */}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M2 5.5h1.5L9 2.5v9L3.5 8.5H2a1 1 0 01-1-1v-1a1 1 0 011-1z"
                stroke="white"
                strokeWidth="1.3"
                strokeLinejoin="round"
              />
              <path
                d="M3.5 8.5V11"
                stroke="white"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
            {/* Label — visible on md+ only */}
            <span className="hidden md:inline">{s.community.submitButton}</span>
          </button>

          <LanguageSwitcher />
        </div>
      </Container>
    </header>
  );
}
