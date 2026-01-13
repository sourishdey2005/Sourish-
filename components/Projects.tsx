
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, PieChart as ChartIcon, CheckCircle2, ChevronRight, X, Layers, Target } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import { PROJECTS } from '../constants';
import { ProjectDomain, Project as ProjectType } from '../types';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<ProjectDomain | 'All'>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  const filteredProjects = PROJECTS.filter(p => filter === 'All' || p.domain === filter);
  const filterOptions = ['All', 'ML', 'Cloud', 'Finance', 'IoT'];

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background Decor */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">Featured Innovations</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl text-lg">
              A gallery of research-grade implementations bridging the gap between theoretical algorithms and high-performance production systems.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {filterOptions.map(opt => (
              <button
                key={opt}
                onClick={() => setFilter(opt as any)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${filter === opt ? 'bg-primary-600 text-white shadow-xl shadow-primary-500/20' : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
              >
                {opt}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, idx) => (
              <ProjectCard 
                key={project.title} 
                project={project} 
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                {/* Header Decor */}
                <div className="h-48 bg-gradient-to-br from-primary-600 to-indigo-900 relative">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full transition-all"
                  >
                    <X size={24} />
                  </button>
                  <div className="absolute -bottom-10 left-10 p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
                    <span className="text-primary-600 dark:text-primary-400 font-bold text-xs uppercase tracking-widest bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full">{selectedProject.domain}</span>
                  </div>
                </div>

                <div className="px-10 pt-16 pb-12">
                  <div className="flex flex-col lg:flex-row gap-12">
                    <div className="flex-1">
                      <h3 className="text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                        {selectedProject.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                        {selectedProject.description}
                      </p>

                      <div className="mb-10">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                          <Target size={18} className="mr-2 text-primary-600" /> Key Engineering Achievements
                        </h4>
                        <div className="grid gap-4">
                          {selectedProject.achievements.map((item, i) => (
                            <div key={i} className="flex items-start gap-4 p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700 group hover:border-primary-500/30 transition-all">
                              <CheckCircle2 size={22} className="text-primary-500 flex-shrink-0 mt-0.5" />
                              <p className="text-slate-700 dark:text-slate-300 font-medium">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:w-80 space-y-8">
                      <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Architecture Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.stack.map(s => (
                            <span key={s} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-700">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      {selectedProject.chartData && (
                        <div>
                          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Performance Metrics</h4>
                          <div className="h-48 bg-slate-50 dark:bg-slate-950/50 rounded-3xl p-4 border border-slate-100 dark:border-slate-800">
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart data={selectedProject.chartData}>
                                <XAxis dataKey="name" hide />
                                <YAxis hide domain={[0, 100]} />
                                <Tooltip 
                                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                  cursor={{ fill: 'transparent' }}
                                />
                                <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                                  {selectedProject.chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#6366f1' : '#818cf8'} />
                                  ))}
                                </Bar>
                              </BarChart>
                            </ResponsiveContainer>
                          </div>
                        </div>
                      )}

                      <div className="pt-6">
                        <div className="flex flex-col gap-3">
                          <button className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-2xl hover:opacity-90 transition-opacity">
                            <Github size={18} /> Source Repository
                          </button>
                          <button className="w-full flex items-center justify-center gap-2 px-6 py-4 border-2 border-slate-200 dark:border-slate-700 font-bold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                            <ExternalLink size={18} /> Live Deployment
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const ProjectCard: React.FC<{ project: ProjectType; onClick: () => void }> = ({ project, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for 3D effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      style={{ perspective: 1000 }}
      className="group relative"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className="bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden cursor-pointer transition-colors hover:border-primary-500/50 flex flex-col h-full"
        onClick={onClick}
      >
        {/* Card Header Overlay */}
        <div className="p-8 pb-4 flex justify-between items-start">
          <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-2xl text-primary-600 dark:text-primary-400">
            <Layers size={24} />
          </div>
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="p-2 bg-slate-100 dark:bg-slate-700 rounded-xl text-slate-500 hover:text-primary-600 transition-colors">
              <Github size={18} />
            </span>
            <span className="p-2 bg-slate-100 dark:bg-slate-700 rounded-xl text-slate-500 hover:text-primary-600 transition-colors">
              <ExternalLink size={18} />
            </span>
          </div>
        </div>

        <div className="px-8 pb-8 flex-grow">
          <div className="mb-4">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600/60 dark:text-primary-400/60">
              {project.domain} Domain
            </span>
            <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mt-1 group-hover:text-primary-600 transition-colors leading-tight">
              {project.title}
            </h3>
          </div>
          
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.slice(0, 3).map(s => (
              <span key={s} className="px-2.5 py-1 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-[10px] font-bold rounded-lg border border-slate-200 dark:border-slate-800">
                {s}
              </span>
            ))}
            {project.stack.length > 3 && (
               <span className="px-2.5 py-1 text-[10px] font-bold text-slate-400">+{project.stack.length - 3}</span>
            )}
          </div>

          {project.chartData && (
            <div className="h-20 bg-slate-50 dark:bg-slate-950/40 rounded-2xl p-2 relative overflow-hidden">
               {/* Grid Pattern */}
               <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
               
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={project.chartData}>
                    <Bar dataKey="value" radius={[3, 3, 0, 0]}>
                      {project.chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#6366f1' : '#a5b4fc'} fillOpacity={0.8} />
                      ))}
                    </Bar>
                  </BarChart>
               </ResponsiveContainer>
               <div className="absolute top-2 right-3 flex items-center text-[8px] font-black tracking-widest text-primary-500 uppercase">
                  <span className="relative flex h-1.5 w-1.5 mr-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary-500"></span>
                  </span>
                  Data Live
               </div>
            </div>
          )}
        </div>

        <div className="px-8 py-5 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 mt-auto group-hover:bg-primary-600 transition-all duration-300">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 group-hover:text-white transition-colors uppercase tracking-widest">In-Depth Case Study</span>
            <ChevronRight size={18} className="text-slate-400 group-hover:text-white transition-all transform group-hover:translate-x-1" />
          </div>
        </div>
      </motion.div>
      
      {/* Decorative Shadow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-indigo-600 rounded-[2rem] blur opacity-0 group-hover:opacity-10 transition duration-500 -z-10" />
    </motion.div>
  );
};

export default Projects;
