import React, { useState, useEffect } from 'react';
import { Enemy } from '../types/game';
import { Sword, Shield, Heart, Brain, Clock, Zap, Skull, Flame } from 'lucide-react';
import { TriviaQuestion, getQuestionByZone, checkAnswer } from '../utils/triviaQuestions';

interface CombatProps {
  enemy: Enemy;
  playerStats: {
    hp: number;
    maxHp: number;
    atk: number;
    def: number;
  };
  onAttack: (hit: boolean, category?: string) => void;
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
  onAttack, 
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

  const questionTime = (gameMode.current === 'blitz' || gameMode.current === 'bloodlust') ? 3 : 5;

  useEffect(() => {
    const question = getQuestionByZone(enemy.zone);
    setCurrentQuestion(question);
    setSelectedAnswer(null);
    setTypedAnswer('');
    setTimeLeft(questionTime);
    setShowResult(false);
    setLastAnswerCorrect(null);
  }, [enemy, questionTime]);

  useEffect(() => {
    if (!currentQuestion || isAnswering || showResult) return;

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
  }, [currentQuestion, isAnswering, showResult]);

  const handleAnswer = (answerIndex: number | null) => {
    if (isAnswering || !currentQuestion) return;

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
      
      const newQuestion = getQuestionByZone(enemy.zone);
      setCurrentQuestion(newQuestion);
      setSelectedAnswer(null);
      setTypedAnswer('');
      setIsAnswering(false);
      setTimeLeft(questionTime);
      setShowResult(false);
      setLastAnswerCorrect(null);
    }, 2000);
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
      case 'easy': return 'border-green-400/50';
      case 'medium': return 'border-yellow-400/50';
      case 'hard': return 'border-red-400/50';
      default: return 'border-gray-400/50';
    }
  };

  const getModeIcon = () => {
    switch (gameMode.current) {
      case 'blitz': return <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 animate-pulse" />;
      case 'bloodlust': return <Sword className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 animate-pulse" />;
      case 'crazy': return <Skull className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 animate-pulse" />;
      default: return <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />;
    }
  };

  const getModeColor = () => {
    switch (gameMode.current) {
      case 'blitz': return 'bg-yellow-600/80';
      case 'bloodlust': return 'bg-red-600/80';
      case 'crazy': return 'bg-purple-600/80';
      default: return 'bg-blue-600/80';
    }
  };

  if (!currentQuestion) {
    return (
      <div className="bg-gradient-to-br from-red-900/80 via-purple-900/80 to-black/80 backdrop-blur-lg p-4 sm:p-6 rounded-2xl shadow-2xl border border-red-500/30">
        <div className="text-center py-8">
          <div className="animate-spin inline-block w-8 h-8 border-4 border-purple-400 border-t-transparent rounded-full mb-4"></div>
          <p className="text-white text-lg">Loading question...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-red-900/80 via-purple-900/80 to-black/80 backdrop-blur-lg p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl border border-red-500/30">
      <div className="text-center mb-4 sm:mb-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">Combat - Zone {enemy.zone}</h2>
          {getModeIcon()}
        </div>
        <p className="text-red-300 text-base sm:text-lg lg:text-xl font-semibold">{enemy.name}</p>
        
        {/* Game Mode Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-4 text-sm">
          <span className={`px-3 py-1 rounded-full ${getModeColor()} backdrop-blur-sm text-white font-semibold`}>
            {gameMode.current.toUpperCase()} MODE
          </span>
          
          {knowledgeStreak.current > 0 && (
            <span className="text-yellow-300 flex items-center gap-2 px-3 py-1 bg-yellow-900/30 rounded-full backdrop-blur-sm">
              🔥 {knowledgeStreak.current} Streak ({Math.round((knowledgeStreak.multiplier - 1) * 100)}% bonus)
            </span>
          )}
        </div>
      </div>

      {/* Health Bars */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6">
        <div className="bg-black/40 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-green-500/30">
          <div className="flex items-center gap-2 mb-3">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
            <span className="text-white font-semibold text-sm sm:text-base">You</span>
          </div>
          <div className="w-full bg-gray-700/50 rounded-full h-3 sm:h-4 mb-2">
            <div 
              className="bg-gradient-to-r from-green-500 to-green-400 h-3 sm:h-4 rounded-full transition-all duration-300"
              style={{ width: `${(playerStats.hp / playerStats.maxHp) * 100}%` }}
            />
          </div>
          <p className="text-xs sm:text-sm text-gray-300 mb-3">{playerStats.hp}/{playerStats.maxHp}</p>
          <div className="grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
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

        <div className="bg-black/40 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-red-500/30">
          <div className="flex items-center gap-2 mb-3">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
            <span className="text-white font-semibold text-sm sm:text-base">{enemy.name}</span>
          </div>
          <div className="w-full bg-gray-700/50 rounded-full h-3 sm:h-4 mb-2">
            <div 
              className="bg-gradient-to-r from-red-500 to-red-400 h-3 sm:h-4 rounded-full transition-all duration-300"
              style={{ width: `${(enemy.hp / enemy.maxHp) * 100}%` }}
            />
          </div>
          <p className="text-xs sm:text-sm text-gray-300 mb-3">{enemy.hp}/{enemy.maxHp}</p>
          <div className="grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
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

      {/* Trivia Question Section */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-4">
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
        <div className={`bg-black/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border-2 ${getDifficultyBorder(currentQuestion.difficulty)} mb-4`}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
            <span className="text-xs sm:text-sm text-gray-400">{currentQuestion.category}</span>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
              <span className={`text-xs sm:text-sm font-semibold ${getDifficultyColor(currentQuestion.difficulty)}`}>
                {currentQuestion.difficulty.toUpperCase()}
              </span>
              <span className="text-xs text-purple-400">
                {currentQuestion.type === 'multiple-choice' ? 'Multiple Choice' : 'Type Answer'}
              </span>
            </div>
          </div>
          <p className="text-white font-semibold text-sm sm:text-lg lg:text-xl mb-6 leading-relaxed">
            {currentQuestion.question}
          </p>

          {/* Answer Input */}
          {currentQuestion.type === 'multiple-choice' ? (
            <div className="grid grid-cols-1 gap-3">
              {currentQuestion.options?.map((option, index) => {
                let buttonClass = 'bg-gray-700/50 hover:bg-gray-600/50 text-white backdrop-blur-sm';
                
                if (showResult) {
                  if (index === currentQuestion.correctAnswer) {
                    buttonClass = 'bg-green-600/80 text-white backdrop-blur-sm';
                  } else if (index === selectedAnswer && selectedAnswer !== currentQuestion.correctAnswer) {
                    buttonClass = 'bg-red-600/80 text-white backdrop-blur-sm';
                  } else {
                    buttonClass = 'bg-gray-600/50 text-gray-400 backdrop-blur-sm';
                  }
                } else if (selectedAnswer === index) {
                  buttonClass = 'bg-blue-600/80 text-white backdrop-blur-sm';
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={isAnswering || showResult}
                    className={`p-3 sm:p-4 rounded-lg font-semibold transition-all duration-200 text-left text-xs sm:text-sm lg:text-base ${buttonClass} ${
                      !isAnswering && !showResult ? 'hover:scale-102 border border-white/10' : 'cursor-not-allowed'
                    }`}
                  >
                    <span className="font-bold mr-2">{String.fromCharCode(65 + index)}.</span>
                    {option}
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="space-y-4">
              <input
                type="text"
                value={typedAnswer}
                onChange={(e) => setTypedAnswer(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !isAnswering && !showResult && handleAnswer(null)}
                disabled={isAnswering || showResult}
                placeholder="Type your answer here..."
                className="w-full p-3 sm:p-4 bg-gray-800/50 backdrop-blur-sm text-white rounded-lg border border-gray-600/50 focus:border-purple-500 focus:outline-none text-sm sm:text-base"
              />
              <button
                onClick={() => handleAnswer(null)}
                disabled={isAnswering || showResult || !typedAnswer.trim()}
                className={`w-full py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base ${
                  !isAnswering && !showResult && typedAnswer.trim()
                    ? 'bg-purple-600/80 backdrop-blur-sm text-white hover:bg-purple-500/80 border border-purple-500/30'
                    : 'bg-gray-600/50 backdrop-blur-sm text-gray-400 cursor-not-allowed border border-gray-600/30'
                }`}
              >
                Submit Answer
              </button>
            </div>
          )}
        </div>

        {/* Result Feedback */}
        {showResult && (
          <div className={`text-center p-4 sm:p-6 rounded-xl backdrop-blur-sm ${
            lastAnswerCorrect 
              ? 'bg-green-900/60 border border-green-500/50' 
              : 'bg-red-900/60 border border-red-500/50'
          }`}>
            <p className={`font-bold text-sm sm:text-base lg:text-lg ${
              lastAnswerCorrect ? 'text-green-400' : 'text-red-400'
            }`}>
              {lastAnswerCorrect 
                ? '🎉 Correct! You deal damage!' 
                : '❌ Wrong! The enemy attacks you!'}
            </p>
            {!lastAnswerCorrect && (
              <p className="text-gray-300 text-xs sm:text-sm mt-2">
                Correct answer: {currentQuestion.type === 'multiple-choice' 
                  ? `${String.fromCharCode(65 + (currentQuestion.correctAnswer as number))}. ${currentQuestion.options?.[currentQuestion.correctAnswer as number]}`
                  : currentQuestion.correctAnswer
                }
              </p>
            )}
          </div>
        )}

        <div className="text-center mt-4">
          <p className="text-xs sm:text-sm text-gray-300 mb-2">
            Answer correctly to <span className="text-green-400 font-semibold">deal damage</span>!
          </p>
          <p className={`text-xs font-semibold ${
            gameMode.current === 'blitz' || gameMode.current === 'bloodlust' ? 'text-yellow-400' : 'text-red-400'
          }`}>
            ⚠️ Only {questionTime} seconds to answer!
          </p>
        </div>
      </div>

      {/* Combat Log */}
      <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 max-h-32 sm:max-h-40 overflow-y-auto border border-white/10">
        <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">Combat Log</h4>
        <div className="space-y-2">
          {combatLog.slice(-6).map((log, index) => (
            <p key={index} className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {log}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};