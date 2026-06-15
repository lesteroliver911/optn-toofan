import { useLang, fontClassFor } from '../../i18n/useLang';
import { useStrings } from '../../i18n/strings';
import { campaignPillars } from '../../data/overview';

export function CampaignPillars() {
  const { lang } = useLang();
  const s = useStrings(lang);
  const ov = s.overview;

  return (
    <div className="bg-surface rounded-2xl border border-line shadow-card p-4 flex flex-col gap-3">
      <h3 className="text-sm font-bold text-indigoInk">{ov.pillarsTitle}</h3>
      <div className={`${fontClassFor(lang)} grid grid-cols-2 gap-3`}>
        {campaignPillars.map((pillar) => (
          <div
            key={pillar.id}
            className="flex flex-col gap-1.5 p-3 rounded-xl bg-indigoInk/[0.03] border border-indigoInk/[0.07]"
          >
            <span className="text-xl leading-none" aria-hidden="true">
              {pillar.icon}
            </span>
            <span className="text-xs font-bold text-indigoInk leading-tight">
              {pillar.title[lang]}
            </span>
            <span className="text-[11px] text-gray-500 leading-relaxed">
              {pillar.desc[lang]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
