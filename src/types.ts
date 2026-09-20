export type ResearchDomain =
  | 'All'
  | 'Post-Quantum & Cryptography'
  | 'Blockchain & Smart Systems'
  | 'Machine Learning & AI'
  | 'Cyber Security & Forensics'
  | 'Cloud & Distributed Computing';

export type PublicationType = 'Journal' | 'Conference' | 'Book' | 'Review' | 'Preprint';

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: PublicationType;
  domain: ResearchDomain;
  doi?: string;
  url?: string;
  abstract: string;
  keywords: string[];
  bibtex: string;
  citationsCount?: number;
  highlight?: boolean;
}

export interface Course {
  code: string;
  title: string;
  level: 'Undergraduate' | 'Postgraduate' | 'Diploma';
  semester: string;
  description: string;
  topics: string[];
  labHighlights: string[];
  prerequisites?: string;
  recommendedText: string;
  syllabusUrl?: string;
}

export interface AcademicRole {
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'academic' | 'administrative' | 'industry';
  responsibilities: string[];
  badge?: string;
}

export interface Education {
  degree: string;
  discipline: string;
  institution: string;
  universityOrBoard: string;
  year: string;
  gradeOrScore?: string;
  focusArea?: string;
  status?: 'Completed' | 'Pursuing';
}

export interface StudentProject {
  id: string;
  title: string;
  batch: string;
  technologies: string[];
  outcome: string;
  category: string;
  description?: string;
  students?: string[];
}

export interface WorkshopOrEvent {
  id: string;
  title: string;
  role: string;
  organizedBy: string;
  date: string;
  description: string;
  highlights: string[];
  fundingOrSponsor?: string;
  participantsCount?: string | number;
}

export interface ResourceItem {
  id?: string;
  title: string;
  subject: string;
  format: string;
  size: string;
  description: string;
  category?: string;
  semester?: string;
}
