import React from 'react';
import { Coins, Gem, Sword, Shield, Heart, Brain, Package, Pickaxe, Star, Sparkles, Crown, Trophy } from 'lucide-react';

export const FloatingIcons: React.FC = () => {
  const icons = [
    { Icon: Coins, color: 'text-yellow-400', delay: '0s', position: { top: '10%', left: '5%' }, size: 'w-8 h-8' },
    { Icon: Gem, color: 'text-purple-400', delay: '1s', position: { top: '20%', right: '10%' }, size: 'w-6 h-6' },
    { Icon: Sword, color: 'text-orange-400', delay: '2s', position: { top: '60%', left: '8%' }, size: 'w-10 h-10' },
    { Icon: Shield, color: 'text-blue-400', delay: '3s', position: { bottom: '15%', right: '5%' }, size: 'w-7 h-7' },
    { Icon: Heart, color: 'text-red-400', delay: '4s', position: { top: '40%', left: '15%' }, size: 'w-6 h-6' },
    { Icon: Brain, color: 'text-indigo-400', delay: '5s', position: { top: '70%', right: '15%' }, size: 'w-8 h-8' },
    { Icon: Package, color: 'text-green-400', delay: '6s', position: { bottom: '40%', left: '3%' }, size: 'w-9 h-9' },
    { Icon: Pickaxe, color: 'text-amber-400', delay: '7s', position: { top: '80%', right: '8%' }, size: 'w-7 h-7' },
    { Icon: Star, color: 'text-yellow-300', delay: '8s', position: { top: '30%', right: '25%' }, size: 'w-5 h-5' },
    { Icon: Sparkles, color: 'text-pink-400', delay: '9s', position: { bottom: '60%', left: '20%' }, size: 'w-6 h-6' },
    { Icon: Crown, color: 'text-yellow-500', delay: '10s', position: { top: '50%', right: '3%' }, size: 'w-8 h-8' },
    { Icon: Trophy, color: 'text-amber-500', delay: '11s', position: { bottom: '25%', left: '12%' }, size: 'w-7 h-7' },
  ];

  const magicalElements = [
    { emoji: '✨', position: { top: '15%', left: '25%' }, delay: '0s' },
    { emoji: '🌟', position: { top: '75%', right: '20%' }, delay: '2s' },
    { emoji: '💫', position: { bottom: '30%', right: '30%' }, delay: '4s' },
    { emoji: '⭐', position: { top: '45%', left: '5%' }, delay: '6s' },
    { emoji: '🔮', position: { bottom: '10%', right: '12%' }, delay: '8s' },
    { emoji: '🎭', position: { top: '25%', left: '35%' }, delay: '10s' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Icons */}
      {icons.map(({ Icon, color, delay, position, size }, index) => (
        <div
          key={index}
          className={`absolute ${color} opacity-15 hover:opacity-25 transition-opacity duration-500`}
          style={{
            ...position,
            animation: `floatMagical 8s ease-in-out infinite`,
            animationDelay: delay,
          }}
        >
          <Icon className={`${size} drop-shadow-lg`} />
        </div>
      ))}
      
      {/* Magical Elements */}
      {magicalElements.map(({ emoji, position, delay }, index) => (
        <div
          key={`magic-${index}`}
          className="absolute text-2xl opacity-20 hover:opacity-40 transition-opacity duration-500"
          style={{
            ...position,
            animation: `sparkle 6s ease-in-out infinite`,
            animationDelay: delay,
          }}
        >
          {emoji}
        </div>
      ))}
      
      {/* Floating Particles */}
      {[...Array(15)].map((_, index) => (
        <div
          key={`particle-${index}`}
          className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `particle 12s linear infinite`,
            animationDelay: `${Math.random() * 12}s`,
          }}
        />
      ))}
      
      {/* Chess Knight for fun */}
      <div
        className="absolute text-slate-400 opacity-10 hover:opacity-20 transition-opacity duration-500"
        style={{
          top: '35%',
          right: '18%',
          animation: 'floatMagical 10s ease-in-out infinite',
          animationDelay: '3s',
        }}
      >
        <span className="text-6xl drop-shadow-lg">♞</span>
      </div>
      
      <style jsx>{`
        @keyframes floatMagical {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
          }
          25% {
            transform: translateY(-30px) translateX(10px) rotate(5deg) scale(1.1);
          }
          50% {
            transform: translateY(-15px) translateX(-5px) rotate(-3deg) scale(0.95);
          }
          75% {
            transform: translateY(-25px) translateX(15px) rotate(7deg) scale(1.05);
          }
        }
        
        @keyframes sparkle {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.2;
          }
          25% {
            transform: scale(1.2) rotate(90deg);
            opacity: 0.4;
          }
          50% {
            transform: scale(0.8) rotate(180deg);
            opacity: 0.6;
          }
          75% {
            transform: scale(1.1) rotate(270deg);
            opacity: 0.3;
          }
        }
        
        @keyframes particle {
          0% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: scale(1);
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};