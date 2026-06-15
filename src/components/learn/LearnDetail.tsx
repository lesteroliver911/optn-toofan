import { useLang } from '../../i18n/useLang';
import { useStrings } from '../../i18n/strings';
import { LEARN_CATEGORY_META, learnText } from '../../lib/learn';
import type { LearnTopic } from '../../types';

type LearnDetailProps = {
  topic: LearnTopic;
};

/** Rendered inside Sheet.tsx. Displays full body plus tap-to-call helplines when present. */
export function LearnDetail({ topic }: LearnDetailProps) {
  const { lang } = useLang();
  const s = useStrings(lang);
  const l = s.learn;
  const meta = LEARN_CATEGORY_META[topic.category];
  const categoryLabel = l[topic.category];
  const bodyText = learnText(topic, 'body', lang);

  return (
    <div className="space-y-4">
      {/* Category badge */}
      <span
        className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full"
        style={{ background: meta.bgColor, color: meta.textColor }}
      >
        <span className="text-base leading-none" aria-hidden="true">
          {topic.icon}
        </span>
        {categoryLabel}
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

      {/* Helpline buttons (for getting-help / help-friend topics) */}
      {topic.helplines && topic.helplines.length > 0 && (
        <div className="mt-5 space-y-2">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            {l.callNow}
          </p>
          {topic.helplines.map((line) => (
            <a
              key={line.number}
              href={`tel:${line.number}`}
              className="flex items-center justify-between w-full px-4 py-3 rounded-xl border-2 border-indigoInk/10 bg-canvas hover:bg-indigoInk hover:text-white hover:border-indigoInk transition-all group"
            >
              <span className="text-sm font-semibold text-indigoInk group-hover:text-white">
                {line.label[lang]}
              </span>
              <span className="flex items-center gap-1.5 text-sm font-bold text-indigoInk group-hover:text-white">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path
                    d="M2.5 4.5c0-.7.6-1.3 1.3-1.3h.5L5.5 5.8l-.7.8c.5 1 1.3 1.8 2.2 2.2l.8-.7 2.6 1.2v.5c0 .7-.6 1.3-1.3 1.3A8.8 8.8 0 012.5 4.5z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {line.number}
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
