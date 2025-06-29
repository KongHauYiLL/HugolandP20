import React from 'react';
import { Research as ResearchType } from '../types/game';
import { Brain, TrendingUp, Sword, Shield, Heart, Coins, Sparkles, Star } from 'lucide-react';
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
      bgGradient: 'from-orange-900/60 to-red-900/60',
      borderColor: 'border-orange-500/50',
      buttonGradient: 'from-orange-600 to-red-600',
      description: 'Increase your attack power permanently'
    },
    {
      key: 'def' as const,
      name: 'Defense Research',
      icon: Shield,
      color: 'text-blue-400',
      bgGradient: 'from-blue-900/60 to-cyan-900/60',
      borderColor: 'border-blue-500/50',
      buttonGradient: 'from-blue-600 to-cyan-600',
      description: 'Increase your defense power permanently'
    },
    {
      key: 'hp' as const,
      name: 'Health Research',
      icon: Heart,
      color: 'text-red-400',
      bgGradient: 'from-red-900/60 to-pink-900/60',
      borderColor: 'border-red-500/50',
      buttonGradient: 'from-red-600 to-pink-600',
      description: 'Increase your maximum health permanently'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-blue-900/80 backdrop-blur-lg p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl border border-indigo-500/30">
      <div className="text-center mb-6 sm:mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Research Laboratory
          </h2>
          <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 animate-pulse" />
        </div>
        <p className="text-blue-300 text-sm sm:text-base lg:text-lg">Choose your path of advancement</p>
        <div className="flex justify-center space-x-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 text-purple-400 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
      </div>

      {/* Research Trees - Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {researchTypes.map((type) => {
          const researchData = research[type.key];
          const cost = calculateResearchCost(researchData.level);
          const currentBonus = calculateResearchBonus(researchData.level);
          const nextBonus = calculateResearchBonus(researchData.level + 1);
          const Icon = type.icon;

          return (
            <div
              key={type.key}
              className={`group bg-gradient-to-br ${type.bgGradient} backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl border-2 ${type.borderColor} hover:scale-105 transition-all duration-300 shadow-lg`}
            >
              <div className="text-center mb-4 sm:mb-6">
                <div className="relative mb-4">
                  <Icon className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto ${type.color} group-hover:animate-pulse`} />
                  <div className="absolute inset-0 animate-ping opacity-20">
                    <Icon className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto ${type.color}`} />
                  </div>
                </div>
                <h3 className={`font-bold text-lg sm:text-xl lg:text-2xl ${type.color} mb-2`}>
                  {type.name}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed">
                  {type.description}
                </p>
              </div>

              {/* Current Stats */}
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div className="bg-black/40 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                    <span className="text-white font-semibold text-sm sm:text-base">Level</span>
                  </div>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-400">{researchData.level}</p>
                  <div className="mt-2 h-2 bg-green-900/50 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>

                <div className="bg-black/40 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                    <span className="text-white font-semibold text-sm sm:text-base">Bonus</span>
                  </div>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400">+{currentBonus}%</p>
                  <div className="mt-2 h-2 bg-yellow-900/50 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Upgrade Section */}
              <div className="bg-black/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">Next Level</p>
                    <p className="text-gray-300 text-xs sm:text-sm">
                      Bonus: +{currentBonus}% → +{nextBonus}%
                    </p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-yellow-900/40 rounded-full">
                    <Coins className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                    <span className="font-semibold text-xs sm:text-sm text-yellow-300">{cost.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  onClick={() => onUpgradeResearch(type.key)}
                  disabled={coins < cost}
                  className={`w-full py-3 sm:py-4 rounded-xl font-bold transition-all duration-300 text-sm sm:text-base ${
                    coins >= cost
                      ? `bg-gradient-to-r ${type.buttonGradient} text-white hover:scale-105 shadow-lg backdrop-blur-sm border border-white/20`
                      : 'bg-gray-600/50 backdrop-blur-sm text-gray-400 cursor-not-allowed border border-gray-600/30'
                  }`}
                >
                  {coins >= cost ? 'Upgrade Research' : 'Insufficient Coins'}
                </button>

                <div className="mt-3 sm:mt-4 text-center">
                  <p className="text-xs sm:text-sm text-gray-300">
                    Total spent: <span className="text-yellow-400 font-semibold">{researchData.totalSpent.toLocaleString()}</span> coins
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Info */}
      <div className="mt-6 sm:mt-8 text-center">
        <div className="bg-black/40 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-indigo-500/30">
          <p className="text-sm sm:text-base text-gray-300 mb-2">
            💡 <strong className="text-indigo-400">Research Benefits:</strong>
          </p>
          <p className="text-xs sm:text-sm text-gray-400">
            Each research tree provides a <span className="text-yellow-400 font-semibold">10% bonus per level</span> to the respective stat
          </p>
        </div>
      </div>
    </div>
  );
};