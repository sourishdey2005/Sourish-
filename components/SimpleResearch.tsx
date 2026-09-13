import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PUBLICATIONS } from '../constants';

const SimpleResearch: React.FC = () => {
  const papers = PUBLICATIONS.filter(p => p.type === 'publication');

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-100 pb-4">
        <h2 className="text-2xl font-bold text-slate-900">Scientific Research & Papers</h2>
        <p className="text-sm text-slate-500 mt-1">
          Peer-reviewed research and preprint publications spanning IoT, AI architectures, and distributed systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {papers.map((paper, idx) => (
          <div 
            key={idx}
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-2.5 py-0.5 rounded-md">
                  {paper.journal || 'Research Publication'}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {paper.date}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                {paper.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed line-clamp-4 mb-4">
                {paper.abstract}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400 italic">
                {paper.journal}
              </span>
              {paper.link && (
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                >
                  Read Paper <ArrowUpRight size={13} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleResearch;
