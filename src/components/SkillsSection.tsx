'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CareerMode } from '@/data/types';
import { SKILLS_DATA } from '@/data/portfolioData';
import { Terminal, Cpu, Shield, Sparkles } from 'lucide-react';

interface SkillsSectionProps {
  currentMode: CareerMode;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ currentMode }) => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono-tech text-cyan-400 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Technical Stack</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          Skills & Core Competencies
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mt-2">
          Structured by technical domain. Skills emphasized for{' '}
          <span className={currentMode === 'software-ai' ? 'text-cyan-400 font-semibold' : 'text-emerald-400 font-semibold'}>
            {currentMode === 'software-ai' ? 'Software / AI' : 'Cybersecurity'}
          </span>{' '}
          are highlighted below.
        </p>
      </div>

      {/* Skills Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS_DATA.map((category) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="glass-panel rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-sm font-mono-tech uppercase tracking-wider font-bold text-slate-200 border-b border-slate-800/80 pb-3 mb-4 flex items-center justify-between">
                <span>{category.title}</span>
                <Terminal className="w-4 h-4 text-slate-500" />
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const isEmphasized =
                    skill.modeEmphasis === 'both' || skill.modeEmphasis === currentMode;

                  return (
                    <span
                      key={skill.name}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono-tech transition-all ${
                        isEmphasized
                          ? currentMode === 'software-ai'
                            ? 'bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 shadow-sm shadow-cyan-900/30'
                            : 'bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 shadow-sm shadow-emerald-900/30'
                          : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
