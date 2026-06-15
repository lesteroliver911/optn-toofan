import { useMemo, useState } from 'react';
import { Container } from '../components/ui/Container';
import { Sheet } from '../components/Sheet';
import { ReportSheet } from '../components/ReportSheet';
import { ReportMap } from '../components/community/ReportMap';
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

type PageView = 'list' | 'map';

export function CommunityPage({
  reports,
  votedIds,
  toggleVote,
  onSubmitConcern,
}: CommunityPageProps) {
  const { lang } = useLang();
  const s = useStrings(lang);
  const c = s.community;

  const [view, setView] = useState<PageView>('list');
  const [filter, setFilter] = useState<ReportCategoryFilter>('all');
  const [sort, setSort] = useState<ReportSort>('top');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [officialOpen, setOfficialOpen] = useState(false);

  const displayed = useMemo(
    () => sortReports(filterReports(reports, filter), sort),
    [reports, filter, sort],
  );

  const selected = selectedId ? (reports.find((r) => r.id === selectedId) ?? null) : null;

  function handleSelectFromMap(id: string) {
    setSelectedId((prev) => (prev === id ? null : id));
  }

  return (
    <div className={`${fontClassFor(lang)} h-full overflow-y-auto bg-canvas`}>
      {/* Hero strip */}
      <div className="bg-indigoInk text-white flex-shrink-0">
        <Container>
          <div className="py-4 flex items-center justify-between gap-3">
            <div>
              <h1 className="text-lg font-black tracking-tight">{c.title}</h1>
              <p className="text-xs text-white/65 mt-0.5 max-w-sm">{c.subtitle}</p>
            </div>
            <button
              onClick={onSubmitConcern}
              className="flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-sm font-semibold transition-colors"
            >
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 2v10M2 7h10" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
              {c.submitButton}
            </button>
          </div>
        </Container>
      </div>

      <Container className="py-4 space-y-4">
        {/* Disclaimer banner */}
        <div className="bg-amber-50 border border-amber-100 rounded-xl px-3 py-2.5 flex items-start justify-between gap-3">
          <div className="flex items-start gap-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="mt-0.5 flex-shrink-0 text-amber-600"
              aria-hidden="true"
            >
              <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3" />
              <path
                d="M7 4.2v.2M7 6.5v3"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
            <p className="text-amber-700 text-[11px] leading-relaxed">{c.disclaimerBanner}</p>
          </div>
          <button
            onClick={() => setOfficialOpen(true)}
            className="flex-shrink-0 text-[11px] font-semibold text-amber-700 underline underline-offset-2 hover:no-underline whitespace-nowrap"
          >
            {c.officialChannels}
          </button>
        </div>

        {/* Map / List segmented toggle */}
        <div className="flex justify-center">
          <div className="flex rounded-full border border-line overflow-hidden text-xs font-semibold bg-surface shadow-sm">
            {(['list', 'map'] as PageView[]).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`flex items-center gap-1.5 px-5 py-2 transition-colors ${
                  view === v ? 'bg-indigoInk text-white' : 'text-gray-500 hover:text-indigoInk'
                }`}
              >
                {v === 'list' ? (
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path
                      d="M2 4h10M2 7h10M2 10h6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path
                      d="M7 2C4.8 2 3 3.7 3 5.9c0 3.1 4 7.1 4 7.1s4-4 4-7.1C11 3.7 9.2 2 7 2z"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinejoin="round"
                    />
                    <circle cx="7" cy="5.8" r="1.2" fill="currentColor" />
                  </svg>
                )}
                {v === 'list' ? c.listView : c.mapView}
              </button>
            ))}
          </div>
        </div>

        {/* LIST VIEW */}
        {view === 'list' && (
          <>
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
          </>
        )}

        {/* MAP VIEW */}
        {view === 'map' && (
          <>
            <ReportFilters
              filter={filter}
              onFilterChange={setFilter}
              sort={sort}
              onSortChange={setSort}
              showing={displayed.length}
              total={reports.length}
              showSort={false}
            />

            <div
              className="relative rounded-2xl overflow-hidden border border-line shadow-float"
              style={{ height: 'clamp(420px, 68vh, 720px)' }}
            >
              <ReportMap
                reports={displayed}
                selectedId={selectedId}
                onSelect={handleSelectFromMap}
                votedIds={votedIds}
                onVote={toggleVote}
                onOpenDetails={setSelectedId}
                lang={lang}
              />

              {/* Category legend */}
              <div className="absolute bottom-3 left-3 z-[1000] bg-white/92 backdrop-blur-sm rounded-xl px-3 py-2 shadow-card text-[10px] border border-white/60 space-y-1">
                {([
                  { key: 'drug-use', label: c.drugUse, color: '#E4453A' },
                  { key: 'drug-distribution', label: c.drugDistribution, color: '#F2A33A' },
                  { key: 'other', label: c.other, color: '#9AA1B4' },
                ] as const).map((item) => (
                  <div key={item.key} className="flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ background: item.color }}
                    />
                    <span className="text-gray-600">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
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

      {/* Official channels sheet */}
      <ReportSheet isOpen={officialOpen} onClose={() => setOfficialOpen(false)} />
    </div>
  );
}
