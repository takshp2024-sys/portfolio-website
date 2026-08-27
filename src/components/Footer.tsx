'use client';

import React from 'react';
import { OWNER_INFO } from '@/data/portfolioData';
import { ArrowUp, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-slate-900 bg-slate-950 py-10 px-4 sm:px-6 lg:px-8 text-xs font-mono-tech text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span>© {new Date().getFullYear()} {OWNER_INFO.name}. All rights reserved.</span>
        </div>

        <div className="text-slate-400 text-center">
          Computer Science Honours • York University
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 transition-colors"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
        </button>
      </div>
    </footer>
  );
};
