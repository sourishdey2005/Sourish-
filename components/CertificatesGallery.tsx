
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, Plus, X, Award, ExternalLink, ZoomIn } from 'lucide-react';

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
  }
];

const CertificatesGallery: React.FC = () => {
  const [certs, setCerts] = useState<VisualCertificate[]>(INITIAL_CERTIFICATES);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newCerts: VisualCertificate[] = Array.from(files).map((file) => {
        const f = file as File;
        return {
          id: Math.random().toString(36).substr(2, 9),
          url: URL.createObjectURL(f),
          title: f.name.split('.')[0].replace(/[-_]/g, ' '),
          date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
        };
      });
      setCerts((prev) => [...newCerts, ...prev]);
    }
  };

  const removeCert = (id: string) => {
    setCerts((prev) => prev.filter((c) => c.id !== id));
  };

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
            Visual verification of professional milestones, technical certifications, and academic excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Upload Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => fileInputRef.current?.click()}
            className="relative h-64 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-[2rem] flex flex-col items-center justify-center cursor-pointer hover:border-primary-500/50 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-all group order-first"
          >
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileUpload} 
              className="hidden" 
              accept="image/*" 
              multiple 
            />
            <div className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-2xl text-primary-600 mb-4 group-hover:scale-110 transition-transform">
              <Plus size={32} />
            </div>
            <span className="text-sm font-black text-slate-400 uppercase tracking-widest">Add Certificate</span>
            <p className="text-[10px] text-slate-400 mt-2">PNG, JPG up to 10MB</p>
          </motion.div>

          {/* Certificates Grid */}
          <AnimatePresence mode="popLayout">
            {certs.map((cert, index) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative h-64 bg-slate-50 dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all"
              >
                <img 
                  src={cert.url} 
                  alt={cert.title} 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex justify-between items-end">
                    <div className="flex-1 mr-4">
                      <p className="text-[10px] font-black text-primary-400 uppercase tracking-widest mb-1">{cert.date}</p>
                      <h4 className="text-white font-bold text-sm leading-tight truncate">{cert.title}</h4>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={(e) => { e.stopPropagation(); setSelectedImage(cert.url); }}
                        className="p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-lg transition-colors"
                      >
                        <ZoomIn size={16} />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); removeCert(cert.id); }}
                        className="p-2 bg-red-500/20 hover:bg-red-500 text-white rounded-lg transition-colors"
                      >
                        <X size={16} />
                      </button>
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

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[200] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              src={selectedImage} 
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificatesGallery;
