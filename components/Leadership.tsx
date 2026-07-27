import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Calendar, 
  MapPin, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  Award, 
  Sparkles, 
  Building2,
  ChevronRight
} from 'lucide-react';
import { LEADERSHIP_ROLES } from '../constants';
import { Experience as ExperienceType } from '../types';

const Leadership: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<ExperienceType | null>(null);

  // MotionDiv component
  const MotionDiv = motion.div;

  return (
    <section id="leadership" className="py-20 bg-slate-50/50 dark:bg-slate-900/20 overflow-hidden border-y border-slate-100 dark:border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/50 dark:border-indigo-800/40 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Users size={14} /> Community & Governance
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 dark:text-white mb-3">
            Technical Leadership & Initiatives
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-base">
            Leading research wings, automating institutional infrastructure, and mentoring developer communities across campus societies.
          </p>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mt-4" />
        </MotionDiv>

        {/* Compact Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {LEADERSHIP_ROLES.map((role, idx) => (
            <MotionDiv
              key={role.role + role.company + idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              onClick={() => setSelectedRole(role)}
              className="group bg-white dark:bg-slate-900/60 p-5 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Header info */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                      <Building2 size={13} className="flex-shrink-0" />
                      <span>{role.company}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                      {role.role}
                    </h3>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-lg flex-shrink-0 border border-slate-200/50 dark:border-slate-700/50">
                    <Calendar size={11} className="text-indigo-500" />
                    {role.duration}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-slate-400 mb-3 font-medium">
                  <MapPin size={11} />
                  <span>{role.location}</span>
                </div>

                {/* Summary */}
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                  {role.summary}
                </p>
              </div>

              {/* Bottom key metric / highlight */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-medium line-clamp-1">
                  <Sparkles size={12} className="text-indigo-500 flex-shrink-0" />
                  <span className="truncate">{role.achievements[0]}</span>
                </div>
                <span className="inline-flex items-center gap-1 font-bold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform flex-shrink-0 ml-2">
                  <ChevronRight size={15} />
                </span>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedRole && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedRole(null)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
            />
            <MotionDiv
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 sm:p-8 border-b border-slate-100 dark:border-slate-800/80 relative bg-indigo-50/30 dark:bg-indigo-950/20">
                <button 
                  onClick={() => setSelectedRole(null)}
                  className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-full bg-slate-100 dark:bg-slate-800 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-xs mb-2 uppercase tracking-widest">
                  <Award size={13} />
                  Leadership Role
                </div>
                
                <h3 className="text-xl sm:text-2xl font-heading font-black text-slate-900 dark:text-white mb-2 leading-tight">
                  {selectedRole.role}
                </h3>
                
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-600 dark:text-slate-300 text-sm font-semibold">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">{selectedRole.company}</span>
                  <span className="text-slate-300 dark:text-slate-700">•</span>
                  <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                    <Calendar size={12} />
                    {selectedRole.duration}
                  </span>
                  <span className="text-slate-300 dark:text-slate-700">•</span>
                  <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                    <MapPin size={12} />
                    {selectedRole.location}
                  </span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6 overflow-y-auto custom-scrollbar flex-1">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2.5 flex items-center">
                    <ArrowRight size={13} className="mr-1.5 text-indigo-600" /> Mission & Responsibility
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 italic">
                    "{selectedRole.summary}"
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center">
                    <CheckCircle2 size={13} className="mr-1.5 text-indigo-600" /> Key Impact & Leadership Outcomes
                  </h4>
                  <div className="space-y-2.5">
                    {selectedRole.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3 p-3.5 bg-slate-50 dark:bg-slate-800/30 rounded-xl border border-slate-100 dark:border-slate-800/60">
                        <CheckCircle2 size={16} className="mt-0.5 text-indigo-500 flex-shrink-0" />
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
                  onClick={() => setSelectedRole(null)}
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

export default Leadership;
