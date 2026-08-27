'use client';

import React, { useState } from 'react';
import { CareerMode, ProjectFilterMode, ResumeOption, Project } from '@/data/types';
import { OWNER_INFO } from '@/data/portfolioData';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ModeSwitcher } from '@/components/ModeSwitcher';
import { ProjectsSection } from '@/components/ProjectsSection';
import { HackathonsSection } from '@/components/HackathonsSection';
import { ResumeSection } from '@/components/ResumeSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { EducationSection } from '@/components/EducationSection';
import { GithubSection } from '@/components/GithubSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ToastContainer, ToastMessage } from '@/components/ToastNotification';
import { ProjectModal } from '@/components/ProjectModal';

export default function Home() {
  const [currentMode, setCurrentMode] = useState<CareerMode>('software-ai');
  const [projectFilterMode, setProjectFilterMode] = useState<ProjectFilterMode>('all');
  const [selectedHackathonProject, setSelectedHackathonProject] = useState<Project | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (type: 'info' | 'success' | 'warning', title: string, description: string) => {
    const id = Date.now().toString();
    const newToast: ToastMessage = { id, type, title, description };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Scroll helper
  const scrollToElement = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // View All Projects action helper
  const handleViewAllProjects = () => {
    setProjectFilterMode('all');
    scrollToElement('projects');
  };

  // Navigate to Resume Selector
  const handleNavigateResume = () => {
    scrollToElement('resume-selector');
  };

  // Resume Download / View Handler
  const handleDownloadResume = (option: ResumeOption) => {
    if (option.path.startsWith('http')) {
      window.open(option.path, '_blank', 'noopener,noreferrer');
      addToast('success', 'Opening Resume', `Opening ${option.title} in a new tab.`);
      return;
    }

    fetch(option.path, { method: 'HEAD' })
      .then((res) => {
        if (res.ok) {
          const a = document.createElement('a');
          a.href = option.path;
          a.download = option.path.split('/').pop() || 'taksh-patel-resume.pdf';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          addToast('success', 'Resume Download Started', `Downloading ${option.title}.`);
        } else {
          addToast(
            'info',
            'Resume File Pending',
            `Target path "${option.path}" configured. Contact ${OWNER_INFO.email} for a direct copy.`
          );
        }
      })
      .catch(() => {
        addToast(
          'info',
          'Resume File Pending',
          `Target path "${option.path}" configured. Contact ${OWNER_INFO.email} for a direct copy.`
        );
      });
  };

  // Copy Email Handler
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(OWNER_INFO.email);
    addToast('success', 'Email Copied', `${OWNER_INFO.email} copied to clipboard!`);
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      currentMode === 'software-ai' ? 'bg-radial-grid' : 'bg-cyber-grid'
    }`}>
      {/* Toast Notification Layer */}
      <ToastContainer toasts={toasts} onDismiss={removeToast} />

      {/* Header & Navigation */}
      <Navbar
        currentMode={currentMode}
        onModeChange={(mode) => {
          setCurrentMode(mode);
          setProjectFilterMode(mode);
        }}
        onNavigateResume={handleNavigateResume}
      />

      {/* Main Page Content */}
      <main>
        {/* Hero Section */}
        <Hero
          currentMode={currentMode}
          onViewProjects={handleViewAllProjects}
          onNavigateResume={handleNavigateResume}
        />

        {/* Primary Mode Switcher Control */}
        <div className="max-w-7xl mx-auto px-4 py-2">
          <ModeSwitcher
            currentMode={currentMode}
            onModeChange={(mode) => {
              setCurrentMode(mode);
              setProjectFilterMode(mode);
            }}
          />
        </div>

        {/* Featured Projects Section */}
        <ProjectsSection
          filterMode={projectFilterMode}
          onFilterChange={setProjectFilterMode}
        />

        {/* Hackathons & Competitions Section */}
        <HackathonsSection onSelectProject={setSelectedHackathonProject} />

        {/* Tailored Resume Selector Section */}
        <ResumeSection onDownloadResume={handleDownloadResume} />

        {/* About Section */}
        <AboutSection currentMode={currentMode} />

        {/* Technical Skills Section */}
        <SkillsSection currentMode={currentMode} />

        {/* Experience Section */}
        <ExperienceSection currentMode={currentMode} />

        {/* Education & Certifications Section */}
        <EducationSection currentMode={currentMode} />

        {/* GitHub Showcase Section */}
        <GithubSection />

        {/* Contact Section */}
        <ContactSection
          currentMode={currentMode}
          onCopyEmail={handleCopyEmail}
          onNavigateResume={handleNavigateResume}
        />
      </main>

      {/* Hackathon Project Modal */}
      <ProjectModal
        project={selectedHackathonProject}
        onClose={() => setSelectedHackathonProject(null)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
