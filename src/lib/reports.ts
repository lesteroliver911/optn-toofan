import { districts } from '../data/districts';
import type { CommunityReport, ReportCategory } from '../types';

export type ReportCategoryFilter = ReportCategory | 'all';
export type ReportSort = 'top' | 'new';

export const REPORT_CATEGORY_META: Record<
  ReportCategory,
  { color: string; bgColor: string; textColor: string; labelKey: 'drugUse' | 'drugDistribution' | 'other' }
> = {
  'drug-use': { color: '#E4453A', bgColor: '#FEF2F2', textColor: '#B91C1C', labelKey: 'drugUse' },
  'drug-distribution': { color: '#F2A33A', bgColor: '#FFF7ED', textColor: '#C2620A', labelKey: 'drugDistribution' },
  other: { color: '#9AA1B4', bgColor: '#F1F2F5', textColor: '#4B5263', labelKey: 'other' },
};

/**
 * Maps Kerala pincode prefixes to district ids.
 * Kerala pincodes: 670xxx–695xxx.
 * Mapping is approximate and intentionally district-level only.
 */
const PINCODE_MAP: { prefix: string; districtId: string }[] = [
  { prefix: '695', districtId: 'thiruvananthapuram' },
  { prefix: '694', districtId: 'thiruvananthapuram' },
  { prefix: '691', districtId: 'kollam' },
  { prefix: '690', districtId: 'kollam' },
  { prefix: '689', districtId: 'pathanamthitta' },
  { prefix: '688', districtId: 'alappuzha' },
  { prefix: '687', districtId: 'kottayam' },
  { prefix: '686', districtId: 'kottayam' },
  { prefix: '685', districtId: 'idukki' },
  { prefix: '683', districtId: 'ernakulam' },
  { prefix: '682', districtId: 'ernakulam' },
  { prefix: '681', districtId: 'ernakulam' },
  { prefix: '680', districtId: 'thrissur' },
  { prefix: '679', districtId: 'palakkad' },
  { prefix: '678', districtId: 'palakkad' },
  { prefix: '676', districtId: 'malappuram' },
  { prefix: '673', districtId: 'kozhikode' },
  { prefix: '672', districtId: 'kannur' },
  { prefix: '671', districtId: 'kannur' },
  { prefix: '670', districtId: 'kasaragod' },
  { prefix: '677', districtId: 'wayanad' },
  { prefix: '692', districtId: 'alappuzha' },
  { prefix: '693', districtId: 'alappuzha' },
];

type PincodeResult = {
  districtId: string;
  lat: number;
  lng: number;
};

/**
 * Returns the approximate district + centroid coords for a Kerala pincode.
 * Coordinates are district-level only; a small deterministic jitter is added
 * so multiple reports from the same district don't stack exactly.
 */
export function pincodeToDistrict(pincode: string): PincodeResult {
  const prefix3 = pincode.slice(0, 3);
  const match = PINCODE_MAP.find((m) => prefix3.startsWith(m.prefix));
  const districtId = match?.districtId ?? 'ernakulam';
  const district = districts.find((d) => d.id === districtId) ?? districts[0];

  // Deterministic jitter: use last 2 digits of pincode as small offset
  const n = parseInt(pincode.slice(4, 6), 10) || 0;
  const jitterLat = ((n % 10) - 5) * 0.018;
  const jitterLng = (Math.floor(n / 10) - 2) * 0.022;

  return {
    districtId,
    lat: district.lat + jitterLat,
    lng: district.lng + jitterLng,
  };
}

/** True for a 6-digit pincode in the Kerala range (670000–695999). */
export function isValidKeralaPincode(pincode: string): boolean {
  if (!/^\d{6}$/.test(pincode)) return false;
  const n = parseInt(pincode, 10);
  return n >= 670000 && n <= 695999;
}

export function filterReports(
  list: CommunityReport[],
  category: ReportCategoryFilter,
): CommunityReport[] {
  if (category === 'all') return list;
  return list.filter((r) => r.category === category);
}

export function sortReports(list: CommunityReport[], sort: ReportSort): CommunityReport[] {
  const copy = [...list];
  if (sort === 'top') {
    copy.sort((a, b) => b.votes - a.votes);
  } else {
    copy.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  }
  return copy;
}
