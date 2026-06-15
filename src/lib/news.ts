import type { Lang, NewsCategory, NewsItem } from '../types';

export type NewsCategoryFilter = NewsCategory | 'all';

export const NEWS_CATEGORY_META: Record<
  NewsCategory,
  { color: string; bgColor: string; textColor: string }
> = {
  enforcement: {
    color: '#E4453A',
    bgColor: '#FEF2F2',
    textColor: '#B91C1C',
  },
  policy: {
    color: '#12183A',
    bgColor: '#EEF0F8',
    textColor: '#1B2350',
  },
  awareness: {
    color: '#1E7A52',
    bgColor: '#E8F4EC',
    textColor: '#166240',
  },
  explainer: {
    color: '#F2A33A',
    bgColor: '#FFF7ED',
    textColor: '#C2620A',
  },
};

/**
 * Filter news items by category and a free-text query
 * (matched against headline, summary, and source name).
 */
export function filterNews(
  items: NewsItem[],
  category: NewsCategoryFilter,
  query: string,
): NewsItem[] {
  const q = query.trim().toLowerCase();
  return items.filter((item) => {
    if (category !== 'all' && item.category !== category) return false;
    if (!q) return true;
    return (
      item.headline.toLowerCase().includes(q) ||
      item.ai_summary.toLowerCase().includes(q) ||
      item.source_name.toLowerCase().includes(q)
    );
  });
}

/** Friendly relative time string. */
export function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return 'Today';
  if (days === 1) return '1 day ago';
  if (days < 30) return `${days} days ago`;
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

/** Short formatted date (e.g. "12 Jun 2026"). */
export function formatDate(iso: string, lang: Lang): string {
  const locale = lang === 'en' ? 'en-IN' : lang === 'ml' ? 'ml-IN' : 'hi-IN';
  return new Date(iso).toLocaleDateString(locale, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

/** Count of unique source names. */
export function countSources(items: NewsItem[]): number {
  return new Set(items.map((i) => i.source_name)).size;
}
