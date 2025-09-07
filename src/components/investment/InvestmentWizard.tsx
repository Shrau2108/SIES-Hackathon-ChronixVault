import React, { useState } from 'react';
import { Navigation } from '../ui/Navigation';
import { InvestmentSlider } from './InvestmentSlider';
import { SpellCasting } from './SpellCasting';
import { Portfolio } from './Portfolio';
import { useAuth } from '../../contexts/AuthContext';

const InvestmentWizard: React.FC = () => {
  const { user, updateUserData } = useAuth();
  const [investmentAmount, setInvestmentAmount] = useState(1000);
  const [selectedStock, setSelectedStock] = useState('');
  const [isCasting, setIsCasting] = useState(false);

  if (!user) return null;

  const handleInvest = async () => {
    setIsCasting(true);
    
    // Simulate spell casting delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Update user data
    updateUserData({
      balance: user.balance - investmentAmount,
      totalInvested: user.totalInvested + investmentAmount
    });
    
    setIsCasting(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 relative">
      <Navigation />
      
      <div className="pt-20 px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Investment Spell Chamber
            </h1>
            <p className="text-gray-300">
              Channel your financial energy into powerful investment spells
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Investment Controls */}
            <div className="space-y-8">
              <InvestmentSlider
                amount={investmentAmount}
                onAmountChange={setInvestmentAmount}
                maxAmount={user.balance}
              />
              
              <SpellCasting
                amount={investmentAmount}
                selectedStock={selectedStock}
                onStockSelect={setSelectedStock}
                onCast={handleInvest}
                isCasting={isCasting}
              />
            </div>

            {/* Right Column - Portfolio */}
            <div>
              <Portfolio totalInvested={user.totalInvested} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentWizard;