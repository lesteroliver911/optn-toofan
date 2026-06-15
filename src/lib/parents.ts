import type { Lang, LocalizedText, ParentSection, ParentTopic } from '../types';

export const PARENT_SECTIONS: ParentSection[] = [
  'warning-signs',
  'conversation',
  'what-to-avoid',
];

/** Accent colours on the green family, mirroring LEARN_CATEGORY_META shape. */
export const PARENT_SECTION_META: Record<
  ParentSection,
  { color: string; bgColor: string; textColor: string }
> = {
  'warning-signs': {
    color: '#1E7A52',
    bgColor: '#E8F4EC',
    textColor: '#166240',
  },
  conversation: {
    color: '#0369A1',
    bgColor: '#E0F2FE',
    textColor: '#0369A1',
  },
  'what-to-avoid': {
    color: '#C2620A',
    bgColor: '#FFF7ED',
    textColor: '#C2620A',
  },
};

/** Pull the localized string for a given field and language. */
export function parentText(
  topic: ParentTopic,
  field: keyof Pick<ParentTopic, 'title' | 'summary' | 'body'>,
  lang: Lang,
): string {
  return (topic[field] as LocalizedText)[lang];
}
