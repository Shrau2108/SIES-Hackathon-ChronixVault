import React from 'react';
import { Trophy, TrendingUp, Coins, Zap, Crown } from 'lucide-react';

interface LeaderboardTableProps {
  activeTab: 'returns' | 'savings' | 'streaks';
  onTabChange: (tab: 'returns' | 'savings' | 'streaks') => void;
}

const mockLeaderboardData = {
  returns: [
    { rank: 1, name: 'Thor the Investor', avatar: '⚡', returns: 45.6, amount: 125000, badge: 'Lightning Lord' },
    { rank: 2, name: 'Odin Allfather', avatar: '👁️', returns: 42.3, amount: 98000, badge: 'Wisdom Keeper' },
    { rank: 3, name: 'Loki Trickster', avatar: '🃏', returns: 38.9, amount: 87500, badge: 'Master Deceiver' },
    { rank: 4, name: 'Freya the Wise', avatar: '🌟', returns: 35.2, amount: 76000, badge: 'Golden Touch' },
    { rank: 5, name: 'Balder the Bold', avatar: '☀️', returns: 32.8, amount: 65000, badge: 'Radiant Gains' }
  ],
  savings: [
    { rank: 1, name: 'Heimdall Guardian', avatar: '🌈', saved: 180000, streak: 127, badge: 'Vault Protector' },
    { rank: 2, name: 'Frigg the Saver', avatar: '🛡️', saved: 165000, streak: 98, badge: 'Thrift Queen' },
    { rank: 3, name: 'Tyr the Steadfast', avatar: '⚔️', saved: 142000, streak: 87, badge: 'Iron Will' },
    { rank: 4, name: 'Vidar the Silent', avatar: '🤫', saved: 128000, streak: 76, badge: 'Quiet Accumulator' },
    { rank: 5, name: 'Hel the Persistent', avatar: '💀', saved: 115000, streak: 65, badge: 'Death & Taxes' }
  ],
  streaks: [
    { rank: 1, name: 'Saga the Constant', avatar: '📚', streak: 189, days: 189, badge: 'Never Miss' },
    { rank: 2, name: 'Mimir the Mindful', avatar: '🧠', streak: 156, days: 156, badge: 'Daily Devotion' },
    { rank: 3, name: 'Ran the Regular', avatar: '🌊', streak: 134, days: 134, badge: 'Tide Turner' },
    { rank: 4, name: 'Sif the Steady', avatar: '🌾', streak: 121, days: 121, badge: 'Golden Harvest' },
    { rank: 5, name: 'Vali the Victor', avatar: '🏆', streak: 108, days: 108, badge: 'Champion' }
  ]
};

export const LeaderboardTable: React.FC<LeaderboardTableProps> = ({ activeTab, onTabChange }) => {
  const data = mockLeaderboardData[activeTab];
  
  const tabs = [
    { key: 'returns' as const, label: 'Top Returns', icon: TrendingUp, color: 'green' },
    { key: 'savings' as const, label: 'Total Savings', icon: Coins, color: 'yellow' },
    { key: 'streaks' as const, label: 'Saving Streaks', icon: Zap, color: 'purple' }
  ];

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1: return 'text-yellow-400 bg-yellow-400/20';
      case 2: return 'text-gray-300 bg-gray-400/20';
      case 3: return 'text-amber-600 bg-amber-600/20';
      default: return 'text-cyan-400 bg-cyan-400/20';
    }
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="w-5 h-5" />;
      case 2: case 3: return <Trophy className="w-4 h-4" />;
      default: return <span className="font-bold">{rank}</span>;
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-6">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.key}
              onClick={() => onTabChange(tab.key)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.key
                  ? `bg-${tab.color}-400/20 text-${tab.color}-400 border border-${tab.color}-400/50`
                  : 'bg-gray-800/50 text-gray-300 border border-gray-600/30 hover:border-cyan-400/30'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Leaderboard Table */}
      <div className="space-y-3">
        {data.map((player, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r from-gray-800/40 to-transparent border rounded-xl p-4 transition-all duration-300 hover:border-cyan-400/50 ${
              player.rank <= 3 ? 'border-yellow-400/30' : 'border-gray-600/30'
            }`}
          >
            <div className="flex items-center justify-between">
              {/* Left Side - Rank and User */}
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${getRankColor(player.rank)}`}>
                  {getRankIcon(player.rank)}
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full flex items-center justify-center text-xl">
                    {player.avatar}
                  </div>
                  <div>
                    <p className="text-white font-medium">{player.name}</p>
                    <p className="text-gray-400 text-sm">{('badge' in player) && player.badge}</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Stats */}
              <div className="text-right">
                {activeTab === 'returns' && 'returns' in player && (
                  <>
                    <p className="text-green-400 font-bold text-lg">+{player.returns}%</p>
                    <p className="text-gray-400 text-sm">₹{player.amount.toLocaleString()}</p>
                  </>
                )}
                {activeTab === 'savings' && 'saved' in player && (
                  <>
                    <p className="text-yellow-400 font-bold text-lg">₹{player.saved.toLocaleString()}</p>
                    <p className="text-gray-400 text-sm">{player.streak} day streak</p>
                  </>
                )}
                {activeTab === 'streaks' && 'days' in player && (
                  <>
                    <p className="text-purple-400 font-bold text-lg">{player.streak} days</p>
                    <p className="text-gray-400 text-sm">Current streak</p>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 pt-6 border-t border-gray-700/50 text-center">
        <p className="text-gray-400 text-sm">
          Rankings updated every mystical hour ⚡
        </p>
      </div>
    </div>
  );
};