
import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Brain, Code2, Server, Terminal } from 'lucide-react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-950 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-500/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-primary-600" />
            <h2 className="text-sm font-black text-primary-600 uppercase tracking-[0.3em]">Technical Arsenal</h2>
            <span className="h-px w-8 bg-primary-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-6">My Technology Stack</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Engineering robust digital ecosystems using a research-grade toolset across Cloud Infrastructure, Machine Learning, and Enterprise Development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Cloud & DevOps */}
          <SkillCategory 
            title="Cloud & DevOps (IaC)"
            icon={<Cloud className="text-blue-500" />}
            skills={SKILLS.cloud}
            color="blue"
            delay={0}
          />

          {/* AI/ML */}
          <SkillCategory 
            title="AI/ML & Data Science"
            icon={<Brain className="text-indigo-500" />}
            skills={SKILLS.ai}
            color="indigo"
            delay={0.1}
          />

          {/* Programming */}
          <SkillCategory 
            title="Programming & Databases"
            icon={<Code2 className="text-purple-500" />}
            skills={SKILLS.programming}
            color="purple"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
};

const SkillCategory: React.FC<{ 
  title: string; 
  icon: React.ReactNode; 
  skills: string[]; 
  color: 'blue' | 'indigo' | 'purple';
  delay: number;
}> = ({ title, icon, skills, color, delay }) => {
  const colorMap = {
    blue: 'border-blue-200 dark:border-blue-900/30 group-hover:border-blue-400',
    indigo: 'border-indigo-200 dark:border-indigo-900/30 group-hover:border-indigo-400',
    purple: 'border-purple-200 dark:border-purple-900/30 group-hover:border-purple-400',
  };

  const bgMap = {
    blue: 'bg-blue-50 dark:bg-blue-900/10',
    indigo: 'bg-indigo-50 dark:bg-indigo-900/10',
    purple: 'bg-purple-50 dark:bg-purple-900/10',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className={`group relative p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border ${colorMap[color]} shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}
    >
      <div className="flex items-center gap-4 mb-8">
        <div className={`p-4 ${bgMap[color]} rounded-2xl transition-transform group-hover:scale-110 duration-500`}>
          {React.cloneElement(icon as React.ReactElement, { size: 28 })}
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">{title}</h3>
      </div>

      <div className="space-y-6">
        {skills.map((skill, index) => {
          // Calculate mastery to be above 90%
          const mastery = 98 - (index * 0.7);
          
          return (
            <div key={skill} className="space-y-2 group/skill">
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2 group-hover/skill:text-primary-600 transition-colors">
                  <div className={`w-1.5 h-1.5 rounded-full ${index % 2 === 0 ? 'bg-primary-500 animate-pulse' : 'bg-slate-300 dark:bg-slate-700'}`} />
                  {skill}
                </span>
                <div className="flex items-center gap-1.5">
                   <span className="text-[10px] font-black uppercase tracking-tighter text-slate-400 dark:text-slate-500">
                    {mastery.toFixed(1)}% Mastery
                  </span>
                </div>
              </div>
              
              {/* Visualisation Progress Bar */}
              <div className="h-2 w-full bg-slate-100 dark:bg-slate-800/50 rounded-full overflow-hidden border border-slate-200/20 dark:border-slate-700/20">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${mastery}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: delay + (index * 0.05), ease: "easeOut" }}
                  className={`h-full rounded-full relative bg-gradient-to-r ${
                    color === 'blue' ? 'from-blue-400 to-blue-600' : 
                    color === 'indigo' ? 'from-indigo-400 to-indigo-600' : 
                    'from-purple-400 to-purple-600'
                  }`}
                >
                  {/* Subtle Shimmer Effect on Bar */}
                  <motion.div 
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-white/20 w-1/2 blur-sm"
                  />
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Decorative Corner Element */}
      <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
        {color === 'blue' ? <Server size={80} /> : color === 'indigo' ? <Brain size={80} /> : <Terminal size={80} />}
      </div>
    </motion.div>
  );
};

export default Skills;
