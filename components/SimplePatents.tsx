import React, { useState } from 'react';
import { ShieldCheck, ZoomIn, X } from 'lucide-react';
import { PUBLICATIONS } from '../constants';

const SimplePatents: React.FC = () => {
  const patents = PUBLICATIONS.filter(p => p.type === 'patent');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-100 pb-4">
        <h2 className="text-2xl font-bold text-slate-900">Intellectual Property & Patents</h2>
        <p className="text-sm text-slate-500 mt-1">
          Filed utility and design patents protecting novel hardware, distributed energy systems, and industrial robotics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {patents.map((pat, idx) => (
          <div 
            key={idx}
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider bg-amber-50 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                  <ShieldCheck size={12} /> {pat.date || 'Patent Filed'}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {pat.journal}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                {pat.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {pat.abstract}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-medium">
                Jurisdiction: Indian Patent Office
              </span>
              {pat.image && (
                <button
                  onClick={() => setSelectedImage(pat.image!)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 hover:text-amber-800 cursor-pointer"
                >
                  <ZoomIn size={13} /> View Certificate
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Simple Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="bg-white p-4 rounded-2xl max-w-2xl w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700"
            >
              <X size={18} />
            </button>
            <img 
              src={selectedImage} 
              alt="Patent Document" 
              className="w-full h-auto rounded-xl border border-slate-200 max-h-[75vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SimplePatents;
