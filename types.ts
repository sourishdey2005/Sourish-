
export interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  summary: string;
  achievements: string[];
}

export type ProjectDomain = 'ML' | 'Cloud' | 'Finance' | 'IoT' | 'All';

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
  abstract: string;
  type: 'publication' | 'patent';
}

export interface Certification {
  provider: string;
  items: string[];
}
