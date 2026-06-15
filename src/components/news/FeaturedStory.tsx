import { useLang } from '../../i18n/useLang';
import { useStrings } from '../../i18n/strings';
import { NEWS_CATEGORY_META, formatDate, timeAgo } from '../../lib/news';
import type { NewsItem } from '../../types';

type FeaturedStoryProps = {
  item: NewsItem;
};

export function FeaturedStory({ item }: FeaturedStoryProps) {
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
      className="group block bg-indigoInk rounded-2xl overflow-hidden shadow-float hover:shadow-xl transition-all duration-200 w-full"
    >
      <div className="p-5 md:p-6">
        {/* Badges row */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 bg-white/10 px-2.5 py-1 rounded-full">
            {n.featured}
          </span>
          <span
            className="text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full"
            style={{ background: meta.bgColor, color: meta.textColor }}
          >
            {categoryLabel}
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-white font-bold text-base md:text-xl leading-snug mb-3 group-hover:text-white/90 transition-colors">
          {item.headline}
        </h2>

        {/* Summary */}
        <p className="text-white/65 text-sm leading-relaxed mb-5">{item.ai_summary}</p>

        {/* Footer */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: meta.color }}
              aria-hidden="true"
            />
            <span className="text-[11px] font-semibold text-white/60 uppercase tracking-wide">
              {item.source_name}
            </span>
            <span className="text-white/30 text-xs">·</span>
            <span className="text-[11px] text-white/50">{formatDate(item.published_at, lang)}</span>
            <span className="text-white/30 text-xs">·</span>
            <span className="text-[11px] text-white/50">{timeAgo(item.published_at)}</span>
          </div>
          <span className="text-xs font-semibold text-white/50 group-hover:text-white transition-colors flex items-center gap-1.5 min-h-[44px]">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path
                d="M5 2.5H2.5a.5.5 0 00-.5.5v6.5a.5.5 0 00.5.5H9a.5.5 0 00.5-.5V7M7 1.5H10.5m0 0V5M10.5 1.5L5.5 6.5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {s.news.readAtSource}
          </span>
        </div>
      </div>
    </a>
  );
}
