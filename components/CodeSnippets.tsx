
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Code, Cpu, Cloud, Terminal, Hash } from 'lucide-react';
import { CODE_SNIPPETS, CodeSnippet } from '../constants';

const SyntaxHighlighter: React.FC<{ code: string; language: string }> = ({ code }) => {
  // Robust internal highlighter that handles escaping properly
  const getHighlightedLines = (rawCode: string) => {
    // 1. Escape HTML entities to prevent rendering conflicts
    const escaped = rawCode
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // 2. Define highlighting tokens
    const tokens = [
      // Keywords (Python/HCL/YAML)
      { 
        regex: /\b(def|class|import|from|as|with|return|if|else|apiVersion|kind|metadata|spec|selector|template|labels|containers|resources|limits|livenessProbe|module|source|name|cidr|azs|private_subnets|public_subnets|enable_nat_gateway|single_nat_gateway|tags|strategy|strategy\.scope|tf\.distribute\.MirroredStrategy)\b/g, 
        class: 'text-indigo-400 font-bold' 
      },
      // Strings
      { regex: /("[^"]*"|'[^']*')/g, class: 'text-emerald-400' },
      // Comments
      { regex: /(#.*|\/\/.*)/g, class: 'text-slate-500 italic' },
      // Numbers
      { regex: /(\b\d+\b)/g, class: 'text-amber-400' },
      // Functions
      { regex: /(\w+)(?=\()/g, class: 'text-blue-300' }
    ];

    // 3. Apply highlighting
    let highlighted = escaped;
    tokens.forEach(token => {
      // Use a marker to avoid re-highlighting tags
      highlighted = highlighted.replace(token.regex, (match) => {
        return `<span class="${token.class}">${match}</span>`;
      });
    });

    return highlighted.split('\n');
  };

  const lines = getHighlightedLines(code);

  return (
    <div className="font-mono text-[13px] leading-6 overflow-x-auto selection:bg-primary-500/30">
      {lines.map((line, i) => (
        <div key={i} className="flex group/line hover:bg-white/5 transition-colors">
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

const SnippetCard: React.FC<{ snippet: CodeSnippet; index: number }> = ({ snippet, index }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col h-full bg-[#0d1117] rounded-2xl border border-slate-800 overflow-hidden shadow-2xl group hover:border-slate-700 transition-all"
    >
      {/* Custom Window Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-slate-800">
        <div className="flex items-center gap-6">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="flex items-center gap-2">
            <span className={`px-2 py-0.5 rounded text-[10px] font-black border uppercase tracking-tighter ${getCategoryColor()}`}>
              {snippet.category}
            </span>
            <h3 className="text-xs font-bold text-slate-400 group-hover:text-slate-200 transition-colors uppercase tracking-widest truncate max-w-[150px]">
              {snippet.title}
            </h3>
          </div>
        </div>
        <button
          onClick={handleCopy}
          className="relative p-2 text-slate-500 hover:text-white transition-all bg-white/5 hover:bg-white/10 rounded-lg"
        >
          {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
        </button>
      </div>

      {/* Code Content Area */}
      <div className="flex-1 py-4 bg-[#0d1117] relative">
        <SyntaxHighlighter code={snippet.code} language={snippet.language} />
        
        {/* Subtle bottom-right language tag */}
        <div className="absolute bottom-2 right-4 px-2 py-1 bg-[#161b22] rounded text-[10px] font-mono text-slate-500 border border-slate-800 select-none opacity-50 group-hover:opacity-100 transition-opacity">
          .{snippet.language}
        </div>
      </div>

      {/* Description Footer */}
      <div className="px-5 py-3 bg-[#161b22] border-t border-slate-800 flex items-start gap-3">
        <Hash size={14} className="text-primary-500 mt-0.5 shrink-0" />
        <p className="text-[11px] text-slate-400 italic leading-relaxed">
          {snippet.description}
        </p>
      </div>
    </motion.div>
  );
};

const CodeSnippets: React.FC = () => {
  return (
    <section id="snippets" className="py-24 bg-white dark:bg-slate-950 overflow-hidden relative border-b border-slate-100 dark:border-slate-900">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary-600/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-primary-600" />
            <h2 className="text-sm font-black text-primary-600 uppercase tracking-[0.4em]">Engineering Logic</h2>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-6">Interactive Code Lab</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg leading-relaxed">
            Standard operating procedures and reusable infrastructure patterns designed for massive scale and high-availability systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CODE_SNIPPETS.map((snippet, idx) => (
            <SnippetCard key={snippet.id} snippet={snippet} index={idx} />
          ))}
        </div>

        {/* Technical Specification Footer */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-20 grayscale hover:opacity-50 hover:grayscale-0 transition-all duration-500">
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
