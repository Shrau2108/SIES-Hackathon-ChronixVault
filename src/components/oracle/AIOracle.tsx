import React, { useState, useEffect } from 'react';
import { Navigation } from '../ui/Navigation';
import { OracleInterface } from './OracleInterface';
import { StockRecommendations } from './StockRecommendations';
import { MarketInsights } from './MarketInsights';

const AIOracle: React.FC = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  const generateRecommendations = async () => {
    setLoading(true);
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockRecommendations = [
      {
        symbol: 'TCS',
        name: 'Tata Consultancy Services',
        recommendation: 'BUY',
        targetPrice: 3800,
        currentPrice: 3450,
        upside: 10.1,
        reason: 'Strong Q3 results and digital transformation demand',
        riskLevel: 'Low',
        aiConfidence: 87
      },
      {
        symbol: 'INFY',
        name: 'Infosys Limited',
        recommendation: 'BUY',
        targetPrice: 1650,
        currentPrice: 1485,
        upside: 11.1,
        reason: 'Solid revenue growth and margin expansion',
        riskLevel: 'Low',
        aiConfidence: 82
      },
      {
        symbol: 'RELIANCE',
        name: 'Reliance Industries',
        recommendation: 'HOLD',
        targetPrice: 2750,
        currentPrice: 2580,
        upside: 6.6,
        reason: 'Retail and digital growth offsetting oil weakness',
        riskLevel: 'Medium',
        aiConfidence: 75
      }
    ];
    
    setRecommendations(mockRecommendations);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 relative">
      <Navigation />
      
      <div className="pt-20 px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
              AI Oracle Chamber
            </h1>
            <p className="text-gray-300">
              Consult the mystical AI for divine investment wisdom
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Oracle Interface */}
            <div className="lg:col-span-2 space-y-8">
              <OracleInterface 
                onGenerateRecommendations={generateRecommendations}
                loading={loading}
              />
              
              {recommendations.length > 0 && (
                <StockRecommendations recommendations={recommendations} />
              )}
            </div>

            {/* Right Column - Market Insights */}
            <div>
              <MarketInsights />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIOracle;