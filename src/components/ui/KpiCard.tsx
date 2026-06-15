type KpiCardProps = {
  label: string;
  value: string;
  sub?: string;
  /** Accent dot colour, e.g. a severity or category hue. */
  accent?: string;
};

/** Compact KPI tile for headline statistics. Uniform sizing and typography. */
export function KpiCard({ label, value, sub, accent }: KpiCardProps) {
  return (
    <div className="bg-surface rounded-xl border border-line shadow-card px-4 py-3 flex flex-col gap-0.5 min-w-0">
      <div className="flex items-center gap-1.5">
        {accent && (
          <span
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ background: accent }}
            aria-hidden="true"
          />
        )}
        <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide truncate">
          {label}
        </span>
      </div>
      <span className="text-xl md:text-2xl font-bold text-indigoInk leading-none tabular-nums">
        {value}
      </span>
      {sub && <span className="text-[11px] text-gray-400 truncate">{sub}</span>}
    </div>
  );
}
