import { LanguageSwitcher } from './LanguageSwitcher';
import { Container } from './ui/Container';
import { useLang, fontClassFor } from '../i18n/useLang';
import { useStrings } from '../i18n/strings';
import type { TabId } from '../types';

type HeaderProps = {
  activeTab: TabId;
  onTabSelect: (tab: TabId) => void;
  /** Render accent colour for Parents / parent-copilot view. */
  green?: boolean;
};

const NAV_TABS: TabId[] = ['overview', 'map', 'news', 'learn', 'parents', 'community'];

export function Header({ activeTab, onTabSelect, green }: HeaderProps) {
  const { lang } = useLang();
  const s = useStrings(lang);
  const bg = green ? 'bg-parentGreen' : 'bg-indigoInk';

  return (
    <header className={`${bg} ${fontClassFor(lang)} sticky top-0 z-[1100] w-full`}>
      <Container className="flex items-center justify-between h-16">

        {/* Brand */}
        <div className="flex items-center flex-shrink-0">
          <img
            src="/toofan-logo.png"
            alt={s.appName}
            className="h-9 md:h-10 w-auto object-contain"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </div>

        {/* Desktop nav tabs — hidden on mobile */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {NAV_TABS.map((tab) => {
            const isActive = tab === activeTab;
            const isParents = tab === 'parents';
            return (
              <button
                key={tab}
                onClick={() => onTabSelect(tab)}
                aria-current={isActive ? 'page' : undefined}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-white text-indigoInk'
                    : isParents && green
                      ? 'text-white/80 hover:text-white hover:bg-white/15'
                      : 'text-white/75 hover:text-white hover:bg-white/15'
                }`}
              >
                {s.tabs[tab]}
              </button>
            );
          })}
        </nav>

        {/* Language switcher */}
        <LanguageSwitcher />
      </Container>

    </header>
  );
}
