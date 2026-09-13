import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';

interface EditorialProject {
  id: string;
  number: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  stack: string[];
  metricLabel: string;
  metricValue: string;
  impactNote: string;
  github?: string;
  demo?: string;
  previewType: 'terminal' | 'chart' | 'analytics' | 'network';
}

const FEATURED_PROJECTS: EditorialProject[] = [
  {
    id: 'bizsight-ai',
    number: '01',
    name: 'BizSight AI',
    category: 'Business Intelligence Platform',
    headline: 'Autonomous enterprise telemetry & anomaly screening',
    description: 'A multi-tier business intelligence engine integrating natural language querying with automated analytical pipeline generation, executive anomaly detection, and automated report synthesis.',
    stack: ['Python', 'FastAPI', 'React', 'LangChain', 'PostgreSQL', 'Docker'],
    metricLabel: 'Reporting Acceleration',
    metricValue: '35% Reduction',
    impactNote: 'Saved dozens of hours in manual monthly KPI preparation across cross-functional enterprise datasets.',
    github: 'https://github.com/sourishdey2005',
    demo: 'https://biz-sight-ai-business-intelligence.vercel.app/',
    previewType: 'analytics'
  },
  {
    id: 'arthgyan',
    number: '02',
    name: 'ArthGyan',
    category: 'Financial Risk Intelligence Platform',
    headline: 'Multi-factor quantitative trading research & regime classification',
    description: 'An advanced technical analysis and quantitative trading platform for Indian (NSE/BSE) and US markets. Features statistical indicator matrices, momentum screener, and historical backtesting simulation.',
    stack: ['Python', 'Streamlit', 'yfinance', 'TA-Lib', 'NumPy', 'Plotly'],
    metricLabel: 'Markets Supported',
    metricValue: 'NSE/BSE + US',
    impactNote: 'Executes parametric signal generation across tick & daily timeframes with Sharpe and drawdown calculations.',
    github: 'https://github.com/sourishdey2005/ArthGyan.git',
    demo: 'https://arthgyan-site.streamlit.app/',
    previewType: 'chart'
  },
  {
    id: 'eigenportfolio',
    number: '03',
    name: 'EigenPortfolio Terminal',
    category: 'Quantitative Portfolio Analytics',
    headline: 'Random Matrix Theory (RMT) covariance denoising & alpha extraction',
    description: 'A quantitative research terminal leveraging Random Matrix Theory for covariance matrix denoising across 120+ equities in the S&P 500 and NIFTY 50. Separates pure noise eigenvalues via Marchenko–Pastur distributions.',
    stack: ['Python', 'NumPy', 'SciPy', 'Pandas', 'Streamlit', 'Plotly'],
    metricLabel: 'Covariance Denoising',
    metricValue: '120+ Equities',
    impactNote: 'Extracts orthogonal eigenportfolios, Max Sharpe frontiers, and rolling out-of-sample backtesting metrics.',
    github: 'https://github.com/sourishdey2005/EIGENPORTFOLIO-TERMINAL',
    demo: 'https://eigenportfolio-terminal.streamlit.app/',
    previewType: 'terminal'
  },
  {
    id: 'arthadrishti',
    number: '04',
    name: 'ArthaDrishti',
    category: 'Portfolio Projection & Optimization',
    headline: 'Dynamic asset allocation & Monte Carlo risk projection studio',
    description: 'An asset allocation studio modeling multi-decade wealth paths under fat-tailed distribution assumptions, incorporating stochastic volatility, drawdown limits, and tax-efficient rebalancing strategies.',
    stack: ['Python', 'Streamlit', 'Pandas', 'Plotly', 'Optimization Suite'],
    metricLabel: 'Simulation Depth',
    metricValue: '10K Iterations',
    impactNote: 'Provides investors with quantifiable survival probability curves and stress-tested drawdown bounds.',
    github: 'https://github.com/sourishdey2005',
    demo: 'https://github.com/sourishdey2005',
    previewType: 'network'
  }
];

const EditorialProjects: React.FC = () => {
  return (
    <div className="space-y-16 sm:space-y-24">
      {FEATURED_PROJECTS.map((project, idx) => {
        const isReversed = idx % 2 === 1;

        return (
          <article
            key={project.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
              isReversed ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Project Editorial Narrative */}
            <div className={`lg:col-span-6 space-y-4 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-zinc-400">
                  {project.number}
                </span>
                <span className="text-zinc-300">&bull;</span>
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                  {project.category}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
                {project.name}
              </h3>

              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                {project.description}
              </p>

              {/* Minimalist Metric Strip */}
              <div className="py-3 border-y border-zinc-100 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                    {project.metricLabel}
                  </span>
                  <span className="text-sm sm:text-base font-bold text-zinc-900">
                    {project.metricValue}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                    Core Engineering
                  </span>
                  <span className="text-xs text-zinc-700 leading-tight block mt-0.5">
                    {project.impactNote}
                  </span>
                </div>
              </div>

              {/* Tech Stack List */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.stack.map(tech => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono text-zinc-600 bg-zinc-50 rounded-md border border-zinc-200/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-4 pt-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 hover:text-blue-600 transition-colors group cursor-pointer"
                  >
                    <span>View project</span>
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-zinc-800 transition-colors"
                  >
                    <Github size={13} /> source code
                  </a>
                )}
              </div>
            </div>

            {/* Software Interface Preview Element */}
            <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-4 sm:p-5 shadow-xs transition-transform hover:scale-[1.01] duration-300">
                {/* Simulated Polished Software Window */}
                <div className="rounded-xl border border-zinc-200 bg-white overflow-hidden shadow-xs">
                  {/* Top application bar */}
                  <div className="px-4 py-2.5 border-b border-zinc-100 flex items-center justify-between text-[11px] font-mono text-zinc-400 bg-zinc-50/70">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-zinc-300" />
                      <span className="w-2 h-2 rounded-full bg-zinc-200" />
                      <span className="w-2 h-2 rounded-full bg-zinc-200" />
                    </div>
                    <span className="text-[10px] text-zinc-500 font-mono">
                      {project.id}.telemetry
                    </span>
                    <span className="text-[10px] text-emerald-600 font-medium">LIVE</span>
                  </div>

                  {/* Body Simulation */}
                  <div className="p-5 space-y-4">
                    {project.previewType === 'terminal' && (
                      <div className="font-mono text-xs space-y-2 text-zinc-700">
                        <div className="text-zinc-400">
                          $ python rmt_denoiser.py --universe=SP500_NIFTY120 --method=marchenko_pastur
                        </div>
                        <div className="text-zinc-800">
                          [+] Calculating Empirical Covariance Matrix (120 x 120)...
                        </div>
                        <div className="text-zinc-600">
                          [+] Theoretical Bounds: λ_min=0.412, λ_max=1.844 (94.8% noise rejected)
                        </div>
                        <div className="p-2.5 rounded bg-zinc-50 border border-zinc-100 text-[11px] text-zinc-900">
                          Denoised Covariance Inversion: DET=1.42e-12 &bull; Max Sharpe Ratio: 2.14
                        </div>
                      </div>
                    )}

                    {project.previewType === 'chart' && (
                      <div className="space-y-3 font-mono">
                        <div className="flex items-center justify-between text-xs text-zinc-600 pb-2 border-b border-zinc-100">
                          <span className="font-semibold text-zinc-900">NSE:NIFTY50 &bull; US:SPY</span>
                          <span className="text-emerald-600">+18.4% Outperformance</span>
                        </div>
                        {/* Minimalist Bar/Line visualization */}
                        <div className="h-24 flex items-end gap-1.5 pt-4">
                          {[35, 42, 38, 55, 60, 48, 72, 65, 84, 92, 88, 96].map((val, bIdx) => (
                            <div key={bIdx} className="flex-1 bg-zinc-100 hover:bg-zinc-800 transition-colors rounded-t-sm h-full flex items-end">
                              <div 
                                className="w-full bg-zinc-900 rounded-t-sm" 
                                style={{ height: `${val}%` }}
                              />
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between text-[9px] text-zinc-400 pt-1">
                          <span>Q1 Backtest</span>
                          <span>Signal Verification</span>
                          <span>Q4 Execution</span>
                        </div>
                      </div>
                    )}

                    {project.previewType === 'analytics' && (
                      <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div className="p-2.5 rounded-lg bg-zinc-50 border border-zinc-100">
                            <span className="text-[9px] font-mono text-zinc-400 block uppercase">Ingestion</span>
                            <span className="text-xs font-bold text-zinc-800">100K+ Recs</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-zinc-50 border border-zinc-100">
                            <span className="text-[9px] font-mono text-zinc-400 block uppercase">P99 Latency</span>
                            <span className="text-xs font-bold text-zinc-800">18.4 ms</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-zinc-50 border border-zinc-100">
                            <span className="text-[9px] font-mono text-zinc-400 block uppercase">Confidence</span>
                            <span className="text-xs font-bold text-emerald-600">99.4%</span>
                          </div>
                        </div>
                        <div className="p-2 text-[11px] text-zinc-600 bg-zinc-50 rounded border border-zinc-100 font-mono">
                          Anomaly Pipeline: 0 False Positives detected in latest simulation cycle.
                        </div>
                      </div>
                    )}

                    {project.previewType === 'network' && (
                      <div className="space-y-3 font-mono">
                        <div className="text-xs text-zinc-500">
                          Monte Carlo Risk Engine &bull; 10,000 Iterations
                        </div>
                        <div className="p-3 bg-zinc-50 rounded border border-zinc-100 space-y-1 text-xs">
                          <div className="flex justify-between">
                            <span className="text-zinc-500">Expected CAGR:</span>
                            <span className="font-bold text-zinc-900">14.8% p.a.</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-zinc-500">Max Value at Risk (99%):</span>
                            <span className="font-bold text-zinc-900">-8.2%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-zinc-500">Sharpe Ratio:</span>
                            <span className="font-bold text-emerald-600">1.92</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default EditorialProjects;
