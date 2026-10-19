import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';

interface EditorialProject {
  id: string;
  number: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  bullets: string[];
  stack: string[];
  github?: string;
  demo?: string;
  image?: string;
  banner?: string;
}

const FEATURED_PROJECTS: EditorialProject[] = [
  {
    id: 'bharat-terminal',
    number: '01',
    name: 'Bharat Terminal',
    category: 'Desktop financial market terminal',
    headline: 'Multi-threaded interactive charting, multi-source failover & offline price inference',
    description: 'Native desktop financial market terminal engineered with Rust and Python, aggregating 15 data sources across 500+ symbols with automated failover and 7 embedded forecasting engines.',
    bullets: [
      'Multi-threaded interactive charting with low-latency analytics.',
      '15 data sources and 500+ symbols with automated failover.',
      '7 forecasting engines with local ONNX runtimes for 100% offline price inference.'
    ],
    stack: ['Rust', 'Python', 'Polars', 'ONNX', 'SQLite'],
    github: 'https://github.com/sourishdey2005/Bharat-terminal-exe',
    demo: 'https://bharat-terminal-site.vercel.app/',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1400&q=80',
    banner: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: 'krishinet-vlm',
    number: '02',
    name: 'KrishiNet-VLM',
    category: 'Vision-language crop disease classification',
    headline: '4-bit QLoRA fine-tune of SmolVLM-500M across 21 crop disease classes',
    description: 'Parameter-efficient vision-language model for plant disease classification, fine-tuned with QLoRA on a rebalanced 54,304-image PlantVillage dataset, reaching 88.9% accuracy and 0.9317 macro AUC on a held-out 300-image test set.',
    bullets: [
      '4-bit QLoRA fine-tune of SmolVLM-500M across 21 crop disease classes.',
      '88.9% accuracy and 0.9317 macro AUC on a 300-image test set via PEFT adapters.',
      'Rebalanced a 54,304-image PlantVillage dataset from 12.56:1 to 1.05:1.'
    ],
    stack: ['SmolVLM', 'QLoRA', 'PEFT', 'PyTorch'],
    github: 'https://github.com/sourishdey2005/KrishiNet-VLM',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1400&q=80',
    banner: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: 'hawkeye-alpha',
    number: '03',
    name: 'HawkEye Alpha',
    category: 'High-frequency order flow & alpha engine',
    headline: 'Self-exciting order flow intelligence, point-process intensity & ML alpha forecasting',
    description: 'Institutional-grade high-frequency order flow engine using Univariate & Multivariate Hawkes Processes to model self-exciting trading clusters with vectorized backtesting across 1,000 Monte Carlo stress scenarios.',
    bullets: [
      'Hawkes process order-flow engine with Numba MLE and ML alpha forecasting.',
      'Vectorized backtesting across 1,000 Monte Carlo scenarios.',
      'Interactive 100+ chart cockpit with volatility surfaces.'
    ],
    stack: ['Python', 'Numba', 'NumPy', 'SciPy', 'Scikit-learn', 'XGBoost', 'LightGBM', 'SHAP', 'Statsmodels', 'Plotly', 'Streamlit'],
    github: 'https://github.com/sourishdey2005/HawkEye-Alpha.git',
    demo: 'https://hawkeye-alpha-site.streamlit.app/',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1400&q=80',
    banner: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: 'ankahee',
    number: '04',
    name: 'Ankahee',
    category: 'Ephemeral social platform & AI sentiment',
    headline: 'Zero-footprint data lifecycles, sub-100ms reactive subscriptions & Genkit AI sentiment',
    description: 'Real-time ephemeral social sanctuary engineered with automated 24-hour decay intervals, reactive event synchronization, and AI sentiment categorization.',
    bullets: [
      'Ephemeral social platform with automated 24h TTL purge.',
      'Gemini sentiment parsing and sub-100ms reactive sync.',
      'Clerk anonymous auth with one-click GDPR deletion.'
    ],
    stack: ['Next.js', 'TypeScript', 'Convex', 'Clerk', 'Google Genkit', 'Tailwind CSS', 'ShadCN UI', 'Framer Motion'],
    github: 'https://github.com/sourishdey2005/Ankahee.git',
    demo: 'https://aakahee.vercel.app/',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80',
    banner: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: 'quantdcx',
    number: '05',
    name: 'QuantDCX',
    category: 'Real-time crypto market & order book terminal',
    headline: 'Microstructure order book depth, SciPy SLSQP allocation & multi-token correlation',
    description: 'Production-grade cryptocurrency analytics terminal consuming live tick, trade-tape, and OHLCV feeds across 100+ spot trading pairs via modular CoinDCX REST API integrations.',
    bullets: [
      'Live CoinDCX order-book terminal with depth charts and heatmaps.',
      'SciPy SLSQP efficient-frontier allocation across crypto pairs.',
      '20+ quantitative indicators across 6 tokens simultaneously.'
    ],
    stack: ['Python', 'Streamlit', 'Plotly', 'Pandas', 'NumPy', 'SciPy', 'CoinDCX API'],
    github: 'https://github.com/sourishdey2005/QuantDCX.git',
    demo: 'https://quantdcx-terminal.streamlit.app/',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=1400&q=80',
    banner: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: 'eigenportfolio',
    number: '06',
    name: 'EigenPortfolio Terminal',
    category: 'Quantitative finance & random matrix theory',
    headline: 'Covariance matrix denoising via Random Matrix Theory & portfolio optimization',
    description: 'Formulated an automated data-cleaning and denoising pipeline across 120+ equity assets using Random Matrix Theory to filter Marchenko–Pastur noise, benchmarked against 10,000+ Monte Carlo simulations.',
    bullets: [
      'RMT covariance denoising across 120+ equities.',
      'Portfolio optimization validated over 10,000 Monte Carlo paths.',
      'Analysis runtime under 3 seconds per universe.'
    ],
    stack: ['Python', 'Streamlit', 'NumPy', 'Pandas', 'Plotly', 'Random Matrix Theory'],
    github: 'https://github.com/sourishdey2005',
    demo: 'https://eigenportfolio-terminal.streamlit.app/',
    image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1400&q=80',
    banner: 'https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: 'arthgyan',
    number: '07',
    name: 'ArthGyan',
    category: 'Technical analysis & market intelligence',
    headline: 'Multi-asset quantitative indicators, momentum analytics & market regime models',
    description: 'Interactive quantitative engine tracking 55+ technical indicators across 50+ equities with automated stationarity tests, tail-risk modeling, and momentum oscillation indicators.',
    bullets: [
      '55+ technical indicators across 50+ equities.',
      'Automated ADF/KPSS stationarity testing pipelines.',
      'Interactive VaR 99% and CVaR tail-risk dashboards.'
    ],
    stack: ['Python', 'Scikit-learn', 'Statsmodels', 'Streamlit', 'Plotly', 'Pandas'],
    github: 'https://github.com/sourishdey2005',
    demo: 'https://arthgyan.streamlit.app/',
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1400&q=80',
    banner: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: 'arthadrishti',
    number: '08',
    name: 'ArthaDrishti',
    category: 'Bayesian asset allocation & financial RAG',
    headline: 'Black–Litterman allocation framework & retrieval-augmented financial intelligence',
    description: 'Portfolio engine combining Black–Litterman Bayesian allocation with a FAISS-indexed RAG pipeline, optimized over 50 frontier points with sub-800ms natural-language query latency.',
    bullets: [
      'Black–Litterman Bayesian allocation with SLSQP optimization.',
      'Sub-800ms FAISS RAG queries with zero hallucination.',
      'Single-asset concentration capped below 30%.'
    ],
    stack: ['LangChain', 'FAISS', 'Python', 'Streamlit', 'SciPy', 'Scikit-learn'],
    github: 'https://github.com/sourishdey2005',
    demo: 'https://arthadrishti.streamlit.app/',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80',
    banner: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: 'bizsight',
    number: '09',
    name: 'BizSight Analytics',
    category: 'Enterprise data platform & BI telemetry',
    headline: 'High-throughput ETL pipelines, automated SQL validation & executive telemetry',
    description: 'Enterprise-grade ingestion pipelines processing 100K+ records with automated SQL and Power Query validation, achieving 92% transaction-anomaly precision and 40% lower reporting latency.',
    bullets: [
      'Automated ETL validation across 100K+ records.',
      'Anomaly detection with 92% transaction precision.',
      'Reporting latency reduced by 40%.'
    ],
    stack: ['Python', 'SQL', 'Power BI', 'Docker', 'FastAPI', 'Pandas'],
    github: 'https://github.com/sourishdey2005',
    demo: 'https://biz-sight-ai-business-intelligence.vercel.app/',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
    banner: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80'
  }
];

const EditorialProjects: React.FC = () => {
  return (
    <div className="relative">
      {FEATURED_PROJECTS.map((project, idx) => {
        const isReversed = idx % 2 === 1;

        return (
          <div
            key={project.id}
            className="project-deck sticky mb-8 sm:mb-10 last:mb-0"
            style={{
              top: `calc(5.5rem + ${idx * 12}px)`,
              zIndex: 10 + idx
            }}
          >
            <article className="project-card-3d rounded-2xl border border-white/[0.09] bg-gradient-to-br from-[#100502] via-[#0a0301] to-[#070201] shadow-[0_-14px_40px_rgba(0,0,0,0.85),0_30px_60px_-20px_rgba(0,0,0,0.9)] overflow-hidden group">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Visual */}
                <div
                  className={`relative lg:col-span-6 min-h-[16rem] sm:min-h-[20rem] lg:min-h-[26rem] overflow-hidden ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  {(project.image || project.banner) && (
                    <img
                      src={project.image || project.banner}
                      alt={`${project.name} preview`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0301] via-[#0a0301]/35 to-transparent" />
                  <div className={`absolute inset-0 ${isReversed ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-transparent to-[#0a0301]/70 hidden lg:block`} />
                  <div className="absolute top-5 left-5 flex items-center gap-2">
                    <span className="font-display text-4xl text-white/90 leading-none drop-shadow-lg">
                      {project.number}
                    </span>
                    <span className="w-8 h-px bg-[#ff4d00]" />
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#ff4d00] hover:bg-[#ff6a1f] text-white text-[11px] font-semibold uppercase tracking-[0.14em] shadow-lg shadow-black/40 transition-colors"
                      >
                        <span>Live demo</span>
                        <ArrowUpRight size={12} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/60 hover:bg-black/80 text-stone-200 border border-white/20 text-[11px] font-semibold uppercase tracking-[0.14em] backdrop-blur-md transition-colors"
                      >
                        <Github size={12} />
                        <span>Source</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-6 p-6 sm:p-9 lg:p-10 flex flex-col justify-center ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d00] shadow-[0_0_8px_#ff4d00]" />
                    <span className="font-condensed text-[10px] uppercase tracking-[0.24em] text-[#ff8a3d]">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-display uppercase text-white text-2xl sm:text-3xl leading-[1.02] tracking-[0.01em] group-hover:text-[#ffb07a] transition-colors">
                    {project.name}
                  </h3>

                  <p className="mt-3 text-xs sm:text-[13px] leading-relaxed text-stone-400">
                    {project.headline}
                  </p>

                  <div className="mt-5 space-y-2">
                    {project.bullets.slice(0, 3).map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs text-stone-300 leading-relaxed">
                        <span className="mt-[7px] w-1 h-1 rounded-full bg-[#ff4d00] shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/[0.08] flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-condensed text-[10px] uppercase tracking-[0.12em] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-stone-400 group-hover:border-[#ff4d00]/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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
