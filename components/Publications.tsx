
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, FileText, ChevronDown, Calendar, ExternalLink, Cpu, Wind, Zap, Brain } from 'lucide-react';
import { PUBLICATIONS } from '../constants';

const Publications: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default first one open
  // Fix: Type casting to avoid motion prop errors
  const MotionDiv = motion.div as any;
  
  const researchPublications = PUBLICATIONS.filter(p => p.type === 'publication');

  const getIcon = (title: string) => {
    if (title.toLowerCase().includes('hypernova') || title.toLowerCase().includes('activation')) return <Brain className="text-purple-600" size={28} />;
    if (title.toLowerCase().includes('traffic')) return <Cpu className="text-primary-600" size={28} />;
    if (title.toLowerCase().includes('breathe') || title.toLowerCase().includes('air')) return <Wind className="text-blue-500" size={28} />;
    if (title.toLowerCase().includes('quantum') || title.toLowerCase().includes('fusion')) return <Zap className="text-amber-500" size={28} />;
    return <BookOpen className="text-primary-600" size={28} />;
  };

  return (
    <section id="publications" className="py-24 bg-slate-50 dark:bg-slate-900/30 overflow-hidden relative">
      <div className="absolute left-0 top-0 w-64 h-64 bg-primary-600/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-primary-600" />
            <h2 className="text-sm font-black text-primary-600 uppercase tracking-[0.4em]">Research Repository</h2>
            <span className="h-px w-8 bg-primary-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-6">Scientific Publications</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Contributing to the scientific community through rigorous research in IoT, Quantum Computing, and AI-driven Infrastructure.
          </p>
        </MotionDiv>

        <div className="space-y-6">
          {researchPublications.map((pub, idx) => (
            <MotionDiv
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group bg-white dark:bg-slate-800 rounded-[2rem] border transition-all duration-500 shadow-sm hover:shadow-xl ${
                openIndex === idx 
                  ? 'border-primary-500/30 dark:border-primary-400/20' 
                  : 'border-slate-100 dark:border-slate-700 hover:border-primary-200'
              } overflow-hidden`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-8 text-left focus:outline-none"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6 flex-1">
                  <div className={`p-5 rounded-[1.25rem] transition-all duration-500 ${
                    openIndex === idx 
                      ? 'bg-primary-600 text-white scale-110 shadow-lg shadow-primary-500/20' 
                      : 'bg-slate-50 dark:bg-slate-900 text-slate-400 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/10'
                  }`}>
                    {getIcon(pub.title)}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                       <span className="flex items-center gap-1.5 text-[10px] font-black text-primary-600 dark:text-primary-400 uppercase tracking-widest">
                        <Calendar size={12} /> {pub.date}
                       </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-tight mb-2 transition-colors group-hover:text-primary-600">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-slate-400 font-bold uppercase tracking-tight flex items-center gap-2">
                      {pub.journal}
                    </p>
                  </div>
                </div>
                
                <div className={`ml-4 p-3 rounded-full transition-all duration-300 ${openIndex === idx ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 rotate-180' : 'text-slate-300'}`}>
                  <ChevronDown size={24} />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <MotionDiv
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-10 pt-4 border-t border-slate-50 dark:border-slate-700/50">
                      <div className="max-w-3xl">
                        <h4 className="text-[10px] font-black text-primary-600 uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                          <FileText size={12} /> Detailed Abstract & Methodology
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-medium mb-8 whitespace-pre-wrap">
                          {pub.abstract}
                        </p>
                        
                        <div className="flex flex-wrap gap-4">
                          <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-black rounded-xl hover:scale-105 transition-transform shadow-lg">
                            <ExternalLink size={14} /> Full Manuscript
                          </button>
                        </div>
                      </div>
                    </div>
                  </MotionDiv>
                )}
              </AnimatePresence>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
