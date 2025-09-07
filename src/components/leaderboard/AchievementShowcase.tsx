import React from 'react';
import { Star, Crown, Zap, Shield, Target, Trophy } from 'lucide-react';

const featuredAchievements = [
  { 
    id: 'monthly_champion', 
    name: 'Monthly Champion', 
    icon: Crown, 
    color: 'yellow',
    description: 'Top performer this month',
    holders: 1,
    rarity: 'Legendary'
  },
  { 
    id: 'streak_master', 
    name: 'Streak Master', 
    icon: Zap, 
    color: 'purple',
    description: '100+ day investment streak',
    holders: 12,
    rarity: 'Epic'
  },
  { 
    id: 'vault_guardian', 
    name: 'Vault Guardian', 
    icon: Shield, 
    color: 'cyan',
    description: 'Never missed a target',
    holders: 23,
    rarity: 'Rare'
  },
  { 
    id: 'perfect_timing', 
    name: 'Perfect Timing', 
    icon: Target, 
    color: 'green',
    description: 'Achieved 50%+ returns',
    holders: 8,
    rarity: 'Epic'
  }
];

export const AchievementShowcase: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Trophy className="w-6 h-6 text-yellow-400" />
        <h3 className="text-xl font-bold text-white">Elite Achievements</h3>
      </div>

      <div className="space-y-4">
        {featuredAchievements.map((achievement) => {
          const Icon = achievement.icon;
          
          return (
            <div
              key={achievement.id}
              className={`bg-gradient-to-r from-${achievement.color}-400/10 to-transparent border border-${achievement.color}-400/30 rounded-xl p-4 group hover:border-${achievement.color}-400/50 transition-all duration-300`}
            >
              {/* Achievement Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 bg-${achievement.color}-400/20 rounded-lg`}>
                    <Icon className={`w-5 h-5 text-${achievement.color}-400`} />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{achievement.name}</p>
                    <p className="text-gray-400 text-xs">{achievement.description}</p>
                  </div>
                </div>
                
                <div className={`px-2 py-1 bg-${achievement.color}-400/20 rounded-full`}>
                  <span className={`text-${achievement.color}-400 text-xs font-bold`}>
                    {achievement.rarity}
                  </span>
                </div>
              </div>

              {/* Achievement Stats */}
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-1">
                  <Star className={`w-3 h-3 text-${achievement.color}-400`} />
                  <span className="text-gray-400">{achievement.holders} holders</span>
                </div>
                
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1 h-1 rounded-full ${
                        i < (achievement.rarity === 'Legendary' ? 5 : achievement.rarity === 'Epic' ? 4 : 3)
                          ? `bg-${achievement.color}-400`
                          : 'bg-gray-600'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-gray-700/50 text-center">
        <p className="text-gray-400 text-xs">
          Unlock achievements by mastering your vault
        </p>
      </div>
    </div>
  );
};