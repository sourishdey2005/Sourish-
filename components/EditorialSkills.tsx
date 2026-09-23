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
  Award, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Cpu,
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
    // Robust GSAP initialization check for React component mount & DOM layout stabilization
    let ctx: gsap.Context | null = null;
    let timer: NodeJS.Timeout | null = null;

    // Safety timeout to ensure DOM dimensions and parent containers have fully painted
    timer = setTimeout(() => {
      if (!triggerRef.current || !trackRef.current) return;

      ctx = gsap.context(() => {
        const track = trackRef.current;
        const trigger = triggerRef.current;
        if (!track || !trigger) return;

        // Calculate total scroll distance needed: track scroll width minus client visible width
        const getScrollDistance = () => {
          return track.scrollWidth - window.innerWidth;
        };

        const distance = getScrollDistance();

        // If on small viewport or if contents fit, provide graceful fallback
        if (distance > 40) {
          gsap.to(track, {
            x: () => -distance,
            ease: 'none',
            scrollTrigger: {
              trigger: trigger,
              pin: true,
              scrub: 1,
              start: 'top top',
              end: () => `+=${distance + 350}`,
              invalidateOnRefresh: true,
              anticipatePin: 1
            }
          });
        }
      }, triggerRef);

      // Force refresh scroll trigger to account for any deferred fonts/styles
      ScrollTrigger.refresh();
    }, 120);

    return () => {
      if (timer) clearTimeout(timer);
      if (ctx) ctx.revert();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === triggerRef.current) {
          st.kill();
        }
      });
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full">
      {/* 
        Sticky GSAP Horizontal Section 
        Locks vertical scroll and animates the gallery track horizontally
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
            className="flex items-stretch gap-6 pl-6 sm:pl-12 pr-12 will-change-transform"
          >
            {/* 1. Introductory Overview Card */}
            <div className="w-[320px] sm:w-[380px] shrink-0 p-7 rounded-2xl bg-gradient-to-br from-[#200800] to-[#120400] border border-orange-500/40 shadow-2xl shadow-black/80 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-orange-400 bg-orange-950/80 px-2.5 py-1 rounded-full border border-orange-500/30 inline-block mb-4">
                  Domain Stack Overview
                </span>
                <h3 className="text-2xl font-bold text-white leading-tight mb-3">
                  High-Impact Analytical &amp; Engineering Disciplines
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Specialized across mathematical computing, high-frequency anomaly detection, enterprise ETL automation, and grounded retrieval engines.
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-stone-400">Total Skill Domains:</span>
                  <span className="text-white font-bold">6 Key Disciplines</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-stone-400">Industry Certifications:</span>
                  <span className="text-emerald-400 font-bold">11 Accreditations</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-stone-400">Production Latency:</span>
                  <span className="text-orange-400 font-bold">40–45% Reduction</span>
                </div>
              </div>
            </div>

            {/* 2. Categorized Skill Cards */}
            {CATEGORIES.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.id}
                  className="w-[340px] sm:w-[420px] shrink-0 p-7 rounded-2xl bg-gradient-to-br from-[#180602] via-[#140401] to-[#0d0200] border border-orange-500/25 hover:border-orange-500/50 shadow-2xl shadow-black/80 transition-all duration-300 flex flex-col justify-between group hover:shadow-orange-950/40"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#ff3d00]/20 to-[#ff8a1f]/20 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:scale-105 transition-transform">
                          <Icon size={18} />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-orange-400 block font-semibold">
                            Module #{String(idx + 1).padStart(2, '0')}
                          </span>
                          <span className="text-xs font-mono text-stone-400">
                            {cat.badge}
                          </span>
                        </div>
                      </div>

                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-stone-300">
                        {cat.skills.length} competencies
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                      {cat.title}
                    </h4>

                    <p className="text-xs text-stone-300 leading-relaxed mb-5">
                      {cat.note}
                    </p>

                    {/* Skill Tags */}
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
