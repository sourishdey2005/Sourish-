import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award, CheckCircle2 } from 'lucide-react';

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
    degree: "Bachelor of Technology (B.Tech.) in Computer Science and Engineering",
    duration: "Jul 2023 – Jul 2027 (Expected)",
    statusBadge: "Currently Pursuing",
    details: "Specializing in Data Science, Machine Learning, Analytics Engineering, and Distributed Systems."
  },
  {
    institution: "Hem Sheela Model School",
    location: "Durgapur, West Bengal",
    degree: "Senior Secondary (CBSE – 12th) & Secondary (CBSE – 10th)",
    duration: "2020 – 2023",
    scores: [
      { label: "Senior Secondary (CBSE – 12th)", value: "90.8%" },
      { label: "Secondary (CBSE – 10th)", value: "98.0%" }
    ],
    details: "Graduated with 98.0% CBSE Secondary Distinction and 90.8% Senior Secondary academic standing."
  }
];

const EditorialEducation: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {EDUCATION_ENTRIES.map((edu, idx) => (
        <motion.article
          key={edu.institution}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
          className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:border-[#ff4d00]/35 hover:bg-[#100502] transition-all duration-300 p-6 sm:p-7"
        >
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-xl bg-[#ff4d00]/10 border border-[#ff4d00]/25 flex items-center justify-center text-[#ff8a3d] group-hover:bg-[#ff4d00]/15 transition-colors">
                <GraduationCap size={17} />
              </span>
              <span className="font-condensed text-[10px] uppercase tracking-[0.2em] text-stone-500">
                {String(idx + 1).padStart(2, '0')} / Academic
              </span>
            </div>
            {edu.statusBadge && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/[0.07] border border-emerald-500/25 font-condensed text-[9px] uppercase tracking-[0.14em] text-emerald-400 whitespace-nowrap">
                <CheckCircle2 size={9} /> {edu.statusBadge}
              </span>
            )}
          </div>

          <h3 className="font-display uppercase text-white text-xl sm:text-2xl leading-[1.05] tracking-[0.01em] group-hover:text-[#ffb07a] transition-colors">
            {edu.institution}
          </h3>
          <p className="mt-2 text-[13px] text-stone-400 leading-snug">
            {edu.degree}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 font-condensed text-[10px] uppercase tracking-[0.16em] text-stone-500">
            <span className="flex items-center gap-1.5">
              <Calendar size={11} className="text-[#ff6a1f]" /> {edu.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={11} className="text-[#ff6a1f]" /> {edu.location}
            </span>
          </div>

          {edu.details && (
            <p className="mt-4 pt-4 border-t border-white/[0.07] text-xs text-stone-400 leading-relaxed">
              {edu.details}
            </p>
          )}

          {edu.scores ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {edu.scores.map((score) => (
                <div
                  key={score.label}
                  className="px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] group-hover:border-[#ff4d00]/25 transition-colors"
                >
                  <span className="font-condensed text-[9px] uppercase tracking-[0.14em] text-stone-500 block">
                    {score.label}
                  </span>
                  <span className="mt-0.5 font-display text-lg text-[#ffb07a] flex items-center gap-1.5 leading-none">
                    <Award size={12} className="text-[#ff8a1f]" />
                    {score.value}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#ff4d00]/[0.06] border border-[#ff4d00]/20">
              <span className="font-condensed text-[9px] uppercase tracking-[0.14em] text-stone-500">
                Degree status
              </span>
              <span className="font-display text-sm text-[#ffb07a] leading-none">
                B.Tech in progress
              </span>
            </div>
          )}
        </motion.article>
      ))}
    </div>
  );
};

export default EditorialEducation;
