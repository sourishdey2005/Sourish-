
import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Users, Code2, ExternalLink, Globe, Sparkles, Terminal, ShieldCheck } from 'lucide-react';

const OpenSource: React.FC = () => {
  const MotionDiv = motion.div as any;

  const images = [
    "https://res.cloudinary.com/dodhvvewu/image/upload/v1770041640/fb814544-8f23-47ff-a49a-30beaaa8bb9f_byf0qh.jpg",
    "https://res.cloudinary.com/dodhvvewu/image/upload/v1770041695/8f6a6de7-5376-49f0-ae3c-1e7f5dece56c_ahajum.jpg"
  ];

  return (
    <section id="opensource" className="py-32 bg-slate-50 dark:bg-slate-950 overflow-hidden relative border-t border-slate-100 dark:border-slate-800">
      {/* Dynamic Background Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Technical Narrative Pane */}
          <MotionDiv 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-10"
          >
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                <Sparkles size={14} className="text-emerald-500 animate-pulse" />
                <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.2em]">Contributor Status: Active 2025</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-heading font-bold text-slate-900 dark:text-white leading-[1.1]">
                Global Open Source<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-emerald-500">Impact Program</span>
              </h2>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                Thrilled to be selected as a <span className="text-slate-950 dark:text-white font-bold">Contributor for GirlScript Summer of Code 2025 (GSSoC'25)</span>. 
                This appointment involves orchestrating high-impact contributions to global repositories, focusing on architectural scalability, distributed engineering workflows, and real-world system optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <GitBranch size={20} />, label: "Git Orchestration", desc: "Distributed version control" },
                { icon: <Users size={20} />, label: "Global Collab", desc: "Cross-functional teams" },
                { icon: <Code2 size={20} />, label: "Refactor Engineering", desc: "Production optimization" },
                { icon: <ShieldCheck size={20} />, label: "OSS Security", desc: "Code integrity standards" }
              ].map((item, idx) => (
                <div key={idx} className="p-5 bg-white dark:bg-slate-900/40 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm group hover:border-emerald-500/30 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 rounded-2xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <span className="block text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">{item.label}</span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{item.desc}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="flex items-center gap-3 px-8 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:scale-105 transition-transform shadow-xl">
                <Globe size={18} /> Official Portal
              </button>
              <button className="flex items-center gap-3 px-8 py-5 border-2 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <ExternalLink size={18} /> Git Activity
              </button>
            </div>
          </MotionDiv>

          {/* Visual Gallery Pane - Side by Side, No Overlap */}
          <MotionDiv 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-[540px] grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {images.map((url, i) => (
              <div key={i} className="group/img relative rounded-[2.5rem] overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <img 
                  src={url} 
                  alt={`GSSoC 2025 verification ${i + 1}`} 
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover/img:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="flex items-center gap-2 text-white">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Verification Layer {i + 1}</span>
                  </div>
                </div>
              </div>
            ))}
          </MotionDiv>
          
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
