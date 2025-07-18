import React from 'react';
import { Research as ResearchType } from '../types/game';
import { Brain, TrendingUp, Sword, Shield, Heart, Coins } from 'lucide-react';
import { calculateResearchBonus, calculateResearchCost } from '../utils/gameUtils';

interface ResearchProps {
  research: ResearchType;
  coins: number;
  onUpgradeResearch: (type: 'atk' | 'def' | 'hp') => void;
  isPremium: boolean;
}

export const Research: React.FC<ResearchProps> = ({ 
  research, 
  coins, 
  onUpgradeResearch, 
  isPremium 
}) => {
  const researchTypes = [
    {
      key: 'atk' as const,
      name: 'Attack Research',
      icon: Sword,
      color: 'text-orange-400',
      bgColor: 'bg-orange-900/30',
      borderColor: 'border-orange-500/50',
      description: 'Increase your attack power'
    },
    {
      key: 'def' as const,
      name: 'Defense Research',
      icon: Shield,
      color: 'text-blue-400',
      bgColor: 'bg-blue-900/30',
      borderColor: 'border-blue-500/50',
      description: 'Increase your defense power'
    },
    {
      key: 'hp' as const,
      name: 'Health Research',
      icon: Heart,
      color: 'text-red-400',
      bgColor: 'bg-red-900/30',
      borderColor: 'border-red-500/50',
      description: 'Increase your maximum health'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 p-4 sm:p-6 rounded-lg shadow-2xl">
      <div className="text-center mb-4 sm:mb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
          <h2 className="text-xl sm:text-2xl font-bold text-white">Research Laboratory</h2>
        </div>
        <p className="text-blue-300 text-sm sm:text-base">Choose your path of advancement</p>
      </div>

      {/* Research Trees - Always Horizontal Layout */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
        {researchTypes.map((type) => {
          const researchData = research[type.key];
          const cost = calculateResearchCost(researchData.level);
          const currentBonus = calculateResearchBonus(researchData.level);
          const nextBonus = calculateResearchBonus(researchData.level + 1);
          const Icon = type.icon;

          return (
            <div
              key={type.key}
              className={`p-2 sm:p-4 lg:p-6 rounded-lg border-2 ${type.borderColor} ${type.bgColor}`}
            >
              <div className="text-center mb-3 sm:mb-4">
                <Icon className={`w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mx-auto mb-2 sm:mb-3 ${type.color}`} />
                <h3 className={`font-bold text-sm sm:text-lg lg:text-xl ${type.color}`}>
                  {type.name}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm mt-1 sm:mt-2">
                  {type.description}
                </p>
              </div>

              {/* Current Stats */}
              <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                <div className="bg-black/30 p-2 sm:p-3 rounded-lg">
                  <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                    <span className="text-white font-semibold text-xs sm:text-sm">Level</span>
                  </div>
                  <p className="text-lg sm:text-2xl font-bold text-green-400">{researchData.level}</p>
                </div>

                <div className="bg-black/30 p-2 sm:p-3 rounded-lg">
                  <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                    <span className="text-white font-semibold text-xs sm:text-sm">Bonus</span>
                  </div>
                  <p className="text-lg sm:text-2xl font-bold text-yellow-400">+{currentBonus}%</p>
                </div>
              </div>

              {/* Upgrade Section */}
              <div className="bg-black/40 p-2 sm:p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div>
                    <p className="text-white font-semibold text-xs sm:text-sm">Next Level</p>
                    <p className="text-gray-300 text-xs">
                      Bonus: +{currentBonus}% → +{nextBonus}%
                    </p>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 text-yellow-300">
                    <Coins className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="font-semibold text-xs sm:text-sm">{cost}</span>
                  </div>
                </div>

                <button
                  onClick={() => onUpgradeResearch(type.key)}
                  disabled={coins < cost}
                  className={`w-full py-2 sm:py-3 rounded-lg font-bold transition-all duration-200 text-xs sm:text-sm ${
                    coins >= cost
                      ? `bg-gradient-to-r from-${type.key === 'atk' ? 'orange' : type.key === 'def' ? 'blue' : 'red'}-600 to-${type.key === 'atk' ? 'orange' : type.key === 'def' ? 'blue' : 'red'}-500 text-white hover:scale-105 shadow-lg`
                      : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {coins >= cost ? 'Upgrade Research' : 'Insufficient Coins'}
                </button>

                <div className="mt-2 sm:mt-3 text-center">
                  <p className="text-xs text-gray-300">
                    Total spent: {researchData.totalSpent} coins
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Info */}
      <div className="mt-4 sm:mt-6 text-center">
        <p className="text-xs sm:text-sm text-gray-300">
          Each research tree provides a 10% bonus per level to the respective stat
        </p>
      </div>
    </div>
  );
};