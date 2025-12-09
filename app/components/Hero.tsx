'use client';

import { Sparkles, TrendingUp, Users } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden rounded-lg glass-effect p-8 border border-white/10">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent"></div>
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-6 h-6 text-accent" />
          <span className="text-sm font-medium text-accent">Launch Your Token</span>
        </div>
        <h2 className="text-4xl font-bold mb-4 gradient-text">
          Launch tokens & fundraise on Base
        </h2>
        <p className="text-lg text-fg/70 mb-6 max-w-2xl">
          Create and deploy tokens directly from Farcaster in minutes. 
          Leverage Base for low-cost transactions and integrated social funding.
        </p>
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-accent" />
            </div>
            <div>
              <div className="text-sm text-fg/60">Total Raised</div>
              <div className="text-lg font-bold">$2.4M</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-success/20 flex items-center justify-center">
              <Users className="w-5 h-5 text-success" />
            </div>
            <div>
              <div className="text-sm text-fg/60">Active Projects</div>
              <div className="text-lg font-bold">156</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
