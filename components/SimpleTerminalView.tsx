import React from 'react';
import { TerminalSquare } from 'lucide-react';
import Terminal from './Terminal';

const SimpleTerminalView: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <TerminalSquare className="text-indigo-600" size={24} />
            Interactive Linux Shell
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Simulated bash environment. Try typing <code className="bg-slate-100 px-1.5 py-0.5 rounded text-indigo-600 font-mono text-xs">help</code>, <code className="bg-slate-100 px-1.5 py-0.5 rounded text-indigo-600 font-mono text-xs">ls</code>, <code className="bg-slate-100 px-1.5 py-0.5 rounded text-indigo-600 font-mono text-xs">cat cv.txt</code>, or <code className="bg-slate-100 px-1.5 py-0.5 rounded text-indigo-600 font-mono text-xs">projects</code>.
          </p>
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden border border-slate-300 shadow-sm">
        <Terminal />
      </div>
    </div>
  );
};

export default SimpleTerminalView;
