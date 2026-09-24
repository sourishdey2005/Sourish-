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
    <div id="education-content" className="border-t border-white/10 divide-y divide-white/5">
      {EDUCATION_ENTRIES.map((edu, idx) => (
        <motion.div
          key={idx}
          id={`education-item-${idx}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="py-8 sm:py-10 transition-all duration-300 group rounded-xl px-4 sm:px-6 hover:bg-white/5 hover:border hover:border-orange-500/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
            {/* Left: Duration and Location */}
            <div className="md:col-span-3 space-y-1">
              <span className="text-xs font-mono text-orange-400 font-semibold flex items-center gap-1.5">
                <Calendar size={12} /> {edu.duration}
              </span>
              <span className="text-[11px] font-mono text-stone-500 flex items-center gap-1">
                <MapPin size={11} /> {edu.location}
              </span>
              {edu.statusBadge && (
                <span className="inline-flex items-center gap-1 mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                  <CheckCircle2 size={10} /> {edu.statusBadge}
                </span>
              )}
            </div>

            {/* Center: Institution & Degree */}
            <div className="md:col-span-5 space-y-2">
              <div className="flex items-center gap-2">
                <GraduationCap size={16} className="text-orange-400 shrink-0" />
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                  {edu.institution}
                </h3>
              </div>
              <h4 className="text-sm font-medium text-stone-300">
                {edu.degree}
              </h4>
              {edu.details && (
                <p className="text-xs text-stone-400 leading-relaxed pt-1">
                  {edu.details}
                </p>
              )}
            </div>

            {/* Right: Academic Performance Badges */}
            <div className="md:col-span-4 flex flex-wrap gap-2 md:justify-end items-center">
              {edu.scores ? (
                edu.scores.map((score, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-right min-w-[120px] backdrop-blur-sm group-hover:border-orange-500/30 transition-colors"
                  >
                    <span className="text-[10px] font-mono text-stone-400 block uppercase">
                      {score.label}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white font-mono flex items-center justify-end gap-1 text-orange-300">
                      <Award size={13} className="text-[#ff8a1f]" />
                      {score.value}
                    </span>
                  </div>
                ))
              ) : (
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-right min-w-[130px] backdrop-blur-sm">
                  <span className="text-[10px] font-mono text-stone-400 block uppercase">
                    DEGREE STATUS
                  </span>
                  <span className="text-sm font-bold text-white font-mono text-orange-300">
                    B.Tech In Progress
                  </span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default EditorialEducation;
