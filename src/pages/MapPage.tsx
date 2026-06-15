import { useMemo, useState } from 'react';
import { Container } from '../components/ui/Container';
import { KpiCard } from '../components/ui/KpiCard';
import { Sheet } from '../components/Sheet';
import { KeralaMap } from '../components/map/KeralaMap';
import { DistrictDetail } from '../components/map/DistrictDetail';
import { SeverityDistribution } from '../components/map/SeverityDistribution';
import { DistrictLeaderboard } from '../components/map/DistrictLeaderboard';
import { useLang, fontClassFor } from '../i18n/useLang';
import { useStrings } from '../i18n/strings';
import { useMediaQuery } from '../lib/useMediaQuery';
import { districts, stateTotals } from '../data/districts';
import { filterDistricts, districtName, severityColor } from '../lib/district';
import type { SeverityFilter } from '../lib/district';

export function MapPage() {
  const { lang } = useLang();
  const s = useStrings(lang);
  const m = s.map;
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [filter, setFilter] = useState<SeverityFilter>('all');
  const [sheetOpen, setSheetOpen] = useState(false);

  const filtered = useMemo(() => filterDistricts(districts, filter, ''), [filter]);

  const rankById = useMemo(() => {
    const map: Record<string, number> = {};
    // districts is already sorted by case_count desc
    districts.forEach((d, i) => {
      map[d.id] = i + 1;
    });
    return map;
  }, []);

  const maxCaseCount = useMemo(() => Math.max(...districts.map((d) => d.case_count)), []);

  const severityCounts = useMemo(
    () => ({
      all: districts.length,
      high: districts.filter((d) => d.severity === 'high').length,
      medium: districts.filter((d) => d.severity === 'medium').length,
      low: districts.filter((d) => d.severity === 'low').length,
    }),
    [],
  );

  const topDistrict = districts[0];
  const pulseId = selectedId ?? topDistrict.id;

  const selected = selectedId ? (districts.find((d) => d.id === selectedId) ?? null) : null;

  function handleSelect(id: string) {
    const next = selectedId === id ? null : id;
    setSelectedId(next);
    if (!isDesktop && next !== null) setSheetOpen(true);
  }

  function handleCloseDetail() {
    setSelectedId(null);
    setSheetOpen(false);
  }

  function handleFilterChange(f: SeverityFilter) {
    setFilter(f);
    // If current selection no longer in filtered set, deselect
    if (selectedId) {
      const d = districts.find((x) => x.id === selectedId);
      if (d && f !== 'all' && d.severity !== f) {
        setSelectedId(null);
        setSheetOpen(false);
      }
    }
  }

  return (
    <div className={`${fontClassFor(lang)} h-full overflow-y-auto bg-canvas`}>
      <Container className="py-4 space-y-4">
        {/* Transparency notice */}
        <div className="bg-amber-50 border border-amber-100 rounded-xl px-3 py-2">
          <p className="text-amber-700 text-[11px] leading-relaxed flex items-start gap-1.5">
            <svg
              width="13"
              height="13"
              viewBox="0 0 14 14"
              fill="none"
              className="mt-0.5 flex-shrink-0"
            >
              <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3" />
              <path
                d="M7 4.2v.2M7 6.5v3"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
            {m.transparency}
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
          {/* Map tile — spans 2 cols on desktop */}
          <div
            className="lg:col-span-2 relative rounded-2xl overflow-hidden border border-line shadow-float"
            style={{ height: 'clamp(400px, 62vh, 680px)' }}
          >
            <KeralaMap
              districts={districts}
              selectedId={selectedId}
              hoveredId={hoveredId}
              onSelect={handleSelect}
              onHover={setHoveredId}
              pulseId={pulseId}
              lang={lang}
            />

            {/* Legend overlay */}
            <div className="absolute bottom-3 left-3 z-[1000] bg-white/92 backdrop-blur-sm rounded-xl px-3 py-2.5 shadow-card text-[11px] border border-white/60 space-y-1.5">
              <p className="font-bold text-indigoInk text-[10px] uppercase tracking-wide">
                {m.legendTitle}
              </p>
              {(
                [
                  { sev: 'high' as const, label: m.high },
                  { sev: 'medium' as const, label: m.medium },
                  { sev: 'low' as const, label: m.low },
                ]
              ).map((item) => (
                <div key={item.sev} className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ background: severityColor(item.sev) }}
                  />
                  <span className="text-gray-600">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Hint overlay */}
            {!selectedId && (
              <div className="absolute top-3 left-1/2 -translate-x-1/2 z-[1000] bg-indigoInk/80 backdrop-blur-sm text-white text-[11px] font-medium px-3 py-1.5 rounded-full shadow-float pointer-events-none">
                {m.selectHint}
              </div>
            )}
          </div>

          {/* Right rail */}
          <div className="lg:col-span-1 space-y-3">
            {/* KPI tiles */}
            <div className="grid grid-cols-2 gap-3">
              <KpiCard
                label={m.casesRegistered}
                value={stateTotals.cases.toLocaleString()}
                sub={m.stateTotals}
                accent="#E4453A"
              />
              <KpiCard
                label={m.arrestsMade}
                value={stateTotals.arrests.toLocaleString()}
                sub={m.stateTotals}
                accent="#12183A"
              />
            </div>

            {/* Severity distribution */}
            <SeverityDistribution
              counts={severityCounts}
              filter={filter}
              onFilterChange={handleFilterChange}
            />

            {/* Desktop: district detail when selected */}
            {isDesktop && selected && (
              <div className="bg-surface rounded-2xl border border-line shadow-card p-4 animate-fade-in">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <span
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ background: severityColor(selected.severity) }}
                    />
                    <h2 className="text-sm font-bold text-indigoInk truncate">
                      {districtName(selected, lang)}
                    </h2>
                  </div>
                  <button
                    onClick={handleCloseDetail}
                    className="w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 transition-colors flex-shrink-0"
                    aria-label="Close"
                  >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M12 4L4 12M4 4l8 8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
                <DistrictDetail
                  district={selected}
                  rank={rankById[selected.id]}
                  stateCases={stateTotals.cases}
                />
              </div>
            )}
          </div>

          {/* Full-width leaderboard */}
          <div className="lg:col-span-3">
            <DistrictLeaderboard
              items={filtered}
              allDistricts={districts}
              rankById={rankById}
              maxCaseCount={maxCaseCount}
              severityCounts={severityCounts}
              filter={filter}
              onFilterChange={handleFilterChange}
              selectedId={selectedId}
              hoveredId={hoveredId}
              onSelect={handleSelect}
              onHover={setHoveredId}
              stateCases={stateTotals.cases}
            />
          </div>
        </div>
      </Container>

      {/* Mobile bottom sheet for district detail */}
      <Sheet
        isOpen={sheetOpen && !isDesktop}
        onClose={handleCloseDetail}
        title={selected ? districtName(selected, lang) : ''}
      >
        {selected && (
          <DistrictDetail
            district={selected}
            rank={rankById[selected.id]}
            stateCases={stateTotals.cases}
          />
        )}
      </Sheet>

    </div>
  );
}
