
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Code, Cpu, Cloud, Terminal, Hash, ChevronLeft, ChevronRight } from 'lucide-react';
import { CODE_SNIPPETS, CodeSnippet } from '../constants';

const SyntaxHighlighter: React.FC<{ code: string; language: string }> = ({ code }) => {
  // Use useMemo to avoid re-highlighting on every scroll/render
  const lines = useMemo(() => {
    // 1. Escape HTML literal characters
    const escaped = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // 2. Tokenizer logic that wraps segments in classes
    // We target keywords, strings, comments, and numbers
    const patterns = [
      { regex: /\b(def|class|import|from|as|with|return|if|else|export|async|await|const|module|source|name|cidr|azs|private_subnets|public_subnets|enable_nat_gateway|single_nat_gateway|tags|apiVersion|kind|metadata|spec|selector|template|labels|containers|resources|limits|livenessProbe|strategy|MirroredStrategy)\b/g, cls: 'text-indigo-400 font-bold' },
      { regex: /("[^"]*"|'[^']*')/g, cls: 'text-emerald-400' },
      { regex: /(#.*|\/\/.*)/g, cls: 'text-slate-500 italic' },
      { regex: /(\b\d+\b)/g, cls: 'text-amber-400' },
      { regex: /(\w+)(?=\()/g, cls: 'text-blue-300' }
    ];

    // Split by lines first to handle each individually
    return escaped.split('\n').map(line => {
      let highlightedLine = line;
      
      // To prevent keywords inside HTML tags being replaced (e.g. 'class' in <span class="">),
      // we perform a more careful single-pass replacement or use unique markers.
      // Here, we'll use a unique marker strategy.
      const replacements: { marker: string, html: string }[] = [];
      
      patterns.forEach((p, i) => {
        highlightedLine = highlightedLine.replace(p.regex, (match) => {
          const marker = `__TOKEN_${i}_${replacements.length}__`;
          replacements.push({ marker, html: `<span class="${p.cls}">${match}</span>` });
          return marker;
        });
      });

      // Swap markers back for HTML
      replacements.forEach(r => {
        highlightedLine = highlightedLine.replace(r.marker, r.html);
      });

      return highlightedLine;
    });
  }, [code]);

  return (
    <div className="font-mono text-[13px] leading-6 selection:bg-primary-500/30">
      {lines.map((line, i) => (
        <div key={i} className="flex group/line hover:bg-white/5 transition-colors px-4">
          <span className="w-10 text-right pr-4 select-none text-slate-600 border-r border-slate-800 shrink-0 group-hover/line:text-slate-400 transition-colors">
            {i + 1}
          </span>
          <span 
            className="pl-4 whitespace-pre text-slate-300"
            dangerouslySetInnerHTML={{ __html: line || ' ' }} 
          />
        </div>
      ))}
    </div>
  );
};

const SnippetCard: React.FC<{ snippet: CodeSnippet; isVisible: boolean }> = ({ snippet, isVisible }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getCategoryColor = () => {
    switch (snippet.category) {
      case 'ML': return 'text-primary-400 bg-primary-400/10 border-primary-400/20';
      case 'Cloud': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'DevOps': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.08, zIndex: 30, boxShadow: "0 20px 50px rgba(79, 70, 229, 0.15)" }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`flex flex-col h-[480px] bg-[#0d1117] rounded-2xl border border-slate-800 overflow-hidden shadow-2xl group transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-40 grayscale scale-95'}`}
    >
      <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-slate-800">
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5 shrink-0">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="flex items-center gap-2">
            <span className={`px-2 py-0.5 rounded text-[9px] font-black border uppercase tracking-tighter shrink-0 ${getCategoryColor()}`}>
              {snippet.category}
            </span>
            <h3 className="text-[11px] font-bold text-slate-400 group-hover:text-slate-200 transition-colors uppercase tracking-widest truncate max-w-[120px]">
              {snippet.title}
            </h3>
          </div>
        </div>
        <button
          onClick={handleCopy}
          className="relative p-2 text-slate-500 hover:text-white transition-all bg-white/5 hover:bg-white/10 rounded-lg shrink-0"
        >
          {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
        </button>
      </div>

      <div className="flex-1 py-4 bg-[#0d1117] relative overflow-y-auto scrollbar-thin scrollbar-thumb-slate-800">
        <SyntaxHighlighter code={snippet.code} language={snippet.language} />
        <div className="absolute bottom-2 right-4 px-2 py-1 bg-[#161b22] rounded text-[10px] font-mono text-slate-500 border border-slate-800 select-none opacity-50 group-hover:opacity-100 transition-opacity">
          .{snippet.language}
        </div>
      </div>

      <div className="px-5 py-3 bg-[#161b22] border-t border-slate-800 flex items-start gap-3">
        <Hash size={14} className="text-primary-500 mt-0.5 shrink-0" />
        <p className="text-[11px] text-slate-400 italic leading-relaxed line-clamp-2">
          {snippet.description}
        </p>
      </div>
    </motion.div>
  );
};

const CodeSnippets: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  // Update visible count based on screen size
  useEffect(() => {
    const updateSize = () => setVisibleCount(window.innerWidth < 768 ? 1 : 3);
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const maxIndex = Math.max(0, CODE_SNIPPETS.length - visibleCount);

  useEffect(() => {
    if (isPaused || maxIndex === 0) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 10000);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const handleNext = () => setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const handlePrev = () => setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  return (
    <section id="snippets" className="py-24 bg-white dark:bg-slate-950 overflow-hidden relative border-b border-slate-100 dark:border-slate-900">
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary-600/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-primary-600" />
              <h2 className="text-sm font-black text-primary-600 uppercase tracking-[0.4em]">Engineering Logic</h2>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-6">Interactive Code Lab</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
              An authenticated repository of production-grade logic, declarative infrastructure patterns, and high-performance MLOps orchestrations designed for enterprise scale.
            </p>
          </div>

          <div className="flex items-center gap-4">
             <button 
              onClick={handlePrev}
              className="p-3 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-primary-600 hover:text-white transition-all shadow-lg active:scale-90"
             >
               <ChevronLeft size={24} />
             </button>
             <button 
              onClick={handleNext}
              className="p-3 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-primary-600 hover:text-white transition-all shadow-lg active:scale-90"
             >
               <ChevronRight size={24} />
             </button>
          </div>
        </motion.div>

        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-visible py-10">
            <motion.div 
              animate={{ x: `-${activeIndex * (100 / visibleCount)}%` }}
              transition={{ type: "spring", stiffness: 120, damping: 22 }}
              className="flex gap-6"
              style={{ width: `${(CODE_SNIPPETS.length * 100) / visibleCount}%` }}
            >
              {CODE_SNIPPETS.map((snippet, idx) => (
                <div 
                  key={snippet.id} 
                  className="w-full"
                  style={{ flex: `0 0 calc(${100 / visibleCount}% - 1.5rem)` }}
                >
                  <SnippetCard 
                    snippet={snippet} 
                    isVisible={idx >= activeIndex && idx < activeIndex + visibleCount}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Dynamic Pagination Bars */}
        <div className="flex justify-center gap-3 mt-12">
          {CODE_SNIPPETS.slice(0, maxIndex + 1).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === idx ? 'w-16 bg-primary-600' : 'w-4 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700'}`}
            />
          ))}
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-20 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Environment</span>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
              <Cloud size={16} /> AWS / GCP HYBRID
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Orchestrator</span>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
              <Terminal size={16} /> K8S / TERRAFORM
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Compute</span>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
              <Cpu size={16} /> NVIDIA CUDA A100
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Standards</span>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
              <Code size={16} /> ISO 27001 COMPLIANT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeSnippets;
