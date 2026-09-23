import React, { useEffect, useRef, useState } from 'react';
import { 
  MapPin, 
  Calendar, 
  Terminal, 
  Sparkles, 
  TrendingUp,
  Cpu,
  Layers,
  Flame
} from 'lucide-react';

export interface ExperienceNode {
  id: string;
  role: string;
  organization: string;
  type: string;
  location: string;
  duration: string;
  periodLabel: string;
  badge: string;
  coreMetrics: { label: string; value: string }[];
  bulletPoints: string[];
  techStack: string[];
}

// Strictly your MOST RECENT 3 industry positions with high-impact engineering accomplishments
export const RECENT_3_EXPERIENCE: ExperienceNode[] = [
  {
    id: 'hp-projects',
    organization: 'H & P Projects',
    role: 'Data Science & Quantitative Analysis Intern',
    type: 'Internship · Remote',
    location: 'Remote',
    duration: 'Apr 2026 – Present',
    periodLabel: 'Recent #1',
    badge: 'Quant & Statistical Arbitrage',
    coreMetrics: [
      { label: 'Annualized Return', value: '18.7%' },
      { label: 'Sharpe Ratio', value: '2.1' },
      { label: 'Max Drawdown', value: '< 5.0%' }
    ],
    bulletPoints: [
      'Accomplished an 18.7% annualized return with a 2.1 Sharpe ratio and <5% maximum drawdown across 2020–2024 tick-level FX and equity futures data by designing a multi-asset statistical arbitrage strategy leveraging Engle-Granger and Johansen cointegration tests paired with Kalman Filter dynamic hedging.',
      'Accelerated tick-level backtesting throughput by 3.8x and eliminated execution lookahead bias by engineering a low-latency Python pipeline (NumPy, Pandas, TA-Lib) with vectorized signal generation, realistic slippage modeling, and real-time VaR tracking.',
      'Mitigated market cluster tail-risk by 32% during structural regime shifts by training continuous Hidden Markov Models (HMM) coupled with dynamic fractional Kelly Criterion position sizing under Conditional Value-at-Risk (CVaR) constraints.'
    ],
    techStack: ['Python', 'Kalman Filter', 'Cointegration', 'NumPy', 'Pandas', 'TA-Lib', 'Hidden Markov Models', 'CVaR']
  },
  {
    id: 'excelerate',
    organization: 'Excelerate',
    role: 'AI Data Analyst Intern',
    type: 'Internship · Hybrid / Remote',
    location: 'Bhubaneswar, India / Remote',
    duration: 'Apr 2026 – May 2026',
    periodLabel: 'Recent #2',
    badge: 'Behavioral ML & Retention',
    coreMetrics: [
      { label: 'Predictive AUC', value: '0.89' },
      { label: 'Churn Predictability', value: '+34%' },
      { label: 'Dataset Analyzed', value: '50K+ Records' }
    ],
    bulletPoints: [
      'Accomplished a 34% increase in student churn predictability and achieved an AUC-ROC of 0.89 by engineering a gradient-boosted attrition model on 50,000+ registration trajectories using Python (Scikit-learn, Pandas) and behavioral clustering.',
      'Identified and resolved top 4 friction points in student registration funnels by developing automated exploratory data analysis (EDA) and cohort-retention workflows in Matplotlib and Seaborn.',
      'Accelerated strategic executive decision-making cycles by 3 days weekly by transforming non-linear user telemetry into automated, stakeholder-facing KPI dashboards.'
    ],
    techStack: ['Python', 'Scikit-learn', 'Cohort Analysis', 'Pandas', 'Seaborn', 'Feature Engineering', 'EDA']
  },
  {
    id: 'infosys',
    organization: 'Infosys Springboard',
    role: 'Data Analytics & Business Intelligence Project Intern',
    type: 'Internship · Hybrid',
    location: 'Remote / Hybrid',
    duration: 'Jan 2026 – Apr 2026',
    periodLabel: 'Recent #3',
    badge: 'Enterprise ETL & BI Pipelines',
    coreMetrics: [
      { label: 'Records Ingested', value: '100K+' },
      { label: 'Manual Effort Cut', value: '35%' },
      { label: 'Weekly Hours Saved', value: '3+ hrs' }
    ],
    bulletPoints: [
      'Accomplished reliable processing of 100,000+ enterprise telemetry records with zero downtime by engineering modular Python and SQL ETL ingestion pipelines integrated with automated data-validation and schema-enforcement rules.',
      'Reduced manual business intelligence validation effort by 35% and conserved 3+ senior engineering hours weekly by orchestrating automated Power Query workflows and SQL discrepancy reconciliation triggers.',
      'Eliminated cross-functional reporting discrepancies by conducting root-cause anomaly investigations, authoring standard operating procedures, and establishing regression-tested production reporting frameworks.'
    ],
    techStack: ['Python', 'SQL', 'Power Query', 'Power BI', 'Data Modeling', 'ETL Pipelines', 'Data Validation']
  }
];

export const DEDUPLICATED_EXPERIENCE = RECENT_3_EXPERIENCE;

const EditorialExperience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGLineElement | null>(null);
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(0);

  useEffect(() => {
    let animId: number;

    const updateScrollAnimation = () => {
      if (!containerRef.current || !pathRef.current) return;

      const container = containerRef.current;
      const path = pathRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate path length dynamically
      const totalLength = path.getTotalLength ? path.getTotalLength() : rect.height;
      if (!totalLength || isNaN(totalLength)) return;

      path.style.strokeDasharray = `${totalLength} ${totalLength}`;

      // Start drawing when container enters viewport (from 75% down to 25%)
      const startTrigger = windowHeight * 0.75;
      const endTrigger = windowHeight * 0.25;
      const containerTop = rect.top;
      const containerHeight = rect.height;

      const progress = Math.min(
        Math.max((startTrigger - containerTop) / (containerHeight + startTrigger - endTrigger), 0),
        1
      );

      // Draw SVG dynamically along the spine based strictly on real-time scroll
      const drawOffset = totalLength * (1 - progress);
      path.style.strokeDashoffset = `${drawOffset}`;

      // Calculate which of the 3 cards is highlighted based on focal reading position
      const cards = container.querySelectorAll<HTMLElement>('[data-card-index]');
      let currentIdx = 0;
      cards.forEach((card, idx) => {
        const cardRect = card.getBoundingClientRect();
        if (cardRect.top <= windowHeight * 0.65) {
          currentIdx = idx;
        }
      });
      setActiveNodeIndex(currentIdx);
    };

    const onScroll = () => {
      animId = requestAnimationFrame(updateScrollAnimation);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    updateScrollAnimation();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full py-4">
      <div className="relative">
        {/* Continuous Dynamic SVG Journey Line in Warm Ember / Cyan-to-Orange Theme */}
        <div className="absolute top-0 bottom-0 left-3 sm:left-6 w-8 pointer-events-none z-10 flex justify-center">
          <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
            <defs>
              <linearGradient id="journeySpineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ff3d00" stopOpacity="1" />
                <stop offset="35%" stopColor="#ff8a1f" stopOpacity="0.95" />
                <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#ff3d00" stopOpacity="1" />
              </linearGradient>

              <filter id="spineGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background passive baseline trace */}
            <line
              x1="50%"
              y1="0"
              x2="50%"
              y2="100%"
              stroke="rgba(255, 61, 0, 0.15)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            {/* Animated SVG Path driven by strokeDashoffset */}
            <line
              ref={pathRef}
              x1="50%"
              y1="0"
              x2="50%"
              y2="100%"
              stroke="url(#journeySpineGradient)"
              strokeWidth="3.5"
              strokeLinecap="round"
              filter="url(#spineGlow)"
              style={{
                transition: 'stroke-dashoffset 0.05s linear'
              }}
            />
          </svg>
        </div>

        {/* 3 Prominent Recent Experience Cards */}
        <div className="space-y-12 pl-10 sm:pl-16">
          {RECENT_3_EXPERIENCE.map((exp, idx) => {
            const isActive = activeNodeIndex === idx;

            return (
              <div
                key={exp.id}
                data-card-index={idx}
                className="relative transition-all duration-300 group"
              >
                {/* SVG Milestone Connector Node */}
                <div 
                  className={`absolute -left-10 sm:-left-16 top-6 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 z-20 ${
                    isActive 
                      ? 'bg-gradient-to-tr from-[#ff3d00] to-[#ff8a1f] text-white scale-125 shadow-[0_0_22px_rgba(255,61,0,0.85)] ring-4 ring-orange-500/25' 
                      : 'bg-[#180601] border-2 border-orange-500/40 text-stone-400 group-hover:border-orange-400'
                  }`}
                >
                  <div className={`w-2.5 h-2.5 rounded-full ${isActive ? 'bg-white' : 'bg-orange-400/80'}`} />
                </div>

                {/* Milestone Experience Card */}
                <div
                  className={`p-6 sm:p-8 rounded-2xl transition-all duration-300 backdrop-blur-xl border ${
                    isActive
                      ? 'bg-gradient-to-br from-[#1c0802] via-[#140501] to-[#0c0200] border-orange-500/50 shadow-[0_12px_40px_-10px_rgba(255,61,0,0.22),0_0_20px_rgba(255,138,31,0.1)] -translate-y-1'
                      : 'bg-white/[0.03] border-white/10 hover:border-orange-500/30 hover:bg-white/[0.05]'
                  }`}
                >
                  {/* Top Meta Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 border-b border-white/10 pb-5 mb-5">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-orange-950/70 text-orange-300 border border-orange-500/30 font-semibold">
                          {exp.badge}
                        </span>
                        <span className="text-xs font-mono text-stone-400">
                          &bull; {exp.type}
                        </span>
                        <span className="text-xs font-mono text-stone-400 flex items-center gap-1">
                          <MapPin size={11} className="text-orange-400" /> {exp.location}
                        </span>
                      </div>

                      <h3 className={`text-xl sm:text-2xl font-extrabold tracking-tight transition-colors ${
                        isActive ? 'text-white' : 'text-stone-100 group-hover:text-orange-300'
                      }`}>
                        {exp.role}
                      </h3>

                      <h4 className="text-sm font-semibold text-orange-400 font-mono mt-0.5">
                        {exp.organization}
                      </h4>
                    </div>

                    <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-2 shrink-0">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/40 border border-white/10 text-xs font-mono text-orange-300">
                        <Calendar size={12} className="text-orange-400" />
                        <span>{exp.duration}</span>
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-orange-400 font-bold bg-orange-950/60 px-2 py-0.5 rounded border border-orange-500/20">
                        {exp.periodLabel}
                      </span>
                    </div>
                  </div>

                  {/* Core Metrics Strip */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                    {exp.coreMetrics.map((metric, mIdx) => (
                      <div 
                        key={mIdx}
                        className={`p-3 rounded-xl border transition-all ${
                          isActive 
                            ? 'bg-orange-950/30 border-orange-500/30 shadow-inner' 
                            : 'bg-black/30 border-white/5'
                        }`}
                      >
                        <span className="text-[10px] font-mono text-stone-400 block uppercase">
                          {metric.label}
                        </span>
                        <span className={`text-lg sm:text-xl font-bold font-mono ${
                          isActive ? 'text-orange-300' : 'text-stone-200'
                        }`}>
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* High-Impact Accomplishment Points */}
                  <div className="space-y-3 mb-6">
                    {exp.bulletPoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-300 leading-relaxed">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${
                          isActive ? 'bg-orange-400 shadow-[0_0_8px_#ff8a1f]' : 'bg-orange-500'
                        }`} />
                        <p>{point}</p>
                      </div>
                    ))}
                  </div>

                  {/* Stack Tags */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] font-mono text-stone-400 mr-2 flex items-center gap-1">
                      <Terminal size={12} className="text-orange-400" /> Stack:
                    </span>
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-black/50 text-stone-300 border border-white/5 group-hover:border-orange-500/20 transition-colors"
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
    </div>
  );
};

export default EditorialExperience;
