import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, type MotionStyle } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Menu, X, Phone } from 'lucide-react';
import FluxoraHero from './components/FluxoraHero';
import EditorialProjects from './components/EditorialProjects';
import EditorialExperience from './components/EditorialExperience';
import PositionOfResponsibility from './components/PositionOfResponsibility';
import EditorialPatents from './components/EditorialPatents';
import EditorialPublications from './components/EditorialPublications';
import EditorialSkills from './components/EditorialSkills';
import EditorialCertifications from './components/EditorialCertifications';
import EditorialEducation from './components/EditorialEducation';
import { PERSONAL_INFO } from './constants';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Work' },
  { id: 'patents', label: 'Patents' },
  { id: 'research', label: 'Research' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
];

const SectionDivider: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative w-full px-6 sm:px-10 pointer-events-none ${className}`} aria-hidden="true">
    <motion.div
      className="max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    />
  </div>
);

type RevealVariant =
  | 'veil'
  | 'rise'
  | 'fromLeft'
  | 'tilt'
  | 'pop'
  | 'flip'
  | 'fromRight'
  | 'zoom'
  | 'wipe'
  | 'spring';

interface RevealProps {
  variant: RevealVariant;
  amount?: number;
  className?: string;
  children: React.ReactNode;
}

const Reveal: React.FC<RevealProps> = ({ variant, amount = 0.15, className = '', children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const driftY = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const driftXLeft = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const driftXRight = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const driftRotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);
  const driftScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.96]);
  const driftRotateX = useTransform(scrollYProgress, [0, 1], [6, -6]);

  let driftStyle: MotionStyle = {};
  switch (variant) {
    case 'rise':
    case 'pop':
    case 'spring':
      driftStyle = { y: driftY, scale: driftScale };
      break;
    case 'fromLeft':
      driftStyle = { x: driftXLeft, rotate: driftRotate };
      break;
    case 'fromRight':
      driftStyle = { x: driftXRight, rotate: driftRotate };
      break;
    case 'tilt':
      driftStyle = { y: driftY, rotate: driftRotate };
      break;
    case 'flip':
      driftStyle = { y: driftY, rotateX: driftRotateX, transformPerspective: 1000 };
      break;
    default:
      driftStyle = {};
  }

  const entrance = () => {
    switch (variant) {
      case 'veil':
        return (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 1.06, filter: 'blur(24px)' }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, amount }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {children}
          </motion.div>
        );
      case 'rise':
        return (
          <motion.div
            initial={{ opacity: 0, y: 120, scale: 0.94, filter: 'blur(14px)' }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, amount }}
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        );
      case 'fromLeft':
        return (
          <motion.div
            initial={{ opacity: 0, x: -160, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, amount }}
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        );
      case 'tilt':
        return (
          <motion.div
            initial={{ opacity: 0, y: 90, rotate: -5, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            viewport={{ once: true, amount }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {children}
          </motion.div>
        );
      case 'pop':
        return (
          <motion.div
            initial={{ opacity: 0, y: 70, scale: 0.82 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount }}
            transition={{ type: 'spring', stiffness: 65, damping: 13, mass: 0.95 }}
          >
            {children}
          </motion.div>
        );
      case 'flip':
        return (
          <motion.div
            initial={{ opacity: 0, y: 100, rotateX: 28, transformPerspective: 900 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, transformPerspective: 900 }}
            viewport={{ once: true, amount }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {children}
          </motion.div>
        );
      case 'fromRight':
        return (
          <motion.div
            initial={{ opacity: 0, x: 160, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, amount }}
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        );
      case 'zoom':
        return (
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.82 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {children}
          </motion.div>
        );
      case 'wipe':
        return (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0% 100% 0% 0%)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
            viewport={{ once: true, amount }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {children}
          </motion.div>
        );
      case 'spring':
      default:
        return (
          <motion.div
            initial={{ opacity: 0, y: 130, scale: 0.88, rotate: 1.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount }}
            transition={{ type: 'spring', stiffness: 55, damping: 12, mass: 1.1 }}
          >
            {children}
          </motion.div>
        );
    }
  };

  return (
    <div ref={ref} className={className}>
      <motion.div style={driftStyle}>{entrance()}</motion.div>
    </div>
  );
};

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  aside?: React.ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ index, eyebrow, title, description, aside }) => (
  <motion.div
    className="mb-12 sm:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
    initial={{ opacity: 0, y: 26 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
  >
    <div>
      <div className="flex items-center gap-3 mb-4">
        <span className="font-condensed text-[11px] uppercase tracking-[0.32em] text-[#ff6a1f]">
          {index} / {eyebrow}
        </span>
        <span className="h-px w-12 bg-[#ff4d00]/50" />
      </div>
      <h2 className="font-display uppercase leading-[0.95] text-white text-[clamp(2rem,4.4vw,3.4rem)] tracking-[0.01em]">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-sm text-stone-400 leading-relaxed">{description}</p>
      )}
    </div>
    {aside}
  </motion.div>
);

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const openResume = () => {
    window.open(PERSONAL_INFO.resumeUrl, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);

    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0);

      const marker = window.scrollY + 200;
      let currentSection = 'home';
      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element && marker >= element.offsetTop) currentSection = sectionId;
      }
      setActiveSection(currentSection);
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="portfolio-noise min-h-screen overflow-x-clip text-stone-100 font-sans selection:bg-[#ff4d00] selection:text-white antialiased">
      <div
        className="fixed top-0 left-0 z-[60] h-[2px] bg-gradient-to-r from-[#ff3d00] via-[#ff8a1f] to-[#ffc46b] shadow-[0_0_12px_rgba(255,77,0,0.7)]"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#070201] border-b border-white/[0.07] py-1.5'
            : 'bg-transparent py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-3 shrink-0 group">
            <span className="relative w-9 h-9 rounded-xl bg-[#ff4d00] flex items-center justify-center shadow-[0_8px_24px_-6px_rgba(255,77,0,0.8)]">
              <span className="font-display text-[15px] text-white leading-none tracking-wide">SD</span>
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-white/60 rounded-full" />
            </span>
            <span className="flex flex-col">
              <span className="font-condensed text-[15px] font-semibold uppercase tracking-[0.14em] text-white leading-none">
                Sourish Dey
              </span>
              <span className="mt-1 font-condensed text-[9px] uppercase tracking-[0.26em] text-stone-500">
                Data Science &bull; KIIT
              </span>
            </span>
          </a>

          <nav className="hidden xl:flex items-center gap-6 2xl:gap-7">
            {NAV_ITEMS.map((navItem) => (
              <a
                key={navItem.id}
                href={`#${navItem.id}`}
                data-active={activeSection === navItem.id}
                aria-current={activeSection === navItem.id ? 'page' : undefined}
                className="portfolio-nav-link font-condensed text-[12px] font-semibold uppercase tracking-[0.2em] text-stone-400 hover:text-white transition-colors"
              >
                {navItem.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            <button
              onClick={openResume}
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-stone-300 hover:text-white hover:border-[#ff6a1f]/60 transition-all cursor-pointer"
              aria-label="Open resume"
            >
              <Download size={14} />
            </button>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 pl-5 pr-1.5 py-1.5 rounded-full bg-[#ff4d00] hover:bg-[#ff6a1f] text-white text-[11px] font-semibold uppercase tracking-[0.16em] transition-all shadow-[0_8px_28px_-8px_rgba(255,77,0,0.8)]"
            >
              <span>Let's talk</span>
              <span className="w-6 h-6 rounded-full bg-black/25 flex items-center justify-center text-[12px] transition-transform group-hover:translate-x-0.5">
                &rarr;
              </span>
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-stone-200 hover:text-white rounded-lg bg-white/5 border border-white/10"
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#070201] border-b border-white/10 px-6 py-5 grid grid-cols-2 gap-3 font-condensed text-sm uppercase tracking-[0.16em] text-stone-300">
            {NAV_ITEMS.map((navItem) => (
              <a
                key={navItem.id}
                href={`#${navItem.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-white"
              >
                {navItem.label}
              </a>
            ))}
            <button
              onClick={() => { setMobileMenuOpen(false); openResume(); }}
              className="col-span-2 mt-2 flex items-center gap-2 text-[#ff8a3d] font-semibold"
            >
              <Download size={14} /> Resume PDF
            </button>
          </div>
        )}
      </header>

      <Reveal variant="veil" amount={0.02}>
        <FluxoraHero onOpenResume={openResume} />
      </Reveal>

      <section id="education" className="py-20 sm:py-28 max-w-7xl mx-auto px-6 sm:px-10 scroll-mt-24">
        <Reveal variant="rise">
          <SectionHeading
            index="01"
            eyebrow="Academic foundations"
            title={<>Education</>}
            description="Undergraduate engineering coursework, verified academic honors, and a foundation in statistical modeling and distributed systems."
          />
          <EditorialEducation />
        </Reveal>
      </section>

      <SectionDivider />

      <section id="experience" className="py-20 sm:py-28 max-w-7xl mx-auto px-6 sm:px-10 scroll-mt-24">
        <Reveal variant="fromLeft">
          <SectionHeading
            index="02"
            eyebrow="Career path"
            title={<>Experience</>}
            description="High-throughput ETL pipelines, business intelligence, quantitative analysis, and distributed edge IoT research."
          />
          <EditorialExperience />
        </Reveal>
      </section>

      <SectionDivider />

      <section id="responsibilities" className="py-20 sm:py-28 max-w-7xl mx-auto px-6 sm:px-10 scroll-mt-24">
        <Reveal variant="tilt">
          <SectionHeading
            index="03"
            eyebrow="Leadership & impact"
            title={<>Positions of responsibility</>}
            description="Institutional leadership, R&D direction, and community technology mentorship across KIIT organizations."
          />
          <PositionOfResponsibility />
        </Reveal>
      </section>

      <SectionDivider />

      <section id="projects" className="py-20 sm:py-28 max-w-7xl mx-auto px-6 sm:px-10 scroll-mt-24">
        <Reveal variant="pop">
          <SectionHeading
            index="04"
            eyebrow="Selected work"
            title={<>Technical projects</>}
            description="Quantitative finance engines, order-book terminals, plant-disease vision models, LLM infrastructure, and Bayesian portfolio optimizers."
            aside={
              <span className="font-condensed text-[10px] uppercase tracking-[0.24em] text-stone-500 border border-white/10 rounded-full px-4 py-2 self-start lg:self-auto">
                Scroll to stack &bull; 9 systems
              </span>
            }
          />
          <EditorialProjects />
        </Reveal>
      </section>

      <SectionDivider />

      <section id="patents" className="py-20 sm:py-28 max-w-7xl mx-auto px-6 sm:px-10 scroll-mt-24">
        <Reveal variant="flip">
          <SectionHeading
            index="05"
            eyebrow="Intellectual property"
            title={<>Granted patents</>}
            description="5 granted Indian patents spanning green energy, industrial IoT, autonomous robotics, predictive maintenance, and smart grids."
          />
          <EditorialPatents />
        </Reveal>
      </section>

      <SectionDivider />

      <section id="research" className="py-20 sm:py-28 max-w-7xl mx-auto px-6 sm:px-10 scroll-mt-24">
        <Reveal variant="fromRight">
          <SectionHeading
            index="06"
            eyebrow="Peer-reviewed research"
            title={<>Research papers</>}
            description="5 peer-reviewed journal publications spanning federated learning, neural architecture, urban IoT, and quantum simulation."
          />
          <EditorialPublications />
        </Reveal>
      </section>

      <SectionDivider />

      <section id="skills" className="relative w-full scroll-mt-24">
        <Reveal variant="zoom" amount={0.08}>
          <EditorialSkills />
        </Reveal>
      </section>

      <SectionDivider />

      <section id="certifications" className="relative w-full scroll-mt-24">
        <Reveal variant="wipe" amount={0.08}>
          <EditorialCertifications />
        </Reveal>
      </section>

      <SectionDivider />

      <section
        id="contact"
        className="py-24 sm:py-32 max-w-7xl mx-auto px-6 sm:px-10 scroll-mt-24 relative overflow-hidden"
      >
        <div className="absolute -top-24 right-0 w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle,rgba(255,77,0,0.16),transparent_65%)] blur-3xl pointer-events-none" />
        <Reveal variant="spring">
        <div className="relative max-w-3xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="font-condensed text-[11px] uppercase tracking-[0.32em] text-[#ff6a1f]">
              09 / Dialogue
            </span>
            <span className="h-px w-12 bg-[#ff4d00]/50" />
          </div>
          <h2 className="font-display uppercase leading-[0.92] text-white text-[clamp(2.5rem,6vw,4.6rem)]">
            Have an interesting
            <br />
            <span className="text-[#ff4d00]">problem?</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-stone-400 max-w-xl">
            Let's engineer something resilient. Open to research collaborations,
            data science roles, and quantitative engineering work.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <a
              href="mailto:sourish713321@gmail.com"
              className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[#ff4d00] hover:bg-[#ff6a1f] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-[0_10px_40px_-10px_rgba(255,77,0,0.8)] transition-all"
            >
              <span>Send an email</span>
              <span className="w-8 h-8 rounded-full bg-black/25 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                &rarr;
              </span>
            </a>
            <button
              onClick={openResume}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/[0.07] text-stone-200 text-xs sm:text-sm font-medium uppercase tracking-wider transition-colors cursor-pointer"
            >
              <Download size={14} className="text-[#ff8a3d]" />
              <span>Resume PDF</span>
            </button>
          </div>

          <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-6 gap-y-3 font-condensed text-[11px] uppercase tracking-[0.18em] text-stone-500">
            <a href="mailto:sourish713321@gmail.com" className="hover:text-white transition-colors">
              sourish713321@gmail.com
            </a>
            <span className="text-[#ff4d00]">&bull;</span>
            <a href="tel:+919064648823" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Phone size={11} /> +91 9064648823
            </a>
            <span className="text-[#ff4d00]">&bull;</span>
            <a href="https://sourishdeyportfolio.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              sourishdeyportfolio.vercel.app
            </a>
          </div>
        </div>
        </Reveal>
      </section>

      <footer className="border-t border-white/[0.07] bg-[#060201]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-[#ff4d00] flex items-center justify-center">
              <span className="font-display text-[11px] text-white leading-none">SD</span>
            </span>
            <span className="font-condensed text-[11px] uppercase tracking-[0.2em] text-stone-500">
              Sourish Dey &bull; Data Scientist &amp; ML Engineer &bull; &copy; 2026
            </span>
          </div>
          <div className="flex items-center gap-5">
            <button onClick={openResume} className="font-condensed text-[11px] uppercase tracking-[0.18em] text-stone-500 hover:text-[#ff8a3d] transition-colors inline-flex items-center gap-1.5 cursor-pointer">
              <Download size={12} /> Resume
            </button>
            <a href="https://github.com/sourishdey2005" target="_blank" rel="noopener noreferrer" className="font-condensed text-[11px] uppercase tracking-[0.18em] text-stone-500 hover:text-white transition-colors inline-flex items-center gap-1.5">
              <Github size={12} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/sourish-dey-20b170206" target="_blank" rel="noopener noreferrer" className="font-condensed text-[11px] uppercase tracking-[0.18em] text-stone-500 hover:text-white transition-colors inline-flex items-center gap-1.5">
              <Linkedin size={12} /> LinkedIn
            </a>
            <a href="mailto:sourish713321@gmail.com" className="font-condensed text-[11px] uppercase tracking-[0.18em] text-stone-500 hover:text-white transition-colors inline-flex items-center gap-1.5">
              <Mail size={12} /> Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
