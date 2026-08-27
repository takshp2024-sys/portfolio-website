export type ProjectFilterMode = 'all' | 'software-ai' | 'cybersecurity';
export type CareerMode = 'software-ai' | 'cybersecurity';

export interface ProjectMetric {
  label: string;
  value: string;
  subtext?: string;
}

export interface ProjectLinks {
  github?: string;
  liveDemo?: string;
  demoVideo?: string;
  devpost?: string;
  chromeExtension?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  tier: 1 | 2 | 3;
  modes: CareerMode[];
  category: string;
  badge?: string;
  year: string;
  shortDescription: string;
  fullDescription: string[];
  myContribution?: string;
  technologies: string[];
  keyAccomplishments: string[];
  architectureNotes?: string[];
  metrics?: ProjectMetric[];
  links: ProjectLinks;
  isSecurityDashboard?: boolean;
  isPerimeterVisual?: boolean;
  importantNote?: string;
}

export interface HackathonItem {
  id: string;
  title: string;
  subtitle?: string;
  hackathonName: string;
  year: string;
  category: string;
  shortDescription: string;
  myContribution?: string;
  technologies: string[];
  projectId: string;
  links: ProjectLinks;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    modeEmphasis?: CareerMode | 'both';
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  isPrimary: boolean;
  facts: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  category: 'AWS' | 'HP Life' | 'Anthropic';
}

export interface ResumeOption {
  id: 'full' | 'software-ai' | 'cybersecurity';
  label: string;
  title: string;
  description: string;
  path: string;
}
