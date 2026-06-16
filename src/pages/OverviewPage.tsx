import { useLang, fontClassFor } from '../i18n/useLang';
import { useStrings } from '../i18n/strings';
import { Container } from '../components/ui/Container';
import { KpiCard } from '../components/ui/KpiCard';
import { DistrictBarChart } from '../components/overview/DistrictBarChart';
import { TrendSparkline } from '../components/overview/TrendSparkline';
import { SeizureBreakdown } from '../components/overview/SeizureBreakdown';
import { OperationFacts } from '../components/overview/OperationFacts';
import { LatestCoverage } from '../components/overview/LatestCoverage';
import { stateTotals, formatKg, formatNumber, districtsActive } from '../lib/overview';
import type { TabId } from '../types';

type OverviewPageProps = {
  onNavigate: (tab: TabId) => void;
};

export function OverviewPage({ onNavigate }: OverviewPageProps) {
  const { lang } = useLang();
  const s = useStrings(lang);
  const ov = s.overview;

  return (
    <div className="h-full overflow-y-auto bg-canvas">
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

        {/* Operation at a glance — verified operational facts */}
        <OperationFacts />

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

    </div>
  );
}
