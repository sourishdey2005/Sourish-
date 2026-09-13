import React, { useState } from 'react';

interface ResponsibilityItem {
  year: string;
  organization: string;
  role: string;
  oneLineImpact: string;
  details?: string[];
  location?: string;
}

const RESPONSIBILITIES_DATA: ResponsibilityItem[] = [
  {
    year: '2025',
    organization: 'KINETEX LAB KIIT Chapter',
    role: 'Head of Research and Development',
    oneLineImpact: 'Orchestrated research roadmaps for 30+ student developers across IoT hardware prototypes and computer vision systems.',
    details: [
      'Bridged academic computer science research with physical edge hardware deployment.',
      'Supervised the filing of patent applications and research publications.',
      'Spearheaded hands-on hackathons and applied research incubations.'
    ],
    location: 'Bhubaneswar, Odisha'
  },
  {
    year: '2025',
    organization: 'USC.KIIT',
    role: 'Cloud Automation Executive',
    oneLineImpact: 'Provisioned declarative Terraform modules and automated multi-tier campus microservices infrastructure with CI/CD.',
    details: [
      'Standardized infrastructure-as-code modules reducing manual server provisioning time from hours to minutes.',
      'Implemented proactive telemetry alerting and container health checks on Kubernetes.',
      'Mentored junior students on cloud native architectures and zero-downtime rolling deploys.'
    ],
    location: 'Hybrid'
  },
  {
    year: '2024',
    organization: 'KITPD2S Society',
    role: 'Secretary & Operation Team Lead',
    oneLineImpact: 'Directed technological operations for IoT and intellectual property initiatives, managing 5+ tech symposiums with 500+ attendees.',
    details: [
      'Coordinated technical logistics and IP advisory for inter-university innovation summits.',
      'Managed cross-functional student engineering divisions across software and hardware tracks.'
    ],
    location: 'On-site'
  },
  {
    year: '2024',
    organization: 'Coding Ninjas KIIT Chapter',
    role: 'Machine Learning & Technical Team Member',
    oneLineImpact: 'Conducted hands-on technical sessions and guided peer groups through applied machine learning, cloud deployments, and developer bootcamps.',
    details: [
      'Delivered workshops on machine learning fundamentals, data wrangling, and model evaluation.',
      'Fostered peer-to-peer developer training and project review sessions.'
    ],
    location: 'Bhubaneswar, Odisha'
  }
];

const PositionOfResponsibility: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="border-t border-zinc-200 divide-y divide-zinc-100">
      {RESPONSIBILITIES_DATA.map((item, idx) => {
        const isHovered = hoveredIdx === idx;

        return (
          <div
            key={idx}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            className="py-7 sm:py-9 transition-colors group cursor-default"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-baseline">
              {/* Year & Location */}
              <div className="md:col-span-2">
                <span className="text-xs font-mono font-bold text-zinc-400 group-hover:text-zinc-950 transition-colors">
                  {item.year}
                </span>
                {item.location && (
                  <span className="block text-[11px] font-mono text-zinc-400">
                    {item.location}
                  </span>
                )}
              </div>

              {/* Organization & Role */}
              <div className="md:col-span-4">
                <h4 className="text-base sm:text-lg font-bold text-zinc-950 group-hover:text-blue-600 transition-colors">
                  {item.organization}
                </h4>
                <p className="text-xs font-medium text-zinc-500 mt-0.5">
                  {item.role}
                </p>
              </div>

              {/* One-Line Impact */}
              <div className="md:col-span-6">
                <p className="text-sm text-zinc-700 leading-relaxed">
                  "{item.oneLineImpact}"
                </p>

                {/* Subtle detail expansion on hover */}
                {item.details && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isHovered ? 'max-h-48 mt-3 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <ul className="space-y-1 text-xs text-zinc-500 pt-2 border-t border-zinc-100 font-mono">
                      {item.details.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="text-zinc-300">&rarr;</span>
                          <span>{bullet}</span>
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

export default PositionOfResponsibility;
