import React, { useState } from 'react';
import { Download, ArrowUpRight, Sparkles, Terminal, FileCode2, ShieldCheck, Flame, Compass, Eye } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

interface FluxoraHeroProps {
  onOpenResume?: () => void;
}

const FluxoraHero: React.FC<FluxoraHeroProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'metrics'>('overview');

  return (
    <section className="relative overflow-hidden bg-[#120400] text-stone-100 pt-32 sm:pt-40 pb-20 sm:pb-28 border-b border-orange-950/40">
      {/* Ambient Flame & Molten Orange Glow Overlays */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 right-[-10%] w-[650px] h-[650px] rounded-full bg-gradient-to-br from-[#ff3d00]/25 via-[#ff8a1f]/15 to-transparent blur-3xl opacity-80" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-[-15%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#ff3d00]/15 via-[#ff7700]/10 to-transparent blur-3xl opacity-60" 
      />
      
      {/* Background Subtle Radial Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ff8a1f 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        {/* Top Eyebrow: "Hub support..." over hairline rule with flame dot */}
        <div className="flex items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/40 border border-orange-500/20 text-orange-200 text-xs font-mono backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff5500] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff3d00]"></span>
            </span>
            <span>SYSTEM TELEMETRY &bull; AI / QUANT / MLOPS</span>
          </div>
          <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-orange-500/25 via-orange-500/10 to-transparent" />
          <span className="hidden md:inline-block text-[11px] font-mono tracking-widest uppercase text-stone-400">
            SOURISH DEY &bull; B.TECH CS KIIT
          </span>
        </div>

        {/* Two-Column Grid: Fluxora Inspired Display Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: 4-Line Display Headline + Lede + Pill CTA + Social Proof Avatars */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <div className="text-xs sm:text-sm font-mono tracking-widest text-[#ff8a1f] font-semibold flex items-center gap-2 uppercase">
                <Flame size={14} className="text-[#ff3d00]" />
                <span>Sourish Dey — Portfolio &amp; Resume</span>
              </div>
              
              {/* Display Headline with custom Instrument Serif italic accent for "Machines" */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
                <span>Technology</span><br />
                <span className="bg-gradient-to-r from-white via-stone-100 to-stone-400 bg-clip-text text-transparent">
                  Crafted for All
                </span><br />
                <span className="text-white">Not </span>
                <span className="font-serif italic font-normal text-[#ff8a1f] pr-1">
                  Machines
                </span>
                <span className="text-[#ff3d00]">.</span>
              </h1>
            </div>

            {/* Professional Lede (Grounded in Sourish Dey's exact experience & metrics) */}
            <p className="text-base sm:text-lg text-stone-300 max-w-xl leading-relaxed font-normal">
              Computer Science undergraduate at KIIT with research and project internship experience across Python, SQL, statistical modeling, and machine learning. Built scalable data pipelines and predictive models for datasets exceeding <strong className="text-white font-semibold">100K+ records</strong>, reducing research latency by <strong className="text-orange-300 font-semibold">40%</strong> across anomaly detection, time-series forecasting, and portfolio optimization.
            </p>

            {/* CTAs: Flame-gradient "Get Started" Pill CTA with Arrow Tile + Resume Button */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              {/* Flame-gradient primary pill CTA */}
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-3 pl-6 pr-2.5 py-2.5 rounded-full bg-gradient-to-r from-[#ff3d00] to-[#ff8a1f] text-white text-xs sm:text-sm font-semibold shadow-lg shadow-orange-950/60 hover:shadow-orange-700/40 hover:brightness-110 transition-all cursor-pointer"
              >
                <span>Explore Selected Work</span>
                <span className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight size={16} />
                </span>
              </a>

              {/* Glass Resume Pill with Preview Modal trigger & direct fallback */}
              <button
                type="button"
                onClick={() => onOpenResume ? onOpenResume() : window.open(PERSONAL_INFO.resumeUrl, '_blank')}
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 hover:bg-orange-500/10 border border-white/10 hover:border-orange-500/40 text-stone-200 text-xs sm:text-sm font-medium hover:text-white transition-all backdrop-blur-md cursor-pointer shadow-xs hover:shadow-orange-900/30"
              >
                <Eye size={14} className="text-orange-400 group-hover:scale-110 transition-transform" />
                <span>View &bull; Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-stone-400 hover:text-white transition-colors"
              >
                <span>Let's connect</span>
                <span>&rarr;</span>
              </a>
            </div>

            {/* Trust Banner: Overlapping Tinted Avatar Dots + Metrics */}
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-4 border-t border-white/10">
              <div className="flex -space-x-2 overflow-hidden">
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#120400] bg-gradient-to-tr from-[#ff3d00] to-[#ff8a1f] flex items-center justify-center text-[10px] font-bold text-white shadow-xs">
                  KIIT
                </div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#120400] bg-gradient-to-tr from-amber-600 to-orange-400 flex items-center justify-center text-[10px] font-bold text-white shadow-xs">
                  IISER
                </div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#120400] bg-gradient-to-tr from-orange-700 to-rose-500 flex items-center justify-center text-[10px] font-bold text-white shadow-xs">
                  AWS
                </div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#120400] bg-gradient-to-tr from-stone-800 to-stone-600 flex items-center justify-center text-[10px] font-bold text-orange-200 shadow-xs">
                  GCP
                </div>
              </div>

              <div className="text-xs text-stone-300">
                <span className="font-semibold text-white block">100K+ Data Points Analyzed</span>
                <span className="text-stone-400 text-[11px] font-mono">4+ Publications &bull; 3 Granted Patents &bull; 40% Latency Drop</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Frame + Glass Stat Cards + Interactive Ghost Analytics Card */}
          <div className="lg:col-span-5 relative">
            {/* Visual Glass Frame for Sourish Dey */}
            <div className="relative rounded-3xl border border-orange-500/20 bg-gradient-to-b from-stone-900/80 to-[#1b0800]/90 p-3 sm:p-4 backdrop-blur-xl shadow-2xl shadow-orange-950/50">
              {/* Telemetry Header */}
              <div className="flex items-center justify-between px-3 py-2 text-[10px] font-mono text-stone-400 border-b border-white/5 mb-3">
                <span className="flex items-center gap-1.5 text-orange-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  SOURISH_DEY &bull; B.TECH CS
                </span>
                <span className="text-stone-500">2023 – 2027</span>
              </div>

              {/* Photo Viewport Container */}
              <div className="relative aspect-4/5 rounded-2xl overflow-hidden bg-black/40 border border-white/10 group">
                <img
                  src="https://res.cloudinary.com/dodhvvewu/image/upload/v1768406215/31bf4861-6535-4127-b55d-b6be23cc4749_xxzvff.jpg"
                  alt="Sourish Dey"
                  className="w-full h-full object-cover object-center filter contrast-105 transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Cyber/Ember Overlay Gradient at base */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#120400] via-transparent to-transparent opacity-80" />

                {/* Overlaid Pill Badges inside the viewport */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono text-stone-200 flex items-center gap-1.5">
                  <Sparkles size={11} className="text-[#ff8a1f]" />
                  <span>AI &bull; QUANT &bull; RESEARCH</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-orange-500/20 text-xs">
                  <div className="flex justify-between items-center text-[10px] font-mono text-orange-300 mb-1">
                    <span>PORTFOLIO DOMAIN</span>
                    <span>ONLINE &bull; BHUBANESWAR</span>
                  </div>
                  <div className="font-semibold text-white truncate">
                    Intelligent Data Systems &amp; High-Throughput Pipelines
                  </div>
                </div>
              </div>

              {/* Two Floating Glass Stat Cards below image (Fluxora style) */}
              <div className="grid grid-cols-2 gap-2.5 mt-3">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <div className="text-xl sm:text-2xl font-mono font-extrabold text-white">
                    100K+
                  </div>
                  <div className="text-[11px] font-medium text-stone-400 mt-0.5">
                    Records Analyzed
                  </div>
                  <div className="text-[10px] font-mono text-orange-400 mt-1">
                    &uarr; 40% pipeline speed
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <div className="text-xl sm:text-2xl font-mono font-extrabold text-white">
                    98.0%
                  </div>
                  <div className="text-[11px] font-medium text-stone-400 mt-0.5">
                    Secondary Merit / 94% Model Acc
                  </div>
                  <div className="text-[10px] font-mono text-emerald-400 mt-1">
                    &bull; IISER Research
                  </div>
                </div>
              </div>
            </div>

            {/* Ghost Analytics Panel for wide viewports (≥1120px) — Fluxora signature */}
            <div className="hidden xl:block absolute -right-16 -bottom-8 w-64 p-3.5 rounded-2xl bg-black/80 border border-orange-500/30 backdrop-blur-xl shadow-2xl text-xs font-mono text-stone-300">
              <div className="flex items-center justify-between text-[10px] text-stone-400 pb-2 border-b border-white/10 mb-2">
                <span className="flex items-center gap-1.5 text-orange-400">
                  <Terminal size={11} />
                  <span>METRICS_KERNEL</span>
                </span>
                <span className="text-emerald-400">ACTIVE</span>
              </div>
              <div className="space-y-1.5 text-[11px]">
                <div className="flex justify-between">
                  <span className="text-stone-400">Patents Granted:</span>
                  <span className="text-white font-semibold">3 Filed/Granted</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Publications:</span>
                  <span className="text-white font-semibold">4 Peer-Reviewed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Latency Cut:</span>
                  <span className="text-orange-300 font-semibold">-40% Query Time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FluxoraHero;
