import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  Github, 
  Terminal, 
  TrendingUp, 
  MessageSquareHeart, 
  Coins,
  Activity, 
  LineChart,
  BarChart3,
  Sparkles
} from 'lucide-react';

interface EditorialProject {
  id: string;
  number: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  bullets: string[];
  stack: string[];
  metricLabel: string;
  metricValue: string;
  impactNote: string;
  github?: string;
  demo?: string;
  previewType: 'hawkeye' | 'ankahee' | 'quantdcx' | 'terminal' | 'chart' | 'network' | 'analytics';
}

const FEATURED_PROJECTS: EditorialProject[] = [
  {
    id: 'hawkeye-alpha',
    number: '01',
    name: 'HawkEye Alpha',
    category: 'High-Frequency Order Flow Intelligence & Alpha Engine',
    headline: 'Self-exciting order flow intelligence, point-process intensity & ML alpha forecasting',
    description: 'Institutional-grade high-frequency order flow engine using Univariate & Multivariate Hawkes Processes to model self-exciting trading clusters with vectorized backtesting across 1,000 Monte Carlo stress scenarios.',
    bullets: [
      'Architected an institutional-grade high-frequency order flow engine using Univariate & Multivariate Hawkes Processes, modeling self-exciting trading clustering via Numba-accelerated Maximum Likelihood Estimation (MLE) and validating goodness-of-fit via Kolmogorov-Smirnov tests on time-rescaled residuals.',
      'Engineered a predictive alpha pipeline combining Point Process intensity and gradient-boosted ML (XGBoost, LightGBM, Random Forest), achieving robust directional return forecasting using SHAP interpretability, PCA decomposition, and order flow imbalance (OFI) Z-score signals.',
      'Built a realistic vectorized backtesting engine with slippage and transaction-cost modeling, evaluating Hawkes-momentum and ML ensemble strategies against Buy-and-Hold across 1,000 Monte Carlo stress scenarios to quantify Sharpe, Sortino, Calmar ratios, and tail risk (VaR/CVaR).',
      'Developed an interactive 100+ chart financial cockpit in Streamlit & Plotly, rendering real-time 2D/3D volatility surfaces, spectral radius stability heatmaps, and Markowitz efficient frontiers with zero GPU dependencies.'
    ],
    stack: ['Python', 'Numba', 'NumPy', 'SciPy', 'Scikit-learn', 'XGBoost', 'LightGBM', 'SHAP', 'Statsmodels', 'Plotly', 'Streamlit'],
    metricLabel: 'Simulation Rigor',
    metricValue: '1,000 MC Scenarios',
    impactNote: 'Numba-accelerated MLE calibration with KS residual tests & 100+ chart real-time 2D/3D volatility surfaces.',
    github: 'https://github.com/sourishdey2005/HawkEye-Alpha.git',
    demo: 'https://hawkeye-alpha-site.streamlit.app/',
    previewType: 'hawkeye'
  },
  {
    id: 'ankahee',
    number: '02',
    name: 'Ankahee',
    category: 'Ephemeral Anonymous Social Sanctuary & AI Sentiment Platform',
    headline: 'Zero-footprint data lifecycles, sub-100ms reactive subscriptions & Genkit AI sentiment',
    description: 'Real-time ephemeral social sanctuary engineered with automated 24-hour decay intervals, reactive event synchronization, and AI sentiment categorization.',
    bullets: [
      'Architected a real-time ephemeral social platform with zero-footprint data lifecycles, engineering automated TTL (Time-To-Live) cleanup cron jobs in Convex to programmatically purge confessions, comments, and direct messages after 24-hour decay intervals.',
      'Integrated an AI sentiment and categorization pipeline via Google Genkit (Gemini), parsing confession text payloads at submission to dynamically generate contextual emotion metadata (Anxiety, Love, Secret) and aggregate 24-hour community word-cloud matrices.',
      'Engineered sub-100ms real-time event synchronization across anonymous live feeds, temporary chat rooms, and ephemeral 1-to-1 DMs by leveraging Convex reactive subscriptions and Next.js React Server Components.',
      'Implemented an anonymous authentication & privacy compliance layer using Clerk, decoupling persistent user credentials from published artifacts and enabling one-click GDPR-style cascade account and content deletion.'
    ],
    stack: ['Next.js (App Router)', 'TypeScript', 'Convex', 'Clerk', 'Google Genkit (Gemini)', 'Tailwind CSS', 'ShadCN UI', 'Framer Motion'],
    metricLabel: 'Sync Latency',
    metricValue: '< 100ms Reactive',
    impactNote: 'Automated 24h decay purge cron jobs, Clerk GDPR privacy layer & Gemini sentiment parsing.',
    github: 'https://github.com/sourishdey2005/Ankahee.git',
    demo: 'https://aakahee.vercel.app/',
    previewType: 'ankahee'
  },
  {
    id: 'quantdcx',
    number: '03',
    name: 'QuantDCX',
    category: 'Real-Time Cryptocurrency Market & Order Book Terminal',
    headline: 'Microstructure order book depth, SciPy SLSQP asset allocation & multi-token correlation suite',
    description: 'Production-grade cryptocurrency analytics terminal consuming live tick, trade-tape, and OHLCV feeds across 100+ spot trading pairs via modular CoinDCX REST API integrations.',
    bullets: [
      'Architected a production-grade cryptocurrency analytics terminal consuming live tick, trade-tape, and OHLCV feeds across 100+ spot trading pairs via modular CoinDCX REST API integrations with configurable 2–30s polling intervals.',
      'Engineered high-frequency microstructure visualization tools, rendering real-time order-book depth charts, bid/ask imbalance heatmaps, and 3D price-volatility surfaces to surface institutional liquidity clusters and buy/sell pressure.',
      'Implemented an asset allocation & frontier engine using SciPy (SLSQP), calculating dynamic maximum Sharpe and minimum variance portfolios alongside a continuous efficient frontier curve across user-selected crypto baskets.',
      'Built a multi-asset comparative suite with 20+ quantitative indicators (VWAP, Volume Profile, Stochastic RSI, Chaikin Flow), evaluating 6 simultaneous tokens via pairwise returns correlation heatmaps and treemap distributions with zero GPU overhead.'
    ],
    stack: ['Python', 'Streamlit', 'Plotly', 'Pandas', 'NumPy', 'SciPy (optimize)', 'CoinDCX REST APIs', 'CSS'],
    metricLabel: 'Coverage & Speed',
    metricValue: '100+ Pairs & 2-30s Polling',
    impactNote: 'High-frequency microstructure depth charts, SLSQP portfolio frontier, and 20+ quantitative indicators across 6 tokens simultaneously.',
    github: 'https://github.com/sourishdey2005/QuantDCX.git',
    demo: 'https://quantdcx-terminal.streamlit.app/',
    previewType: 'quantdcx'
  },
  {
    id: 'eigenportfolio',
    number: '04',
    name: 'EigenPortfolio Terminal',
    category: 'Quantitative Finance & RMT Platform',
    headline: 'Covariance matrix denoising via Random Matrix Theory & portfolio optimization',
    description: 'Formulated an automated data-cleaning and denoising pipeline across 120+ equity assets using Random Matrix Theory (RMT) to filter Marchenko–Pastur noise. Implemented Maximum-Sharpe, Minimum-Variance, and Risk-Parity allocation engines benchmarked against 10,000+ Monte Carlo simulations to deliver robust portfolio-frontier convergence.',
    bullets: [
      'Engineered covariance matrix filtering with Random Matrix Theory (RMT) across 120+ equities to isolate true asset correlations from Marchenko-Pastur bulk noise.',
      'Benchmarked portfolio optimization against 10,000+ Monte Carlo simulations to ensure robust convergence of the efficient frontier under high market stress.',
      'Stabilized individual asset weights below 30% concentration while accelerating analysis runtime to under 3 seconds per universe.'
    ],
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
    number: '05',
    name: 'ArthGyan',
    category: 'Technical Analysis & Market Intelligence',
    headline: 'Multi-asset quantitative indicators, momentum analytics & market regime models',
    description: 'Developed an interactive quantitative engine tracking 55+ technical indicators across 50+ equities. Engineered automated stationarity tests (ADF/KPSS), tail-risk modeling (VaR/CVaR), and momentum oscillation indicators with interactive Plotly visualizations and automated alert pipelines.',
    bullets: [
      'Developed an interactive quantitative platform tracking 55+ technical indicators and statistical momentum oscillators across 50+ equities.',
      'Automated ADF and KPSS econometric stationarity testing pipelines to eliminate non-stationary drift before regime classification.',
      'Engineered interactive Plotly dashboards displaying parametric VaR (99%) and Expected Shortfall (CVaR) tail-risk metrics.'
    ],
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
    number: '06',
    name: 'ArthaDrishti',
    category: 'Bayesian Asset Allocation & Fin-RAG',
    headline: 'Black–Litterman allocation framework & retrieval-augmented financial intelligence',
    description: 'Architected an automated portfolio engine combining Black–Litterman Bayesian allocation with a FAISS-indexed RAG pipeline. Optimized the efficient frontier over 50 discrete points using SciPy nonlinear programming while maintaining sub-800ms natural-language query latency for contextual portfolio insights without hallucinations.',
    bullets: [
      'Architected a Bayesian Black–Litterman asset allocation engine solving non-linear SLSQP optimization over 50 discrete frontier points.',
      'Built a sub-800ms natural language financial inquiry pipeline with FAISS vector indexing and strict metric grounding to eliminate hallucinations.',
      'Enforced hard non-linear bounds capping single-asset concentration to < 30% while incorporating dynamic investor subjective views.'
    ],
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
    number: '07',
    name: 'BizSight Analytics & ETL Pipeline',
    category: 'Enterprise Data Platform & BI Telemetry',
    headline: 'High-throughput ETL pipelines, automated SQL validation & executive telemetry monitors',
    description: 'Built enterprise-grade ingestion pipelines processing 100K+ records with automated SQL and Power Query validation rules. Designed proactive anomaly filters achieving 92% transaction-anomaly precision and reducing executive reporting latency by 40%.',
    bullets: [
      'Engineered automated ETL validation pipelines ingesting 100K+ transaction records with zero manual schema mismatches.',
      'Programmed proactive anomaly detection heuristics in SQL and Power Query achieving 92% precision on transaction reconciliation.',
      'Decreased executive reporting latency by 40% and saved 3+ engineering hours weekly through automated data pipelines.'
    ],
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
    <div className="relative pb-28 sm:pb-36">
      {FEATURED_PROJECTS.map((project, idx) => {
        const isReversed = idx % 2 === 1;

        return (
          <div
            key={project.id}
            className="sticky transition-all duration-200 mb-20 sm:mb-28 last:mb-0"
            style={{
              top: `calc(clamp(4.25rem, 6.5vh, 5.25rem) + ${idx * 14}px)`,
              zIndex: 10 + idx,
            }}
          >
            {/* Project Card Shell with Stacking Card Deck Elevation & Glowing Amber Glass Border */}
            <article className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#120401] bg-gradient-to-br from-[#1a0702] via-[#120401] to-[#0a0200] border border-orange-500/40 shadow-[0_-16px_36px_rgba(0,0,0,0.9),0_25px_50px_-10px_rgba(0,0,0,0.95),0_0_25px_rgba(255,61,0,0.12)] hover:border-orange-500/70 transition-all duration-300 group">
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Project Editorial Narrative */}
                <div className={`lg:col-span-7 space-y-4 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  {/* Category & Serial Number */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#ff3d00] shadow-[0_0_8px_#ff3d00]" />
                      <span className="text-[11px] font-mono uppercase tracking-wider text-orange-400 font-bold">
                        {project.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-orange-950/60 text-orange-300/80 border border-orange-500/20">
                        Card {idx + 1} / {FEATURED_PROJECTS.length}
                      </span>
                      <span className="text-xl sm:text-2xl font-serif italic text-white/30 group-hover:text-orange-400 transition-colors">
                        /{project.number}
                      </span>
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug group-hover:text-orange-300 transition-colors">
                    {project.name}
                  </h3>

                  {/* Headline */}
                  <p className="text-xs sm:text-sm font-medium text-orange-200/90 leading-relaxed">
                    {project.headline}
                  </p>

                  {/* Production Resume Bullet Points */}
                  <div className="space-y-2 pt-1">
                    {project.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs text-stone-300 leading-relaxed font-sans">
                        <span className="text-orange-400 text-sm leading-none mt-0.5 shrink-0">&bull;</span>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metric Ribbon */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-orange-950/40 border border-orange-500/30 text-xs font-mono">
                      <span className="text-stone-400">{project.metricLabel}:</span>
                      <span className="font-bold text-orange-400">{project.metricValue}</span>
                    </div>
                    <div className="text-[11px] font-mono text-stone-400 italic">
                      &bull; {project.impactNote}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-stone-300 group-hover:border-orange-500/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Action Links */}
                  <div className="pt-3 flex items-center gap-3">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#ff3d00] to-[#ff8a1f] text-white text-xs font-semibold hover:brightness-110 shadow-md shadow-orange-950/50 transition-all cursor-pointer"
                      >
                        <span>Live Demo</span>
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

                {/* Interactive Preview Surface / Visual Telemetry Canvas */}
                <div
                  className={`lg:col-span-5 rounded-2xl bg-black/90 border border-orange-500/25 p-5 backdrop-blur-md transition-all group-hover:border-orange-500/40 w-full ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                      <span className="text-[11px] font-mono text-stone-400 ml-2">
                        {project.id}.telemetry
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-950/60 text-orange-400 border border-orange-500/20 uppercase font-semibold">
                      Live Telemetry
                    </span>
                  </div>

                  {/* 1. HawkEye Alpha Live Telemetry Canvas */}
                  {project.previewType === 'hawkeye' && (
                    <div className="space-y-3 font-mono text-xs">
                      <div className="flex items-center justify-between text-orange-300">
                        <span className="flex items-center gap-1.5 font-bold">
                          <TrendingUp size={14} className="text-[#ff3d00]" />
                          <span>Hawkes Process Intensity Engine</span>
                        </span>
                        <span className="text-emerald-400 text-[10px] px-1.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30">
                          KS-TEST PASSED
                        </span>
                      </div>

                      <div className="p-3 bg-white/5 rounded-xl border border-white/10 space-y-2">
                        <div className="flex justify-between text-stone-300 text-[11px]">
                          <span className="text-stone-400">Order Flow Clustering:</span>
                          <span className="font-bold text-white">Numba JIT MLE Accelerated</span>
                        </div>
                        <div className="flex justify-between text-stone-300 text-[11px]">
                          <span className="text-stone-400">Alpha Regressors:</span>
                          <span className="text-orange-400 font-bold">XGBoost &bull; LightGBM &bull; RF</span>
                        </div>
                        <div className="flex justify-between text-stone-300 text-[11px]">
                          <span className="text-stone-400">Feature Explainability:</span>
                          <span className="text-stone-200">SHAP &bull; OFI Z-score &bull; PCA</span>
                        </div>
                        <div className="flex justify-between text-stone-300 text-[11px]">
                          <span className="text-stone-400">Stress Simulation:</span>
                          <span className="text-emerald-400 font-bold">1,000 Monte Carlo Paths</span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-orange-950/30 border border-orange-500/20 text-[11px] text-stone-300 flex items-center justify-between">
                        <span>Cockpit Visualization:</span>
                        <span className="text-orange-300 font-semibold">100+ 2D/3D Vol Surfaces</span>
                      </div>
                    </div>
                  )}

                  {/* 2. Ankahee Live Telemetry Canvas */}
                  {project.previewType === 'ankahee' && (
                    <div className="space-y-3 font-mono text-xs">
                      <div className="flex items-center justify-between text-orange-300">
                        <span className="flex items-center gap-1.5 font-bold">
                          <MessageSquareHeart size={14} className="text-[#ff3d00]" />
                          <span>Convex TTL &amp; Gemini Sentiment</span>
                        </span>
                        <span className="text-emerald-400 text-[10px] px-1.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30">
                          SUB-100MS SYNC
                        </span>
                      </div>

                      <div className="p-3 bg-white/5 rounded-xl border border-white/10 space-y-2">
                        <div className="flex justify-between text-stone-300 text-[11px]">
                          <span className="text-stone-400">Ephemeral Lifecycle:</span>
                          <span className="font-bold text-white">24h Automated TTL Decay</span>
                        </div>
                        <div className="flex justify-between text-stone-300 text-[11px]">
                          <span className="text-stone-400">AI Sentiment Engine:</span>
                          <span className="text-orange-400 font-bold">Google Genkit (Gemini)</span>
                        </div>
                        <div className="flex justify-between text-stone-300 text-[11px]">
                          <span className="text-stone-400">Metadata Extraction:</span>
                          <span className="text-stone-200">Anxiety &bull; Love &bull; Secret</span>
                        </div>
                        <div className="flex justify-between text-stone-300 text-[11px]">
                          <span className="text-stone-400">Privacy Compliance:</span>
                          <span className="text-emerald-400 font-bold">Clerk 1-Click GDPR Purge</span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-orange-950/30 border border-orange-500/20 text-[11px] text-stone-300 flex items-center justify-between">
                        <span>Event Synchronization:</span>
                        <span className="text-orange-300 font-semibold">Reactive Live Subscriptions</span>
                      </div>
                    </div>
                  )}

                  {/* 3. QuantDCX Live Microstructure Telemetry Canvas */}
                  {project.previewType === 'quantdcx' && (
                    <div className="space-y-3 font-mono text-xs">
                      <div className="flex items-center justify-between text-orange-300">
                        <span className="flex items-center gap-1.5 font-bold">
                          <Coins size={14} className="text-[#ff3d00]" />
                          <span>CoinDCX REST &bull; L2 Order Book</span>
                        </span>
                        <span className="text-emerald-400 text-[10px] px-1.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30">
                          100+ SPOT PAIRS
                        </span>
                      </div>

                      <div className="p-3 bg-white/5 rounded-xl border border-white/10 space-y-2">
                        <div className="flex justify-between text-stone-300 text-[11px]">
                          <span className="text-stone-400">Polling Architecture:</span>
                          <span className="font-bold text-white">Configurable 2–30s Feed</span>
                        </div>
                        <div className="flex justify-between text-stone-300 text-[11px]">
                          <span className="text-stone-400">Microstructure Visuals:</span>
                          <span className="text-orange-400 font-bold">Depth &bull; Imbalance &bull; 3D Vol</span>
                        </div>
                        <div className="flex justify-between text-stone-300 text-[11px]">
                          <span className="text-stone-400">Asset Allocation:</span>
                          <span className="text-stone-200">SciPy SLSQP Efficient Frontier</span>
                        </div>
                        <div className="flex justify-between text-stone-300 text-[11px]">
                          <span className="text-stone-400">Technical Indicators:</span>
                          <span className="text-emerald-400 font-bold">20+ Indicators &bull; 6 Tokens</span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-orange-950/30 border border-orange-500/20 text-[11px] text-stone-300 flex items-center justify-between">
                        <span>Liquidity Telemetry:</span>
                        <span className="text-orange-300 font-semibold">Real-Time Bid/Ask Imbalance</span>
                      </div>
                    </div>
                  )}

                  {/* 4. EigenPortfolio Terminal Preview */}
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

                  {/* 5. ArthGyan Preview */}
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

                  {/* 6. ArthaDrishti Preview */}
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

                  {/* 7. BizSight Preview */}
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
