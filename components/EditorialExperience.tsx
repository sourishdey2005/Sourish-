import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ArrowUpRight, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

interface ExperienceItem {
  year: string;
  organization: string;
  role: string;
  oneLineImpact: string;
  details?: string[];
  location?: string;
  badge?: string;
}

const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    year: 'Feb 2026 – Apr 2026',
    organization: 'Infosys Springboard',
    role: 'Data Analytics & Business Intelligence Project Intern',
    oneLineImpact: 'Developed Python and SQL ETL pipelines processing 100K+ records and converted business requirements into reusable data-validation rules.',
    details: [
      'Developed Python and SQL ETL pipelines processing 100K+ records and converted business requirements into reusable, automated data-validation rules.',
      'Automated SQL and Power Query reporting and validation, reducing manual effort by 35% and saving 3+ engineering hours weekly.',
      'Resolved data discrepancies and pipeline failures through root-cause analysis, documenting solutions for cross-functional business reporting.'
    ],
    location: 'Remote',
    badge: 'Enterprise ETL & BI'
  },
  {
    year: 'Apr 2025 – Jun 2025',
    organization: 'Indian Institute of Science Education and Research (IISER-TVM)',
    role: 'Research Intern – Federated Learning & IoT Security',
    oneLineImpact: 'Engineered distributed Python ETL pipelines for high-frequency IoT telemetry, improving throughput by 30% and achieving 94% anomaly detection accuracy.',
    details: [
      'Engineered distributed Python ETL pipelines for high-frequency IoT telemetry across edge nodes, improving ingestion throughput by 30%.',
      'Built unsupervised anomaly-detection models with statistical tests and outlier filters, achieving 94% accuracy for IoT security monitoring.',
      'Optimized SQL telemetry aggregation and node-health monitoring for federated learning, reducing multi-node latency by 40%.'
    ],
    location: 'Thiruvananthapuram, India',
    badge: 'Research Fellowship'
  },
  {
    year: '2025 – 2026',
    organization: 'H&P Projects',
    role: 'Data Science & Analytics Intern',
    oneLineImpact: 'Automated statistical data cleansing pipelines for high-variance transaction logs, uncovering donation trends and producing automated executive financial monitors.',
    details: [
      'Engineered automated statistical data cleansing pipelines for high-variance financial and operational logs.',
      'Constructed intuitive visual monitors enabling stakeholder data-driven capital allocation.',
      'Mitigated transaction reporting discrepancies by implementing automated outlier filters.'
    ],
    location: 'Remote',
    badge: 'Statistical Modeling'
  }
];

const EditorialExperience: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="border-t border-white/10 divide-y divide-white/5">
      {EXPERIENCES_DATA.map((exp, idx) => {
        const isHovered = hoveredIdx === idx;

        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            className={`py-8 sm:py-10 transition-all duration-300 group rounded-xl px-4 sm:px-6 ${
              isHovered ? 'bg-white/5 border border-orange-500/20 shadow-xl shadow-orange-950/20' : 'border border-transparent'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
              {/* Year & Location */}
              <div className="md:col-span-3 space-y-1">
                <span className="text-xs font-mono text-orange-400 font-semibold block">
                  {exp.year}
                </span>
                {exp.location && (
                  <span className="text-[11px] font-mono text-stone-500 flex items-center gap-1">
                    <MapPin size={11} /> {exp.location}
                  </span>
                )}
                {exp.badge && (
                  <span className="inline-block mt-2 px-2 py-0.5 rounded-full text-[10px] font-mono bg-orange-950/60 text-orange-300 border border-orange-500/20">
                    {exp.badge}
                  </span>
                )}
              </div>

              {/* Role & Organization */}
              <div className="md:col-span-4 space-y-1">
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                  {exp.role}
                </h3>
                <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold">
                  {exp.organization}
                </h4>
              </div>

              {/* Impact / Key Accomplishment */}
              <div className="md:col-span-5 space-y-3">
                <p className="text-sm text-stone-300 leading-relaxed">
                  {exp.oneLineImpact}
                </p>

                {/* Details Accordion or Bullet Highlights */}
                {exp.details && (
                  <div className="pt-2 border-t border-white/5 space-y-1.5">
                    {exp.details.map((detail, dIdx) => (
                      <div key={dIdx} className="text-xs text-stone-400 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default EditorialExperience;
