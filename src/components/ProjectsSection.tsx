'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectFilterMode, Project } from '@/data/types';
import { PROJECTS } from '@/data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { SecurityDashboardPreview } from './SecurityDashboardPreview';
import { PerimeterArchitectureVisual } from './PerimeterArchitectureVisual';
import { ArrowUpRight, Activity, Sparkles, Layers, ShieldCheck, Cpu, Globe, Video } from 'lucide-react';
import { GithubIcon, DevpostIcon } from './ui/Icons';

interface ProjectsSectionProps {
  filterMode: ProjectFilterMode;
  onFilterChange: (mode: ProjectFilterMode) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  filterMode,
  onFilterChange,
}) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const hasValidLink = (url?: string) => Boolean(url && url.trim() !== '' && url !== '#');

  // Filter & sort strictly based on prompt specs
  const filteredProjects = PROJECTS.filter((p) => {
    if (filterMode === 'all') return true;
    return p.modes.includes(filterMode);
  }).sort((a, b) => {
    if (filterMode === 'all') {
      const order = [
        'perimeter',
        'coursechat',
        'robot-sensor-anomaly-detector',
        'siem-lite',
        'forensics-triage-tool',
        'aura-engine',
        'facial-recognition-pipeline',
        'motion',
      ];
      return order.indexOf(a.id) - order.indexOf(b.id);
    } else if (filterMode === 'software-ai') {
      const order = ['coursechat', 'robot-sensor-anomaly-detector', 'aura-engine', 'motion'];
      return order.indexOf(a.id) - order.indexOf(b.id);
    } else {
      const order = [
        'perimeter',
        'siem-lite',
        'forensics-triage-tool',
        'facial-recognition-pipeline',
        'robot-sensor-anomaly-detector',
      ];
      return order.indexOf(a.id) - order.indexOf(b.id);
    }
  });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono-tech text-cyan-400 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Engineering Portfolio</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          Featured Engineering Projects
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mt-2">
          Click any project card to inspect technical specifications, architecture diagrams, and empirical metrics.
        </p>
      </div>

      {/* Segmented Filter Control Tabs */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center p-1.5 rounded-2xl bg-slate-950/90 border border-slate-800 shadow-2xl max-w-lg w-full overflow-x-auto no-scrollbar">
          <button
            onClick={() => onFilterChange('all')}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              filterMode === 'all'
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            ALL PROJECTS
          </button>

          <button
            onClick={() => onFilterChange('software-ai')}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              filterMode === 'software-ai'
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            SOFTWARE / AI
          </button>

          <button
            onClick={() => onFilterChange('cybersecurity')}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              filterMode === 'cybersecurity'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            CYBERSECURITY
          </button>
        </div>
      </div>

      {/* Projects Grid with Tiered Layout */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              onClick={() => setSelectedProject(project)}
              className={`group cursor-pointer rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between ${
                project.tier === 1
                  ? 'glass-panel border-cyan-500/30 shadow-2xl md:col-span-2 lg:col-span-1'
                  : 'glass-panel'
              }`}
            >
              <div>
                {/* Header Metadata */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono-tech font-semibold bg-cyan-950/70 border border-cyan-500/30 text-cyan-300">
                      {project.category}
                    </span>
                    {project.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono-tech font-semibold bg-emerald-950/80 border border-emerald-500/30 text-emerald-300">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono-tech text-slate-400 flex items-center gap-1">
                    <span>{project.year}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-xs font-medium text-slate-400 mt-0.5 mb-3">
                    {project.subtitle}
                  </p>
                )}

                {/* Short Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {project.shortDescription}
                </p>

                {/* Special Perimeter Concept Visualization */}
                {project.id === 'perimeter' && (
                  <div className="mb-5">
                    <PerimeterArchitectureVisual />
                  </div>
                )}

                {/* Special Robot Sensor Anomaly Detector Metric Grid */}
                {project.id === 'robot-sensor-anomaly-detector' && (
                  <div className="mb-5 p-4 rounded-xl bg-slate-950/90 border border-cyan-500/20">
                    <div className="text-[10px] font-mono-tech uppercase text-cyan-400 tracking-wider mb-2 flex items-center gap-1">
                      <Activity className="w-3.5 h-3.5" /> High-Impact Empirical Metrics
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center font-mono-tech">
                      <div className="p-2 rounded bg-slate-900 border border-slate-800">
                        <div className="text-base font-bold text-cyan-400">0.82</div>
                        <div className="text-[10px] text-slate-400">F1 Score</div>
                      </div>
                      <div className="p-2 rounded bg-slate-900 border border-slate-800">
                        <div className="text-base font-bold text-cyan-400">0.89</div>
                        <div className="text-[10px] text-slate-400">ROC-AUC</div>
                      </div>
                      <div className="p-2 rounded bg-slate-900 border border-slate-800">
                        <div className="text-base font-bold text-emerald-400">4</div>
                        <div className="text-[10px] text-slate-400">Fault Types</div>
                      </div>
                      <div className="p-2 rounded bg-slate-900 border border-slate-800">
                        <div className="text-base font-bold text-emerald-400">+10 F1</div>
                        <div className="text-[10px] text-slate-400">vs Baseline</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Special SIEM-lite Security Dashboard Preview */}
                {project.id === 'siem-lite' && (
                  <div className="mb-5">
                    <SecurityDashboardPreview />
                  </div>
                )}
              </div>

              <div>
                {/* Tech Badges */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded text-[11px] font-mono-tech bg-slate-900/90 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono-tech bg-slate-900 text-slate-400">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  {/* External Links Preview (Only rendered if URL is valid) */}
                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    {hasValidLink(project.links.github) && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {hasValidLink(project.links.liveDemo) && (
                      <a
                        href={project.links.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 hover:border-cyan-500/40 transition-colors"
                        title="Live Dashboard"
                      >
                        <Globe className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {hasValidLink(project.links.demoVideo) && (
                      <a
                        href={project.links.demoVideo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400 hover:border-emerald-500/40 transition-colors"
                        title="Watch Demo"
                      >
                        <Video className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {hasValidLink(project.links.devpost) && (
                      <a
                        href={project.links.devpost}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 hover:border-cyan-500/40 transition-colors"
                        title="Devpost Submission"
                      >
                        <DevpostIcon className="w-3.5 h-3.5" />
                      </a>
                    )}

                    <span className="text-xs font-semibold text-cyan-400 group-hover:underline ml-1">
                      Inspect Specs
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
