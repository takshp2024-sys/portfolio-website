'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CareerMode } from '@/data/types';
import { OWNER_INFO } from '@/data/portfolioData';
import { FileDown, ArrowDown, MapPin, GraduationCap, Trophy } from 'lucide-react';
import { GithubIcon, LinkedinIcon, DevpostIcon } from './ui/Icons';

interface HeroProps {
  currentMode: CareerMode;
  onViewProjects: () => void;
  onNavigateResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentMode, onViewProjects, onNavigateResume }) => {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
      {/* Radiant background glow behind hero */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className={`w-[500px] h-[500px] rounded-full blur-[140px] opacity-20 transition-all duration-700 ${
          currentMode === 'software-ai' ? 'bg-cyan-500' : 'bg-emerald-500'
        }`} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-lg mb-6"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
              currentMode === 'software-ai' ? 'bg-cyan-400' : 'bg-emerald-400'
            }`} />
            <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
              currentMode === 'software-ai' ? 'bg-cyan-500' : 'bg-emerald-500'
            }`} />
          </span>
          <span className="text-xs font-medium text-slate-300 tracking-wide">
            {OWNER_INFO.availabilityText}
          </span>
        </motion.div>

        {/* Main Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-100 mb-4"
        >
          {OWNER_INFO.name}
        </motion.h1>

        {/* Primary Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400 bg-clip-text text-transparent"
        >
          &quot;{OWNER_INFO.headline}&quot;
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mb-8"
        >
          {OWNER_INFO.subheadline}
        </motion.p>

        {/* Quick Metadata Chips */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10 text-xs font-mono-tech text-slate-400"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            York University (Grad April 2029)
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            Vaughan, Ontario, Canada
          </span>
        </motion.div>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10"
        >
          <button
            onClick={onViewProjects}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg hover:scale-[1.02] ${
              currentMode === 'software-ai'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-cyan-900/40 hover:shadow-cyan-900/60'
                : 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-emerald-900/40 hover:shadow-emerald-900/60'
            }`}
          >
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          <a
            href="#hackathons"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 transition-all shadow-md hover:scale-[1.02]"
          >
            <Trophy className="w-4 h-4 text-cyan-400" />
            <span>View Hackathons</span>
          </a>

          <button
            onClick={onNavigateResume}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 transition-all shadow-md hover:scale-[1.02]"
          >
            <FileDown className="w-4 h-4 text-slate-400" />
            <span>Download Resume</span>
          </button>
        </motion.div>

        {/* Social Link Placeholders */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href={OWNER_INFO.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={OWNER_INFO.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href={OWNER_INFO.links.devpost}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
            aria-label="Devpost Profile"
          >
            <DevpostIcon className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
