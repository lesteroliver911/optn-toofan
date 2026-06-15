import { useLang } from '../../i18n/useLang';
import { useStrings } from '../../i18n/strings';
import { PARENT_SECTION_META, parentText } from '../../lib/parents';
import type { ParentTopic } from '../../types';

type ParentDetailProps = {
  topic: ParentTopic;
};

/** Rendered inside Sheet.tsx. Section badge + body paragraphs. */
export function ParentDetail({ topic }: ParentDetailProps) {
  const { lang } = useLang();
  const s = useStrings(lang);
  const p = s.parents;
  const meta = PARENT_SECTION_META[topic.section];
  const sectionLabel = p[topic.section];
  const bodyText = parentText(topic, 'body', lang);

  return (
    <div className="space-y-4">
      {/* Section badge */}
      <span
        className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full"
        style={{ background: meta.bgColor, color: meta.textColor }}
      >
        <span className="text-base leading-none" aria-hidden="true">
          {topic.icon}
        </span>
        {sectionLabel}
      </span>

      {/* Body paragraphs */}
      <div className="space-y-3">
        {bodyText.split('\n').map((para, i) =>
          para.trim() ? (
            <p key={i} className="text-sm text-gray-700 leading-relaxed">
              {para.trim()}
            </p>
          ) : null,
        )}
      </div>
    </div>
  );
}
