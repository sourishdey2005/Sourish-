import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PUBLICATIONS } from '../constants';

const EditorialResearch: React.FC = () => {
  const papers = PUBLICATIONS.filter(p => p.type === 'publication');
  const patents = PUBLICATIONS.filter(p => p.type === 'patent');

  return (
    <div className="space-y-16">
      {/* Publications */}
      <div>
        <div className="flex items-baseline justify-between border-b border-zinc-200 pb-3 mb-6">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
            [A] Peer-Reviewed Publications & Preprints ({papers.length})
          </span>
        </div>

        <div className="divide-y divide-zinc-100">
          {papers.map((paper, idx) => (
            <div key={idx} className="py-6 group">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                <div className="md:col-span-2">
                  <span className="text-xs font-mono text-zinc-400">
                    P-{String(idx + 1).padStart(2, '0')} &bull; {paper.date}
                  </span>
                  <span className="block text-[11px] font-mono text-blue-600 mt-0.5">
                    {paper.journal || 'Conference'}
                  </span>
                </div>

                <div className="md:col-span-8 space-y-2">
                  <h4 className="text-base font-bold text-zinc-950 group-hover:text-blue-600 transition-colors">
                    {paper.title}
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {paper.abstract}
                  </p>
                </div>

                <div className="md:col-span-2 md:text-right">
                  {paper.link && (
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-900 hover:text-blue-600 transition-colors"
                    >
                      <span>Read paper</span>
                      <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Patents */}
      <div>
        <div className="flex items-baseline justify-between border-b border-zinc-200 pb-3 mb-6">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
            [B] Intellectual Property & Granted / Filed Patents ({patents.length})
          </span>
          <span className="text-xs font-mono text-zinc-400">Indian Patent Office</span>
        </div>

        <div className="divide-y divide-zinc-100">
          {patents.map((pat, idx) => (
            <div key={idx} className="py-6 group">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                <div className="md:col-span-2">
                  <span className="text-xs font-mono text-zinc-400">
                    PAT-{String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="block text-[11px] font-mono text-emerald-600 mt-0.5">
                    {pat.date || 'Filed / Published'}
                  </span>
                </div>

                <div className="md:col-span-8 space-y-2">
                  <h4 className="text-base font-bold text-zinc-950">
                    {pat.title}
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {pat.abstract}
                  </p>
                </div>

                <div className="md:col-span-2 md:text-right text-xs font-mono text-zinc-400">
                  Govt. of India
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditorialResearch;
