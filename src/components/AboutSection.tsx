'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CareerMode } from '@/data/types';
import { OWNER_INFO } from '@/data/portfolioData';
import { User, GraduationCap, Briefcase, Code, ShieldCheck, MapPin, Terminal, Cpu } from 'lucide-react';

interface AboutSectionProps {
  currentMode: CareerMode;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentMode }) => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="glass-panel rounded-3xl p-8 sm:p-12 relative overflow-hidden">
        {/* Ambient subtle glow overlay */}
        <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] opacity-10 pointer-events-none ${
          currentMode === 'software-ai' ? 'bg-cyan-500' : 'bg-emerald-500'
        }`} />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Title & Key Badges */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono-tech text-cyan-400">
              <User className="w-3.5 h-3.5" />
              <span>Engineering Profile</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              About Me
            </h2>

            <p className="text-sm text-slate-400 leading-relaxed">
              I am a Computer Science Honours student at York University dedicated to designing high-performance software systems, predictive artificial intelligence models, and resilient cybersecurity infrastructure.
            </p>

            <div className="space-y-3 pt-2 font-mono-tech text-xs">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <div className="font-semibold text-slate-200">{OWNER_INFO.degree}</div>
                  <div className="text-slate-400">{OWNER_INFO.university} (2024 – 2029)</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                <Briefcase className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="font-semibold text-slate-200">Artificial Intelligence Intern</div>
                  <div className="text-slate-400">Kevares Autonomous Services (2026 – Present)</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                <MapPin className="w-4 h-4 text-violet-400 shrink-0" />
                <div>
                  <div className="font-semibold text-slate-200">Location</div>
                  <div className="text-slate-400">{OWNER_INFO.location}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Focus */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed">
            <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-4">
              <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                {currentMode === 'software-ai' ? (
                  <>
                    <Cpu className="w-5 h-5 text-cyan-400" />
                    <span>Software Engineering & Artificial Intelligence Focus</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    <span>Cybersecurity & Threat Analysis Focus</span>
                  </>
                )}
              </h3>

              <p>
                My technical experience spans machine learning pipelines, time-series anomaly detection algorithms, RAG architectures, and full-stack software development. Currently at Kevares Autonomous Services, I work on robotics dataset preprocessing, predictive actuator models, and low-level hardware monitoring frameworks.
              </p>

              <p>
                Parallel to software and AI, I develop security instrumentation tools, including custom SIEM log ingestion engines, volatile memory forensics CLIs, and biometric identity verification pipelines.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono-tech">
                <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-cyan-400">
                  Data Pipelines & ML
                </span>
                <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-emerald-400">
                  Security Monitoring & Forensics
                </span>
                <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-violet-400">
                  Full-Stack Architecture
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
