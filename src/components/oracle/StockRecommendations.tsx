import React from 'react';
import { TrendingUp, TrendingDown, Minus, Shield, Zap, Crown } from 'lucide-react';

interface StockRecommendation {
  symbol: string;
  name: string;
  recommendation: 'BUY' | 'SELL' | 'HOLD';
  targetPrice: number;
  currentPrice: number;
  upside: number;
  reason: string;
  riskLevel: string;
  aiConfidence: number;
}

interface StockRecommendationsProps {
  recommendations: StockRecommendation[];
}

export const StockRecommendations: React.FC<StockRecommendationsProps> = ({ recommendations }) => {
  const getRecommendationIcon = (recommendation: string) => {
    switch (recommendation) {
      case 'BUY': return TrendingUp;
      case 'SELL': return TrendingDown;
      case 'HOLD': return Minus;
      default: return Shield;
    }
  };

  const getRecommendationColor = (recommendation: string) => {
    switch (recommendation) {
      case 'BUY': return 'green';
      case 'SELL': return 'red';
      case 'HOLD': return 'yellow';
      default: return 'gray';
    }
  };

  const getRiskIcon = (riskLevel: string) => {
    switch (riskLevel.toLowerCase()) {
      case 'low': return Shield;
      case 'medium': return Zap;
      case 'high': return Crown;
      default: return Shield;
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-800/40 to-gray-900/60 backdrop-blur-xl border border-purple-400/30 rounded-2xl p-6">
      <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
        <Crown className="w-6 h-6 text-purple-400" />
        <span>Oracle's Divine Recommendations</span>
      </h3>

      <div className="space-y-6">
        {recommendations.map((stock, index) => {
          const RecommendationIcon = getRecommendationIcon(stock.recommendation);
          const RiskIcon = getRiskIcon(stock.riskLevel);
          const color = getRecommendationColor(stock.recommendation);

          return (
            <div
              key={index}
              className={`bg-gradient-to-r from-${color}-400/10 to-transparent border border-${color}-400/30 rounded-xl p-6 relative overflow-hidden group hover:border-${color}-400/50 transition-all duration-300`}
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-${color}-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 bg-${color}-400/20 rounded-xl`}>
                      <RecommendationIcon className={`w-6 h-6 text-${color}-400`} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{stock.symbol}</h4>
                      <p className="text-gray-400 text-sm">{stock.name}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full bg-${color}-400/20 border border-${color}-400/50`}>
                      <span className={`text-${color}-400 font-bold text-sm`}>{stock.recommendation}</span>
                    </div>
                  </div>
                </div>

                {/* Price Information */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-gray-400 text-xs">Current Price</p>
                    <p className="text-white font-bold">₹{stock.currentPrice}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Target Price</p>
                    <p className="text-white font-bold">₹{stock.targetPrice}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Upside Potential</p>
                    <p className={`text-${color === 'red' ? 'red' : 'green'}-400 font-bold`}>
                      {stock.upside > 0 ? '+' : ''}{stock.upside}%
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">AI Confidence</p>
                    <p className="text-cyan-400 font-bold">{stock.aiConfidence}%</p>
                  </div>
                </div>

                {/* Oracle's Reasoning */}
                <div className="bg-gray-800/30 rounded-xl p-4 mb-4">
                  <p className="text-gray-300 text-sm italic">
                    "{stock.reason}"
                  </p>
                </div>

                {/* Risk and Confidence */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <RiskIcon className="w-4 h-4 text-purple-400" />
                    <span className="text-purple-400 text-sm font-medium">{stock.riskLevel} Risk</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="w-full bg-gray-700 rounded-full h-2 w-20">
                      <div 
                        className={`bg-${color}-400 h-2 rounded-full transition-all duration-1000`}
                        style={{ width: `${stock.aiConfidence}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};