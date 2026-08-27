'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CareerMode } from '@/data/types';
import { Cpu, ShieldAlert, Sparkles, Terminal } from 'lucide-react';

interface ModeSwitcherProps {
  currentMode: CareerMode;
  onModeChange: (mode: CareerMode) => void;
}

export const ModeSwitcher: React.FC<ModeSwitcherProps> = ({ currentMode, onModeChange }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center my-6 px-4">
      <div className="text-center mb-4">
        <span className="text-xs font-mono-tech tracking-wider uppercase text-slate-400 flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          Interactive Portfolio Lens
        </span>
        <h2 className="text-xl md:text-2xl font-bold text-slate-100 mt-1">
          Select Specialization Mode
        </h2>
      </div>

      <div className="relative flex items-center p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl shadow-2xl max-w-md w-full">
        {/* Animated Background Slider */}
        <motion.div
          className={`absolute top-1.5 bottom-1.5 rounded-xl shadow-lg transition-colors ${
            currentMode === 'software-ai'
              ? 'bg-gradient-to-r from-cyan-600 to-blue-600 shadow-cyan-900/30'
              : 'bg-gradient-to-r from-emerald-600 to-teal-600 shadow-emerald-900/30'
          }`}
          initial={false}
          animate={{
            left: currentMode === 'software-ai' ? '0.375rem' : 'calc(50% + 0.1875rem)',
            width: 'calc(50% - 0.5625rem)',
          }}
          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
        />

        {/* Software / AI Option */}
        <button
          onClick={() => onModeChange('software-ai')}
          className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs md:text-sm font-semibold tracking-wide transition-colors ${
            currentMode === 'software-ai' ? 'text-white' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Cpu className={`w-4 h-4 ${currentMode === 'software-ai' ? 'text-white' : 'text-cyan-400'}`} />
          <span>SOFTWARE / AI</span>
        </button>

        {/* Cybersecurity Option */}
        <button
          onClick={() => onModeChange('cybersecurity')}
          className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs md:text-sm font-semibold tracking-wide transition-colors ${
            currentMode === 'cybersecurity' ? 'text-white' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <ShieldAlert className={`w-4 h-4 ${currentMode === 'cybersecurity' ? 'text-white' : 'text-emerald-400'}`} />
          <span>CYBERSECURITY</span>
        </button>
      </div>

      <div className="mt-3 text-xs text-slate-400 flex items-center gap-2">
        <Terminal className="w-3.5 h-3.5 text-slate-400" />
        <span>
          Showing projects, skills & resume tailored for{' '}
          <span className={`font-semibold ${currentMode === 'software-ai' ? 'text-cyan-400' : 'text-emerald-400'}`}>
            {currentMode === 'software-ai' ? 'Software Engineering & AI/ML' : 'Cybersecurity & Security Systems'}
          </span>
        </span>
      </div>
    </div>
  );
};
