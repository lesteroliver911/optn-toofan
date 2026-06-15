import { useLang } from '../../i18n/useLang';
import { useStrings } from '../../i18n/strings';
import { SEVERITY_COLORS } from '../../lib/district';
import type { SeverityFilter } from '../../lib/district';
import type { Severity } from '../../types';

type SeverityDistributionProps = {
  counts: Record<SeverityFilter, number>;
  filter: SeverityFilter;
  onFilterChange: (f: SeverityFilter) => void;
};

const TIERS: { id: Severity; labelKey: 'high' | 'medium' | 'low' }[] = [
  { id: 'high', labelKey: 'high' },
  { id: 'medium', labelKey: 'medium' },
  { id: 'low', labelKey: 'low' },
];

export function SeverityDistribution({
  counts,
  filter,
  onFilterChange,
}: SeverityDistributionProps) {
  const { lang } = useLang();
  const m = useStrings(lang).map;
  const total = counts.all;

  return (
    <div className="bg-surface rounded-2xl border border-line shadow-card p-4 space-y-3">
      <h3 className="text-xs font-bold text-indigoInk uppercase tracking-wide">
        {m.severityTitle}
      </h3>

      {/* Segmented bar */}
      <div className="flex rounded-full overflow-hidden h-3 gap-px">
        {TIERS.map(({ id, labelKey }) => {
          const pct = total > 0 ? (counts[id] / total) * 100 : 0;
          const isActive = filter === id;
          return (
            <button
              key={id}
              onClick={() => onFilterChange(filter === id ? 'all' : id)}
              title={m[labelKey]}
              className={`h-full transition-all cursor-pointer ${isActive ? 'ring-2 ring-offset-1 ring-indigoInk' : 'hover:opacity-80'}`}
              style={{ width: `${pct}%`, background: SEVERITY_COLORS[id] }}
              aria-pressed={isActive}
            />
          );
        })}
      </div>

      {/* Legend row */}
      <div className="flex gap-3 flex-wrap">
        {TIERS.map(({ id, labelKey }) => {
          const isActive = filter === id;
          return (
            <button
              key={id}
              onClick={() => onFilterChange(filter === id ? 'all' : id)}
              className={`flex items-center gap-1.5 text-[11px] font-semibold transition-opacity ${isActive ? '' : 'opacity-60 hover:opacity-100'}`}
            >
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ background: SEVERITY_COLORS[id] }}
                aria-hidden="true"
              />
              <span className="text-gray-600">{m[labelKey]}</span>
              <span className="text-indigoInk font-bold tabular-nums">{counts[id]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
