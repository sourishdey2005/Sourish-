import React from 'react';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { LEADERSHIP_ROLES } from '../constants';

const SimpleLeadership: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="border-b border-slate-100 pb-4">
        <h2 className="text-2xl font-bold text-slate-900">Technical Leadership & Initiatives</h2>
        <p className="text-sm text-slate-500 mt-1">
          Directing engineering student chapters, organizing technical hackathons, and spearheading research initiatives.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {LEADERSHIP_ROLES.map((role, idx) => {
          const achievements = role.achievements || [];
          return (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                    {role.company}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {role.duration}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1">{role.role}</h3>
                <p className="text-xs text-slate-500 flex items-center gap-1 mb-3">
                  <MapPin size={12} /> {role.location}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {role.summary}
                </p>

                {achievements.length > 0 && (
                  <div className="space-y-1.5 mb-2">
                    {achievements.slice(0, 3).map((h, hIdx) => (
                      <div key={hIdx} className="text-xs text-slate-700 flex items-start gap-1.5">
                        <CheckCircle2 size={13} className="text-indigo-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SimpleLeadership;
