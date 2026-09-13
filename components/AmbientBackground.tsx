import React, { useEffect } from 'react';

const AmbientBackground: React.FC = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Ambient gradient orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary-600/10 dark:bg-primary-500/10 rounded-full blur-[140px] animate-pulse-slow pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-500/8 rounded-full blur-[150px] animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-10 left-1/4 w-[450px] h-[450px] bg-indigo-600/10 dark:bg-indigo-600/8 rounded-full blur-[160px] animate-pulse-slow pointer-events-none" style={{ animationDelay: '4s' }} />

      {/* Reactive cursor spotlight overlay */}
      <div 
        className="hidden md:block absolute inset-0 opacity-40 dark:opacity-30 transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'radial-gradient(700px circle at var(--mouse-x, 50vw) var(--mouse-y, 50vh), rgba(99, 102, 241, 0.07), transparent 80%)',
        }}
      />
    </div>
  );
};

export default AmbientBackground;
