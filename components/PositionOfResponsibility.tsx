import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Users, Compass, Cloud, Terminal, Cpu } from 'lucide-react';

interface ResponsibilityItem {
  id: string;
  year: string;
  organization: string;
  role: string;
  oneLineImpact: string;
  details: string[];
  location: string;
  badge: string;
}

// Exactly the requested leadership & community organizations: KITPD2S, Kinetex Lab, CN KIIT / USC KIIT
const RESPONSIBILITIES_DATA: ResponsibilityItem[] = [
  {
    id: 'kitpd2s',
    year: 'Sep 2024 – Sep 2025',
    organization: 'KITPD2S Society',
    role: 'Secretary & Operations Team Lead',
    oneLineImpact: 'Orchestrated cross-functional operational teams across 3 technical symposium tracks, engaging 500+ participants and supervising IoT research POCs.',
    details: [
      'Orchestrated cross-functional operations across software, hardware, and marketing divisions for inter-university technical conferences with 500+ attendees.',
      'Directed proof-of-concept (POC) milestone planning in cloud computing and edge IoT sensor networks, coordinating domain leads and academic mentors.',
      'Led technical event marketing campaigns that increased student registration engagement by 45% year-over-year.'
    ],
    location: 'Bhubaneswar, India',
    badge: 'Operations Leadership & POCs'
  },
  {
    id: 'kinetex-lab',
    year: 'Oct 2025 – Present',
    organization: 'Kinetex Lab (KIIT Chapter)',
    role: 'Head of Research and Development',
    oneLineImpact: 'Guided 15+ student researchers across IoT, edge intelligence, and robotics, resulting in empirical benchmarks for granted patent innovations.',
    details: [
      'Directed applied deep-tech research roadmaps spanning IoT sensor intelligence, edge computing pipelines, and autonomous robotic control architectures.',
      'Supervised lab prototyping that contributed to empirical validation for 5 granted Indian utility patents and 4 peer-reviewed manuscripts.',
      'Conducted rigorous weekly code and literature reviews, standardizing statistical hypothesis testing and baseline model benchmarking.'
    ],
    location: 'KIIT Chapter, India',
    badge: 'R&D Direction & Deep Tech'
  },
  {
    id: 'usc-kiit',
    year: 'Apr 2025 – Present',
    organization: 'USC.KIIT (University Student Community)',
    role: 'Cloud Automation Executive',
    oneLineImpact: 'Automated campus deployment pipelines using Docker and GitHub Actions, slashing deployment cycle times by 65% across university portals.',
    details: [
      'Architected automated CI/CD deployment pipelines using Docker containerization and GitHub Actions workflows, reducing manual staging overhead by 65%.',
      'Configured high-availability server monitoring, load-balancing reverse proxies, and automated SSL certificate rotations across high-traffic student sites.',
      'Standardized Infrastructure-as-Code (IaC) configuration templates, minimizing environment drift across staging and production.'
    ],
    location: 'Bhubaneswar, India',
    badge: 'Cloud Infrastructure & CI/CD'
  },
  {
    id: 'cn-kiit',
    year: 'Jul 2024 – Present',
    organization: 'Coding Ninjas: KIIT Chapter (CN KIIT)',
    role: 'Cloud Computing Executive',
    oneLineImpact: 'Trained 350+ engineering students on AWS and GCP architectural primitives, multi-tier cloud design, and serverless compute paradigms.',
    details: [
      'Authored hands-on instructional labs covering AWS (EC2, S3, Lambda, RDS) and Google Cloud fundamentals, training 350+ student engineers.',
      'Organized cloud architecture hackathons and student dev sprints, mentoring teams on high-scalability design and cost-optimization levers.',
      'Collaborated with university faculty to align extra-curricular cloud curriculum with foundational distributed systems coursework.'
    ],
    location: 'Bhubaneswar, India',
    badge: 'Cloud Architecture Enablement'
  }
];

const PositionOfResponsibility: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGLineElement | null>(null);
  const [activeIdx, setActiveIdx] = useState<number>(0);

  useEffect(() => {
    let animId: number;

    const updateScrollAnimation = () => {
      if (!containerRef.current || !pathRef.current) return;

      const container = containerRef.current;
      const path = pathRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const totalLength = path.getTotalLength ? path.getTotalLength() : rect.height;
      if (!totalLength || isNaN(totalLength)) return;

      path.style.strokeDasharray = `${totalLength} ${totalLength}`;

      const startTrigger = windowHeight * 0.75;
      const endTrigger = windowHeight * 0.25;
      const containerTop = rect.top;
      const containerHeight = rect.height;

      const progress = Math.min(
        Math.max((startTrigger - containerTop) / (containerHeight + startTrigger - endTrigger), 0),
        1
      );

      const drawOffset = totalLength * (1 - progress);
      path.style.strokeDashoffset = `${drawOffset}`;

      const cards = container.querySelectorAll<HTMLElement>('[data-resp-card]');
      let currentIdx = 0;
      cards.forEach((card, idx) => {
        const cardRect = card.getBoundingClientRect();
        if (cardRect.top <= windowHeight * 0.65) {
          currentIdx = idx;
        }
      });
      setActiveIdx(currentIdx);
    };

    const onScroll = () => {
      animId = requestAnimationFrame(updateScrollAnimation);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    updateScrollAnimation();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full py-4">
      <div className="relative">
        {/* Continuous Dynamic SVG Journey Line matching warm ember theme */}
        <div className="absolute top-0 bottom-0 left-3 sm:left-6 w-8 pointer-events-none z-10 flex justify-center">
          <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
            <defs>
              <linearGradient id="respSpineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ff3d00" stopOpacity="1" />
                <stop offset="40%" stopColor="#ff8a1f" stopOpacity="0.95" />
                <stop offset="80%" stopColor="#f59e0b" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#ff3d00" stopOpacity="1" />
              </linearGradient>

              <filter id="respGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background passive baseline trace */}
            <line
              x1="50%"
              y1="0"
              x2="50%"
              y2="100%"
              stroke="rgba(255, 61, 0, 0.15)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            {/* Animated SVG Path driven by strokeDashoffset */}
            <line
              ref={pathRef}
              x1="50%"
              y1="0"
              x2="50%"
              y2="100%"
              stroke="url(#respSpineGradient)"
              strokeWidth="3.5"
              strokeLinecap="round"
              filter="url(#respGlow)"
              style={{
                transition: 'stroke-dashoffset 0.05s linear'
              }}
            />
          </svg>
        </div>

        {/* Leadership Milestone Cards */}
        <div className="space-y-8 pl-10 sm:pl-16">
          {RESPONSIBILITIES_DATA.map((resp, idx) => {
            const isActive = activeIdx === idx;

            return (
              <motion.div
                key={resp.id}
                data-resp-card={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative transition-all duration-300 group"
              >
                {/* SVG Milestone Connector Node Anchor */}
                <div 
                  className={`absolute -left-10 sm:-left-16 top-6 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 z-20 ${
                    isActive 
                      ? 'bg-gradient-to-tr from-[#ff3d00] to-[#ff8a1f] text-white scale-125 shadow-[0_0_20px_rgba(255,61,0,0.85)] ring-4 ring-orange-500/25' 
                      : 'bg-[#180601] border-2 border-orange-500/40 text-stone-400 group-hover:border-orange-400'
                  }`}
                >
                  <div className={`w-2.5 h-2.5 rounded-full ${isActive ? 'bg-white' : 'bg-orange-400/80'}`} />
                </div>

                {/* Card Container */}
                <div
                  className={`p-6 sm:p-8 rounded-2xl transition-all duration-300 backdrop-blur-xl border ${
                    isActive
                      ? 'bg-gradient-to-br from-[#1c0802] via-[#140501] to-[#0c0200] border-orange-500/50 shadow-[0_12px_40px_-10px_rgba(255,61,0,0.22),0_0_20px_rgba(255,138,31,0.1)] -translate-y-1'
                      : 'bg-white/[0.03] border-white/10 hover:border-orange-500/30 hover:bg-white/[0.05]'
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                    {/* Year & Badge */}
                    <div className="md:col-span-3 space-y-1.5">
                      <span className="text-xs font-mono text-orange-400 font-semibold block">
                        {resp.year}
                      </span>
                      <span className="text-[11px] font-mono text-stone-400 block">
                        {resp.location}
                      </span>
                      {resp.badge && (
                        <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-orange-950/60 text-orange-300 border border-orange-500/30 font-semibold">
                          {resp.badge}
                        </span>
                      )}
                    </div>

                    {/* Role & Organization */}
                    <div className="md:col-span-4 space-y-1">
                      <h3 className={`text-lg sm:text-xl font-bold transition-colors ${
                        isActive ? 'text-white' : 'text-stone-100 group-hover:text-orange-300'
                      }`}>
                        {resp.role}
                      </h3>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-orange-400/90 font-semibold">
                        {resp.organization}
                      </h4>
                    </div>

                    {/* Impact & Bullets */}
                    <div className="md:col-span-5 space-y-2.5">
                      <p className="text-sm text-stone-200 leading-relaxed font-medium">
                        {resp.oneLineImpact}
                      </p>
                      {resp.details && (
                        <div className="pt-2 border-t border-white/5 space-y-1.5">
                          {resp.details.map((detail, dIdx) => (
                            <div key={dIdx} className="text-xs text-stone-400 flex items-start gap-2">
                              <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                                isActive ? 'bg-orange-400 shadow-[0_0_6px_#ff8a1f]' : 'bg-orange-500/70'
                              }`} />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PositionOfResponsibility;
