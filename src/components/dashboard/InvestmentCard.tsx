import React from 'react';
import { Zap, Target } from 'lucide-react';

interface InvestmentCardProps {
  totalInvested: number;
}

export const InvestmentCard: React.FC<InvestmentCardProps> = ({ totalInvested }) => {
  const returns = totalInvested * 0.15; // Mock 15% returns

  return (
    <div className="bg-gradient-to-br from-purple-800/40 to-gray-900/60 backdrop-blur-xl border border-purple-400/30 rounded-2xl p-6 relative overflow-hidden group hover:border-purple-400/50 transition-all duration-300">
      {/* Magical Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-purple-400/10 rounded-xl">
              <Zap className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Total Invested</p>
              <p className="text-2xl font-bold text-white">₹{totalInvested.toLocaleString()}</p>
            </div>
          </div>
          <Target className="w-5 h-5 text-purple-400" />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-300">Current Returns</span>
            <span className="text-green-400">₹{returns.toFixed(0)}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-gradient-to-r from-purple-400 to-cyan-400 h-2 rounded-full w-3/4 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};