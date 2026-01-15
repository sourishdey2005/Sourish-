
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Code, Cpu, Cloud, Terminal } from 'lucide-react';
import { CODE_SNIPPETS, CodeSnippet } from '../constants';

const SyntaxHighlighter: React.FC<{ code: string; language: string }> = ({ code, language }) => {
  // Simple regex-based highlighting for Demo purposes
  // This keeps the component light while providing a "Code Editor" feel
  const highlightCode = (text: string) => {
    return text.split('\n').map((line, i) => {
      // Basic highlighting rules
      const highlighted = line
        .replace(/(def|class|import|from|as|with|return|if|else|apiVersion|kind|metadata|spec|selector|template|labels|containers|resources|limits|livenessProbe|module|source|name|cidr|azs|private_subnets|public_subnets|enable_nat_gateway|single_nat_gateway|tags)\b/g, '<span class="text-primary-400 font-bold">$1</span>')
        .replace(/("[^"]*")/g, '<span class="text-emerald-400">$1</span>')
        .replace(/(#.*)/g, '<span class="text-slate-500 italic">$1</span>')
        .replace(/(\b\d+\b)/g, '<span class="text-amber-400">$1</span>')
        .replace(/(\w+)(?=\()/g, '<span class="text-blue-300">$1</span>');

      return (
        <div key={i} className="flex gap-4 group/line">
          <span className="text-slate-700 text-xs w-6 text-right select-none opacity-50 group-hover/line:opacity-100 transition-opacity">{i + 1}</span>
          <span className="text-slate-300" dangerouslySetInnerHTML={{ __html: highlighted }} />
        </div>
      );
    });
  };

  return (
    <div className="font-mono text-sm leading-relaxed overflow-x-auto whitespace-pre">
      {highlightCode(code)}
    </div>
  );
};

const SnippetCard: React.FC<{ snippet: CodeSnippet }> = ({ snippet }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getIcon = () => {
    switch (snippet.category) {
      case 'ML': return <Cpu size={18} className="text-primary-500" />;
      case 'Cloud': return <Cloud size={18} className="text-blue-400" />;
      case 'DevOps': return <Terminal size={18} className="text-emerald-400" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-slate-900/40 rounded-3xl border border-slate-800 overflow-hidden flex flex-col group hover:border-primary-500/30 transition-all duration-500"
    >
      {/* Tab Header */}
      <div className="bg-slate-900/80 px-6 py-4 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-slate-800 rounded-lg">
            {getIcon()}
          </div>
          <div>
            <h3 className="text-sm font-bold text-white leading-tight">{snippet.title}</h3>
            <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">{snippet.language}</p>
          </div>
        </div>
        <button
          onClick={handleCopy}
          className="p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-xl transition-all relative overflow-hidden"
          title="Copy Code"
        >
          {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
        </button>
      </div>

      {/* Code Area */}
      <div className="p-6 bg-[#0a0a0c] flex-grow relative group/code">
        <SyntaxHighlighter code={snippet.code} language={snippet.language} />
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover/code:opacity-100 transition-opacity pointer-events-none" />
      </div>

      {/* Description Footer */}
      <div className="px-6 py-4 bg-slate-900/20 border-t border-slate-800">
        <p className="text-xs text-slate-400 italic">
          {snippet.description}
        </p>
      </div>
    </motion.div>
  );
};

const CodeSnippets: React.FC = () => {
  return (
    <section id="snippets" className="py-24 bg-white dark:bg-slate-950 overflow-hidden relative">
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-primary-600" />
            <h2 className="text-sm font-black text-primary-600 uppercase tracking-[0.3em]">Codebase Insights</h2>
            <span className="h-px w-12 bg-primary-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-6">Interactive Code Snippets</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A curated selection of technical logic implementations spanning Machine Learning, Infrastructure as Code, and CI/CD pipelines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {CODE_SNIPPETS.map((snippet) => (
            <SnippetCard key={snippet.id} snippet={snippet} />
          ))}
        </div>

        {/* Technical Stack Footer Decor */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-wrap justify-center gap-10 opacity-30 grayscale hover:grayscale-0 transition-all duration-700"
        >
          <div className="flex items-center gap-2 text-sm font-black text-slate-400">
            <Code size={20} /> SYNTAX: PYTHON 3.9
          </div>
          <div className="flex items-center gap-2 text-sm font-black text-slate-400">
            <Terminal size={20} /> CLI: TERRAFORM v1.5
          </div>
          <div className="flex items-center gap-2 text-sm font-black text-slate-400">
            <Cpu size={20} /> ARCH: AWS EKS / NVIDIA GRID
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodeSnippets;
