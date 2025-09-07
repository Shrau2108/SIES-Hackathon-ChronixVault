import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Eye, Users, Settings, TrendingUp, Shield } from 'lucide-react';

export const QuickActions: React.FC = () => {
  const actions = [
    { 
      to: '/invest', 
      icon: Zap, 
      title: 'Cast Investment Spell', 
      description: 'Channel your magic into profitable spells',
      color: 'cyan'
    },
    { 
      to: '/oracle', 
      icon: Eye, 
      title: 'Consult Oracle', 
      description: 'AI-powered mystical guidance',
      color: 'purple'
    },
    { 
      to: '/leaderboard', 
      icon: Users, 
      title: 'Leaderboard', 
      description: 'See other vault masters',
      color: 'yellow'
    }
  ];

  const quickStats = [
    { icon: TrendingUp, label: 'Daily Gain', value: '+₹247', color: 'green' },
    { icon: Shield, label: 'Vault Security', value: '99.9%', color: 'cyan' },
    { icon: Zap, label: 'Active Spells', value: '3', color: 'purple' }
  ];

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-6">
        <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
        <div className="space-y-3">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Link
                key={index}
                to={action.to}
                className={`block p-4 bg-gradient-to-r from-${action.color}-400/10 to-transparent border border-${action.color}-400/30 rounded-xl hover:border-${action.color}-400/50 transition-all duration-300 group`}
              >
                <div className="flex items-center space-x-3">
                  <Icon className={`w-5 h-5 text-${action.color}-400`} />
                  <div>
                    <p className="text-white font-medium">{action.title}</p>
                    <p className="text-gray-400 text-sm">{action.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-purple-400/30 rounded-2xl p-6">
        <h3 className="text-xl font-bold text-white mb-4">Mystical Stats</h3>
        <div className="space-y-4">
          {quickStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Icon className={`w-4 h-4 text-${stat.color}-400`} />
                  <span className="text-gray-300 text-sm">{stat.label}</span>
                </div>
                <span className={`text-${stat.color}-400 font-bold`}>{stat.value}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};