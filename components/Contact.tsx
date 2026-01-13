
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-6">Let's Build Something Together</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
              Open to collaborative research, freelance engineering consulting, or full-time opportunities in MLOps and Cloud Engineering.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-50 dark:bg-slate-900 rounded-full flex items-center justify-center text-primary-600">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</p>
                  <p className="text-slate-900 dark:text-white font-medium">sourishdey@engineer.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-50 dark:bg-slate-900 rounded-full flex items-center justify-center text-primary-600">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone</p>
                  <p className="text-slate-900 dark:text-white font-medium">+91 98765 43210</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex space-x-4">
              <a href="#" className="w-12 h-12 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                <Linkedin size={20} className="text-slate-600 dark:text-slate-400" />
              </a>
              <a href="#" className="w-12 h-12 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                <Github size={20} className="text-slate-600 dark:text-slate-400" />
              </a>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                disabled={formState !== 'idle'}
                type="submit"
                className={`w-full flex items-center justify-center px-8 py-4 rounded-xl font-bold transition-all shadow-lg ${formState === 'success' ? 'bg-green-600 text-white' : 'bg-primary-600 text-white hover:bg-primary-700 shadow-primary-100 dark:shadow-none'}`}
              >
                {formState === 'idle' && (
                  <>Send Message <Send className="ml-2" size={18} /></>
                )}
                {formState === 'sending' && (
                  <span className="flex items-center">
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                )}
                {formState === 'success' && (
                  <><CheckCircle className="mr-2" size={18} /> Sent Successfully!</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
