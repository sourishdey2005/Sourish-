import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Menu, X, ArrowUpRight, FileText, Phone } from 'lucide-react';
import FluxoraHero from './components/FluxoraHero';
import ThinkingEngine from './components/ThinkingEngine';
import EditorialProjects from './components/EditorialProjects';
import EditorialExperience from './components/EditorialExperience';
import PositionOfResponsibility from './components/PositionOfResponsibility';
import EditorialResearch from './components/EditorialResearch';
import EditorialSkills from './components/EditorialSkills';
import EditorialCertifications from './components/EditorialCertifications';
import EditorialEducation from './components/EditorialEducation';
import ResumeModal from './components/ResumeModal';
import { PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#100300] text-stone-100 font-sans selection:bg-[#ff3d00] selection:text-white antialiased">
      {/* 1. Transparent Pill / Amber-Tinted Navigation Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#120400]/95 backdrop-blur-md border-b border-orange-950/70 py-3 shadow-xl shadow-black/50'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Left: Personal Name / Monogram */}
          <a
            href="#"
            className="flex items-center gap-2.5 font-bold tracking-tight text-white text-sm group"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#ff3d00] to-[#ff8a1f] text-white flex items-center justify-center font-mono text-xs font-bold shadow-md shadow-orange-950/60 group-hover:scale-105 transition-transform">
              SD
            </span>
            <div className="flex flex-col">
              <span className="text-white font-semibold leading-tight">Sourish Dey</span>
              <span className="text-[10px] font-mono text-orange-400/90 leading-none">KIIT &bull; CS 2027</span>
            </div>
          </a>

          {/* Center/Right Desktop Navigation (Pill container) */}
          <nav className="hidden lg:flex items-center gap-6 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-lg text-xs font-medium text-stone-300 shadow-inner">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#education" className="hover:text-white transition-colors">
              Education
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#responsibilities" className="hover:text-white transition-colors">
              Responsibilities
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#research" className="hover:text-white transition-colors">
              Research
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#certifications" className="hover:text-white transition-colors">
              Certifications
            </a>
            <a href="#contact" className="hover:text-[#ff8a1f] transition-colors">
              Contact
            </a>
          </nav>

          {/* Right Action: Pill CTA + Resume Trigger */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setResumeModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-950/30 text-xs font-medium text-orange-200 hover:text-white hover:border-orange-500/60 hover:bg-orange-900/40 transition-all backdrop-blur-sm cursor-pointer"
            >
              <Download size={13} className="text-orange-400" />
              <span>Resume (PDF)</span>
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#ff3d00] to-[#ff8a1f] text-xs font-semibold text-white shadow-md shadow-orange-950/50 hover:brightness-110 transition-all group cursor-pointer"
            >
              <span>Connect</span>
              <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-200 hover:text-white rounded-lg bg-white/5 border border-white/10"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#120400] border-b border-orange-900/40 px-6 py-4 space-y-3 text-sm font-medium text-stone-300">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-white"
            >
              About
            </a>
            <a
              href="#education"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-white"
            >
              Education
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-white"
            >
              Experience
            </a>
            <a
              href="#responsibilities"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-white"
            >
              Positions of Responsibility
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-white"
            >
              Projects
            </a>
            <a
              href="#research"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-white"
            >
              Research
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-white"
            >
              Skills
            </a>
            <a
              href="#certifications"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-white"
            >
              Certifications
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setResumeModalOpen(true);
              }}
              className="flex items-center gap-1.5 text-orange-300 font-medium pt-1 cursor-pointer"
            >
              <Download size={14} /> Resume (PDF Viewer) &rarr;
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#ff8a1f] font-semibold"
            >
              Let's connect &rarr;
            </a>
          </div>
        )}
      </header>

      {/* 2. Fluxora — Warm Ember Hero Section */}
      <FluxoraHero onOpenResume={() => setResumeModalOpen(true)} />

      {/* 3. Trust / Snapshot Telemetry Strip */}
      <motion.section 
        className="border-y border-orange-950/40 bg-gradient-to-r from-[#140501] via-[#1b0800] to-[#140501]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-10 sm:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-mono">
                4+
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-orange-300/80 mt-1">
                Research Publications
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-mono">
                5
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-orange-300/80 mt-1">
                Granted Indian Patents
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-mono">
                100K+
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-orange-300/80 mt-1">
                Telemetry Records Handled
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-mono">
                40%
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-orange-300/80 mt-1">
                Latency Reduction
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. About Section (Split Editorial Layout) */}
      <motion.section 
        id="about" 
        className="py-24 sm:py-32 max-w-6xl mx-auto px-6 sm:px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Heading */}
          <div className="lg:col-span-4">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-orange-400 block mb-2">
              01 &bull; PERSPECTIVE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Professional Summary
            </h2>
          </div>

          {/* Right Professional Introduction & Metadata Block */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4 text-base sm:text-lg text-stone-300 leading-relaxed font-normal">
              <p>
                Computer Science undergraduate specializing in <strong className="text-white font-semibold">data science, machine learning, and analytics engineering</strong>. Built Python/SQL ETL pipelines, anomaly-detection and forecasting systems, and RAG tools processing 100K+ records.
              </p>
              <p>
                Achieved <strong className="text-orange-300 font-semibold">92% transaction-anomaly precision</strong> and <strong className="text-orange-300 font-semibold">94% IoT anomaly-detection accuracy</strong>. Reduced query and aggregation latency by <strong className="text-white font-semibold">40–45%</strong> using Scikit-learn, LangChain, Streamlit, Docker, and CI/CD across analytics and IoT-security projects.
              </p>
            </div>

            {/* Secondary Metadata Block */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-orange-400 block mb-1">
                  Education
                </span>
                <span className="text-sm font-semibold text-white block">
                  Computer Science @ KIIT
                </span>
                <span className="text-xs text-stone-400">Jul 2023 – Jul 2027 (Expected)</span>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-orange-400 block mb-1">
                  Core Specialization
                </span>
                <span className="text-sm font-semibold text-white block">
                  Data Science / ML / Analytics
                </span>
                <span className="text-xs text-stone-400">Quantitative Systems &amp; RAG</span>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-orange-400 block mb-1">
                  Location &amp; Availability
                </span>
                <span className="text-sm font-semibold text-white block">
                  Bhubaneswar, India
                </span>
                <span className="text-xs text-emerald-400">Open to Global Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 5. Education Section */}
      <motion.section 
        id="education" 
        className="py-24 sm:py-32 max-w-6xl mx-auto px-6 sm:px-8 border-t border-white/10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mb-12">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-orange-400 block mb-2">
            02 &bull; ACADEMIC FOUNDATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Education
          </h2>
          <p className="text-sm text-stone-400 mt-1 max-w-xl">
            Undergraduate engineering coursework and verified academic honors.
          </p>
        </div>

        <EditorialEducation />
      </motion.section>

      {/* 6. Interactive Thinking Framework */}
      <motion.section 
        className="py-12 max-w-6xl mx-auto px-6 sm:px-8"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <ThinkingEngine />
      </motion.section>

      {/* 7. Experience Section */}
      <motion.section 
        id="experience" 
        className="py-24 sm:py-32 max-w-6xl mx-auto px-6 sm:px-8 border-t border-white/10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mb-12">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-orange-400 block mb-2">
            03 &bull; CAREER PATH
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Professional Experience
          </h2>
          <p className="text-sm text-stone-400 mt-1 max-w-xl">
            High-throughput ETL pipelines, business intelligence, and distributed edge IoT research.
          </p>
        </div>

        <EditorialExperience />
      </motion.section>

      {/* 8. Position of Responsibility Section */}
      <motion.section 
        id="responsibilities" 
        className="py-24 sm:py-32 max-w-6xl mx-auto px-6 sm:px-8 border-t border-white/10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mb-12">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-orange-400 block mb-2">
            04 &bull; LEADERSHIP & IMPACT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Leadership Experience
          </h2>
          <p className="text-sm text-stone-400 mt-1 max-w-xl">
            Institutional leadership, R&amp;D direction, and community tech mentorship.
          </p>
        </div>

        <PositionOfResponsibility />
      </motion.section>

      {/* 9. Technical Projects Section */}
      <section 
        id="projects" 
        className="py-24 sm:py-32 max-w-6xl mx-auto px-6 sm:px-8 border-t border-white/10"
      >
        <div className="mb-16">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-orange-400 block mb-2">
            05 &bull; CODE & SYSTEMS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Technical Projects
          </h2>
          <p className="text-sm text-stone-400 mt-1 max-w-xl">
            Quantitative finance engines, high-frequency order book terminals, ephemeral social architectures, and Bayesian portfolio optimizers.
          </p>
        </div>

        <EditorialProjects />
      </section>

      {/* 10. Research & Patents Section */}
      <motion.section 
        id="research" 
        className="py-24 sm:py-32 max-w-6xl mx-auto px-6 sm:px-8 border-t border-white/10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mb-14">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-orange-400 block mb-2">
            06 &bull; INTELLECTUAL WORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Achievements, Patents &amp; Publications
          </h2>
          <p className="text-sm text-stone-400 mt-1 max-w-xl">
            5 Indian utility patents granted and 4 peer-reviewed research publications.
          </p>
        </div>

        <EditorialResearch />
      </motion.section>

      {/* 11. Technical Skills Section — Pinned Sticky Horizontal Scroll Showcase */}
      <section 
        id="skills" 
        className="relative w-full border-t border-white/10"
      >
        <EditorialSkills />
      </section>

      {/* 12. Certifications Section — Pinned Sticky Horizontal Scroll Gallery */}
      <section 
        id="certifications" 
        className="relative w-full border-t border-white/10"
      >
        <EditorialCertifications />
      </section>

      {/* 13. Contact Section */}
      <motion.section 
        id="contact" 
        className="py-28 sm:py-36 max-w-6xl mx-auto px-6 sm:px-8 border-t border-white/10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-2xl space-y-6">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-orange-400 block">
            08 &bull; DIALOGUE
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Have an interesting problem?
          </h2>
          <p className="text-lg text-stone-300">
            Let's engineer something resilient.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="mailto:sourish713321@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#ff3d00] to-[#ff8a1f] text-white text-xs sm:text-sm font-semibold hover:brightness-110 shadow-lg shadow-orange-950/50 transition-all group cursor-pointer"
            >
              <span>Send an Email</span>
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </a>

            <button
              onClick={() => setResumeModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-stone-200 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              <Download size={14} className="text-orange-400" />
              <span>Preview &bull; Download Resume PDF</span>
            </button>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-stone-400 font-mono">
            <a
              href="mailto:sourish713321@gmail.com"
              className="hover:text-white transition-colors"
            >
              sourish713321@gmail.com
            </a>
            <span>&bull;</span>
            <a
              href="tel:+919064648823"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Phone size={12} /> +91 9064648823
            </a>
            <span>&bull;</span>
            <a
              href="https://sourishdeyportfolio.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-300 transition-colors"
            >
              sourishdeyportfolio.vercel.app
            </a>
          </div>
        </div>
      </motion.section>

      {/* 13. Minimal Dark Footer */}
      <footer className="border-t border-white/10 py-8 bg-[#0a0200]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400 font-mono">
          <div>
            Sourish Dey &bull; Data Scientist &amp; ML Engineer &bull; &copy; 2026
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setResumeModalOpen(true)}
              className="hover:text-orange-300 transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              <Download size={13} /> Resume PDF
            </button>
            <a
              href="https://github.com/sourishdey2005"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <Github size={13} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sourish-dey-20b170206"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-300 transition-colors inline-flex items-center gap-1"
            >
              <Linkedin size={13} /> LinkedIn
            </a>
            <a
              href="mailto:sourish713321@gmail.com"
              className="hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <Mail size={13} /> Email
            </a>
          </div>
        </div>
      </footer>

      {/* Interactive Resume PDF Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;
