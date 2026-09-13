import React, { useState } from 'react';
import { Github, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { ProjectDomain, Project as ProjectType } from '../types';

const SimpleProjects: React.FC = () => {
  const [filter, setFilter] = useState<ProjectDomain | 'All'>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  const filterOptions: (ProjectDomain | 'All')[] = ['All', 'NLP', 'ML', 'Cloud', 'Finance', 'IoT'];
  const filteredProjects = PROJECTS.filter(p => filter === 'All' || p.domain === filter);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Featured Projects & Innovations</h2>
          <p className="text-sm text-slate-500 mt-1">
            Production-grade systems across Cloud Architecture, NLP, Quantitative Finance, and MLOps.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-xl">
          {filterOptions.map(opt => (
            <button
              key={opt}
              onClick={() => setFilter(opt)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                filter === opt
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProjects.map((project, idx) => {
          const stack = project.stack || [];
          return (
            <div
              key={project.title + idx}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-2 py-0.5 rounded">
                    {project.domain}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 text-slate-400 hover:text-slate-800 transition-colors"
                        title="GitHub"
                      >
                        <Github size={15} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 text-slate-400 hover:text-indigo-600 transition-colors"
                        title="Live Demo"
                      >
                        <ArrowUpRight size={15} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech stack badges */}
                {stack.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3 pt-3 border-t border-slate-100">
                    {stack.slice(0, 4).map(tech => (
                      <span key={tech} className="px-2 py-0.5 bg-slate-50 text-slate-600 text-[10px] font-medium rounded border border-slate-200">
                        {tech}
                      </span>
                    ))}
                    {stack.length > 4 && (
                      <span className="px-1.5 py-0.5 bg-slate-50 text-slate-400 text-[10px] rounded">
                        +{stack.length - 4}
                      </span>
                    )}
                  </div>
                )}

                {/* Details button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-1.5 text-center text-xs font-semibold text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors cursor-pointer"
                >
                  View Details & Highlights
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 relative max-h-[85vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                  {selectedProject.domain}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-slate-400 hover:text-slate-700 p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-5">
              {selectedProject.description}
            </p>

            {/* Achievements */}
            {selectedProject.achievements && selectedProject.achievements.length > 0 && (
              <div className="mb-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Key Highlights</h4>
                <ul className="space-y-1.5">
                  {selectedProject.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="text-xs text-slate-700 flex items-start gap-2">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            {selectedProject.stack && selectedProject.stack.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.stack.map(s => (
                    <span key={s} className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-md">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-4 rounded-xl bg-slate-900 text-white text-xs font-bold text-center hover:bg-slate-800 transition-colors"
                >
                  View on GitHub
                </a>
              )}
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-4 rounded-xl bg-indigo-600 text-white text-xs font-bold text-center hover:bg-indigo-700 transition-colors"
                >
                  Open Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimpleProjects;
