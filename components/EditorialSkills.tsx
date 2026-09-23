import React from 'react';
import { motion } from 'framer-motion';
import { Database, Brain, Sparkles, Terminal, Code2, Server, Award, CheckCircle2 } from 'lucide-react';

interface SkillCategory {
  title: string;
  badge: string;
  skills: string[];
  note: string;
  icon: typeof Database;
}

const CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming & Databases',
    badge: 'Core Code',
    skills: ['Python', 'SQL', 'R', 'C', 'JavaScript', 'HTML', 'CSS', 'React'],
    note: 'Vectorized mathematical computing, relational database design, high-frequency scripts',
    icon: Code2
  },
  {
    title: 'Data Science & Machine Learning',
    badge: 'Algorithms',
    skills: ['Supervised Learning', 'Unsupervised Learning', 'Time-Series Forecasting', 'Feature Engineering', 'Exploratory Data Analysis (EDA)', 'Predictive Modeling', 'Model Evaluation'],
    note: 'Random Matrix Theory, stationarity analysis, anomaly detection, statistical hypothesis testing',
    icon: Brain
  },
  {
    title: 'Python Libraries & Frameworks',
    badge: 'Ecosystem',
    skills: ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Statsmodels', 'Plotly', 'Matplotlib', 'Seaborn', 'Streamlit'],
    note: 'Data pipelines, scientific computing, regression/classification, interactive analytical dashboards',
    icon: Database
  },
  {
    title: 'Generative AI & LLMs',
    badge: 'Applied AI',
    skills: ['Retrieval-Augmented Generation (RAG)', 'LangChain', 'Vector Databases (FAISS, ChromaDB)', 'Fine-Tuning (LoRA, QLoRA)', 'Prompt Engineering'],
    note: 'Zero-hallucination domain knowledge grounding, sub-second vector search inferencing',
    icon: Sparkles
  },
  {
    title: 'Data Engineering & BI Tools',
    badge: 'Pipelines',
    skills: ['ETL Pipeline Development', 'Data Modeling', 'Data Validation', 'Power BI', 'Excel'],
    note: 'Scalable processing of 100K+ records, automated Power Query workflows, saving 3+ engineering hours weekly',
    icon: Server
  },
  {
    title: 'Business Analysis, QA & DevOps',
    badge: 'Infrastructure',
    skills: ['Requirements Gathering & Mapping', 'KPI & Trend Analysis', 'Functional & Integration Testing', 'SDLC', 'Git', 'GitHub Actions', 'Docker', 'CI/CD Pipelines', 'AWS', 'Google Cloud Platform (GCP)', 'Oracle Cloud (OCI)'],
    note: 'Agile/Scrum, containerization, multi-cloud automated deployment pipelines',
    icon: Terminal
  }
];

const RESUME_CERTS = [
  "IBM Data Science Professional",
  "IBM Data Analytics",
  "IBM Business Analyst",
  "DeepLearning.AI (Neural Networks, Hyperparameter Tuning)",
  "TensorFlow Deep Learning",
  "MathWorks Image Processing",
  "ZTCA Certified",
  "Google Cloud Fundamentals",
  "Oracle Cloud Infrastructure Data Science & Cloud",
  "FreeCodeCamp: Machine Learning with Python",
  "FreeCodeCamp: Data Analysis with Python"
];

const EditorialSkills: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CATEGORIES.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all duration-300 backdrop-blur-sm group hover:bg-orange-950/20 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-950/50 border border-orange-500/20 flex items-center justify-center text-orange-400">
                    <Icon size={16} />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-orange-400 bg-orange-950/40 px-2 py-0.5 rounded border border-orange-500/20">
                    {cat.badge}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                  {cat.title}
                </h4>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-black/40 text-stone-300 border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 text-[11px] text-stone-400 font-mono">
                {cat.note}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Certifications Marquee / Pill Grid */}
      <motion.div 
        className="pt-8 border-t border-white/10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Award size={16} className="text-[#ff8a1f]" />
          <h4 className="text-xs font-mono uppercase tracking-wider text-orange-400 font-semibold">
            Industry Certifications &amp; Accreditations
          </h4>
        </div>

        <div className="flex flex-wrap gap-2">
          {RESUME_CERTS.map((cert, cIdx) => (
            <div
              key={cIdx}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-stone-300 hover:border-orange-500/40 hover:text-white transition-colors"
            >
              <CheckCircle2 size={11} className="text-emerald-400" />
              <span>{cert}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default EditorialSkills;
