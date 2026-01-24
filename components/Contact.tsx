
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, CheckCircle, ExternalLink, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('success'), 1500);
  };

  const LinktreeIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="m13.736 5.853 4.005-4.117 2.325 1.503-3.2 3.287 5.134 1.255-.523 2.741-5.385-1.317 2.924 5.842-2.43 1.214-2.586-5.166v8.448l4.021 2.626-1.582 2.422-2.439-1.592V24h-3.002v-4.595l-2.439 1.592-1.581-2.422 4.02-2.626v-8.448l-2.586 5.166-2.43-1.214 2.924-5.842-5.384 1.317-.524-2.741 5.134-1.255-3.2-3.287L5.275 1.736l4.005 4.117V0h3.002v5.853Z"/>
    </svg>
  );

  const ResearchGateIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M19.586 0c-.815 0-1.5.685-1.5 1.5s.685 1.5 1.5 1.5 1.5-.685 1.5-1.5-.685-1.5-1.5-1.5zM9 20a1 1 0 0 0 1-1v-5h1.22c.1 0 .22.04.3.12l2.36 2.36c.46.46 1.06.68 1.66.68a2.3 2.3 0 0 0 1.63-3.93l-1.63-1.63c-.3-.3-.47-.7-.47-1.14a2.26 2.26 0 0 0-4.44-.6H9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1zm0-12h2.26a.26.26 0 0 1 .26.26v1.48a.26.26 0 0 1-.26.26H9V8zm4.33 4.2a.3.3 0 0 1 .1.2c0 .12-.04.22-.12.3l-.75.75a.3.3 0 0 1-.43 0L11 12.3c-.08-.08-.12-.18-.12-.3a.3.3 0 0 1 .1-.2c0-.12.04-.22.12-.3l.75-.75a.3.3 0 0 1 .43 0l1.15 1.15a.3.3 0 0 1 .08.2zM2.5 0A2.5 2.5 0 0 0 0 2.5v19A2.5 2.5 0 0 0 2.5 24h12c.33 0 .6-.27.6-.6v-2.4c0-.33-.27-.6-.6-.6h-11.4a.6.6 0 0 1-.6-.6V3.1a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v3.3c0 .33.27.6.6.6h2.4c.33 0 .6-.27.6-.6v-3.9A2.5 2.5 0 0 0 21.5 0h-19z"/>
    </svg>
  );

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 overflow-hidden relative">
      {/* Subtle Background Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary-600/5 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-primary-600" />
              <span className="text-primary-600 font-black text-xs uppercase tracking-[0.3em]">Connect</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Let's Build Something <span className="text-primary-600 underline decoration-indigo-200 decoration-8 underline-offset-8">Amazing</span> Together
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-lg">
              I'm always open to discussing new projects, creative engineering ideas, or high-impact opportunities in MLOps and Cloud.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center text-primary-600 shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Direct Email</p>
                  <a href="mailto:sourish713321@gmail.com" className="text-slate-900 dark:text-white font-bold text-lg hover:text-primary-600 transition-colors">
                    sourish713321@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center text-primary-600 shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Direct Hotline</p>
                  <a href="tel:+919064648823" className="text-slate-900 dark:text-white font-bold text-lg hover:text-primary-600 transition-colors">
                    +91 90646 48823
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-4">
              <a href="https://www.linkedin.com/in/sourish-dey-20b170206/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-all font-bold text-sm">
                <Linkedin size={20} className="text-blue-600" /> LinkedIn <ExternalLink size={12} className="opacity-40" />
              </a>
              <a href="https://github.com/sourishdey2005" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-all font-bold text-sm">
                <Github size={20} className="text-slate-900 dark:text-white" /> GitHub <ExternalLink size={12} className="opacity-40" />
              </a>
              <a href="https://linktr.ee/Sourishdey" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-all font-bold text-sm">
                <div className="text-green-600"><LinktreeIcon /></div> Linktree <ExternalLink size={12} className="opacity-40" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61551388003130" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-all font-bold text-sm">
                <Facebook size={20} className="text-blue-700" /> Facebook <ExternalLink size={12} className="opacity-40" />
              </a>
              <a href="https://www.researchgate.net/profile/Sourish-Dey-3?ev=hdr_xprf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-all font-bold text-sm col-span-2 md:col-span-1">
                <div className="text-emerald-600"><ResearchGateIcon /></div> ResearchGate <ExternalLink size={12} className="opacity-40" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 dark:bg-slate-900/50 p-8 sm:p-12 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-inner"
          >
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Send me a message</h3>
              <p className="text-sm text-slate-500">I'll get back to you within 24 operational hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Your Identity</label>
                    <input
                      type="text"
                      required
                      className="w-full px-5 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Electronic Mail</label>
                    <input
                      type="email"
                      required
                      className="w-full px-5 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-600"
                      placeholder="john@organization.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Project Narrative</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-5 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all dark:text-white resize-none placeholder:text-slate-300 dark:placeholder:text-slate-600"
                    placeholder="Briefly describe the engineering scope..."
                  />
                </div>
              </div>

              <button
                disabled={formState !== 'idle'}
                type="submit"
                className={`w-full group flex items-center justify-center px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl ${
                  formState === 'success' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:scale-[1.02] active:scale-95 shadow-primary-100 dark:shadow-none'
                }`}
              >
                {formState === 'idle' && (
                  <>Transmit Request <Send className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} /></>
                )}
                {formState === 'sending' && (
                  <span className="flex items-center">
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing Packet...
                  </span>
                )}
                {formState === 'success' && (
                  <><CheckCircle className="mr-2" size={20} /> Data Transmission Confirmed</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
