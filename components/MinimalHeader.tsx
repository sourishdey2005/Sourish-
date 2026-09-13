import React from 'react';
import { Download, Mail, ExternalLink, Github, Linkedin, MapPin } from 'lucide-react';
import { SectionTab } from '../navigationTabs';

interface MinimalHeaderProps {
  onSelectTab: (tab: SectionTab) => void;
}

const MinimalHeader: React.FC<MinimalHeaderProps> = ({ onSelectTab }) => {
  return (
    <header className="border-b border-slate-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Main Name & Title */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                Available for Engineering & Research Roles
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Sourish Dey
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-1 font-medium">
              Data Scientist &bull; MLOps & Cloud Infrastructure Engineer &bull; KIIT '26
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-2.5">
              <span className="flex items-center gap-1">
                <MapPin size={13} className="text-slate-400" /> Bhubaneswar, India
              </span>
              <span>&bull;</span>
              <a 
                href="mailto:sourish713321@gmail.com" 
                className="hover:text-indigo-600 transition-colors"
              >
                sourish713321@gmail.com
              </a>
              <span>&bull;</span>
              <a 
                href="tel:+919832264627" 
                className="hover:text-indigo-600 transition-colors"
              >
                +91 98322 64627
              </a>
            </div>
          </div>

          {/* Direct Action Buttons & Socials */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://drive.google.com/file/d/1yQQk4wJGgxMhe-zfMXijzPUuvV0PS29O/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 text-white text-xs font-semibold rounded-xl hover:bg-indigo-700 shadow-sm transition-all cursor-pointer"
            >
              <Download size={14} /> Resume (PDF)
            </a>

            <button
              onClick={() => onSelectTab('contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-100 text-slate-700 text-xs font-semibold rounded-xl hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <Mail size={14} /> Contact
            </button>

            <div className="flex items-center gap-1.5 border-l border-slate-200 pl-3">
              <a
                href="https://github.com/sourishdey2005"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
                title="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/sourish-dey-20b170206/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-500 hover:text-indigo-600 rounded-lg hover:bg-slate-100 transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://linktr.ee/Sourishdey"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
                title="Linktree"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MinimalHeader;
