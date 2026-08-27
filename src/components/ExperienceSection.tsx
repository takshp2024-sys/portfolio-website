'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CareerMode } from '@/data/types';
import { EXPERIENCE_DATA } from '@/data/portfolioData';
import { Briefcase, CheckCircle2, Calendar, MapPin, Sparkles, Building2 } from 'lucide-react';

interface ExperienceSectionProps {
  currentMode: CareerMode;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ currentMode }) => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono-tech text-cyan-400 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Work Timeline</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          Professional Experience
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mt-2">
          Engineering internship experience and technical contributions in robotics, artificial intelligence, and operations.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="space-y-8 max-w-4xl mx-auto">
        {EXPERIENCE_DATA.map((exp) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className={`rounded-2xl p-6 sm:p-8 transition-all ${
              exp.isPrimary
                ? currentMode === 'software-ai'
                  ? 'glass-panel border-l-4 border-l-cyan-500 shadow-xl'
                  : 'glass-panel border-l-4 border-l-emerald-500 shadow-xl'
                : 'bg-slate-900/40 border border-slate-800/60 opacity-85 hover:opacity-100'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-800/60">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                  {exp.isPrimary && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-tech uppercase font-bold bg-cyan-950/90 border border-cyan-500/40 text-cyan-300">
                      CURRENT ROLE
                    </span>
                  )}
                </div>
                <div className="text-sm font-semibold text-slate-300 flex items-center gap-1.5 mt-0.5">
                  <Building2 className="w-4 h-4 text-slate-400" />
                  <span>{exp.company}</span>
                </div>
              </div>

              <div className="flex flex-col sm:items-end text-xs font-mono-tech text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  {exp.period}
                </span>
                {exp.location && (
                  <span className="flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {exp.location}
                  </span>
                )}
              </div>
            </div>

            {/* Facts / Bullet Points */}
            <ul className="space-y-2.5">
              {exp.facts.map((fact, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                  <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                    exp.isPrimary
                      ? currentMode === 'software-ai' ? 'text-cyan-400' : 'text-emerald-400'
                      : 'text-slate-500'
                  }`} />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
