
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, FileText, ChevronDown } from 'lucide-react';
import { PUBLICATIONS } from '../constants';

const Publications: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="publications" className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-4">Publications & Patents</h2>
          <p className="text-slate-500 dark:text-slate-400">Academic contributions and intellectual property development.</p>
        </div>

        <div className="space-y-4">
          {PUBLICATIONS.map((pub, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl ${pub.type === 'patent' ? 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400' : 'bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400'}`}>
                    {pub.type === 'patent' ? <FileText size={24} /> : <BookOpen size={24} />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">{pub.title}</h3>
                    <p className="text-sm text-slate-500 font-medium mt-1">{pub.journal}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  className="text-slate-400"
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-slate-50 dark:border-slate-700/50">
                      <h4 className="text-xs font-bold text-primary-600 uppercase tracking-widest mb-2">Abstract / Overview</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {pub.abstract}
                      </p>
                      <button className="mt-4 text-xs font-bold text-slate-900 dark:text-white underline underline-offset-4 hover:text-primary-600 transition-colors">
                        View Document
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
