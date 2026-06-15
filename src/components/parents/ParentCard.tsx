import { useLang } from '../../i18n/useLang';
import { useStrings } from '../../i18n/strings';
import { PARENT_SECTION_META, parentText } from '../../lib/parents';
import type { ParentTopic } from '../../types';

type ParentCardProps = {
  topic: ParentTopic;
  onOpen: (topic: ParentTopic) => void;
};

export function ParentCard({ topic, onOpen }: ParentCardProps) {
  const { lang } = useLang();
  const s = useStrings(lang);
  const p = s.parents;
  const meta = PARENT_SECTION_META[topic.section];
  const sectionLabel = p[topic.section];

  return (
    <button
      onClick={() => onOpen(topic)}
      className="group text-left flex flex-col bg-surface rounded-2xl border border-line shadow-card hover:shadow-float hover:border-parentGreen/20 transition-all duration-200 p-4 min-h-[11rem] w-full"
    >
      {/* Top row: icon + section badge */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="text-xl leading-none" aria-hidden="true">
          {topic.icon}
        </span>
        <span
          className="text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full"
          style={{ background: meta.bgColor, color: meta.textColor }}
        >
          {sectionLabel}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-sm font-semibold text-indigoInk leading-snug mb-2 flex-1 group-hover:text-parentGreen transition-colors">
        {parentText(topic, 'title', lang)}
      </h2>

      {/* Summary */}
      <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3">
        {parentText(topic, 'summary', lang)}
      </p>

      {/* Footer */}
      <div className="flex items-center gap-1 text-xs font-semibold text-indigoInk/50 group-hover:text-parentGreen transition-colors mt-auto">
        <span>{p.readMore}</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path
            d="M2.5 6h7M6.5 3l3 3-3 3"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </button>
  );
}
