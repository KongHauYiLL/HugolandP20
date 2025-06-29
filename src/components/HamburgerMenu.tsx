import React, { useState } from 'react';
import { Menu, X, Sprout, BarChart3, Trophy, TrendingUp, Settings } from 'lucide-react';
import { GardenOfGrowth } from './GardenOfGrowth';
import { Statistics } from './Statistics';
import { Achievements } from './Achievements';
import { ProgressionPanel } from './ProgressionPanel';
import { GameSettings } from './GameSettings';
import { GameState, Achievement, Statistics as StatisticsType, ProgressionSystem, GardenOfGrowth as GardenType, GameSettings as SettingsType } from '../types/game';

interface HamburgerMenuProps {
  gameState: GameState;
  onPlantSeed: () => boolean;
  onBuyWater: (hours: number) => boolean;
  onUpgradeSkill: (skillId: string) => boolean;
  onPrestige: () => boolean;
  onUpdateSettings: (settings: Partial<SettingsType>) => void;
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  gameState,
  onPlantSeed,
  onBuyWater,
  onUpgradeSkill,
  onPrestige,
  onUpdateSettings
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'garden' | 'stats' | 'achievements' | 'progression' | 'settings' | null>(null);

  const menuItems = [
    {
      id: 'garden',
      name: 'Garden of Growth',
      icon: Sprout,
      color: 'text-green-400',
      description: 'Grow plants for permanent stat bonuses'
    },
    {
      id: 'stats',
      name: 'Statistics',
      icon: BarChart3,
      color: 'text-blue-400',
      description: 'View your detailed game statistics'
    },
    {
      id: 'achievements',
      name: 'Achievements',
      icon: Trophy,
      color: 'text-yellow-400',
      description: 'Track your progress and unlock rewards'
    },
    {
      id: 'progression',
      name: 'Character Progress',
      icon: TrendingUp,
      color: 'text-purple-400',
      description: 'Level up and unlock new skills'
    },
    {
      id: 'settings',
      name: 'Settings',
      icon: Settings,
      color: 'text-gray-400',
      description: 'Customize your game experience'
    }
  ];

  const closeMenu = () => {
    setIsOpen(false);
    setActiveSection(null);
  };

  const openSection = (section: typeof activeSection) => {
    setActiveSection(section);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'garden':
        return (
          <GardenOfGrowth
            garden={gameState.gardenOfGrowth}
            coins={gameState.coins}
            onPlantSeed={onPlantSeed}
            onBuyWater={onBuyWater}
            onClose={() => setActiveSection(null)}
          />
        );
      case 'stats':
        return (
          <Statistics
            statistics={gameState.statistics}
            onClose={() => setActiveSection(null)}
          />
        );
      case 'achievements':
        return (
          <Achievements
            achievements={gameState.achievements}
            onClose={() => setActiveSection(null)}
          />
        );
      case 'progression':
        return (
          <ProgressionPanel
            progression={gameState.progression}
            onUpgradeSkill={onUpgradeSkill}
            onPrestige={onPrestige}
            onClose={() => setActiveSection(null)}
          />
        );
      case 'settings':
        return (
          <GameSettings
            settings={gameState.settings}
            onUpdateSettings={onUpdateSettings}
            onClose={() => setActiveSection(null)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm"
      >
        <Menu className="w-4 h-4" />
        <span className="hidden sm:inline">Menu</span>
      </button>

      {/* Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-slate-900 to-gray-900 p-4 sm:p-6 rounded-lg border border-slate-500/50 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <Menu className="w-6 h-6 sm:w-8 sm:h-8 text-slate-400" />
                <div>
                  <h2 className="text-white font-bold text-lg sm:text-xl">Game Menu</h2>
                  <p className="text-slate-300 text-sm">Access special features and settings</p>
                </div>
              </div>
              <button
                onClick={closeMenu}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => openSection(item.id as any)}
                    className="p-4 bg-black/30 rounded-lg border border-gray-600/50 hover:border-gray-500/50 transition-all text-left group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className={`w-6 h-6 ${item.color} group-hover:scale-110 transition-transform`} />
                      <h3 className="text-white font-semibold">{item.name}</h3>
                    </div>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </button>
                );
              })}
            </div>

            {/* Garden Status Preview */}
            {gameState.gardenOfGrowth.isPlanted && (
              <div className="mt-6 p-4 bg-green-900/20 rounded-lg border border-green-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <Sprout className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-semibold">Garden Status</span>
                </div>
                <div className="text-sm text-gray-300">
                  <p>Growth: {gameState.gardenOfGrowth.growthCm.toFixed(1)}cm</p>
                  <p>Bonus: +{gameState.gardenOfGrowth.totalGrowthBonus.toFixed(1)}% to all stats</p>
                  <p>Water: {gameState.gardenOfGrowth.waterHoursRemaining.toFixed(1)} hours remaining</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Section Modals */}
      {activeSection && renderSection()}
    </>
  );
};