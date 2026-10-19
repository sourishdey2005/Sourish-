import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';

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

const RESPONSIBILITIES_DATA: ResponsibilityItem[] = [
  {
    id: 'kitpd2s',
    year: 'Sep 2024 – Sep 2025',
    organization: 'KITPD2S Society',
    role: 'Secretary & Operations Team Lead',
    oneLineImpact: 'Orchestrated cross-functional operational teams across 3 technical symposium tracks, engaging 500+ participants and supervising IoT research POCs.',
    details: [
      'Orchestrated cross-functional operations across software, hardware, and marketing divisions for inter-university technical conferences with 500+ attendees.',
      'Directed proof-of-concept milestone planning in cloud computing and edge IoT sensor networks.',
      'Led technical event marketing campaigns that increased student registration engagement by 45% year-over-year.'
    ],
    location: 'Bhubaneswar, India',
    badge: 'Operations & POCs'
  },
  {
    id: 'kinetex-lab',
    year: 'Oct 2025 – Present',
    organization: 'Kinetex Lab (KIIT Chapter)',
    role: 'Head of Research and Development',
    oneLineImpact: 'Guided 15+ student researchers across IoT, edge intelligence, and robotics, resulting in empirical benchmarks for granted patent innovations.',
    details: [
      'Directed applied deep-tech research roadmaps spanning IoT sensor intelligence, edge computing, and autonomous robotic control.',
      'Supervised lab prototyping that contributed to empirical validation for 5 granted Indian utility patents and 4 peer-reviewed manuscripts.',
      'Conducted weekly code and literature reviews, standardizing statistical hypothesis testing and model benchmarking.'
    ],
    location: 'KIIT Chapter, India',
    badge: 'R&D Direction'
  },
  {
    id: 'usc-kiit',
    year: 'Apr 2025 – Present',
    organization: 'USC.KIIT (University Student Community)',
    role: 'Cloud Automation Executive',
    oneLineImpact: 'Automated campus deployment pipelines using Docker and GitHub Actions, slashing deployment cycle times by 65% across university portals.',
    details: [
      'Architected automated CI/CD deployment pipelines using Docker and GitHub Actions, reducing manual staging overhead by 65%.',
      'Configured high-availability server monitoring, load-balancing reverse proxies, and automated SSL rotations.',
      'Standardized Infrastructure-as-Code templates, minimizing environment drift across staging and production.'
    ],
    location: 'Bhubaneswar, India',
    badge: 'Cloud & CI/CD'
  },
  {
    id: 'cn-kiit',
    year: 'Jul 2024 – Present',
    organization: 'Coding Ninjas: KIIT Chapter',
    role: 'Cloud Computing Executive',
    oneLineImpact: 'Trained 350+ engineering students on AWS and GCP architectural primitives, multi-tier cloud design, and serverless compute paradigms.',
    details: [
      'Authored hands-on instructional labs covering AWS (EC2, S3, Lambda, RDS) and Google Cloud fundamentals, training 350+ student engineers.',
      'Organized cloud architecture hackathons and student dev sprints, mentoring teams on high-scalability design.',
      'Collaborated with faculty to align extracurricular cloud curriculum with distributed systems coursework.'
    ],
    location: 'Bhubaneswar, India',
    badge: 'Cloud Enablement'
  }
];

const PositionOfResponsibility: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {RESPONSIBILITIES_DATA.map((resp, idx) => (
        <motion.div
          key={resp.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
          className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:border-[#ff4d00]/30 hover:bg-[#100502] transition-all duration-300 p-6 sm:p-7"
        >
          <div className="flex items-start justify-between gap-3 mb-4">
            <span className="font-condensed text-[10px] uppercase tracking-[0.18em] text-[#ff8a3d] border border-[#ff4d00]/25 rounded-full px-3 py-1">
              {resp.badge}
            </span>
            <span className="font-condensed text-[10px] uppercase tracking-[0.16em] text-stone-500 whitespace-nowrap">
              {resp.year}
            </span>
          </div>

          <h3 className="font-display uppercase text-white text-lg sm:text-xl leading-tight tracking-[0.01em] group-hover:text-[#ffb07a] transition-colors">
            {resp.role}
          </h3>
          <h4 className="mt-1.5 font-condensed text-[11px] uppercase tracking-[0.2em] text-stone-500">
            {resp.organization}
          </h4>

          <p className="mt-3 text-xs sm:text-[13px] text-stone-400 leading-relaxed">
            {resp.oneLineImpact}
          </p>

          <div className="mt-4 pt-4 border-t border-white/[0.07] flex items-center justify-between gap-3">
            <span className="font-condensed text-[10px] uppercase tracking-[0.16em] text-stone-600 flex items-center gap-1.5">
              <MapPin size={10} /> {resp.location}
            </span>
            <ArrowUpRight size={14} className="text-stone-600 group-hover:text-[#ff6a1f] transition-colors" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PositionOfResponsibility;
