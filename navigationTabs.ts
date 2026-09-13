import React from 'react';
import { 
  User, 
  Briefcase, 
  FolderGit2, 
  TrendingUp, 
  Wrench, 
  TerminalSquare, 
  GraduationCap, 
  BookOpen, 
  ShieldCheck, 
  Mail,
  Users
} from 'lucide-react';

export type SectionTab = 
  | 'overview' 
  | 'experience' 
  | 'leadership'
  | 'projects' 
  | 'quant' 
  | 'skills' 
  | 'terminal' 
  | 'academics' 
  | 'research' 
  | 'patents' 
  | 'contact';

export interface TabItem {
  id: SectionTab;
  label: string;
  badge?: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export const NAVIGATION_TABS: TabItem[] = [
  { id: 'overview', label: 'Overview', icon: User },
  { id: 'experience', label: 'Experience', badge: '12+', icon: Briefcase },
  { id: 'leadership', label: 'Leadership', icon: Users },
  { id: 'projects', label: 'Projects', badge: '15+', icon: FolderGit2 },
  { id: 'quant', label: 'Quant Finance', icon: TrendingUp },
  { id: 'skills', label: 'Tech Stack', icon: Wrench },
  { id: 'terminal', label: 'Terminal', icon: TerminalSquare },
  { id: 'academics', label: 'Education & Certs', icon: GraduationCap },
  { id: 'research', label: 'Research', icon: BookOpen },
  { id: 'patents', label: 'Patents', badge: 'IP', icon: ShieldCheck },
  { id: 'contact', label: 'Contact', icon: Mail },
];
