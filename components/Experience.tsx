
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">Professional Journey</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            A chronological timeline of my internships, research initiatives, and technical leadership roles.
          </p>
          <div className="w-24 h-1.5 bg-primary-600 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="relative">
          {/* Central Vertical Line for Desktop */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-slate-100 dark:bg-slate-800" />

          <div className="space-y-16 relative">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Marker */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-600 border-4 border-white dark:border-slate-950 z-10 shadow-lg shadow-primary-500/20" />

                {/* Content Side */}
                <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className={`bg-slate-50 dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-primary-200 dark:hover:border-primary-900/50 transition-all duration-500 group hover:shadow-2xl hover:shadow-primary-500/5 ${index % 2 === 0 ? 'text-left' : 'md:text-right text-left'}`}>
                    
                    <div className={`flex flex-col mb-4 ${index % 2 === 0 ? '' : 'md:items-end'}`}>
                      <div className="flex items-center gap-2 text-primary-600 font-bold text-sm mb-2 uppercase tracking-widest">
                        <Calendar size={14} />
                        {exp.duration}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-primary-600 font-bold text-lg mb-2">
                        {exp.company}
                      </p>
                      <div className="flex items-center gap-2 text-slate-400 font-medium text-xs uppercase tracking-tighter">
                        <MapPin size={12} />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 italic border-l-2 border-primary-200 dark:border-primary-900/30 pl-4 py-1">
                      {exp.summary}
                    </p>

                    <div className={`space-y-3 ${index % 2 === 0 ? '' : 'md:flex md:flex-col md:items-end'}`}>
                      {exp.achievements.map((item, i) => (
                        <div key={i} className={`flex items-start gap-3 group/item ${index % 2 === 0 ? '' : 'md:flex-row-reverse md:text-right'}`}>
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-400 group-hover/item:scale-150 transition-transform flex-shrink-0" />
                          <p className="text-slate-600 dark:text-slate-400 text-sm leading-snug">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className={`mt-8 pt-6 border-t border-slate-200/50 dark:border-slate-800/50 flex ${index % 2 === 0 ? 'justify-start' : 'md:justify-end justify-start'}`}>
                       <span className="inline-flex items-center text-xs font-bold text-slate-400 group-hover:text-primary-600 transition-colors uppercase tracking-widest cursor-pointer">
                         Learn More <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                       </span>
                    </div>
                  </div>
                </div>

                {/* Empty Side for Desktop Spacing */}
                <div className="hidden md:block md:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
