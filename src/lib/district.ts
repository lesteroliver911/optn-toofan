import type { District, Lang, Severity } from '../types';

export const SEVERITY_COLORS: Record<Severity, string> = {
  high: '#E4453A',
  medium: '#F2A33A',
  low: '#9AA1B4',
};

export function severityColor(severity: Severity): string {
  return SEVERITY_COLORS[severity];
}

/** Marker radius scales with caseload so the map reads as a proportional symbol map. */
export function markerRadius(caseCount: number): number {
  if (caseCount >= 250) return 20;
  if (caseCount >= 180) return 16;
  if (caseCount >= 120) return 13;
  if (caseCount >= 60) return 10;
  return 7;
}

export function districtName(d: District, lang: Lang): string {
  switch (lang) {
    case 'en':
      return d.name_en;
    case 'ml':
      return d.name_ml;
    case 'hi':
      return d.name_hi;
    default: {
      const _exhaustive: never = lang;
      return _exhaustive;
    }
  }
}

export type SeverityFilter = Severity | 'all';

/** Filter by severity tier and a free-text query (matched across all language names). */
export function filterDistricts(
  all: District[],
  severity: SeverityFilter,
  query: string,
): District[] {
  const q = query.trim().toLowerCase();
  return all.filter((d) => {
    if (severity !== 'all' && d.severity !== severity) return false;
    if (!q) return true;
    return (
      d.name_en.toLowerCase().includes(q) ||
      d.name_ml.toLowerCase().includes(q) ||
      d.name_hi.toLowerCase().includes(q)
    );
  });
}
