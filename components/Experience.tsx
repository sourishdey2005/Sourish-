
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  Building2
} from 'lucide-react';
import { EXPERIENCES } from '../constants';
import { Experience as ExperienceType } from '../types';

type CategoryFilter = 'All' | 'Data & AI' | 'Cloud & Security' | 'Leadership';

const Experience: React.FC = () => {
  const [selectedExp, setSelectedExp] = useState<ExperienceType | null>(null);
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('All');
  const [showAll, setShowAll] = useState<boolean>(false);

  // Fix: Type casting to avoid motion prop errors
  const MotionDiv = motion.div as any;

  // Categorize experiences dynamically
  const categorizedExperiences = useMemo(() => {
    return EXPERIENCES.map(exp => {
      let category: CategoryFilter = 'Data & AI';
      const roleLower = (exp.role + ' ' + exp.company + ' ' + exp.summary).toLowerCase();
      
      if (roleLower.includes('cloud') || roleLower.includes('zscaler') || roleLower.includes('security') || roleLower.includes('infrastructure')) {
        category = 'Cloud & Security';
      } else if (roleLower.includes('head') || roleLower.includes('secretary') || roleLower.includes('executive team member') || roleLower.includes('kinetex') || roleLower.includes('kitpd2s') || roleLower.includes('cybervault')) {
        category = 'Leadership';
      } else {
        category = 'Data & AI';
      }
      
      return { ...exp, category };
    });
  }, []);

  const filteredExperiences = useMemo(() => {
    if (activeFilter === 'All') return categorizedExperiences;
    return categorizedExperiences.filter(e => e.category === activeFilter);
  }, [activeFilter, categorizedExperiences]);

  // Show top 5 by default unless expanded or filtered
  const visibleExperiences = useMemo(() => {
    if (showAll || activeFilter !== 'All') {
      return filteredExperiences;
    }
    return filteredExperiences.slice(0, 5);
  }, [filteredExperiences, showAll, activeFilter]);

  const counts = useMemo(() => {
    return {
      All: EXPERIENCES.length,
      'Data & AI': categorizedExperiences.filter(e => e.category === 'Data & AI').length,
      'Cloud & Security': categorizedExperiences.filter(e => e.category === 'Cloud & Security').length,
      'Leadership': categorizedExperiences.filter(e => e.category === 'Leadership').length,
    };
  }, [categorizedExperiences]);

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 dark:bg-primary-950/60 border border-primary-200/50 dark:border-primary-800/40 text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Briefcase size={14} /> Career Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 dark:text-white mb-3">
            Professional Journey
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-base">
            A chronological timeline of my internships, research initiatives, and technical leadership roles ({EXPERIENCES.length} Total Roles).
          </p>
          <div className="w-16 h-1 bg-primary-600 mx-auto rounded-full mt-4" />
        </MotionDiv>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {(['All', 'Data & AI', 'Cloud & Security', 'Leadership'] as CategoryFilter[]).map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                if (filter !== 'All') setShowAll(true);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${
                activeFilter === filter
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white shadow-md'
                  : 'bg-slate-50 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <span>{filter}</span>
              <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-black ${
                activeFilter === filter
                  ? 'bg-white/20 dark:bg-slate-900/20 text-white dark:text-slate-900'
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}>
                {counts[filter]}
              </span>
            </button>
          ))}
        </div>

        {/* Compact Timeline Streamline */}
        <div className="relative">
          {/* Vertical Line for Mobile & Desktop */}
          <div className="absolute left-3.5 sm:left-6 top-2 bottom-2 w-0.5 bg-slate-200 dark:bg-slate-800/80" />

          <div className="space-y-4 relative">
            <AnimatePresence mode="sync">
              {visibleExperiences.map((exp, index) => (
                <MotionDiv
                  key={exp.company + exp.role + index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.3) }}
                  className="relative pl-10 sm:pl-14"
                >
                  {/* Compact Timeline Node Icon */}
                  <div className="absolute left-1.5 sm:left-4 top-4 -translate-x-1/2 w-5 h-5 rounded-full bg-white dark:bg-slate-950 border-2 border-primary-600 flex items-center justify-center z-10 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-primary-600 animate-pulse" />
                  </div>

                  {/* Compact Card Container */}
                  <div 
                    onClick={() => setSelectedExp(exp)}
                    className="group bg-slate-50/80 dark:bg-slate-900/40 hover:bg-white dark:hover:bg-slate-900/80 p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 hover:border-primary-500/40 dark:hover:border-primary-500/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary-500/5 cursor-pointer"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {exp.role}
                        </h3>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-200/60 dark:bg-slate-800/80 px-2 py-0.5 rounded-md">
                          <Building2 size={12} className="text-primary-500" />
                          {exp.company}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium flex-shrink-0">
                        <span className="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 font-bold bg-primary-50 dark:bg-primary-950/50 px-2.5 py-0.5 rounded-full border border-primary-200/40 dark:border-primary-900/30">
                          <Calendar size={12} />
                          {exp.duration}
                        </span>
                        <span className="inline-flex items-center gap-1 text-slate-500 dark:text-slate-400">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-3 line-clamp-2">
                      {exp.summary}
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-200/50 dark:border-slate-800/50 text-xs">
                      <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-medium line-clamp-1">
                        <Sparkles size={12} className="text-primary-500 flex-shrink-0" />
                        <span className="truncate">{exp.achievements[0]}</span>
                      </div>
                      <span className="inline-flex items-center gap-1 font-bold text-primary-600 dark:text-primary-400 group-hover:translate-x-1 transition-transform flex-shrink-0 ml-2">
                        Details <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                </MotionDiv>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Expand / Collapse Toggle Button */}
        {activeFilter === 'All' && EXPERIENCES.length > 5 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs sm:text-sm hover:scale-105 transition-all shadow-lg shadow-slate-900/10 cursor-pointer"
            >
              {showAll ? (
                <>
                  <span>Show Top Highlights</span>
                  <ChevronUp size={16} />
                </>
              ) : (
                <>
                  <span>View All {EXPERIENCES.length} Experiences</span>
                  <ChevronDown size={16} />
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedExp && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExp(null)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
            />
            <MotionDiv
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 sm:p-8 border-b border-slate-100 dark:border-slate-800/80 relative bg-slate-50/50 dark:bg-slate-950/30">
                <button 
                  onClick={() => setSelectedExp(null)}
                  className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-full bg-slate-100 dark:bg-slate-800 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-bold text-xs mb-2 uppercase tracking-widest">
                  <Calendar size={13} />
                  {selectedExp.duration}
                </div>
                
                <h3 className="text-xl sm:text-2xl font-heading font-black text-slate-900 dark:text-white mb-2 leading-tight">
                  {selectedExp.role}
                </h3>
                
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-600 dark:text-slate-300 text-sm font-semibold">
                  <span className="text-primary-600 dark:text-primary-400 font-bold">{selectedExp.company}</span>
                  <span className="text-slate-300 dark:text-slate-700">•</span>
                  <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                    <MapPin size={13} />
                    {selectedExp.location}
                  </span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6 overflow-y-auto custom-scrollbar flex-1">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2.5 flex items-center">
                    <ArrowRight size={13} className="mr-1.5 text-primary-600" /> Executive Overview
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 italic">
                    "{selectedExp.summary}"
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center">
                    <Briefcase size={13} className="mr-1.5 text-primary-600" /> Key Contributions & Outcomes
                  </h4>
                  <div className="space-y-2.5">
                    {selectedExp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3 p-3.5 bg-slate-50 dark:bg-slate-800/30 rounded-xl border border-slate-100 dark:border-slate-800/60">
                        <CheckCircle2 size={16} className="mt-0.5 text-primary-500 flex-shrink-0" />
                        <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800/80 flex justify-end bg-slate-50/50 dark:bg-slate-950/30">
                <button 
                  onClick={() => setSelectedExp(null)}
                  className="px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs sm:text-sm rounded-xl hover:opacity-90 transition-all shadow-md"
                >
                  Close Details
                </button>
              </div>
            </MotionDiv>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;

