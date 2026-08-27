'use client';

import React from 'react';
import { ShieldCheck, Lock, CreditCard, Store, ShieldAlert, AlertTriangle, ArrowRight, Zap, RefreshCw } from 'lucide-react';

export const PerimeterArchitectureVisual: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-950 border border-slate-800 p-5 font-mono-tech text-xs overflow-hidden shadow-2xl space-y-5">
      {/* Visual Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-slate-300">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span className="font-bold text-slate-100">Perimeter Vault Architecture</span>
        </div>
        <span className="px-2.5 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-[10px] font-semibold">
          FinTech Tokenization
        </span>
      </div>

      {/* Flow 1: Vault Tokenization Concept */}
      <div>
        <div className="text-[10px] font-semibold text-cyan-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
          <Zap className="w-3.5 h-3.5" /> 1. Vendor-Scoped Tokenization Flow
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center text-[11px]">
          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex flex-col items-center justify-center">
            <CreditCard className="w-4 h-4 text-slate-400 mb-1" />
            <span className="text-slate-200 font-semibold">Real Payment Credentials</span>
          </div>

          <div className="hidden sm:flex items-center justify-center text-cyan-400">
            <ArrowRight className="w-4 h-4" />
          </div>

          <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-500/40 flex flex-col items-center justify-center">
            <Lock className="w-4 h-4 text-cyan-400 mb-1" />
            <span className="text-cyan-300 font-semibold">Perimeter Vault</span>
          </div>

          <div className="hidden sm:flex items-center justify-center text-cyan-400">
            <ArrowRight className="w-4 h-4" />
          </div>

          <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/40 flex flex-col items-center justify-center">
            <Store className="w-4 h-4 text-emerald-400 mb-1" />
            <span className="text-emerald-300 font-semibold">Vendor-Scoped Token</span>
          </div>
        </div>
      </div>

      {/* Flow 2: Breach Containment & Revocation */}
      <div className="pt-3 border-t border-slate-800/80">
        <div className="text-[10px] font-semibold text-amber-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
          <ShieldAlert className="w-3.5 h-3.5" /> 2. Breach Response & Targeted Token Revocation
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[11px]">
          <div className="p-2.5 rounded-lg bg-red-950/40 border border-red-500/30 flex flex-col items-center justify-center">
            <AlertTriangle className="w-4 h-4 text-red-400 mb-1" />
            <span className="text-red-300 font-semibold">Vendor Breach</span>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex flex-col items-center justify-center">
            <RefreshCw className="w-4 h-4 text-amber-400 mb-1" />
            <span className="text-slate-200 font-semibold">Identify Vendor → Token</span>
          </div>

          <div className="p-2.5 rounded-lg bg-red-950/40 border border-red-500/30 flex flex-col items-center justify-center">
            <Lock className="w-4 h-4 text-red-400 mb-1" />
            <span className="text-red-300 font-semibold">Revoke Token</span>
          </div>

          <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/40 flex flex-col items-center justify-center">
            <ShieldCheck className="w-4 h-4 text-emerald-400 mb-1" />
            <span className="text-emerald-300 font-semibold">Other Vendors Safe</span>
          </div>
        </div>
      </div>
    </div>
  );
};
