import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  const phrases = [
    'Your Safety Our Responsibility',
    'Leaders in Traffic Management',
    'Modern Traffic Solutions',
  ];

  const backgroundImages = [
    'https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg',
    'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
    'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg',
    'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg',
    'https://images.pexels.com/photos/279984/pexels-photo-279984.jpeg',
    'https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg',
    'https://images.pexels.com/photos/1249610/pexels-photo-1249610.jpeg',
    'https://images.pexels.com/photos/532803/pexels-photo-532803.jpeg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    backgroundImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 transition-all duration-1000"
        style={{ backgroundImage: `url('${backgroundImages[currentBgIndex]}')` }}
      ></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div
            className={`transition-all duration-500 transform ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-4'
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
              {phrases[currentPhraseIndex]}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
              Providing comprehensive traffic management solutions for construction,
              events, and emergency situations
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <button
              onClick={() => onNavigate('about')}
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-orange-600 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
            >
              About Us
              <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-orange-600 text-white rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
            >
              Contact Us
              <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
