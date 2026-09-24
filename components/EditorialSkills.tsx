import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Database, 
  Brain, 
  Sparkles, 
  Terminal, 
  Code2, 
  Server, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Flame
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface SkillCategory {
  id: string;
  title: string;
  badge: string;
  skills: string[];
  note: string;
  icon: typeof Database;
  highlight: string;
}

const CATEGORIES: SkillCategory[] = [
  {
    id: 'core-languages',
    title: 'Programming & Databases',
    badge: 'Core Code',
    skills: ['Python', 'SQL', 'R', 'C', 'JavaScript', 'HTML5', 'Tailwind CSS', 'React'],
    note: 'Vectorized mathematical computing, relational database design, high-frequency scripts',
    icon: Code2,
    highlight: 'Production Python & SQL pipelines'
  },
  {
    id: 'data-science',
    title: 'Data Science & Machine Learning',
    badge: 'Algorithms',
    skills: [
      'Supervised Learning', 
      'Unsupervised Learning', 
      'Time-Series Forecasting', 
      'Feature Engineering', 
      'EDA & Diagnostics', 
      'Predictive Modeling', 
      'Model Evaluation'
    ],
    note: 'Random Matrix Theory, stationarity analysis (ADF/KPSS), anomaly detection, statistical tests',
    icon: Brain,
    highlight: '94% IoT Anomaly Detection Accuracy'
  },
  {
    id: 'py-ecosystem',
    title: 'Python Libraries & Frameworks',
    badge: 'Ecosystem',
    skills: ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Statsmodels', 'Plotly', 'Matplotlib', 'Seaborn', 'Streamlit'],
    note: 'Data pipelines, scientific computing, regression/classification, interactive analytical dashboards',
    icon: Database,
    highlight: 'High-Throughput Vectorized Processing'
  },
  {
    id: 'gen-ai',
    title: 'Generative AI & LLM Systems',
    badge: 'Applied AI',
    skills: [
      'Retrieval-Augmented Generation (RAG)', 
      'LangChain', 
      'Vector Databases (FAISS, ChromaDB)', 
      'Fine-Tuning (LoRA, QLoRA)', 
      'Prompt Engineering'
    ],
    note: 'Zero-hallucination domain knowledge grounding, sub-second vector search inferencing',
    icon: Sparkles,
    highlight: '< 800ms Financial RAG Query Latency'
  },
  {
    id: 'data-eng',
    title: 'Data Engineering & BI Tools',
    badge: 'Pipelines',
    skills: ['ETL Pipeline Development', 'Data Modeling', 'Data Validation Rules', 'Power BI', 'Excel & Power Query'],
    note: 'Scalable processing of 100K+ records, automated Power Query workflows, saving 3+ engineering hours weekly',
    icon: Server,
    highlight: '100K+ Records Handled, 35% Effort Cut'
  },
  {
    id: 'devops-cloud',
    title: 'Business Analysis, QA & DevOps',
    badge: 'Infrastructure',
    skills: [
      'Requirements Gathering & Mapping', 
      'KPI & Trend Analysis', 
      'Functional & Integration Testing', 
      'SDLC', 
      'Git', 
      'GitHub Actions', 
      'Docker', 
      'CI/CD Pipelines', 
      'AWS', 
      'Google Cloud (GCP)', 
      'Oracle Cloud (OCI)'
    ],
    note: 'Agile/Scrum, containerization, multi-cloud automated deployment pipelines',
    icon: Terminal,
    highlight: 'Automated CI/CD & Multi-Cloud Ops'
  }
];

const RESUME_CERTS = [
  "IBM Data Science Professional",
  "IBM Data Analytics",
  "IBM Business Analyst",
  "DeepLearning.AI (Neural Networks, Hyperparameter Tuning)",
  "TensorFlow Deep Learning",
  "MathWorks Image Processing",
  "ZTCA Certified",
  "Google Cloud Fundamentals",
  "Oracle Cloud Infrastructure Data Science & Cloud",
  "FreeCodeCamp: Machine Learning with Python",
  "FreeCodeCamp: Data Analysis with Python"
];

const EditorialSkills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    let ctx: gsap.Context | null = null;
    let timer: NodeJS.Timeout | null = null;

    // Small delay ensures DOM renders, fonts load, and dimensions are fully established
    timer = setTimeout(() => {
      if (!triggerRef.current || !trackRef.current) return;

      ctx = gsap.context(() => {
        const track = trackRef.current;
        const trigger = triggerRef.current;
        if (!track || !trigger) return;

        // Dynamic horizontal scroll calculation
        const getDistance = () => track.scrollWidth - window.innerWidth;

        gsap.to(track, {
          x: () => -getDistance(),
          ease: 'none',
          scrollTrigger: {
            id: 'skills-horizontal-scroll',
            trigger: trigger,
            pin: true,
            scrub: 1,
            start: 'top top',
            end: () => `+=${Math.max(getDistance(), 600)}`,
            invalidateOnRefresh: true,
            anticipatePin: 1
          }
        });
      }, triggerRef);

      // Force a calculation refresh across all active ScrollTriggers
      ScrollTrigger.refresh();
    }, 150);

    const onResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', onResize);

    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener('resize', onResize);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full">
      {/* 
        Sticky GSAP Horizontal Section:
        Vertical scroll is locked, translating the track horizontally to showcase skills & certifications
      */}
      <div 
        ref={triggerRef} 
        className="relative h-screen w-full overflow-hidden flex flex-col justify-center bg-[#0d0300] border-y border-orange-950/60"
      >
        {/* Top Sticky Header inside pinned canvas */}
        <div className="max-w-7xl w-full mx-auto px-6 sm:px-10 pt-8 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#ff3d00] animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-orange-400">
                07 &bull; INTERACTIVE COMPETENCY GALLERY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
              <span>Technical Skills &amp; Certifications</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-xl">
              Scroll down to travel through core programming, ML architectures, LLM systems, and industry accreditations.
            </p>
          </div>

          {/* Horizontal Scroll Progress Prompt */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-stone-400 backdrop-blur-md self-start sm:self-auto">
            <span>Scroll vertically to pan</span>
            <ArrowRight size={13} className="text-orange-400 animate-bounce-x" />
          </div>
        </div>

        {/* Horizontal Track Container */}
        <div className="relative flex-1 flex items-center overflow-visible py-4">
          <div 
            ref={trackRef} 
            className="flex items-stretch gap-6 pl-6 sm:pl-12 pr-16 w-max will-change-transform"
          >
            {/* 1. Introductory Overview Card */}
            <div className="w-[320px] sm:w-[380px] shrink-0 p-7 rounded-2xl bg-gradient-to-br from-[#200800] to-[#120400] border border-orange-500/40 shadow-2xl shadow-black/80 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-orange-400 bg-orange-950/80 px-2.5 py-1 rounded-full border border-orange-500/30 inline-block mb-4">
                  COMPREHENSIVE CAPABILITIES
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-3">
                  Production Engineering Stack
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  Engineered across quantitative finance, large-scale statistical pipelines, deep learning vision models, zero-hallucination RAG frameworks, and distributed enterprise CI/CD.
                </p>

                <div className="mt-6 pt-5 border-t border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    <span>Python &bull; SQL &bull; R &bull; C</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    <span>FAISS &bull; LangChain &bull; LoRA</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    <span>AWS &bull; GCP &bull; Oracle &bull; Docker</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-stone-400">
                <span>6 Core Disciplines</span>
                <span className="text-orange-400 font-semibold flex items-center gap-1">
                  Pan Right <ArrowRight size={12} />
                </span>
              </div>
            </div>

            {/* 2. Six Detailed Skill Domain Cards */}
            {CATEGORIES.map((cat, idx) => {
              const Icon = cat.icon;

              return (
                <div 
                  key={cat.id}
                  className="w-[340px] sm:w-[420px] shrink-0 p-7 rounded-2xl bg-[#140501] border border-white/10 hover:border-orange-500/40 shadow-xl shadow-black/80 flex flex-col justify-between group transition-all duration-300"
                >
                  <div>
                    {/* Card Header */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-105 transition-transform">
                        <Icon size={20} />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-stone-300 border border-white/10">
                          {cat.badge}
                        </span>
                        <span className="text-xs font-mono text-stone-400">
                          0{idx + 1}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-stone-400 leading-relaxed mb-5">
                      {cat.note}
                    </p>

                    {/* Skill Pill Grid */}
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-black/50 text-stone-200 border border-white/10 group-hover:border-orange-500/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlight Footer */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-stone-400">Benchmark:</span>
                    <span className="text-orange-300 font-semibold flex items-center gap-1">
                      <Flame size={12} className="text-[#ff3d00]" />
                      {cat.highlight}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* 3. Industry Certifications Card (End of horizontal gallery) */}
            <div className="w-[380px] sm:w-[480px] shrink-0 p-7 rounded-2xl bg-gradient-to-br from-[#1f0902] via-[#170601] to-[#100300] border border-orange-500/35 shadow-2xl shadow-black/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold block">
                      VERIFIED ACCREDITATIONS
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold text-white">
                      Industry Certifications
                    </h4>
                  </div>
                </div>

                <p className="text-xs text-stone-400 mb-4">
                  Rigorous external professional certificates across IBM, DeepLearning.AI, Google Cloud, Oracle Cloud, and TensorFlow.
                </p>

                <div className="grid grid-cols-1 gap-2 max-h-[320px] overflow-y-auto pr-1">
                  {RESUME_CERTS.map((cert, cIdx) => (
                    <div
                      key={cIdx}
                      className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/5 text-xs font-mono text-stone-200 hover:border-orange-500/30 transition-colors"
                    >
                      <CheckCircle2 size={12} className="text-emerald-400 shrink-0" />
                      <span className="truncate">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-stone-400">
                <span>All credentials up-to-date</span>
                <span className="text-orange-400 font-semibold">&bull; 2024–2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Status bar */}
        <div className="px-6 sm:px-10 py-3 bg-black/40 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-stone-400 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-orange-400 font-bold">Skills Gallery</span>
            <span>&bull;</span>
            <span>Python, SQL, RAG, Scikit-learn, Docker, CI/CD, Microgrid Diagnostics</span>
          </div>
          <div className="hidden sm:block text-stone-400">
            End of Skills Showcase &rarr;
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorialSkills;
