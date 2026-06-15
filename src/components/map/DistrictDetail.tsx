import { useLang } from '../../i18n/useLang';
import { useStrings } from '../../i18n/strings';
import { severityColor } from '../../lib/district';
import type { District } from '../../types';

type DistrictDetailProps = {
  district: District;
  rank: number;
  stateCases: number;
};

export function DistrictDetail({ district, rank, stateCases }: DistrictDetailProps) {
  const { lang } = useLang();
  const m = useStrings(lang).map;
  const color = severityColor(district.severity);
  const share = Math.round((district.case_count / stateCases) * 100);
  const severityLabel =
    district.severity === 'high' ? m.high : district.severity === 'medium' ? m.medium : m.low;

  return (
    <div className="space-y-4">
      {/* Headline numbers */}
      <div className="flex items-stretch gap-3">
        <div className="flex-1 bg-canvas rounded-xl p-3">
          <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-1">
            {m.casesRegistered}
          </p>
          <p className="text-3xl font-bold tabular-nums leading-none" style={{ color }}>
            {district.case_count.toLocaleString()}
          </p>
        </div>
        <div className="flex-1 bg-canvas rounded-xl p-3">
          <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-1">
            {m.arrestsMade}
          </p>
          <p className="text-3xl font-bold tabular-nums leading-none text-indigoInk">
            {district.arrests.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Share of state cases */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[11px] font-semibold text-gray-500">{m.shareOfCases}</span>
          <span className="text-[11px] font-bold text-indigoInk tabular-nums">{share}%</span>
        </div>
        <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
          <div
            className="h-full rounded-full transition-all"
            style={{ width: `${Math.max(share, 2)}%`, background: color }}
          />
        </div>
      </div>

      {/* Meta grid */}
      <div className="grid grid-cols-3 gap-2">
        <MetaCell label={m.rankLabel} value={`#${rank}`} />
        <MetaCell label={m.legendTitle} value={severityLabel} valueColor={color} />
        <MetaCell label={m.asOf} value={district.as_of} />
      </div>

      {/* Source */}
      <a
        href={district.source_url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-semibold text-indigoInk hover:underline min-h-[44px]"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M5.5 3H3a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V8.5M8.5 1H13m0 0v4.5M13 1L6.5 7.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {m.viewSource}
      </a>

      <p className="text-xs text-gray-400 bg-canvas p-3 rounded-xl leading-relaxed">
        {m.transparency}
      </p>
    </div>
  );
}

function MetaCell({
  label,
  value,
  valueColor,
}: {
  label: string;
  value: string;
  valueColor?: string;
}) {
  return (
    <div className="bg-canvas rounded-xl p-2.5 text-center">
      <p className="text-[9px] text-gray-400 font-semibold uppercase tracking-wide mb-1 truncate">
        {label}
      </p>
      <p className="text-sm font-bold tabular-nums" style={valueColor ? { color: valueColor } : {}}>
        {value}
      </p>
    </div>
  );
}
