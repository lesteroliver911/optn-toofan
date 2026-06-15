import { useMemo, useState } from 'react';
import { Container } from '../components/ui/Container';
import { Sheet } from '../components/Sheet';
import { ReportSheet } from '../components/ReportSheet';
import { ReportFilters } from '../components/community/ReportFilters';
import { ReportCard } from '../components/community/ReportCard';
import { ReportDetail } from '../components/community/ReportDetail';
import { useLang, fontClassFor } from '../i18n/useLang';
import { useStrings } from '../i18n/strings';
import { filterReports, sortReports } from '../lib/reports';
import type { ReportCategoryFilter, ReportSort } from '../lib/reports';
import type { CommunityReport, ReportCategory } from '../types';

type CommunityPageProps = {
  reports: CommunityReport[];
  votedIds: Set<string>;
  addReport: (input: { category: ReportCategory; pincode: string; description: string }) => void;
  toggleVote: (id: string) => void;
  onSubmitConcern: () => void;
};

export function CommunityPage({
  reports,
  votedIds,
  toggleVote,
}: CommunityPageProps) {
  const { lang } = useLang();
  const s = useStrings(lang);
  const c = s.community;

  const [filter, setFilter] = useState<ReportCategoryFilter>('all');
  const [sort, setSort] = useState<ReportSort>('top');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [officialOpen, setOfficialOpen] = useState(false);

  const displayed = useMemo(
    () => sortReports(filterReports(reports, filter), sort),
    [reports, filter, sort],
  );

  const selected = selectedId ? (reports.find((r) => r.id === selectedId) ?? null) : null;

  return (
    <div className={`${fontClassFor(lang)} h-full overflow-y-auto bg-canvas`}>
      <Container className="py-4 space-y-4">
        <ReportFilters
          filter={filter}
          onFilterChange={setFilter}
          sort={sort}
          onSortChange={setSort}
          showing={displayed.length}
          total={reports.length}
          showSort
        />

        {displayed.length > 0 ? (
          <div className="flex flex-col gap-2">
            {displayed.map((report, i) => (
              <ReportCard
                key={report.id}
                report={report}
                rank={i + 1}
                hasVoted={votedIds.has(report.id)}
                onVote={toggleVote}
                onOpen={setSelectedId}
                isSelected={report.id === selectedId}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 gap-3 text-center">
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
            <p className="text-sm font-semibold text-gray-500">{c.noResults}</p>
            <button
              onClick={() => setFilter('all')}
              className="text-xs text-indigoInk font-semibold underline underline-offset-2 hover:no-underline"
            >
              {lang === 'en' ? 'Clear filter' : lang === 'ml' ? 'ഫിൽറ്റർ നീക്കം ചെയ്യുക' : 'फ़िल्टर हटाएं'}
            </button>
          </div>
        )}
      </Container>

      {/* Detail sheet */}
      <Sheet
        isOpen={!!selected}
        onClose={() => setSelectedId(null)}
        title={selected ? selected.areaLabel[lang] : ''}
      >
        {selected && (
          <ReportDetail
            report={selected}
            hasVoted={votedIds.has(selected.id)}
            onVote={toggleVote}
          />
        )}
      </Sheet>

      {/* Official channels sheet — kept for internal use if needed */}
      <ReportSheet isOpen={officialOpen} onClose={() => setOfficialOpen(false)} />
    </div>
  );
}
