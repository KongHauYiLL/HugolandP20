import React from 'react';
import { PlayerTag } from '../types/game';
import { Heart, Sword, Shield, MapPin, Coins, Gem, Sparkles, Star, Crown } from 'lucide-react';

interface PlayerStatsProps {
  playerStats: {
    hp: number;
    maxHp: number;
    atk: number;
    def: number;
  };
  zone: number;
  coins: number;
  gems: number;
  shinyGems: number;
  playerTags: PlayerTag[];
}

export const PlayerStats: React.FC<PlayerStatsProps> = ({ 
  playerStats, 
  zone, 
  coins, 
  gems, 
  shinyGems, 
  playerTags 
}) => {
  const unlockedTags = playerTags.filter(tag => tag.unlocked);
  const hpPercentage = (playerStats.hp / playerStats.maxHp) * 100;

  return (
    <div className="relative bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-black/90 p-6 rounded-2xl shadow-2xl border border-slate-600/50 backdrop-blur-lg overflow-hidden">
      {/* Magical background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500 rounded-full filter blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative z-10">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            Hero Status
          </h2>
          <div className="flex justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
            ))}
          </div>
        </div>
        
        {/* Player Tags */}
        {unlockedTags.length > 0 && (
          <div className="mb-6">
            <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
              <Crown className="w-4 h-4 text-yellow-400" />
              Player Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {unlockedTags.map((tag) => (
                <div
                  key={tag.id}
                  className={`group relative px-3 py-1 rounded-full text-xs font-semibold ${tag.color} bg-black/40 border border-current/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-black/60`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">{tag.icon} {tag.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="space-y-6">
          {/* Enhanced Health Bar */}
          <div className="bg-black/40 p-4 rounded-xl backdrop-blur-sm border border-red-500/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="relative">
                <Heart className="w-6 h-6 text-red-400" />
                {hpPercentage <= 25 && (
                  <div className="absolute inset-0 animate-ping">
                    <Heart className="w-6 h-6 text-red-300 opacity-50" />
                  </div>
                )}
              </div>
              <span className="text-white font-semibold text-lg">Health</span>
              <div className="ml-auto text-right">
                <span className={`font-bold text-lg ${hpPercentage <= 25 ? 'text-red-400 animate-pulse' : 'text-white'}`}>
                  {playerStats.hp}/{playerStats.maxHp}
                </span>
              </div>
            </div>
            <div className="relative w-full bg-gray-700 rounded-full h-4 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 animate-pulse opacity-30"></div>
              <div 
                className={`relative h-4 rounded-full transition-all duration-500 ${
                  hpPercentage > 60 ? 'bg-gradient-to-r from-green-500 to-green-400' :
                  hpPercentage > 25 ? 'bg-gradient-to-r from-yellow-500 to-orange-400' :
                  'bg-gradient-to-r from-red-500 to-red-400 animate-pulse'
                }`}
                style={{ width: `${hpPercentage}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Combat Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 p-4 rounded-xl border border-orange-500/30 backdrop-blur-sm group hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <Sword className="w-5 h-5 text-orange-400 group-hover:animate-pulse" />
                <span className="text-white font-semibold">Attack</span>
              </div>
              <p className="text-3xl font-bold text-orange-400">{playerStats.atk}</p>
              <div className="mt-2 h-1 bg-orange-900/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-orange-500 to-red-400 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 p-4 rounded-xl border border-blue-500/30 backdrop-blur-sm group hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-5 h-5 text-blue-400 group-hover:animate-pulse" />
                <span className="text-white font-semibold">Defense</span>
              </div>
              <p className="text-3xl font-bold text-blue-400">{playerStats.def}</p>
              <div className="mt-2 h-1 bg-blue-900/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Zone Display */}
          <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 p-4 rounded-xl border border-green-500/30 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="w-6 h-6 text-green-400" />
              <span className="text-white font-semibold text-lg">Current Zone</span>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-4xl font-bold text-green-400">{zone}</p>
              {zone >= 50 && (
                <div className="flex items-center gap-2 px-3 py-1 bg-yellow-600/30 rounded-full border border-yellow-500/50">
                  <Crown className="w-4 h-4 text-yellow-400 animate-pulse" />
                  <span className="text-yellow-300 text-sm font-semibold">PREMIUM</span>
                </div>
              )}
            </div>
            {zone >= 10 && (
              <p className="text-green-300 text-sm mt-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Enemies can drop items!
              </p>
            )}
          </div>

          {/* Enhanced Resources */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-gradient-to-br from-yellow-900/40 to-amber-900/40 p-4 rounded-xl border border-yellow-500/30 backdrop-blur-sm group hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <Coins className="w-4 h-4 text-yellow-400 group-hover:animate-spin" />
                <span className="text-white font-semibold text-sm">Coins</span>
              </div>
              <p className="text-xl font-bold text-yellow-400">{coins.toLocaleString()}</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 p-4 rounded-xl border border-purple-500/30 backdrop-blur-sm group hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <Gem className="w-4 h-4 text-purple-400 group-hover:animate-pulse" />
                <span className="text-white font-semibold text-sm">Gems</span>
              </div>
              <p className="text-xl font-bold text-purple-400">{gems.toLocaleString()}</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-900/40 to-orange-900/40 p-4 rounded-xl border border-yellow-500/30 backdrop-blur-sm group hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-yellow-400 group-hover:animate-bounce" />
                <span className="text-white font-semibold text-sm">Shiny</span>
              </div>
              <p className="text-xl font-bold text-yellow-400">{shinyGems.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};