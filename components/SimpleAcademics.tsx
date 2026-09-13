import React from 'react';
import { GraduationCap, Award, CheckCircle2, Star } from 'lucide-react';
import { EDUCATION_DATA, CERTIFICATIONS, HONORS } from '../constants';

const SimpleAcademics: React.FC = () => {
  return (
    <div className="space-y-10">
      {/* Education */}
      <div>
        <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
          <GraduationCap className="text-indigo-600" size={20} />
          <h2 className="text-xl font-bold text-slate-900">Academic Background</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {EDUCATION_DATA.map((edu, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-indigo-600">{edu.duration}</span>
                  <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-bold border border-emerald-100">
                    SCORE: {edu.score}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900">{edu.institution}</h3>
                <p className="text-xs font-semibold text-slate-600 mb-2">{edu.degree}</p>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">{edu.details}</p>
              </div>

              {edu.coursework && (
                <div className="pt-3 border-t border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                    Relevant Coursework
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map(c => (
                      <span key={c} className="px-2 py-0.5 bg-slate-50 text-slate-600 text-[11px] rounded border border-slate-200">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
          <Award className="text-indigo-600" size={20} />
          <h2 className="text-xl font-bold text-slate-900">Professional Certifications</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.provider} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                  {cert.provider}
                </span>
                <Star size={14} className="text-amber-400 fill-amber-400" />
              </div>
              <ul className="space-y-2">
                {cert.items.map((item) => (
                  <li key={item} className="text-xs text-slate-700 flex items-start gap-2">
                    <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Honors & Accolades */}
      <div>
        <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
          <Star className="text-amber-500" size={20} />
          <h2 className="text-xl font-bold text-slate-900">Honors & Awards</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {HONORS.map((h, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider block mb-1">
                  {h.date}
                </span>
                <h4 className="text-sm font-bold text-slate-900 leading-snug mb-1">{h.title}</h4>
                <p className="text-[11px] font-medium text-slate-500 mb-2">{h.institution}</p>
              </div>
              <p className="text-xs text-slate-600 italic">"{h.description}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimpleAcademics;
