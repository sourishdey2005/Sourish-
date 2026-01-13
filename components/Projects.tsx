
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, PieChart as ChartIcon } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';
import { PROJECTS } from '../constants';
import { ProjectDomain } from '../types';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<ProjectDomain>('All');

  const filteredProjects = PROJECTS.filter(p => filter === 'All' || p.domain === filter);

  const filterOptions: ProjectDomain[] = ['All', 'ML', 'Cloud', 'Finance', 'IoT'];

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div>
            <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl">
              Selection of end-to-end engineering solutions across cloud architecture, machine learning, and quantitative finance.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {filterOptions.map(opt => (
              <button
                key={opt}
                onClick={() => setFilter(opt)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === opt ? 'bg-primary-600 text-white shadow-md' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 flex flex-col hover:shadow-xl transition-shadow"
              >
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-2 py-1 text-[10px] font-bold tracking-widest uppercase rounded bg-slate-100 dark:bg-slate-700 text-slate-500">
                      {project.domain}
                    </span>
                    <div className="flex space-x-2">
                      <a href="#" className="p-2 text-slate-400 hover:text-primary-600 transition-colors">
                        <Github size={18} />
                      </a>
                      <a href="#" className="p-2 text-slate-400 hover:text-primary-600 transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map(s => (
                      <span key={s} className="px-2 py-0.5 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-[10px] font-semibold rounded-md border border-primary-100 dark:border-primary-900/30">
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Performance Visualization */}
                  {project.chartData && (
                    <div className="h-24 mt-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg p-2">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={project.chartData}>
                          <XAxis dataKey="name" hide />
                          <YAxis hide domain={[0, 100]} />
                          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                            {project.chartData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={index === 0 ? '#6366f1' : '#a5b4fc'} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                      <div className="flex justify-between mt-1 px-2">
                         <span className="text-[9px] uppercase tracking-tighter text-slate-400 font-bold">Metrics Visualizer</span>
                         <span className="text-[9px] text-primary-500 font-bold flex items-center">
                           <ChartIcon size={10} className="mr-1" /> ACTIVE
                         </span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-700 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/10 transition-colors">
                  <button className="text-sm font-semibold text-slate-600 dark:text-slate-400 group-hover:text-primary-600 flex items-center w-full justify-between">
                    View Project Details <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const ChevronRight = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);

export default Projects;
