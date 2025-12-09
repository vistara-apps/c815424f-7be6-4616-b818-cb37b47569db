'use client';

import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TokenLauncher } from './components/TokenLauncher';
import { ActiveProjects } from './components/ActiveProjects';
import { Stats } from './components/Stats';

export default function Home() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // CRITICAL: Call sdk.actions.ready() to prevent infinite loading
    sdk.actions.ready();
    setIsReady(true);
  }, []);

  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        <Hero />
        <Stats />
        <TokenLauncher />
        <ActiveProjects />
      </div>
    </main>
  );
}
