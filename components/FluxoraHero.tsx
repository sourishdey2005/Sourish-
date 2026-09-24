import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Sparkles, Flame, Eye } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

interface FluxoraHeroProps {
  onOpenResume?: () => void;
}

// System Boot Cinematic Sequence Variants
const bootContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.08
    }
  }
};

const bootItemVariants = {
  hidden: { opacity: 0, y: 22, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const FluxoraHero: React.FC<FluxoraHeroProps> = ({ onOpenResume }) => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Advanced multi-layer scroll transforms
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.82]);

  // Background parallax layers
  const glow1Y = useTransform(scrollYProgress, [0, 1], [0, -130]);
  const glow1Scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const glow1Opacity = useTransform(scrollYProgress, [0, 0.9], [0.8, 0.25]);
  const glow2Y = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Left editorial column kinetic float
  const leftColumnY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const leftColumnOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.6]);

  // Right card depth parallax (floats up faster with subtle 3D tilt)
  const rightCardY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const rightCardRotate = useTransform(scrollYProgress, [0, 1], [0, -1.6]);
  const rightCardScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  return (
    <motion.section 
      ref={heroRef}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden bg-[#120400] text-stone-100 pt-32 sm:pt-40 pb-20 sm:pb-28 border-b border-orange-950/40 origin-center"
    >
      {/* Ambient Flame & Molten Orange Glow Overlays with Parallax */}
      <motion.div 
        style={{ y: glow1Y, scale: glow1Scale, opacity: glow1Opacity }}
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 right-[-10%] w-[650px] h-[650px] rounded-full bg-gradient-to-br from-[#ff3d00]/25 via-[#ff8a1f]/15 to-transparent blur-3xl" 
      />
      <motion.div 
        style={{ y: glow2Y }}
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-[-15%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#ff3d00]/15 via-[#ff7700]/10 to-transparent blur-3xl opacity-60" 
      />
      
      {/* Background Subtle Radial Grid Pattern with Scroll Drift */}
      <motion.div 
        style={{ y: gridY }}
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ff8a1f 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={bootContainerVariants}
        whileHover={{ 
          scale: 1.02, 
          boxShadow: "0 25px 60px -15px rgba(255, 61, 0, 0.25), 0 0 45px rgba(255, 61, 0, 0.12)" 
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={{ opacity: heroOpacity }}
        className="relative max-w-6xl mx-auto px-6 sm:px-8 origin-center rounded-3xl transition-shadow duration-500 cursor-default"
      >
        {/* Stage 01: System Status Initialization & Telemetry Eyebrow */}
        <motion.div 
          variants={bootItemVariants}
          className="flex items-center gap-3 mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/40 border border-orange-500/20 text-orange-200 text-xs font-mono backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff5500] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff3d00]"></span>
            </span>
            <span>SYSTEM TELEMETRY &bull; AI / QUANT / MLOPS &bull; ONLINE</span>
          </div>
          <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-orange-500/25 via-orange-500/10 to-transparent" />
          <span className="hidden md:inline-block text-[11px] font-mono tracking-widest uppercase text-stone-400">
            SOURISH DEY &bull; B.TECH CS KIIT
          </span>
        </motion.div>

        {/* Two-Column Grid: Fluxora Inspired Display Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: 4-Line Display Headline + Lede + Pill CTA + Social Proof Avatars */}
          <motion.div 
            style={{ y: leftColumnY, opacity: leftColumnOpacity }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* Stage 02: Identity Handshake & Subtitle */}
            <motion.div variants={bootItemVariants} className="space-y-2">
              <div className="text-xs sm:text-sm font-mono tracking-widest text-[#ff8a1f] font-semibold flex items-center gap-2 uppercase">
                <Flame size={14} className="text-[#ff3d00]" />
                <span>Sourish Dey — Portfolio &amp; Resume</span>
              </div>
              
              {/* Stage 03: Primary Display Headline with custom italic accent */}
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
            </motion.div>

            {/* Stage 04: Description & Quantitative Telemetry */}
            <motion.p 
              variants={bootItemVariants}
              className="text-base sm:text-lg text-stone-300 max-w-xl leading-relaxed font-normal"
            >
              Computer Science undergraduate at KIIT with research and project internship experience across Python, SQL, statistical modeling, and machine learning. Built scalable data pipelines and predictive models for datasets exceeding <strong className="text-white font-semibold">100K+ records</strong>, reducing research latency by <strong className="text-orange-300 font-semibold">40%</strong> across anomaly detection, time-series forecasting, and portfolio optimization.
            </motion.p>

            {/* Stage 05: Interface Readiness & Interactive CTAs */}
            <motion.div 
              variants={bootItemVariants}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
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
            </motion.div>

            {/* Stage 06: Institutional Markers & Verification */}
            <motion.div 
              variants={bootItemVariants}
              className="pt-2 sm:pt-4 flex flex-wrap items-center gap-4 border-t border-white/10"
            >
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
            </motion.div>
          </motion.div>

          {/* Stage 07: Visual Frame + Glass Stat Cards + Interactive Ghost Analytics Card with Depth Parallax */}
          <motion.div 
            variants={bootItemVariants}
            style={{ y: rightCardY, rotateZ: rightCardRotate, scale: rightCardScale }}
            className="lg:col-span-5 relative will-change-transform"
          >
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#120400]/60 via-transparent to-transparent pointer-events-none" />

                {/* Overlaid Pill Badges inside the viewport */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono text-stone-200 flex items-center gap-1.5">
                  <Sparkles size={11} className="text-[#ff8a1f]" />
                  <span>AI &bull; QUANT &bull; RESEARCH</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Kinetic Scroll Telemetry Progress Rail along base */}
      <motion.div 
        style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff3d00] to-[#ff8a1f] shadow-[0_0_8px_#ff3d00] opacity-80 pointer-events-none"
      />
    </motion.section>
  );
};

export default FluxoraHero;
