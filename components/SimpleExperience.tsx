import React, { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../constants';

const SimpleExperience: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Data & AI' | 'Cloud & Security'>('All');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const categorized = EXPERIENCES.map(exp => {
    const text = ((exp.role || '') + ' ' + (exp.company || '') + ' ' + (exp.summary || '')).toLowerCase();
    let cat: 'Data & AI' | 'Cloud & Security' = 'Data & AI';
    if (text.includes('cloud') || text.includes('security') || text.includes('zscaler') || text.includes('infrastructure')) {
      cat = 'Cloud & Security';
    }
    return { ...exp, cat };
  });

  const filtered = filter === 'All' ? categorized : categorized.filter(e => e.cat === filter);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Work Experience & Internships</h2>
          <p className="text-sm text-slate-500 mt-1">
            Proven track record in MLOps, Cloud Infrastructure, and Data Science across enterprise and research teams.
          </p>
        </div>

        {/* Filters */}
        <div className="flex gap-1.5 p-1 bg-slate-100 rounded-xl">
          {(['All', 'Data & AI', 'Cloud & Security'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                filter === tab ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {filtered.map((exp, idx) => {
          const isExpanded = expandedIndex === idx;
          const achievements = exp.achievements || [];
          return (
            <div
              key={exp.role + exp.company + idx}
              className={`rounded-2xl border transition-all duration-200 bg-white ${
                isExpanded ? 'border-indigo-500/50 shadow-md' : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {/* Header clickable */}
              <div
                onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                className="p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer select-none"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-base font-bold text-slate-900">{exp.role}</h3>
                    <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                      {exp.company}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} /> {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={13} /> {exp.location}
                    </span>
                  </div>
                </div>

                <button 
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                  aria-label="Toggle details"
                >
                  {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
              </div>

              {/* Collapsible Details */}
              {isExpanded && (
                <div className="px-4 pb-5 sm:px-5 pt-2 border-t border-slate-100">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {exp.summary}
                  </p>

                  {achievements.length > 0 && (
                    <div className="mb-2">
                      <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Key Responsibilities & Deliverables
                      </h4>
                      <ul className="space-y-1.5">
                        {achievements.map((item, hIdx) => (
                          <li key={hIdx} className="text-xs text-slate-700 flex items-start gap-2">
                            <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SimpleExperience;
