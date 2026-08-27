'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CareerMode } from '@/data/types';
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from '@/data/portfolioData';
import { GraduationCap, Award, MapPin, Calendar, CheckCircle, Sparkles, BookOpen } from 'lucide-react';

interface EducationSectionProps {
  currentMode: CareerMode;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ currentMode }) => {
  const awsCerts = CERTIFICATIONS_DATA.filter((c) => c.category === 'AWS');
  const hpCerts = CERTIFICATIONS_DATA.filter((c) => c.category === 'HP Life');
  const anthropicCerts = CERTIFICATIONS_DATA.filter((c) => c.category === 'Anthropic');

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono-tech text-cyan-400 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Academic Background</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          Education & Certifications
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mt-2">
          University degree specialization and professional industry credentials.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-5 glass-panel rounded-3xl p-8 flex flex-col justify-between"
        >
          <div>
            <div className="p-3 rounded-2xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 w-fit mb-6">
              <GraduationCap className="w-7 h-7" />
            </div>

            <span className="text-xs font-mono-tech uppercase tracking-wider text-cyan-400 font-semibold">
              University Degree
            </span>

            <h3 className="text-2xl font-bold text-slate-100 mt-1 mb-2">
              {EDUCATION_DATA.institution}
            </h3>

            <p className="text-base font-semibold text-slate-200 mb-4">
              {EDUCATION_DATA.degree}
            </p>

            <div className="space-y-2 text-xs font-mono-tech text-slate-400 pt-2 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>{EDUCATION_DATA.period}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>{EDUCATION_DATA.location}</span>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400">
            <span className="font-semibold text-slate-200 block mb-1">Focus Areas:</span>
            Algorithms, Artificial Intelligence, Software Design, Computer Systems & Security Foundations.
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="lg:col-span-7 glass-panel rounded-3xl p-8 space-y-6"
        >
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <Award className="w-6 h-6 text-emerald-400" />
            <div>
              <h3 className="text-xl font-bold text-slate-100">Professional Certifications</h3>
              <p className="text-xs text-slate-400">Verified learning credentials across AWS, HP Life, and Anthropic</p>
            </div>
          </div>

          {/* AWS Group */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono-tech uppercase font-bold text-amber-400 tracking-wider">
              AWS Certifications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {awsCerts.map((cert) => (
                <div key={cert.name} className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center gap-2 text-xs font-medium text-slate-200">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{cert.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Anthropic Group */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono-tech uppercase font-bold text-cyan-400 tracking-wider">
              Anthropic Credentials
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {anthropicCerts.map((cert) => (
                <div key={cert.name} className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center gap-2 text-xs font-medium text-slate-200">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{cert.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* HP Life Group */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono-tech uppercase font-bold text-emerald-400 tracking-wider">
              HP Life Training
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {hpCerts.map((cert) => (
                <div key={cert.name} className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center gap-2 text-xs font-medium text-slate-200">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{cert.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
