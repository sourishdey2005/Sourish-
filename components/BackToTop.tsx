import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Safe motion component
  const MotionButton = motion.button;

  return (
    <AnimatePresence>
      {visible && (
        <MotionButton
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 text-primary-600 dark:text-primary-400 shadow-xl shadow-primary-500/10 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md hover:border-primary-500/50 hover:bg-primary-50 dark:hover:bg-slate-800 transition-all cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} className="stroke-[2.5]" />
        </MotionButton>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
