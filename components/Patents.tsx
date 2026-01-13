
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ChevronDown, Plane, Droplets, FileText, ExternalLink, Target, Lock } from 'lucide-react';
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
    <section id="patents" className="py-32 bg-white dark:bg-slate-950 overflow-hidden relative border-t border-slate-100 dark:border-slate-800">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-10 bg-amber-500" />
            <h2 className="text-sm font-black text-amber-500 uppercase tracking-[0.4em]">Proprietary IP</h2>
            <span className="h-px w-10 bg-amber-500" />
          </div>
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-slate-900 dark:text-white mb-8">Engineering Patents</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-xl leading-relaxed">
            Pioneering hardware and software frameworks filed for intellectual property protection in India, showcasing innovative energy and agricultural solutions.
          </p>
        </motion.div>

        <div className="space-y-8">
          {patentList.map((pub, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={`group bg-slate-50 dark:bg-slate-900/60 rounded-[3rem] border transition-all duration-500 shadow-sm hover:shadow-2xl ${
                openIndex === idx 
                  ? 'border-amber-500/40 bg-white dark:bg-slate-900' 
                  : 'border-slate-100 dark:border-slate-800 hover:border-amber-200'
              } overflow-hidden`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-10 text-left focus:outline-none"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-8 flex-1">
                  <div className={`p-6 rounded-[1.5rem] transition-all duration-500 ${
                    openIndex === idx 
                      ? 'bg-amber-500 text-white scale-110 shadow-xl shadow-amber-500/30' 
                      : 'bg-white dark:bg-slate-800 text-amber-500 group-hover:bg-amber-50 dark:group-hover:bg-amber-900/20'
                  }`}>
                    {getIcon(pub.title)}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                       <span className="flex items-center gap-2 text-[10px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-[0.2em]">
                        <Lock size={12} /> {pub.date}
                       </span>
                       <span className="px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-500 text-[9px] font-black uppercase tracking-widest rounded-full border border-amber-500/20">
                         OFFICIAL FILING
                       </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-tight mb-3 transition-colors group-hover:text-amber-600">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-wider flex items-center gap-2">
                      {pub.journal}
                    </p>
                  </div>
                </div>
                
                <div className={`ml-4 p-4 rounded-full transition-all duration-500 ${openIndex === idx ? 'bg-amber-50 dark:bg-amber-900/30 text-amber-600 rotate-180' : 'text-slate-300'}`}>
                  <ChevronDown size={28} />
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
                    <div className="px-10 pb-12 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-6">
                           <div className="w-1 h-10 bg-amber-500 rounded-full" />
                           <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
                             Technical Specification & Innovative Merit
                           </h4>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 text-xl leading-relaxed font-medium mb-10">
                          {pub.abstract}
                        </p>
                        
                        <div className="flex flex-wrap gap-5">
                          <button className="flex items-center gap-3 px-8 py-4 bg-amber-600 text-white text-sm font-black rounded-2xl hover:scale-[1.05] transition-transform shadow-xl shadow-amber-600/20">
                            <FileText size={18} /> Download Registry Copy
                          </button>
                          <button className="flex items-center gap-3 px-8 py-4 border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm font-black rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                            <ExternalLink size={18} /> Verify via IPI Portal
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
