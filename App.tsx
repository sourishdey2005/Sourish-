
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import SystemSimulation from './components/SystemSimulation';
import Publications from './components/Publications';
import Contact from './components/Contact';
import { Award, GraduationCap, CheckCircle2, Book, Calendar as CalendarIcon, Star, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS, EDUCATION_DATA } from './constants';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      
      {/* Live System Simulation - Highlighting Cloud & Infrastructure Depth */}
      <SystemSimulation />
      
      {/* Education & Certs */}
      <section id="education" className="py-24 bg-slate-50 dark:bg-slate-900/30 overflow-hidden relative">
        {/* Subtle Background Textures */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Education Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-primary-600 rounded-2xl text-white shadow-lg shadow-primary-500/20">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <span className="text-primary-600 font-black text-xs uppercase tracking-[0.3em] block mb-1">Foundations</span>
                  <h2 className="text-4xl font-heading font-bold text-slate-900 dark:text-white">Academic Journey</h2>
                </div>
              </div>

              <div className="space-y-12 relative before:absolute before:left-8 before:top-4 before:bottom-4 before:w-px before:bg-slate-200 dark:before:bg-slate-800">
                {EDUCATION_DATA.map((edu, idx) => (
                  <div key={idx} className="relative pl-20 group">
                    {/* Timeline Marker */}
                    <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-primary-600 z-10 group-hover:scale-125 transition-transform" />
                    
                    <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm group-hover:shadow-xl group-hover:border-primary-500/30 transition-all duration-500">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                        <div className="flex items-center gap-2 text-primary-600 font-bold text-sm uppercase tracking-widest">
                          <CalendarIcon size={14} />
                          {edu.duration}
                        </div>
                        <span className="inline-flex items-center px-4 py-1.5 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-xs font-black border border-green-500/20">
                          SCORE: {edu.score}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary-600 transition-colors">
                        {edu.institution}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 font-bold mb-4">{edu.degree}</p>
                      
                      <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                        {edu.details}
                      </p>

                      {edu.coursework && (
                        <div className="pt-6 border-t border-slate-100 dark:border-slate-700">
                          <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                            <Book size={12} className="text-primary-600" /> Relevant Coursework
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map(course => (
                              <span key={course} className="px-3 py-1 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-[10px] font-bold rounded-lg border border-slate-200 dark:border-slate-800">
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-indigo-600 rounded-2xl text-white shadow-lg shadow-indigo-500/20">
                  <Award size={32} />
                </div>
                <div>
                  <span className="text-indigo-600 font-black text-xs uppercase tracking-[0.3em] block mb-1">Verification</span>
                  <h2 className="text-4xl font-heading font-bold text-slate-900 dark:text-white">Professional Certs</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {CERTIFICATIONS.map((cert, idx) => (
                  <motion.div 
                    key={cert.provider} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all group overflow-hidden relative"
                  >
                    {/* Background Icon */}
                    <Award className="absolute -right-4 -bottom-4 w-24 h-24 text-indigo-500/5 rotate-12" />

                    <div className="flex items-center justify-between mb-6 relative z-10">
                      <div className="flex items-center gap-3">
                         <div className="w-2 h-8 bg-indigo-600 rounded-full" />
                         <h3 className="text-sm font-black text-indigo-600 uppercase tracking-widest">{cert.provider}</h3>
                      </div>
                      <Star size={16} className="text-amber-500 fill-amber-500 group-hover:scale-125 transition-transform" />
                    </div>
                    
                    <ul className="space-y-3 relative z-10">
                      {cert.items.map(item => (
                        <li key={item} className="text-slate-700 dark:text-slate-300 flex items-start text-sm font-medium group/item">
                          <div className="w-6 h-6 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center mr-3 mt-0.5 group-hover/item:bg-indigo-600 group-hover/item:text-white transition-all flex-shrink-0">
                            <CheckCircle2 size={12} />
                          </div>
                          <span className="group-hover/item:text-indigo-600 dark:group-hover/item:text-indigo-400 transition-colors">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-end">
                      <button className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5 hover:text-indigo-600 transition-colors">
                        Verify Credentials <ExternalLink size={10} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Publications />

      {/* Honors */}
      <section className="py-20 bg-primary-600 dark:bg-primary-900 relative overflow-hidden">
        {/* Animated Background Pulse */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-indigo-700 opacity-50" />
        <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden relative z-10">
          <div className="flex flex-wrap items-center justify-around gap-12 py-4">
             <HonorItem title="School Topper 2023" subtitle="98.5% Aggregate" />
             <HonorItem title="School Topper 2020" subtitle="Secondary Boards" />
             <HonorItem title="Gold Medal" subtitle="International Math Olympiad" />
             <HonorItem title="Silver Medal" subtitle="National Math Olympiad" />
          </div>
        </div>
      </section>

      <Contact />

      <footer className="py-12 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-slate-500 dark:text-slate-400 text-sm">
          <p>© 2026 Sourish Dey. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
             <a href="#" className="hover:text-primary-600 transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-primary-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const HonorItem = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="text-center text-white p-4"
  >
    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-md">
       <Star size={24} className="text-amber-300 fill-amber-300" />
    </div>
    <p className="text-xl font-bold mb-1 tracking-tight">{title}</p>
    <p className="text-xs text-primary-100 uppercase font-black tracking-widest opacity-80">{subtitle}</p>
  </motion.div>
);

export default App;
