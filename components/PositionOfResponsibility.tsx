import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Users, Compass } from 'lucide-react';

interface ResponsibilityItem {
  year: string;
  organization: string;
  role: string;
  oneLineImpact: string;
  details?: string[];
  location?: string;
  badge?: string;
}

const RESPONSIBILITIES_DATA: ResponsibilityItem[] = [
  {
    year: '2024 – 2025',
    organization: 'KITPD2S Society',
    role: 'Operations Lead & Secretary',
    oneLineImpact: 'Streamlined event execution by coordinating task ownership and team communication across inter-university technical symposia.',
    details: [
      'Streamlined event execution by coordinating task ownership and team communication across multiple technical streams.',
      'Managed cross-functional student engineering divisions across software and hardware innovation tracks.',
      'Oversaw technical event execution and participant engagement across 500+ attendees.'
    ],
    location: 'Bhubaneswar, India',
    badge: 'Operations & Leadership'
  },
  {
    year: '2025',
    organization: 'Kinetex Lab',
    role: 'Research Lead',
    oneLineImpact: 'Advanced ML research by leading technical discussions and collaborative project planning across IoT and edge intelligence.',
    details: [
      'Advanced ML research by leading technical discussions and collaborative project planning.',
      'Supervised applied prototyping for patent-backed robotic and sensor control systems.',
      'Mentored junior students on empirical evaluation, model benchmarking, and paper drafting.'
    ],
    location: 'KIIT Chapter',
    badge: 'R&D Direction'
  },
  {
    year: '2024 – 2025',
    organization: 'CN KIIT & USC KIIT',
    role: 'Core Technical Member',
    oneLineImpact: 'Supported ML and cloud initiatives through technical implementation, developer workshops, and peer collaboration.',
    details: [
      'Delivered workshops on machine learning fundamentals, data wrangling, and model evaluation.',
      'Assisted in campus cloud automation initiatives and distributed computing infrastructure.'
    ],
    location: 'Bhubaneswar, India',
    badge: 'Tech Mentorship'
  }
];

const PositionOfResponsibility: React.FC = () => {
  return (
    <div className="border-t border-white/10 divide-y divide-white/5">
      {RESPONSIBILITIES_DATA.map((resp, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="py-8 sm:py-10 transition-all duration-300 group rounded-xl px-4 sm:px-6 hover:bg-white/5 hover:border hover:border-orange-500/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
            {/* Year & Badge */}
            <div className="md:col-span-3 space-y-1">
              <span className="text-xs font-mono text-orange-400 font-semibold block">
                {resp.year}
              </span>
              {resp.badge && (
                <span className="inline-block mt-2 px-2 py-0.5 rounded-full text-[10px] font-mono bg-orange-950/60 text-orange-300 border border-orange-500/20">
                  {resp.badge}
                </span>
              )}
            </div>

            {/* Role & Organization */}
            <div className="md:col-span-4 space-y-1">
              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                {resp.role}
              </h3>
              <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold">
                {resp.organization}
              </h4>
            </div>

            {/* Impact */}
            <div className="md:col-span-5 space-y-2">
              <p className="text-sm text-stone-300 leading-relaxed">
                {resp.oneLineImpact}
              </p>
              {resp.details && (
                <div className="pt-2 border-t border-white/5 space-y-1">
                  {resp.details.map((detail, dIdx) => (
                    <div key={dIdx} className="text-xs text-stone-400 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PositionOfResponsibility;
