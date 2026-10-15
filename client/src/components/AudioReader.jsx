import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const AudioReader = ({ text, title = '', size = 'md' }) => {
  const { language, t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setIsSupported(true);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleTogglePlay = (e) => {
    e.stopPropagation();

    if (!isSupported) {
      alert(language === 'hi' ? 'आपके ब्राउज़र में आवाज़ की सुविधा उपलब्ध नहीं है।' : 'Text-to-speech is not supported on this device/browser.');
      return;
    }

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }

    window.speechSynthesis.cancel(); // Reset any existing speech

    const contentToSpeak = title ? `${title}. ${text}` : text;
    const utterance = new SpeechSynthesisUtterance(contentToSpeak);

    // Pick best voice for language
    utterance.lang = language === 'hi' ? 'hi-IN' : 'en-IN';
    utterance.rate = 0.9; // Slightly slower, very clear for rural listeners
    utterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const targetLang = language === 'hi' ? 'hi' : 'en';
    const matchedVoice = voices.find(v => v.lang.startsWith(targetLang));
    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  };

  if (!isSupported) return null;

  const isSmall = size === 'sm';

  return (
    <button
      onClick={handleTogglePlay}
      type="button"
      className={`inline-flex items-center gap-1.5 font-medium rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 ${
        isPlaying
          ? 'bg-brand-600 text-white animate-pulse shadow-md ring-2 ring-brand-300'
          : 'bg-brand-50 text-brand-800 hover:bg-brand-100 border border-brand-200'
      } ${
        isSmall
          ? 'px-2.5 py-1 text-xs min-h-[36px]'
          : 'px-4 py-2 text-sm min-h-[44px]'
      }`}
      aria-label={isPlaying ? t.audioStop : t.audioListen}
      title={isPlaying ? t.audioStop : t.audioListen}
    >
      {isPlaying ? (
        <>
          <VolumeX className={isSmall ? "w-3.5 h-3.5 text-white" : "w-4 h-4 text-white"} />
          <span>{t.audioStop}</span>
        </>
      ) : (
        <>
          <Volume2 className={isSmall ? "w-3.5 h-3.5 text-brand-700" : "w-4 h-4 text-brand-700"} />
          <span>{t.audioListen}</span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-brand-500 animate-ping"></span>
        </>
      )}
    </button>
  );
};
