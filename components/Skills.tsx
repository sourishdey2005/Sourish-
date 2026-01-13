
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-4">Technical Arsenal</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            A comprehensive set of tools and technologies mastered for production-grade engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Cloud & DevOps */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3 text-blue-600">01</span>
              Cloud & DevOps
            </h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.cloud.map(skill => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
          </div>

          {/* AI/ML */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-3 text-indigo-600">02</span>
              AI & Machine Learning
            </h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.ai.map(skill => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
          </div>

          {/* Programming */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3 text-purple-600">03</span>
              Programming
            </h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.programming.map(skill => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Explicitly type SkillBadge as React.FC to allow the standard 'key' prop when mapping over items
const SkillBadge: React.FC<{ name: string }> = ({ name }) => (
  <motion.span
    whileHover={{ scale: 1.05 }}
    className="px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
  >
    {name}
  </motion.span>
);

export default Skills;
