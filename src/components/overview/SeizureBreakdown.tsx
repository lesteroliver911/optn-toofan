import { useLang } from '../../i18n/useLang';
import { useStrings } from '../../i18n/strings';
import { stateTotals } from '../../lib/overview';
import { formatKg, formatNumber } from '../../lib/overview';

const ROWS = [
  { color: '#E4453A', labelKey: 'mdmaSeized' as const, value: stateTotals.mdmaKg, unit: 'kg' },
  { color: '#F2A33A', labelKey: 'cannabisSeized' as const, value: stateTotals.cannabisKg, unit: 'kg' },
  { color: '#9AA1B4', labelKey: 'beedis' as const, value: stateTotals.beedis, unit: 'pcs' },
];

const maxVal = Math.max(stateTotals.mdmaKg, stateTotals.cannabisKg, stateTotals.beedis);

export function SeizureBreakdown() {
  const { lang } = useLang();
  const s = useStrings(lang);
  const ov = s.overview;

  return (
    <div className="bg-surface rounded-2xl border border-line shadow-card p-4 flex flex-col gap-3">
      <h3 className="text-sm font-bold text-indigoInk">{ov.seizuresTitle}</h3>
      <div className="flex flex-col gap-3">
        {ROWS.map((row) => {
          const displayLabel =
            row.labelKey === 'mdmaSeized'
              ? ov.mdmaSeized
              : row.labelKey === 'cannabisSeized'
                ? ov.cannabisSeized
                : ov.beedis;
          const displayValue =
            row.unit === 'kg'
              ? formatKg(row.value as number)
              : formatNumber(row.value as number);
          const pct = ((row.value as number) / maxVal) * 100;

          return (
            <div key={row.labelKey} className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-gray-500">{displayLabel}</span>
                <span className="text-[11px] font-bold text-indigoInk tabular-nums">
                  {displayValue}
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
    </div>
  );
}
