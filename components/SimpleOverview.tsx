import React from 'react';
import { 
  Download, 
  ArrowUpRight, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  FolderGit2, 
  ShieldCheck, 
  Award,
  BookOpen
} from 'lucide-react';
import { SectionTab } from '../navigationTabs';

interface SimpleOverviewProps {
  onNavigateTab: (tab: SectionTab) => void;
}

const SimpleOverview: React.FC<SimpleOverviewProps> = ({ onNavigateTab }) => {
  return (
    <div className="space-y-8">
      {/* Intro Bio & Key Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
            Engineering scalable cloud infrastructure, reproducible machine learning systems, and quantitative trading platforms.
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            I am a B.Tech Computer Science student at KIIT University (Class of 2026) specializing in high-throughput MLOps pipelines, containerized orchestration on Kubernetes, Zero Trust network architectures, and quantitative finance analytics.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            With over 12 professional internships, filed Indian patents, and scientific publications, I focus on turning complex computational theories into resilient, production-ready systems.
          </p>

          <div className="pt-2 flex flex-wrap gap-2">
            <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-md">
              AWS & GCP Cloud
            </span>
            <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-md">
              Kubernetes & Docker
            </span>
            <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-md">
              Terraform (IaC)
            </span>
            <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-md">
              PyTorch & MLOps
            </span>
            <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-md">
              Quantitative Backtesting
            </span>
            <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-md">
              Zero Trust Security
            </span>
          </div>
        </div>

        {/* Quick Highlights Card */}
        <div className="lg:col-span-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Current Status
          </h3>

          <div className="space-y-2.5 text-xs">
            <div className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1 shrink-0" />
              <span className="text-slate-700">
                <strong>Available</strong> for Full-Time Engineering & Research Roles
              </span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin size={14} className="text-slate-400 shrink-0 mt-0.5" />
              <span className="text-slate-600">Bhubaneswar, Odisha, India</span>
            </div>
            <div className="flex items-start gap-2">
              <GraduationCap size={14} className="text-slate-400 shrink-0 mt-0.5" />
              <span className="text-slate-600">KIIT University — CGPA: 7.74/10</span>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-200/70 flex flex-col gap-2">
            <a
              href="https://drive.google.com/file/d/1yQQk4wJGgxMhe-zfMXijzPUuvV0PS29O/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 bg-indigo-600 text-white rounded-xl text-xs font-bold text-center hover:bg-indigo-700 transition-colors flex items-center justify-center gap-1.5"
            >
              <Download size={13} /> Download Full CV (PDF)
            </a>
            <button
              onClick={() => onNavigateTab('contact')}
              className="w-full py-2 px-3 bg-white text-slate-700 border border-slate-200 rounded-xl text-xs font-semibold text-center hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Contact Sourish
            </button>
          </div>
        </div>
      </div>

      {/* Quick Navigation Cards */}
      <div className="pt-4 border-t border-slate-100">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
          Direct Section Shortcuts
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <button
            onClick={() => onNavigateTab('experience')}
            className="p-3.5 rounded-xl border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/40 text-left transition-all group cursor-pointer"
          >
            <Briefcase size={16} className="text-indigo-600 mb-1.5" />
            <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-600">Experience</div>
            <div className="text-[11px] text-slate-400">12+ Roles</div>
          </button>

          <button
            onClick={() => onNavigateTab('projects')}
            className="p-3.5 rounded-xl border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/40 text-left transition-all group cursor-pointer"
          >
            <FolderGit2 size={16} className="text-indigo-600 mb-1.5" />
            <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-600">Projects</div>
            <div className="text-[11px] text-slate-400">15+ Systems</div>
          </button>

          <button
            onClick={() => onNavigateTab('quant')}
            className="p-3.5 rounded-xl border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/40 text-left transition-all group cursor-pointer"
          >
            <ArrowUpRight size={16} className="text-indigo-600 mb-1.5" />
            <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-600">Quant Finance</div>
            <div className="text-[11px] text-slate-400">RMT & Streamlit</div>
          </button>

          <button
            onClick={() => onNavigateTab('skills')}
            className="p-3.5 rounded-xl border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/40 text-left transition-all group cursor-pointer"
          >
            <ShieldCheck size={16} className="text-indigo-600 mb-1.5" />
            <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-600">Tech Stack</div>
            <div className="text-[11px] text-slate-400">Cloud, AI, DevOps</div>
          </button>

          <button
            onClick={() => onNavigateTab('research')}
            className="p-3.5 rounded-xl border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/40 text-left transition-all group cursor-pointer"
          >
            <BookOpen size={16} className="text-indigo-600 mb-1.5" />
            <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-600">Research</div>
            <div className="text-[11px] text-slate-400">Papers & Preprints</div>
          </button>

          <button
            onClick={() => onNavigateTab('academics')}
            className="p-3.5 rounded-xl border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/40 text-left transition-all group cursor-pointer"
          >
            <Award size={16} className="text-indigo-600 mb-1.5" />
            <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-600">Academics</div>
            <div className="text-[11px] text-slate-400">Education & Honors</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleOverview;
