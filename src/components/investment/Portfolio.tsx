import React from 'react';
import { PieChart, TrendingUp, Star, Shield } from 'lucide-react';

interface PortfolioProps {
  totalInvested: number;
}

const mockHoldings = [
  { symbol: 'TCS', amount: 5000, returns: 750, percentage: 15, color: 'cyan' },
  { symbol: 'INFY', amount: 3000, returns: 450, percentage: 15, color: 'purple' },
  { symbol: 'RELIANCE', amount: 2000, returns: 360, percentage: 18, color: 'yellow' }
];

export const Portfolio: React.FC<PortfolioProps> = ({ totalInvested }) => {
  const totalReturns = mockHoldings.reduce((sum, holding) => sum + holding.returns, 0);
  const totalPortfolioValue = totalInvested + totalReturns;

  return (
    <div className="space-y-6">
      {/* Portfolio Overview */}
      <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-cyan-400/10 rounded-xl">
            <PieChart className="w-6 h-6 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Portfolio Grimoire</h3>
            <p className="text-gray-400">Your active investment spells</p>
          </div>
        </div>

        {/* Portfolio Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center">
            <p className="text-gray-400 text-sm">Total Invested</p>
            <p className="text-2xl font-bold text-white">₹{totalInvested.toLocaleString()}</p>
          </div>
          <div className="text-center">
            <p className="text-gray-400 text-sm">Current Value</p>
            <p className="text-2xl font-bold text-green-400">₹{totalPortfolioValue.toLocaleString()}</p>
          </div>
        </div>

        {/* Returns */}
        <div className="bg-gradient-to-r from-green-400/10 to-transparent rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-white">Total Returns</span>
            </div>
            <div className="text-right">
              <p className="text-green-400 font-bold">+₹{totalReturns.toLocaleString()}</p>
              <p className="text-green-400 text-sm">+{((totalReturns / totalInvested) * 100).toFixed(1)}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Active Holdings */}
      <div className="bg-gradient-to-br from-purple-800/40 to-gray-900/60 backdrop-blur-xl border border-purple-400/30 rounded-2xl p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Star className="w-6 h-6 text-purple-400" />
          <h3 className="text-xl font-bold text-white">Active Spells</h3>
        </div>

        <div className="space-y-4">
          {mockHoldings.map((holding, index) => (
            <div
              key={index}
              className="bg-gray-800/30 rounded-xl p-4 border border-gray-600/30"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <Shield className={`w-5 h-5 text-${holding.color}-400`} />
                  <span className="text-white font-medium">{holding.symbol}</span>
                </div>
                <span className={`text-${holding.color}-400 text-sm`}>
                  +{holding.percentage}%
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-400">Invested</p>
                  <p className="text-white">₹{holding.amount.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-gray-400">Returns</p>
                  <p className="text-green-400">+₹{holding.returns.toLocaleString()}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-3">
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`bg-gradient-to-r from-${holding.color}-400 to-cyan-400 h-2 rounded-full`}
                    style={{ width: `${Math.min(holding.percentage * 5, 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};