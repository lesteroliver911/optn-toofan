import { useLang } from '../../i18n/useLang';
import { useStrings } from '../../i18n/strings';
import { KpiCard } from '../ui/KpiCard';
import {
  todaySnapshot,
  worseningDistrict,
  awarenessCoverage,
  emergingRoutes,
  publicSentiment,
} from '../../data/intel';
import type { SubstanceKind, TransportMode } from '../../data/intel';
import { districts } from '../../data/districts';
import { districtName } from '../../lib/district';
import type { Lang } from '../../types';

function substanceLabel(s: SubstanceKind, i: { mdma: string; cannabis: string }): string {
  switch (s) {
    case 'mdma':
      return i.mdma;
    case 'cannabis':
      return i.cannabis;
    default: {
      const _x: never = s;
      return _x;
    }
  }
}

function substanceColor(s: SubstanceKind): string {
  switch (s) {
    case 'mdma':
      return '#E4453A';
    case 'cannabis':
      return '#F2A33A';
    default: {
      const _x: never = s;
      return _x;
    }
  }
}

function modeLabel(m: TransportMode, i: { viaRail: string; viaAir: string; viaRoad: string }): string {
  switch (m) {
    case 'rail':
      return i.viaRail;
    case 'air':
      return i.viaAir;
    case 'road':
      return i.viaRoad;
    default: {
      const _x: never = m;
      return _x;
    }
  }
}

function modeIcon(m: TransportMode): string {
  switch (m) {
    case 'rail':
      return '🚆';
    case 'air':
      return '✈️';
    case 'road':
      return '🚛';
    default: {
      const _x: never = m;
      return _x;
    }
  }
}

export function CommandIntel() {
  const { lang } = useLang();
  const s = useStrings(lang);
  const i = s.intel;

  const district = districts.find((d) => d.id === worseningDistrict.districtId) ?? districts[0];
  const dName = districtName(district, lang as Lang);

  const total = publicSentiment.supportive + publicSentiment.concerned + publicSentiment.critical;

  const sentimentBars: { key: keyof typeof publicSentiment; color: string; label: string }[] = [
    { key: 'supportive', color: '#1E7A52', label: i.supportive },
    { key: 'concerned', color: '#F2A33A', label: i.concerned },
    { key: 'critical', color: '#E4453A', label: i.critical },
  ];

  return (
    <div className="flex flex-col gap-4">
      {/* Section header */}
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-xs font-bold text-indigoInk uppercase tracking-wide">{i.sectionTitle}</h2>
        <span className="text-[10px] text-gray-400">{i.asOfToday}</span>
      </div>

      {/* Today snapshot KPIs */}
      <div className="grid grid-cols-3 gap-3">
        <KpiCard label={i.raidsToday} value={String(todaySnapshot.raids)} accent="#12183A" />
        <KpiCard label={i.arrestsToday} value={String(todaySnapshot.arrests)} accent="#E4453A" />
        <KpiCard label={i.kingpinsHeld} value={String(todaySnapshot.kingpins)} accent="#F2A33A" />
      </div>

      {/* Insight cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Worsening district */}
        <div className="bg-surface rounded-2xl border border-line shadow-card p-4 flex flex-col gap-3">
          <h3 className="text-xs font-bold text-indigoInk uppercase tracking-wide">{i.worseningTitle}</h3>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2.5 h-2.5 rounded-full bg-toofanRed flex-shrink-0" aria-hidden="true" />
              <span className="text-lg font-bold text-indigoInk truncate">{dName}</span>
            </div>
            <div className="flex flex-col items-end flex-shrink-0">
              <span className="text-xl font-bold text-toofanRed tabular-nums">
                +{worseningDistrict.deltaPct}%
              </span>
              <span className="text-[10px] text-gray-400">{i.weekOnWeek}</span>
            </div>
          </div>
          <div className="flex items-center justify-between bg-canvas rounded-xl px-3 py-2">
            <span className="text-[11px] text-gray-500">Cases registered</span>
            <span className="text-sm font-bold text-indigoInk tabular-nums">
              {district.case_count.toLocaleString('en-IN')}
            </span>
          </div>
        </div>

        {/* Youth awareness coverage */}
        <div className="bg-surface rounded-2xl border border-line shadow-card p-4 flex flex-col gap-3">
          <h3 className="text-xs font-bold text-indigoInk uppercase tracking-wide">{i.awarenessTitle}</h3>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: i.schoolsReached, value: awarenessCoverage.schoolsReached, color: '#1E7A52' },
              { label: i.programmesRun, value: awarenessCoverage.programmesRun, color: '#12183A' },
              { label: i.districtsCovered, value: awarenessCoverage.districtsCovered, color: '#F2A33A' },
            ].map((stat) => (
              <div key={stat.label} className="bg-canvas rounded-xl p-2.5 text-center">
                <p className="text-xl font-bold tabular-nums leading-none" style={{ color: stat.color }}>
                  {stat.value.toLocaleString('en-IN')}
                </p>
                <p className="text-[10px] text-gray-400 mt-1 leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Emerging trafficking routes */}
        <div className="bg-surface rounded-2xl border border-line shadow-card p-4 flex flex-col gap-3">
          <h3 className="text-xs font-bold text-indigoInk uppercase tracking-wide">{i.routesTitle}</h3>
          <ul className="flex flex-col gap-2.5">
            {emergingRoutes.map((route) => {
              const sColor = substanceColor(route.substance);
              return (
                <li key={route.id} className="flex items-start gap-2.5">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5"
                    style={{ background: sColor }}
                    aria-hidden="true"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[11px] font-bold text-indigoInk">
                        {substanceLabel(route.substance, i)}
                      </span>
                      <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-canvas text-gray-500 border border-line">
                        {modeIcon(route.mode)} {modeLabel(route.mode, i)}
                      </span>
                    </div>
                    <p className="text-[10px] text-gray-400 mt-0.5 truncate">
                      {i.origin}: <span className="text-gray-600">{route.origin[lang as Lang]}</span>
                    </p>
                    <p className="text-[10px] text-gray-400 truncate">
                      {i.entry}: <span className="text-gray-600">{route.entry[lang as Lang]}</span>
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Public sentiment */}
        <div className="bg-surface rounded-2xl border border-line shadow-card p-4 flex flex-col gap-3">
          <h3 className="text-xs font-bold text-indigoInk uppercase tracking-wide">{i.sentimentTitle}</h3>

          {/* Segmented bar */}
          <div className="flex rounded-full overflow-hidden h-3 gap-px">
            {sentimentBars.map((bar) => {
              const pct = (publicSentiment[bar.key] / total) * 100;
              return (
                <div
                  key={bar.key}
                  className="h-full"
                  style={{ width: `${pct}%`, background: bar.color }}
                  title={`${bar.label}: ${publicSentiment[bar.key]}%`}
                />
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex flex-col gap-1.5">
            {sentimentBars.map((bar) => (
              <div key={bar.key} className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ background: bar.color }}
                    aria-hidden="true"
                  />
                  <span className="text-[11px] text-gray-500">{bar.label}</span>
                </div>
                <span className="text-[11px] font-bold text-indigoInk tabular-nums">
                  {publicSentiment[bar.key]}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
