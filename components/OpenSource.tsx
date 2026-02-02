
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitBranch, Users, Code2, Sparkles, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

const OpenSource: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const MotionDiv = motion.div as any;

  const images = [
    "https://res.cloudinary.com/dodhvvewu/image/upload/v1770041640/fb814544-8f23-47ff-a49a-30beaaa8bb9f_byf0qh.jpg",
    "https://res.cloudinary.com/dodhvvewu/image/upload/v1770041695/8f6a6de7-5376-49f0-ae3c-1e7f5dece56c_ahajum.jpg"
  ];

  // Auto-swipe functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

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
          </MotionDiv>

          {/* Swiping Visual Gallery Pane */}
          <div className="w-full lg:w-[500px] relative">
            <div className="relative h-[600px] w-full rounded-[3rem] overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl bg-slate-900/10">
              <AnimatePresence mode="wait">
                <MotionDiv
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img 
                    src={images[currentIndex]} 
                    alt={`GSSoC 2025 verification ${currentIndex + 1}`} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-10">
                    <div className="flex items-center gap-2 text-white">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                      <span className="text-xs font-black uppercase tracking-[0.2em]">Verification Asset {currentIndex + 1}</span>
                    </div>
                  </div>
                </MotionDiv>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 pointer-events-none">
                <button 
                  onClick={prevSlide}
                  className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white pointer-events-auto transition-all border border-white/10"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextSlide}
                  className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white pointer-events-auto transition-all border border-white/10"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            {/* Pagination Indicators */}
            <div className="mt-8 flex justify-center gap-3">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === i ? 'w-12 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'w-3 bg-slate-200 dark:bg-slate-800'}`}
                />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
