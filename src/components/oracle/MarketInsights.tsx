import React from 'react';
import { TrendingUp, TrendingDown, Activity, AlertCircle } from 'lucide-react';

export const MarketInsights: React.FC = () => {
  const marketData = [
    { name: 'NIFTY 50', value: '22,326.90', change: '+156.65', percentage: '+0.71%', trend: 'up' },
    { name: 'SENSEX', value: '73,088.33', change: '+528.17', percentage: '+0.73%', trend: 'up' },
    { name: 'NIFTY BANK', value: '48,567.80', change: '-123.45', percentage: '-0.25%', trend: 'down' },
  ];

  const insights = [
    {
      title: 'Market Sentiment',
      value: 'Bullish',
      color: 'green',
      icon: TrendingUp,
      description: 'Strong institutional buying observed'
    },
    {
      title: 'Volatility Index',
      value: 'Low',
      color: 'cyan',
      icon: Activity,
      description: 'Market showing stable patterns'
    },
    {
      title: 'Oracle Alert',
      value: 'Active',
      color: 'purple',
      icon: AlertCircle,
      description: '3 new opportunities detected'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Market Overview */}
      <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-6">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
          <Activity className="w-6 h-6 text-cyan-400" />
          <span>Market Overview</span>
        </h3>

        <div className="space-y-4">
          {marketData.map((market, index) => (
            <div key={index} className="bg-gray-800/30 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">{market.name}</span>
                <div className="flex items-center space-x-1">
                  {market.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4 text-green-400" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-400" />
                  )}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-white">{market.value}</span>
                <div className="text-right">
                  <p className={`${market.trend === 'up' ? 'text-green-400' : 'text-red-400'} font-bold`}>
                    {market.change}
                  </p>
                  <p className={`${market.trend === 'up' ? 'text-green-400' : 'text-red-400'} text-sm`}>
                    {market.percentage}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Market Insights */}
      <div className="bg-gradient-to-br from-purple-800/40 to-gray-900/60 backdrop-blur-xl border border-purple-400/30 rounded-2xl p-6">
        <h3 className="text-xl font-bold text-white mb-6">Mystical Insights</h3>

        <div className="space-y-4">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <div key={index} className={`bg-gradient-to-r from-${insight.color}-400/10 to-transparent rounded-xl p-4 border border-${insight.color}-400/30`}>
                <div className="flex items-center space-x-3 mb-2">
                  <Icon className={`w-5 h-5 text-${insight.color}-400`} />
                  <span className="text-white font-medium">{insight.title}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-${insight.color}-400 font-bold text-lg`}>{insight.value}</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">{insight.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mystical Quote */}
      <div className="bg-gradient-to-br from-yellow-800/40 to-gray-900/60 backdrop-blur-xl border border-yellow-400/30 rounded-2xl p-6 text-center">
        <div className="mb-4">
          <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto">
            <span className="text-yellow-400 text-2xl">✨</span>
          </div>
        </div>
        <p className="text-yellow-400 italic mb-2">
          "The market rewards the patient and punishes the greedy."
        </p>
        <p className="text-gray-400 text-sm">— Ancient Oracle Wisdom</p>
      </div>
    </div>
  );
};