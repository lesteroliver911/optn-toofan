import { useState } from 'react';
import { useLang, fontClassFor } from '../i18n/useLang';
import { useStrings } from '../i18n/strings';
import { Container } from '../components/ui/Container';
import { KpiCard } from '../components/ui/KpiCard';
import { ReportSheet } from '../components/ReportSheet';
import { DistrictBarChart } from '../components/overview/DistrictBarChart';
import { TrendSparkline } from '../components/overview/TrendSparkline';
import { SeizureBreakdown } from '../components/overview/SeizureBreakdown';
import { LatestCoverage } from '../components/overview/LatestCoverage';
import { stateTotals, formatKg, formatNumber, districtsActive } from '../lib/overview';
import type { TabId } from '../types';

type OverviewPageProps = {
  onNavigate: (tab: TabId) => void;
};

export function OverviewPage({ onNavigate }: OverviewPageProps) {
  const [reportOpen, setReportOpen] = useState(false);
  const { lang } = useLang();
  const s = useStrings(lang);
  const ov = s.overview;

  return (
    <div className="h-full overflow-y-auto bg-canvas">
      {/* Hero strip */}
      <div className="bg-indigoInk text-white">
        <Container>
          <div className="py-4 flex justify-end">
            <button
              onClick={() => setReportOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-sm font-semibold transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M8 2v12M2 8h12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              {ov.reportButton}
            </button>
          </div>
        </Container>
      </div>

      <Container className="py-5 space-y-5">
        {/* KPI row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <KpiCard
            label={ov.cases}
            value={formatNumber(stateTotals.cases)}
            accent="#E4453A"
          />
          <KpiCard
            label={ov.arrests}
            value={formatNumber(stateTotals.arrests)}
            accent="#12183A"
          />
          <KpiCard
            label={ov.districtsActive}
            value={`${districtsActive} / 14`}
            accent="#F2A33A"
          />
          <KpiCard
            label={ov.mdmaSeized}
            value={formatKg(stateTotals.mdmaKg)}
            accent="#E4453A"
          />
          <KpiCard
            label={ov.cannabisSeized}
            value={formatKg(stateTotals.cannabisKg)}
            accent="#F2A33A"
          />
        </div>

        {/* Main two-column row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
          <DistrictBarChart onNavigate={onNavigate} />

          <div className="flex flex-col gap-4">
            <TrendSparkline />
            <SeizureBreakdown />
          </div>
        </div>

        {/* Latest coverage */}
        <LatestCoverage onNavigate={onNavigate} />

        {/* Transparency footer */}
        <p className={`${fontClassFor(lang)} text-[11px] text-gray-400 text-center leading-relaxed pb-2`}>
          {ov.transparency}
        </p>
      </Container>

      <ReportSheet isOpen={reportOpen} onClose={() => setReportOpen(false)} />
    </div>
  );
}
