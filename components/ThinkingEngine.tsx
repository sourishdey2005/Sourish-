import React, { useState } from 'react';
import { Database, Brain, Sparkles, Binary, Cpu } from 'lucide-react';

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
    label: 'Data',
    headline: 'Signal Discovery & Denoising',
    description: 'Transforming high-dimensional noisy data into clean, actionable representations using Random Matrix Theory, spectral filtering, and robust statistical estimators.',
    principles: ['Marchenko–Pastur eigenvalue clipping', 'Stationarity tests & regime filtering', 'End-to-end reproducible ETL contracts'],
    metrics: '100K+ records processed with zero data leakage',
    icon: Database
  },
  {
    id: 'ai',
    label: 'AI & ML',
    headline: 'Applied Machine Learning & Transformers',
    description: 'Developing domain-adapted generative architectures, low-latency inferencing pipelines, and multi-factor models optimized for production workloads.',
    principles: ['Embedding spaces & semantic retrieval', 'Custom fine-tuning & evaluation benchmarks', 'Quantization for sub-20ms edge inference'],
    metrics: '94.2% domain validation accuracy across LLM pipelines',
    icon: Brain
  },
  {
    id: 'research',
    label: 'Research',
    headline: 'Theoretical Rigor into Useful Products',
    description: 'Bridging peer-reviewed literature with real-world software engineering. 4+ papers published and 5 Indian patents filed in novel IoT and hardware control.',
    principles: ['Empirical ablation & proof validation', 'Reproducible research code notebooks', 'Novel hardware patent architecture'],
    metrics: '4 peer-reviewed publications & 5 filed patents',
    icon: Sparkles
  },
  {
    id: 'analytics',
    label: 'Analytics',
    headline: 'Quantitative Decisions & Risk Optimization',
    description: 'Engineering backtesting engines, Sharpe-ratio maximizers, and risk-parity asset allocators across multi-asset portfolios with rolling-window cross-validation.',
    principles: ['Risk budgeting & covariance shrinkage', 'Monte Carlo stress testing across crash regimes', 'Automated executive KPI dashboards'],
    metrics: '35% reduction in manual enterprise reporting effort',
    icon: Binary
  },
  {
    id: 'engineering',
    label: 'Engineering',
    headline: 'Reliable Cloud & Zero Trust Systems',
    description: 'Orchestrating containerized microservices on Kubernetes, declarative infrastructure with Terraform, and zero-trust perimeter defenses.',
    principles: ['Immutable IaC with automated CI/CD', 'Air-gapped secure edge communication', 'Telemetry, distributed tracing & alerting'],
    metrics: '99.9% uptime across production student infrastructure',
    icon: Cpu
  }
];

const ThinkingEngine: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('data');
  const activeDomain = DOMAINS.find(d => d.id === activeId) || DOMAINS[0];

  return (
    <div className="border border-zinc-200 rounded-2xl p-6 sm:p-8 bg-zinc-50/40">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6 border-b border-zinc-200 pb-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
            INTERACTIVE INTELLECTUAL FRAMEWORK
          </span>
          <h3 className="text-xl font-bold text-zinc-950 tracking-tight">
            Explore my thinking.
          </h3>
        </div>
        <span className="text-xs text-zinc-500 font-mono">
          [Click a node to inspect system principles]
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
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-150 flex items-center gap-2 cursor-pointer border ${
                isActive
                  ? 'bg-zinc-900 text-white border-zinc-900 shadow-sm'
                  : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:text-zinc-900'
              }`}
            >
              <Icon size={14} className={isActive ? 'text-zinc-300' : 'text-zinc-400'} />
              <span>{domain.label}</span>
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 ml-1" />
              )}
            </button>
          );
        })}
      </div>

      {/* Node Detail Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white p-6 rounded-xl border border-zinc-200/80">
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-medium text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded">
              Domain / {activeDomain.label}
            </span>
          </div>
          <h4 className="text-lg font-bold text-zinc-900">
            {activeDomain.headline}
          </h4>
          <p className="text-sm text-zinc-600 leading-relaxed">
            {activeDomain.description}
          </p>

          <div className="pt-3 border-t border-zinc-100">
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
              Core Methodologies
            </span>
            <ul className="space-y-1.5">
              {activeDomain.principles.map((item, idx) => (
                <li key={idx} className="text-xs text-zinc-700 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-5 bg-zinc-50 p-4 rounded-xl border border-zinc-100 flex flex-col justify-between h-full space-y-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
              Demonstrated Benchmark
            </span>
            <div className="text-sm font-semibold text-zinc-900 leading-snug">
              {activeDomain.metrics}
            </div>
          </div>

          <div className="pt-3 border-t border-zinc-200/70 text-[11px] font-mono text-zinc-500">
            Pipeline status: verified &bull; reproducible
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThinkingEngine;
