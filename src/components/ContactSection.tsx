'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CareerMode } from '@/data/types';
import { OWNER_INFO } from '@/data/portfolioData';
import { Mail, Copy, FileDown, Sparkles, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon, DevpostIcon } from './ui/Icons';

interface ContactSectionProps {
  currentMode: CareerMode;
  onCopyEmail: () => void;
  onNavigateResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  currentMode,
  onCopyEmail,
  onNavigateResume,
}) => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="glass-panel rounded-3xl p-8 sm:p-12 relative overflow-hidden text-center max-w-4xl mx-auto">
        {/* Subtle Background Glow */}
        <div className={`absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-[140px] opacity-15 pointer-events-none ${
          currentMode === 'software-ai' ? 'bg-cyan-500' : 'bg-emerald-500'
        }`} />

        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono-tech text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Recruiting & Inquiries</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Get In Touch
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-lg mx-auto leading-relaxed">
            I am currently open to Software Engineering, Artificial Intelligence/ML, and Cybersecurity internship/co-op opportunities for upcoming terms.
          </p>

          {/* Email Box */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-3 rounded-2xl bg-slate-950/80 border border-slate-800 max-w-md w-full mx-auto">
            <div className="flex items-center gap-2 px-3 py-1.5 text-sm font-mono-tech text-slate-200 overflow-hidden text-ellipsis">
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="truncate">{OWNER_INFO.email}</span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={onCopyEmail}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 transition-colors"
                title="Copy email to clipboard"
              >
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copy</span>
              </button>

              <a
                href={`mailto:${OWNER_INFO.email}`}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Resume & Social Actions */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onNavigateResume}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs transition-all shadow-md ${
                currentMode === 'software-ai'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:opacity-90'
                  : 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:opacity-90'
              }`}
            >
              <FileDown className="w-4 h-4" />
              <span>Select & Download Tailored Resume</span>
            </button>

            <a
              href={OWNER_INFO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={OWNER_INFO.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-4 h-4 text-cyan-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href={OWNER_INFO.links.devpost}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
            >
              <DevpostIcon className="w-4 h-4 text-emerald-400" />
              <span>Devpost</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
