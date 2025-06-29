import React from 'react';
import { Settings, X, Eye, Moon, Sun, Globe, Volume2, VolumeX, Bell, BellOff } from 'lucide-react';
import { GameSettings as SettingsType } from '../types/game';

interface GameSettingsProps {
  settings: SettingsType;
  onUpdateSettings: (settings: Partial<SettingsType>) => void;
  onClose: () => void;
}

export const GameSettings: React.FC<GameSettingsProps> = ({
  settings,
  onUpdateSettings,
  onClose
}) => {
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'zh', name: '中文', flag: '🇨🇳' }
  ];

  const toggleSetting = (key: keyof SettingsType) => {
    onUpdateSettings({ [key]: !settings[key] });
  };

  const updateLanguage = (language: SettingsType['language']) => {
    onUpdateSettings({ language });
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-gray-900 to-slate-900 p-4 sm:p-6 rounded-lg border border-gray-500/50 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <Settings className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
            <div>
              <h2 className="text-white font-bold text-lg sm:text-xl">Game Settings</h2>
              <p className="text-gray-300 text-sm">Customize your game experience</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Visual Settings */}
          <div className="bg-black/30 p-4 rounded-lg border border-gray-600/50">
            <h3 className="text-white font-bold text-lg mb-4">Visual Settings</h3>
            
            <div className="space-y-4">
              {/* Colorblind Mode */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-white font-semibold">Colorblind Mode</p>
                    <p className="text-gray-400 text-sm">Enhanced contrast and patterns</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleSetting('colorblindMode')}
                  className={`w-12 h-6 rounded-full transition-all ${
                    settings.colorblindMode ? 'bg-green-500' : 'bg-gray-600'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.colorblindMode ? 'translate-x-6' : 'translate-x-0.5'
                  }`} />
                </button>
              </div>

              {/* Dark Mode */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {settings.darkMode ? (
                    <Moon className="w-5 h-5 text-indigo-400" />
                  ) : (
                    <Sun className="w-5 h-5 text-yellow-400" />
                  )}
                  <div>
                    <p className="text-white font-semibold">Dark Mode</p>
                    <p className="text-gray-400 text-sm">Toggle dark/light theme</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleSetting('darkMode')}
                  className={`w-12 h-6 rounded-full transition-all ${
                    settings.darkMode ? 'bg-indigo-500' : 'bg-yellow-500'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.darkMode ? 'translate-x-6' : 'translate-x-0.5'
                  }`} />
                </button>
              </div>
            </div>
          </div>

          {/* Audio Settings */}
          <div className="bg-black/30 p-4 rounded-lg border border-gray-600/50">
            <h3 className="text-white font-bold text-lg mb-4">Audio Settings</h3>
            
            <div className="space-y-4">
              {/* Sound Effects */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {settings.soundEnabled ? (
                    <Volume2 className="w-5 h-5 text-green-400" />
                  ) : (
                    <VolumeX className="w-5 h-5 text-red-400" />
                  )}
                  <div>
                    <p className="text-white font-semibold">Sound Effects</p>
                    <p className="text-gray-400 text-sm">Game sound effects</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleSetting('soundEnabled')}
                  className={`w-12 h-6 rounded-full transition-all ${
                    settings.soundEnabled ? 'bg-green-500' : 'bg-gray-600'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.soundEnabled ? 'translate-x-6' : 'translate-x-0.5'
                  }`} />
                </button>
              </div>

              {/* Background Music */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {settings.musicEnabled ? (
                    <Volume2 className="w-5 h-5 text-purple-400" />
                  ) : (
                    <VolumeX className="w-5 h-5 text-red-400" />
                  )}
                  <div>
                    <p className="text-white font-semibold">Background Music</p>
                    <p className="text-gray-400 text-sm">Ambient game music</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleSetting('musicEnabled')}
                  className={`w-12 h-6 rounded-full transition-all ${
                    settings.musicEnabled ? 'bg-purple-500' : 'bg-gray-600'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.musicEnabled ? 'translate-x-6' : 'translate-x-0.5'
                  }`} />
                </button>
              </div>

              {/* Notifications */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {settings.notifications ? (
                    <Bell className="w-5 h-5 text-blue-400" />
                  ) : (
                    <BellOff className="w-5 h-5 text-red-400" />
                  )}
                  <div>
                    <p className="text-white font-semibold">Notifications</p>
                    <p className="text-gray-400 text-sm">Game notifications</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleSetting('notifications')}
                  className={`w-12 h-6 rounded-full transition-all ${
                    settings.notifications ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.notifications ? 'translate-x-6' : 'translate-x-0.5'
                  }`} />
                </button>
              </div>
            </div>
          </div>

          {/* Language Settings */}
          <div className="bg-black/30 p-4 rounded-lg border border-gray-600/50">
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-green-400" />
              Language
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => updateLanguage(lang.code as SettingsType['language'])}
                  className={`p-3 rounded-lg border-2 transition-all text-left ${
                    settings.language === lang.code
                      ? 'border-green-500 bg-green-900/30'
                      : 'border-gray-600 bg-gray-800/30 hover:border-gray-500'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{lang.flag}</span>
                    <div>
                      <p className="text-white font-semibold text-sm">{lang.name}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            
            <div className="mt-3 p-3 bg-yellow-900/20 rounded-lg border border-yellow-500/30">
              <p className="text-yellow-300 text-sm">
                🚧 Language support is coming soon! Currently only English is fully supported.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-xs text-gray-500">
          <p>Settings are automatically saved to your device.</p>
        </div>
      </div>
    </div>
  );
};