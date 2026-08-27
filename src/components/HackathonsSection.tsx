'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HACKATHONS, PROJECTS } from '@/data/portfolioData';
import { Project } from '@/data/types';
import { Trophy, ArrowUpRight, Sparkles, Code, CheckCircle, ExternalLink } from 'lucide-react';
import { GithubIcon, DevpostIcon } from './ui/Icons';

interface HackathonsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const HackathonsSection: React.FC<HackathonsSectionProps> = ({ onSelectProject }) => {
  const hasValidLink = (url?: string) => Boolean(url && url.trim() !== '' && url !== '#');

  return (
    <section id="hackathons" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono-tech text-cyan-400 mb-3">
          <Trophy className="w-3.5 h-3.5" />
          <span>Hackathons & Competitions</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          Building Under Pressure
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mt-2">
          &quot;Building, shipping, and experimenting under pressure.&quot;
        </p>
      </div>

      {/* Hackathon Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {HACKATHONS.map((item) => {
          const matchingProject = PROJECTS.find((p) => p.id === item.projectId);

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              onClick={() => {
                if (matchingProject) onSelectProject(matchingProject);
              }}
              className="glass-panel rounded-2xl p-6 flex flex-col justify-between cursor-pointer group hover:border-cyan-500/40 transition-all"
            >
              <div>
                {/* Header Metadata */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono-tech font-semibold bg-cyan-950/80 border border-cyan-500/30 text-cyan-300">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono-tech text-slate-400 flex items-center gap-1">
                    <span>{item.year}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>

                <div className="text-xs font-mono-tech text-slate-400 font-semibold mb-1">
                  {item.hackathonName}
                </div>

                <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="text-xs text-slate-400 mt-0.5 mb-3">{item.subtitle}</p>
                )}

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {item.shortDescription}
                </p>

                {item.myContribution && (
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 mb-4">
                    <strong className="text-cyan-400 font-mono-tech block mb-0.5">My Contribution:</strong>
                    {item.myContribution}
                  </div>
                )}
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono-tech bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* External Action Links (only rendered if valid URL) */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold">
                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    {hasValidLink(item.links.github) && (
                      <a
                        href={item.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {hasValidLink(item.links.devpost) && (
                      <a
                        href={item.links.devpost}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 hover:border-cyan-500/40 transition-colors"
                        title="Devpost Submission"
                      >
                        <DevpostIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <span className="text-cyan-400 group-hover:underline font-mono-tech">
                    Inspect Hackathon Specs →
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
