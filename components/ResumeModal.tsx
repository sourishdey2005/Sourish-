import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Transform Google Drive URL into high-compatibility preview URL
  const previewUrl = "https://drive.google.com/file/d/1sB_GXplJ5_LZu3u3AUks8UclmLCVT1b7/preview";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Background click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog Card in Warm Ember/Dark aesthetic */}
      <div className="relative w-full max-w-5xl h-[92vh] flex flex-col rounded-2xl bg-[#140602] border border-orange-500/30 shadow-2xl shadow-orange-950/70 overflow-hidden text-stone-200">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#1b0800] border-b border-orange-500/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#ff3d00] to-[#ff8a1f] flex items-center justify-center text-white font-bold text-xs shadow-xs">
              <FileText size={16} />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                <span>Sourish Dey — Resume (PDF)</span>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <CheckCircle2 size={10} /> Verified
                </span>
              </h3>
              <p className="text-[11px] font-mono text-stone-400">
                Data Science &bull; Machine Learning &bull; KIIT Jul 2023 – Jul 2027
              </p>
            </div>
          </div>

          {/* Quick Actions & Close Button */}
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#ff3d00] to-[#ff8a1f] text-white text-xs font-semibold hover:brightness-110 transition-all shadow-xs"
              title="Open direct Google Drive PDF"
            >
              <Download size={13} />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white border border-white/10 transition-colors"
              title="Open full page in new tab"
            >
              <ExternalLink size={16} />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-stone-400 hover:text-white border border-white/10 transition-colors ml-1"
              aria-label="Close resume viewer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer via Google Drive Iframe with fallback download prompt */}
        <div className="relative flex-1 w-full bg-[#0d0300] overflow-hidden">
          <iframe
            src={previewUrl}
            title="Sourish Dey Resume Preview"
            className="w-full h-full border-0"
            allow="autoplay"
          />

          {/* Floating bottom backup notice if cookies or drive iframe restrictions occur */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/85 backdrop-blur-md border border-orange-500/20 text-xs font-mono text-stone-300 shadow-xl flex items-center gap-3">
            <span>Trouble viewing inside preview?</span>
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ff8a1f] hover:underline font-semibold flex items-center gap-1"
            >
              Open direct Drive PDF &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
