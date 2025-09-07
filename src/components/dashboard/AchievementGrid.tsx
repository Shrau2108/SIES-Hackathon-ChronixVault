import React from 'react';
import { Trophy, Star, Shield, Zap, Crown, Target } from 'lucide-react';

interface AchievementGridProps {
  achievements: string[];
}

const achievementsList = [
  { id: 'first_vault', name: 'First Vault Entry', icon: Shield, color: 'cyan' },
  { id: 'spell_caster', name: 'Spell Caster', icon: Zap, color: 'purple' },
  { id: 'rune_collector', name: 'Rune Collector', icon: Star, color: 'yellow' },
  { id: 'vault_master', name: 'Vault Master', icon: Crown, color: 'cyan' },
  { id: 'investment_lord', name: 'Investment Lord', icon: Trophy, color: 'purple' },
  { id: 'target_achiever', name: 'Target Achiever', icon: Target, color: 'green' }
];

export const AchievementGrid: React.FC<AchievementGridProps> = ({ achievements }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-purple-400/30 rounded-2xl p-6">
      <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
        <Trophy className="w-6 h-6 text-yellow-400" />
        <span>Mystical Achievements</span>
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {achievementsList.map((achievement) => {
          const isUnlocked = achievements.includes(achievement.name);
          const Icon = achievement.icon;
          
          return (
            <div
              key={achievement.id}
              className={`p-4 rounded-xl border-2 text-center transition-all duration-300 ${
                isUnlocked
                  ? `bg-gradient-to-br from-${achievement.color}-400/20 to-gray-800/50 border-${achievement.color}-400/50`
                  : 'bg-gray-800/30 border-gray-600/30'
              }`}
            >
              <div className="mb-3">
                <Icon 
                  className={`w-8 h-8 mx-auto ${
                    isUnlocked 
                      ? `text-${achievement.color}-400 animate-pulse` 
                      : 'text-gray-500'
                  }`} 
                />
              </div>
              <p className={`text-sm font-medium ${
                isUnlocked ? 'text-white' : 'text-gray-400'
              }`}>
                {achievement.name}
              </p>
              {isUnlocked && (
                <div className="mt-2">
                  <div className={`w-2 h-2 bg-${achievement.color}-400 rounded-full mx-auto animate-ping`}></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};