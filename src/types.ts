export type Lang = 'en' | 'ml' | 'hi';

export type Severity = 'high' | 'medium' | 'low';

export type TabId = 'overview' | 'map' | 'news' | 'learn' | 'parents' | 'community';

/** Mirrors the `districts` Supabase table. District-level data only. */
export type District = {
  id: string;
  name_en: string;
  name_ml: string;
  name_hi: string;
  lat: number;
  lng: number;
  case_count: number;
  arrests: number;
  severity: Severity;
  source_url: string;
  as_of: string;
};

export type NewsCategory = 'enforcement' | 'policy' | 'awareness' | 'explainer';

/** Mirrors the `news_items` Supabase table. Headline + short summary + link only. */
export type NewsItem = {
  id: string;
  headline: string;
  ai_summary: string;
  source_name: string;
  source_url: string;
  published_at: string;
  is_toofan_relevant: boolean;
  category: NewsCategory;
  featured?: boolean;
};

/** Mirrors the `education_content` Supabase table. */
export type EducationContent = {
  id: string;
  topic: string;
  audience: 'youth' | 'parent';
  lang: Lang;
  title: string;
  body: string;
};

export type LearnCategory =
  | 'substances'
  | 'warning-signs'
  | 'myths'
  | 'help-friend'
  | 'getting-help'
  | 'legal';

export type LocalizedText = Record<Lang, string>;

export type LearnTopic = {
  id: string;
  category: LearnCategory;
  icon: string;
  title: LocalizedText;
  summary: LocalizedText;
  body: LocalizedText;
  /** Phone numbers to call, rendered as tap-to-call buttons in the detail sheet. */
  helplines?: Array<{ label: LocalizedText; number: string }>;
};

export type ParentSection = 'warning-signs' | 'conversation' | 'what-to-avoid';

export type ParentTopic = {
  id: string;
  section: ParentSection;
  icon: string;
  title: LocalizedText;
  summary: LocalizedText;
  body: LocalizedText;
};

export type CampaignPillar = {
  id: string;
  icon: string;
  title: LocalizedText;
  desc: LocalizedText;
};

export type ReportCategory = 'drug-use' | 'drug-distribution' | 'other';

/** Demo-only. No data is ever sent to a server or stored remotely. */
export type CommunityReport = {
  id: string;
  category: ReportCategory;
  pincode: string;
  districtId: string;
  areaLabel: LocalizedText;
  lat: number;
  lng: number;
  description: string;
  votes: number;
  status: 'new' | 'reviewing' | 'actioned';
  created_at: string;
};
