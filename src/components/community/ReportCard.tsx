import { useLang, fontClassFor } from '../../i18n/useLang';
import { useStrings } from '../../i18n/strings';
import { REPORT_CATEGORY_META } from '../../lib/reports';
import type { CommunityReport } from '../../types';

type ReportCardProps = {
  report: CommunityReport;
  rank: number;
  hasVoted: boolean;
  onVote: (id: string) => void;
  onOpen: (id: string) => void;
  isSelected: boolean;
};

const STATUS_STYLES: Record<CommunityReport['status'], string> = {
  new: 'bg-gray-100 text-gray-500',
  reviewing: 'bg-amber-50 text-amber-700',
  actioned: 'bg-green-50 text-green-700',
};

export function ReportCard({ report, rank, hasVoted, onVote, onOpen, isSelected }: ReportCardProps) {
  const { lang } = useLang();
  const s = useStrings(lang);
  const c = s.community;
  const meta = REPORT_CATEGORY_META[report.category];

  function statusLabel(status: CommunityReport['status']): string {
    switch (status) {
      case 'new': return c.statusNew;
      case 'reviewing': return c.statusReviewing;
      case 'actioned': return c.statusActioned;
      default: {
        const _exhaustive: never = status;
        return _exhaustive;
      }
    }
  }

  return (
    <div
      className={`${fontClassFor(lang)} bg-surface rounded-xl border transition-all cursor-pointer ${
        isSelected ? 'border-indigoInk shadow-float' : 'border-line hover:border-indigoInk/20 hover:shadow-card'
      } p-3 flex gap-3`}
      onClick={() => onOpen(report.id)}
    >
      {/* Rank */}
      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-indigoInk/[0.06] flex items-center justify-center">
        <span className="text-[11px] font-bold text-indigoInk">{rank}</span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 space-y-1.5">
        <div className="flex items-start gap-1.5 flex-wrap">
          <span
            className="text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
            style={{ background: meta.bgColor, color: meta.textColor }}
          >
            {lang === 'en'
              ? report.category === 'drug-use'
                ? c.drugUse
                : report.category === 'drug-distribution'
                  ? c.drugDistribution
                  : c.other
              : report.category === 'drug-use'
                ? c.drugUse
                : report.category === 'drug-distribution'
                  ? c.drugDistribution
                  : c.other}
          </span>
          <span
            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${STATUS_STYLES[report.status]}`}
          >
            {statusLabel(report.status)}
          </span>
        </div>

        <p className="text-xs font-semibold text-indigoInk">{report.areaLabel[lang]}</p>
        <p className="text-[11px] text-gray-500 leading-relaxed line-clamp-2">{report.description}</p>
      </div>

      {/* Vote button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onVote(report.id);
        }}
        className={`flex-shrink-0 flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl border transition-all ${
          hasVoted
            ? 'bg-indigoInk text-white border-indigoInk'
            : 'bg-canvas text-gray-400 border-line hover:border-indigoInk/30 hover:text-indigoInk'
        }`}
        aria-label={`Vote for this report (${report.votes})`}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path
            d="M6 2L10 8H2L6 2Z"
            fill="currentColor"
          />
        </svg>
        <span className="text-[11px] font-bold tabular-nums">{report.votes}</span>
      </button>
    </div>
  );
}
