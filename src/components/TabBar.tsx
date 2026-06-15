import { useLang, fontClassFor } from '../i18n/useLang';
import { useStrings } from '../i18n/strings';
import type { TabId } from '../types';

type TabBarProps = {
  active: TabId;
  onSelect: (tab: TabId) => void;
};

type TabDef = {
  id: TabId;
  icon: (active: boolean) => JSX.Element;
};

const MapIcon = ({ active }: { active: boolean }) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path
      d="M11 2C7.69 2 5 4.69 5 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.31-2.69-6-6-6z"
      fill={active ? '#12183A' : 'none'}
      stroke={active ? '#12183A' : '#9AA1B4'}
      strokeWidth="1.8"
    />
    <circle cx="11" cy="8" r="2" fill={active ? 'white' : '#9AA1B4'} />
  </svg>
);

const NewsIcon = ({ active }: { active: boolean }) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect
      x="3"
      y="4"
      width="16"
      height="14"
      rx="2"
      fill={active ? '#12183A' : 'none'}
      stroke={active ? '#12183A' : '#9AA1B4'}
      strokeWidth="1.8"
    />
    <path
      d="M7 8h8M7 11h6M7 14h4"
      stroke={active ? 'white' : '#9AA1B4'}
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const LearnIcon = ({ active }: { active: boolean }) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path
      d="M4 5a2 2 0 012-2h10a2 2 0 012 2v10l-3-2H6a2 2 0 01-2-2V5z"
      fill={active ? '#12183A' : 'none'}
      stroke={active ? '#12183A' : '#9AA1B4'}
      strokeWidth="1.8"
    />
    <path
      d="M8 9h6M8 12h4"
      stroke={active ? 'white' : '#9AA1B4'}
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const ParentsIcon = ({ active }: { active: boolean }) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="8" cy="7" r="2.5" fill={active ? '#1E7A52' : 'none'} stroke={active ? '#1E7A52' : '#9AA1B4'} strokeWidth="1.8" />
    <circle cx="15" cy="7" r="2" fill={active ? '#1E7A52' : 'none'} stroke={active ? '#1E7A52' : '#9AA1B4'} strokeWidth="1.6" />
    <path
      d="M3 18c0-3 2-5 5-5h2c3 0 5 2 5 5"
      stroke={active ? '#1E7A52' : '#9AA1B4'}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M15 11c2 0 4 1.5 4 4"
      stroke={active ? '#1E7A52' : '#9AA1B4'}
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const OverviewIcon = ({ active }: { active: boolean }) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect
      x="3" y="3" width="7" height="7" rx="1.5"
      fill={active ? '#12183A' : 'none'}
      stroke={active ? '#12183A' : '#9AA1B4'}
      strokeWidth="1.8"
    />
    <rect
      x="12" y="3" width="7" height="7" rx="1.5"
      fill={active ? '#12183A' : 'none'}
      stroke={active ? '#12183A' : '#9AA1B4'}
      strokeWidth="1.8"
    />
    <rect
      x="3" y="12" width="7" height="7" rx="1.5"
      fill={active ? '#12183A' : 'none'}
      stroke={active ? '#12183A' : '#9AA1B4'}
      strokeWidth="1.8"
    />
    <rect
      x="12" y="12" width="7" height="7" rx="1.5"
      fill={active ? '#12183A' : 'none'}
      stroke={active ? '#12183A' : '#9AA1B4'}
      strokeWidth="1.8"
    />
  </svg>
);

const CommunityIcon = ({ active }: { active: boolean }) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path
      d="M11 3.5C8 3.5 5.5 5.8 5.5 8.7c0 3.5 5.5 9.8 5.5 9.8s5.5-6.3 5.5-9.8C16.5 5.8 14 3.5 11 3.5z"
      fill={active ? '#12183A' : 'none'}
      stroke={active ? '#12183A' : '#9AA1B4'}
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <circle cx="11" cy="8.5" r="1.8" fill={active ? 'white' : '#9AA1B4'} />
  </svg>
);

const tabs: TabDef[] = [
  { id: 'overview', icon: (a) => <OverviewIcon active={a} /> },
  { id: 'map', icon: (a) => <MapIcon active={a} /> },
  { id: 'news', icon: (a) => <NewsIcon active={a} /> },
  { id: 'learn', icon: (a) => <LearnIcon active={a} /> },
  { id: 'parents', icon: (a) => <ParentsIcon active={a} /> },
  { id: 'community', icon: (a) => <CommunityIcon active={a} /> },
];

export function TabBar({ active, onSelect }: TabBarProps) {
  const { lang } = useLang();
  const s = useStrings(lang);

  return (
    <nav
      className={`${fontClassFor(lang)} md:hidden flex-shrink-0 bg-white border-t border-gray-100 flex`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === active;
        const label = s.tabs[tab.id];
        const activeColor = tab.id === 'parents' ? 'text-parentGreen' : 'text-indigoInk';
        return (
          <button
            key={tab.id}
            onClick={() => onSelect(tab.id)}
            className={`flex-1 flex flex-col items-center justify-center gap-0.5 py-2 transition-colors ${
              isActive ? activeColor : 'text-toofanGrey'
            }`}
            aria-current={isActive ? 'page' : undefined}
          >
            {tab.icon(isActive)}
            <span className="text-[10px] font-semibold">{label}</span>
          </button>
        );
      })}
    </nav>
  );
}
