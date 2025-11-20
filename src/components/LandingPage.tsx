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
    'https://image2url.com/images/1763656932023-8fd8e391-a824-480e-a050-e301c726d31f.jpg',
    'https://image2url.com/images/1763657145296-d50475a3-d307-4563-ac7c-fb3e5e651b38.jpg',
    'https://image2url.com/images/1763657126087-f8231c7c-b7a4-4198-97d9-08100fccf12b.jpg',
    'https://image2url.com/images/1763657109308-69256184-983a-4082-9169-8cdd4d2bfac2.jpg',
    'https://image2url.com/images/1763657069958-6aa906dc-1f57-4600-ad9c-00ac8e12b730.jpg',
    'https://image2url.com/images/1763657051356-7319598d-3622-4e2c-92f8-80295b552577.jpg',
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
    backgroundImages.forEach((src, index) => {
      const img = new Image();
      img.fetchPriority = index < 2 ? 'high' : 'low';
      img.loading = index < 2 ? 'eager' : 'lazy';
      img.decoding = 'async';
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
