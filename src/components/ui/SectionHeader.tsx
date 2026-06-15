import type { ReactNode } from 'react';
import { Container } from './Container';

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  /** Colour tone of the strip. */
  tone?: 'indigo' | 'green';
  /** Optional right-aligned content (stats, badges, actions). */
  right?: ReactNode;
};

/**
 * Consistent page section header strip used at the top of every page.
 * Title + subtitle on the left, optional content on the right.
 */
export function SectionHeader({ title, subtitle, tone = 'indigo', right }: SectionHeaderProps) {
  const bg = tone === 'green' ? 'bg-parentGreen' : 'bg-indigoInk2';
  return (
    <div className={`${bg} flex-shrink-0`}>
      <Container className="py-4 flex flex-wrap items-center gap-x-6 gap-y-2">
        <div className="min-w-0">
          <h1 className="text-white font-bold text-lg leading-tight">{title}</h1>
          {subtitle && <p className="text-white/60 text-sm mt-0.5">{subtitle}</p>}
        </div>
        {right && <div className="ml-auto flex items-center">{right}</div>}
      </Container>
    </div>
  );
}
