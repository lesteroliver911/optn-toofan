import type { Lang, LearnCategory, LearnTopic, LocalizedText } from '../types';

export type LearnCategoryFilter = LearnCategory | 'all';

export const LEARN_CATEGORY_META: Record<
  LearnCategory,
  { color: string; bgColor: string; textColor: string }
> = {
  substances: {
    color: '#E4453A',
    bgColor: '#FEF2F2',
    textColor: '#B91C1C',
  },
  'warning-signs': {
    color: '#C2620A',
    bgColor: '#FFF7ED',
    textColor: '#C2620A',
  },
  myths: {
    color: '#7C3AED',
    bgColor: '#F5F3FF',
    textColor: '#6D28D9',
  },
  'help-friend': {
    color: '#0369A1',
    bgColor: '#E0F2FE',
    textColor: '#0369A1',
  },
  'getting-help': {
    color: '#1E7A52',
    bgColor: '#E8F4EC',
    textColor: '#166240',
  },
  legal: {
    color: '#12183A',
    bgColor: '#EEF0F8',
    textColor: '#1B2350',
  },
};

/**
 * Filter topics by category and a free-text query
 * (matched against title, summary, and body in all three languages).
 */
export function filterLearn(
  topics: LearnTopic[],
  category: LearnCategoryFilter,
  query: string,
): LearnTopic[] {
  const q = query.trim().toLowerCase();
  return topics.filter((topic) => {
    if (category !== 'all' && topic.category !== category) return false;
    if (!q) return true;
    const langs: Lang[] = ['en', 'ml', 'hi'];
    return langs.some(
      (lang) =>
        topic.title[lang].toLowerCase().includes(q) ||
        topic.summary[lang].toLowerCase().includes(q) ||
        topic.body[lang].toLowerCase().includes(q),
    );
  });
}

/** Pull the localized string for a given field and language. */
export function learnText(topic: LearnTopic, field: keyof Pick<LearnTopic, 'title' | 'summary' | 'body'>, lang: Lang): string {
  return (topic[field] as LocalizedText)[lang];
}
