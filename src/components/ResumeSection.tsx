'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RESUME_OPTIONS, OWNER_INFO } from '@/data/portfolioData';
import { ResumeOption } from '@/data/types';
import { FileDown, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';

interface ResumeSectionProps {
  onDownloadResume: (option: ResumeOption) => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onDownloadResume }) => {
  const [selectedResumeId, setSelectedResumeId] = useState<'full' | 'software-ai' | 'cybersecurity'>('full');

  const selectedOption = RESUME_OPTIONS.find((r) => r.id === selectedResumeId) || RESUME_OPTIONS[0];

  return (
    <section id="resume-selector" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="glass-panel rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto text-center relative overflow-hidden">
        {/* Subtle Background Radiant Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[140px] opacity-15 bg-cyan-500 pointer-events-none" />

        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono-tech text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Recruiting & Resume Access</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Choose a Resume
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-lg mx-auto leading-relaxed">
            &quot;Tailored versions for different engineering paths.&quot;
          </p>

          {/* Segmented Selector Controls */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-950/90 border border-slate-800 max-w-xl mx-auto">
            {RESUME_OPTIONS.map((option) => {
              const isActive = option.id === selectedResumeId;

              return (
                <button
                  key={option.id}
                  onClick={() => setSelectedResumeId(option.id)}
                  className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-950/50'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>

          {/* Dynamic Description Card */}
          <motion.div
            key={selectedOption.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80 max-w-lg mx-auto text-center"
          >
            <h3 className="text-base font-bold text-slate-100 mb-1">
              {selectedOption.title}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-mono-tech">
              {selectedOption.description}
            </p>
          </motion.div>

          {/* Single Prominent Download Button */}
          <div className="pt-2">
            <button
              onClick={() => onDownloadResume(selectedOption)}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-900/40 hover:scale-[1.02] transition-all"
            >
              <FileDown className="w-4 h-4" />
              <span>Download {selectedOption.label} Resume</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
