
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

interface VisualCertificate {
  id: string;
  url: string;
  title: string;
  date: string;
}

const INITIAL_CERTIFICATES: VisualCertificate[] = [
  {
    id: 'cert-1',
    url: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768373830/Screenshot_20260114_120229_LinkedIn_rfqzrp.jpg',
    title: 'LinkedIn Professional Certification',
    date: 'Jan 2026'
  },
  {
    id: 'cert-2',
    url: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768373830/Screenshot_20260114_120242_LinkedIn_gpjt6j.jpg',
    title: 'LinkedIn Advanced Engineering',
    date: 'Jan 2026'
  },
  {
    id: 'cert-3',
    url: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768373828/image_78f30a48-eb0e-4b61-9983-246a9b7e605e20260114_122402_cvarem.jpg',
    title: 'Technical Milestone Award',
    date: 'Jan 2026'
  },
  {
    id: 'cert-4',
    url: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768373822/image_ae6c90dd-75a8-4f9c-b1a9-80008ab7cdc920260114_122424_a9ubdv.jpg',
    title: 'Engineering Achievement',
    date: 'Jan 2026'
  },
  {
    id: 'cert-5',
    url: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768373594/Screenshot_20260114_120146_LinkedIn_oodrn2.jpg',
    title: 'Cloud Infrastructure Honors',
    date: 'Jan 2026'
  },
  {
    id: 'cert-6',
    url: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768373593/Screenshot_20260114_120131_LinkedIn_l1jrpd.jpg',
    title: 'MLOps Specialization',
    date: 'Jan 2026'
  },
  {
    id: 'cert-7',
    url: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768373593/Screenshot_20260114_120229_LinkedIn_npj28y.jpg',
    title: 'Data Science Excellence',
    date: 'Jan 2026'
  },
  {
    id: 'cert-8',
    url: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768373594/Screenshot_20260114_120210_LinkedIn_tdkezn.jpg',
    title: 'AI Solutions Architect',
    date: 'Jan 2026'
  },
  {
    id: 'cert-9',
    url: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768373820/image_b7073090-6c81-45ec-b3d8-6f8f1d2c64f420260114_122605_lgbbzd.jpg',
    title: 'System Design Mastery',
    date: 'Jan 2026'
  },
  {
    id: 'cert-10',
    url: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768373821/Screenshot_20260114_122546_LinkedIn_b01s3v.jpg',
    title: 'Professional Engineering Lead',
    date: 'Jan 2026'
  },
  {
    id: 'cert-11',
    url: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768374300/bb0ac7e8-0831-4ac6-8c4d-599396414524_fe28hy.jpg',
    title: 'Deep Learning Specialization',
    date: 'Feb 2026'
  },
  {
    id: 'cert-12',
    url: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768374600/072bd8d0-24c0-4060-85f0-d943cd777d0b_efbyyx.jpg',
    title: 'Natural Language Processing',
    date: 'Feb 2026'
  },
  {
    id: 'cert-13',
    url: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768374966/d9cd6d94-a9f5-4214-8e99-63af89c298a1_qavnfu.jpg',
    title: 'TensorFlow Developer Certificate',
    date: 'Feb 2026'
  },
  {
    id: 'cert-14',
    url: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768374974/747c66b3-ba95-4b3e-ac65-f5cda20d6263_m4ewgw.jpg',
    title: 'PyTorch for Deep Learning',
    date: 'Feb 2026'
  },
  {
    id: 'cert-15',
    url: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768375367/a94de537-d9a6-4d17-ab1f-0cd328bb004c_h1hlwr.jpg',
    title: 'Cloud Native Engineering',
    date: 'Feb 2026'
  },
  {
    id: 'cert-16',
    url: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768375365/1835488d-ca6d-4e14-9402-081b8c86e25b_tjjlab.jpg',
    title: 'Kubernetes Administrator (CKA)',
    date: 'Feb 2026'
  },
  {
    id: 'cert-17',
    url: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768375362/b2e9f0b3-37cb-46d8-bd1d-07c374889d14_ijhcg9.jpg',
    title: 'Docker Certified Associate',
    date: 'Feb 2026'
  },
  {
    id: 'cert-18',
    url: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768375523/22212bbd-55e3-497a-8953-861c12407510_judjaw.jpg',
    title: 'Advanced MLOps Systems',
    date: 'Feb 2026'
  },
  {
    id: 'cert-19',
    url: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768375524/4832d3c4-6ba1-4aaa-8577-e9d1dfd2a186_d1t6e9.jpg',
    title: 'Enterprise AI Governance',
    date: 'Feb 2026'
  },
  {
    id: 'cert-20',
    url: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768376475/8b073af5-856d-4f0c-bbe9-11b03b213f36_ggcivy.jpg',
    title: 'Advanced Neural Architectures',
    date: 'March 2026'
  },
  {
    id: 'cert-21',
    url: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768376265/0f547785-bb73-45bb-9f17-e67bf078900f_wo0set.jpg',
    title: 'Generative AI Specialist',
    date: 'March 2026'
  },
  {
    id: 'cert-22',
    url: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768376269/cecb2c7f-b3f8-42c3-b804-835b539cac6b_yalvse.jpg',
    title: 'Cloud Infrastructure Security',
    date: 'March 2026'
  },
  {
    id: 'cert-23',
    url: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768376280/f978da1a-7c72-42cc-8cbd-c97cd85ce853_cw7zfy.jpg',
    title: 'Data Engineering Professional',
    date: 'March 2026'
  },
  {
    id: 'cert-24',
    url: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768376485/eb2a82d6-8e14-4e59-a317-953b3c53aeaa_hp8ps9.jpg',
    title: 'ML Pipeline Optimization',
    date: 'March 2026'
  },
  {
    id: 'cert-25',
    url: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768376497/69aaa0dd-7d04-481c-bd06-ae07a9c58fd7_nlexsd.jpg',
    title: 'Quantum Computing Fundamentals',
    date: 'March 2026'
  },
  {
    id: 'cert-26',
    url: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768377789/fb50e9e9-c1dc-488f-9cd1-4b6c53fce23e_mkt3xh.jpg',
    title: 'Enterprise Architecture Professional',
    date: 'March 2026'
  },
  {
    id: 'cert-27',
    url: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768377763/0b42da04-d96c-4b9f-95e6-78956dcda02b_ajcs3k.jpg',
    title: 'Cloud Governance Mastery',
    date: 'March 2026'
  },
  {
    id: 'cert-28',
    url: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768377760/a048c3e5-0550-4362-9436-13a52c7b13e0_n5c3qf.jpg',
    title: 'Distributed Systems Specialist',
    date: 'March 2026'
  },
  {
    id: 'cert-29',
    url: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768378487/919f92f7-5951-4b7f-b9ca-42fef49b609c_vtdh0z.jpg',
    title: 'Advanced AI Ethics',
    date: 'April 2026'
  },
  {
    id: 'cert-30',
    url: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768378181/e1f1a90c-854f-4cd8-8210-f725a6b6a12a_r9dffl.jpg',
    title: 'Cybersecurity Analyst Professional',
    date: 'April 2026'
  },
  {
    id: 'cert-31',
    url: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768378142/b3adb396-7ebe-4ea2-99f5-7e997da85069_lzijec.jpg',
    title: 'Cloud Automation Architect',
    date: 'April 2026'
  },
  {
    id: 'cert-32',
    url: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768378490/b4c172cd-453d-44cd-8877-d66984c54d90_hwxtlt.jpg',
    title: 'Machine Learning Engineering Lead',
    date: 'April 2026'
  }
];

const CertificatesGallery: React.FC = () => {
  const [certs] = useState<VisualCertificate[]>(INITIAL_CERTIFICATES);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % certs.length);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + certs.length) % certs.length);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <section id="certificates-gallery" className="py-24 bg-white dark:bg-slate-950 overflow-hidden relative border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-primary-600" />
            <h2 className="text-sm font-black text-primary-600 uppercase tracking-[0.3em]">Verified Achievements</h2>
            <span className="h-px w-12 bg-primary-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-6">Digital Credential Gallery</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Visual verification of professional milestones, technical certifications, and academic excellence. Click any image for a detailed view.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {certs.map((cert, index) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedIndex(index)}
                className="group relative h-64 bg-slate-50 dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all cursor-zoom-in"
              >
                <img 
                  src={cert.url} 
                  alt={cert.title} 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
                
                {/* Visual indicator of interactivity */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex justify-between items-end">
                    <div className="flex-1 mr-4">
                      <p className="text-[10px] font-black text-primary-400 uppercase tracking-widest mb-1">{cert.date}</p>
                      <h4 className="text-white font-bold text-sm leading-tight truncate">{cert.title}</h4>
                    </div>
                    <div className="p-2 bg-white/10 backdrop-blur-md text-white rounded-lg">
                      <ZoomIn size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {certs.length === 0 && (
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-full border border-slate-100 dark:border-slate-800">
              <ImageIcon size={14} className="text-slate-400" />
              <span className="text-xs font-bold text-slate-400">Waiting for data transmission...</span>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-slate-950/98 backdrop-blur-2xl flex flex-col items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Header / Close */}
            <div className="absolute top-8 right-8 z-[210]">
              <button 
                onClick={() => setSelectedIndex(null)}
                className="p-3 bg-white/5 hover:bg-white/10 text-white/50 hover:text-white rounded-full transition-all"
              >
                <X size={32} />
              </button>
            </div>

            {/* Navigation Controls */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-12 pointer-events-none">
              <button 
                onClick={handlePrev}
                className="p-4 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all pointer-events-auto backdrop-blur-sm border border-white/10"
                aria-label="Previous Certificate"
              >
                <ChevronLeft size={32} />
              </button>
              <button 
                onClick={handleNext}
                className="p-4 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all pointer-events-auto backdrop-blur-sm border border-white/10"
                aria-label="Next Certificate"
              >
                <ChevronRight size={32} />
              </button>
            </div>

            {/* Image Display */}
            <motion.div 
              key={selectedIndex}
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-5xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={certs[selectedIndex].url} 
                alt={certs[selectedIndex].title}
                className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain border border-white/5"
              />
            </motion.div>

            {/* Pagination dots for quick reference */}
            <div className="absolute bottom-10 flex gap-2 overflow-x-auto max-w-full px-4 scrollbar-hide">
              {certs.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setSelectedIndex(idx); }}
                  className={`w-2 h-2 rounded-full transition-all ${idx === selectedIndex ? 'bg-primary-500 w-8' : 'bg-white/20 hover:bg-white/40'}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificatesGallery;
