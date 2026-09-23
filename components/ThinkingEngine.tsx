import React, { useState } from 'react';
import { Database, Brain, Sparkles, Binary, Cpu, Layers } from 'lucide-react';

interface ThinkingDomain {
  id: string;
  label: string;
  headline: string;
  description: string;
  principles: string[];
  metrics: string;
  icon: typeof Database;
}

const DOMAINS: ThinkingDomain[] = [
  {
    id: 'data',
    label: 'ETL & Pipelines',
    headline: 'Signal Extraction & Telemetry Pipelines',
    description: 'Transforming high-dimensional noisy data into clean, actionable representations using Random Matrix Theory, Marchenko–Pastur denoising, and automated SQL validation rules.',
    principles: ['Marchenko–Pastur eigenvalue noise clipping', 'Stationarity tests & regime filtering', 'End-to-end reproducible ETL contracts (100K+ recs)'],
    metrics: 'Reduced aggregation latency by 40–45%',
    icon: Database
  },
  {
    id: 'ai',
    label: 'ML & Anomaly Detection',
    headline: 'Statistical Outliers & Predictive Classification',
    description: 'Developing high-precision anomaly detection filters, time-series forecasting engines, and vector search pipelines for mission-critical industrial & financial applications.',
    principles: ['94% accuracy on high-frequency IoT telemetry', '92% transaction-anomaly precision', 'Unsupervised outlier detection & statistical hypothesis tests'],
    metrics: '94% IoT accuracy & 92% transaction precision',
    icon: Brain
  },
  {
    id: 'genai',
    label: 'RAG & GenAI',
    headline: 'Hallucination-Free Financial Knowledge Systems',
    description: 'Engineering low-latency retrieval-augmented generation (RAG) engines with LangChain, FAISS, and vector embeddings for instant portfolio insight queries.',
    principles: ['Zero metric hallucinations with strict grounding', 'Sub-800ms ad hoc portfolio-insight latency', '15+ scenario projections vectorized with FAISS'],
    metrics: '< 800 ms RAG query latency',
    icon: Sparkles
  },
  {
    id: 'quant',
    label: 'Quant Finance',
    headline: 'Covariance Denoising & Efficient Frontier',
    description: 'Architecting Bayesian portfolio optimizers with Black–Litterman formulation, Maximum Sharpe allocation, and nonlinear quadratic programming using SciPy SLSQP solver.',
    principles: ['Random Matrix Theory (RMT) covariance denoising', '50-point efficient frontier with 10K+ Monte Carlo runs', 'Max concentration capped below 30%'],
    metrics: '< 3 seconds per full portfolio optimization run',
    icon: Binary
  },
  {
    id: 'research',
    label: 'Patents & Research',
    headline: 'Translating Theory into Granted Intellectual Property',
    description: 'Bridging peer-reviewed literature with real-world physical and software engineering. 4 published research papers and 5 granted patents across IoT, energy, and robotics.',
    principles: ['Empirical ablation & statistical validation', '5 granted patents in AI/IoT optimization', '4 peer-reviewed publications'],
    metrics: '5 Granted Patents & 4 Research Papers',
    icon: Cpu
  }
];

const ThinkingEngine: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('data');
  const activeDomain = DOMAINS.find(d => d.id === activeId) || DOMAINS[0];

  return (
    <div className="relative rounded-2xl border border-orange-500/20 p-6 sm:p-8 bg-gradient-to-b from-[#160601] to-[#0e0300] shadow-2xl shadow-orange-950/40 text-stone-100">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6 border-b border-white/10 pb-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-orange-400 block mb-1">
            INTERACTIVE SYSTEM ARCHITECTURE
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            How I architect engineering &amp; data solutions.
          </h3>
        </div>
        <span className="text-xs text-stone-400 font-mono">
          [Select a domain to inspect telemetry]
        </span>
      </div>

      {/* Nodes Switcher */}
      <div className="flex flex-wrap gap-2 mb-8">
        {DOMAINS.map((domain) => {
          const isActive = domain.id === activeId;
          const Icon = domain.icon;
          return (
            <button
              key={domain.id}
              onClick={() => setActiveId(domain.id)}
              className={`px-4 py-2.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer border ${
                isActive
                  ? 'bg-gradient-to-r from-[#ff3d00] to-[#ff8a1f] text-white border-transparent shadow-lg shadow-orange-950/60 scale-105'
                  : 'bg-white/5 text-stone-300 border-white/10 hover:border-orange-500/30 hover:text-white hover:bg-white/10'
              }`}
            >
              <Icon size={14} className={isActive ? 'text-white' : 'text-orange-400'} />
              <span>{domain.label}</span>
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-white ml-1 animate-ping" />
              )}
            </button>
          );
        })}
      </div>

      {/* Node Detail Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-black/40 p-6 rounded-xl border border-white/10 backdrop-blur-md">
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-medium text-orange-300 uppercase tracking-wider bg-orange-950/60 border border-orange-500/30 px-2.5 py-0.5 rounded-full">
              Domain / {activeDomain.label}
            </span>
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-white">
            {activeDomain.headline}
          </h4>
          <p className="text-sm text-stone-300 leading-relaxed">
            {activeDomain.description}
          </p>

          <div className="pt-3 border-t border-white/10">
            <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block mb-2">
              Core Technical Methodologies
            </span>
            <ul className="space-y-2">
              {activeDomain.principles.map((item, idx) => (
                <li key={idx} className="text-xs text-stone-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff8a1f] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-5 bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col justify-between h-full space-y-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-orange-400 block mb-1">
              Demonstrated Empirical Benchmark
            </span>
            <div className="text-base font-bold text-white leading-snug font-mono">
              {activeDomain.metrics}
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span>Status: Verified &bull; Scalable</span>
            <span className="text-emerald-400">BENCHMARKED</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThinkingEngine;
