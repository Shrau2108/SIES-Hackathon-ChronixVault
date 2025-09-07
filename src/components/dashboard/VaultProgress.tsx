import React from 'react';
import { Shield, Lock, Crown } from 'lucide-react';
import { RuneSymbol } from '../ui/RuneSymbol';

interface VaultProgressProps {
  level: number;
  progress: number;
}

export const VaultProgress: React.FC<VaultProgressProps> = ({ level, progress }) => {
  const runes = ['ᚠ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ', 'ᚺ'];

  return (
    <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-purple-400/5 to-cyan-400/5 animate-pulse"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="p-4 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-2xl">
              <Shield className="w-8 h-8 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Mystical Vault Progress</h3>
              <p className="text-gray-300">Level {level} Vault Master</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-cyan-400 font-bold text-lg">{progress}%</p>
            <p className="text-gray-400 text-sm">to next level</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-gray-700/50 rounded-full h-4 relative overflow-hidden">
            <div 
              className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 h-full rounded-full relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Rune Collection */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {runes.map((rune, index) => (
            <div
              key={index}
              className={`p-3 rounded-xl border-2 flex items-center justify-center transition-all duration-300 ${
                index < Math.floor(progress / 12.5)
                  ? 'bg-gradient-to-br from-cyan-400/20 to-purple-400/20 border-cyan-400/50 text-cyan-400'
                  : 'bg-gray-800/50 border-gray-600/50 text-gray-500'
              }`}
            >
              <RuneSymbol 
                symbol={rune} 
                className={`text-2xl ${
                  index < Math.floor(progress / 12.5) ? 'animate-pulse' : ''
                }`} 
              />
            </div>
          ))}
        </div>

        {/* Next Unlock */}
        <div className="mt-6 flex items-center justify-between bg-gray-800/30 rounded-xl p-4">
          <div className="flex items-center space-x-3">
            <Crown className="w-5 h-5 text-yellow-400" />
            <span className="text-gray-300">Next Unlock: Advanced Spells</span>
          </div>
          <Lock className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
};