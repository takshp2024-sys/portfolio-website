'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { OWNER_INFO, PROJECTS } from '@/data/portfolioData';
import { ExternalLink, GitBranch, Code, Sparkles } from 'lucide-react';
import { GithubIcon } from './ui/Icons';

export const GithubSection: React.FC = () => {
  return (
    <section id="github" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono-tech text-cyan-400 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Code Repository & Activity</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          GitHub & Source Control
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mt-2">
          Open-source repositories, system implementations, and hackathon project codebases.
        </p>
      </div>

      <div className="glass-panel rounded-3xl p-8 max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-100">
              <GithubIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-100">
                @{OWNER_INFO.githubUser}
              </h3>
              <p className="text-xs font-mono-tech text-slate-400">
                GitHub Configuration Point • Public Repositories
              </p>
            </div>
          </div>

          <a
            href={OWNER_INFO.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-colors"
          >
            <span>Visit GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
          </a>
        </div>

        {/* Featured Codebase Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {PROJECTS.slice(0, 4).map((project) => (
            <div
              key={project.id}
              className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-cyan-500/30 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono-tech text-slate-400 mb-2">
                  <span className="flex items-center gap-1.5 font-semibold text-slate-200">
                    <Code className="w-3.5 h-3.5 text-cyan-400" />
                    {project.title}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px]">
                    Public
                  </span>
                </div>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-3">
                  {project.shortDescription}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 text-[11px] font-mono-tech text-slate-400">
                <span className="text-cyan-400">{project.technologies[0]}</span>
                <span className="flex items-center gap-1">
                  <GitBranch className="w-3 h-3" /> main
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
