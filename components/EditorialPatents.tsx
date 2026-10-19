import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const RESUME_PATENTS = [
  {
    title: "AI/IoT Robotics for Solar-Energy Optimization & Carbon Capture",
    domain: "Energy Optimization & Embedded Control",
    status: "Granted",
    note: "Automated sun-tracking telemetry and multi-sensor carbon absorption optimization."
  },
  {
    title: "Industrial Monitoring and Predictive Maintenance",
    domain: "Industrial IoT & Statistical Diagnostics",
    status: "Granted",
    note: "Vibration telemetry, thermal anomaly scoring, and zero-downtime early warning system."
  },
  {
    title: "Precision-Agriculture Drones with Multi-Spectral Edge Vision",
    domain: "Autonomous Robotics & Edge AI",
    status: "Granted",
    note: "Real-time crop vigor assessment and localized nitrogen delivery models."
  },
  {
    title: "ML-Based Equipment-Failure Prediction for High-Stress Machinery",
    domain: "Predictive Modeling & Fault Detection",
    note: "Time-series health degradation curves and multivariate stress index computation.",
    status: "Granted"
  },
  {
    title: "Renewable-Energy Load Balancing & Grid Stabilization",
    domain: "Smart Grid & Optimization Algorithms",
    status: "Granted",
    note: "Decentralized microgrid dispatch algorithms balancing solar/battery fluctuations."
  }
];

const EditorialPatents: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {RESUME_PATENTS.map((patent, idx) => (
        <article
          key={patent.title}
          className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:border-[#ff4d00]/35 hover:bg-[#100502] transition-colors duration-300 p-5 sm:p-6"
        >
          <div className="flex items-start justify-between gap-3 mb-3">
            <span className="font-display text-2xl text-white/25 leading-none group-hover:text-[#ff4d00]/70 transition-colors">
              {String(idx + 1).padStart(2, '0')}
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/[0.08] border border-emerald-500/20 font-condensed text-[9px] uppercase tracking-[0.16em] text-emerald-400">
              <CheckCircle2 size={9} /> Granted
            </span>
          </div>
          <h4 className="text-sm font-semibold text-white leading-snug group-hover:text-[#ffb07a] transition-colors">
            {patent.title}
          </h4>
          <p className="mt-1.5 font-condensed text-[10px] uppercase tracking-[0.18em] text-[#ff8a3d]/80">
            {patent.domain}
          </p>
          <p className="mt-3 pt-3 border-t border-white/[0.07] text-xs text-stone-400 leading-relaxed">
            {patent.note}
          </p>
        </article>
      ))}
    </div>
  );
};

export default EditorialPatents;
