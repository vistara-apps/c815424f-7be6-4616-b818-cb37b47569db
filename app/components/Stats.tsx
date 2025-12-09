'use client';

import { TrendingUp, Zap, Shield, Rocket } from 'lucide-react';

const stats = [
  {
    icon: Rocket,
    label: 'Tokens Launched',
    value: '252',
    change: '+24%',
    color: 'text-accent',
  },
  {
    icon: TrendingUp,
    label: 'Total Volume',
    value: '$14.2M',
    change: '+18%',
    color: 'text-success',
  },
  {
    icon: Zap,
    label: 'Avg Launch Time',
    value: '3 min',
    change: '-40%',
    color: 'text-yellow-400',
  },
  {
    icon: Shield,
    label: 'Success Rate',
    value: '94%',
    change: '+5%',
    color: 'text-green-400',
  },
];

export function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="glass-effect rounded-lg p-6 border border-white/10 card-hover animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 rounded-lg bg-surface flex items-center justify-center ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium text-success">{stat.change}</span>
          </div>
          <div className="text-2xl font-bold mb-1">{stat.value}</div>
          <div className="text-sm text-fg/60">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
