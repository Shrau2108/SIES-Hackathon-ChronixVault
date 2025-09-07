import React from 'react';
import { User, Trophy, TrendingUp, Target } from 'lucide-react';

interface MyRankingProps {
  user: {
    displayName: string;
    photoURL: string;
    totalInvested: number;
    balance: number;
  };
}

export const MyRanking: React.FC<MyRankingProps> = ({ user }) => {
  // Mock user ranking data
  const userStats = {
    overallRank: 42,
    returnsRank: 38,
    savingsRank: 45,
    streakRank: 29,
    totalReturns: 15.7,
    currentStreak: 23
  };

  return (
    <div className="bg-gradient-to-br from-purple-800/40 to-gray-900/60 backdrop-blur-xl border border-purple-400/30 rounded-2xl p-6">
      <div className="flex items-center space-x-3 mb-6">
        <User className="w-6 h-6 text-purple-400" />
        <h3 className="text-xl font-bold text-white">Your Ranking</h3>
      </div>

      {/* User Profile */}
      <div className="flex items-center space-x-3 mb-6">
        <img
          src={user.photoURL}
          alt={user.displayName}
          className="w-12 h-12 rounded-full border-2 border-purple-400/50"
        />
        <div>
          <p className="text-white font-medium">{user.displayName}</p>
          <p className="text-purple-400 text-sm">Vault Apprentice</p>
        </div>
      </div>

      {/* Overall Rank */}
      <div className="bg-gray-800/30 rounded-xl p-4 mb-6">
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Trophy className="w-8 h-8 text-yellow-400" />
          </div>
          <p className="text-3xl font-bold text-white">#{userStats.overallRank}</p>
          <p className="text-gray-400 text-sm">Overall Ranking</p>
        </div>
      </div>

      {/* Detailed Rankings */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-gray-300 text-sm">Returns</span>
          </div>
          <div className="text-right">
            <p className="text-green-400 font-bold">#{userStats.returnsRank}</p>
            <p className="text-green-400 text-xs">+{userStats.totalReturns}%</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Target className="w-4 h-4 text-yellow-400" />
            <span className="text-gray-300 text-sm">Savings</span>
          </div>
          <div className="text-right">
            <p className="text-yellow-400 font-bold">#{userStats.savingsRank}</p>
            <p className="text-yellow-400 text-xs">₹{user.totalInvested.toLocaleString()}</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
            <span className="text-gray-300 text-sm">Streak</span>
          </div>
          <div className="text-right">
            <p className="text-purple-400 font-bold">#{userStats.streakRank}</p>
            <p className="text-purple-400 text-xs">{userStats.currentStreak} days</p>
          </div>
        </div>
      </div>

      {/* Next Goal */}
      <div className="mt-6 pt-4 border-t border-gray-700/50">
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-1">Next milestone</p>
          <p className="text-cyan-400 font-medium">Reach Top 40</p>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
            <div className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full w-3/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};