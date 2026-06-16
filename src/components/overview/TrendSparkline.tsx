import { useLang } from '../../i18n/useLang';
import { useStrings } from '../../i18n/strings';
import { caseProgression } from '../../data/overview';
import { formatNumber } from '../../lib/overview';

const W = 240;
const H = 80;
const PAD = { top: 10, right: 8, bottom: 20, left: 8 };

function buildPath(points: { x: number; y: number }[]): string {
  if (points.length < 2) return '';
  const [first, ...rest] = points;
  const moves = rest.map((p) => `L${p.x},${p.y}`).join(' ');
  return `M${first.x},${first.y} ${moves}`;
}

export function TrendSparkline() {
  const { lang } = useLang();
  const s = useStrings(lang);
  const ov = s.overview;

  const maxVal = Math.max(...caseProgression.map((p) => p.value));
  const minVal = 0;
  const innerW = W - PAD.left - PAD.right;
  const innerH = H - PAD.top - PAD.bottom;

  const pts = caseProgression.map((p, i) => ({
    x: PAD.left + (i / (caseProgression.length - 1)) * innerW,
    y: PAD.top + innerH - ((p.value - minVal) / (maxVal - minVal)) * innerH,
  }));

  const linePath = buildPath(pts);

  const lastPt = pts[pts.length - 1];
  const firstPt = pts[0];
  const areaPath = `${linePath} L${lastPt.x},${PAD.top + innerH} L${firstPt.x},${PAD.top + innerH} Z`;

  const finalValue = caseProgression[caseProgression.length - 1].value;

  return (
    <div className="bg-surface rounded-2xl border border-line shadow-card p-4 flex flex-col gap-2">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-bold text-indigoInk">{ov.momentumTitle}</h3>
        <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
          {ov.reportedFigures}
        </span>
      </div>

      <div className="flex items-end gap-3">
        <svg viewBox={`0 0 ${W} ${H}`} className="flex-1 min-w-0 h-20" aria-hidden="true">
          <defs>
            <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#12183A" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#12183A" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          <path d={areaPath} fill="url(#sparkGrad)" />

          <path
            d={linePath}
            stroke="#12183A"
            strokeWidth="2"
            fill="none"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Data dots */}
          {pts.map((p, i) => (
            <circle
              key={caseProgression[i].date}
              cx={p.x}
              cy={p.y}
              r={i === pts.length - 1 ? 4 : 2.5}
              fill={i === pts.length - 1 ? '#E4453A' : '#12183A'}
            />
          ))}

          {/* X-axis date labels */}
          {caseProgression.map((p, i) => {
            const x = PAD.left + (i / (caseProgression.length - 1)) * innerW;
            return (
              <text
                key={p.date}
                x={x}
                y={H - 4}
                textAnchor="middle"
                fontSize="8"
                fill="#9AA1B4"
                fontFamily="inherit"
              >
                {p.label}
              </text>
            );
          })}
        </svg>

        <div className="flex flex-col items-end flex-shrink-0">
          <span className="text-2xl font-bold text-indigoInk tabular-nums leading-none">
            {formatNumber(finalValue)}
          </span>
          <span className="text-[10px] text-gray-400 mt-0.5">{ov.cases}</span>
        </div>
      </div>
    </div>
  );
}
