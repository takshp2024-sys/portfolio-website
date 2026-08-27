'use client';

import React from 'react';
import { Shield, AlertTriangle, Activity, Lock, Terminal } from 'lucide-react';

export const SecurityDashboardPreview: React.FC = () => {
  return (
    <div className="w-full rounded-xl bg-slate-950 border border-slate-800 p-4 font-mono-tech text-xs overflow-hidden shadow-2xl">
      {/* Dashboard Top Bar */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3 text-slate-400">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-emerald-400" />
          <span className="font-bold text-slate-200">SIEM-lite Analyst Control Node</span>
          <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-[10px]">
            DEMO PREVIEW
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] hidden sm:flex">
          <span>Ingest Rate: 1.4k eps</span>
          <span className="text-slate-600">|</span>
          <span>Engine: Active</span>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-3">
        <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
          <div className="text-slate-400 text-[10px]">Active Signatures</div>
          <div className="text-base font-bold text-slate-100 mt-0.5">14 Rules</div>
        </div>
        <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
          <div className="text-slate-400 text-[10px]">ML Anomaly Model</div>
          <div className="text-base font-bold text-emerald-400 mt-0.5">Isolation Forest</div>
        </div>
        <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
          <div className="text-slate-400 text-[10px]">Sliding Window</div>
          <div className="text-base font-bold text-amber-400 mt-0.5">5m / 10 Auth</div>
        </div>
        <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
          <div className="text-slate-400 text-[10px]">Normalizer</div>
          <div className="text-base font-bold text-cyan-400 mt-0.5">Source-Agnostic</div>
        </div>
      </div>

      {/* Illustrative Alert Stream */}
      <div className="space-y-1.5 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80">
        <div className="text-[10px] uppercase tracking-wider text-slate-400 flex items-center justify-between mb-1">
          <span className="flex items-center gap-1">
            <Activity className="w-3 h-3 text-cyan-400" /> Illustrative Ingestion Alert Feed
          </span>
          <span className="text-slate-400 italic">Sample Event Log</span>
        </div>

        <div className="flex items-center justify-between p-1.5 rounded bg-red-950/40 border border-red-500/30 text-red-300">
          <div className="flex items-center gap-2 overflow-hidden">
            <AlertTriangle className="w-3.5 h-3.5 text-red-400 shrink-0" />
            <span className="font-semibold shrink-0">[CRITICAL]</span>
            <span className="truncate">Brute-Force Velocity Threshold Exceeded — IP 192.168.1.104 (15 failed auth/60s)</span>
          </div>
          <span className="text-[10px] text-slate-400 shrink-0 ml-2">18:14:02</span>
        </div>

        <div className="flex items-center justify-between p-1.5 rounded bg-amber-950/40 border border-amber-500/30 text-amber-300">
          <div className="flex items-center gap-2 overflow-hidden">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="font-semibold shrink-0">[HIGH]</span>
            <span className="truncate">Isolation Forest Anomaly — Off-Hours Login Pattern (Score: -0.74)</span>
          </div>
          <span className="text-[10px] text-slate-400 shrink-0 ml-2">18:12:45</span>
        </div>

        <div className="flex items-center justify-between p-1.5 rounded bg-slate-850 border border-slate-800 text-slate-300">
          <div className="flex items-center gap-2 overflow-hidden">
            <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="font-semibold text-slate-400 shrink-0">[INFO]</span>
            <span className="truncate">Normalized Log Ingestion Event — Source: Syslog-Linux</span>
          </div>
          <span className="text-[10px] text-slate-400 shrink-0 ml-2">18:10:00</span>
        </div>
      </div>
    </div>
  );
};
