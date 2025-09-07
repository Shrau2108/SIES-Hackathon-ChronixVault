import React from 'react';
import { Coins, Zap } from 'lucide-react';

interface InvestmentSliderProps {
  amount: number;
  onAmountChange: (amount: number) => void;
  maxAmount: number;
}

export const InvestmentSlider: React.FC<InvestmentSliderProps> = ({ 
  amount, 
  onAmountChange, 
  maxAmount 
}) => {
  const percentage = (amount / maxAmount) * 100;

  return (
    <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-3 bg-cyan-400/10 rounded-xl">
          <Coins className="w-6 h-6 text-cyan-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Spell Power</h3>
          <p className="text-gray-400">Choose your investment amount</p>
        </div>
      </div>

      {/* Amount Display */}
      <div className="text-center mb-6">
        <p className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          ₹{amount.toLocaleString()}
        </p>
        <p className="text-gray-400 mt-1">
          {percentage.toFixed(1)}% of available balance
        </p>
      </div>

      {/* Custom Slider */}
      <div className="relative mb-6">
        <input
          type="range"
          min="500"
          max={maxAmount}
          step="100"
          value={amount}
          onChange={(e) => onAmountChange(Number(e.target.value))}
          className="w-full h-4 bg-gray-700 rounded-lg appearance-none cursor-pointer slider-thumb"
        />
        
        {/* Glow Effect */}
        <div 
          className="absolute top-0 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg pointer-events-none"
          style={{ width: `${percentage}%` }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse rounded-lg"></div>
        </div>
      </div>

      {/* Quick Amount Buttons */}
      <div className="grid grid-cols-4 gap-2">
        {[1000, 2500, 5000, 10000].map((quickAmount) => (
          <button
            key={quickAmount}
            onClick={() => onAmountChange(Math.min(quickAmount, maxAmount))}
            className={`py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 ${
              amount === quickAmount
                ? 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/50'
                : 'bg-gray-800/50 text-gray-300 border border-gray-600/30 hover:border-cyan-400/30'
            }`}
          >
            ₹{(quickAmount / 1000).toFixed(0)}K
          </button>
        ))}
      </div>

      {/* Power Indicator */}
      <div className="mt-6 flex items-center justify-between text-sm">
        <span className="text-gray-400">Spell Intensity</span>
        <div className="flex items-center space-x-2">
          <Zap className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-400 font-bold">
            {percentage > 75 ? 'Maximum' : percentage > 50 ? 'High' : percentage > 25 ? 'Medium' : 'Low'}
          </span>
        </div>
      </div>
    </div>
  );
};