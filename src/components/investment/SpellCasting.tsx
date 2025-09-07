import React from 'react';
import { Zap, TrendingUp, Shield, Star } from 'lucide-react';
import { MagicalButton } from '../ui/MagicalButton';

interface SpellCastingProps {
  amount: number;
  selectedStock: string;
  onStockSelect: (stock: string) => void;
  onCast: () => void;
  isCasting: boolean;
}

const stocks = [
  { symbol: 'TCS', name: 'Tata Consultancy Services', risk: 'low', potential: 12, icon: Shield },
  { symbol: 'INFY', name: 'Infosys Limited', risk: 'low', potential: 15, icon: Star },
  { symbol: 'RELIANCE', name: 'Reliance Industries', risk: 'medium', potential: 18, icon: TrendingUp },
  { symbol: 'HDFC', name: 'HDFC Bank', risk: 'low', potential: 14, icon: Shield }
];

export const SpellCasting: React.FC<SpellCastingProps> = ({
  amount,
  selectedStock,
  onStockSelect,
  onCast,
  isCasting
}) => {
  return (
    <div className="bg-gradient-to-br from-purple-800/40 to-gray-900/60 backdrop-blur-xl border border-purple-400/30 rounded-2xl p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-3 bg-purple-400/10 rounded-xl">
          <Zap className="w-6 h-6 text-purple-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Choose Your Spell Target</h3>
          <p className="text-gray-400">Select a stock to channel your investment</p>
        </div>
      </div>

      {/* Stock Selection */}
      <div className="space-y-3 mb-6">
        {stocks.map((stock) => {
          const Icon = stock.icon;
          return (
            <div
              key={stock.symbol}
              onClick={() => onStockSelect(stock.symbol)}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                selectedStock === stock.symbol
                  ? 'bg-purple-400/20 border-purple-400/50'
                  : 'bg-gray-800/30 border-gray-600/30 hover:border-purple-400/30'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Icon className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-white font-medium">{stock.symbol}</p>
                    <p className="text-gray-400 text-sm">{stock.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-green-400 font-bold">+{stock.potential}%</p>
                  <p className={`text-xs ${
                    stock.risk === 'low' ? 'text-green-400' : 
                    stock.risk === 'medium' ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {stock.risk.toUpperCase()} RISK
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Spell Summary */}
      {selectedStock && (
        <div className="bg-gray-800/50 rounded-xl p-4 mb-6">
          <h4 className="text-white font-medium mb-2">Spell Summary</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Investment Amount</span>
              <span className="text-white">₹{amount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Target Stock</span>
              <span className="text-purple-400">{selectedStock}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Expected Returns</span>
              <span className="text-green-400">
                +₹{(amount * (stocks.find(s => s.symbol === selectedStock)?.potential || 0) / 100).toFixed(0)}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Cast Spell Button */}
      <MagicalButton
        onClick={onCast}
        disabled={!selectedStock}
        loading={isCasting}
        className="w-full py-4"
      >
        {isCasting ? (
          <div className="flex items-center justify-center space-x-2">
            <Zap className="w-5 h-5 animate-pulse" />
            <span>Casting Investment Spell...</span>
          </div>
        ) : (
          <div className="flex items-center justify-center space-x-2">
            <Zap className="w-5 h-5" />
            <span>Cast Investment Spell</span>
          </div>
        )}
      </MagicalButton>

      {/* Casting Animation */}
      {isCasting && (
        <div className="mt-4 text-center">
          <div className="flex justify-center space-x-2 mb-2">
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce delay-100"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-200"></div>
          </div>
          <p className="text-purple-400 text-sm">Channeling mystical energy...</p>
        </div>
      )}
    </div>
  );
};