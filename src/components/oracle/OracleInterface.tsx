import React, { useState } from 'react';
import { Eye, Zap, Star, Brain } from 'lucide-react';
import { MagicalButton } from '../ui/MagicalButton';
import { RuneSymbol } from '../ui/RuneSymbol';

interface OracleInterfaceProps {
  onGenerateRecommendations: () => void;
  loading: boolean;
}

export const OracleInterface: React.FC<OracleInterfaceProps> = ({
  onGenerateRecommendations,
  loading
}) => {
  const [selectedRiskLevel, setSelectedRiskLevel] = useState('medium');
  const [selectedTimeframe, setSelectedTimeframe] = useState('6months');

  const riskLevels = [
    { value: 'low', label: 'Conservative', icon: '🛡️', color: 'green' },
    { value: 'medium', label: 'Balanced', icon: '⚖️', color: 'yellow' },
    { value: 'high', label: 'Aggressive', icon: '⚡', color: 'red' }
  ];

  const timeframes = [
    { value: '3months', label: '3 Months', rune: 'ᚠ' },
    { value: '6months', label: '6 Months', rune: 'ᚦ' },
    { value: '1year', label: '1 Year', rune: 'ᚨ' },
    { value: '2years', label: '2+ Years', rune: 'ᚱ' }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-8 relative overflow-hidden">
      {/* Mystical Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-purple-400/5 to-cyan-400/5 animate-pulse"></div>
      
      <div className="relative z-10">
        {/* Oracle Header */}
        <div className="text-center mb-8">
          <div className="relative inline-block mb-4">
            <Eye className="w-16 h-16 text-cyan-400 animate-pulse mx-auto" />
            <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl animate-ping"></div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">The All-Seeing Oracle</h3>
          <p className="text-gray-300">Configure your mystical investment guidance</p>
        </div>

        {/* Risk Level Selection */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
            <Star className="w-5 h-5 text-purple-400" />
            <span>Risk Appetite</span>
          </h4>
          <div className="grid grid-cols-3 gap-4">
            {riskLevels.map((level) => (
              <button
                key={level.value}
                onClick={() => setSelectedRiskLevel(level.value)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                  selectedRiskLevel === level.value
                    ? `bg-${level.color}-400/20 border-${level.color}-400/50`
                    : 'bg-gray-800/50 border-gray-600/30 hover:border-purple-400/30'
                }`}
              >
                <div className="text-2xl mb-2">{level.icon}</div>
                <p className="text-white font-medium">{level.label}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Timeframe Selection */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
            <Brain className="w-5 h-5 text-cyan-400" />
            <span>Investment Timeline</span>
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {timeframes.map((timeframe) => (
              <button
                key={timeframe.value}
                onClick={() => setSelectedTimeframe(timeframe.value)}
                className={`p-3 rounded-xl border-2 transition-all duration-300 text-center ${
                  selectedTimeframe === timeframe.value
                    ? 'bg-cyan-400/20 border-cyan-400/50'
                    : 'bg-gray-800/50 border-gray-600/30 hover:border-cyan-400/30'
                }`}
              >
                <RuneSymbol symbol={timeframe.rune} className="text-xl mb-1" />
                <p className="text-white text-sm font-medium">{timeframe.label}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Oracle Consultation Button */}
        <div className="text-center">
          <MagicalButton
            onClick={onGenerateRecommendations}
            loading={loading}
            className="px-8 py-4"
          >
            {loading ? (
              <div className="flex items-center space-x-2">
                <Eye className="w-5 h-5 animate-pulse" />
                <span>Consulting the Oracle...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>Seek Divine Wisdom</span>
              </div>
            )}
          </MagicalButton>
        </div>

        {/* Loading Animation */}
        {loading && (
          <div className="mt-6 text-center">
            <div className="flex justify-center space-x-2 mb-4">
              <RuneSymbol symbol="ᚠ" className="text-cyan-400 animate-bounce" />
              <RuneSymbol symbol="ᚦ" className="text-purple-400 animate-bounce delay-100" />
              <RuneSymbol symbol="ᚨ" className="text-cyan-400 animate-bounce delay-200" />
              <RuneSymbol symbol="ᚱ" className="text-purple-400 animate-bounce delay-300" />
            </div>
            <p className="text-purple-400">The Oracle peers through the veil of time...</p>
          </div>
        )}
      </div>
    </div>
  );
};