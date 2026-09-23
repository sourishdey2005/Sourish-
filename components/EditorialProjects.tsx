import React from 'react';
import { ArrowUpRight, Github, ExternalLink, Activity, LineChart, Cpu, Terminal, Sparkles } from 'lucide-react';

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
    id: 'eigenportfolio',
    number: '01',
    name: 'EigenPortfolio Terminal',
    category: 'Quantitative Finance & RMT Platform',
    headline: 'Covariance matrix denoising via Random Matrix Theory & portfolio optimization',
    description: 'Formulated an automated data-cleaning and denoising pipeline across 120+ equity assets using Random Matrix Theory (RMT) to filter Marchenko–Pastur noise. Implemented Maximum-Sharpe, Minimum-Variance, and Risk-Parity allocation engines benchmarked against 10,000+ Monte Carlo simulations to deliver robust portfolio-frontier convergence.',
    stack: ['Python', 'Streamlit', 'NumPy', 'Pandas', 'Plotly', 'Monte Carlo', 'Random Matrix Theory'],
    metricLabel: 'Analysis Runtime',
    metricValue: '< 3s per run',
    impactNote: 'Filtered Marchenko–Pastur noise across 120+ equities, stabilizing portfolio variance and asset weights below 30% concentration.',
    github: 'https://github.com/sourishdey2005',
    demo: 'https://eigenportfolio-terminal.streamlit.app/',
    previewType: 'terminal'
  },
  {
    id: 'arthgyan',
    number: '02',
    name: 'ArthGyan',
    category: 'Technical Analysis & Market Intelligence',
    headline: 'Multi-asset quantitative indicators, momentum analytics & market regime models',
    description: 'Developed an interactive quantitative engine tracking 55+ technical indicators across 50+ equities. Engineered automated stationarity tests (ADF/KPSS), tail-risk modeling (VaR/CVaR), and momentum oscillation indicators with interactive Plotly visualizations and automated alert pipelines.',
    stack: ['Python', 'Scikit-learn', 'Statsmodels', 'Streamlit', 'Plotly', 'Pandas'],
    metricLabel: 'Indicators Computed',
    metricValue: '55+ Metrics',
    impactNote: 'Empirically tested regime-switching signals and tail risk measures across dynamic market conditions.',
    github: 'https://github.com/sourishdey2005',
    demo: 'https://arthgyan.streamlit.app/',
    previewType: 'chart'
  },
  {
    id: 'arthadrishti',
    number: '03',
    name: 'ArthaDrishti',
    category: 'Bayesian Asset Allocation & Fin-RAG',
    headline: 'Black–Litterman allocation framework & retrieval-augmented financial intelligence',
    description: 'Architected an automated portfolio engine combining Black–Litterman Bayesian allocation with a FAISS-indexed RAG pipeline. Optimized the efficient frontier over 50 discrete points using SciPy nonlinear programming while maintaining sub-800ms natural-language query latency for contextual portfolio insights without hallucinations.',
    stack: ['LangChain', 'FAISS', 'Python', 'Streamlit', 'SciPy', 'Scikit-learn'],
    metricLabel: 'Query Latency',
    metricValue: '< 800ms',
    impactNote: 'Integrated Black–Litterman Bayesian views with strict metric grounding, eliminating ad-hoc report hallucinations.',
    github: 'https://github.com/sourishdey2005',
    demo: 'https://arthadrishti.streamlit.app/',
    previewType: 'network'
  },
  {
    id: 'bizsight',
    number: '04',
    name: 'BizSight Analytics & ETL Pipeline',
    category: 'Enterprise Data Platform & BI Telemetry',
    headline: 'High-throughput ETL pipelines, automated SQL validation & executive telemetry monitors',
    description: 'Built enterprise-grade ingestion pipelines processing 100K+ records with automated SQL and Power Query validation rules. Designed proactive anomaly filters achieving 92% transaction-anomaly precision and reducing executive reporting latency by 40%.',
    stack: ['Python', 'SQL', 'Power BI', 'Docker', 'FastAPI', 'Pandas'],
    metricLabel: 'Manual Effort Saved',
    metricValue: '35% Cut',
    impactNote: 'Automated SQL and Power Query reporting and validation, saving 3+ engineering hours weekly with 92% anomaly precision.',
    github: 'https://github.com/sourishdey2005',
    demo: 'https://biz-sight-ai-business-intelligence.vercel.app/',
    previewType: 'analytics'
  }
];

const EditorialProjects: React.FC = () => {
  return (
    <div className="relative space-y-12 sm:space-y-16 pb-20">
      {FEATURED_PROJECTS.map((project, idx) => {
        const isReversed = idx % 2 === 1;
        // Calculate progressive top offset for the stacking cards effect (e.g. top-24, top-28, top-32...)
        const topStickyOffset = 90 + idx * 30; // in pixels

        return (
          <div
            key={project.id}
            style={{
              top: `${topStickyOffset}px`,
              zIndex: idx + 10,
            }}
            className="sticky transition-all duration-300"
          >
            {/* Project Card Shell with Stacking Shadow and Glowing Glass Surface */}
            <article
              className={`p-6 sm:p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-[#180702] via-[#130501] to-[#0c0200] border border-orange-500/30 shadow-[0_-10px_35px_-5px_rgba(0,0,0,0.8),0_20px_40px_-15px_rgba(255,61,0,0.15)] hover:border-orange-500/50 transition-all duration-300 backdrop-blur-xl group`}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Project Editorial Narrative */}
                <div className={`lg:col-span-6 space-y-4 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-orange-400 bg-orange-950/60 px-2.5 py-0.5 rounded-full border border-orange-500/30">
                      PROJECT #{project.number}
                    </span>
                    <span className="text-xs font-mono tracking-wider uppercase text-stone-400">
                      {project.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-orange-300 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm font-semibold text-orange-400/90 mt-1">
                      {project.headline}
                    </p>
                  </div>

                  <p className="text-sm text-stone-300 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-black/40 border border-white/10 text-stone-300 group-hover:border-orange-500/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlight Metric Strip */}
                  <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-orange-400 block">
                        {project.metricLabel}
                      </span>
                      <span className="text-xl sm:text-2xl font-extrabold text-white font-mono">
                        {project.metricValue}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block">
                        Impact Benchmark
                      </span>
                      <p className="text-xs text-stone-300 leading-snug font-mono mt-0.5 line-clamp-2">
                        {project.impactNote}
                      </p>
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-4 pt-2">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#ff3d00] to-[#ff8a1f] text-white text-xs font-semibold hover:brightness-110 shadow-md shadow-orange-950/50 transition-all cursor-pointer"
                      >
                        <span>Live Terminal</span>
                        <ArrowUpRight size={13} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white border border-white/10 text-xs font-semibold transition-colors cursor-pointer"
                      >
                        <Github size={13} />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Interactive Preview Surface / Visual Canvas */}
                <div
                  className={`lg:col-span-6 rounded-2xl bg-black/60 border border-orange-500/20 p-5 sm:p-6 backdrop-blur-md transition-all group-hover:border-orange-500/40 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                      <span className="text-[11px] font-mono text-stone-400 ml-2">
                        {project.id}.telemetry.py
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-950/60 text-orange-400 border border-orange-500/20 uppercase">
                      Live Telemetry
                    </span>
                  </div>

                  {project.previewType === 'terminal' && (
                    <div className="space-y-2 text-xs font-mono text-stone-300">
                      <p className="text-stone-400 flex items-center gap-1.5">
                        <Terminal size={13} className="text-orange-400" />
                        <span>&gt; eigenportfolio --denoise rmt --universe nse120</span>
                      </p>
                      <p className="text-emerald-400">
                        [OK] Empirical covariance matrix computed (120 x 120)
                      </p>
                      <p className="text-stone-300">
                        [INFO] Marchenko-Pastur lambda_max: 2.148 | Denoising 87% bulk noise
                      </p>
                      <div className="p-3 bg-white/5 rounded-xl border border-white/10 space-y-1 mt-2">
                        <div className="flex justify-between text-stone-300">
                          <span>Max Sharpe Ratio:</span>
                          <span className="text-orange-400 font-bold">2.41 (+38% vs raw)</span>
                        </div>
                        <div className="flex justify-between text-stone-300">
                          <span>Simulation Engine:</span>
                          <span className="text-emerald-400 font-bold">10,000 Monte Carlo Paths</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {project.previewType === 'chart' && (
                    <div className="space-y-3 font-mono">
                      <div className="text-xs text-orange-300 flex items-center justify-between">
                        <span>Stationarity &amp; Regime Indicators</span>
                        <span className="text-emerald-400 text-[10px] font-bold">ADF/KPSS PASSED</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="p-2.5 bg-white/5 rounded-xl border border-white/10">
                          <span className="text-[10px] text-stone-400 block uppercase">Indicators</span>
                          <span className="font-bold text-white text-sm">55+ Technical</span>
                        </div>
                        <div className="p-2.5 bg-white/5 rounded-xl border border-white/10">
                          <span className="text-[10px] text-stone-400 block uppercase">Tail Risk</span>
                          <span className="font-bold text-orange-400 text-sm">VaR 99% / CVaR</span>
                        </div>
                      </div>
                      <div className="p-2.5 text-[11px] text-stone-300 bg-white/5 rounded-xl border border-white/5">
                        Signals: Momentum, Bollinger Bands, RSI &bull; Dynamic Volatility Decoupling
                      </div>
                    </div>
                  )}

                  {project.previewType === 'network' && (
                    <div className="space-y-3 font-mono">
                      <div className="text-xs text-orange-300 flex items-center justify-between">
                        <span>Black–Litterman Model + FAISS RAG</span>
                        <span className="text-emerald-400 text-[10px] font-bold">ZERO HALLUCINATION</span>
                      </div>
                      <div className="p-3 bg-white/5 rounded-xl border border-white/10 space-y-1.5 text-xs text-stone-300">
                        <div className="flex justify-between">
                          <span className="text-stone-400">Efficient Frontier Alloc:</span>
                          <span className="font-bold text-white">50 Points Optimized</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-stone-400">RAG Query Latency:</span>
                          <span className="font-bold text-orange-400">&lt; 800 ms</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-stone-400">Max Asset Cap:</span>
                          <span className="font-bold text-emerald-400">&lt; 30% Non-Linear SLSQP</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {project.previewType === 'analytics' && (
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                          <span className="text-[9px] font-mono text-stone-400 block uppercase">Ingestion</span>
                          <span className="text-xs font-bold text-white font-mono">100K+ Recs</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                          <span className="text-[9px] font-mono text-stone-400 block uppercase">Latency Drop</span>
                          <span className="text-xs font-bold text-orange-400 font-mono">-40% Query</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                          <span className="text-[9px] font-mono text-stone-400 block uppercase">Anomaly Prec.</span>
                          <span className="text-xs font-bold text-emerald-400 font-mono">92% Prec.</span>
                        </div>
                      </div>
                      <div className="p-2.5 text-[11px] text-stone-300 bg-orange-950/30 rounded-xl border border-orange-500/20 font-mono">
                        ETL Pipeline: Automated Power Query validation saves 3+ engineering hrs weekly.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default EditorialProjects;
