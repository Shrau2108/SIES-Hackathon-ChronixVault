import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Navigation } from '../ui/Navigation';
import { VaultProgress } from './VaultProgress';
import { BalanceCard } from './BalanceCard';
import { InvestmentCard } from './InvestmentCard';
import { AchievementGrid } from './AchievementGrid';
import { QuickActions } from './QuickActions';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-900 relative">
      <Navigation />
      
      <div className="pt-20 px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Welcome to Your Vault, {user.displayName}
            </h1>
            <p className="text-gray-300">
              Master of Level {user.vaultLevel} • Joined the realm {new Date(user.joinedDate).toLocaleDateString()}
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Balance and Investment Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <BalanceCard balance={user.balance} />
                <InvestmentCard totalInvested={user.totalInvested} />
              </div>

              {/* Vault Progress */}
              <VaultProgress level={user.vaultLevel} progress={65} />

              {/* Achievements */}
              <AchievementGrid achievements={user.achievements} />
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <QuickActions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;