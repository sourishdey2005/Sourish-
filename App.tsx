
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Terminal from './components/Terminal';
import Publications from './components/Publications';
import Patents from './components/Patents';
import CertificatesGallery from './components/CertificatesGallery';
import Contact from './components/Contact';
import { Award, GraduationCap, CheckCircle2, Book, Calendar as CalendarIcon, Star, ExternalLink, Trophy, Medal, Github, Linkedin, Facebook, Link2 } from 'lucide-react';
import { CERTIFICATIONS, EDUCATION_DATA, HONORS } from './constants';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  // Ensure the site reloads from the beginning (top of page)
  useEffect(() => {
    window.scrollTo(0, 0);
    // If there's a hash in the URL, clear it to force home state
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Terminal />
      <Skills />
      
      {/* Education & Certs */}
      <section id="education" className="py-24 bg-slate-50 dark:bg-slate-900/30 overflow-hidden relative border-b border-slate-100 dark:border-slate-800">
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
                  {/* Fixed: Replaced '卒業キャップ' with the imported 'GraduationCap' component */}
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

      {/* Honors Section - Improved Alignment & Detail */}
      <section id="honors" className="py-24 bg-white dark:bg-slate-950 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-8 bg-amber-500" />
              <h2 className="text-sm font-black text-amber-500 uppercase tracking-[0.3em]">Excellence</h2>
              <span className="h-px w-8 bg-amber-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-6">Honors & Awards</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Academic and competitive recognitions highlighting a consistent record of high-performance and technical proficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {HONORS.map((honor, idx) => (
               <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group p-8 bg-slate-50 dark:bg-slate-900/40 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center transition-all hover:shadow-2xl hover:border-amber-500/30"
               >
                 <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-3xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform group-hover:bg-amber-500 group-hover:text-white">
                   {honor.title.includes('Gold') ? <Trophy size={32} className="text-amber-500 group-hover:text-white" /> : honor.title.includes('Silver') ? <Medal size={32} className="text-slate-400 group-hover:text-white" /> : <Star size={32} className="text-amber-500 group-hover:text-white" />}
                 </div>
                 
                 <div className="flex items-center gap-1.5 text-[10px] font-black text-amber-600 uppercase tracking-widest mb-3">
                   <CalendarIcon size={12} /> {honor.date}
                 </div>
                 
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-amber-600 transition-colors">
                   {honor.title}
                 </h3>
                 <p className="text-sm text-slate-500 dark:text-slate-400 font-bold mb-4">{honor.institution}</p>
                 <p className="text-xs text-slate-400 dark:text-slate-500 italic leading-relaxed">
                   {honor.description}
                 </p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      <Publications />
      <Patents />
      <CertificatesGallery />

      <Contact />

      <footer className="py-16 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-2xl font-black text-primary-600 mb-2">Sourish Dey</span>
              <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs text-center md:text-left">
                Engineering high-performance cloud ecosystems and intelligent AI solutions.
              </p>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-6">
                <a href="https://github.com/sourishdey2005" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 dark:bg-slate-900 rounded-full text-slate-400 hover:text-primary-600 dark:hover:text-white transition-all hover:scale-110">
                  <Github size={22} />
                </a>
                <a href="https://www.linkedin.com/in/sourish-dey-20b170206/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 dark:bg-slate-900 rounded-full text-slate-400 hover:text-primary-600 dark:hover:text-white transition-all hover:scale-110">
                  <Linkedin size={22} />
                </a>
                <a href="https://linktr.ee/Sourishdey" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 dark:bg-slate-900 rounded-full text-slate-400 hover:text-primary-600 dark:hover:text-white transition-all hover:scale-110">
                  <Link2 size={22} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61551388003130" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 dark:bg-slate-900 rounded-full text-slate-400 hover:text-primary-600 dark:hover:text-white transition-all hover:scale-110">
                  <Facebook size={22} />
                </a>
              </div>
              <div className="flex space-x-8 text-xs font-bold uppercase tracking-widest text-slate-400">
                <a href="#" className="hover:text-primary-600 transition-colors">Privacy</a>
                <a href="#" className="hover:text-primary-600 transition-colors">Terms</a>
                <a href="mailto:sourish713321@gmail.com" className="hover:text-primary-600 transition-colors">Contact</a>
              </div>
            </div>

            <div className="text-slate-400 text-xs font-medium">
              © 2026 Sourish Dey. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
