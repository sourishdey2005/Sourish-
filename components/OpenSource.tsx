
import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Users, Code2, ExternalLink, Globe, Sparkles, Terminal } from 'lucide-react';

const OpenSource: React.FC = () => {
  const MotionDiv = motion.div as any;

  const images = [
    "https://res.cloudinary.com/dodhvvewu/image/upload/v1770041640/fb814544-8f23-47ff-a49a-30beaaa8bb9f_byf0qh.jpg",
    "https://res.cloudinary.com/dodhvvewu/image/upload/v1770041695/8f6a6de7-5376-49f0-ae3c-1e7f5dece56c_ahajum.jpg"
  ];

  return (
    <section id="opensource" className="py-24 bg-slate-50 dark:bg-slate-900/20 overflow-hidden relative border-t border-slate-100 dark:border-slate-800">
      {/* Abstract Background Decor */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center gap-16"
        >
          {/* Left Column: Narrative */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Active Contributor 2025</span>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white leading-tight">
                Global Open Source <br />
                <span className="text-primary-600">Impact Program</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                Thrilled to be selected as a Contributor for <span className="text-slate-900 dark:text-white font-bold">GirlScript Summer of Code 2025 (GSSoC'25)</span>. 
                This appointment involves orchestrating high-impact contributions to global repositories, focusing on architectural scalability and distributed engineering workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <GitBranch size={18} />, label: "Real-world Collaboration" },
                { icon: <Users size={18} />, label: "Inclusive Learning Ecosystem" },
                { icon: <Code2 size={18} />, label: "Production-grade Optimization" },
                { icon: <Terminal size={18} />, label: "Impactful Development" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm group hover:border-primary-500/30 transition-all">
                  <div className="p-2 bg-primary-50 dark:bg-primary-900/30 text-primary-600 rounded-lg group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-xs font-black text-slate-500 dark:text-slate-300 uppercase tracking-tight">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-sm uppercase tracking-widest rounded-2xl hover:scale-105 transition-transform shadow-xl">
                <Globe size={18} /> GSSoC Program Portal
              </button>
              <button className="flex items-center gap-3 px-8 py-4 border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <ExternalLink size={18} /> View GitHub Activity
              </button>
            </div>
          </div>

          {/* Right Column: Visual Panel */}
          <div className="w-full lg:w-[450px] shrink-0">
            <div className="relative group">
              {/* Background Glow */}
              <div className="absolute -inset-4 bg-primary-600/10 blur-3xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative space-y-6">
                {/* Main Selection Image */}
                <MotionDiv 
                  whileHover={{ y: -10, rotate: -2 }}
                  className="relative h-[320px] rounded-[2.5rem] overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl z-20"
                >
                  <img 
                    src={images[0]} 
                    alt="GSSoC selection" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
                    <div className="flex items-center gap-3 text-white">
                      <Sparkles size={20} className="text-amber-400" />
                      <span className="font-bold text-sm tracking-widest uppercase">GSSoC'25 Contributor</span>
                    </div>
                  </div>
                </MotionDiv>

                {/* Secondary Image Overlap */}
                <MotionDiv 
                  whileHover={{ x: 10, rotate: 2 }}
                  className="absolute -bottom-12 -right-6 w-56 h-72 rounded-[2rem] overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl z-30 hidden sm:block"
                >
                  <img 
                    src={images[1]} 
                    alt="Selection Certificate" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors" />
                </MotionDiv>

                {/* Mobile version of second image */}
                <div className="sm:hidden h-[280px] rounded-[2rem] overflow-hidden border-2 border-slate-100 dark:border-slate-800">
                   <img 
                    src={images[1]} 
                    alt="Selection Certificate" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default OpenSource;
