import React from 'react';
import { Coins, TrendingUp } from 'lucide-react';

interface BalanceCardProps {
  balance: number;
}

export const BalanceCard: React.FC<BalanceCardProps> = ({ balance }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-6 relative overflow-hidden group hover:border-cyan-400/50 transition-all duration-300">
      {/* Magical Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-cyan-400/10 rounded-xl">
              <Coins className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Current Balance</p>
              <p className="text-2xl font-bold text-white">₹{balance.toLocaleString()}</p>
            </div>
          </div>
          <TrendingUp className="w-5 h-5 text-green-400" />
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-green-400">+12.5% this month</span>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-cyan-400/50 rounded-full animate-pulse delay-300"></div>
            <div className="w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse delay-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
};