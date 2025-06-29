import React, { useState } from 'react';
import { ChestReward, Weapon, Armor } from '../types/game';
import { Package, Coins, Gem, X, Trash2, Crown, Sparkles } from 'lucide-react';
import { getRarityColor, getRarityBorder, getRarityGlow } from '../utils/gameUtils';

interface ShopProps {
  coins: number;
  onOpenChest: (cost: number) => ChestReward | null;
  onDiscardItem: (itemId: string, type: 'weapon' | 'armor') => void;
  isPremium: boolean;
}

export const Shop: React.FC<ShopProps> = ({ coins, onOpenChest, onDiscardItem, isPremium }) => {
  const [lastReward, setLastReward] = useState<ChestReward | null>(null);
  const [isOpening, setIsOpening] = useState(false);
  const [showRewardModal, setShowRewardModal] = useState(false);

  const chests = [
    { 
      name: 'Basic Chest', 
      cost: 100, 
      description: 'Common rewards',
      rarityInfo: '60% Common, 30% Rare, 8% Epic, 2% Legendary',
      gradient: 'from-gray-600 to-gray-500'
    },
    { 
      name: 'Rare Chest', 
      cost: 200, 
      description: 'Better rewards',
      rarityInfo: '50% Rare, 35% Epic, 13% Legendary, 2% Mythical',
      gradient: 'from-blue-600 to-blue-500'
    },
    { 
      name: 'Epic Chest', 
      cost: 400, 
      description: 'Great rewards',
      rarityInfo: '60% Epic, 30% Legendary, 10% Mythical',
      gradient: 'from-purple-600 to-purple-500'
    },
    { 
      name: 'Legendary Chest', 
      cost: 1000, 
      description: 'Amazing rewards',
      rarityInfo: '70% Legendary, 30% Mythical',
      gradient: 'from-yellow-600 to-orange-500'
    },
  ];

  const handleOpenChest = async (cost: number) => {
    setIsOpening(true);
    setLastReward(null);
    
    setTimeout(() => {
      const reward = onOpenChest(cost);
      setLastReward(reward);
      setIsOpening(false);
      if (reward) {
        setShowRewardModal(true);
      }
    }, 1500);
  };

  const closeRewardModal = () => {
    setShowRewardModal(false);
    setLastReward(null);
  };

  const handleDiscardItem = (item: Weapon | Armor) => {
    const type = 'baseAtk' in item ? 'weapon' : 'armor';
    onDiscardItem(item.id, type);
  };

  return (
    <div className="bg-gradient-to-br from-yellow-900/80 via-orange-900/80 to-red-900/80 backdrop-blur-lg p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl border border-yellow-500/30">
      <div className="text-center mb-6 sm:mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Package className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Treasure Shop
          </h2>
          <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 animate-pulse" />
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full border border-yellow-500/30">
            <Coins className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
            <span className="font-semibold text-sm sm:text-base text-yellow-300">{coins.toLocaleString()} Coins</span>
          </div>
          
          {isPremium && (
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-600/80 to-orange-600/80 backdrop-blur-sm rounded-full border border-yellow-400/50">
              <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <span className="text-white font-semibold text-xs sm:text-sm">PREMIUM MEMBER</span>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {chests.map((chest, index) => (
          <div key={chest.name} className="group bg-black/40 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-yellow-600/30 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105">
            <div className="flex flex-col items-center gap-3 mb-4">
              <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${chest.gradient} rounded-full flex items-center justify-center shadow-lg group-hover:animate-pulse`}>
                <Package className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <div className="text-center">
                <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-1">{chest.name}</h3>
                <p className="text-xs sm:text-sm text-gray-300 mb-2">{chest.description}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{chest.rarityInfo}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 px-3 py-1 bg-yellow-900/40 rounded-full">
                <Coins className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                <span className="font-semibold text-sm sm:text-base text-yellow-300">{chest.cost.toLocaleString()}</span>
              </div>
              
              <button
                onClick={() => handleOpenChest(chest.cost)}
                disabled={coins < chest.cost || isOpening}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-xs sm:text-sm flex-1 sm:flex-none ${
                  coins >= chest.cost && !isOpening
                    ? `bg-gradient-to-r ${chest.gradient} text-white hover:scale-105 shadow-lg backdrop-blur-sm border border-white/20`
                    : 'bg-gray-600/50 backdrop-blur-sm text-gray-400 cursor-not-allowed border border-gray-600/30'
                }`}
              >
                {isOpening ? 'Opening...' : 'Open'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Opening Animation */}
      {isOpening && (
        <div className="text-center py-8 sm:py-12">
          <div className="relative mb-6">
            <div className="animate-spin inline-block w-12 h-12 sm:w-16 sm:h-16 border-4 border-yellow-400 border-t-transparent rounded-full"></div>
            <div className="absolute inset-0 animate-ping">
              <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-yellow-300 rounded-full opacity-20"></div>
            </div>
          </div>
          <h3 className="text-white font-semibold text-lg sm:text-xl mb-2">Opening chest...</h3>
          <p className="text-gray-300 text-sm sm:text-base">Discovering magical treasures...</p>
          <div className="flex justify-center space-x-1 mt-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Reward Modal */}
      {showRewardModal && lastReward && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-green-900/90 via-teal-900/90 to-blue-900/90 backdrop-blur-lg p-6 sm:p-8 rounded-2xl border border-green-500/50 max-w-md w-full max-h-[80vh] overflow-y-auto shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-white font-bold text-xl sm:text-2xl flex items-center gap-2">
                🎉 Chest Rewards! 
                <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
              </h3>
              <button
                onClick={closeRewardModal}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              {/* Bonus Gems */}
              <div className="bg-purple-900/60 backdrop-blur-sm p-4 rounded-xl border border-purple-500/50">
                <div className="flex items-center justify-center gap-3">
                  <Gem className="w-6 h-6 text-purple-400" />
                  <span className="text-white font-semibold text-lg">Bonus: {Math.floor(Math.random() * 10) + 5} Gems</span>
                </div>
              </div>

              {/* Items */}
              {lastReward.type === 'gems' ? (
                <div className="bg-purple-900/60 backdrop-blur-sm p-4 rounded-xl border border-purple-500/50">
                  <div className="flex items-center justify-center gap-3">
                    <Gem className="w-8 h-8 text-purple-400" />
                    <span className="text-white font-semibold text-xl">{lastReward.gems} Gems</span>
                  </div>
                </div>
              ) : (
                lastReward.items?.map((item, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-xl border-2 ${getRarityBorder(item.rarity)} ${getRarityGlow(item.rarity)} bg-black/50 backdrop-blur-sm`}
                  >
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <p className={`font-bold text-sm ${getRarityColor(item.rarity)}`}>
                          {item.rarity.toUpperCase()}
                        </p>
                        {item.isEnchanted && <Sparkles className="w-4 h-4 text-cyan-400" />}
                      </div>
                      <p className="text-white font-semibold text-base mb-2">{item.name}</p>
                      <p className="text-gray-300 text-sm mb-3">
                        {lastReward.type === 'weapon' 
                          ? `ATK: ${(item as Weapon).baseAtk}` 
                          : `DEF: ${(item as Armor).baseDef}`}
                      </p>
                      <p className="text-gray-400 text-xs mb-4">
                        Durability: {item.durability}/{item.maxDurability}
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div className="flex items-center justify-center gap-1 text-yellow-400 bg-yellow-900/30 rounded-lg py-2">
                          <Coins className="w-3 h-3" />
                          <span>Sell: {(item as any).sellPrice}</span>
                        </div>
                        <div className="flex items-center justify-center gap-1 text-purple-400 bg-purple-900/30 rounded-lg py-2">
                          <Gem className="w-3 h-3" />
                          <span>Upgrade: {(item as any).upgradeCost}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <button
              onClick={closeRewardModal}
              className="w-full mt-6 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-xl hover:from-green-500 hover:to-teal-500 transition-all duration-300 backdrop-blur-sm border border-green-500/30"
            >
              Awesome! ✨
            </button>
          </div>
        </div>
      )}
    </div>
  );
};