import { useLang } from '../../i18n/useLang';
import { useStrings } from '../../i18n/strings';
import { NEWS_CATEGORY_META, timeAgo } from '../../lib/news';
import type { NewsItem } from '../../types';

type NewsCardProps = {
  item: NewsItem;
};

const ExternalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path
      d="M5 2.5H2.5a.5.5 0 00-.5.5v6.5a.5.5 0 00.5.5H9a.5.5 0 00.5-.5V7M7 1.5H10.5m0 0V5M10.5 1.5L5.5 6.5"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function NewsCard({ item }: NewsCardProps) {
  const { lang } = useLang();
  const s = useStrings(lang);
  const n = s.news;
  const meta = NEWS_CATEGORY_META[item.category];
  const categoryLabel =
    item.category === 'enforcement'
      ? n.enforcement
      : item.category === 'policy'
        ? n.policy
        : item.category === 'awareness'
          ? n.awareness
          : n.explainer;

  return (
    <a
      href={item.source_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-surface rounded-2xl border border-line shadow-card hover:shadow-float hover:border-indigoInk/15 transition-all duration-200 p-4 min-h-[11rem]"
    >
      {/* Top row: category badge + time */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span
          className="text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full"
          style={{ background: meta.bgColor, color: meta.textColor }}
        >
          {categoryLabel}
        </span>
        <span className="text-[10px] text-gray-400 flex-shrink-0">{timeAgo(item.published_at)}</span>
      </div>

      {/* Headline */}
      <h2 className="text-sm font-semibold text-indigoInk leading-snug mb-2 flex-1 group-hover:text-indigoInk2 transition-colors">
        {item.headline}
      </h2>

      {/* Summary */}
      <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3">{item.ai_summary}</p>

      {/* Footer: source + read link */}
      <div className="flex items-center justify-between mt-auto gap-2">
        <div className="flex items-center gap-1.5 min-w-0">
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: meta.color }}
            aria-hidden="true"
          />
          <span className="text-[10px] font-semibold text-gray-400 truncate uppercase tracking-wide">
            {item.source_name}
          </span>
        </div>
        <span className="flex items-center gap-1 text-xs font-semibold text-indigoInk/50 group-hover:text-indigoInk transition-colors flex-shrink-0 min-h-[44px] items-center">
          <ExternalIcon />
          {n.readAtSource}
        </span>
      </div>
    </a>
  );
}
