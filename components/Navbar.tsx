
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return true;
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'education', 'experience', 'leadership', 'quant', 'projects', 'snippets', 'terminal', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const navLinks = [
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Leadership', href: '#leadership', id: 'leadership' },
    { name: 'Quant Fin', href: '#quant', id: 'quant' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Terminal', href: '#terminal', id: 'terminal' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-3 sm:py-4 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo with glowing dot */}
        <a 
          href="#home"
          className={`flex items-center gap-2.5 px-3.5 py-1.5 rounded-full transition-all duration-300 ${
            isScrolled 
              ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-md shadow-slate-900/5' 
              : 'bg-transparent'
          }`}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary-600 to-cyan-400 flex items-center justify-center text-white font-black text-sm shadow-md shadow-primary-500/20">
            SD
          </div>
          <span className="font-heading font-extrabold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
            Sourish Dey
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" title="Available for hire" />
          </span>
        </a>

        {/* Floating Pill Center Navigation (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-lg shadow-slate-900/5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-primary-600 rounded-full -z-10 shadow-md shadow-primary-500/25"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Controls (Dark mode toggle & Quick Resume/Contact) */}
        <div className="flex items-center gap-2">
          {/* Quick Status Pill */}
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold">
            <Sparkles size={11} />
            <span>Open to Roles</span>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 hover:border-primary-400 dark:hover:border-primary-600 text-slate-700 dark:text-slate-200 transition-all shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <Sun size={17} className="text-amber-400 rotate-0 transition-transform duration-300" />
            ) : (
              <Moon size={17} className="text-slate-700 -rotate-12 transition-transform duration-300" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 text-slate-700 dark:text-slate-200 focus:outline-none cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-2 p-4 rounded-3xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 shadow-2xl space-y-1"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-primary-50 dark:hover:bg-primary-950/40 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

