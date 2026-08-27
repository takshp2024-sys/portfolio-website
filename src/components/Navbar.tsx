'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CareerMode } from '@/data/types';
import { OWNER_INFO } from '@/data/portfolioData';
import { Cpu, Shield, Menu, X, Terminal, FileDown } from 'lucide-react';

interface NavbarProps {
  currentMode: CareerMode;
  onModeChange: (mode: CareerMode) => void;
  onNavigateResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentMode, onModeChange, onNavigateResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Hackathons', href: '#hackathons' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Name */}
        <a href="#" className="flex items-center gap-2 group">
          <div className={`p-1.5 rounded-lg border transition-all ${
            currentMode === 'software-ai'
              ? 'bg-cyan-950/60 border-cyan-500/30 text-cyan-400 group-hover:border-cyan-400'
              : 'bg-emerald-950/60 border-emerald-500/30 text-emerald-400 group-hover:border-emerald-400'
          }`}>
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-slate-100 group-hover:text-cyan-400 transition-colors text-base tracking-tight">
              {OWNER_INFO.name}
            </span>
            <span className="hidden sm:inline-block ml-2 text-xs font-mono-tech text-slate-400 border border-slate-800 px-1.5 py-0.5 rounded">
              CS @ York
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-cyan-400 transition-colors py-1 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Header Quick Controls */}
        <div className="hidden md:flex items-center gap-3">
          {/* Quick Mode Toggle */}
          <button
            onClick={() => onModeChange(currentMode === 'software-ai' ? 'cybersecurity' : 'software-ai')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
              currentMode === 'software-ai'
                ? 'bg-cyan-950/40 border-cyan-500/40 text-cyan-300 hover:border-cyan-400'
                : 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300 hover:border-emerald-400'
            }`}
            title="Click to toggle portfolio mode"
          >
            {currentMode === 'software-ai' ? (
              <>
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>AI Mode</span>
              </>
            ) : (
              <>
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>Cyber Mode</span>
              </>
            )}
          </button>

          {/* Visible Resume Button -> Scrolls to Resume Selector */}
          <button
            onClick={onNavigateResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white transition-all shadow-sm"
          >
            <FileDown className="w-3.5 h-3.5 text-cyan-400" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => onModeChange(currentMode === 'software-ai' ? 'cybersecurity' : 'software-ai')}
            className={`p-2 rounded-lg border text-xs ${
              currentMode === 'software-ai'
                ? 'bg-cyan-950/60 border-cyan-500/40 text-cyan-400'
                : 'bg-emerald-950/60 border-emerald-500/40 text-emerald-400'
            }`}
            aria-label="Toggle mode"
          >
            {currentMode === 'software-ai' ? <Cpu className="w-4 h-4" /> : <Shield className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 pt-3 pb-6"
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
                <button
                  onClick={() => {
                    onNavigateResume();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold bg-slate-800 text-slate-100 hover:bg-slate-700 transition-colors"
                >
                  <FileDown className="w-4 h-4 text-cyan-400" />
                  <span>Choose & Download Resume</span>
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
