import { districts, stateTotals } from '../data/districts';
import { SEVERITY_COLORS } from './district';
import type { District } from '../types';

/** All 14 districts sourced from seed data. */
export const allDistricts: District[] = districts;

/** Highest case count across all districts (used to normalise bar widths). */
export const maxCaseCount: number = districts[0]?.case_count ?? 1;

/** Top N districts by case count (already sorted descending in seed data). */
export function topDistricts(n: number): District[] {
  return districts.slice(0, n);
}

/** Percentage share of statewide cases for one district. */
export function caseShare(d: District): number {
  return (d.case_count / stateTotals.cases) * 100;
}

/** Colour for a district's bar, keyed to its severity tier. */
export function districtBarColor(d: District): string {
  return SEVERITY_COLORS[d.severity];
}

/** Count of active (high + medium severity) districts. */
export const districtsActive: number = districts.filter(
  (d) => d.severity === 'high' || d.severity === 'medium',
).length;

/** Format kg value: "1.22 kg" or "115.79 kg". */
export function formatKg(kg: number): string {
  return `${kg.toFixed(kg < 10 ? 3 : 2)} kg`;
}

/** Format integer with locale comma separator. */
export function formatNumber(n: number): string {
  return n.toLocaleString('en-IN');
}

export { stateTotals };
