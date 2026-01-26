
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, CheckCircle2, ChevronRight, X, Layers, Target, Activity, Filter } from 'lucide-react';
import { BarChart, Bar, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import { PROJECTS } from '../constants';
import { ProjectDomain, Project as ProjectType } from '../types';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<ProjectDomain | 'All'>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  const filteredProjects = PROJECTS.filter(p => filter === 'All' || p.domain === filter);
  const filterOptions: (ProjectDomain | 'All')[] = ['All', 'NLP', 'ML', 'Cloud', 'Finance', 'IoT'];

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden relative">
      {/* 3D Scene Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.07]" 
        style={{ 
          perspective: '1000px',
          backgroundImage: `linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          transform: 'rotateX(60deg) translateY(-20%)',
          maskImage: 'linear-gradient(to bottom, transparent, black, transparent)'
        }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-primary-600" />
              <span className="text-primary-600 font-black text-xs uppercase tracking-[0.3em]">Research & Development</span>
            </div>
            <h2 className="text-5xl font-heading font-bold text-slate-900 dark:text-white mb-6">Featured Innovations</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl text-lg leading-relaxed">
              Bridging the gap between theoretical algorithms and high-performance production systems through rigorous engineering.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 p-1.5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            {filterOptions.map(opt => (
              <button
                key={opt}
                onClick={() => setFilter(opt)}
                className={`relative px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                  filter === opt 
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25 scale-105' 
                    : 'text-slate-500 hover:text-primary-600 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {opt === 'All' && <Filter size={14} className={filter === 'All' ? 'opacity-100' : 'opacity-40'} />}
                {opt}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 min-h-[600px]"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
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
              className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <div className="h-56 bg-gradient-to-br from-primary-600 via-indigo-700 to-slate-900 relative">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-8 right-8 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full transition-all z-20"
                  >
                    <X size={24} />
                  </button>
                  <div className="absolute -bottom-8 left-12 p-8 bg-white dark:bg-slate-800 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-slate-700">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-primary-50 dark:bg-primary-900/30 rounded-2xl text-primary-600">
                        <Layers size={32} />
                      </div>
                      <div>
                         <span className="text-primary-600 dark:text-primary-400 font-black text-[10px] uppercase tracking-widest block mb-1">{selectedProject.domain} UNIT</span>
                         <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Architecture Lab</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-12 pt-20 pb-16">
                  <div className="flex flex-col lg:flex-row gap-16">
                    <div className="flex-1">
                      <h3 className="text-4xl font-heading font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                        {selectedProject.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-xl leading-relaxed mb-10">
                        {selectedProject.description}
                      </p>

                      <div className="space-y-10">
                        <div>
                          <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center">
                            <Target size={18} className="mr-2 text-primary-600" /> Key Engineering Metrics
                          </h4>
                          <div className="grid gap-4">
                            {selectedProject.achievements.map((item, i) => (
                              <div key={i} className="flex items-start gap-4 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-700 transition-all hover:border-primary-500/30">
                                <CheckCircle2 size={24} className="text-primary-500 flex-shrink-0 mt-0.5" />
                                <p className="text-slate-700 dark:text-slate-300 font-medium text-lg">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="lg:w-80 space-y-10">
                      <div>
                        <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Core Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.stack.map(s => (
                            <span key={s} className="px-4 py-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs font-black rounded-xl border border-primary-100 dark:border-primary-900/30">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      {selectedProject.chartData && (
                        <div>
                          <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex justify-between items-center">
                            Real-time Perf
                            <Activity size={12} className="text-green-500 animate-pulse" />
                          </h4>
                          <div className="h-56 bg-slate-950 rounded-[2rem] p-6 border border-slate-800 shadow-inner">
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart data={selectedProject.chartData}>
                                <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                                  {selectedProject.chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#4f46e5' : '#818cf8'} />
                                  ))}
                                </Bar>
                                <Tooltip cursor={{ fill: 'rgba(255,255,255,0.05)' }} contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '12px' }} itemStyle={{ color: '#fff' }} />
                              </BarChart>
                            </ResponsiveContainer>
                          </div>
                        </div>
                      )}

                      <div className="pt-6 flex flex-col gap-3">
                        <button className="flex items-center justify-center gap-3 px-8 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-2xl hover:scale-[1.02] transition-transform">
                          <Github size={20} /> Repository
                        </button>
                        <button className="flex items-center justify-center gap-3 px-8 py-5 border-2 border-slate-200 dark:border-slate-700 font-black rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                          <ExternalLink size={20} /> Deployment
                        </button>
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
  
  // Motion values for subtle 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Adjusted for more subtlety: 7 degrees max tilt
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), { stiffness: 100, damping: 15 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), { stiffness: 100, damping: 15 });

  // Shine/Glare effect values
  const opacity = useSpring(useMotionValue(0));
  const glareX = useSpring(useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]));
  const glareY = useSpring(useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x / width - 0.5);
    mouseY.set(y / height - 0.5);
    opacity.set(0.4); // Subtle glare
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    opacity.set(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      viewport={{ once: true }}
      className="group relative h-[440px]"
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.015 }}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative h-full bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden cursor-pointer transition-colors hover:border-primary-500/50 flex flex-col"
        onClick={onClick}
      >
        {/* Dynamic Glare Overlay */}
        <motion.div 
          style={{ 
            opacity,
            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.15) 0%, transparent 70%)`,
            zIndex: 10
          }} 
          className="absolute inset-0 pointer-events-none"
        />

        {/* Content with Parallax Effect */}
        <div className="p-8 flex-grow flex flex-col" style={{ transform: 'translateZ(40px)' }}>
          <div className="flex justify-between items-start mb-6">
            <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-2xl text-primary-600 transition-transform group-hover:scale-110 duration-500">
              <Layers size={28} />
            </div>
            {project.chartData && (
              <div className="flex items-center gap-2 px-3 py-1.5 bg-primary-500/10 rounded-full border border-primary-500/20">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-black text-primary-600 dark:text-primary-400 uppercase tracking-tighter">Analytical</span>
              </div>
            )}
          </div>

          <div className="mb-4" style={{ transform: 'translateZ(60px)' }}>
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-primary-600/70 dark:text-primary-400/70">
              {project.domain} Systems
            </span>
            <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mt-1 group-hover:text-primary-600 transition-colors leading-tight line-clamp-2">
              {project.title}
            </h3>
          </div>
          
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed font-medium">
            {project.description}
          </p>

          {/* Visually distinct stack chips */}
          <div className="flex flex-wrap gap-2 mt-auto" style={{ transform: 'translateZ(30px)' }}>
            {project.stack.slice(0, 3).map(s => (
              <span key={s} className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-[10px] font-black rounded-lg border border-primary-100 dark:border-primary-900/30">
                {s}
              </span>
            ))}
            {project.stack.length > 3 && (
               <span className="px-2 py-1 text-[10px] font-black text-slate-400">+{project.stack.length - 3}</span>
            )}
          </div>
        </div>

        {/* Interactive Bottom Bar */}
        <div className="px-8 py-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 mt-auto group-hover:bg-primary-600 transition-all duration-500">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black text-slate-500 dark:text-slate-400 group-hover:text-white transition-colors uppercase tracking-widest">Architectural Audit</span>
            <ChevronRight size={20} className="text-slate-400 group-hover:text-white transition-all transform group-hover:translate-x-1" />
          </div>
        </div>
      </motion.div>
      
      {/* Interactive Glow Shadow */}
      <div className="absolute -inset-2 bg-primary-600 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-[0.08] transition duration-700 -z-10" />
    </motion.div>
  );
};

export default Projects;
