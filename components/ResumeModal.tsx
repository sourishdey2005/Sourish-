import React, { useState, useEffect } from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Maximize2, 
  RefreshCw, 
  Sparkles,
  GraduationCap,
  Briefcase,
  Award,
  Layers,
  Phone,
  Mail,
  Linkedin,
  Github,
  Globe
} from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'text'>('preview');
  const [iframeError, setIframeError] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);

  // Extract ID from user's Drive URL
  const driveFileId = "1COO61ckd2xejY17DrjsTEeDYx_w0XhoW";
  
  // Google Drive preview embed URL (standard /preview is universally embeddable)
  const previewEmbedUrl = `https://drive.google.com/file/d/${driveFileId}/preview`;
  // Direct Google Drive download/view link
  const directDriveUrl = `https://drive.google.com/file/d/${driveFileId}/view?usp=sharing`;
  // Alternate Google Docs viewer fallback
  const docsViewerUrl = `https://docs.google.com/viewer?url=https://drive.google.com/uc?id=${driveFileId}&embedded=true`;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setIframeLoading(true);
      setIframeError(false);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-md animate-fadeIn">
      {/* Background click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog Card in Warm Ember/Dark aesthetic */}
      <div className="relative w-full max-w-5xl h-[92vh] flex flex-col rounded-2xl bg-[#120400] border border-orange-500/30 shadow-2xl shadow-orange-950/80 overflow-hidden text-stone-200">
        
        {/* Top Header Bar */}
        <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3.5 bg-[#1a0700] border-b border-orange-500/20 gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#ff3d00] to-[#ff8a1f] flex items-center justify-center text-white font-bold text-sm shadow-md shadow-orange-950/50">
              <FileText size={18} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-white">
                  Sourish Dey — Resume (CV)
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <CheckCircle2 size={10} /> Verified
                </span>
              </div>
              <p className="text-[11px] font-mono text-stone-400">
                Data Science &bull; Machine Learning &bull; KIIT 2023–2027
              </p>
            </div>
          </div>

          {/* Tab Selector & Action Buttons */}
          <div className="flex items-center gap-2">
            {/* View Switcher Tabs */}
            <div className="flex items-center bg-black/40 p-0.5 rounded-lg border border-white/10 text-xs font-mono">
              <button
                onClick={() => setActiveTab('preview')}
                className={`px-3 py-1 rounded-md transition-all ${
                  activeTab === 'preview'
                    ? 'bg-orange-500 text-white font-semibold shadow-xs'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                PDF View
              </button>
              <button
                onClick={() => setActiveTab('text')}
                className={`px-3 py-1 rounded-md transition-all ${
                  activeTab === 'text'
                    ? 'bg-orange-500 text-white font-semibold shadow-xs'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                Live Document
              </button>
            </div>

            {/* Direct Open in Drive Button */}
            <a
              href={directDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#ff3d00] to-[#ff8a1f] text-white text-xs font-semibold hover:brightness-110 shadow-md shadow-orange-950/40 transition-all cursor-pointer"
              title="Open full PDF on Google Drive"
            >
              <Download size={13} />
              <span className="hidden sm:inline">Open Drive PDF</span>
              <ExternalLink size={12} className="opacity-80" />
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-stone-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
              aria-label="Close resume viewer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Body Container */}
        <div className="relative flex-1 w-full bg-[#0a0200] overflow-hidden flex flex-col">
          
          {/* TAB 1: EMBEDDED GOOGLE DRIVE PDF PREVIEW */}
          {activeTab === 'preview' && (
            <div className="relative w-full h-full flex flex-col">
              {/* Notice Banner with Quick Link */}
              <div className="px-4 py-2 bg-orange-950/40 border-b border-orange-500/20 text-[11px] font-mono text-orange-200/90 flex flex-wrap items-center justify-between gap-2">
                <span className="flex items-center gap-1.5">
                  <Sparkles size={12} className="text-orange-400" />
                  Rendering via Google Drive viewer. If Google blocks embedded cookies in your browser:
                </span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveTab('text')}
                    className="text-stone-300 underline hover:text-white transition-colors"
                  >
                    Switch to Live Document &rarr;
                  </button>
                  <a
                    href={directDriveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ff8a1f] font-bold hover:underline inline-flex items-center gap-1"
                  >
                    Direct PDF Tab &rarr;
                  </a>
                </div>
              </div>

              {/* Iframe Viewport */}
              <div className="relative flex-1 w-full h-full bg-[#100401]">
                <iframe
                  src={previewEmbedUrl}
                  title="Sourish Dey Resume PDF Preview"
                  className="w-full h-full border-0"
                  allow="autoplay; encrypted-media"
                  onLoad={() => setIframeLoading(false)}
                  onError={() => setIframeError(true)}
                />

                {/* Floating Bottom Action Bar */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/85 backdrop-blur-md border border-orange-500/30 text-xs font-mono text-stone-200 shadow-2xl flex items-center gap-3">
                  <span>Having browser cookie or viewing restrictions?</span>
                  <a
                    href={directDriveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ff8a1f] font-bold hover:underline flex items-center gap-1"
                  >
                    Open Google Drive Link &rarr;
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: LIVE HI-FI RESUME DOCUMENT (100% Guaranteed Render) */}
          {activeTab === 'text' && (
            <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-8 max-w-4xl mx-auto w-full text-stone-200">
              
              {/* Header Details */}
              <div className="border-b border-orange-500/20 pb-6 text-center space-y-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  SOURISH DEY
                </h1>
                <p className="text-xs sm:text-sm font-mono text-orange-400">
                  Data Science &bull; Machine Learning &bull; Quantitative Analytics
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-stone-300 font-mono pt-2">
                  <a href="mailto:sourish713321@gmail.com" className="hover:text-white flex items-center gap-1">
                    <Mail size={12} /> sourish713321@gmail.com
                  </a>
                  <span>&bull;</span>
                  <a href="tel:+919064648823" className="hover:text-white flex items-center gap-1">
                    <Phone size={12} /> +91 9064648823
                  </a>
                  <span>&bull;</span>
                  <a href="https://www.linkedin.com/in/sourish-dey-20b170206" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                    <Linkedin size={12} /> LinkedIn
                  </a>
                  <span>&bull;</span>
                  <a href="https://github.com/sourishdey2005" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                    <Github size={12} /> GitHub
                  </a>
                  <span>&bull;</span>
                  <a href="https://sourishdeyportfolio.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                    <Globe size={12} /> Portfolio
                  </a>
                </div>
              </div>

              {/* Section 1: Summary */}
              <div className="space-y-2">
                <h2 className="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold border-b border-white/10 pb-1">
                  PROFESSIONAL SUMMARY
                </h2>
                <p className="text-sm text-stone-300 leading-relaxed font-normal">
                  Computer Science undergraduate specializing in data science, machine learning, and analytics engineering. Built Python/SQL ETL pipelines, anomaly-detection and forecasting systems, and RAG tools processing 100K+ records. Achieved 92% transaction-anomaly precision and 94% IoT anomaly-detection accuracy. Reduced query and aggregation latency by 40–45% using Scikit-learn, LangChain, Streamlit, Docker, and CI/CD across analytics and IoT-security projects.
                </p>
              </div>

              {/* Section 2: Education */}
              <div className="space-y-4">
                <h2 className="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold border-b border-white/10 pb-1 flex items-center gap-1.5">
                  <GraduationCap size={14} /> EDUCATION
                </h2>
                
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <h3 className="text-sm font-bold text-white">
                        Kalinga Institute of Industrial Technology (KIIT)
                      </h3>
                      <p className="text-xs text-stone-300">
                        Bachelor of Technology in Computer Science and Engineering
                      </p>
                    </div>
                    <div className="text-right text-xs font-mono text-stone-400">
                      <span>Bhubaneswar, India</span> &bull; <span className="text-orange-300">Jul 2023 – Jul 2027 (Expected)</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pt-2 border-t border-white/5">
                    <div>
                      <h3 className="text-sm font-bold text-white">
                        Hem Sheela Model School
                      </h3>
                      <p className="text-xs text-stone-300">
                        Senior Secondary (CBSE 12th): <strong className="text-white">90.8%</strong> &bull; Secondary (CBSE 10th): <strong className="text-white">98.0%</strong>
                      </p>
                    </div>
                    <div className="text-right text-xs font-mono text-stone-400">
                      <span>Durgapur, West Bengal</span> &bull; <span>2020 – 2023</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: Professional Experience */}
              <div className="space-y-4">
                <h2 className="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold border-b border-white/10 pb-1 flex items-center gap-1.5">
                  <Briefcase size={14} /> EXPERIENCE
                </h2>

                {/* Infosys Springboard */}
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <h3 className="text-sm font-bold text-white">
                        Infosys Springboard
                      </h3>
                      <p className="text-xs font-mono text-orange-300">
                        Data Analytics &amp; Business Intelligence Project Intern
                      </p>
                    </div>
                    <div className="text-xs font-mono text-stone-400">
                      Remote &bull; Feb 2026 – Apr 2026
                    </div>
                  </div>
                  <ul className="text-xs text-stone-300 space-y-1.5 list-disc list-inside">
                    <li>Developed Python and SQL ETL pipelines processing 100K+ records and converted business requirements into reusable, automated data-validation rules.</li>
                    <li>Automated SQL and Power Query reporting and validation, reducing manual effort by 35% and saving 3+ engineering hours weekly.</li>
                    <li>Resolved data discrepancies and pipeline failures through root-cause analysis, documenting solutions for cross-functional business reporting.</li>
                  </ul>
                </div>

                {/* IISER-TVM */}
                <div className="space-y-2 pt-3 border-t border-white/5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <h3 className="text-sm font-bold text-white">
                        Indian Institute of Science Education and Research (IISER-TVM)
                      </h3>
                      <p className="text-xs font-mono text-orange-300">
                        Research Intern – Federated Learning &amp; IoT Security
                      </p>
                    </div>
                    <div className="text-xs font-mono text-stone-400">
                      Thiruvananthapuram, India &bull; Apr 2025 – Jun 2025
                    </div>
                  </div>
                  <ul className="text-xs text-stone-300 space-y-1.5 list-disc list-inside">
                    <li>Engineered distributed Python ETL pipelines for high-frequency IoT telemetry across edge nodes, improving ingestion throughput by 30%.</li>
                    <li>Built unsupervised anomaly-detection models with statistical tests and outlier filters, achieving 94% accuracy for IoT security monitoring.</li>
                    <li>Optimized SQL telemetry aggregation and node-health monitoring for federated learning, reducing multi-node latency by 40%.</li>
                  </ul>
                </div>
              </div>

              {/* Section 4: Projects */}
              <div className="space-y-4">
                <h2 className="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold border-b border-white/10 pb-1 flex items-center gap-1.5">
                  <Layers size={14} /> TECHNICAL PROJECTS
                </h2>

                <div className="space-y-3">
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      EigenPortfolio Terminal &bull; <span className="font-mono text-xs font-normal text-orange-300">Python, Streamlit, NumPy, Pandas, Plotly</span>
                    </h3>
                    <p className="text-xs text-stone-300 mt-1">
                      Covariance denoising platform using Random Matrix Theory (RMT) to filter Marchenko–Pastur noise across 120+ equities. Implemented Max-Sharpe, Min-Variance, and Risk-Parity optimization engines validated against 10,000+ Monte Carlo simulations.
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/5">
                    <h3 className="text-sm font-bold text-white">
                      ArthGyan &bull; <span className="font-mono text-xs font-normal text-orange-300">Python, Scikit-learn, Statsmodels, Streamlit</span>
                    </h3>
                    <p className="text-xs text-stone-300 mt-1">
                      Computed 55+ technical indicators across 50+ equities with interactive dashboards, stationarity tests (ADF/KPSS), tail-risk modeling, and automated performance tracking.
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/5">
                    <h3 className="text-sm font-bold text-white">
                      ArthaDrishti &bull; <span className="font-mono text-xs font-normal text-orange-300">LangChain, FAISS, Python, Streamlit, Scikit-learn</span>
                    </h3>
                    <p className="text-xs text-stone-300 mt-1">
                      Integrated Black–Litterman asset allocation with a FAISS-indexed RAG pipeline, delivering conversational risk analytics and portfolio decompositions with sub-800ms query latency.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 5: Patents & Publications */}
              <div className="space-y-4">
                <h2 className="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold border-b border-white/10 pb-1 flex items-center gap-1.5">
                  <Award size={14} /> PATENTS &amp; PUBLICATIONS
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <span className="font-mono text-orange-400 font-bold block mb-1">5 GRANTED INDIAN PATENTS</span>
                    <ul className="space-y-1 text-stone-300 list-disc list-inside">
                      <li>AI/IoT Robotics for Solar Optimization &amp; Carbon Capture</li>
                      <li>Industrial Monitoring &amp; Predictive Maintenance</li>
                      <li>Precision-Agriculture Drones with Edge Vision</li>
                      <li>ML-Based High-Stress Equipment-Failure Prediction</li>
                      <li>Renewable-Energy Load Balancing &amp; Grid Stabilization</li>
                    </ul>
                  </div>

                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <span className="font-mono text-orange-400 font-bold block mb-1">4 RESEARCH PAPERS</span>
                    <ul className="space-y-1 text-stone-300 list-disc list-inside">
                      <li>Quantitative Analysis &amp; Covariance Denoising across Volatile Equity Regimes</li>
                      <li>Unsupervised Anomaly Detection in High-Frequency Edge IoT Telemetry</li>
                      <li>Low-Latency Financial RAG Architectures with Metric Grounding</li>
                      <li>Intelligent Automation &amp; Scalable Telemetry Pipelines</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Direct Download Link */}
              <div className="pt-6 border-t border-orange-500/20 text-center">
                <a
                  href={directDriveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#ff3d00] to-[#ff8a1f] text-white text-xs font-semibold hover:brightness-110 shadow-lg shadow-orange-950/60"
                >
                  <Download size={14} />
                  <span>Download Original PDF from Google Drive</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
