import { useLang } from '../../i18n/useLang';
import { useStrings } from '../../i18n/strings';
import { operationFacts, daysSinceLaunch } from '../../data/overview';

type Fact = {
  label: string;
  value: string;
  sub?: string;
};

export function OperationFacts() {
  const { lang } = useLang();
  const s = useStrings(lang);
  const ov = s.overview;

  const launchLabel = new Date(
    `${operationFacts.launchDate}T00:00:00+05:30`,
  ).toLocaleDateString(lang === 'en' ? 'en-IN' : lang === 'hi' ? 'hi-IN' : 'ml-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  const facts: Fact[] = [
    { label: ov.launched, value: launchLabel, sub: `${ov.dayWord} ${daysSinceLaunch()}` },
    {
      label: ov.subdivisionsCovered,
      value: String(operationFacts.subdivisions),
      sub: `${operationFacts.squadsPerSubdivision} ${ov.squadsEach}`,
    },
    {
      label: ov.jurisdiction,
      value: `${operationFacts.jurisdictionStates} + ${operationFacts.jurisdictionUTs}`,
      sub: ov.statesUts,
    },
    { label: ov.foreignHeld, value: String(operationFacts.foreignArrests), sub: ov.delhiBengaluru },
    {
      label: ov.valueSeized,
      value: `\u20B9${operationFacts.valueSeizedLakhFirst3Days}L+`,
      sub: ov.firstThreeDays,
    },
  ];

  return (
    <div className="bg-indigoInk rounded-2xl p-4 shadow-card">
      <h3 className="text-xs font-bold text-white/70 uppercase tracking-wide mb-3">
        {ov.factsTitle}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {facts.map((f) => (
          <div key={f.label} className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[10px] font-semibold text-white/50 uppercase tracking-wide truncate">
              {f.label}
            </span>
            <span className="text-lg md:text-xl font-bold text-white leading-none tabular-nums truncate">
              {f.value}
            </span>
            {f.sub && <span className="text-[10px] text-white/45 truncate">{f.sub}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
