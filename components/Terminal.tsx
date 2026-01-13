
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, Maximize2, Minimize2, Circle, Command } from 'lucide-react';

interface TerminalLine {
  type: 'input' | 'output' | 'system' | 'error';
  content: string | React.ReactNode;
}

const VirtualFS: Record<string, { type: 'file' | 'dir'; content?: string; children?: string[] }> = {
  '/': { type: 'dir', children: ['home', 'bin', 'etc', 'var', 'tmp', 'usr', 'opt'] },
  '/home': { type: 'dir', children: ['sourish'] },
  '/home/sourish': { type: 'dir', children: ['projects', 'cv.txt', 'readme.md', 'identity.json', '.ssh', '.bashrc'] },
  '/home/sourish/projects': { type: 'dir', children: ['face-mesh-x', 'infra-core', 'quant-vault'] },
  '/home/sourish/readme.md': { type: 'file', content: '# Welcome\nThis is a specialized Linux environment showcasing my MLOps capability.' },
  '/home/sourish/cv.txt': { type: 'file', content: 'Sourish Dey - MLOps & Cloud Engineer\nLocation: Bhubaneswar, Odisha\nContact: sourish713321@gmail.com' },
  '/home/sourish/identity.json': { type: 'file', content: '{\n  "name": "Sourish Dey",\n  "role": "Engineer",\n  "specialty": "Distributed Systems",\n  "status": "Innovating"\n}' },
  '/home/sourish/.bashrc': { type: 'file', content: 'alias k="kubectl"\nalias ll="ls -la"\nexport PS1="\\u@\\h:\\w\\$ "' },
  '/etc': { type: 'dir', children: ['hostname', 'os-release', 'hosts'] },
  '/etc/hostname': { type: 'file', content: 'portfolio-vm' },
  '/etc/os-release': { type: 'file', content: 'PRETTY_NAME="Sourish-OS 2.5.1 LTS"\nNAME="Sourish-OS"\nVERSION_ID="2.5.1"' },
};

const Terminal: React.FC = () => {
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: 'system', content: 'Sourish-OS kernel 5.15.0-generic x86_64' },
    { type: 'system', content: 'Login successful: session started at ' + new Date().toLocaleString() },
    { type: 'system', content: 'Type "help" for a list of available commands.' },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentDir, setCurrentDir] = useState('/home/sourish');
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isTyping]);

  const addLine = (line: TerminalLine) => setHistory(prev => [...prev, line]);

  const handleCommand = async (cmd: string) => {
    const input = cmd.trim();
    if (!input) return;

    addLine({ type: 'input', content: input });
    setCommandHistory(prev => [input, ...prev]);
    setHistoryIndex(-1);
    setInputValue('');
    setIsTyping(true);

    const args = input.split(/\s+/);
    const baseCmd = args[0].toLowerCase();
    const commandParams = args.slice(1);

    // Simulated latency
    await new Promise(resolve => setTimeout(resolve, Math.random() * 200 + 100));

    switch (baseCmd) {
      case 'help':
        addLine({ 
          type: 'output', 
          content: (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-1 text-cyan-400 text-[11px]">
              <div><span className="text-amber-400 font-bold">ls/cd/pwd</span></div>
              <div><span className="text-amber-400 font-bold">cat/grep/find</span></div>
              <div><span className="text-amber-400 font-bold">mkdir/touch/rm</span></div>
              <div><span className="text-amber-400 font-bold">echo/sudo/man</span></div>
              <div><span className="text-amber-400 font-bold">df/free/uptime</span></div>
              <div><span className="text-amber-400 font-bold">top/ps/history</span></div>
              <div><span className="text-amber-400 font-bold">ping/curl/ssh</span></div>
              <div><span className="text-amber-400 font-bold">kubectl/docker</span></div>
              <div><span className="text-amber-400 font-bold">terraform/exit</span></div>
              <div><span className="text-amber-400 font-bold">reboot/chmod</span></div>
            </div>
          )
        });
        break;

      case 'ls':
        const dir = VirtualFS[currentDir];
        if (dir && dir.children) {
          const formatted = dir.children.map(child => {
            const path = currentDir === '/' ? `/${child}` : `${currentDir}/${child}`;
            const isDir = VirtualFS[path]?.type === 'dir';
            return <span key={child} className={isDir ? 'text-blue-400 font-bold' : 'text-slate-100'}>{child}  </span>;
          });
          addLine({ type: 'output', content: <div className="flex flex-wrap gap-2">{formatted}</div> });
        }
        break;

      case 'pwd':
        addLine({ type: 'output', content: currentDir });
        break;

      case 'whoami':
        addLine({ type: 'output', content: 'sourish' });
        break;

      case 'date':
        addLine({ type: 'output', content: new Date().toString() });
        break;

      case 'uname':
        if (commandParams[0] === '-a') {
          addLine({ type: 'output', content: 'Linux portfolio-vm 5.15.0-101-generic #111-Ubuntu SMP Tue Feb 11 19:02:35 UTC 2026 x86_64 x86_64 x86_64 GNU/Linux' });
        } else {
          addLine({ type: 'output', content: 'Linux' });
        }
        break;

      case 'cd':
        const target = commandParams[0];
        if (!target || target === '~') {
          setCurrentDir('/home/sourish');
        } else if (target === '..') {
          const parts = currentDir.split('/').filter(Boolean);
          parts.pop();
          setCurrentDir('/' + parts.join('/'));
        } else {
          const newPath = currentDir === '/' ? `/${target}` : `${currentDir}/${target}`;
          if (VirtualFS[newPath] && VirtualFS[newPath].type === 'dir') {
            setCurrentDir(newPath);
          } else {
            addLine({ type: 'error', content: `cd: no such directory: ${target}` });
          }
        }
        break;

      case 'cat':
        const file = commandParams[0];
        if (!file) {
          addLine({ type: 'error', content: 'cat: missing operand' });
        } else {
          const filePath = currentDir === '/' ? `/${file}` : `${currentDir}/${file}`;
          if (VirtualFS[filePath] && VirtualFS[filePath].type === 'file') {
            addLine({ type: 'output', content: <pre className="whitespace-pre-wrap text-emerald-400">{VirtualFS[filePath].content}</pre> });
          } else {
            addLine({ type: 'error', content: `cat: ${file}: No such file` });
          }
        }
        break;

      case 'echo':
        addLine({ type: 'output', content: commandParams.join(' ') });
        break;

      case 'mkdir':
        if (!commandParams[0]) addLine({ type: 'error', content: 'mkdir: missing operand' });
        else addLine({ type: 'output', content: `mkdir: created directory '${commandParams[0]}'` });
        break;

      case 'touch':
        if (!commandParams[0]) addLine({ type: 'error', content: 'touch: missing operand' });
        else addLine({ type: 'output', content: `touch: updated timestamp for '${commandParams[0]}'` });
        break;

      case 'rm':
        if (!commandParams[0]) addLine({ type: 'error', content: 'rm: missing operand' });
        else if (commandParams[0] === '/' || commandParams[0] === '/*') addLine({ type: 'error', content: 'rm: it is dangerous to operate recursively on "/"' });
        else addLine({ type: 'output', content: `rm: removed '${commandParams[0]}'` });
        break;

      case 'sudo':
        addLine({ type: 'error', content: '[sudo] password for sourish: \nsourish is not in the sudoers file. This incident will be reported.' });
        break;

      case 'man':
        const manTarget = commandParams[0];
        if (!manTarget) addLine({ type: 'output', content: 'What manual page do you want?' });
        else addLine({ type: 'output', content: (
          <div className="text-xs">
            <div className="font-bold underline text-white">{manTarget.toUpperCase()}(1)</div>
            <div className="mt-2 text-slate-400">NAME: {manTarget} - system utility for portfolio audits</div>
            <div className="mt-1 text-slate-300 italic">SYNOPSIS: {manTarget} [OPTION]... [FILE]...</div>
            <div className="mt-2 text-slate-400">DESCRIPTION: This is a virtualized command part of the Sourish-OS ecosystem. Used primarily for showcasing technical depth and interactive CLI design.</div>
          </div>
        )});
        break;

      case 'grep':
        if (!commandParams[1]) addLine({ type: 'error', content: 'Usage: grep [PATTERN] [FILE]' });
        else {
          const filePath = currentDir === '/' ? `/${commandParams[1]}` : `${currentDir}/${commandParams[1]}`;
          if (VirtualFS[filePath]) {
            const content = VirtualFS[filePath].content || '';
            const pattern = commandParams[0];
            const lines = content.split('\n');
            const matches = lines.filter(l => l.includes(pattern));
            if (matches.length) addLine({ type: 'output', content: matches.map((m, i) => <div key={i}>{m.replace(pattern, `__MATCH__`).split('__MATCH__').map((p, j, arr) => <span key={j}>{p}{j < arr.length - 1 && <span className="text-red-500 font-bold">{pattern}</span>}</span>)}</div>) });
            else addLine({ type: 'output', content: '' });
          } else addLine({ type: 'error', content: `grep: ${commandParams[1]}: No such file` });
        }
        break;

      case 'find':
        addLine({ type: 'output', content: Object.keys(VirtualFS).filter(k => k.includes(commandParams[0] || '')).join('\n') });
        break;

      case 'history':
        addLine({ type: 'output', content: commandHistory.slice().reverse().map((h, i) => <div key={i}>{i+1}  {h}</div>) });
        break;

      case 'df':
        addLine({ type: 'output', content: (
          <div className="font-mono text-xs">
            <div>Filesystem     Size  Used  Avail Use% Mounted on</div>
            <div>/dev/sda1       80G   12G    68G  15% /</div>
            <div>tmpfs           4G     0     4G   0% /dev/shm</div>
            <div>/dev/nvme0n1   500G  124G   376G  25% /home/sourish/storage</div>
          </div>
        )});
        break;

      case 'free':
        addLine({ type: 'output', content: (
          <div className="font-mono text-xs">
            <div>              total        used        free      shared  buff/cache   available</div>
            <div>Mem:           16Gi       4.2Gi       8.1Gi       120Mi       3.7Gi        11Gi</div>
            <div>Swap:          2.0Gi          0B       2.0Gi</div>
          </div>
        )});
        break;

      case 'uptime':
        addLine({ type: 'output', content: `${new Date().toLocaleTimeString()} up 42 days, 13:37, 1 user, load average: 0.08, 0.12, 0.15` });
        break;

      case 'ps':
        addLine({ type: 'output', content: (
          <div className="font-mono text-xs">
            <div>PID TTY          TIME CMD</div>
            <div>  1 ?        00:00:04 systemd</div>
            <div>512 pts/0    00:00:00 zsh</div>
            <div>1024 pts/0   00:00:12 ml-engine-daemon</div>
            <div>2048 pts/0   00:00:01 ps</div>
          </div>
        )});
        break;

      case 'ping':
        const host = commandParams[0] || 'google.com';
        addLine({ type: 'output', content: `PING ${host} (142.250.190.46) 56(84) bytes of data.` });
        for(let i=1; i<=3; i++) {
          await new Promise(r => setTimeout(r, 600));
          addLine({ type: 'output', content: `64 bytes from ${host}: icmp_seq=${i} ttl=117 time=${(Math.random()*20+10).toFixed(2)} ms` });
        }
        break;

      case 'curl':
        if (!commandParams[0]) addLine({ type: 'error', content: 'curl: no URL specified' });
        else {
          addLine({ type: 'system', content: `Fetching ${commandParams[0]}...` });
          await new Promise(r => setTimeout(r, 1000));
          addLine({ type: 'output', content: `HTTP/1.1 200 OK\nContent-Type: application/json\n\n{ "status": "connected", "payload": "Data from Sourish's API" }` });
        }
        break;

      case 'ssh':
        if (!commandParams[0]) addLine({ type: 'error', content: 'ssh: missing destination' });
        else addLine({ type: 'error', content: `ssh: connect to host ${commandParams[0]} port 22: Connection refused` });
        break;

      case 'chmod':
        if (!commandParams[1]) addLine({ type: 'error', content: 'chmod: missing operand' });
        else addLine({ type: 'output', content: `chmod: changed permissions of '${commandParams[1]}' to ${commandParams[0]}` });
        break;

      case 'reboot':
      case 'shutdown':
        addLine({ type: 'system', content: 'Broadcast message from root@portfolio-vm: System is going down for reboot NOW!' });
        await new Promise(r => setTimeout(r, 2000));
        setHistory([{ type: 'system', content: 'Sourish-OS kernel 5.15.0-generic x86_64\nWelcome back.' }]);
        break;

      case 'kubectl':
        if (commandParams[0] === 'get' && commandParams[1] === 'pods') {
          addLine({ type: 'output', content: (
            <div className="font-mono text-xs leading-relaxed">
              <div className="text-slate-500 mb-1">NAME                         READY   STATUS    RESTARTS   AGE</div>
              <div>inference-api-78bf6       1/1     <span className="text-green-400">Running</span>   0          4d2h</div>
              <div>training-worker-0         1/1     <span className="text-green-400">Running</span>   0          12m</div>
              <div>redis-master-cluster      1/1     <span className="text-green-400">Running</span>   0          92d</div>
              <div className="text-amber-400 mt-1 animate-pulse">Pending: hpa-v2-scaling-node...</div>
            </div>
          )});
        } else {
          addLine({ type: 'output', content: 'Usage: kubectl get pods' });
        }
        break;

      case 'docker':
        if (commandParams[0] === 'ps') {
          addLine({ type: 'output', content: (
            <div className="font-mono text-[10px] md:text-xs">
              <div className="text-slate-500 mb-1">CONTAINER ID   IMAGE               COMMAND                  STATUS          NAMES</div>
              <div>e3f9a2b1c8d4   sourish/ml-core     "python main.py"         Up 2 hours      ml_instance_1</div>
              <div>7a8b9c0d1e2f   nginx:latest        "/docker-entrypoint…"   Up 45 minutes   ingress_lb</div>
              <div>4d5e6f7g8h9i   postgres:14         "docker-entrypoint…"    Up 10 days      primary_db</div>
            </div>
          )});
        } else {
          addLine({ type: 'output', content: 'Usage: docker ps' });
        }
        break;

      case 'terraform':
        if (commandParams[0] === 'apply') {
          addLine({ type: 'system', content: 'Initializing Terraform plan for AWS us-east-1...' });
          await new Promise(r => setTimeout(r, 600));
          addLine({ type: 'output', content: (
            <div className="text-xs space-y-1">
              <div className="text-green-400 font-bold">Plan: 4 to add, 0 to change, 0 to destroy.</div>
              <div className="text-slate-400">Creating aws_instance.gpu_compute... [DONE]</div>
              <div className="text-slate-400">Creating aws_vpc.main... [DONE]</div>
              <div className="text-slate-400">Creating aws_s3_bucket.model_weights... [DONE]</div>
              <div className="text-green-400 font-black mt-2">Outputs: cluster_endpoint = "k8s.sourishdey.com"</div>
            </div>
          )});
        } else {
          addLine({ type: 'output', content: 'Usage: terraform apply' });
        }
        break;

      case 'top':
        addLine({ type: 'output', content: (
          <div className="font-mono text-xs">
            <div className="text-white bg-slate-800 px-2 py-0.5 mb-2">Portfolio-VM TOP - {new Date().toLocaleTimeString()}</div>
            <div className="grid grid-cols-4 gap-2 text-slate-400 mb-2">
              <span>CPU: 42.1%</span>
              <span>MEM: 2.1G/8G</span>
              <span>SWP: 0.1G</span>
              <span>UP: 4:21:05</span>
            </div>
            <div className="text-slate-500 border-b border-slate-800 pb-1 mb-1">PID  USER   PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND</div>
            <div className="flex justify-between"><span>1024 root   20   0  12.4g   1.2g  84224 S  24.2   8.5   0:45.12 ml_engine</span></div>
            <div className="flex justify-between"><span>2048 sourish 20   0  2452M   412M  24124 S   8.4   4.2   1:12.04 node_worker</span></div>
            <div className="flex justify-between"><span>512  www-data 20   0   412M    24M   8424 S   1.2   0.5   0:02.15 nginx</span></div>
          </div>
        )});
        break;

      case 'clear':
        setHistory([]);
        break;

      case 'exit':
        addLine({ type: 'system', content: 'Logout requested. Restarting session...' });
        await new Promise(r => setTimeout(r, 1000));
        setHistory([{ type: 'system', content: 'Session restarted.' }]);
        break;

      default:
        addLine({ type: 'error', content: `sh: command not found: ${baseCmd}` });
    }
    setIsTyping(false);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(inputValue);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const nextIdx = historyIndex + 1;
        setHistoryIndex(nextIdx);
        setInputValue(commandHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputValue(commandHistory[nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputValue('');
      }
    }
  };

  const focusInput = () => inputRef.current?.focus();

  return (
    <section id="terminal" className="py-24 bg-white dark:bg-slate-950 overflow-hidden relative border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
             <div className="p-2 bg-slate-900 dark:bg-primary-600 rounded-lg text-white">
               <Command size={20} />
             </div>
             <h2 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-[0.3em]">Virtual Environment</h2>
          </div>
          <h2 className="text-4xl font-heading font-bold text-slate-900 dark:text-white">Command Center</h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm max-w-lg mx-auto leading-relaxed">
            An interactive Linux shell allowing you to audit my infrastructure logs and file systems.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#0c0c0c] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden group"
          onClick={focusInput}
        >
          {/* Terminal Header */}
          <div className="bg-[#1a1a1a] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex gap-2">
              <Circle size={10} fill="#ff5f56" stroke="none" />
              <Circle size={10} fill="#ffbd2e" stroke="none" />
              <Circle size={10} fill="#27c93f" stroke="none" />
            </div>
            <div className="text-[10px] font-mono text-slate-500 font-bold flex items-center gap-2">
              <TerminalIcon size={12} className="opacity-50" /> sourish@portfolio: {currentDir.replace('/home/sourish', '~')}
            </div>
            <div className="flex gap-3 text-slate-600">
              <Minimize2 size={12} />
              <Maximize2 size={12} />
            </div>
          </div>

          {/* Terminal Content */}
          <div 
            ref={scrollRef}
            className="h-[450px] overflow-y-auto p-6 font-mono text-sm scrollbar-thin scrollbar-thumb-slate-800 selection:bg-primary-500/30"
          >
            <AnimatePresence initial={false}>
              {history.map((line, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.1 }}
                  className="mb-2"
                >
                  {line.type === 'input' ? (
                    <div className="flex gap-3">
                      <span className="text-emerald-500 font-bold whitespace-nowrap">sourish@portfolio<span className="text-slate-500">:</span><span className="text-blue-400">{currentDir.replace('/home/sourish', '~')}</span><span className="text-slate-500">$</span></span>
                      <span className="text-slate-100">{line.content}</span>
                    </div>
                  ) : line.type === 'system' ? (
                    <div className="text-slate-500 italic opacity-80 select-none"># {line.content}</div>
                  ) : line.type === 'error' ? (
                    <div className="text-red-400 pl-4 border-l border-red-900/50 py-1 font-semibold whitespace-pre-wrap">
                      {line.content}
                    </div>
                  ) : (
                    <div className="text-slate-300 pl-4 border-l border-slate-800/50 ml-2 py-1 leading-relaxed whitespace-pre-wrap">
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
                className="text-slate-600 text-[10px] italic ml-4 mt-2"
              >
                Accessing storage clusters...
              </motion.div>
            )}

            <div className="flex gap-3 mt-4 group">
              <span className="text-emerald-500 font-bold whitespace-nowrap">
                sourish@portfolio<span className="text-slate-500">:</span><span className="text-blue-400">{currentDir.replace('/home/sourish', '~')}</span><span className="text-slate-500">$</span>
              </span>
              <div className="relative flex-grow">
                <input
                  ref={inputRef}
                  type="text"
                  autoFocus
                  className="bg-transparent border-none outline-none text-slate-100 w-full p-0 m-0 caret-primary-400"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={onKeyDown}
                  spellCheck={false}
                  autoComplete="off"
                />
              </div>
            </div>
          </div>

          <div className="bg-[#111] px-6 py-2 border-t border-slate-800 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="text-[9px] text-emerald-500 font-black uppercase tracking-widest flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> SSH: ESTABLISHED
              </span>
              <span className="text-[9px] text-slate-600 font-mono hidden sm:inline">TTY: PTS/0</span>
            </div>
            <span className="text-[9px] text-slate-600 font-mono uppercase tracking-tighter">Sourish-Kernel-v2.5.1-LTS</span>
          </div>
        </motion.div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {['ls -la', 'man top', 'grep sourish cv.txt', 'ping google.com', 'df -h', 'uptime'].map(tip => (
            <button
              key={tip}
              onClick={() => {
                setInputValue(tip);
                focusInput();
              }}
              className="px-3 py-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-[10px] font-mono text-slate-500 hover:border-primary-500 hover:text-primary-500 transition-all"
            >
              {tip}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Terminal;
