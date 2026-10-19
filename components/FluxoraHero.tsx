import React, { useRef } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Download, Github, Linkedin, Mail, FileText, ShieldCheck, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const ResearchGateIcon: React.FC<{ size?: number; className?: string }> = ({ size = 15, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.5 3h-15A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3zm-8.7 13.9h-1.4v-6.3h1.4v6.3zm-0.7-7.1a0.9 0.9 0 1 1 0-1.8 0.9 0.9 0 0 1 0 1.8zm7.1 7.1h-1.3v-3.3c0-0.9-0.3-1.4-1.1-1.4-0.6 0-1 0.4-1.2 0.8-0.1 0.1-0.1 0.3-0.1 0.5v3.4h-1.3v-4.3c0-0.5 0-0.9-0.1-1.3h1.2l0.1 0.6h0.1c0.4-0.6 1.1-0.8 1.8-0.8 1.3 0 2 0.9 2 2.4v3.4z" />
  </svg>
);

interface FluxoraHeroProps {
  onOpenResume?: () => void;
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] }
  }
};

const EMBERS = [
  { left: '68%', top: '18%', size: 3, delay: 0, duration: 7 },
  { left: '76%', top: '42%', size: 2, delay: 1.4, duration: 9 },
  { left: '58%', top: '64%', size: 3, delay: 0.8, duration: 8 },
  { left: '88%', top: '30%', size: 2, delay: 2.1, duration: 10 },
  { left: '49%', top: '26%', size: 2, delay: 3.2, duration: 8.5 },
  { left: '81%', top: '72%', size: 3, delay: 1.9, duration: 7.5 },
  { left: '63%', top: '12%', size: 2, delay: 2.7, duration: 9.5 },
  { left: '92%', top: '58%', size: 2, delay: 0.4, duration: 8 },
];

const FluxoraHero: React.FC<FluxoraHeroProps> = ({ onOpenResume }) => {
  const heroRef = useRef<HTMLElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(pointerY, { stiffness: 120, damping: 20, mass: 0.7 });
  const rotateY = useSpring(pointerX, { stiffness: 120, damping: 20, mass: 0.7 });
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });

  const visualY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const visualScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 14);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * -14);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative overflow-hidden bg-[#050101] text-stone-100 pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 min-h-[100svh] flex flex-col justify-center scroll-mt-24"
    >
      {/* Ember atmosphere */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-18%] right-[-12%] w-[720px] h-[720px] rounded-full bg-[radial-gradient(circle,rgba(255,69,0,0.34),rgba(255,69,0,0.1)_45%,transparent_68%)] blur-2xl animate-ember-glow" />
        <div className="absolute bottom-[-30%] right-[6%] w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle,rgba(255,120,20,0.2),transparent_65%)] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_38%,rgba(255,80,0,0.16),transparent_55%)]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #ff8a1f 1px, transparent 0)',
            backgroundSize: '34px 34px'
          }}
        />
        {EMBERS.map((ember, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-[#ff7a1a]"
            style={{ left: ember.left, top: ember.top, width: ember.size, height: ember.size, boxShadow: '0 0 12px 3px rgba(255,90,0,0.55)' }}
            animate={{ y: [0, -46, 0], opacity: [0.15, 0.85, 0.15] }}
            transition={{ duration: ember.duration, delay: ember.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* Editorial column */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            style={{ y: textY }}
            className="lg:col-span-6 xl:col-span-6 relative z-20"
          >
            <h1
              className="font-display uppercase leading-[0.92] tracking-[0.01em] text-white text-[clamp(2.9rem,7.4vw,5.6rem)]"
            >
              {'SOURISH DEY'.split(' ').map((word, i, arr) => (
                <span
                  key={word}
                  className={`inline-block overflow-hidden align-top ${i < arr.length - 1 ? 'mr-[0.18em]' : ''}`}
                >
                  <motion.span
                    className="inline-block will-change-transform"
                    initial={{ y: '110%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 0.85, delay: 0.25 + i * 0.13, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-sm sm:text-[15px] leading-relaxed text-stone-300/90"
            >
              Computer Science undergraduate at KIIT engineering data science, machine learning,
              and quantitative systems — from high-frequency order-flow engines to Bayesian
              portfolio optimization, research patents, and distributed analytics pipelines.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[#ff4d00] hover:bg-[#ff6a1f] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-[0_10px_40px_-8px_rgba(255,77,0,0.7)] transition-all"
              >
                <span>View work</span>
                <span className="w-8 h-8 rounded-full bg-black/25 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight size={15} />
                </span>
              </a>
              <button
                type="button"
                onClick={() => (onOpenResume ? onOpenResume() : window.open(PERSONAL_INFO.resumeUrl, '_blank'))}
                className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/30 text-stone-200 text-xs sm:text-sm font-medium transition-all backdrop-blur-md cursor-pointer"
              >
                <span className="w-7 h-7 rounded-full border border-white/25 flex items-center justify-center group-hover:border-[#ff6a1f] transition-colors">
                  <Download size={12} className="text-[#ff8a3d]" />
                </span>
                <span className="uppercase tracking-wider">Resume</span>
              </button>
            </motion.div>

            <motion.div variants={item} className="mt-9 flex items-stretch gap-8 sm:gap-10">
              <div className="flex items-center gap-2.5">
                <FileText size={18} className="text-[#ff6a1f]" />
                <div>
                  <div className="font-display text-2xl sm:text-3xl text-white leading-none">5</div>
                  <div className="mt-1 font-condensed text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-stone-400">
                    Research papers
                  </div>
                </div>
              </div>
              <div className="w-px bg-white/10" />
              <div className="flex items-center gap-2.5">
                <ShieldCheck size={18} className="text-[#ff6a1f]" />
                <div>
                  <div className="font-display text-2xl sm:text-3xl text-white leading-none">5</div>
                  <div className="mt-1 font-condensed text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-stone-400">
                    Granted patents
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={item} className="mt-9 pt-5 border-t border-white/10 flex flex-wrap items-center gap-4">
              <span className="font-condensed text-[10px] uppercase tracking-[0.22em] text-stone-500">
                Find me on
              </span>
              <div className="flex items-center gap-2">
                {[
                  { href: PERSONAL_INFO.linkedin, icon: Linkedin, label: 'LinkedIn' },
                  { href: 'https://www.researchgate.net/profile/Sourish-Dey-3', icon: ResearchGateIcon, label: 'ResearchGate' },
                  { href: PERSONAL_INFO.github, icon: Github, label: 'GitHub' },
                  { href: `mailto:${PERSONAL_INFO.email}`, icon: Mail, label: 'Email' },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-full border border-white/15 bg-white/[0.03] flex items-center justify-center text-stone-300 hover:text-white hover:border-[#ff6a1f]/70 hover:bg-[#ff4d00]/10 transition-all"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Portrait + halo */}
          <motion.div
            style={{ y: visualY, scale: visualScale }}
            className="lg:col-span-6 relative flex items-end justify-center min-h-[26rem] sm:min-h-[34rem] lg:min-h-[38rem]"
            onPointerMove={handlePointerMove}
            onPointerLeave={resetPointer}
          >
            <div className="relative w-full max-w-[34rem] flex items-end justify-center mb-6 sm:mb-10 lg:mb-16">
              {/* Halo ring */}
              <div className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 w-[74%] sm:w-[68%] aspect-square" aria-hidden="true">
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,80,0,0.28),transparent_66%)] blur-2xl" />
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      'conic-gradient(from 180deg, rgba(255,61,0,0.15) 0deg, #ff3d00 70deg, #ffb347 140deg, #ff5a00 210deg, rgba(255,61,0,0.2) 300deg, rgba(255,61,0,0.15) 360deg)',
                    WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 13px), #000 calc(100% - 12px))',
                    mask: 'radial-gradient(farthest-side, transparent calc(100% - 13px), #000 calc(100% - 12px))',
                    filter: 'drop-shadow(0 0 26px rgba(255,80,0,0.65))'
                  }}
                />
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      'conic-gradient(from 200deg, transparent 0deg, rgba(255,150,60,0.8) 80deg, transparent 160deg)',
                    WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 7px), #000 calc(100% - 6px))',
                    mask: 'radial-gradient(farthest-side, transparent calc(100% - 7px), #000 calc(100% - 6px))',
                    filter: 'blur(1.5px)'
                  }}
                />
              </div>

              {/* Portrait */}
              <motion.div
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                className="relative z-10 w-[86%] sm:w-[80%] lg:w-[88%] will-change-transform"
              >
                <motion.img
                  src="/profile-cutout.png"
                  alt="Sourish Dey"
                  loading="eager"
                  initial={{ opacity: 0, y: 34, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 1.15, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-auto select-none pointer-events-none [filter:drop-shadow(0_24px_60px_rgba(0,0,0,0.85))_drop-shadow(0_0_28px_rgba(255,90,0,0.18))]"
                  style={{
                    maskImage: 'linear-gradient(to top, transparent 0%, rgba(0,0,0,0.35) 9%, #000 24%)',
                    WebkitMaskImage: 'linear-gradient(to top, transparent 0%, rgba(0,0,0,0.35) 9%, #000 24%)'
                  }}
                  draggable={false}
                />
              </motion.div>
            </div>

            {/* Vertical scroll cue */}
            <div className="hidden xl:flex absolute -right-2 top-1/2 -translate-y-1/2 flex-col items-center gap-3">
              <span className="font-condensed text-[10px] uppercase tracking-[0.4em] text-stone-500 [writing-mode:vertical-rl]">
                Scroll to explore
              </span>
              <span className="w-px h-16 bg-gradient-to-b from-[#ff5a00]/70 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#education"
        style={{ opacity: fade }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 hidden sm:flex items-center gap-2 font-condensed text-[10px] uppercase tracking-[0.3em] text-stone-500 hover:text-[#ff8a3d] transition-colors"
      >
        <ChevronDown size={13} className="text-[#ff6a1f]" />
        <span>Scroll</span>
      </motion.a>
    </section>
  );
};

export default FluxoraHero;
