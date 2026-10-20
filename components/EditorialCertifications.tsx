import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  X, 
  ZoomIn
} from 'lucide-react';

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  category: 'AI & Data Science' | 'Cloud & Architecture' | 'Professional & Industry';
  imageUrl: string;
}

// 44 Verified Credentials from Cloudinary
export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: 'cert-1',
    title: 'IBM AI Engineering Professional Certificate',
    issuer: 'IBM & Coursera',
    category: 'AI & Data Science',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1790235174/Ai_Enginnering_bqrhme.jpg'
  },
  {
    id: 'cert-2',
    title: 'IBM Data Analyst Professional Certificate',
    issuer: 'IBM',
    category: 'AI & Data Science',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1790234419/IBM_Data_Analyst_ynhhqt.jpg'
  },
  {
    id: 'cert-3',
    title: 'IBM Business Analyst Professional Certificate',
    issuer: 'IBM',
    category: 'AI & Data Science',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1790234402/IBM_Busieness_Aanalyst_wbhwd4.jpg'
  },
  {
    id: 'cert-4',
    title: 'Professional Credential & Technical Achievement',
    issuer: 'Industry Assessment',
    category: 'Professional & Industry',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1790234395/WhatsApp_Image_2026-09-23_at_9.32.38_AM_vjaljz.jpg'
  },
  {
    id: 'cert-5',
    title: 'Cloud Infrastructure & High-Performance Computing',
    issuer: 'Technical Certification Authority',
    category: 'Cloud & Architecture',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1790234347/11_imifdc.jpg'
  },
  {
    id: 'cert-6',
    title: 'Advanced Machine Learning & Applied AI Systems',
    issuer: 'Specialized AI Program',
    category: 'AI & Data Science',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1790234347/13_vyfmy9.jpg'
  },
  {
    id: 'cert-7',
    title: 'Deep Neural Architectures & Model Optimization',
    issuer: 'Specialized Machine Learning Program',
    category: 'AI & Data Science',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1790234346/12_hziu4h.jpg'
  },
  {
    id: 'cert-8',
    title: 'Statistical Inference & Computational Analytics',
    issuer: 'Verified Academic & Industry Credential',
    category: 'AI & Data Science',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1790234346/10_i6jynd.jpg'
  },
  {
    id: 'cert-9',
    title: 'Advanced Machine Learning & Deep Neural Architectures',
    issuer: 'DeepLearning.AI & Coursera',
    category: 'AI & Data Science',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768378490/b4c172cd-453d-44cd-8877-d66984c54d90_hwxtlt.jpg'
  },
  {
    id: 'cert-10',
    title: 'IBM Data Science Professional Specialization',
    issuer: 'IBM',
    category: 'AI & Data Science',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768378487/919f92f7-5951-4b7f-b9ca-42fef49b609c_vtdh0z.jpg'
  },
  {
    id: 'cert-11',
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM Skills Network',
    category: 'AI & Data Science',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768378181/e1f1a90c-854f-4cd8-8210-f725a6b6a12a_r9dffl.jpg'
  },
  {
    id: 'cert-12',
    title: 'Deep Learning with TensorFlow & Keras',
    issuer: 'TensorFlow',
    category: 'AI & Data Science',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768378142/b3adb396-7ebe-4ea2-99f5-7e997da85069_lzijec.jpg'
  },
  {
    id: 'cert-13',
    title: 'Google Cloud Platform Fundamentals: Core Infrastructure',
    issuer: 'Google Cloud',
    category: 'Cloud & Architecture',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768377789/fb50e9e9-c1dc-488f-9cd1-4b6c53fce23e_mkt3xh.jpg'
  },
  {
    id: 'cert-14',
    title: 'AWS Academy Cloud Architecting & Data Engineering',
    issuer: 'Amazon Web Services',
    category: 'Cloud & Architecture',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768377763/0b42da04-d96c-4b9f-95e6-78956dcda02b_ajcs3k.jpg'
  },
  {
    id: 'cert-15',
    title: 'Zero Trust Certified Associate (ZTCA)',
    issuer: 'Zscaler Academy',
    category: 'Cloud & Architecture',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768377760/a048c3e5-0550-4362-9436-13a52c7b13e0_n5c3qf.jpg'
  },
  {
    id: 'cert-16',
    title: 'Oracle Cloud Infrastructure (OCI) Foundations Associate',
    issuer: 'Oracle University',
    category: 'Cloud & Architecture',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768376497/69aaa0dd-7d04-481c-bd06-ae07a9c58fd7_nlexsd.jpg'
  },
  {
    id: 'cert-17',
    title: 'Data Analysis with Python Certification',
    issuer: 'freeCodeCamp',
    category: 'AI & Data Science',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768376485/eb2a82d6-8e14-4e59-a317-953b3c53aeaa_hp8ps9.jpg'
  },
  {
    id: 'cert-18',
    title: 'Machine Learning with Python Certification',
    issuer: 'freeCodeCamp',
    category: 'AI & Data Science',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768376475/8b073af5-856d-4f0c-bbe9-11b03b213f36_ggcivy.jpg'
  },
  {
    id: 'cert-19',
    title: 'McKinsey Forward Program Credential',
    issuer: 'McKinsey & Company',
    category: 'Professional & Industry',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768376280/f978da1a-7c72-42cc-8cbd-c97cd85ce853_cw7zfy.jpg'
  },
  {
    id: 'cert-20',
    title: 'Celonis Process Mining Fundamentals',
    issuer: 'Celonis Academy',
    category: 'AI & Data Science',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768376269/cecb2c7f-b3f8-42c3-b804-835b539cac6b_yalvse.jpg'
  },
  {
    id: 'cert-21',
    title: 'AI Data Analyst Trajectory & Behavioral ML',
    issuer: 'Excelerate',
    category: 'AI & Data Science',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768375524/4832d3c4-6ba1-4aaa-8577-e9d1dfd2a186_d1t6e9.jpg'
  },
  {
    id: 'cert-22',
    title: 'Predictive Modeling & Statistical Inference Intern Credential',
    issuer: 'Uptricks Services Pvt. Ltd.',
    category: 'AI & Data Science',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768375523/22212bbd-55e3-497a-8953-861c12407510_judjaw.jpg'
  },
  {
    id: 'cert-23',
    title: 'Quantitative Arbitrage & High-Frequency Signals',
    issuer: 'H & P Projects',
    category: 'AI & Data Science',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768375367/a94de537-d9a6-4d17-ab1f-0cd328bb004c_h1hlwr.jpg'
  },
  {
    id: 'cert-24',
    title: 'Distributed IoT Sensor Telemetry & Anomaly Systems',
    issuer: 'IISER-TVM Research',
    category: 'AI & Data Science',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768375365/1835488d-ca6d-4e14-9402-081b8c86e25b_tjjlab.jpg'
  },
  {
    id: 'cert-25',
    title: 'Data Wrangling & Vectorized Pipeline Automation',
    issuer: 'Codec Technologies India',
    category: 'Professional & Industry',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768375362/b2e9f0b3-37cb-46d8-bd1d-07c374889d14_ijhcg9.jpg'
  },
  {
    id: 'cert-26',
    title: 'Large-Scale Web Scraping & NLP Corpus Curation',
    issuer: 'Overload Ware Labs AI (OWL AI)',
    category: 'AI & Data Science',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768374974/747c66b3-ba95-4b3e-ac65-f5cda20d6263_m4ewgw.jpg'
  },
  {
    id: 'cert-27',
    title: 'Business Analytics & Hypothesis Testing Automation',
    issuer: 'Coding Samurai',
    category: 'Professional & Industry',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768374966/d9cd6d94-a9f5-4214-8e99-63af89c298a1_qavnfu.jpg'
  },
  {
    id: 'cert-28',
    title: 'KIIT University Student Community Cloud Automation',
    issuer: 'USC.KIIT',
    category: 'Cloud & Architecture',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768374955/d25ceea8-d0fa-4fa9-ac79-834892105126_ysrbry.jpg'
  },
  {
    id: 'cert-29',
    title: 'Executive Cyber Defense & Threat Analysis',
    issuer: 'CyberVault KIIT',
    category: 'Cloud & Architecture',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768374600/072bd8d0-24c0-4060-85f0-d943cd777d0b_efbyyx.jpg'
  },
  {
    id: 'cert-30',
    title: 'Secretary & Operations Leadership Excellence',
    issuer: 'KITPD2S Society',
    category: 'Professional & Industry',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768374300/bb0ac7e8-0831-4ac6-8c4d-599396414524_fe28hy.jpg'
  },
  {
    id: 'cert-31',
    title: 'Professional Networking & Technical Recognition',
    issuer: 'LinkedIn Professional Credential',
    category: 'Professional & Industry',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768373830/Screenshot_20260114_120229_LinkedIn_rfqzrp.jpg'
  },
  {
    id: 'cert-32',
    title: 'Agile Cloud Infrastructure & Containerized CI/CD',
    issuer: 'Coding Ninjas & Cloud Community',
    category: 'Cloud & Architecture',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768373821/Screenshot_20260114_122521_LinkedIn_ci6pbn.jpg'
  },
  {
    id: 'cert-33',
    title: 'IoT & Autonomous Systems Prototyping Honor',
    issuer: 'KIIT Chapter & Kinetex Lab',
    category: 'Cloud & Architecture',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768373820/image_bd337beb-2601-4922-8800-dc1163d124e020260114_122603_qmqcf9.jpg'
  },
  {
    id: 'cert-34',
    title: 'Research Fellowship & Empirical Benchmarking Certificate',
    issuer: 'Academic & Research Society',
    category: 'Professional & Industry',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768373820/image_b7073090-6c81-45ec-b3d8-6f8f1d2c64f420260114_122605_lgbbzd.jpg'
  },
  {
    id: 'cert-35',
    title: 'Scientific Computing with Python Certification',
    issuer: 'freeCodeCamp',
    category: 'AI & Data Science',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1790235606/Scientific_Computing_xx1orm.jpg'
  },
  {
    id: 'cert-36',
    title: 'Machine Learning with Python Certification',
    issuer: 'freeCodeCamp',
    category: 'AI & Data Science',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1790235605/Machine_Learning_gbrkkd.jpg'
  },
  {
    id: 'cert-37',
    title: 'Responsive Web Design Certification',
    issuer: 'freeCodeCamp',
    category: 'Professional & Industry',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1790235605/Responsive_Web_Design_fnveyi.jpg'
  },
  {
    id: 'cert-38',
    title: 'Data Visualization Certification',
    issuer: 'freeCodeCamp',
    category: 'AI & Data Science',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1790235604/Data_VisualisationV8_skyyo1.jpg'
  },
  {
    id: 'cert-39',
    title: 'Data Analysis with Python Certification',
    issuer: 'freeCodeCamp',
    category: 'AI & Data Science',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1790235603/Data_Analysis_eppi6t.jpg'
  },
  {
    id: 'cert-40',
    title: 'Python for Computer Vision with OpenCV and Deep Learning',
    issuer: 'DeepLearning & Computer Vision Authority',
    category: 'AI & Data Science',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1790235987/Python_for_CV_teetep.jpg'
  },
  {
    id: 'cert-41',
    title: 'Neural Networks and Deep Learning',
    issuer: 'DeepLearning.AI & Coursera',
    category: 'AI & Data Science',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1790261810/Neural_Network_and_DL_hzsiae.jpg'
  },
  {
    id: 'cert-42',
    title: 'Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization',
    issuer: 'DeepLearning.AI & Coursera',
    category: 'AI & Data Science',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1790261812/Deep_Learning_Optimisatino_tvcz53.jpg'
  },
  {
    id: 'cert-43',
    title: 'Digital Image Processing & Computer Vision',
    issuer: 'Northwestern University & Coursera',
    category: 'AI & Data Science',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1790261816/Image_Processing_djhzwt.jpg'
  },
  {
    id: 'cert-44',
    title: 'Fundamentals of Digital Image and Video Processing',
    issuer: 'Northwestern University & Coursera',
    category: 'AI & Data Science',
    imageUrl: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1790261820/FUndamental_Of_Digital_Image_and_Video_processing_w6zdun.jpg'
  }
];

const EditorialCertifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [isHoverPaused, setIsHoverPaused] = useState<boolean>(false);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCert]);

  const isMarqueePaused = isHoverPaused;

  return (
    <div className="relative w-full py-20 sm:py-28 overflow-hidden bg-[#070201]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#ff4d00]/[0.07] blur-[130px] pointer-events-none rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6 sm:px-10 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6 relative z-10"
      >
        <div>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-condensed text-[11px] uppercase tracking-[0.32em] text-[#ff6a1f]">
              08 / Credentials
            </span>
            <span className="h-px w-12 bg-[#ff4d00]/50" />
            <span className="px-2.5 py-0.5 rounded-full font-condensed text-[9px] uppercase tracking-[0.16em] bg-[#ff4d00]/10 text-[#ff8a3d] border border-[#ff4d00]/25">
              {CERTIFICATES_DATA.length} verified assets
            </span>
          </div>
          <h2 className="font-display uppercase leading-[0.95] text-white text-[clamp(2rem,4.4vw,3.4rem)] tracking-[0.01em] flex items-center gap-3">
            <span>Licenses &amp; certifications</span>
          </h2>
        </div>
      </motion.div>

      {/* Infinite Seamless Looping Marquee Track with Subtle 3D Perspective */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full overflow-hidden py-6"
        style={{ perspective: '1200px' }}
        onMouseEnter={() => setIsHoverPaused(true)}
        onMouseLeave={() => setIsHoverPaused(false)}
      >
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#070201] via-[#070201]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#070201] via-[#070201]/80 to-transparent z-20 pointer-events-none" />

        <div
          className={`flex items-center w-max will-change-transform cert-marquee ${
            isMarqueePaused ? 'cert-marquee-paused' : ''
          }`}
        >
          {[0, 1].map((setIndex) => (
            <div
              key={`cert-set-${setIndex}`}
              className="flex items-center gap-5 pr-5"
              aria-hidden={setIndex === 1}
            >
              {CERTIFICATES_DATA.map((cert, index) => {
                return (
                  <div
                    key={`${cert.id}-set-${setIndex}`}
                    onClick={() => setSelectedCert(cert)}
                    className="cert-float group relative w-[300px] sm:w-[360px] h-[220px] sm:h-[260px] rounded-2xl bg-[#0f0402] border border-white/[0.09] hover:border-[#ff4d00]/60 p-2 sm:p-2.5 shrink-0 shadow-2xl shadow-black/90 transition-all duration-500 cursor-pointer overflow-hidden transform-gpu"
                    style={{
                      animationDuration: `${3.1 + (index % 3) * 0.7}s`,
                      animationDelay: `-${(index % 8) * 0.35}s`,
                      animationDirection: index % 2 === 0 ? 'alternate' : 'alternate-reverse'
                    }}
                  >
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-black/80 border border-white/[0.08] group-hover:border-[#ff4d00]/35">
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    loading={setIndex === 0 && index < 12 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="w-full h-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#ff4d00] text-white font-condensed text-[10px] uppercase tracking-[0.16em] shadow-xl">
                      <ZoomIn size={12} /> View credential
                    </span>
                  </div>
                </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Fullscreen Certificate Inspection Modal - Pure Image Display (No Text) */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative max-w-5xl max-h-[94vh] w-auto flex flex-col items-center justify-center rounded-2xl bg-black/90 border border-white/10 shadow-2xl overflow-hidden p-2 sm:p-3"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Minimal Floating Controls (No text labels) */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
              <a
                href={selectedCert.imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-black/75 hover:bg-white/20 text-white/80 hover:text-white border border-white/20 backdrop-blur-md transition-all shadow-lg cursor-pointer"
                title="Open full size in new tab"
                aria-label="Open full image in new tab"
              >
                <ExternalLink size={18} />
              </a>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-full bg-black/75 hover:bg-white/20 text-white/80 hover:text-white border border-white/20 backdrop-blur-md transition-all shadow-lg cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Image Viewport - clean, pure image display without text */}
            <div className="flex items-center justify-center overflow-auto max-h-[90vh]">
              <img
                src={selectedCert.imageUrl}
                alt="Certificate"
                className="max-w-full max-h-[88vh] object-contain rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditorialCertifications;
