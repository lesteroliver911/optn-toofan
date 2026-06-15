import { useLang } from '../../i18n/useLang';
import { useStrings } from '../../i18n/strings';
import { districtName } from '../../lib/district';
import {
  topDistricts,
  maxCaseCount,
  caseShare,
  districtBarColor,
  formatNumber,
} from '../../lib/overview';
import type { TabId } from '../../types';

type Props = {
  onNavigate: (tab: TabId) => void;
};

export function DistrictBarChart({ onNavigate }: Props) {
  const { lang } = useLang();
  const s = useStrings(lang);
  const ov = s.overview;
  const top = topDistricts(8);

  return (
    <div className="bg-surface rounded-2xl border border-line shadow-card p-4 flex flex-col gap-3 h-full">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-bold text-indigoInk">{ov.casesByDistrict}</h3>
        <button
          onClick={() => onNavigate('map')}
          className="text-xs font-semibold text-indigoInk/70 hover:text-indigoInk flex items-center gap-1 transition-colors"
        >
          {ov.viewFullMap}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path
              d="M4.5 2.5L8.5 6L4.5 9.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-col gap-2 flex-1">
        {top.map((d) => {
          const pct = Math.round((d.case_count / maxCaseCount) * 100);
          const color = districtBarColor(d);
          const share = caseShare(d);
          return (
            <div key={d.id} className="flex items-center gap-2 min-w-0">
              <span className="text-[11px] text-gray-500 w-20 truncate flex-shrink-0 text-right">
                {districtName(d, lang)}
              </span>
              <div className="flex-1 relative h-5 rounded-full bg-gray-100 overflow-hidden min-w-0">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${pct}%`, background: color }}
                />
              </div>
              <div className="flex items-center gap-1 flex-shrink-0 w-20 justify-end">
                <span className="text-[11px] font-bold text-indigoInk tabular-nums">
                  {formatNumber(d.case_count)}
                </span>
                <span className="text-[10px] text-gray-400 tabular-nums">
                  {share.toFixed(0)}%
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
