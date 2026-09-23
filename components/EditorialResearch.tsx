import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, FileText, CheckCircle2, Shield } from 'lucide-react';
import { PUBLICATIONS } from '../constants';

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
    status: "Granted",
    note: "Time-series health degradation curves and multivariate stress index computation."
  },
  {
    title: "Renewable-Energy Load Balancing & Grid Stabilization",
    domain: "Smart Grid & Optimization Algorithms",
    status: "Granted",
    note: "Decentralized microgrid dispatch algorithms balancing solar/battery fluctuations."
  }
];

const RESUME_PAPERS = [
  {
    title: "Quantitative Analysis & Covariance Denoising across Volatile Equity Regimes",
    journal: "Applied Financial Machine Learning & Empirical Analytics",
    year: "2025 – 2026",
    abstract: "Formulated Random Matrix Theory (RMT) filtering to discard Marchenko–Pastur bulk noise from high-dimensional covariance matrices across 120+ asset universes."
  },
  {
    title: "Unsupervised Anomaly Detection in High-Frequency Edge IoT Telemetry",
    journal: "Distributed Systems & IoT Security Journal",
    year: "2025",
    abstract: "Engineered distributed outlier filters and hypothesis tests for federated IoT edge clusters, reducing node-aggregation latency by 40% with 94% anomaly precision."
  },
  {
    title: "Low-Latency Financial RAG Architectures with Strict Metric Grounding",
    journal: "Machine Learning in Financial Engineering",
    year: "2025",
    abstract: "Eliminated hallucination in multi-factor portfolio QA by vectorizing VaR/CVaR risk decompositions and benchmark metrics with sub-800ms query latency."
  },
  {
    title: "Intelligent Automation & Scalable Telemetry Pipelines for Industrial Systems",
    journal: "Intelligent Systems & Applied Analytics",
    year: "2024 – 2025",
    abstract: "Architected distributed ETL ingestion pipelines processing 100K+ records with automated schema integrity and proactive error mitigation."
  }
];

const EditorialResearch: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* 5 Granted Patents */}
      <div>
        <div className="flex items-baseline justify-between border-b border-white/10 pb-3 mb-6">
          <div className="flex items-center gap-2">
            <Shield size={16} className="text-[#ff8a1f]" />
            <span className="text-xs font-mono uppercase tracking-wider text-orange-400 font-semibold">
              [A] Granted Patents (5)
            </span>
          </div>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
            5 Indian Patents Granted
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {RESUME_PATENTS.map((patent, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/40 transition-all duration-300 backdrop-blur-md group hover:bg-orange-950/20"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-xs font-mono text-orange-400 font-bold">
                  PATENT #{String(idx + 1).padStart(2, '0')}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 font-medium">
                  <CheckCircle2 size={10} /> Granted
                </span>
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-orange-300 transition-colors leading-snug">
                {patent.title}
              </h4>
              <p className="text-xs font-mono text-stone-400 mt-1">
                {patent.domain}
              </p>
              <p className="text-xs text-stone-400 leading-relaxed mt-2 pt-2 border-t border-white/5">
                {patent.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4 Research Publications */}
      <div>
        <div className="flex items-baseline justify-between border-b border-white/10 pb-3 mb-6">
          <div className="flex items-center gap-2">
            <FileText size={16} className="text-[#ff8a1f]" />
            <span className="text-xs font-mono uppercase tracking-wider text-orange-400 font-semibold">
              [B] Research Publications &amp; Preprints (4)
            </span>
          </div>
          <span className="text-xs font-mono text-stone-400">
            Peer-Reviewed &bull; Quantitative ML &amp; IoT
          </span>
        </div>

        <div className="divide-y divide-white/5">
          {RESUME_PAPERS.map((paper, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="py-6 group transition-colors hover:bg-white/5 px-4 rounded-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                <div className="md:col-span-3">
                  <span className="text-xs font-mono text-stone-400">
                    PAPER #{String(idx + 1).padStart(2, '0')} &bull; {paper.year}
                  </span>
                  <span className="block text-[11px] font-mono text-orange-400 mt-0.5">
                    {paper.journal}
                  </span>
                </div>

                <div className="md:col-span-9 space-y-1.5">
                  <h4 className="text-base font-bold text-white group-hover:text-orange-300 transition-colors">
                    {paper.title}
                  </h4>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    {paper.abstract}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditorialResearch;
