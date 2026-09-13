import React from 'react';
import { Cloud, Brain, Code2 } from 'lucide-react';
import { SKILLS } from '../constants';

const SimpleSkills: React.FC = () => {
  const cloudSkills = Array.isArray(SKILLS.cloud) ? SKILLS.cloud : [];
  const aiSkills = Array.isArray(SKILLS.ai) ? SKILLS.ai : [];
  const programmingSkills = Array.isArray(SKILLS.programming) ? SKILLS.programming : [];

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-100 pb-4">
        <h2 className="text-2xl font-bold text-slate-900">Technical Skills & Arsenal</h2>
        <p className="text-sm text-slate-500 mt-1">
          Proficiencies across Cloud Infrastructure, Machine Learning Systems, Database Architecture, and DevOps tooling.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cloud & DevOps */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200">
          <div className="flex items-center gap-2 mb-4">
            <Cloud className="text-indigo-600" size={18} />
            <h3 className="text-base font-bold text-slate-900">Cloud & DevOps (IaC)</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {cloudSkills.map(skill => {
              const name = typeof skill === 'string' ? skill : (skill as any).name;
              return (
                <span
                  key={name}
                  className="px-3 py-1.5 bg-indigo-50/70 text-indigo-900 font-medium text-xs rounded-xl border border-indigo-100"
                >
                  {name}
                </span>
              );
            })}
          </div>
        </div>

        {/* AI/ML */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200">
          <div className="flex items-center gap-2 mb-4">
            <Brain className="text-indigo-600" size={18} />
            <h3 className="text-base font-bold text-slate-900">AI / ML & Data Science</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {aiSkills.map(skill => {
              const name = typeof skill === 'string' ? skill : (skill as any).name;
              return (
                <span
                  key={name}
                  className="px-3 py-1.5 bg-emerald-50/70 text-emerald-900 font-medium text-xs rounded-xl border border-emerald-100"
                >
                  {name}
                </span>
              );
            })}
          </div>
        </div>

        {/* Programming */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200">
          <div className="flex items-center gap-2 mb-4">
            <Code2 className="text-indigo-600" size={18} />
            <h3 className="text-base font-bold text-slate-900">Languages & Systems</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {programmingSkills.map(skill => {
              const name = typeof skill === 'string' ? skill : (skill as any).name;
              return (
                <span
                  key={name}
                  className="px-3 py-1.5 bg-slate-100 text-slate-800 font-medium text-xs rounded-xl border border-slate-200"
                >
                  {name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleSkills;
