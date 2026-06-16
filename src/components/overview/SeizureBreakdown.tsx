import { useLang } from '../../i18n/useLang';
import { useStrings } from '../../i18n/strings';
import { stateTotals } from '../../lib/overview';

/** Weight-based seizures share one kg scale so proportions are honest. */
const WEIGHT_ROWS = [
  { color: '#F2A33A', labelKey: 'cannabisSeized' as const, kg: stateTotals.cannabisKg },
  { color: '#E4453A', labelKey: 'mdmaSeized' as const, kg: stateTotals.mdmaKg },
];

const maxKg = Math.max(...WEIGHT_ROWS.map((r) => r.kg));

function formatWeight(kg: number): string {
  if (kg < 1) return `${Math.round(kg * 1000)} g`;
  return `${kg.toFixed(kg < 10 ? 3 : 2)} kg`;
}

export function SeizureBreakdown() {
  const { lang } = useLang();
  const s = useStrings(lang);
  const ov = s.overview;

  return (
    <div className="bg-surface rounded-2xl border border-line shadow-card p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-bold text-indigoInk">{ov.seizuresTitle}</h3>
        <span className="text-[10px] text-gray-400">{ov.byWeight}</span>
      </div>

      {/* Weight bars on a shared kg scale */}
      <div className="flex flex-col gap-3">
        {WEIGHT_ROWS.map((row) => {
          const label = row.labelKey === 'cannabisSeized' ? ov.cannabisSeized : ov.mdmaSeized;
          const pct = Math.max((row.kg / maxKg) * 100, 1.5);
          return (
            <div key={row.labelKey} className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-gray-500">{label}</span>
                <span className="text-[11px] font-bold text-indigoInk tabular-nums">
                  {formatWeight(row.kg)}
                </span>
              </div>
              <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${pct}%`, background: row.color }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Count-based seizure (beedis) shown separately from kg */}
      <div className="flex items-center justify-between rounded-xl bg-canvas px-3 py-2">
        <span className="text-[11px] text-gray-500">{ov.beedis}</span>
        <span className="text-sm font-bold text-indigoInk tabular-nums">
          {stateTotals.beedis.toLocaleString('en-IN')}
          <span className="text-[10px] font-medium text-gray-400 ml-1">{ov.pieces}</span>
        </span>
      </div>

      {/* Honest note: district raids have recovered other substances too */}
      <p className="text-[10px] text-gray-400 leading-relaxed">{ov.seizuresNote}</p>
    </div>
  );
}
