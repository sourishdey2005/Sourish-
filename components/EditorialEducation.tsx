import React from 'react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  duration: string;
  scores?: { label: string; value: string }[];
  details?: string;
  statusBadge?: string;
}

const EDUCATION_ENTRIES: EducationItem[] = [
  {
    institution: "Kalinga Institute of Industrial Technology (KIIT)",
    location: "Bhubaneswar, India",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    duration: "Jul 2023 – Oct 2027 (Expected)",
    statusBadge: "Currently Pursuing",
    details: "Focusing on data structures, machine learning, statistical modeling, algorithm design, and distributed data systems."
  },
  {
    institution: "Hem Sheela Model School",
    location: "Durgapur, West Bengal",
    degree: "High School & Secondary Education",
    duration: "2020 – 2023",
    scores: [
      { label: "Higher Secondary (12th)", value: "90.8%" },
      { label: "Secondary (10th)", value: "98.0%" }
    ],
    details: "Awarded School Topper for exemplary academic performance in science and mathematics."
  }
];

const EditorialEducation: React.FC = () => {
  return (
    <div id="education-content" className="border-t border-zinc-200 divide-y divide-zinc-100">
      {EDUCATION_ENTRIES.map((edu, idx) => (
        <div
          key={idx}
          id={`education-item-${idx}`}
          className="py-8 sm:py-10 transition-colors group cursor-default"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
            {/* Timeline & Location */}
            <div className="md:col-span-3">
              <span className="text-xs font-mono font-bold text-zinc-400 group-hover:text-zinc-950 transition-colors flex items-center gap-1.5">
                <Calendar size={13} className="text-zinc-400" />
                {edu.duration}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 mt-1">
                <MapPin size={12} className="text-zinc-400" />
                {edu.location}
              </span>
              {edu.statusBadge && (
                <span className="inline-block mt-2.5 px-2 py-0.5 text-[10px] font-mono font-medium rounded-sm bg-blue-50 text-blue-700 border border-blue-200/60">
                  {edu.statusBadge}
                </span>
              )}
            </div>

            {/* Institution & Degree */}
            <div className="md:col-span-5">
              <div className="flex items-start gap-2">
                <GraduationCap size={18} className="text-zinc-400 group-hover:text-blue-600 transition-colors mt-1 shrink-0" />
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-zinc-950 group-hover:text-blue-600 transition-colors">
                    {edu.institution}
                  </h4>
                  <p className="text-sm font-medium text-zinc-700 mt-0.5">
                    {edu.degree}
                  </p>
                </div>
              </div>
            </div>

            {/* Scores & Highlights */}
            <div className="md:col-span-4">
              {edu.scores && (
                <div className="flex flex-wrap gap-2.5 mb-2">
                  {edu.scores.map((score, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-2.5 py-1 rounded bg-zinc-50 border border-zinc-200/80 font-mono text-xs text-zinc-700 flex items-center gap-1.5"
                    >
                      <Award size={12} className="text-zinc-400" />
                      <span className="text-zinc-500">{score.label}:</span>
                      <span className="font-semibold text-zinc-900">{score.value}</span>
                    </div>
                  ))}
                </div>
              )}
              {edu.details && (
                <p className="text-xs text-zinc-500 leading-relaxed font-sans">
                  {edu.details}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EditorialEducation;
