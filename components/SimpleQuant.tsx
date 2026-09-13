import React from 'react';
import { Github, ArrowUpRight } from 'lucide-react';

interface QuantProject {
  title: string;
  github: string;
  demo: string;
  stack: string[];
  summary: string;
  metrics: { label: string; value: string }[];
  bulletPoints: string[];
}

const QUANT_ITEMS: QuantProject[] = [
  {
    title: "EigenPortfolio Terminal — Quant Finance Platform",
    github: "https://github.com/sourishdey2005/EIGENPORTFOLIO-TERMINAL",
    demo: "https://eigenportfolio-terminal.streamlit.app/",
    stack: ["Python", "Streamlit", "NumPy", "Pandas", "Plotly"],
    summary: "Built a quantitative research and portfolio optimization platform leveraging Random Matrix Theory (RMT) for covariance denoising, alpha extraction, and robust portfolio construction across 120+ equities.",
    metrics: [
      { label: "Assets Supported", value: "120+ Equities" },
      { label: "Optimization Models", value: "Max Sharpe, Risk Parity, Min Var" },
      { label: "Visual Analytics", value: "80+ Plotly Views" }
    ],
    bulletPoints: [
      "Built a quantitative research and portfolio optimization platform leveraging Random Matrix Theory (RMT) for covariance denoising, alpha extraction, and robust portfolio construction across 120+ equities (S&P 500 / NIFTY 50).",
      "Executed Marchenko–Pastur bounds for signal-noise separation, enabling extraction of meaningful eigenvalues and construction of orthogonal eigenportfolios from principal components.",
      "Engineered full-stack portfolio optimization suite including Max Sharpe, Minimum Variance, Risk Parity, Efficient Frontier, and Monte Carlo feasible set exploration.",
      "Developed rolling-window backtesting engine with configurable rebalance frequency, transaction costs, and evaluation via Sharpe, CAGR, drawdown, and alpha-beta metrics."
    ]
  },
  {
    title: "ArthGyan - Advanced Technical Analysis Dashboard",
    github: "https://github.com/sourishdey2005/ArthGyan.git",
    demo: "https://arthgyan-site.streamlit.app/",
    stack: ["Python", "Streamlit", "Pandas", "NumPy", "Plotly", "yfinance", "TA-Lib"],
    summary: "An advanced technical analysis and quantitative trading platform for Indian (NSE/BSE) and US markets, featuring multi-factor trading indicators and regime classification.",
    metrics: [
      { label: "Markets", value: "NSE/BSE & US" },
      { label: "Technical Indicators", value: "RSI, MACD, Bollinger, ATR" },
      { label: "Backtesting Engine", value: "Full Historical Simulation" }
    ],
    bulletPoints: [
      "Designed and deployed a full-featured financial analytics dashboard for real-time market data analysis, technical screening, and strategy prototyping.",
      "Integrated automated technical pattern recognition and multi-indicator signal generation across multiple timeframes.",
      "Implemented comprehensive backtesting metrics: win rate, profit factor, max drawdown, and risk-adjusted return ratios."
    ]
  }
];

const SimpleQuant: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="border-b border-slate-100 pb-4">
        <h2 className="text-2xl font-bold text-slate-900">Quantitative Finance & Algorithmic Systems</h2>
        <p className="text-sm text-slate-500 mt-1">
          Random Matrix Theory, portfolio optimization engines, rolling risk backtesting, and automated market microstructure indicators.
        </p>
      </div>

      <div className="space-y-5">
        {QUANT_ITEMS.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all duration-200"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
              <div>
                <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-2 py-0.5 rounded mb-1 inline-block">
                  Quantitative Engineering
                </span>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              </div>

              <div className="flex items-center gap-2">
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                  >
                    <Github size={14} /> GitHub
                  </a>
                )}
                {item.demo && (
                  <a
                    href={item.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 text-xs font-semibold text-white hover:bg-indigo-700 transition-colors"
                  >
                    Live Demo <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              {item.summary}
            </p>

            {/* Metrics cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
              {item.metrics.map((m, mIdx) => (
                <div key={mIdx} className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    {m.label}
                  </span>
                  <span className="text-xs font-bold text-slate-800">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Bullets */}
            <div className="space-y-1.5 mb-4">
              {item.bulletPoints.map((bp, bpIdx) => (
                <div key={bpIdx} className="text-xs text-slate-600 flex items-start gap-2">
                  <span className="text-indigo-500 font-bold">•</span>
                  <span>{bp}</span>
                </div>
              ))}
            </div>

            {/* Stack */}
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
              {item.stack.map(s => (
                <span key={s} className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded font-medium">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleQuant;
