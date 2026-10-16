import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, AlertCircle, Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const AudioReader = ({ text, title = '', size = 'md' }) => {
  const { language, t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [availableVoices, setAvailableVoices] = useState([]);
  const [hindiVoiceAvailable, setHindiVoiceAvailable] = useState(true);
  const [showVoiceNotice, setShowVoiceNotice] = useState(false);
  const utteranceRef = useRef(null);

  // Initialize and listen to asynchronous voices loaded by the browser
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setIsSupported(true);

      const loadVoices = () => {
        const vList = window.speechSynthesis.getVoices();
        setAvailableVoices(vList);

        // Check if at least one Hindi voice is present
        const hasHi = vList.some(
          v =>
            v.lang.toLowerCase().startsWith('hi') ||
            v.name.toLowerCase().includes('hindi') ||
            v.name.includes('हिन्दी') ||
            v.name.toLowerCase().includes('kalpana') ||
            v.name.toLowerCase().includes('hemant')
        );
        setHindiVoiceAvailable(hasHi);
      };

      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  // Cancel any speech on language switch or component unmount
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    }
  }, [language]);

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const findBestVoice = (lang) => {
    const vList = availableVoices.length > 0 ? availableVoices : (typeof window !== 'undefined' ? window.speechSynthesis.getVoices() : []);
    if (!vList || vList.length === 0) return null;

    if (lang === 'hi') {
      return (
        vList.find(v => v.lang === 'hi-IN' || v.lang === 'hi_IN') ||
        vList.find(v => v.lang.toLowerCase().startsWith('hi')) ||
        vList.find(v =>
          v.name.toLowerCase().includes('hindi') ||
          v.name.includes('हिन्दी') ||
          v.name.toLowerCase().includes('kalpana') ||
          v.name.toLowerCase().includes('hemant') ||
          v.name.toLowerCase().includes('madhur') ||
          v.name.toLowerCase().includes('swara')
        ) ||
        null
      );
    } else {
      // English: prefer Indian English (en-IN), then en-US, en-GB, or any English
      return (
        vList.find(v => v.lang === 'en-IN' || v.lang === 'en_IN') ||
        vList.find(v => v.lang.toLowerCase().startsWith('en-in')) ||
        vList.find(v => v.name.toLowerCase().includes('india')) ||
        vList.find(v => v.lang.toLowerCase().startsWith('en')) ||
        null
      );
    }
  };

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

    // Cancel any ongoing speech globally to avoid overlap
    window.speechSynthesis.cancel();

    // Pick best voice for the currently active language
    const bestVoice = findBestVoice(language);

    // If user requested Hindi, but no Hindi voice exists in this OS/browser
    if (language === 'hi' && !bestVoice) {
      setShowVoiceNotice(true);
      setTimeout(() => setShowVoiceNotice(false), 6000);
      return;
    }

    const contentToSpeak = title ? `${title}. ${text}` : text;
    const utterance = new SpeechSynthesisUtterance(contentToSpeak);
    utteranceRef.current = utterance;

    if (bestVoice) {
      utterance.voice = bestVoice;
      utterance.lang = bestVoice.lang;
    } else {
      utterance.lang = language === 'hi' ? 'hi-IN' : 'en-IN';
    }

    // Slightly slower rate (0.88x) for clear comprehension by rural listeners
    utterance.rate = 0.88;
    utterance.pitch = 1.0;

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = (err) => {
      console.warn('SpeechSynthesis error:', err);
      setIsPlaying(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  if (!isSupported) return null;

  const isSmall = size === 'sm';

  return (
    <div className="relative inline-block">
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
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-brand-500"></span>
          </>
        )}
      </button>

      {/* Helpful notification if Hindi voice is not installed on OS */}
      {showVoiceNotice && (
        <div className="absolute left-0 top-full mt-2 z-50 w-72 p-3 bg-slate-900 text-white text-xs rounded-xl shadow-xl border border-slate-700 animate-fadeIn">
          <div className="flex items-start gap-2">
            <Info className="w-4 h-4 text-marigold-400 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-semibold text-marigold-300">
                {language === 'hi' ? 'हिन्दी आवाज़ अनुपलब्ध' : 'Hindi Voice Unavailable'}
              </p>
              <p className="text-slate-300 leading-relaxed">
                {language === 'hi'
                  ? 'आपके ब्राउज़र या डिवाइस में हिन्दी वॉइस पैक इंस्टॉल नहीं है। कृपया विंडोज़ सेटिंग्स में "Hindi Speech" जोड़ें, या "अ+" बटन से अक्षरों का आकार बड़ा करें।'
                  : 'A Hindi speech synthesizer voice is not installed on your browser/OS. Please enable Hindi speech in Windows Settings, or use the "A+" text size controls.'}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
