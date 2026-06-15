import { useMemo, useState } from 'react';
import { Container } from '../components/ui/Container';
import { FeaturedStory } from '../components/news/FeaturedStory';
import { NewsCard } from '../components/news/NewsCard';
import { NewsFilters } from '../components/news/NewsFilters';
import { useLang, fontClassFor } from '../i18n/useLang';
import { useStrings } from '../i18n/strings';
import { newsItems } from '../data/news';
import { filterNews } from '../lib/news';
import type { NewsCategoryFilter } from '../lib/news';
import type { NewsCategory } from '../types';

export function NewsPage() {
  const { lang } = useLang();
  const s = useStrings(lang);
  const n = s.news;

  const [filter, setFilter] = useState<NewsCategoryFilter>('all');
  const [query, setQuery] = useState('');

  // Newest-first, relevant only
  const all = useMemo(
    () =>
      [...newsItems]
        .filter((i) => i.is_toofan_relevant)
        .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime()),
    [],
  );

  const featured = useMemo(() => all.find((i) => i.featured) ?? null, [all]);

  const filtered = useMemo(() => filterNews(all, filter, query), [all, filter, query]);

  // Category counts for chips (over full unfiltered list)
  const categoryCounts = useMemo(() => {
    const base: Record<NewsCategory, number> = {
      enforcement: 0,
      policy: 0,
      awareness: 0,
      explainer: 0,
    };
    all.forEach((i) => {
      base[i.category] += 1;
    });
    return { ...base, all: all.length };
  }, [all]);

  const gridItems = filtered;

  return (
    <div className={`${fontClassFor(lang)} flex flex-col h-full overflow-y-auto bg-canvas`}>
      {/* Main content */}
      <div className="flex-1">
        <Container className="py-6 space-y-6">
          {/* Featured hero */}
          {featured && <FeaturedStory item={featured} />}

          {/* Filters */}
          <NewsFilters
            filter={filter}
            onFilterChange={setFilter}
            query={query}
            onQueryChange={setQuery}
            counts={categoryCounts}
            showing={gridItems.length}
            total={all.length}
          />

          {/* Card grid */}
          {gridItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {gridItems.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            /* Empty state */
            <div className="flex flex-col items-center justify-center py-20 gap-3 text-center">
              <div className="w-12 h-12 rounded-full bg-line flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className="text-gray-400"
                >
                  <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
                  <path
                    d="M14 14l3.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <p className="text-sm font-semibold text-gray-500">{n.noResults}</p>
              <button
                onClick={() => {
                  setFilter('all');
                  setQuery('');
                }}
                className="text-xs text-indigoInk font-semibold underline underline-offset-2 hover:no-underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
}
