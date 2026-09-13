
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cloud, Brain, Activity, Database, GitBranch, Terminal, ShieldAlert, Zap, Compass, CheckCircle2 } from 'lucide-react';

const competencies = [
  { title: "Cloud Architecture", icon: Cloud, category: "Infrastructure", color: "from-blue-500 to-indigo-600" },
  { title: "MLOps Deployment", icon: GitBranch, category: "Pipelines", color: "from-purple-500 to-indigo-600" },
  { title: "AI/ML Implementation", icon: Brain, category: "Machine Learning", color: "from-rose-500 to-pink-600" },
  { title: "Predictive Analytics", icon: Activity, category: "Data Science", color: "from-amber-500 to-orange-600" },
  { title: "Zero Trust Security", icon: Shield, category: "Security", color: "from-emerald-500 to-teal-600" },
  { title: "Agile Collaboration", icon: Zap, category: "Leadership", color: "from-cyan-500 to-blue-600" },
  { title: "Data-Driven Decisions", icon: Database, category: "Analytics", color: "from-violet-500 to-purple-600" },
  { title: "Strategic Problem Solving", icon: Terminal, category: "Engineering", color: "from-indigo-500 to-blue-600" },
  { title: "Risk Mitigation", icon: ShieldAlert, category: "Cloud Governance", color: "from-red-500 to-rose-600" },
];

const highlights = [
  "B.Tech in Computer Science at KIIT University (Class of 2026)",
  "Specialized in End-to-End MLOps, CI/CD for Deep Learning & Zero Trust Architectures",
  "Author of multiple technical research papers and pending technology patents",
  "Proven leadership heading technical society chapters and mentoring 50+ students"
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 dark:bg-primary-950/50 border border-primary-200/80 dark:border-primary-800/60 text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Compass size={13} /> Identity & Competencies
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-slate-900 dark:text-white tracking-tight mb-4">
            Engineering Rigor Meets Applied AI
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Architecting robust cloud infrastructures and reproducible machine learning systems built for real-world reliability.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Bio Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-3 h-3 rounded-full bg-primary-500 animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
                  Core Engineering Philosophy
                </span>
              </div>
              <h3 className="text-2xl font-heading font-black text-slate-900 dark:text-white mb-4 leading-snug">
                Building Systems that Scale Silently & Accurately
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                Pursuing my B.Tech at KIIT University, I bridge theoretical AI and quantitative models with enterprise-grade cloud automation. I focus on creating zero-downtime deployment pipelines, resilient Kubernetes clusters, and auditable data science workflows.
              </p>

              {/* Highlights List */}
              <div className="space-y-3 pt-2">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="p-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-normal">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Metrics Badges */}
            <div className="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                <span className="block text-2xl font-black font-heading text-primary-600">3+</span>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Years Applied Focus</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                <span className="block text-2xl font-black font-heading text-cyan-600">10+</span>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Symposiums & Events</span>
              </div>
            </div>
          </motion.div>

          {/* Right Competency Cards Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {competencies.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative p-5 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 hover:border-primary-500/40 dark:hover:border-primary-500/40 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between overflow-hidden"
                >
                  {/* Subtle hover accent light */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary-500/5 rounded-full blur-xl group-hover:bg-primary-500/15 transition-all" />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${item.color} text-white shadow-md shadow-primary-500/10 group-hover:scale-110 transition-transform`}>
                        <Icon size={20} />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        {item.category}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-snug">
                      {item.title}
                    </h4>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Production-Ready
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

