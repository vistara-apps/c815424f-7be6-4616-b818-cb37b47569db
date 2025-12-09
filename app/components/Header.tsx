'use client';

import { Rocket } from 'lucide-react';
import { ConnectWallet } from './ConnectWallet';

export function Header() {
  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">OkieLaunch</h1>
              <p className="text-xs text-fg/60">Launch on Base</p>
            </div>
          </div>
          <ConnectWallet />
        </div>
      </div>
    </header>
  );
}
