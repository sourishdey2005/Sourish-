import React from 'react';
import { FileText, ArrowUpRight } from 'lucide-react';

const RESEARCH_PAPERS = [
  {
    title: "FedTrust-GNN: Federated Learning with Blockchain Trust & Graph Neural Networks for Decentralized Modeling",
    journal: "Nat. Sci. & Appl. Tech.",
    date: "Sep 2026"
  },
  {
    title: "HyperNova++: A Novel Adaptive Activation Function for Neural Learning on Nonlinear Decision Manifolds",
    journal: "IJLTEMAS",
    date: "Jan 2026"
  },
  {
    title: "Urban Traffic Management: IoT and Computer Vision for Urban Traffic Management",
    journal: "IJFMR",
    date: "Feb 2025"
  },
  {
    title: "Smart Breathe: IoT-Integrated Community Air Purification System for Urban and Industrial Areas",
    journal: "IJFMR",
    date: "Dec 2024"
  },
  {
    title: "Nuclear Fusion Optimization: Quantum Computing for Nuclear Fusion: Advancing Simulation and Optimization",
    journal: "IJFMR",
    date: "Dec 2024"
  }
];

const EditorialPublications: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {RESEARCH_PAPERS.map((paper, idx) => (
        <article
          key={paper.title}
          className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:border-[#ff4d00]/35 hover:bg-[#100502] transition-colors duration-300 p-5 sm:p-6 flex flex-col"
        >
          <div className="flex items-start justify-between gap-3 mb-3">
            <span className="font-display text-2xl text-white/25 leading-none group-hover:text-[#ff4d00]/70 transition-colors">
              {String(idx + 1).padStart(2, '0')}
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#ff4d00]/10 border border-[#ff4d00]/25 font-condensed text-[9px] uppercase tracking-[0.16em] text-[#ff8a3d]">
              <FileText size={9} /> Peer-reviewed
            </span>
          </div>
          <h4 className="text-sm font-medium text-stone-200 leading-snug group-hover:text-white transition-colors">
            {paper.title}
          </h4>
          <div className="mt-auto pt-4 flex items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-condensed text-[10px] uppercase tracking-[0.16em] text-[#ff8a3d]/85 px-2 py-0.5 rounded bg-[#ff4d00]/[0.07] border border-[#ff4d00]/20">
                {paper.journal}
              </span>
              <span className="font-condensed text-[10px] uppercase tracking-[0.16em] text-stone-500">
                {paper.date}
              </span>
            </div>
            <ArrowUpRight size={13} className="text-stone-700 group-hover:text-[#ff6a1f] transition-colors shrink-0" />
          </div>
        </article>
      ))}
    </div>
  );
};

export default EditorialPublications;
