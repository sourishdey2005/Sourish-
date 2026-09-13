
import React, { Suspense, useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ArrowRight, Binary, Cpu, Database, Sparkles, Terminal as TerminalIcon, Cloud, Layers, ShieldCheck } from 'lucide-react';
import BrainNetwork from './BrainNetwork';

const ROLES = [
  "Data Scientist & AI Researcher",
  "MLOps & Cloud Infrastructure Engineer",
  "Quantitative Systems Developer",
  "Zero Trust Cloud Architect"
];

const TECH_BADGES = [
  { name: "Kubernetes", color: "from-blue-500 to-indigo-500", icon: Cloud },
  { name: "MLOps", color: "from-purple-500 to-pink-500", icon: Layers },
  { name: "AWS Cloud", color: "from-amber-500 to-orange-500", icon: Database },
  { name: "Zero Trust", color: "from-emerald-500 to-teal-500", icon: ShieldCheck },
];

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  // Precompute deterministic particle properties to satisfy react purity rules
  const particles = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      x: `${(i * 19) % 95}%`,
      y: `${(i * 23) % 90}%`,
      duration: 18 + (i % 6) * 4,
      delay: i * 0.8,
      size: 28 + (i % 5) * 6,
      type: i % 4,
    }));
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* 3D Neural Network Background */}
      <Suspense fallback={null}>
        <BrainNetwork />
      </Suspense>

      {/* Floating Data Particles Background Layer (Pure and Deterministic) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-25 dark:opacity-35">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ y: "0%", opacity: 0.1 }}
            animate={{ 
              y: ["0%", "100%", "0%"],
              opacity: [0.1, 0.28, 0.1]
            }}
            transition={{ 
              duration: p.duration, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: p.delay
            }}
            style={{ left: p.x, top: p.y }}
            className="absolute text-primary-500/30 dark:text-primary-400/20 select-none"
          >
            {p.type === 0 ? <Binary size={p.size} /> : 
             p.type === 1 ? <Cpu size={p.size} /> : 
             p.type === 2 ? <Database size={p.size} /> :
             <span className="font-mono text-xl font-bold opacity-30">01</span>}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-left"
          >
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50/80 dark:bg-primary-950/50 border border-primary-200/80 dark:border-primary-800/60 shadow-sm backdrop-blur-md mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-bold tracking-wide text-primary-700 dark:text-primary-300">
                Available for Engineering & Research Roles
              </span>
              <TerminalIcon size={12} className="text-primary-500" />
            </div>

            {/* Main Greeting and Name */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-heading font-black tracking-tight text-slate-900 dark:text-white mb-4 leading-[1.1]">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                Sourish Dey
              </span>
            </h1>

            {/* Dynamic Animated Role Switcher */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="flex items-center gap-2 text-lg sm:text-2xl font-bold font-heading text-slate-700 dark:text-slate-300"
                >
                  <Sparkles size={18} className="text-cyan-400 flex-shrink-0 animate-pulse" />
                  <span>{ROLES[roleIndex]}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Concise Bio / Impact statement */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl font-normal">
              Engineering scalable cloud ecosystems, automated MLOps pipelines, and algorithmic trading systems. 
              Bridging mathematical rigor with enterprise-grade deployments across <span className="font-semibold text-slate-900 dark:text-slate-200">AWS, Kubernetes, Terraform, & PyTorch</span>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-7 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-primary-600 via-indigo-600 to-cyan-600 hover:from-primary-500 hover:to-cyan-500 rounded-2xl transition-all shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Initiate Contact</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a 
                href="https://drive.google.com/file/d/1yQQk4wJGgxMhe-zfMXijzPUuvV0PS29O/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-bold text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-primary-500/50 rounded-2xl transition-all backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 shadow-sm cursor-pointer"
              >
                <Download size={16} className="mr-2 text-primary-500" />
                <span>Curriculum Vitae</span>
              </a>
            </div>

            {/* Stats Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200/60 dark:border-slate-800/60">
              <div className="p-3 rounded-2xl bg-white/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-sm">
                <span className="block text-2xl font-black font-heading text-slate-900 dark:text-white">12+</span>
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Internships & Roles</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-sm">
                <span className="block text-2xl font-black font-heading text-primary-600 dark:text-primary-400">15+</span>
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Cloud & AI Projects</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-sm">
                <span className="block text-2xl font-black font-heading text-cyan-600 dark:text-cyan-400">50+</span>
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Engineers Mentored</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-sm">
                <span className="block text-2xl font-black font-heading text-emerald-600 dark:text-emerald-400">99.9%</span>
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Uptime Reliability</span>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Image Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96">
              {/* Luminous Outer Aura Ring */}
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-primary-600/30 via-cyan-500/20 to-indigo-600/30 blur-2xl animate-pulse-slow" />
              
              {/* Geometric Cyber Accent Borders */}
              <div className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-tr from-primary-500 to-cyan-400 opacity-30 dark:opacity-40" />

              {/* Card Container */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800/90 bg-slate-900">
                <img 
                  src="https://res.cloudinary.com/dodhvvewu/image/upload/v1768406215/31bf4861-6535-4127-b55d-b6be23cc4749_xxzvff.jpg" 
                  alt="Sourish Dey" 
                  className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-white flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-primary-400 font-bold uppercase tracking-wider block">Stationed In</span>
                    <span className="text-xs font-bold">Bhubaneswar, India</span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-primary-600/30 text-primary-300 border border-primary-500/30 font-semibold">
                    KIIT '26
                  </span>
                </div>
              </div>

              {/* Floating Tech Badges with Gentle Oscillations */}
              {TECH_BADGES.map((badge, idx) => {
                const Icon = badge.icon;
                const positions = [
                  "-top-4 -left-4",
                  "-top-4 -right-4",
                  "-bottom-4 -left-4",
                  "-bottom-4 -right-4",
                ];
                return (
                  <motion.div
                    key={badge.name}
                    animate={{ y: [0, (idx % 2 === 0 ? -6 : 6), 0] }}
                    transition={{ duration: 3.5 + idx * 0.5, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute ${positions[idx]} hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg border border-slate-200/80 dark:border-slate-800/80 text-xs font-bold text-slate-800 dark:text-slate-200`}
                  >
                    <div className={`p-1 rounded-lg bg-gradient-to-tr ${badge.color} text-white`}>
                      <Icon size={12} />
                    </div>
                    <span>{badge.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

