import { useState, useCallback } from 'react';
import { seedReports } from '../data/reports';
import { pincodeToDistrict } from './reports';
import { districts } from '../data/districts';
import type { CommunityReport, ReportCategory, LocalizedText } from '../types';

const STORAGE_KEY = 'toofan.community.v1';
const VOTED_KEY = 'toofan.community.voted.v1';

type AddReportInput = {
  category: ReportCategory;
  pincode: string;
  description: string;
};

function loadReports(): CommunityReport[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as CommunityReport[];
  } catch {
    // ignore parse errors
  }
  return seedReports;
}

function saveReports(list: CommunityReport[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch {
    // ignore storage errors
  }
}

function loadVoted(): Set<string> {
  try {
    const raw = localStorage.getItem(VOTED_KEY);
    if (raw) return new Set(JSON.parse(raw) as string[]);
  } catch {
    // ignore
  }
  return new Set();
}

function saveVoted(set: Set<string>): void {
  try {
    localStorage.setItem(VOTED_KEY, JSON.stringify([...set]));
  } catch {
    // ignore
  }
}

export function useCommunityReports() {
  const [reports, setReports] = useState<CommunityReport[]>(loadReports);
  const [votedIds, setVotedIds] = useState<Set<string>>(loadVoted);

  const addReport = useCallback(({ category, pincode, description }: AddReportInput) => {
    const { districtId, lat, lng } = pincodeToDistrict(pincode);
    const district = districts.find((d) => d.id === districtId) ?? districts[0];

    const areaLabel: LocalizedText = {
      en: `${district.name_en} area`,
      ml: `${district.name_ml} മേഖല`,
      hi: `${district.name_hi} क्षेत्र`,
    };

    const report: CommunityReport = {
      id: `r-${Date.now()}`,
      category,
      pincode,
      districtId,
      areaLabel,
      lat,
      lng,
      description,
      votes: 1,
      status: 'new',
      created_at: new Date().toISOString(),
    };

    setReports((prev) => {
      const next = [report, ...prev];
      saveReports(next);
      return next;
    });

    // Auto-vote on own submission
    setVotedIds((prev) => {
      const next = new Set(prev);
      next.add(report.id);
      saveVoted(next);
      return next;
    });
  }, []);

  const toggleVote = useCallback((id: string) => {
    setVotedIds((prevVoted) => {
      const next = new Set(prevVoted);
      const hasVoted = next.has(id);
      if (hasVoted) {
        next.delete(id);
      } else {
        next.add(id);
      }
      saveVoted(next);

      setReports((prevReports) => {
        const updated = prevReports.map((r) =>
          r.id === id ? { ...r, votes: r.votes + (hasVoted ? -1 : 1) } : r,
        );
        saveReports(updated);
        return updated;
      });

      return next;
    });
  }, []);

  return { reports, votedIds, addReport, toggleVote };
}
