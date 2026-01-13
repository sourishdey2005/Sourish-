
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const roles = ["MLOps Engineer", "Cloud Engineer", "Data Scientist"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const speed = isDeleting ? 50 : 100;

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[roleIndex];
      if (!isDeleting) {
        setText(fullText.substring(0, text.length + 1));
        if (text === fullText) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(fullText.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-slate-950">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary-50 dark:bg-primary-900/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-indigo-50 dark:bg-indigo-900/10 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-primary-600 uppercase bg-primary-100 rounded-full dark:bg-primary-900/30 dark:text-primary-400">
              Available for Engineering Roles
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              Hi, I'm <span className="text-primary-600">Sourish Dey</span>
            </h1>
            <div className="h-12 md:h-16 mb-8">
              <h2 className="text-2xl md:text-4xl font-semibold text-slate-600 dark:text-slate-400">
                {text}<span className="animate-pulse">|</span>
              </h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-2xl">
              Highly motivated Cloud and Data Science Engineer with experience in building intelligent, 
              scalable, and secure digital ecosystems. Proficient in <span className="text-slate-900 dark:text-white font-medium">AWS, MLOps, IaC, and Kubernetes</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="flex items-center justify-center px-8 py-3 text-white bg-primary-600 hover:bg-primary-700 rounded-lg font-medium transition-all shadow-lg shadow-primary-200 dark:shadow-none"
              >
                Contact Me <ChevronRight className="ml-2" size={18} />
              </a>
              <button className="flex items-center justify-center px-8 py-3 text-primary-600 border border-primary-200 hover:bg-primary-50 dark:border-primary-800 dark:hover:bg-slate-900 rounded-lg font-medium transition-all">
                Download Resume <Download className="ml-2" size={18} />
              </button>
            </div>
          </motion.div>

          {/* Profile Photo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 bg-primary-600/10 dark:bg-primary-600/5 rounded-[2rem] rotate-6 scale-105" />
              <div className="absolute inset-0 border-2 border-primary-600/20 dark:border-primary-600/10 rounded-[2rem] -rotate-3" />
              
              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                <img 
                  src="https://res.cloudinary.com/dodhvvewu/image/upload/v1768232730/80b22f88-4f08-47a0-aa94-2117cbe80c9b_kbe1ph.jpg" 
                  alt="Sourish Dey" 
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500 hover:scale-105"
                />
              </div>

              {/* Decorative Tech Badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700"
              >
                <div className="w-8 h-8 flex items-center justify-center text-primary-600">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700"
              >
                <div className="w-8 h-8 flex items-center justify-center text-primary-600">
                   <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-1 h-12 bg-slate-200 dark:bg-slate-800 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-primary-600 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
