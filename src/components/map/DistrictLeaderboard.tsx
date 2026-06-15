import { useLang, fontClassFor } from '../../i18n/useLang';
import { useStrings } from '../../i18n/strings';
import { severityColor, districtName, SEVERITY_COLORS } from '../../lib/district';
import type { SeverityFilter } from '../../lib/district';
import type { District, Severity } from '../../types';

type DistrictLeaderboardProps = {
  items: District[];
  allDistricts: District[];
  rankById: Record<string, number>;
  maxCaseCount: number;
  severityCounts: Record<SeverityFilter, number>;
  filter: SeverityFilter;
  onFilterChange: (f: SeverityFilter) => void;
  selectedId: string | null;
  hoveredId: string | null;
  onSelect: (id: string) => void;
  onHover: (id: string | null) => void;
  stateCases: number;
};

const SEVERITY_TIERS: { id: SeverityFilter; dot?: Severity }[] = [
  { id: 'all' },
  { id: 'high', dot: 'high' },
  { id: 'medium', dot: 'medium' },
  { id: 'low', dot: 'low' },
];

export function DistrictLeaderboard({
  items,
  rankById,
  maxCaseCount,
  severityCounts,
  filter,
  onFilterChange,
  selectedId,
  hoveredId,
  onSelect,
  onHover,
  stateCases,
}: DistrictLeaderboardProps) {
  const { lang } = useLang();
  const m = useStrings(lang).map;

  return (
    <div className={`${fontClassFor(lang)} bg-surface rounded-2xl border border-line shadow-card p-4 space-y-3`}>
      {/* Header + chips */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-xs font-bold text-indigoInk uppercase tracking-wide">
          {m.rankedTitle}
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {SEVERITY_TIERS.map((tier) => {
            const isActive = filter === tier.id;
            return (
              <button
                key={tier.id}
                onClick={() => onFilterChange(tier.id)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold border transition-colors ${
                  isActive
                    ? 'bg-indigoInk text-white border-indigoInk'
                    : 'bg-canvas text-gray-500 border-line hover:border-indigoInk/30 hover:text-indigoInk'
                }`}
              >
                {tier.dot && (
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{
                      background: isActive ? 'white' : SEVERITY_COLORS[tier.dot],
                    }}
                    aria-hidden="true"
                  />
                )}
                {tier.id === 'all'
                  ? m.all
                  : tier.id === 'high'
                    ? m.high
                    : tier.id === 'medium'
                      ? m.medium
                      : m.low}
                <span className={isActive ? 'text-white/70' : 'text-gray-400'}>
                  {severityCounts[tier.id]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Count line */}
      <p className="text-[11px] text-gray-400">
        {m.showing} <span className="font-semibold text-indigoInk">{items.length}</span>{' '}
        {m.districtsWord}
      </p>

      {/* Ranked rows */}
      {items.length === 0 ? (
        <p className="text-sm text-gray-400 py-6 text-center">{m.noResults}</p>
      ) : (
        <ul className="space-y-1.5">
          {items.map((d) => {
            const isSelected = d.id === selectedId;
            const isHovered = d.id === hoveredId;
            const rank = rankById[d.id];
            const color = severityColor(d.severity);
            const barPct = Math.round((d.case_count / maxCaseCount) * 100);
            const share = Math.round((d.case_count / stateCases) * 100);

            return (
              <li key={d.id}>
                <button
                  onClick={() => onSelect(d.id)}
                  onMouseEnter={() => onHover(d.id)}
                  onMouseLeave={() => onHover(null)}
                  aria-current={isSelected ? 'true' : undefined}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl border text-left transition-colors min-h-[44px] ${
                    isSelected
                      ? 'border-indigoInk bg-indigoInk/5'
                      : isHovered
                        ? 'border-indigoInk/25 bg-canvas'
                        : 'border-line hover:border-indigoInk/20 hover:bg-canvas'
                  }`}
                >
                  {/* Rank */}
                  <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-500 flex-shrink-0 tabular-nums">
                    {rank}
                  </span>

                  {/* Name + mini-bar */}
                  <div className="flex-1 min-w-0 space-y-1">
                    <span className="block text-sm font-semibold text-indigoInk truncate">
                      {districtName(d, lang)}
                    </span>
                    <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${barPct}%`, background: color }}
                      />
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-3 flex-shrink-0 text-right">
                    <div className="hidden sm:block">
                      <span className="text-[10px] text-gray-400 block">{m.arrests}</span>
                      <span className="text-xs font-bold text-indigoInk tabular-nums">
                        {d.arrests.toLocaleString()}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 block">{m.cases}</span>
                      <span className="text-xs font-bold tabular-nums" style={{ color }}>
                        {d.case_count.toLocaleString()}
                      </span>
                    </div>
                    <div className="hidden sm:block">
                      <span className="text-[10px] text-gray-400 block">%</span>
                      <span className="text-xs font-bold text-gray-500 tabular-nums">{share}%</span>
                    </div>
                    <span
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ background: color }}
                      aria-hidden="true"
                    />
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
