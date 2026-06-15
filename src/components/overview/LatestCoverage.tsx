import { useLang } from '../../i18n/useLang';
import { useStrings } from '../../i18n/strings';
import { newsItems } from '../../data/news';
import { timeAgo, NEWS_CATEGORY_META } from '../../lib/news';
import type { TabId } from '../../types';

type Props = {
  onNavigate: (tab: TabId) => void;
};

export function LatestCoverage({ onNavigate }: Props) {
  const { lang } = useLang();
  const s = useStrings(lang);
  const ov = s.overview;

  const latest = newsItems
    .filter((n) => n.is_toofan_relevant)
    .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime())
    .slice(0, 3);

  return (
    <div className="bg-surface rounded-2xl border border-line shadow-card p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-bold text-indigoInk">{ov.latestCoverage}</h3>
        <button
          onClick={() => onNavigate('news')}
          className="text-xs font-semibold text-indigoInk/70 hover:text-indigoInk flex items-center gap-1 transition-colors"
        >
          {ov.viewAllNews}
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

      <div className="flex flex-col divide-y divide-line">
        {latest.map((item) => {
          const meta = NEWS_CATEGORY_META[item.category];
          return (
            <a
              key={item.id}
              href={item.source_url}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 flex flex-col gap-1 hover:bg-indigoInk/[0.02] -mx-4 px-4 transition-colors"
            >
              <div className="flex items-start gap-2">
                <span
                  className="mt-0.5 text-[10px] font-semibold px-1.5 py-0.5 rounded-full flex-shrink-0"
                  style={{ background: meta.bgColor, color: meta.textColor }}
                >
                  {s.news[item.category]}
                </span>
                <span className="text-xs font-semibold text-indigoInk leading-snug line-clamp-2 flex-1">
                  {item.headline}
                </span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-gray-400">
                <span>{item.source_name}</span>
                <span>·</span>
                <span>{timeAgo(item.published_at)}</span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
