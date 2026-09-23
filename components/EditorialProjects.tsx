import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Activity, LineChart, Cpu, Terminal } from 'lucide-react';

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
    impactNote: 'Reduced portfolio-optimization analysis time from hours to under 3 seconds per run across 80+ dynamic Plotly risk heatmaps.',
    github: 'https://github.com/sourishdey2005/EIGENPORTFOLIO-TERMINAL',
    demo: 'https://eigenportfolio-terminal.streamlit.app/',
    previewType: 'terminal'
  },
  {
    id: 'arthgyan',
    number: '02',
    name: 'ArthGyan',
    category: 'Technical Analysis & Market Intelligence',
    headline: '55+ vectorized technical indicators & tail-risk analysis across 50+ equities',
    description: 'Engineered an end-to-end technical analysis platform processing historical tick-to-daily market data across 50+ NSE & US equities. Quantified asset downside risk across 8 time horizons (1-month to 10-year lookbacks) with automated maximum-drawdown trackers, rolling volatility cones, and normal Q–Q probability plots for tail-risk analysis.',
    stack: ['Python', 'Streamlit', 'Plotly', 'Pandas', 'NumPy', 'TA-Lib', 'REST APIs', 'Git'],
    metricLabel: 'Chart Render Latency',
    metricValue: '60% Faster',
    impactNote: 'Accelerated cross-asset correlation analysis for 5 concurrent tickers using Streamlit caching and vectorized dataframes.',
    github: 'https://github.com/sourishdey2005/ArthGyan.git',
    demo: 'https://arthgyan-site.streamlit.app/',
    previewType: 'chart'
  },
  {
    id: 'arthadrishti',
    number: '03',
    name: 'ArthaDrishti',
    category: 'Quantitative Portfolio Optimization & Intelligence System',
    headline: 'Bayesian Black–Litterman allocation & LangChain financial RAG engine',
    description: 'Architected a Bayesian portfolio optimizer for 100+ equities, mitigating Markowitz estimation error by formulating the Black–Litterman model with market-implied priors. Integrated a financial RAG engine using LangChain and FAISS, reducing ad hoc portfolio-insight latency to under 800 milliseconds with zero metric hallucinations by vectorizing 15+ scenario projections.',
    stack: ['Python', 'SciPy (SLSQP)', 'PyPortfolioOpt', 'LangChain', 'FAISS', 'Streamlit', 'Plotly', 'Docker'],
    metricLabel: 'RAG Query Speed',
    metricValue: '< 800 ms',
    impactNote: 'Maximized risk-adjusted returns across a 50-point efficient frontier, capping asset concentration below 30% with SciPy SLSQP solver.',
    github: 'https://github.com/sourishdey2005',
    demo: 'https://github.com/sourishdey2005',
    previewType: 'network'
  },
  {
    id: 'bizsight-ai',
    number: '04',
    name: 'BizSight AI & ETL Suite',
    category: 'Business Intelligence & Automated Anomaly Detection',
    headline: 'High-throughput enterprise telemetry pipelines & automated reporting rules',
    description: 'Developed Python and SQL ETL pipelines processing 100K+ records and converted business requirements into reusable, automated data-validation rules. Resolved data discrepancies and pipeline failures through root-cause analysis, documenting solutions for cross-functional business reporting.',
    stack: ['Python', 'SQL', 'FastAPI', 'React', 'Docker', 'Power BI', 'Scikit-learn'],
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
    <div className="space-y-16 sm:space-y-24">
      {FEATURED_PROJECTS.map((project, idx) => {
        const isReversed = idx % 2 === 1;

        return (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
              isReversed ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Project Editorial Narrative */}
            <div className={`lg:col-span-6 space-y-4 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-orange-400 bg-orange-950/40 px-2 py-0.5 rounded border border-orange-500/20">
                  {project.number}
                </span>
                <span className="text-xs font-mono tracking-wider uppercase text-stone-400">
                  {project.category}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight hover:text-orange-300 transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm font-semibold text-orange-400/90 mt-1">
                  {project.headline}
                </p>
              </div>

              <p className="text-sm text-stone-300 leading-relaxed">
                {project.description}
              </p>

              {/* Stack Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-stone-300 hover:border-orange-500/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Impact / Metric highlight block */}
              <div className="pt-3 border-t border-white/10 flex items-baseline justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block">
                    {project.metricLabel}
                  </span>
                  <span className="text-lg font-extrabold text-white font-mono">
                    {project.metricValue}
                  </span>
                </div>
                <div className="text-xs text-stone-400 max-w-[280px] text-right">
                  {project.impactNote}
                </div>
              </div>

              {/* Action Links with Animated Ember Glow */}
              <div className="flex items-center gap-4 pt-2">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#ff3d00] to-[#ff8a1f] text-white text-xs font-semibold shadow-md shadow-orange-950/40 hover:brightness-110 hover:shadow-orange-700/30 transition-all group"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-mono text-stone-300 hover:text-white border border-white/10 hover:border-white/25 transition-colors"
                  >
                    <Github size={13} />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>

            {/* Project Interactive Preview Window (Dark Fluxora Ember Theme) */}
            <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
              <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-b from-[#180702] to-[#100300] p-4 sm:p-5 shadow-2xl shadow-orange-950/40 backdrop-blur-md group hover:border-orange-500/40 transition-all duration-300">
                {/* Window Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-[11px] font-mono text-stone-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-stone-300 font-semibold">{project.name.toLowerCase().replace(/\s+/g, '-')}.sys</span>
                  </div>
                  <span className="text-orange-400 text-[10px] font-bold tracking-widest">
                    ACTIVE TELEMETRY
                  </span>
                </div>

                {/* Window Visual Body */}
                <div className="min-h-[220px] flex flex-col justify-center">
                  {project.previewType === 'terminal' && (
                    <div className="space-y-2 text-xs font-mono text-stone-300">
                      <div className="text-orange-400 flex items-center gap-2">
                        <Terminal size={14} />
                        <span>$ python -m eigen_denoise --assets 120 --filter marchenko_pastur</span>
                      </div>
                      <div className="text-stone-400 pl-4 border-l border-orange-500/30">
                        [+] Calculating Empirical Covariance Matrix (120 x 120)...
                      </div>
                      <div className="text-stone-400 pl-4 border-l border-orange-500/30">
                        [+] Theoretical Bounds: λ_min=0.412, λ_max=1.844 (94.8% noise rejected)
                      </div>
                      <div className="p-3 rounded-xl bg-orange-950/40 border border-orange-500/30 text-[11px] text-orange-200 mt-2">
                        &bull; Denoised Covariance Inversion: DET=1.42e-12 &bull; Max Sharpe Ratio: 2.14
                      </div>
                    </div>
                  )}

                  {project.previewType === 'chart' && (
                    <div className="space-y-3 font-mono">
                      <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
                        <span className="font-semibold text-white flex items-center gap-1.5">
                          <LineChart size={14} className="text-orange-400" />
                          NSE:NIFTY50 &bull; US:SPY
                        </span>
                        <span className="text-emerald-400 font-bold">+18.4% Alpha</span>
                      </div>
                      {/* Animated bars */}
                      <div className="h-24 flex items-end gap-1.5 pt-4">
                        {[35, 42, 38, 55, 60, 48, 72, 65, 84, 92, 88, 96].map((val, bIdx) => (
                          <div key={bIdx} className="flex-1 bg-white/5 hover:bg-orange-500/40 transition-colors rounded-t-sm h-full flex items-end">
                            <div 
                              className="w-full bg-gradient-to-t from-[#ff3d00] to-[#ff8a1f] rounded-t-sm transition-all duration-500" 
                              style={{ height: `${val}%` }}
                            />
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between text-[10px] text-stone-500 pt-1">
                        <span>55+ Indicators</span>
                        <span>Streamlit Caching</span>
                        <span>Q–Q Risk Validation</span>
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
                </div>
              </div>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
};

export default EditorialProjects;
