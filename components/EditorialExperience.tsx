import React, { useState } from 'react';

interface ExperienceItem {
  year: string;
  organization: string;
  role: string;
  oneLineImpact: string;
  details?: string[];
  location?: string;
}

const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    year: '2026',
    organization: 'H&P Projects',
    role: 'Data Science and Analysis Intern',
    oneLineImpact: 'Cleaned and structured temple management datasets, uncovering donation trends and producing automated executive financial monitors.',
    details: [
      'Engineered automated statistical data cleansing pipelines for high-variance donation and expense logs.',
      'Constructed intuitive visual monitors enabling stakeholder data-driven capital allocation.',
      'Identified temporal seasonality spikes in regional temple contributions.'
    ],
    location: 'Remote'
  },
  {
    year: '2026',
    organization: 'Infosys Springboard',
    role: 'Virtual Intern (Data Science & ML)',
    oneLineImpact: 'Built analytics workflows and BI dashboards that reduced manual enterprise reporting effort by 35%.',
    details: [
      'Developed end-to-end data processing pipelines and predictive regression models for enterprise simulation workloads.',
      'Synthesized business intelligence dashboards replacing fragmented spreadsheet reconciliation.',
      'Benchmarked machine learning model performance against industry baseline datasets.'
    ],
    location: 'Remote'
  },
  {
    year: 'Apr 2025 – Jun 2025',
    organization: 'Indian Institute of Science Education and Research (IISER-TVM)',
    role: 'Research Intern – Federated Learning & IoT Security',
    oneLineImpact: 'Improved data ingestion efficiency by 30% and achieved 94% anomaly detection accuracy across distributed edge telemetry nodes.',
    details: [
      'Improved data ingestion efficiency by 30% by building modular Python pipelines with statistical modeling and time-series processing for distributed sensor telemetry.',
      'Achieved 94% anomaly detection accuracy on high-frequency sensor data by applying outlier detection and hypothesis testing alongside machine learning across distributed edge nodes.',
      'Reduced data aggregation latency by 40% by automating multi-node analysis and reporting with Python and SQL, improving data quality and device-performance monitoring.'
    ],
    location: 'Thiruvananthapuram, India'
  }
];

const EditorialExperience: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="border-t border-zinc-200 divide-y divide-zinc-100">
      {EXPERIENCES_DATA.map((exp, idx) => {
        const isHovered = hoveredIdx === idx;

        return (
          <div
            key={idx}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            className="py-7 sm:py-9 transition-colors group cursor-default"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-baseline">
              {/* Year */}
              <div className="md:col-span-2">
                <span className="text-xs font-mono font-bold text-zinc-400 group-hover:text-zinc-950 transition-colors">
                  {exp.year}
                </span>
                {exp.location && (
                  <span className="block text-[11px] font-mono text-zinc-400">
                    {exp.location}
                  </span>
                )}
              </div>

              {/* Organization & Role */}
              <div className="md:col-span-4">
                <h4 className="text-base sm:text-lg font-bold text-zinc-950 group-hover:text-blue-600 transition-colors">
                  {exp.organization}
                </h4>
                <p className="text-xs font-medium text-zinc-500 mt-0.5">
                  {exp.role}
                </p>
              </div>

              {/* One-Line Impact Statement */}
              <div className="md:col-span-6">
                <p className="text-sm text-zinc-700 leading-relaxed">
                  "{exp.oneLineImpact}"
                </p>

                {/* Subtle detail expansion on hover */}
                {exp.details && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isHovered ? 'max-h-48 mt-3 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <ul className="space-y-1 text-xs text-zinc-500 pt-2 border-t border-zinc-100 font-mono">
                      {exp.details.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <span className="text-zinc-300">&rarr;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EditorialExperience;
