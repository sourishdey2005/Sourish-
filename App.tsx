import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, Menu, X } from 'lucide-react';
import ProfileHeroVisual from './components/ProfileHeroVisual';
import ThinkingEngine from './components/ThinkingEngine';
import EditorialProjects from './components/EditorialProjects';
import EditorialExperience from './components/EditorialExperience';
import PositionOfResponsibility from './components/PositionOfResponsibility';
import EditorialResearch from './components/EditorialResearch';
import EditorialSkills from './components/EditorialSkills';
import EditorialEducation from './components/EditorialEducation';
import { PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans selection:bg-zinc-950 selection:text-white antialiased">
      {/* 1. Ultra Clean Fixed Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled ? 'bg-white/90 backdrop-blur-md border-b border-zinc-200/80 py-3.5' : 'bg-white py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Left: Personal Name / Monogram */}
          <a
            href="#"
            className="flex items-center gap-2.5 font-bold tracking-tight text-zinc-950 text-sm group"
          >
            <span className="w-7 h-7 rounded-md bg-zinc-950 text-white flex items-center justify-center font-mono text-xs font-semibold group-hover:bg-zinc-800 transition-colors">
              SD
            </span>
            <span>Sourish Dey</span>
          </a>

          {/* Center/Right Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-zinc-600">
            <a href="#about" className="hover:text-zinc-950 transition-colors">
              About
            </a>
            <a href="#education" className="hover:text-zinc-950 transition-colors">
              Education
            </a>
            <a href="#experience" className="hover:text-zinc-950 transition-colors">
              Experience
            </a>
            <a href="#responsibilities" className="hover:text-zinc-950 transition-colors">
              Responsibilities
            </a>
            <a href="#projects" className="hover:text-zinc-950 transition-colors">
              Projects
            </a>
            <a href="#research" className="hover:text-zinc-950 transition-colors">
              Research
            </a>
            <a href="#skills" className="hover:text-zinc-950 transition-colors">
              Skills
            </a>
            <a href="#contact" className="hover:text-zinc-950 transition-colors">
              Contact
            </a>
          </nav>

          {/* Small Understated CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-zinc-200 text-xs font-semibold text-zinc-800 hover:text-zinc-950 hover:border-zinc-400 transition-colors"
            >
              <Download size={13} />
              <span>Resume</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-950 hover:text-blue-600 transition-colors group cursor-pointer"
            >
              <span>Let's connect</span>
              <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-zinc-600 hover:text-zinc-950"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-zinc-200 px-6 py-4 space-y-3 text-sm font-medium">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-zinc-600 hover:text-zinc-950"
            >
              About
            </a>
            <a
              href="#education"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-zinc-600 hover:text-zinc-950"
            >
              Education
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-zinc-600 hover:text-zinc-950"
            >
              Experience
            </a>
            <a
              href="#responsibilities"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-zinc-600 hover:text-zinc-950"
            >
              Positions of Responsibility
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-zinc-600 hover:text-zinc-950"
            >
              Projects
            </a>
            <a
              href="#research"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-zinc-600 hover:text-zinc-950"
            >
              Research
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-zinc-600 hover:text-zinc-950"
            >
              Skills
            </a>
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-1.5 text-zinc-900 font-medium pt-1"
            >
              <Download size={14} /> Resume (PDF) &rarr;
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-blue-600 font-semibold"
            >
              Let's connect &rarr;
            </a>
          </div>
        )}
      </header>

      {/* 2. Hero Section */}
      <section className="pt-32 sm:pt-40 pb-20 sm:pb-28 max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Hero Narrative */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-500 font-semibold block">
                COMPUTER SCIENCE &bull; DATA &bull; AI &bull; RESEARCH
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-tight">
                SOURISH DEY
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-zinc-700 tracking-tight leading-snug">
                Building intelligent systems from data, research, and ideas.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 max-w-xl leading-relaxed">
              Computer Science undergraduate at KIIT with research and project internship experience across Python, SQL, statistical modeling, and machine learning. Experienced in developing scalable data pipelines and predictive models for datasets exceeding 100K+ records, reducing research data aggregation latency by 40%. Technical focus spans anomaly detection, time-series forecasting, covariance denoising, portfolio optimization, and quantitative backtesting.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-950 text-white text-xs font-semibold hover:bg-zinc-800 transition-colors group cursor-pointer"
              >
                <span>View Work</span>
                <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-zinc-300 text-zinc-900 text-xs font-semibold hover:bg-zinc-50 hover:border-zinc-400 transition-colors cursor-pointer shadow-2xs"
              >
                <Download size={13} className="text-zinc-500" />
                <span>Download Resume</span>
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-zinc-600 hover:text-zinc-950 text-xs font-medium transition-colors cursor-pointer"
              >
                About Me
              </a>
            </div>
          </div>

          {/* Right Hero Visual: User Profile Photo with Editorial Framing */}
          <div className="lg:col-span-5">
            <ProfileHeroVisual />
          </div>
        </div>
      </section>

      {/* 3. Trust / Snapshot Strip (Typographic, not cards) */}
      <section className="border-y border-zinc-200/80 bg-zinc-50/50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-10 sm:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 font-mono">
                4+
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mt-1">
                Research Publications
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 font-mono">
                5
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mt-1">
                Granted Patents
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 font-mono">
                100K+
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mt-1">
                Records Analyzed
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 font-mono">
                35%
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mt-1">
                Reporting Efficiency
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. About Section (Split Editorial Layout) */}
      <section id="about" className="py-24 sm:py-32 max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Heading */}
          <div className="lg:col-span-4">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-zinc-400 block mb-2">
              01 &bull; PERSPECTIVE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
              About
            </h2>
          </div>

          {/* Right Professional Introduction & Metadata Block */}
          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-5 text-base sm:text-lg text-zinc-700 leading-relaxed font-normal">
              <p>
                I am a Computer Science student with a deep focus on building end-to-end data systems that bridge mathematical modeling with operational software engineering.
              </p>
              <p>
                My work spans quantitative finance platforms using Random Matrix Theory for covariance denoising, automated anomaly telemetry, and scalable cloud microservices. I am passionate about taking academic rigor and converting it into resilient, fast, and measurable real-world products.
              </p>
            </div>

            {/* Secondary Metadata Block */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-zinc-200">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
                  Currently
                </span>
                <span className="text-sm font-semibold text-zinc-900 block">
                  Computer Science @ KIIT
                </span>
                <span className="text-xs text-zinc-500">Graduating Oct 2027 (Expected)</span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
                  Focus
                </span>
                <span className="text-sm font-semibold text-zinc-900 block">
                  Data Science / AI / Analytics / Research
                </span>
                <span className="text-xs text-zinc-500">Quantitative Systems</span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
                  Location
                </span>
                <span className="text-sm font-semibold text-zinc-900 block">
                  India
                </span>
                <span className="text-xs text-zinc-500">Open to Global Roles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Education Section */}
      <section id="education" className="py-24 sm:py-32 max-w-6xl mx-auto px-6 sm:px-8 border-t border-zinc-200/80">
        <div className="mb-12">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-zinc-400 block mb-2">
            02 &bull; ACADEMIC FOUNDATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
            Education
          </h2>
          <p className="text-sm text-zinc-500 mt-1 max-w-xl">
            Undergraduate coursework, academic records, and institutional honors.
          </p>
        </div>

        <EditorialEducation />
      </section>

      {/* 6. Interactive Thinking Framework */}
      <section className="py-12 max-w-6xl mx-auto px-6 sm:px-8">
        <ThinkingEngine />
      </section>

      {/* 7. Experience Section (Structured Editorial Vertical Timeline) */}
      <section id="experience" className="py-24 sm:py-32 max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-12">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-zinc-400 block mb-2">
            03 &bull; CAREER PATH
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
            Experience
          </h2>
          <p className="text-sm text-zinc-500 mt-1 max-w-xl">
            A chronological record of engineering and data science internships.
          </p>
        </div>

        <EditorialExperience />
      </section>

      {/* 8. Position of Responsibility Section */}
      <section id="responsibilities" className="py-24 sm:py-32 max-w-6xl mx-auto px-6 sm:px-8 border-t border-zinc-200/80">
        <div className="mb-12">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-zinc-400 block mb-2">
            04 &bull; LEADERSHIP & IMPACT
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
            Positions of Responsibility
          </h2>
          <p className="text-sm text-zinc-500 mt-1 max-w-xl">
            Institutional leadership, R&amp;D direction, cloud automation architecture, and technical mentorship roles.
          </p>
        </div>

        <PositionOfResponsibility />
      </section>

      {/* 9. Projects Section (Asymmetric Editorial Showcase) */}
      <section id="projects" className="py-24 sm:py-32 max-w-6xl mx-auto px-6 sm:px-8 bg-zinc-50/40 border-y border-zinc-200/80">
        <div className="mb-16">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-zinc-400 block mb-2">
            05 &bull; CODE & SYSTEMS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
            Selected Work
          </h2>
          <p className="text-sm text-zinc-500 mt-1 max-w-xl">
            Systems designed for business intelligence, quantitative finance, and automated risk estimation.
          </p>
        </div>

        <EditorialProjects />
      </section>

      {/* 10. Research Section (Clean Editorial List) */}
      <section id="research" className="py-24 sm:py-32 max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-14">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-zinc-400 block mb-2">
            06 &bull; INTELLECTUAL WORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
            Research & Intellectual Work
          </h2>
          <p className="text-sm text-zinc-500 mt-1 max-w-xl">
            Published research papers, preprints, and filed utility patents.
          </p>
        </div>

        <EditorialResearch />
      </section>

      {/* 11. Skills Section (Organized Categorical Editorial Typography) */}
      <section id="skills" className="py-24 sm:py-32 max-w-6xl mx-auto px-6 sm:px-8 border-t border-zinc-200/80">
        <div className="mb-12">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-zinc-400 block mb-2">
            07 &bull; PROFICIENCIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
            Skills & Frameworks
          </h2>
          <p className="text-sm text-zinc-500 mt-1 max-w-xl">
            Technical competencies categorized by analytical depth and practical engineering.
          </p>
        </div>

        <EditorialSkills />
      </section>

      {/* 12. Contact Section */}
      <section id="contact" className="py-28 sm:py-36 max-w-6xl mx-auto px-6 sm:px-8 border-t border-zinc-200">
        <div className="max-w-2xl space-y-6">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-zinc-400 block">
            08 &bull; DIALOGUE
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight">
            Have an interesting problem?
          </h2>
          <p className="text-lg text-zinc-600">
            Let's build something useful.
          </p>

          <div className="pt-2">
            <a
              href="mailto:sourish713321@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-950 text-white text-xs font-semibold hover:bg-zinc-800 transition-colors group cursor-pointer"
            >
              <span>Get in touch</span>
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>

          <div className="pt-8 border-t border-zinc-100 flex flex-wrap items-center gap-6 text-xs text-zinc-500 font-mono">
            <a
              href="mailto:sourish713321@gmail.com"
              className="hover:text-zinc-950 transition-colors"
            >
              sourish713321@gmail.com
            </a>
            <span>&bull;</span>
            <a
              href="tel:+919832264627"
              className="hover:text-zinc-950 transition-colors"
            >
              +91 98322 64627
            </a>
            <span>&bull;</span>
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors inline-flex items-center gap-1"
            >
              <Download size={12} /> Curriculum Vitae (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* 11. Minimal Footer */}
      <footer className="border-t border-zinc-200 py-8 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <div>
            Sourish Dey &bull; &copy; 2026
          </div>

          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors inline-flex items-center gap-1"
            >
              <Download size={13} /> Resume
            </a>
            <a
              href="https://github.com/sourishdey2005"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-950 transition-colors inline-flex items-center gap-1"
            >
              <Github size={13} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sourish-dey-20b170206/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors inline-flex items-center gap-1"
            >
              <Linkedin size={13} /> LinkedIn
            </a>
            <a
              href="mailto:sourish713321@gmail.com"
              className="hover:text-zinc-950 transition-colors inline-flex items-center gap-1"
            >
              <Mail size={13} /> Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
