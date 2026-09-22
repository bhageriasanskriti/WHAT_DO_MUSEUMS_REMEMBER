export type MuseumId = 'aic' | 'cmoa' | 'teenie' | 'moma' | 'nga';

export interface MuseumObject {
  id: string;
  dataset: MuseumId;
  museum: string;
  title: string;
  creator: string | null;
  creator_id?: string | null;
  creator_nationality: string | null;
  date_display: string | null;
  year_start: number | null;
  year_end: number | null;
  period?: string | null;
  place: string | null;
  region?: string | null;
  country?: string | null;
  culture?: string | null;
  classification: string | null;
  object_type?: string | null;
  medium: string | null;
  materials?: string[];
  dimensions: string | null;
  description: string | null;
  provenance: string | null;
  inscription: string | null;
  themes?: string[];
  image_url: string | null;
  local_image?: string | null;
  object_url: string | null;
  credit_line: string | null;
  source_dataset: string;
}

export interface InstitutionSummary {
  id: MuseumId;
  institution: string;
  shortName: string;
  records: number;
  imageCount: number;
  imagePct: number;
  dateCount: number;
  datePct: number;
  creatorCount: number;
  creatorPct: number;
  objectUrls: number;
  objectUrlPct: number;
  accentColor: string;
  topTypes: { name: string; count: number }[];
  highlightNotes: string;
}

export interface ChapterConfig {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  question: string;
  dataMode: 'qualitative' | 'quantitative' | 'mixed';
  sectionAnchor: string;
}

export interface TeenieKeyword {
  keyword: string;
  occurrences: number;
  pct: number;
  category: 'Subject' | 'Demographic' | 'Place' | 'Institution';
}
