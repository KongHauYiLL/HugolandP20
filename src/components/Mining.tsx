import React, { useState, useEffect } from 'react';
import { Mining as MiningType } from '../types/game';
import { Gem, Coins, Zap, Star, X, Sparkles, Pickaxe } from 'lucide-react';

interface MiningProps {
  mining: MiningType;
  gems: number;
  shinyGems: number;
  onMineGem: (x: number, y: number) => { gems: number; shinyGems: number } | null;
  onExchangeShinyGems: (amount: number) => boolean;
}

interface GemNode {
  x: number;
  y: number;
  clicks: number;
  maxClicks: number;
  id: string;
  isShiny: boolean;
}

export const Mining: React.FC<MiningProps> = ({ 
  mining, 
  gems, 
  shinyGems, 
  onMineGem, 
  onExchangeShinyGems 
}) => {
  const [gemNodes, setGemNodes] = useState<GemNode[]>([]);
  const [showShop, setShowShop] = useState(false);
  const [lastMineTime, setLastMineTime] = useState(0);

  const GRID_SIZE = 5;
  const MINE_COOLDOWN = 0;

  // Generate new gem node
  const generateGemNode = () => {
    const isShiny = Math.random() < 0.1; // 10% chance for shiny gem
    const newNode: GemNode = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
      clicks: 0,
      maxClicks: 1,
      id: Math.random().toString(36).substr(2, 9),
      isShiny,
    };
    return newNode;
  };

  // Initialize with one gem node
  useEffect(() => {
    if (gemNodes.length === 0) {
      setGemNodes([generateGemNode()]);
    }
  }, [gemNodes.length]);

  const handleCellClick = (x: number, y: number) => {
    const now = Date.now();
    if (now - lastMineTime < MINE_COOLDOWN) return;

    const gemNode = gemNodes.find(node => node.x === x && node.y === y);
    if (!gemNode) return;

    setLastMineTime(now);

    const result = onMineGem(x, y);
    if (result) {
      setGemNodes(prev => {
        const updated = prev.filter(node => node.id !== gemNode.id);
        // Add new gem node immediately
        updated.push(generateGemNode());
        return updated;
      });
    }
  };

  const handleExchange = (amount: number) => {
    const success = onExchangeShinyGems(amount);
    if (!success) {
      alert('Not enough shiny gems!');
    }
  };

  const renderMiningGrid = () => {
    const cells = [];
    for (let y = 0; y < GRID_SIZE; y++) {
      for (let x = 0; x < GRID_SIZE; x++) {
        const gemNode = gemNodes.find(node => node.x === x && node.y === y);
        const hasGem = !!gemNode;

        cells.push(
          <div
            key={`${x}-${y}`}
            onClick={() => handleCellClick(x, y)}
            className={`aspect-square border-2 rounded-xl cursor-pointer transition-all duration-300 relative overflow-hidden ${
              hasGem
                ? gemNode?.isShiny
                  ? 'border-yellow-400/70 bg-gradient-to-br from-yellow-900/60 to-orange-900/60 hover:from-yellow-800/70 hover:to-orange-800/70 shadow-lg shadow-yellow-500/30 backdrop-blur-sm'
                  : 'border-purple-400/70 bg-gradient-to-br from-purple-900/60 to-indigo-900/60 hover:from-purple-800/70 hover:to-indigo-800/70 shadow-lg shadow-purple-500/20 backdrop-blur-sm'
                : 'border-gray-600/50 bg-gray-800/40 hover:bg-gray-700/50 backdrop-blur-sm'
            } hover:scale-105`}
          >
            {hasGem && (
              <div className="absolute inset-0 flex items-center justify-center">
                {gemNode?.isShiny ? (
                  <div className="relative">
                    <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-400 animate-pulse" />
                    <div className="absolute inset-0 animate-ping">
                      <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-300 opacity-30" />
                    </div>
                  </div>
                ) : (
                  <Gem className="w-4 h-4 sm:w-6 sm:h-6 text-purple-400 animate-pulse" />
                )}
              </div>
            )}
          </div>
        );
      }
    }
    return cells;
  };

  return (
    <div className="bg-gradient-to-br from-gray-900/80 via-slate-900/80 to-gray-800/80 backdrop-blur-lg p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl border border-gray-500/30">
      <div className="text-center mb-6 sm:mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Pickaxe className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 via-amber-400 to-purple-400 bg-clip-text text-transparent">
            Gem Mining
          </h2>
          <Gem className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 animate-pulse" />
        </div>
        <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-4">Click gem nodes to mine them instantly!</p>
        
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
          <div className="bg-black/40 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-purple-500/30">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Gem className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
              <span className="text-white font-semibold text-sm sm:text-base">Gems</span>
            </div>
            <p className="text-lg sm:text-xl font-bold text-purple-400">{gems.toLocaleString()}</p>
          </div>
          
          <div className="bg-black/40 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-yellow-500/30">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
              <span className="text-white font-semibold text-sm sm:text-base">Shiny</span>
            </div>
            <p className="text-lg sm:text-xl font-bold text-yellow-400">{shinyGems.toLocaleString()}</p>
          </div>
          
          <div className="bg-black/40 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-orange-500/30">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
              <span className="text-white font-semibold text-sm sm:text-base">Power</span>
            </div>
            <p className="text-lg sm:text-xl font-bold text-orange-400">{mining.efficiency}</p>
          </div>
        </div>
      </div>

      {/* Mining Grid */}
      <div className="mb-6 sm:mb-8">
        <h3 className="text-white font-semibold mb-4 text-center text-base sm:text-lg">Mining Area (5x5)</h3>
        <div className="grid grid-cols-5 gap-2 sm:gap-3 max-w-sm mx-auto">
          {renderMiningGrid()}
        </div>
        <div className="text-center text-gray-400 text-xs sm:text-sm mt-4 space-y-2">
          <div className="bg-black/30 backdrop-blur-sm p-3 rounded-xl border border-gray-600/30">
            <p className="mb-1">💎 Purple gems = 1 gem each</p>
            <p className="mb-1">✨ Golden gems = 10 gems each (10% chance)</p>
            <p className="text-green-400">Click once to mine instantly!</p>
          </div>
        </div>
      </div>

      {/* Exchange Shop Button */}
      <div className="text-center">
        <button
          onClick={() => setShowShop(true)}
          className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-600/80 to-orange-600/80 backdrop-blur-sm text-white font-bold rounded-xl hover:from-yellow-500/90 hover:to-orange-500/90 transition-all duration-300 flex items-center gap-3 mx-auto text-sm sm:text-base border border-yellow-500/30 hover:scale-105 shadow-lg"
        >
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-spin" />
          Shiny Exchange
          <Star className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-pulse" />
        </button>
      </div>

      {/* Exchange Shop Modal */}
      {showShop && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-yellow-900/90 via-orange-900/90 to-amber-900/90 backdrop-blur-lg p-6 sm:p-8 rounded-2xl border border-yellow-500/50 max-w-md w-full shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
                <div>
                  <h2 className="text-white font-bold text-lg sm:text-xl">Shiny Exchange</h2>
                  <p className="text-yellow-300 text-sm">Convert shiny gems to regular gems</p>
                </div>
              </div>
              <button
                onClick={() => setShowShop(false)}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="bg-black/40 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-yellow-500/30">
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Sparkles className="w-8 h-8 text-yellow-400" />
                    <span className="text-white font-bold text-lg sm:text-xl">Exchange Rate</span>
                    <Gem className="w-8 h-8 text-purple-400" />
                  </div>
                  <p className="text-yellow-300 text-xl sm:text-2xl font-bold">1 Shiny Gem = 10 Regular Gems</p>
                </div>
                
                <div className="text-center mb-6">
                  <div className="bg-yellow-900/40 backdrop-blur-sm p-3 rounded-lg border border-yellow-500/30">
                    <p className="text-white">You have: <span className="font-bold text-yellow-400 text-lg">{shinyGems}</span> shiny gems</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[1, 5, 10].map(amount => (
                    <button
                      key={amount}
                      onClick={() => handleExchange(amount)}
                      disabled={shinyGems < amount}
                      className={`w-full py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                        shinyGems >= amount
                          ? 'bg-yellow-600/80 backdrop-blur-sm text-white hover:bg-yellow-500/90 border border-yellow-500/30 hover:scale-105'
                          : 'bg-gray-600/50 backdrop-blur-sm text-gray-400 cursor-not-allowed border border-gray-600/30'
                      }`}
                    >
                      Exchange {amount} Shiny → {amount * 10} Gems
                    </button>
                  ))}
                  
                  {shinyGems > 0 && (
                    <button
                      onClick={() => handleExchange(shinyGems)}
                      className="w-full py-3 sm:py-4 bg-gradient-to-r from-yellow-600/80 to-orange-600/80 backdrop-blur-sm text-white font-bold rounded-lg hover:from-yellow-500/90 hover:to-orange-500/90 transition-all duration-300 text-sm sm:text-base border border-yellow-500/30 hover:scale-105"
                    >
                      Exchange All ({shinyGems} → {shinyGems * 10} Gems)
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <div className="bg-black/30 backdrop-blur-sm p-3 rounded-lg border border-yellow-500/20">
                <p className="text-yellow-300 text-xs sm:text-sm">
                  ✨ Shiny gems are rare and valuable! Use them wisely. ✨
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};