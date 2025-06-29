import React, { useState, useEffect } from 'react';
import { Enemy, CombatState } from '../types/game';
import { Sword, Shield, Heart, Brain, Clock, Zap, Skull, Flame, Target } from 'lucide-react';
import { TriviaQuestion, getQuestionByZone, checkAnswer } from '../utils/triviaQuestions';

interface CombatProps {
  enemy: Enemy;
  playerStats: {
    hp: number;
    maxHp: number;
    atk: number;
    def: number;
  };
  combatState: CombatState;
  onAttack: (hit: boolean, category?: string) => void;
  onDodge: (successful: boolean) => void;
  combatLog: string[];
  gameMode: {
    current: 'normal' | 'blitz' | 'bloodlust' | 'crazy';
    speedModeActive: boolean;
    survivalLives: number;
    maxSurvivalLives: number;
  };
  knowledgeStreak: {
    current: number;
    best: number;
    multiplier: number;
  };
}

export const Combat: React.FC<CombatProps> = ({ 
  enemy, 
  playerStats, 
  combatState,
  onAttack, 
  onDodge,
  combatLog, 
  gameMode,
  knowledgeStreak
}) => {
  const [currentQuestion, setCurrentQuestion] = useState<TriviaQuestion | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [typedAnswer, setTypedAnswer] = useState<string>('');
  const [isAnswering, setIsAnswering] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5);
  const [showResult, setShowResult] = useState(false);
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState<boolean | null>(null);
  const [dodgeTimeLeft, setDodgeTimeLeft] = useState(0);

  const questionTime = (gameMode.current === 'blitz' || gameMode.current === 'bloodlust') ? 3 : 5;

  useEffect(() => {
    if (combatState.playerTurn && !currentQuestion) {
      const question = getQuestionByZone(enemy.zone);
      setCurrentQuestion(question);
      setSelectedAnswer(null);
      setTypedAnswer('');
      setTimeLeft(questionTime);
      setShowResult(false);
      setLastAnswerCorrect(null);
    }
  }, [combatState.playerTurn, enemy.zone, questionTime, currentQuestion]);

  useEffect(() => {
    if (!currentQuestion || isAnswering || showResult || !combatState.playerTurn) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleAnswer(null);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion, isAnswering, showResult, combatState.playerTurn]);

  // Dodge timer
  useEffect(() => {
    if (combatState.dodgeWindowActive) {
      const timer = setInterval(() => {
        setDodgeTimeLeft(prev => Math.max(0, prev - 100));
      }, 100);

      if (combatState.dodgeButtonReady) {
        setDodgeTimeLeft(500);
      } else {
        setDodgeTimeLeft(2500);
      }

      return () => clearInterval(timer);
    }
  }, [combatState.dodgeWindowActive, combatState.dodgeButtonReady]);

  const handleAnswer = (answerIndex: number | null) => {
    if (isAnswering || !currentQuestion || !combatState.playerTurn) return;

    setIsAnswering(true);
    
    let userAnswer: string | number;
    if (currentQuestion.type === 'multiple-choice') {
      setSelectedAnswer(answerIndex);
      userAnswer = answerIndex ?? -1;
    } else {
      userAnswer = typedAnswer;
    }

    const isCorrect = checkAnswer(currentQuestion, userAnswer);
    setLastAnswerCorrect(isCorrect);
    setShowResult(true);

    setTimeout(() => {
      onAttack(isCorrect, currentQuestion.category);
      
      setCurrentQuestion(null);
      setSelectedAnswer(null);
      setTypedAnswer('');
      setIsAnswering(false);
      setTimeLeft(questionTime);
      setShowResult(false);
      setLastAnswerCorrect(null);
    }, 2000);
  };

  const handleDodgeClick = () => {
    if (combatState.dodgeButtonReady && combatState.enemyAttackPending) {
      onDodge(true);
    } else if (combatState.enemyAttackPending) {
      onDodge(false);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'hard': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getDifficultyBorder = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'border-green-400';
      case 'medium': return 'border-yellow-400';
      case 'hard': return 'border-red-400';
      default: return 'border-gray-400';
    }
  };

  const getModeIcon = () => {
    switch (gameMode.current) {
      case 'blitz': return <Zap className="w-5 h-5 text-yellow-400 animate-pulse" />;
      case 'bloodlust': return <Sword className="w-5 h-5 text-red-400 animate-pulse" />;
      case 'crazy': return <Skull className="w-5 h-5 text-purple-400 animate-pulse" />;
      default: return <Clock className="w-5 h-5 text-blue-400" />;
    }
  };

  const getModeColor = () => {
    switch (gameMode.current) {
      case 'blitz': return 'bg-yellow-600';
      case 'bloodlust': return 'bg-red-600';
      case 'crazy': return 'bg-purple-600';
      default: return 'bg-blue-600';
    }
  };

  return (
    <div className="bg-gradient-to-br from-red-900 via-purple-900 to-black p-3 sm:p-6 rounded-lg shadow-2xl">
      <div className="text-center mb-4 sm:mb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-white">Combat - Zone {enemy.zone}</h2>
          {getModeIcon()}
        </div>
        <p className="text-red-300 text-base sm:text-lg font-semibold">{enemy.name}</p>
        
        {/* Game Mode Info */}
        <div className="flex items-center justify-center gap-4 mt-2 text-sm">
          <span className={`px-2 py-1 rounded ${getModeColor()} text-white font-semibold`}>
            {gameMode.current.toUpperCase()} MODE
          </span>
          
          {knowledgeStreak.current > 0 && (
            <span className="text-yellow-300 flex items-center gap-1">
              🔥 {knowledgeStreak.current} Streak ({Math.round((knowledgeStreak.multiplier - 1) * 100)}% bonus)
            </span>
          )}
        </div>

        {/* Enemy Abilities */}
        {enemy.abilities.length > 0 && (
          <div className="mt-3 bg-black/30 p-3 rounded-lg">
            <h4 className="text-white font-semibold text-sm mb-2">Enemy Abilities:</h4>
            <div className="flex flex-wrap gap-2 justify-center">
              {enemy.abilities.map((ability, index) => (
                <div
                  key={index}
                  className="bg-red-900/50 px-2 py-1 rounded text-xs text-red-300 border border-red-500/30"
                  title={ability.description}
                >
                  {ability.icon} {ability.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Health Bars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
        <div className="bg-black/30 p-3 sm:p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
            <span className="text-white font-semibold text-sm sm:text-base">You</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3">
            <div 
              className="bg-gradient-to-r from-green-500 to-green-400 h-2 sm:h-3 rounded-full transition-all duration-300"
              style={{ width: `${(playerStats.hp / playerStats.maxHp) * 100}%` }}
            />
          </div>
          <p className="text-xs sm:text-sm text-gray-300 mt-1">{playerStats.hp}/{playerStats.maxHp}</p>
          <div className="flex gap-2 sm:gap-4 mt-2 text-xs sm:text-sm">
            <span className="text-orange-400 flex items-center gap-1">
              <Sword className="w-3 h-3 sm:w-4 sm:h-4" />
              {playerStats.atk}
            </span>
            <span className="text-blue-400 flex items-center gap-1">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
              {playerStats.def}
            </span>
          </div>
        </div>

        <div className="bg-black/30 p-3 sm:p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
            <span className="text-white font-semibold text-sm sm:text-base">{enemy.name}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3">
            <div 
              className="bg-gradient-to-r from-red-500 to-red-400 h-2 sm:h-3 rounded-full transition-all duration-300"
              style={{ width: `${(enemy.hp / enemy.maxHp) * 100}%` }}
            />
          </div>
          <p className="text-xs sm:text-sm text-gray-300 mt-1">{enemy.hp}/{enemy.maxHp}</p>
          <div className="flex gap-2 sm:gap-4 mt-2 text-xs sm:text-sm">
            <span className="text-orange-400 flex items-center gap-1">
              <Sword className="w-3 h-3 sm:w-4 sm:h-4" />
              {enemy.atk}
            </span>
            <span className="text-blue-400 flex items-center gap-1">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
              {enemy.def}
            </span>
          </div>
        </div>
      </div>

      {/* Combat Phase Display */}
      <div className="text-center mb-4">
        {combatState.playerTurn ? (
          <div className="bg-green-900/30 p-3 rounded-lg border border-green-500/50">
            <h3 className="text-green-400 font-bold">Your Turn - Answer the Question!</h3>
          </div>
        ) : combatState.enemyAttackPending ? (
          <div className="bg-red-900/30 p-3 rounded-lg border border-red-500/50">
            <h3 className="text-red-400 font-bold">Enemy's Turn - Prepare to Dodge!</h3>
            {combatState.dodgeWindowActive && (
              <div className="mt-2">
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div 
                    className="bg-gradient-to-r from-red-500 to-yellow-500 h-2 rounded-full transition-all duration-100"
                    style={{ width: `${(dodgeTimeLeft / (combatState.dodgeButtonReady ? 500 : 2500)) * 100}%` }}
                  />
                </div>
                <button
                  onClick={handleDodgeClick}
                  className={`w-full py-3 rounded-lg font-bold text-white transition-all duration-200 ${
                    combatState.dodgeButtonReady
                      ? 'bg-green-600 hover:bg-green-500 animate-pulse'
                      : 'bg-red-600 cursor-not-allowed'
                  }`}
                >
                  <Target className="w-5 h-5 inline mr-2" />
                  {combatState.dodgeButtonReady ? 'DODGE NOW!' : 'Wait for green...'}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-blue-900/30 p-3 rounded-lg border border-blue-500/50">
            <h3 className="text-blue-400 font-bold">Processing Turn...</h3>
          </div>
        )}
      </div>

      {/* Trivia Question Section - Only show during player turn */}
      {combatState.playerTurn && currentQuestion && (
        <div className="mb-4 sm:mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
              <h3 className="text-white font-semibold text-sm sm:text-base">Knowledge Challenge</h3>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
              <span className={`font-bold text-sm sm:text-base ${
                timeLeft <= 2 ? 'text-red-400 animate-pulse' : 'text-yellow-400'
              }`}>
                {timeLeft}s
              </span>
            </div>
          </div>

          {/* Question Card */}
          <div className={`bg-black/40 p-4 sm:p-6 rounded-lg border-2 ${getDifficultyBorder(currentQuestion.difficulty)} mb-4`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs sm:text-sm text-gray-400">{currentQuestion.category}</span>
              <div className="flex items-center gap-2">
                <span className={`text-xs sm:text-sm font-semibold ${getDifficultyColor(currentQuestion.difficulty)}`}>
                  {currentQuestion.difficulty.toUpperCase()}
                </span>
                <span className="text-xs text-purple-400">
                  {currentQuestion.type === 'multiple-choice' ? 'Multiple Choice' : 'Type Answer'}
                </span>
              </div>
            </div>
            <p className="text-white font-semibold text-sm sm:text-lg mb-4 leading-relaxed">
              {currentQuestion.question}
            </p>

            {/* Answer Input */}
            {currentQuestion.type === 'multiple-choice' ? (
              <div className="grid grid-cols-1 gap-2 sm:gap-3">
                {currentQuestion.options?.map((option, index) => {
                  let buttonClass = 'bg-gray-700 hover:bg-gray-600 text-white';
                  
                  if (showResult) {
                    if (index === currentQuestion.correctAnswer) {
                      buttonClass = 'bg-green-600 text-white';
                    } else if (index === selectedAnswer && selectedAnswer !== currentQuestion.correctAnswer) {
                      buttonClass = 'bg-red-600 text-white';
                    } else {
                      buttonClass = 'bg-gray-600 text-gray-400';
                    }
                  } else if (selectedAnswer === index) {
                    buttonClass = 'bg-blue-600 text-white';
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      disabled={isAnswering || showResult}
                      className={`p-2 sm:p-3 rounded-lg font-semibold transition-all duration-200 text-left text-xs sm:text-sm ${buttonClass} ${
                        !isAnswering && !showResult ? 'hover:scale-102' : 'cursor-not-allowed'
                      }`}
                    >
                      <span className="font-bold mr-2">{String.fromCharCode(65 + index)}.</span>
                      {option}
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="space-y-3">
                <input
                  type="text"
                  value={typedAnswer}
                  onChange={(e) => setTypedAnswer(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && !isAnswering && !showResult && handleAnswer(null)}
                  disabled={isAnswering || showResult}
                  placeholder="Type your answer here..."
                  className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none text-sm sm:text-base"
                />
                <button
                  onClick={() => handleAnswer(null)}
                  disabled={isAnswering || showResult || !typedAnswer.trim()}
                  className={`w-full py-2 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base ${
                    !isAnswering && !showResult && typedAnswer.trim()
                      ? 'bg-purple-600 text-white hover:bg-purple-500'
                      : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Submit Answer
                </button>
              </div>
            )}
          </div>

          {/* Result Feedback */}
          {showResult && (
            <div className={`text-center p-3 sm:p-4 rounded-lg ${
              lastAnswerCorrect 
                ? 'bg-green-900/50 border border-green-500' 
                : 'bg-red-900/50 border border-red-500'
            }`}>
              <p className={`font-bold text-sm sm:text-base ${
                lastAnswerCorrect ? 'text-green-400' : 'text-red-400'
              }`}>
                {lastAnswerCorrect 
                  ? '🎉 Correct! You deal damage!' 
                  : '❌ Wrong! Enemy gets their turn!'}
              </p>
              {!lastAnswerCorrect && (
                <p className="text-gray-300 text-xs sm:text-sm mt-1">
                  Correct answer: {currentQuestion.type === 'multiple-choice' 
                    ? `${String.fromCharCode(65 + (currentQuestion.correctAnswer as number))}. ${currentQuestion.options?.[currentQuestion.correctAnswer as number]}`
                    : currentQuestion.correctAnswer
                  }
                </p>
              )}
            </div>
          )}

          <div className="text-center mt-3">
            <p className="text-xs sm:text-sm text-gray-300">
              Answer correctly to <span className="text-green-400 font-semibold">deal damage</span>!
            </p>
            <p className={`text-xs font-semibold ${
              gameMode.current === 'blitz' || gameMode.current === 'bloodlust' ? 'text-yellow-400' : 'text-red-400'
            }`}>
              ⚠️ Only {questionTime} seconds to answer!
            </p>
          </div>
        </div>
      )}

      {/* Combat Log */}
      <div className="bg-black/40 rounded-lg p-3 sm:p-4 max-h-32 sm:max-h-40 overflow-y-auto">
        <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Combat Log</h4>
        <div className="space-y-1">
          {combatLog.slice(-6).map((log, index) => (
            <p key={index} className="text-xs sm:text-sm text-gray-300">
              {log}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};