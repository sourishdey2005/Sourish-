
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ChevronDown, Plane, Droplets, FileText, ExternalLink, Target } from 'lucide-react';
import { PUBLICATIONS } from '../constants';

const Patents: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const patentList = PUBLICATIONS.filter(p => p.type === 'patent');

  const getIcon = (title: string) => {
    if (title.toLowerCase().includes('drone') || title.toLowerCase().includes('agriculture')) return <Plane size={28} />;
    if (title.toLowerCase().includes('underwater') || title.toLowerCase().includes('power')) return <Droplets size={28} />;
    return <ShieldCheck size={28} />;
  };

  return (
    <section id="patents" className="py-24 bg-white dark:bg-slate-950 overflow-hidden relative border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-amber-500" />
            <h2 className="text-sm font-black text-amber-500 uppercase tracking-[0.4em]">Intellectual Property</h2>
            <span className="h-px w-8 bg-amber-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-6">Patented Technologies</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Engineering innovations filed for institutional patents, bridging advanced AI research with tangible mechanical and electrical systems.
          </p>
        </motion.div>

        <div className="space-y-6">
          {patentList.map((pub, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group bg-slate-50 dark:bg-slate-900 rounded-[2rem] border transition-all duration-500 shadow-sm hover:shadow-xl ${
                openIndex === idx 
                  ? 'border-amber-500/30 dark:border-amber-400/20' 
                  : 'border-slate-100 dark:border-slate-800 hover:border-amber-200'
              } overflow-hidden`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-8 text-left focus:outline-none"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6 flex-1">
                  <div className={`p-5 rounded-[1.25rem] transition-all duration-500 ${
                    openIndex === idx 
                      ? 'bg-amber-500 text-white scale-110 shadow-lg shadow-amber-500/20' 
                      : 'bg-white dark:bg-slate-800 text-slate-400 group-hover:bg-amber-50 dark:group-hover:bg-amber-900/10'
                  }`}>
                    {getIcon(pub.title)}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                       <span className="flex items-center gap-1.5 text-[10px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-widest">
                        <ShieldCheck size={12} /> {pub.date}
                       </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-tight mb-2 transition-colors group-hover:text-amber-600">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-slate-400 font-bold uppercase tracking-tight flex items-center gap-2">
                      {pub.journal}
                    </p>
                  </div>
                </div>
                
                <div className={`ml-4 p-3 rounded-full transition-all duration-300 ${openIndex === idx ? 'bg-amber-50 dark:bg-amber-900/30 text-amber-600 rotate-180' : 'text-slate-300'}`}>
                  <ChevronDown size={24} />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-10 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <div className="max-w-3xl">
                        <h4 className="text-[10px] font-black text-amber-600 uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                          <Target size={12} /> Patent Specification & Methodology
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-medium mb-8">
                          {pub.abstract}
                        </p>
                        
                        <div className="flex flex-wrap gap-4">
                          <button className="flex items-center gap-2 px-6 py-3 bg-amber-600 text-white text-xs font-black rounded-xl hover:scale-105 transition-transform shadow-lg">
                            <FileText size={14} /> View Patent Documentation
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Patents;
