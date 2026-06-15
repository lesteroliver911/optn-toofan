import { useMemo, useState } from 'react';
import { Container } from '../components/ui/Container';
import { Sheet } from '../components/Sheet';
import { LearnCard } from '../components/learn/LearnCard';
import { LearnFilters } from '../components/learn/LearnFilters';
import { LearnDetail } from '../components/learn/LearnDetail';
import { useLang, fontClassFor } from '../i18n/useLang';
import { useStrings } from '../i18n/strings';
import { learnTopics } from '../data/learn';
import { filterLearn, learnText } from '../lib/learn';
import type { LearnCategoryFilter } from '../lib/learn';
import type { LearnCategory, LearnTopic } from '../types';

export function LearnPage() {
  const { lang } = useLang();
  const s = useStrings(lang);
  const l = s.learn;

  const [filter, setFilter] = useState<LearnCategoryFilter>('all');
  const [query, setQuery] = useState('');
  const [openTopic, setOpenTopic] = useState<LearnTopic | null>(null);

  const filtered = useMemo(
    () => filterLearn(learnTopics, filter, query),
    [filter, query],
  );

  const categoryCounts = useMemo(() => {
    const base: Record<LearnCategory, number> = {
      substances: 0,
      'warning-signs': 0,
      myths: 0,
      'help-friend': 0,
      'getting-help': 0,
      legal: 0,
    };
    learnTopics.forEach((t) => {
      base[t.category] += 1;
    });
    return { ...base, all: learnTopics.length };
  }, []);

  return (
    <div className={`${fontClassFor(lang)} flex flex-col h-full overflow-y-auto bg-canvas`}>
      <div className="flex-1">
        <Container className="py-6 space-y-6">
          {/* Filters */}
          <LearnFilters
            filter={filter}
            onFilterChange={setFilter}
            query={query}
            onQueryChange={setQuery}
            counts={categoryCounts}
            showing={filtered.length}
            total={learnTopics.length}
          />

          {/* Card grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((topic) => (
                <LearnCard key={topic.id} topic={topic} onOpen={setOpenTopic} />
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
              <p className="text-sm font-semibold text-gray-500">{l.noResults}</p>
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

      {/* Detail sheet */}
      <Sheet
        isOpen={openTopic !== null}
        onClose={() => setOpenTopic(null)}
        title={openTopic ? learnText(openTopic, 'title', lang) : ''}
      >
        {openTopic && <LearnDetail topic={openTopic} />}
      </Sheet>
    </div>
  );
}
