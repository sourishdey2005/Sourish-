
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-4">Professional Journey</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full" />
        </div>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-0 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-12"
            >
              {/* Timeline Marker */}
              <div className="absolute left-[-9px] md:left-auto md:right-[-9px] top-1 w-4 h-4 rounded-full bg-primary-600 border-4 border-white dark:border-slate-950 z-10" />

              <div className="md:col-span-2 text-left md:text-right mb-4 md:mb-0">
                <span className="inline-flex items-center text-primary-600 font-semibold mb-2">
                  <Calendar size={16} className="mr-2" /> {exp.duration}
                </span>
                <p className="text-sm font-medium text-slate-500 flex items-center md:justify-end">
                  <MapPin size={14} className="mr-1" /> {exp.location}
                </p>
              </div>

              <div className="md:col-span-3 bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 flex items-center">
                  <Briefcase size={20} className="mr-2 text-primary-600" /> {exp.role}
                </h3>
                <p className="text-primary-600 font-medium mb-4">{exp.company}</p>
                <ul className="space-y-3">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="text-slate-600 dark:text-slate-400 text-sm flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3 mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
