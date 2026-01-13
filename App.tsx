
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Publications from './components/Publications';
import Contact from './components/Contact';
import { Award, GraduationCap, CheckCircle2 } from 'lucide-react';
import { CERTIFICATIONS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      
      {/* Education & Certs */}
      <section id="education" className="py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-12 flex items-center">
                <GraduationCap className="mr-4 text-primary-600" /> Education
              </h2>
              <div className="space-y-8">
                <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">KIIT University</h3>
                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-xs font-bold">2023–2027</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-2">B.Tech Computer Engineering</p>
                  <p className="text-sm font-medium text-primary-600">Currently pursuing specializing in AI/ML Foundations</p>
                </div>
                
                <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Hem Sheela Model School</h3>
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-500 rounded-full text-xs font-bold">Batch 2023</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-slate-600 dark:text-slate-400 flex justify-between">Class 12: <span className="font-bold">91%</span></p>
                    <p className="text-slate-600 dark:text-slate-400 flex justify-between">Class 10: <span className="font-bold">98%</span></p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-12 flex items-center">
                <Award className="mr-4 text-primary-600" /> Certifications
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.provider} className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
                    <h3 className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-4">{cert.provider}</h3>
                    <ul className="space-y-3">
                      {cert.items.map(item => (
                        <li key={item} className="text-slate-700 dark:text-slate-300 flex items-center text-sm">
                          <CheckCircle2 size={16} className="text-green-500 mr-2 flex-shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Publications />

      {/* Honors */}
      <section className="py-12 bg-primary-600 dark:bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden relative">
          <div className="flex flex-wrap items-center justify-around gap-8 py-4">
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
  <div className="text-center text-white p-4">
    <p className="text-lg font-bold mb-1">{title}</p>
    <p className="text-xs text-primary-100 uppercase tracking-wider">{subtitle}</p>
  </div>
);

export default App;
