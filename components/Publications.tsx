
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, FileText, ChevronDown, Calendar, ExternalLink, Cpu, Wind, Zap, ShieldCheck, Droplets, Plane } from 'lucide-react';
import { PUBLICATIONS } from '../constants';

const Publications: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default first one open

  const getIcon = (title: string, type: string) => {
    if (type === 'patent') {
      if (title.toLowerCase().includes('drone') || title.toLowerCase().includes('agriculture')) return <Plane className="text-amber-500" size={28} />;
      if (title.toLowerCase().includes('underwater') || title.toLowerCase().includes('power')) return <Droplets className="text-blue-500" size={28} />;
      return <ShieldCheck className="text-amber-500" size={28} />;
    }
    if (title.toLowerCase().includes('traffic')) return <Cpu className="text-primary-600" size={28} />;
    if (title.toLowerCase().includes('breathe') || title.toLowerCase().includes('air')) return <Wind className="text-blue-500" size={28} />;
    if (title.toLowerCase().includes('quantum') || title.toLowerCase().includes('fusion')) return <Zap className="text-amber-500" size={28} />;
    return <BookOpen className="text-primary-600" size={28} />;
  };

  return (
    <section id="publications" className="py-24 bg-slate-50 dark:bg-slate-900/30 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute left-0 top-0 w-64 h-64 bg-primary-600/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-primary-600" />
            <h2 className="text-sm font-black text-primary-600 uppercase tracking-[0.4em]">Intellectual Property</h2>
            <span className="h-px w-8 bg-primary-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-6">Publications & Patents</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Contributing to scientific advancement and engineering innovation through peer-reviewed research and patented technologies.
          </p>
        </motion.div>

        <div className="space-y-6">
          {PUBLICATIONS.map((pub, idx) => (
            <motion.div
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
                      ? (pub.type === 'patent' ? 'bg-amber-500 text-white' : 'bg-primary-600 text-white') + ' scale-110 shadow-lg shadow-primary-500/20' 
                      : 'bg-slate-50 dark:bg-slate-900 text-slate-400 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/10'
                  }`}>
                    {getIcon(pub.title, pub.type)}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                       <span className={`flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest ${pub.type === 'patent' ? 'text-amber-600 dark:text-amber-400' : 'text-primary-600 dark:text-primary-400'}`}>
                        {pub.type === 'patent' ? <ShieldCheck size={12} /> : <Calendar size={12} />} {pub.date}
                       </span>
                       <span className={`px-2 py-0.5 text-[8px] font-black uppercase tracking-tighter rounded-md border ${
                         pub.type === 'patent' 
                          ? 'bg-amber-500/10 text-amber-600 border-amber-500/20' 
                          : 'bg-primary-500/10 text-primary-600 border-primary-500/20'
                       }`}>
                         {pub.type}
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
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-10 pt-4 border-t border-slate-50 dark:border-slate-700/50">
                      <div className="max-w-3xl">
                        <h4 className="text-[10px] font-black text-primary-600 uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                          <FileText size={12} /> {pub.type === 'patent' ? 'Patent Specification & Methodology' : 'Detailed Abstract & Methodology'}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-medium mb-8">
                          {pub.abstract}
                        </p>
                        
                        <div className="flex flex-wrap gap-4">
                          <button className={`flex items-center gap-2 px-6 py-3 text-white text-xs font-black rounded-xl hover:scale-105 transition-transform shadow-lg ${pub.type === 'patent' ? 'bg-amber-600' : 'bg-slate-900 dark:bg-white dark:text-slate-900'}`}>
                            <ExternalLink size={14} /> {pub.type === 'patent' ? 'View Patent File' : 'Full Manuscript'}
                          </button>
                          <button className="flex items-center gap-2 px-6 py-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-xs font-black rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                            {pub.type === 'patent' ? 'IP Documentation' : 'Cite Reference'}
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 p-8 bg-indigo-600 rounded-[2.5rem] text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -mr-20 -mt-20" />
          <h3 className="text-2xl font-bold mb-3 relative z-10">Research & IP Inquiries</h3>
          <p className="text-indigo-100 max-w-xl mx-auto mb-8 relative z-10">
            Interested in exploring technical licensing opportunities, joint ventures, or collaborative research initiatives based on these patents?
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-black rounded-2xl hover:bg-indigo-50 transition-colors relative z-10 shadow-xl">
             Inquire for Collaboration <ChevronDown size={18} className="-rotate-90" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
