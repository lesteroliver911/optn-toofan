import { useState } from 'react';
import { Container } from '../components/ui/Container';
import { Sheet } from '../components/Sheet';
import { ParentCard } from '../components/parents/ParentCard';
import { ParentDetail } from '../components/parents/ParentDetail';
import { useLang, fontClassFor } from '../i18n/useLang';
import { useStrings } from '../i18n/strings';
import { parentTopics } from '../data/parents';
import { PARENT_SECTIONS, parentText } from '../lib/parents';
import type { ParentTopic } from '../types';

type ParentsPageProps = {
  onOpenLearn: () => void;
};

export function ParentsPage({ onOpenLearn }: ParentsPageProps) {
  const { lang } = useLang();
  const s = useStrings(lang);
  const p = s.parents;

  const [openTopic, setOpenTopic] = useState<ParentTopic | null>(null);

  return (
    <div className={`${fontClassFor(lang)} flex flex-col h-full overflow-y-auto bg-parentGreenSoft`}>
      <div className="flex-1">
        <Container className="py-6 space-y-8">

          {/* Three sections */}
          {PARENT_SECTIONS.map((section) => {
            const sectionTopics = parentTopics.filter((t) => t.section === section);
            const sectionLabel = p[section];
            return (
              <div key={section} className="space-y-3">
                <p className="text-xs font-semibold text-parentGreen uppercase tracking-wide">
                  {sectionLabel}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sectionTopics.map((topic) => (
                    <ParentCard key={topic.id} topic={topic} onOpen={setOpenTopic} />
                  ))}
                </div>
              </div>
            );
          })}

          {/* Footer: helplines + Learn CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Verified helplines */}
            <div className="bg-surface rounded-2xl border border-green-100 p-5 shadow-card">
              <p className="text-xs font-semibold text-parentGreen uppercase tracking-wide mb-3">
                {p.helplinesTitle}
              </p>
              <div className="space-y-1">
                <HelpLine number="14405" label={p.vimukthiLabel} />
                <HelpLine number="1056" label={p.dishaLabel} />
                <HelpLine number="9497979794" label={p.toofanLabel} />
                <HelpLine number="112" label={p.emergencyLabel} />
              </div>
            </div>

            {/* Learn library CTA */}
            <div className="flex flex-col justify-center gap-4">
              <p className="text-sm text-gray-600 leading-relaxed">{p.learnCtaText}</p>
              <button
                onClick={onOpenLearn}
                className="w-full bg-parentGreen text-white font-semibold text-sm py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-parentGreen/90 transition-colors shadow-card"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path
                    d="M3 4.5A1.5 1.5 0 014.5 3h5v5l-2-1-2 1V3"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M4.5 3H13A1.5 1.5 0 0114.5 4.5v10A1.5 1.5 0 0113 16H5A1.5 1.5 0 013.5 14.5V4.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
                {p.talkToCopilot}
              </button>
            </div>
          </div>

        </Container>
      </div>

      {/* Detail sheet */}
      <Sheet
        isOpen={openTopic !== null}
        onClose={() => setOpenTopic(null)}
        title={openTopic ? parentText(openTopic, 'title', lang) : ''}
      >
        {openTopic && <ParentDetail topic={openTopic} />}
      </Sheet>
    </div>
  );
}

function HelpLine({ number, label }: { number: string; label: string }) {
  return (
    <a
      href={`tel:${number}`}
      className="flex items-center gap-3 hover:bg-green-50 rounded-xl p-2 transition-colors"
    >
      <span className="w-7 h-7 rounded-full bg-parentGreen/10 flex items-center justify-center flex-shrink-0">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path
            d="M2.5 4.5c0-.7.6-1.3 1.3-1.3h.5L5.5 5.8l-.7.8c.5 1 1.3 1.8 2.2 2.2l.8-.7 2.6 1.2v.5c0 .7-.6 1.3-1.3 1.3A8.8 8.8 0 012.5 4.5z"
            fill="#1E7A52"
          />
        </svg>
      </span>
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-sm font-semibold text-indigoInk">{number}</p>
      </div>
    </a>
  );
}
