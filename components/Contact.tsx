
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, CheckCircle, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('success'), 1500);
  };

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

            <div className="mt-14 flex flex-wrap gap-4">
              <a href="https://linkedin.com/in/sourish-dey" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-all font-bold text-sm">
                <Linkedin size={20} className="text-blue-600" /> LinkedIn Profiler <ExternalLink size={12} className="opacity-40" />
              </a>
              <a href="https://github.com/sourish-dey" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-all font-bold text-sm">
                <Github size={20} className="text-slate-900 dark:text-white" /> GitHub Registry <ExternalLink size={12} className="opacity-40" />
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
