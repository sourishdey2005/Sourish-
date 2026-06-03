import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  LineChart, 
  PieChart, 
  Github, 
  ExternalLink, 
  ChevronRight, 
  Activity, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  Database,
  BarChart4
} from 'lucide-react';

interface QuantProject {
  title: string;
  github: string;
  demo: string;
  stack: string[];
  color: string;
  domain: string;
  summary: string;
  metrics: { label: string; value: string }[];
  bulletPoints: string[];
}

const QUANT_PROJECTS: QuantProject[] = [
  {
    title: "EigenPortfolio Terminal — Quant Finance Platform",
    github: "https://github.com/sourishdey2005/EIGENPORTFOLIO-TERMINAL",
    demo: "https://eigenportfolio-terminal.streamlit.app/",
    stack: ["Python", "Streamlit", "NumPy", "Pandas", "Plotly"],
    color: "from-blue-600 to-indigo-600",
    domain: "Portfolio Engineering & Random Matrix Theory",
    summary: "Built a quantitative research and portfolio optimization platform leveraging Random Matrix Theory (RMT) for covariance denoising, alpha extraction, and robust portfolio construction across 120+ equities.",
    metrics: [
      { label: "Assets Supported", value: "120+ Equities" },
      { label: "Optimization Models", value: "Max Sharpe, Risk Parity, Min Var" },
      { label: "Visual Analytics", value: "80+ Plotly Views" }
    ],
    bulletPoints: [
      "Built a **quantitative research and portfolio optimization platform** leveraging **Random Matrix Theory (RMT)** for covariance denoising, alpha extraction, and robust portfolio construction across **120+ equities (S&P 500 / NIFTY 50)**.",
      "Executed **Marchenko–Pastur bounds** for signal-noise separation, enabling extraction of meaningful eigenvalues and construction of **orthogonal eigenportfolios** from principal components.",
      "Engineered full-stack **portfolio optimization suite** including Max Sharpe, Minimum Variance, Risk Parity, Efficient Frontier, and Monte Carlo feasible set exploration.",
      "Developed **rolling-window backtesting engine** with configurable rebalance frequency, transaction costs, and evaluation via Sharpe, CAGR, drawdown, and alpha-beta metrics.",
      "Analyzed market microstructure indicators including rolling volatility clustering, liquidity-sensitive drawdowns, correlation regimes, and risk-adjusted portfolio behavior across multiple market conditions.",
      "Experimented with AI-assisted market regime classification and transformer-inspired signal interpretation workflows for adaptive portfolio analytics and intelligent strategy monitoring.",
      "Developed **80+ advanced Plotly visualizations** including correlation heatmaps, eigenvalue spectra, 3D surfaces, portfolio clouds, and interactive equity curves.",
      "Integrated **modular architecture** (data, RMT engine, optimization, backtesting, visualization) with export pipelines (CSV/PDF/JSON) for reproducible research workflows."
    ]
  },
  {
    title: "ArthGyan - Advanced Technical Analysis Dashboard",
    github: "https://github.com/sourishdey2005/ArthGyan.git",
    demo: "https://arthgyan-site.streamlit.app/",
    stack: ["Python", "Streamlit", "Pandas", "NumPy", "Plotly", "yfinance", "TA-Lib"],
    color: "from-emerald-600 to-teal-500",
    domain: "Technical & Quantitative Trading Research",
    summary: "An advanced technical analysis and quantitative trading platform for Indian (NSE/BSE) and US markets, featuring multi-factor trading indicators and regime classification.",
    metrics: [
      { label: "Markets", value: "NSE/BSE & US" },
      { label: "Comparison Engine", value: "Up to 5 Stocks" },
      { label: "Regime Models", value: "Volatility & Momentum" }
    ],
    bulletPoints: [
      "Built an advanced technical analysis and quantitative trading dashboard for Indian (NSE/BSE) and US equity markets supporting multi-factor signal analysis and market regime evaluation.",
      "Implemented **multi-factor trading analytics** including momentum indicators (RSI, MACD, Stochastic), volatility models (ATR, Bollinger Bands), volume analytics (VWAP, OBV), and price action analysis for systematic trading research.",
      "Experimented with AI-assisted sentiment-aware analytics and adaptive market regime classification workflows for intelligent trading signal interpretation.",
      "Developed **multi-stock comparison engine** supporting up to 5 stocks simultaneously with cumulative returns correlation, correlation heatmaps, and rolling statistics for portfolio diversification analysis.",
      "Engineered advanced analytics features including market regime detection, drawdown analysis, seasonality analysis (monthly/quarterly/day-of-week effects), and returns distribution visualization via Q-Q plots.",
      "Deployed live with real-time data ingestion via Yahoo Finance API across 30+ Indian and US equities."
    ]
  },
  {
    title: "ArthaDrishti Portfolio Studio",
    github: "https://github.com/sourishdey2005/ArthaDrishti-Portfolio-Studio.git",
    demo: "https://arthadrishti-portfolio-studio.streamlit.app/",
    stack: ["Python", "Streamlit", "Pandas", "NumPy", "Plotly", "yfinance"],
    color: "from-violet-600 to-fuchsia-650",
    domain: "Asset Allocation & Decision Engineering",
    summary: "An interactive portfolio studio implementing the Black-Litterman model to combine market equilibrium with subjective investor views for robust portfolio weights.",
    metrics: [
      { label: "Asset Model", value: "Black-Litterman" },
      { label: "Integration", value: "Confidence Weighting" },
      { label: "Real-time Engine", value: "yfinance Ingestion" }
    ],
    bulletPoints: [
      "Developed an interactive portfolio optimization platform implementing the **Black-Litterman model** to combine market equilibrium with investor views for robust asset allocation.",
      "Engineered **investor view integration system** supporting absolute and relative views with confidence weighting, dynamically influencing posterior returns and portfolio weights.",
      "Built **mean-variance optimization and quantitative asset allocation pipelines** with efficient frontier computation, risk-return trade-off analysis, and portfolio constraint handling for diversified investment strategies.",
      "Performed statistical portfolio evaluation using rolling returns, drawdown analysis, Sharpe ratio benchmarking, and correlation stability metrics across varying market regimes.",
      "Developed advanced **financial analytics and visualization suite** including returns distribution, drawdown analysis, correlation heatmaps, and technical overlays (Donchian, Keltner channels).",
      "Integrated **real-time market data ingestion** via Yahoo Finance API for OHLCV data and market capitalization across multiple equities deployed a fully interactive **Streamlit web application** with exportable results (CSV) enabling reproducible quantitative analysis workflows."
    ]
  }
];

const QuantFinance: React.FC = () => {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const MotionDiv = motion.div as any;

  // Custom regex to render markdown bold text properly inside strings
  const renderTextWithBolds = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="text-slate-900 dark:text-white font-extrabold">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const activeProject = QUANT_PROJECTS[activeProjectIdx];

  return (
    <section id="quantfinance" className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/10 dark:to-slate-950 overflow-hidden relative border-b border-slate-100 dark:border-slate-800">
      {/* Decorative Matrix/Finance Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.05]" 
        style={{ 
          backgroundImage: `radial-gradient(#4f46e5 1.5px, transparent 1.5px)`,
          backgroundSize: '24px 24px',
        }} 
      />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <MotionDiv 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 dark:bg-primary-950/40 rounded-full border border-primary-100 dark:border-primary-900/30 text-primary-600 dark:text-primary-400 font-bold text-xs uppercase tracking-widest mb-4"
          >
            <TrendingUp size={14} /> Quant Finance Portfolio Engineering
          </MotionDiv>
          
          <MotionDiv
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
              Quant Finance Projects
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed font-normal">
              Empirical asset pricing, portfolios optimization, and advanced signal analytics. Bridging Modern Portfolio Theory (MPT) with advanced computing engines.
            </p>
          </MotionDiv>
        </div>

        {/* Dynamic Project Tabs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sidebar Project Selection list (4 columns wide) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {QUANT_PROJECTS.map((proj, idx) => {
              const isActive = idx === activeProjectIdx;
              const isEigen = proj.title.includes("EigenPortfolio");
              const isGyan = proj.title.includes("ArthGyan");
              const Icon = isEigen ? LineChart : isGyan ? BarChart4 : PieChart;
              
              return (
                <MotionDiv
                  key={proj.title}
                  onClick={() => setActiveProjectIdx(idx)}
                  whileHover={{ scale: 1.015 }}
                  className={`p-6 rounded-2xl border cursor-pointer transition-all flex items-start gap-4 text-left ${
                    isActive 
                      ? 'bg-white dark:bg-slate-900 border-primary-500/50 dark:border-primary-500/40 shadow-xl shadow-primary-500/5' 
                      : 'bg-white/50 hover:bg-white dark:bg-slate-900/30 dark:hover:bg-slate-900 border-slate-100 dark:border-slate-800'
                  }`}
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${proj.color} text-white flex-shrink-0`}>
                    <Icon size={20} />
                  </div>
                  <div className="flex-grow min-w-0">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1 block">
                      {proj.domain}
                    </span>
                    <h3 className="text-md font-bold text-slate-900 dark:text-white leading-snug line-clamp-2">
                      {proj.title}
                    </h3>
                  </div>
                  <ChevronRight 
                    size={18} 
                    className={`text-slate-300 dark:text-slate-700 mt-1 transition-transform ${isActive ? 'translate-x-1 text-primary-500' : ''}`} 
                  />
                </MotionDiv>
              );
            })}
          </div>

          {/* Detailed Content Pane (8 columns wide) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <MotionDiv
                key={activeProjectIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 sm:p-10 shadow-2xl relative overflow-hidden"
              >
                {/* Background soft color orb */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${activeProject.color} opacity-[0.03] blur-3xl rounded-full`} />

                {/* Badge and Title Panel */}
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 pb-6 border-b border-slate-100 dark:border-slate-800 mb-8">
                  <div>
                    <span className="text-primary-600 dark:text-primary-400 font-extrabold text-[10px] uppercase tracking-[0.25em] block mb-2">
                      {activeProject.domain}
                    </span>
                    <h3 className="text-3xl font-heading font-black text-slate-900 dark:text-white leading-tight">
                      {activeProject.title}
                    </h3>
                  </div>
                  
                  {/* Action Link Buttons */}
                  <div className="flex gap-3">
                    <a 
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-white rounded-xl transition-all shadow-sm"
                      title="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={activeProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl transition-all shadow-md shadow-primary-500/20 flex items-center justify-center"
                      title="Live Streamlit App"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* High-level summary */}
                <div className="mb-8">
                  <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed italic border-l-4 border-primary-500/30 pl-4 py-1">
                    {activeProject.summary}
                  </p>
                </div>

                {/* Structured metrics cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                  {activeProject.metrics.map((met, i) => (
                    <div key={i} className="p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col justify-center">
                      <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 dark:text-slate-500 mb-1 leading-none">
                        {met.label}
                      </span>
                      <span className="text-md sm:text-lg font-black text-slate-900 dark:text-white">
                        {met.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Achievements List */}
                <div>
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                    <Activity size={14} className="text-primary-500" /> SYSTEM ARCHITECTURE & CODE INVENTORY
                  </h4>
                  <div className="grid gap-4">
                    {activeProject.bulletPoints.map((bp, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-4 hover:bg-slate-50 dark:hover:bg-slate-850/40 rounded-2xl transition-all border border-transparent hover:border-slate-100 dark:hover:border-slate-800">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-600 dark:bg-primary-500 flex-shrink-0" />
                        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                          {renderTextWithBolds(bp)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech stack footer */}
                <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-800">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
                    STACK & ENGINE CONFIG
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {activeProject.stack.map(tech => (
                      <span 
                        key={tech} 
                        className="px-4 py-2 bg-slate-100 dark:bg-slate-800/60 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-black rounded-xl border border-slate-200/50 dark:border-slate-700/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </MotionDiv>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default QuantFinance;
