import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react';

export interface ExperienceNode {
  id: string;
  role: string;
  organization: string;
  type: string;
  location: string;
  duration: string;
  coreMetrics: { label: string; value: string }[];
  bulletPoints: string[];
  techStack: string[];
}

export const EXPERIENCE_ENTRIES: ExperienceNode[] = [
  {
    id: 'hp-projects',
    organization: 'H & P Projects',
    role: 'Data Science & Quantitative Analysis Intern',
    type: 'Internship · Remote',
    location: 'Remote',
    duration: 'Apr 2026 – Present',
    coreMetrics: [
      { label: 'Annualized return', value: '18.7%' },
      { label: 'Sharpe ratio', value: '2.1' },
      { label: 'Max drawdown', value: '< 5.0%' }
    ],
    bulletPoints: [
      'Built a statistical arbitrage engine (18.7% return, 2.1 Sharpe, <5% drawdown) using cointegration and Kalman filtering.',
      'Accelerated backtesting 3.8x with vectorized Python; added real-time VaR and slippage modeling.',
      'Cut tail risk 32% via HMM regime detection and CVaR-based sizing.'
    ],
    techStack: ['Python', 'Kalman Filter', 'Cointegration', 'NumPy', 'Pandas', 'TA-Lib', 'HMM', 'CVaR']
  },
  {
    id: 'excelerate',
    organization: 'Excelerate',
    role: 'AI Data Analyst Intern',
    type: 'Internship · Hybrid / Remote',
    location: 'Bhubaneswar, India / Remote',
    duration: 'Apr 2026 – May 2026',
    coreMetrics: [
      { label: 'Predictive AUC', value: '0.89' },
      { label: 'Churn predictability', value: '+34%' },
      { label: 'Dataset analyzed', value: '50K+ Records' }
    ],
    bulletPoints: [
      'Raised churn predictability 34% (AUC 0.89) on 50K+ records with gradient boosting.',
      'Automated EDA and cohort analysis to surface 4 funnel friction points.',
      'Shipped KPI dashboards that shortened executive decision cycles by 3 days/week.'
    ],
    techStack: ['Python', 'Scikit-learn', 'Cohort Analysis', 'Pandas', 'Seaborn', 'Feature Engineering']
  },
  {
    id: 'infosys',
    organization: 'Infosys Springboard',
    role: 'Data Analytics & Business Intelligence Project Intern',
    type: 'Internship · Hybrid',
    location: 'Remote / Hybrid',
    duration: 'Jan 2026 – Apr 2026',
    coreMetrics: [
      { label: 'Records ingested', value: '100K+' },
      { label: 'Manual effort cut', value: '35%' },
      { label: 'Weekly hours saved', value: '3+ hrs' }
    ],
    bulletPoints: [
      'Engineered Python/SQL ETL for 100K+ records with automated validation and zero downtime.',
      'Cut manual BI effort 35% and saved 3+ hours/week via Power Query automation.',
      'Standardized reporting SOPs to eliminate cross-functional discrepancies.'
    ],
    techStack: ['Python', 'SQL', 'Power Query', 'Power BI', 'Data Modeling', 'ETL']
  },
  {
    id: 'iiser-tvm',
    organization: 'IISER Thiruvananthapuram',
    role: 'Research Intern – Federated Learning',
    type: 'Research Internship · On-site',
    location: 'Thiruvananthapuram, India',
    duration: 'Apr 2025 – Jun 2025',
    coreMetrics: [
      { label: 'Ingestion boost', value: '+30%' },
      { label: 'Anomaly accuracy', value: '94%' },
      { label: 'Aggregation latency', value: '-40%' }
    ],
    bulletPoints: [
      'Built distributed Python telemetry pipelines across IoT clusters, boosting ingestion by 30%.',
      'Trained anomaly detection models delivering 94% accuracy across multi-node security streams.',
      'Optimized distributed SQL routines, lowering aggregation latency by 40% across remote cluster nodes.'
    ],
    techStack: ['Python', 'Federated Learning', 'IoT', 'SQL', 'Anomaly Detection', 'Distributed Systems']
  }
];

const NON_SCALING = { vectorEffect: 'non-scaling-stroke' as const };

const EditorialExperience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const gutterRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const basePathRef = useRef<SVGPathElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(0);

  useEffect(() => {
    let animId: number;
    let lastTotalLength = 0;

    const buildArcPath = () => {
      const container = containerRef.current;
      const gutter = gutterRef.current;
      const svg = svgRef.current;
      const basePath = basePathRef.current;
      const path = pathRef.current;
      if (!container || !gutter || !svg || !basePath || !path) return;

      const gutterWidth = gutter.clientWidth;
      const gutterHeight = gutter.clientHeight;
      if (!gutterWidth || !gutterHeight) return;

      const cards = container.querySelectorAll<HTMLElement>('[data-card-index]');
      if (!cards.length) return;

      const nodeX = Math.round(gutterWidth * 0.46);
      const bulge = Math.round(gutterWidth * 0.4);
      const yPositions: number[] = [];

      cards.forEach((card, idx) => {
        const nodeY = card.offsetTop + 42;
        yPositions.push(nodeY);

        const node = nodeRefs.current[idx];
        if (node) {
          node.style.left = `${nodeX - card.offsetLeft}px`;
          node.style.top = '42px';
        }

        const connector = card.querySelector<HTMLElement>('[data-connector]');
        if (connector) {
          connector.style.left = `${nodeX - card.offsetLeft + 9}px`;
          connector.style.width = `${Math.max(card.offsetLeft - nodeX - 15, 0)}px`;
        }
      });

      let d = `M ${nodeX} 0 L ${nodeX} ${yPositions[0]}`;
      for (let i = 0; i < yPositions.length - 1; i++) {
        const fromY = yPositions[i];
        const toY = yPositions[i + 1];
        const midY = (fromY + toY) / 2;
        const direction = i % 2 === 0 ? 1 : -1;
        const controlX = nodeX + bulge * direction;
        d += ` Q ${controlX} ${midY} ${nodeX} ${toY}`;
      }
      d += ` L ${nodeX} ${gutterHeight}`;

      svg.setAttribute('viewBox', `0 0 ${gutterWidth} ${gutterHeight}`);
      basePath.setAttribute('d', d);
      path.setAttribute('d', d);

      lastTotalLength = path.getTotalLength ? path.getTotalLength() : 0;
      if (lastTotalLength) {
        path.style.strokeDasharray = `${lastTotalLength} ${lastTotalLength}`;
      }
    };

    const updateScrollAnimation = () => {
      if (!containerRef.current || !pathRef.current) return;

      const container = containerRef.current;
      const path = pathRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalLength = lastTotalLength || (path.getTotalLength ? path.getTotalLength() : rect.height);
      if (!totalLength || isNaN(totalLength)) return;

      const startTrigger = windowHeight * 0.78;
      const endTrigger = windowHeight * 0.28;
      const progress = Math.min(
        Math.max((startTrigger - rect.top) / (rect.height + startTrigger - endTrigger), 0),
        1
      );

      path.style.strokeDashoffset = `${totalLength * (1 - progress)}`;

      const cards = container.querySelectorAll<HTMLElement>('[data-card-index]');
      let currentIdx = 0;
      cards.forEach((card, idx) => {
        if (card.getBoundingClientRect().top <= windowHeight * 0.62) currentIdx = idx;
      });
      setActiveNodeIndex(currentIdx);
    };

    const onScroll = () => {
      animId = requestAnimationFrame(updateScrollAnimation);
    };

    const onResize = () => {
      buildArcPath();
      onScroll();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    buildArcPath();
    updateScrollAnimation();

    const refreshTimer = window.setTimeout(onResize, 400);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      window.clearTimeout(refreshTimer);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Arc spine gutter */}
      <div ref={gutterRef} className="absolute top-0 bottom-0 left-0 w-14 sm:w-20 pointer-events-none z-10">
        <svg ref={svgRef} className="w-full h-full overflow-visible" preserveAspectRatio="none">
          <defs>
            <linearGradient id="journeyArcGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ff3d00" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#ffb347" stopOpacity="1" />
              <stop offset="100%" stopColor="#ff4d00" stopOpacity="0.95" />
            </linearGradient>
            <filter id="arcGlow" x="-80%" y="-10%" width="260%" height="120%">
              <feGaussianBlur stdDeviation="2.4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            ref={basePathRef}
            fill="none"
            stroke="rgba(255, 77, 0, 0.16)"
            strokeWidth="1.6"
            strokeDasharray="4 6"
            {...NON_SCALING}
          />
          <path
            ref={pathRef}
            fill="none"
            stroke="url(#journeyArcGradient)"
            strokeWidth="2.4"
            strokeLinecap="round"
            filter="url(#arcGlow)"
            {...NON_SCALING}
            style={{ transition: 'stroke-dashoffset 0.05s linear' }}
          />
        </svg>
      </div>

      <div className="space-y-8 pl-14 sm:pl-20">
        {EXPERIENCE_ENTRIES.map((exp, idx) => {
          const isActive = activeNodeIndex === idx;

          return (
            <div key={exp.id} data-card-index={idx} className="relative group">
              <div
                ref={(el) => { nodeRefs.current[idx] = el; }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 z-20 ${
                  isActive
                    ? 'bg-[#ff4d00] shadow-[0_0_20px_rgba(255,77,0,0.85)] ring-4 ring-[#ff4d00]/15'
                    : 'bg-[#0b0402] border border-white/25 group-hover:border-[#ff8a3d]/60'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white' : 'bg-stone-500'}`} />
              </div>
              <div
                data-connector
                aria-hidden="true"
                className="absolute -translate-y-1/2 border-t border-dashed border-[#ff4d00]/35 z-10 pointer-events-none"
                style={{ top: '42px', left: '0px', width: '0px' }}
              />

              <div
                className={`rounded-2xl border p-6 sm:p-8 transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-br from-[#120502] via-[#0c0301] to-[#080201] border-[#ff4d00]/35 shadow-[0_20px_50px_-25px_rgba(255,77,0,0.35)]'
                    : 'bg-white/[0.02] border-white/[0.08] hover:border-white/20'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-5 border-b border-white/[0.08]">
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-2 font-condensed text-[10px] uppercase tracking-[0.18em]">
                      <span className="text-[#ff8a3d]">{exp.type}</span>
                      <span className="text-stone-600">/</span>
                      <span className="text-stone-500 flex items-center gap-1">
                        <MapPin size={10} /> {exp.location}
                      </span>
                    </div>
                    <h3 className="font-display uppercase text-white text-xl sm:text-2xl leading-tight tracking-[0.01em]">
                      {exp.role}
                    </h3>
                    <h4 className="mt-1.5 font-condensed text-xs uppercase tracking-[0.2em] text-[#ff6a1f]">
                      {exp.organization}
                    </h4>
                  </div>

                  <div className="inline-flex items-center gap-1.5 self-start px-3 py-1.5 rounded-full border border-white/10 bg-black/30 font-condensed text-[10px] uppercase tracking-[0.16em] text-stone-400 whitespace-nowrap">
                    <Calendar size={11} className="text-[#ff6a1f]" />
                    {exp.duration}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 sm:gap-4 py-5">
                  {exp.coreMetrics.map((metric, mIdx) => (
                    <div key={mIdx} className="border-l border-white/10 pl-3 first:border-0 first:pl-0">
                      <div className="font-display text-lg sm:text-2xl text-white leading-none">
                        {metric.value}
                      </div>
                      <div className="mt-1.5 font-condensed text-[9px] sm:text-[10px] uppercase tracking-[0.14em] text-stone-500">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2.5">
                  {exp.bulletPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-stone-300 leading-relaxed">
                      <ArrowUpRight size={12} className="text-[#ff4d00] shrink-0 mt-1" />
                      <p>{point}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-white/[0.08] flex flex-wrap gap-1.5">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-condensed text-[10px] uppercase tracking-[0.1em] px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-stone-500 group-hover:text-stone-400 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EditorialExperience;
