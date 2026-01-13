
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, Maximize2, Minimize2, Circle } from 'lucide-react';

interface TerminalLine {
  type: 'input' | 'output' | 'system';
  content: string | React.ReactNode;
}

const Terminal: React.FC = () => {
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: 'system', content: 'Welcome to Sourish-OS v2.4.0-stable (LTS)' },
    { type: 'system', content: 'Type "help" to see available commands.' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = async (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    const newHistory = [...history, { type: 'input', content: cmd } as TerminalLine];
    
    setHistory(newHistory);
    setInputValue('');
    setIsTyping(true);

    // Simulated delay for "processing"
    await new Promise(resolve => setTimeout(resolve, 300));

    switch (cleanCmd) {
      case 'help':
        setHistory(prev => [...prev, { 
          type: 'output', 
          content: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-cyan-400">
              <div><span className="text-amber-400 font-bold">ls</span> - List projects</div>
              <div><span className="text-amber-400 font-bold">whoami</span> - Identity audit</div>
              <div><span className="text-amber-400 font-bold">kubectl get pods</span> - Cluster status</div>
              <div><span className="text-amber-400 font-bold">terraform apply</span> - Provision infra</div>
              <div><span className="text-amber-400 font-bold">clear</span> - Purge buffer</div>
              <div><span className="text-amber-400 font-bold">exit</span> - Close session</div>
            </div>
          ) 
        }]);
        break;

      case 'ls':
        setHistory(prev => [...prev, { 
          type: 'output', 
          content: 'icici-stock-analysis/  f1-data-viz/  uipath-aws-suite/  uber-analytics-platform/  facemesh-x/  bioinformatics-dl/' 
        }]);
        break;

      case 'whoami':
        setHistory(prev => [...prev, { 
          type: 'output', 
          content: 'user: sourish_dey | role: mlops_engineer | status: seeking_innovation' 
        }]);
        break;

      case 'kubectl get pods':
        setHistory(prev => [...prev, { 
          type: 'output', 
          content: (
            <div className="font-mono text-xs leading-relaxed">
              <div className="text-slate-500 mb-1">NAME                         READY   STATUS    RESTARTS   AGE</div>
              <div>ml-inference-engine-v1       1/1     <span className="text-green-400">Running</span>   0          42d</div>
              <div>cloud-ingress-controller     1/1     <span className="text-green-400">Running</span>   0          12h</div>
              <div>redis-cache-cluster-0        1/1     <span className="text-green-400">Running</span>   0          5d</div>
              <div>data-sync-worker-7bf4       1/1     <span className="text-green-400">Running</span>   0          3h</div>
              <div className="text-amber-400 mt-1">Warning: hpa-controller-v2 is scaling...</div>
            </div>
          )
        }]);
        break;

      case 'terraform apply':
        setIsTyping(true);
        setHistory(prev => [...prev, { type: 'system', content: 'Initializing Terraform plan...' }]);
        await new Promise(r => setTimeout(r, 800));
        setHistory(prev => [...prev, { 
          type: 'output', 
          content: (
            <div className="text-xs">
              <div className="text-green-400 mb-2">Plan: 3 to add, 0 to change, 0 to destroy.</div>
              <div className="text-slate-400">aws_instance.ml_node: Creating...</div>
              <div className="text-slate-400">aws_s3_bucket.data_lake: Creating...</div>
              <div className="text-slate-400">aws_security_group.ingress: Creating...</div>
            </div>
          )
        }]);
        await new Promise(r => setTimeout(r, 1200));
        setHistory(prev => [...prev, { type: 'system', content: 'Apply complete! Resources: 3 added, 0 changed, 0 destroyed.' }]);
        break;

      case 'clear':
        setHistory([]);
        break;

      case '':
        break;

      default:
        setHistory(prev => [...prev, { type: 'output', content: `sh: command not found: ${cleanCmd}` }]);
    }
    setIsTyping(false);
  };

  const focusInput = () => inputRef.current?.focus();

  return (
    <section id="terminal" className="py-24 bg-slate-50 dark:bg-slate-900/30 overflow-hidden relative border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
             <div className="p-2 bg-slate-900 rounded-lg text-white">
               <TerminalIcon size={20} />
             </div>
             <h2 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-[0.3em]">Technical Interface</h2>
          </div>
          <h2 className="text-4xl font-heading font-bold text-slate-900 dark:text-white">Virtual Command Center</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden group"
          onClick={focusInput}
        >
          {/* Terminal Header */}
          <div className="bg-slate-900/80 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex gap-2">
              <Circle size={12} fill="#ff5f56" stroke="none" />
              <Circle size={12} fill="#ffbd2e" stroke="none" />
              <Circle size={12} fill="#27c93f" stroke="none" />
            </div>
            <div className="text-[10px] font-mono text-slate-500 font-bold flex items-center gap-2">
              <span className="opacity-50">SSH</span> sourish@portfolio ~ zsh
            </div>
            <div className="flex gap-3 text-slate-600">
              <Minimize2 size={14} />
              <Maximize2 size={14} />
            </div>
          </div>

          {/* Terminal Content */}
          <div 
            ref={scrollRef}
            className="h-[400px] overflow-y-auto p-6 font-mono text-sm scrollbar-thin scrollbar-thumb-slate-800"
          >
            <AnimatePresence>
              {history.map((line, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="mb-2"
                >
                  {line.type === 'input' ? (
                    <div className="flex gap-3">
                      <span className="text-green-400 font-bold">sourish@portfolio:~$</span>
                      <span className="text-slate-100">{line.content}</span>
                    </div>
                  ) : line.type === 'system' ? (
                    <div className="text-slate-500 italic"># {line.content}</div>
                  ) : (
                    <div className="text-slate-300 pl-4 border-l border-slate-800 ml-2 py-1">
                      {line.content}
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {isTyping && (
              <motion.div 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-slate-500 text-xs italic ml-4"
              >
                Processing kernel instructions...
              </motion.div>
            )}

            <div className="flex gap-3 mt-4">
              <span className="text-green-400 font-bold whitespace-nowrap">sourish@portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                autoFocus
                className="bg-transparent border-none outline-none text-slate-100 w-full p-0 m-0 caret-primary-500"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleCommand(inputValue);
                }}
                spellCheck={false}
              />
            </div>
          </div>

          <div className="bg-slate-900/40 px-6 py-2 border-t border-slate-800 flex justify-between items-center">
            <span className="text-[9px] text-slate-600 font-black uppercase tracking-widest">Session: Active</span>
            <span className="text-[9px] text-slate-600 font-mono">UTF-8 • Linux/AMD64</span>
          </div>
        </motion.div>

        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">
            Try: <code className="text-primary-500 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">kubectl get pods</code> or <code className="text-primary-500 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">terraform apply</code>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Terminal;
