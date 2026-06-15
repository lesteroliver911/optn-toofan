import { useLang, fontClassFor } from '../../i18n/useLang';
import { useStrings } from '../../i18n/strings';
import { REPORT_CATEGORY_META } from '../../lib/reports';
import type { CommunityReport } from '../../types';

type ReportMarkerPopupProps = {
  report: CommunityReport;
  hasVoted: boolean;
  onVote: (id: string) => void;
  onOpenDetails: (id: string) => void;
};

const STATUS_BG: Record<CommunityReport['status'], string> = {
  new: 'bg-gray-100 text-gray-500',
  reviewing: 'bg-amber-50 text-amber-700',
  actioned: 'bg-green-50 text-green-700',
};

export function ReportMarkerPopup({
  report,
  hasVoted,
  onVote,
  onOpenDetails,
}: ReportMarkerPopupProps) {
  const { lang } = useLang();
  const s = useStrings(lang);
  const c = s.community;
  const meta = REPORT_CATEGORY_META[report.category];

  function catLabel(): string {
    switch (report.category) {
      case 'drug-use': return c.drugUse;
      case 'drug-distribution': return c.drugDistribution;
      case 'other': return c.other;
      default: {
        const _exhaustive: never = report.category;
        return _exhaustive;
      }
    }
  }

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
      className={`${fontClassFor(lang)} w-56 p-3 space-y-2.5`}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Badges */}
      <div className="flex items-center gap-1.5 flex-wrap">
        <span
          className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
          style={{ background: meta.bgColor, color: meta.textColor }}
        >
          {catLabel()}
        </span>
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${STATUS_BG[report.status]}`}>
          {statusLabel(report.status)}
        </span>
      </div>

      {/* Area */}
      <p className="text-xs font-bold text-indigoInk leading-snug">
        {report.areaLabel[lang]}
      </p>

      {/* Vote row */}
      <div className="flex items-center justify-between gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onVote(report.id);
          }}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold transition-all ${
            hasVoted
              ? 'bg-indigoInk text-white border-indigoInk'
              : 'bg-white text-indigoInk border-indigoInk/20 hover:border-indigoInk/40'
          }`}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path d="M5 1.5L9 7H1L5 1.5Z" fill="currentColor" />
          </svg>
          {report.votes} {c.votes}
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenDetails(report.id);
          }}
          className="text-xs font-semibold text-indigoInk underline underline-offset-2 hover:no-underline"
        >
          {c.viewDetails}
        </button>
      </div>
    </div>
  );
}
