'use client';

import { useState } from 'react';
import { Rocket, Coins, Users, TrendingUp } from 'lucide-react';

export function TokenLauncher() {
  const [formData, setFormData] = useState({
    name: '',
    symbol: '',
    supply: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Launching token:', formData);
  };

  return (
    <div className="glass-effect rounded-lg p-8 border border-white/10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
          <Rocket className="w-6 h-6 text-accent" />
        </div>
        <div>
          <h3 className="text-2xl font-bold">Launch Your Token</h3>
          <p className="text-sm text-fg/60">Deploy in minutes, no coding required</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Token Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g., My Awesome Token"
              className="w-full px-4 py-3 bg-surface border border-white/10 rounded-lg focus:outline-none focus:border-accent transition-colors duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Token Symbol</label>
            <input
              type="text"
              value={formData.symbol}
              onChange={(e) => setFormData({ ...formData, symbol: e.target.value })}
              placeholder="e.g., MAT"
              className="w-full px-4 py-3 bg-surface border border-white/10 rounded-lg focus:outline-none focus:border-accent transition-colors duration-200"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Total Supply</label>
          <input
            type="number"
            value={formData.supply}
            onChange={(e) => setFormData({ ...formData, supply: e.target.value })}
            placeholder="e.g., 1000000"
            className="w-full px-4 py-3 bg-surface border border-white/10 rounded-lg focus:outline-none focus:border-accent transition-colors duration-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Tell us about your token..."
            rows={4}
            className="w-full px-4 py-3 bg-surface border border-white/10 rounded-lg focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-surface/50 rounded-lg border border-white/10">
          <div className="flex items-center gap-3">
            <Coins className="w-5 h-5 text-accent" />
            <div>
              <div className="text-xs text-fg/60">Gas Fee</div>
              <div className="font-medium">Sponsored</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-success" />
            <div>
              <div className="text-xs text-fg/60">Launch Time</div>
              <div className="font-medium">~3 minutes</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <TrendingUp className="w-5 h-5 text-yellow-400" />
            <div>
              <div className="text-xs text-fg/60">Network</div>
              <div className="font-medium">Base</div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-accent hover:bg-accent/90 text-white rounded-lg font-bold text-lg transition-all duration-200 flex items-center justify-center gap-2"
        >
          <Rocket className="w-5 h-5" />
          Launch Token
        </button>
      </form>
    </div>
  );
}
