import React, { useState } from 'react';
import { Navigation } from '../ui/Navigation';
import { LeaderboardTable } from './LeaderboardTable';
import { AchievementShowcase } from './AchievementShowcase';
import { MyRanking } from './MyRanking';
import { useAuth } from '../../contexts/AuthContext';

const Leaderboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'returns' | 'savings' | 'streaks'>('returns');

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-900 relative">
      <Navigation />
      
      <div className="pt-20 px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Hall of Vault Masters
            </h1>
            <p className="text-gray-300">
              Compete with fellow wizards and claim your place among legends
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Leaderboard */}
            <div className="lg:col-span-3">
              <LeaderboardTable activeTab={activeTab} onTabChange={setActiveTab} />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <MyRanking user={user} />
              <AchievementShowcase />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;