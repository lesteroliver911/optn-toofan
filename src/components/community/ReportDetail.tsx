import { useLang, fontClassFor } from '../../i18n/useLang';
import { useStrings } from '../../i18n/strings';
import { REPORT_CATEGORY_META } from '../../lib/reports';
import type { CommunityReport } from '../../types';

type ReportDetailProps = {
  report: CommunityReport;
  hasVoted: boolean;
  onVote: (id: string) => void;
};

const STATUS_STYLES: Record<CommunityReport['status'], string> = {
  new: 'bg-gray-100 text-gray-500',
  reviewing: 'bg-amber-50 text-amber-700',
  actioned: 'bg-green-50 text-green-700',
};

export function ReportDetail({ report, hasVoted, onVote }: ReportDetailProps) {
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

  return (
    <div className={`${fontClassFor(lang)} space-y-4`}>
      {/* Category + status */}
      <div className="flex flex-wrap gap-2">
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{ background: meta.bgColor, color: meta.textColor }}
        >
          {catLabel()}
        </span>
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${STATUS_STYLES[report.status]}`}>
          {statusLabel(report.status)}
        </span>
      </div>

      {/* Area + pincode */}
      <div className="bg-gray-50 rounded-xl p-3 space-y-1">
        <p className="text-xs font-semibold text-indigoInk">{report.areaLabel[lang]}</p>
        <p className="text-[11px] text-gray-400">
          {c.pincodeLabel}: {report.pincode} · {c.mapsTo}: {report.districtId.charAt(0).toUpperCase() + report.districtId.slice(1)}
        </p>
      </div>

      {/* Description */}
      <div>
        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-1">
          {c.descriptionLabel}
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">{report.description}</p>
      </div>

      {/* Vote */}
      <button
        onClick={() => onVote(report.id)}
        className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl border font-semibold text-sm transition-all ${
          hasVoted
            ? 'bg-indigoInk text-white border-indigoInk'
            : 'bg-canvas text-indigoInk border-indigoInk/30 hover:bg-indigoInk/5'
        }`}
      >
        <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M6 2L10 8H2L6 2Z" fill="currentColor" />
        </svg>
        {report.votes} {c.votes}
        {hasVoted && (
          <span className="text-xs font-normal text-white/70 ml-1">
            ({lang === 'en' ? 'voted' : lang === 'ml' ? 'വോട്ട് ചെയ്തു' : 'वोट दिया'})
          </span>
        )}
      </button>

      {/* Approximate location note */}
      <p className="text-[11px] text-gray-400 bg-amber-50 border border-amber-100 rounded-xl px-3 py-2 leading-relaxed">
        {c.approxLocationNote}
      </p>
    </div>
  );
}
