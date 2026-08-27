'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/data/types';
import { X, CheckCircle, AlertCircle, Layers, BarChart3, Tag, Video, Globe, UserCheck } from 'lucide-react';
import { GithubIcon, DevpostIcon } from './ui/Icons';
import { PerimeterArchitectureVisual } from './PerimeterArchitectureVisual';
import { SecurityDashboardPreview } from './SecurityDashboardPreview';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project, onClose]);

  if (!project) return null;

  const hasValidLink = (url?: string) => Boolean(url && url.trim() !== '' && url !== '#');

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative z-10 w-full max-w-3xl rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col text-slate-100"
        >
          {/* Header */}
          <div className="flex items-start justify-between p-6 border-b border-slate-800 bg-slate-950/50">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono-tech font-semibold bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
                  {project.category}
                </span>
                {project.badge && (
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono-tech font-semibold bg-emerald-950/80 border border-emerald-500/30 text-emerald-400">
                    {project.badge}
                  </span>
                )}
                <span className="text-xs font-mono-tech text-slate-400">
                  {project.year}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-100 tracking-tight">
                {project.title}
              </h3>
              {project.subtitle && (
                <p className="text-sm text-slate-400 mt-0.5">{project.subtitle}</p>
              )}
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 overflow-y-auto space-y-6 flex-1">
            {/* Important Note Alert if provided */}
            {project.importantNote && (
              <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-950/30 border border-amber-500/30 text-amber-200 text-xs leading-relaxed">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold text-amber-300">Project Scope Notice: </strong>
                  {project.importantNote}
                </div>
              </div>
            )}

            {/* Perimeter Custom Conceptual Architecture Visual */}
            {project.isPerimeterVisual && (
              <div className="mb-4">
                <PerimeterArchitectureVisual />
              </div>
            )}

            {/* Security Dashboard Preview for SIEM-lite */}
            {project.isSecurityDashboard && (
              <div className="mb-4">
                <SecurityDashboardPreview />
              </div>
            )}

            {/* Metrics Section (if present) */}
            {project.metrics && project.metrics.length > 0 && (
              <div>
                <h4 className="text-xs font-mono-tech uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-3">
                  <BarChart3 className="w-4 h-4 text-cyan-400" /> Empirical Performance Metrics
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 text-center">
                      <div className="text-xl font-bold text-cyan-400 font-mono-tech">{metric.value}</div>
                      <div className="text-xs font-medium text-slate-200 mt-0.5">{metric.label}</div>
                      {metric.subtext && (
                        <div className="text-[10px] text-slate-400 mt-1">{metric.subtext}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Detailed Overview */}
            <div>
              <h4 className="text-xs font-mono-tech uppercase tracking-wider text-slate-400 mb-2">
                Project Overview
              </h4>
              <div className="space-y-2 text-sm text-slate-300 leading-relaxed">
                {project.fullDescription.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* My Contribution Section (Distinct for team/hackathon projects) */}
            {project.myContribution && (
              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30">
                <h4 className="text-xs font-mono-tech uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 mb-1">
                  <UserCheck className="w-4 h-4" /> My Contribution
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {project.myContribution}
                </p>
              </div>
            )}

            {/* Key Accomplishments */}
            <div>
              <h4 className="text-xs font-mono-tech uppercase tracking-wider text-slate-400 mb-3">
                Key Accomplishments & Technical Highlights
              </h4>
              <ul className="space-y-2">
                {project.keyAccomplishments.map((accomplishment, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{accomplishment}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture Notes */}
            {project.architectureNotes && project.architectureNotes.length > 0 && (
              <div>
                <h4 className="text-xs font-mono-tech uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-3">
                  <Layers className="w-4 h-4 text-cyan-400" /> System Workflow Breakdown
                </h4>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-2 font-mono-tech text-xs text-slate-300">
                  {project.architectureNotes.map((note, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-400">→</span>
                      <span>{note}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-mono-tech uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-3">
                <Tag className="w-4 h-4 text-slate-400" /> Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono-tech bg-slate-800 border border-slate-700 text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions (Only render buttons if valid URL exists) */}
          <div className="p-6 border-t border-slate-800 bg-slate-950/50 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {hasValidLink(project.links.chromeExtension) && (
                <a
                  href={project.links.chromeExtension}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white transition-colors shadow-sm"
                >
                  <Globe className="w-4 h-4" />
                  <span>Chrome Extension</span>
                </a>
              )}

              {hasValidLink(project.links.github) && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>{project.id === 'perimeter' ? 'GitHub Repository' : 'GitHub'}</span>
                </a>
              )}

              {hasValidLink(project.links.liveDemo) && (
                <a
                  href={project.links.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span>{project.id === 'perimeter' ? 'Live Dashboard' : 'Live Demo'}</span>
                </a>
              )}

              {hasValidLink(project.links.devpost) && (
                <a
                  href={project.links.devpost}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-slate-700 transition-colors"
                >
                  <DevpostIcon className="w-4 h-4" />
                  <span>Devpost</span>
                </a>
              )}

              {hasValidLink(project.links.demoVideo) && (
                <a
                  href={project.links.demoVideo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                >
                  <Video className="w-4 h-4" />
                  <span>Watch Demo</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
