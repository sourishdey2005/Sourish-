import React from 'react';

interface SkillCategory {
  title: string;
  skills: string[];
  note: string;
}

const CATEGORIES: SkillCategory[] = [
  {
    title: 'DATA',
    skills: ['Python', 'SQL', 'Pandas', 'NumPy', 'Power BI', 'Excel'],
    note: 'ETL contracts, data cleaning, aggregation, exploratory analysis'
  },
  {
    title: 'AI / ML',
    skills: ['Machine Learning', 'Generative AI', 'Statistics', 'Time Series', 'NLP'],
    note: 'Random Matrix Theory, Transformers, Scikit-learn, PyTorch'
  },
  {
    title: 'ENGINEERING',
    skills: ['JavaScript', 'C', 'HTML', 'CSS', 'Git', 'Docker', 'Cloud'],
    note: 'FastAPI, Linux Shell, Kubernetes, Terraform IaC, REST APIs'
  },
  {
    title: 'RESEARCH',
    skills: ['Quantitative Analysis', 'Data Analysis', 'Experimentation', 'Research', 'Problem Solving'],
    note: 'Empirical benchmark ablation, patent drafting, statistical testing'
  }
];

const EditorialSkills: React.FC = () => {
  return (
    <div className="border-t border-zinc-200 divide-y divide-zinc-200">
      {CATEGORIES.map((cat) => (
        <div key={cat.title} className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
          {/* Category Header */}
          <div className="md:col-span-3">
            <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 block mb-1">
              CATEGORY
            </span>
            <h4 className="text-lg font-bold text-zinc-950">
              {cat.title}
            </h4>
          </div>

          {/* Skills Typography List with subtle separators */}
          <div className="md:col-span-6">
            <div className="flex flex-wrap items-center gap-y-2 text-sm sm:text-base font-medium text-zinc-800">
              {cat.skills.map((skill, sIdx) => (
                <React.Fragment key={skill}>
                  <span className="hover:text-blue-600 transition-colors cursor-default">
                    {skill}
                  </span>
                  {sIdx < cat.skills.length - 1 && (
                    <span className="mx-2.5 text-zinc-300 select-none">/</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Context Note */}
          <div className="md:col-span-3 md:text-right">
            <span className="text-xs font-mono text-zinc-400">
              {cat.note}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EditorialSkills;
