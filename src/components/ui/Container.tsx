import type { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/**
 * The single source of truth for horizontal page rhythm:
 * centred, capped at the content width, with consistent responsive padding.
 * Every page section wraps its content in this so spacing is identical everywhere.
 */
export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-content px-4 md:px-6 ${className}`}>{children}</div>
  );
}
