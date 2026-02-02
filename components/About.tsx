
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cloud, Brain, Activity, Database, GitBranch, Terminal, ShieldAlert, Zap } from 'lucide-react';

const competencies = [
  { title: "Cloud Architecture", icon: <Cloud /> },
  { title: "MLOps Deployment", icon: <GitBranch /> },
  { title: "AI/ML Implementation", icon: <Brain /> },
  { title: "Predictive Analytics", icon: <Activity /> },
  { title: "Zero Trust Security", icon: <Shield /> },
  { title: "Agile Collaboration", icon: <Zap /> },
  { title: "Data-Driven Decisions", icon: <Database /> },
  { title: "Strategic Problem Solving", icon: <Terminal /> },
  { title: "Risk Mitigation", icon: <ShieldAlert /> },
];

const About: React.FC = () => {
  // Fix: Type casting to avoid motion prop errors
  const MotionDiv = motion.div as any;

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-white">Professional Profile</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Results-driven engineer pursuing B.Tech at KIIT University with strong foundations in AI/ML, Cloud, and DevOps. 
              Passionate about building production-grade systems that bridge the gap between complex research and real-world impact.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <span className="block text-2xl font-bold text-primary-600">3+</span>
                <span className="text-sm text-slate-500">Years Experience</span>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <span className="block text-2xl font-bold text-primary-600">10+</span>
                <span className="text-sm text-slate-500">Projects Deployed</span>
              </div>
            </div>
          </MotionDiv>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {competencies.map((item, index) => (
              <MotionDiv
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-primary-400 transition-all hover:-translate-y-1"
              >
                <div className="mb-4 text-primary-600 group-hover:scale-110 transition-transform">
                  {/* Fixed cloneElement type error by casting the icon element to any */}
                  {React.cloneElement(item.icon as React.ReactElement<any>, { size: 28 })}
                </div>
                <h3 className="text-xs font-bold text-center text-slate-800 dark:text-slate-200 uppercase tracking-tighter">
                  {item.title}
                </h3>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
