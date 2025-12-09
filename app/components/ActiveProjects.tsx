'use client';

import { TrendingUp, Users, Clock } from 'lucide-react';

const projects = [
  {
    name: 'DeFi Launcher',
    symbol: 'DFL',
    raised: '$252.4K',
    contributors: 1247,
    progress: 84,
    timeLeft: '2d 14h',
    status: 'active',
  },
  {
    name: 'Gaming Token',
    symbol: 'GAME',
    raised: '$189.2K',
    contributors: 892,
    progress: 63,
    timeLeft: '4d 8h',
    status: 'active',
  },
  {
    name: 'Social Coin',
    symbol: 'SOC',
    raised: '$421.8K',
    contributors: 2156,
    progress: 100,
    timeLeft: 'Completed',
    status: 'completed',
  },
];

export function ActiveProjects() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">Active Projects</h3>
        <button className="text-sm text-accent hover:text-accent/80 font-medium">
          View All →
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="glass-effect rounded-lg p-6 border border-white/10 card-hover animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="text-lg font-bold mb-1">{project.name}</h4>
                <span className="text-sm text-fg/60">{project.symbol}</span>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'completed'
                    ? 'bg-success/20 text-success'
                    : 'bg-accent/20 text-accent'
                }`}
              >
                {project.status === 'completed' ? 'Completed' : 'Active'}
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-fg/60">Progress</span>
                  <span className="text-sm font-medium">{project.progress}%</span>
                </div>
                <div className="w-full h-2 bg-surface rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-accent to-success transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-success" />
                  <span className="font-medium">{project.raised}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-accent" />
                  <span className="text-fg/60">{project.contributors}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-fg/60">
                <Clock className="w-4 h-4" />
                <span>{project.timeLeft}</span>
              </div>

              <button className="w-full py-3 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg font-medium transition-all duration-200">
                Contribute
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
