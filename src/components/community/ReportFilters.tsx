import { useLang } from '../../i18n/useLang';
import { useStrings } from '../../i18n/strings';
import { REPORT_CATEGORY_META } from '../../lib/reports';
import type { ReportCategoryFilter, ReportSort } from '../../lib/reports';
import type { ReportCategory } from '../../types';

type ReportFiltersProps = {
  filter: ReportCategoryFilter;
  onFilterChange: (f: ReportCategoryFilter) => void;
  sort: ReportSort;
  onSortChange: (s: ReportSort) => void;
  showing: number;
  total: number;
  showSort?: boolean;
};

const CATEGORIES: ReportCategoryFilter[] = ['all', 'drug-use', 'drug-distribution', 'other'];

export function ReportFilters({
  filter,
  onFilterChange,
  sort,
  onSortChange,
  showing,
  total,
  showSort = true,
}: ReportFiltersProps) {
  const { lang } = useLang();
  const s = useStrings(lang);
  const c = s.community;

  function labelFor(cat: ReportCategoryFilter): string {
    switch (cat) {
      case 'all': return c.all;
      case 'drug-use': return c.drugUse;
      case 'drug-distribution': return c.drugDistribution;
      case 'other': return c.other;
      default: {
        const _exhaustive: never = cat;
        return _exhaustive;
      }
    }
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        {/* Category chips */}
        <div className="flex flex-wrap gap-1.5 flex-1">
          {CATEGORIES.map((cat) => {
            const isActive = filter === cat;
            const meta = cat === 'all' ? null : REPORT_CATEGORY_META[cat as ReportCategory];
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
              </button>
            );
          })}
        </div>

        {/* Sort toggle — only in list view */}
        {showSort && (
          <div className="flex rounded-full border border-line overflow-hidden text-[11px] font-semibold flex-shrink-0">
            {(['top', 'new'] as ReportSort[]).map((s_) => (
              <button
                key={s_}
                onClick={() => onSortChange(s_)}
                className={`px-3 py-1 transition-colors ${
                  sort === s_
                    ? 'bg-indigoInk text-white'
                    : 'bg-surface text-gray-500 hover:text-indigoInk'
                }`}
              >
                {s_ === 'top' ? c.sortTop : c.sortNew}
              </button>
            ))}
          </div>
        )}
      </div>

      <p className="text-[11px] text-gray-400">
        {c.showing}{' '}
        <span className="font-semibold text-indigoInk">{showing}</span>
        {' / '}
        <span className="font-semibold text-indigoInk">{total}</span>{' '}
        {c.reportsWord}
      </p>
    </div>
  );
}
