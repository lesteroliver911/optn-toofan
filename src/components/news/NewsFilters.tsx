import { useLang } from '../../i18n/useLang';
import { useStrings } from '../../i18n/strings';
import { NEWS_CATEGORY_META } from '../../lib/news';
import type { NewsCategoryFilter } from '../../lib/news';
import type { NewsCategory } from '../../types';

type CategoryCounts = Record<NewsCategory, number> & { all: number };

type NewsFiltersProps = {
  filter: NewsCategoryFilter;
  onFilterChange: (f: NewsCategoryFilter) => void;
  query: string;
  onQueryChange: (q: string) => void;
  counts: CategoryCounts;
  showing: number;
  total: number;
};

const CATEGORIES: NewsCategoryFilter[] = ['all', 'enforcement', 'policy', 'awareness', 'explainer'];

export function NewsFilters({
  filter,
  onFilterChange,
  query,
  onQueryChange,
  counts,
  showing,
  total,
}: NewsFiltersProps) {
  const { lang } = useLang();
  const s = useStrings(lang);
  const n = s.news;

  function labelFor(cat: NewsCategoryFilter): string {
    switch (cat) {
      case 'all':
        return n.all;
      case 'enforcement':
        return n.enforcement;
      case 'policy':
        return n.policy;
      case 'awareness':
        return n.awareness;
      case 'explainer':
        return n.explainer;
      default: {
        const _exhaustive: never = cat;
        return _exhaustive;
      }
    }
  }

  return (
    <div className="space-y-3">
      {/* Search */}
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.4" />
          <path d="M10 10l2.5 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder={n.searchPlaceholder}
          className="w-full pl-8 pr-3 h-9 rounded-xl border border-line bg-canvas text-sm text-indigoInk placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigoInk/20 focus:border-indigoInk/30 transition"
        />
      </div>

      {/* Category chips */}
      <div className="flex flex-wrap gap-1.5">
        {CATEGORIES.map((cat) => {
          const isActive = filter === cat;
          const count = cat === 'all' ? counts.all : counts[cat];
          const meta = cat === 'all' ? null : NEWS_CATEGORY_META[cat];

          return (
            <button
              key={cat}
              onClick={() => onFilterChange(cat)}
              className={`flex items-center gap-1 text-[11px] font-semibold px-3 py-1 rounded-full border transition-all ${
                isActive
                  ? 'bg-indigoInk text-white border-indigoInk shadow-sm'
                  : 'bg-surface text-gray-500 border-line hover:border-indigoInk/20 hover:text-indigoInk'
              }`}
            >
              {meta && (
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: isActive ? 'white' : meta.color }}
                  aria-hidden="true"
                />
              )}
              {labelFor(cat)}
              <span
                className={`ml-0.5 font-normal ${isActive ? 'text-white/70' : 'text-gray-400'}`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Count line */}
      <p className="text-[11px] text-gray-400">
        {n.showing}{' '}
        <span className="font-semibold text-indigoInk">{showing}</span>
        {' / '}
        <span className="font-semibold text-indigoInk">{total}</span>{' '}
        {n.storiesWord}
      </p>
    </div>
  );
}
