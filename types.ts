
export interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  summary: string;
  achievements: string[];
}

export type ProjectDomain = 'ML' | 'Cloud' | 'Finance' | 'IoT' | 'NLP' | 'All';

export interface Project {
  title: string;
  description: string;
  achievements: string[];
  stack: string[];
  domain: ProjectDomain;
  github?: string;
  demo?: string;
  chartData?: { name: string; value: number }[];
}

export interface Publication {
  title: string;
  journal: string;
  date: string;
  abstract: string;
  type: 'publication' | 'patent';
  link?: string;
}

export interface Certification {
  provider: string;
  items: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  score: string;
  details: string;
  coursework?: string[];
}

export interface Honor {
  title: string;
  institution: string;
  date: string;
  description?: string;
}
