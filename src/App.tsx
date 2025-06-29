import React, { useState } from 'react';
import { useGameState } from './hooks/useGameState';
import { Combat } from './components/Combat';
import { Shop } from './components/Shop';
import { Inventory } from './components/Inventory';
import { PlayerStats } from './components/PlayerStats';
import { Research } from './components/Research';
import { Achievements } from './components/Achievements';
import { CollectionBook } from './components/CollectionBook';
import { Statistics } from './components/Statistics';
import { GameModeSelector } from './components/GameModeSelector';
import { PokyegMarket } from './components/PokyegMarket';
import { Tutorial } from './components/Tutorial';
import { CheatPanel } from './components/CheatPanel';
import { Mining } from './components/Mining';
import { YojefMarket } from './components/YojefMarket';
import { FloatingIcons } from './components/FloatingIcons';
import { PWAInstallPrompt } from './components/PWAInstallPrompt';
import { Shield, Package, User, Play, RotateCcw, Brain, Crown, Trophy, Book, BarChart3, Settings, Pickaxe, Sparkles, Star } from 'lucide-react';

type GameView = 'stats' | 'shop' | 'inventory' | 'research' | 'mining';
type ModalView = 'achievements' | 'collection' | 'statistics' | 'gameMode' | 'pokyegMarket' | 'tutorial' | 'cheats' | 'resetConfirm' | 'yojefMarket' | null;

function App() {
  const {
    gameState,
    isLoading,
    equipWeapon,
    equipArmor,
    upgradeWeapon,
    upgradeArmor,
    sellWeapon,
    sellArmor,
    upgradeResearch,
    openChest,
    purchaseMythical,
    startCombat,
    attack,
    resetGame,
    setGameMode,
    toggleCheat,
    generateCheatItem,
    mineGem,
    exchangeShinyGems,
    discardItem,
    repairWithAnvil,
    purchaseRelic,
    upgradeRelic,
    equipRelic,
    unequipRelic,
    sellRelic,
  } = useGameState();

  const [currentView, setCurrentView] = useState<GameView>('stats');
  const [currentModal, setCurrentModal] = useState<ModalView>(null);
  const [showWelcome, setShowWelcome] = useState(true);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="text-center relative z-10">
          <div className="relative mb-6">
            <div className="animate-spin inline-block w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full"></div>
            <div className="absolute inset-0 animate-ping inline-block w-16 h-16 border-2 border-purple-300 rounded-full opacity-20"></div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2 animate-pulse">🏰 Hugoland 🗡️</h1>
          <p className="text-purple-300 text-xl font-semibold animate-bounce">Loading your adventure...</p>
          <div className="mt-4 flex justify-center space-x-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Show welcome screen for new players
  if (showWelcome && gameState.zone === 1 && gameState.coins === 100) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Magical background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-20 w-36 h-36 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <FloatingIcons />
        
        <div className="text-center max-w-2xl mx-auto relative z-10">
          <div className="mb-8 relative">
            {/* Glowing title effect */}
            <div className="absolute inset-0 blur-lg">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                🏰 Welcome to Hugoland! 🗡️
              </h1>
            </div>
            <h1 className="relative text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              🏰 Welcome to Hugoland! 🗡️
            </h1>
            
            <div className="mt-4 flex justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-400 animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
          
          <div className="bg-black/40 backdrop-blur-lg p-6 rounded-2xl border border-purple-500/30 mb-8 shadow-2xl">
            <p className="text-purple-200 text-xl mb-6 leading-relaxed">
              The ultimate fantasy adventure game where <span className="text-yellow-400 font-bold">knowledge is your greatest weapon!</span>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-4 rounded-xl border border-purple-400/30">
                <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                  Epic Adventures Await
                </h3>
                <ul className="text-purple-200 text-sm space-y-1">
                  <li>• Answer trivia to defeat enemies</li>
                  <li>• Collect powerful weapons & armor</li>
                  <li>• Mine gems and find rare treasures</li>
                  <li>• Unlock achievements & build streaks</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-pink-900/50 to-purple-900/50 p-4 rounded-xl border border-pink-400/30">
                <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                  <Crown className="w-5 h-5 text-yellow-400" />
                  Endless Progression
                </h3>
                <ul className="text-pink-200 text-sm space-y-1">
                  <li>• Multiple challenging game modes</li>
                  <li>• Infinite zones of adventure</li>
                  <li>• Ancient relics in Yojef Market</li>
                  <li>• Premium features at Zone 50</li>
                </ul>
              </div>
            </div>
          </div>
          
          <button
            onClick={() => setShowWelcome(false)}
            className="group relative px-12 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-bold rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative flex items-center gap-3">
              <Play className="w-6 h-6" />
              Start Your Epic Journey
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
          </button>
          
          <p className="text-gray-400 text-sm mt-6 animate-pulse">
            ✨ Begin your legendary quest in the magical realm of Hugoland ✨
          </p>
        </div>
      </div>
    );
  }

  const handleResetGame = () => {
    setCurrentModal('resetConfirm');
  };

  const confirmReset = () => {
    resetGame();
    setCurrentModal(null);
  };

  const renderCurrentView = () => {
    if (gameState.inCombat && gameState.currentEnemy) {
      return (
        <Combat
          enemy={gameState.currentEnemy}
          playerStats={gameState.playerStats}
          onAttack={attack}
          combatLog={gameState.combatLog}
          gameMode={gameState.gameMode}
          knowledgeStreak={gameState.knowledgeStreak}
        />
      );
    }

    switch (currentView) {
      case 'stats':
        return (
          <div className="space-y-6">
            <PlayerStats
              playerStats={gameState.playerStats}
              zone={gameState.zone}
              coins={gameState.coins}
              gems={gameState.gems}
              shinyGems={gameState.shinyGems}
              playerTags={gameState.playerTags}
            />
            
            {/* Enhanced Knowledge Streak Display */}
            {gameState.knowledgeStreak.current > 0 && (
              <div className="relative bg-gradient-to-r from-yellow-900/80 via-orange-900/80 to-red-900/80 p-6 rounded-2xl border border-yellow-500/50 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-orange-400/10 to-red-400/10 animate-pulse"></div>
                <div className="relative text-center">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="animate-bounce">🔥</div>
                    <h3 className="text-yellow-400 font-bold text-2xl bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                      Knowledge Streak!
                    </h3>
                    <div className="animate-bounce" style={{ animationDelay: '0.1s' }}>🔥</div>
                  </div>
                  <div className="bg-black/30 rounded-xl p-4 backdrop-blur-sm">
                    <p className="text-white text-lg font-semibold mb-2">
                      {gameState.knowledgeStreak.current} correct answers in a row
                    </p>
                    <p className="text-yellow-300 text-lg font-bold">
                      +{Math.round((gameState.knowledgeStreak.multiplier - 1) * 100)}% reward bonus
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="text-center space-y-6">
              <button
                onClick={startCombat}
                disabled={gameState.playerStats.hp <= 0}
                className={`group relative px-10 py-4 rounded-2xl font-bold text-white transition-all duration-300 transform flex items-center gap-4 justify-center text-lg mx-auto ${
                  gameState.playerStats.hp > 0
                    ? 'bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-500 hover:via-emerald-500 hover:to-teal-500 hover:scale-105 shadow-2xl hover:shadow-green-500/50'
                    : 'bg-gray-600 cursor-not-allowed opacity-50'
                }`}
              >
                {gameState.playerStats.hp > 0 && (
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                )}
                <div className="relative flex items-center gap-4">
                  <Play className="w-6 h-6" />
                  {gameState.playerStats.hp <= 0 ? 'You are defeated!' : 'Start Epic Adventure'}
                  {gameState.playerStats.hp > 0 && <Sparkles className="w-6 h-6 animate-pulse" />}
                </div>
              </button>
              
              {gameState.playerStats.hp <= 0 && (
                <div className="bg-red-900/50 p-4 rounded-xl border border-red-500/50">
                  <p className="text-red-300 font-semibold">
                    💀 Your hero has fallen! Visit the shop to get better equipment and try again!
                  </p>
                </div>
              )}
              
              {gameState.isPremium && (
                <div className="relative bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 p-6 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-amber-400/20 to-orange-400/20 animate-pulse"></div>
                  <div className="relative flex items-center justify-center gap-3">
                    <Crown className="w-8 h-8 text-white animate-pulse" />
                    <span className="text-white font-bold text-xl">🎉 PREMIUM MEMBER UNLOCKED! 🎉</span>
                    <Crown className="w-8 h-8 text-white animate-pulse" />
                  </div>
                  <p className="text-yellow-100 text-center mt-2">
                    You've reached Zone 50! Enjoy exclusive rewards and special features!
                  </p>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={() => setCurrentModal('gameMode')}
                  className="group px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 justify-center shadow-lg hover:shadow-purple-500/30"
                >
                  <Settings className="w-5 h-5" />
                  Game Modes
                </button>
                
                <button
                  onClick={handleResetGame}
                  className="group px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 justify-center shadow-lg hover:shadow-red-500/30"
                >
                  <RotateCcw className="w-5 h-5" />
                  Reset Game
                </button>
              </div>
            </div>
          </div>
        );
      case 'shop':
        return <Shop coins={gameState.coins} onOpenChest={openChest} onDiscardItem={discardItem} isPremium={gameState.isPremium} />;
      case 'inventory':
        return (
          <Inventory
            inventory={gameState.inventory}
            gems={gameState.gems}
            onEquipWeapon={equipWeapon}
            onEquipArmor={equipArmor}
            onUpgradeWeapon={upgradeWeapon}
            onUpgradeArmor={upgradeArmor}
            onSellWeapon={sellWeapon}
            onSellArmor={sellArmor}
            onRepairWithAnvil={repairWithAnvil}
            onUpgradeRelic={upgradeRelic}
            onEquipRelic={equipRelic}
            onUnequipRelic={unequipRelic}
            onSellRelic={sellRelic}
            onOpenYojefMarket={() => setCurrentModal('yojefMarket')}
          />
        );
      case 'research':
        return (
          <Research
            research={gameState.research}
            coins={gameState.coins}
            onUpgradeResearch={upgradeResearch}
            isPremium={gameState.isPremium}
          />
        );
      case 'mining':
        return (
          <Mining
            mining={gameState.mining}
            gems={gameState.gems}
            shinyGems={gameState.shinyGems}
            onMineGem={mineGem}
            onExchangeShinyGems={exchangeShinyGems}
          />
        );
      default:
        return null;
    }
  };

  const renderModal = () => {
    switch (currentModal) {
      case 'achievements':
        return (
          <Achievements
            achievements={gameState.achievements}
            onClose={() => setCurrentModal(null)}
          />
        );
      case 'collection':
        return (
          <CollectionBook
            collectionBook={gameState.collectionBook}
            allWeapons={gameState.inventory.weapons}
            allArmor={gameState.inventory.armor}
            onClose={() => setCurrentModal(null)}
          />
        );
      case 'statistics':
        return (
          <Statistics
            statistics={gameState.statistics}
            onClose={() => setCurrentModal(null)}
          />
        );
      case 'gameMode':
        return (
          <GameModeSelector
            currentMode={gameState.gameMode}
            onSelectMode={setGameMode}
            onClose={() => setCurrentModal(null)}
          />
        );
      case 'pokyegMarket':
        return (
          <PokyegMarket
            coins={gameState.coins}
            onPurchaseMythical={purchaseMythical}
            onClose={() => setCurrentModal(null)}
          />
        );
      case 'tutorial':
        return (
          <Tutorial
            onClose={() => setCurrentModal(null)}
          />
        );
      case 'cheats':
        return (
          <CheatPanel
            cheats={gameState.cheats}
            onToggleCheat={toggleCheat}
            onGenerateItem={generateCheatItem}
            onClose={() => setCurrentModal(null)}
          />
        );
      case 'yojefMarket':
        return (
          <YojefMarket
            relicItems={gameState.yojefMarket.items}
            gems={gameState.gems}
            equippedRelicsCount={gameState.inventory.equippedRelics.length}
            onPurchaseRelic={purchaseRelic}
            onClose={() => setCurrentModal(null)}
            nextRefresh={gameState.yojefMarket.nextRefresh}
          />
        );
      case 'resetConfirm':
        return (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-br from-red-900/90 via-gray-900/90 to-black/90 p-8 rounded-2xl border border-red-500/50 max-w-md w-full backdrop-blur-lg shadow-2xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <RotateCcw className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-white font-bold text-2xl mb-4">Reset Game?</h2>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  Are you sure you want to reset your game? This will permanently delete all your progress, including:
                </p>
                <div className="bg-black/40 p-4 rounded-xl mb-6 text-left backdrop-blur-sm">
                  <ul className="text-red-300 text-sm space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      All coins, gems, and shiny gems
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      All weapons, armor, and relics
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      Zone progress and achievements
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      Research levels and statistics
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      Collection book progress
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      Player tags and streaks
                    </li>
                  </ul>
                </div>
                <p className="text-red-400 font-bold text-sm mb-8">
                  ⚠️ This action cannot be undone! ⚠️
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => setCurrentModal(null)}
                    className="flex-1 py-3 bg-gray-600 text-white rounded-xl hover:bg-gray-500 transition-all duration-200 font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmReset}
                    className="flex-1 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:from-red-500 hover:to-red-600 transition-all duration-200 font-bold shadow-lg"
                  >
                    Reset Game
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const unlockedAchievements = gameState.achievements.filter(a => a.unlocked).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <FloatingIcons />
      
      {/* PWA Install Prompt */}
      <PWAInstallPrompt />

      {/* Enhanced Header */}
      <div className="relative bg-gradient-to-r from-purple-800/90 via-violet-800/90 to-purple-800/90 backdrop-blur-lg shadow-2xl border-b border-purple-500/30">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-violet-400/10 to-purple-400/10 animate-pulse"></div>
        <div className="container mx-auto px-4 py-6 relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  🏰 Hugoland 🗡️
                </h1>
                <div className="absolute inset-0 blur-lg bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent opacity-30">
                  🏰 Hugoland 🗡️
                </div>
              </div>
              {gameState.isPremium && (
                <div className="relative">
                  <Crown className="w-8 h-8 text-yellow-400 animate-pulse" />
                  <div className="absolute inset-0 animate-ping">
                    <Crown className="w-8 h-8 text-yellow-300 opacity-30" />
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Enhanced Quick Stats Bar */}
          <div className="flex justify-center items-center gap-6 mb-6">
            <button
              onClick={() => setCurrentModal('achievements')}
              className="group flex items-center gap-2 px-4 py-2 bg-yellow-900/30 hover:bg-yellow-800/40 rounded-xl transition-all duration-300 border border-yellow-500/30 hover:border-yellow-400/50"
            >
              <Trophy className="w-5 h-5 text-yellow-400 group-hover:animate-pulse" />
              <span className="text-yellow-300 font-semibold">{unlockedAchievements}/{gameState.achievements.length}</span>
            </button>
            
            <button
              onClick={() => setCurrentModal('yojefMarket')}
              className="group flex items-center gap-2 px-4 py-2 bg-indigo-900/30 hover:bg-indigo-800/40 rounded-xl transition-all duration-300 border border-indigo-500/30 hover:border-indigo-400/50"
            >
              <Book className="w-5 h-5 text-indigo-400 group-hover:animate-pulse" />
              <span className="text-indigo-300 font-semibold">Collect</span>
            </button>
            
            <button
              onClick={() => setCurrentModal('statistics')}
              className="group flex items-center gap-2 px-4 py-2 bg-blue-900/30 hover:bg-blue-800/40 rounded-xl transition-all duration-300 border border-blue-500/30 hover:border-blue-400/50"
            >
              <BarChart3 className="w-5 h-5 text-blue-400 group-hover:animate-pulse" />
              <span className="text-blue-300 font-semibold">{Math.round((gameState.statistics.correctAnswers / Math.max(gameState.statistics.totalQuestionsAnswered, 1)) * 100)}%</span>
            </button>
          </div>
          
          {/* Enhanced Navigation */}
          <nav className="flex justify-center space-x-2 overflow-x-auto pb-2">
            {[
              { id: 'stats', label: 'Hero', icon: User, gradient: 'from-green-600 to-emerald-600' },
              { id: 'research', label: 'Research', icon: Brain, gradient: 'from-purple-600 to-indigo-600' },
              { id: 'shop', label: 'Shop', icon: Package, gradient: 'from-yellow-600 to-orange-600' },
              { id: 'inventory', label: 'Inventory', icon: Shield, gradient: 'from-blue-600 to-cyan-600' },
              { id: 'mining', label: 'Mining', icon: Pickaxe, gradient: 'from-amber-600 to-yellow-600' },
            ].map(({ id, label, icon: Icon, gradient }) => (
              <button
                key={id}
                onClick={() => setCurrentView(id as GameView)}
                disabled={gameState.inCombat}
                className={`group relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 whitespace-nowrap ${
                  currentView === id
                    ? `bg-gradient-to-r ${gradient} text-white shadow-2xl scale-105`
                    : gameState.inCombat
                    ? 'bg-gray-700/50 text-gray-500 cursor-not-allowed'
                    : `bg-purple-700/50 text-white hover:bg-gradient-to-r hover:${gradient} hover:scale-105 backdrop-blur-sm border border-purple-500/30`
                }`}
              >
                {currentView === id && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-xl blur opacity-30 animate-pulse`}></div>
                )}
                <div className="relative flex items-center gap-3">
                  <Icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{label}</span>
                </div>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {renderCurrentView()}
        </div>
      </div>

      {/* Modals */}
      {renderModal()}
    </div>
  );
}

export default App;