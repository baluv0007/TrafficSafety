import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';


const SAFETY_IMAGES = [
  { src: safety01, alt: 'Road construction safety procedures' },
  { src: safety02, alt: 'Night construction safety' },
  { src: safety03, alt: 'Road safety measures comparison' },
  { src: safety04, alt: 'Night work zone safety' },
  { src: safety05, alt: 'Night construction operations' },
];

export default function SafetyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScroll, setIsAutoScroll] = useState(true);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const { isVisible, elementRef } = useScrollAnimation({ threshold: 0.1 });

  useEffect(() => {
    if (!isAutoScroll) return;

    const autoScrollInterval = setInterval(() => {
      setDirection('right');
      setCurrentIndex((prev) => (prev + 1) % SAFETY_IMAGES.length);
    }, 1000);

    return () => clearInterval(autoScrollInterval);
  }, [isAutoScroll]);

  const handlePrevious = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + SAFETY_IMAGES.length) % SAFETY_IMAGES.length);
    setIsAutoScroll(false);
    setTimeout(() => setIsAutoScroll(true), 5000);
  };

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % SAFETY_IMAGES.length);
    setIsAutoScroll(false);
    setTimeout(() => setIsAutoScroll(true), 5000);
  };

  return (
    <div
      ref={elementRef}
      className={`w-full mb-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
        Safety at Every Step
      </h2>

      <div className="flex justify-center px-4">
        <div className="relative w-full max-w-3xl">
          <div className="relative w-full rounded-xl overflow-hidden shadow-xl bg-white border border-gray-100">
            <div className="relative w-full bg-gray-900" style={{ paddingBottom: '66.67%' }}>
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                {SAFETY_IMAGES.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === currentIndex
                        ? 'opacity-100 scale-100'
                        : index < currentIndex
                        ? 'opacity-0 scale-95'
                        : 'opacity-0 scale-95'
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>

              <button
                onClick={handlePrevious}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                {SAFETY_IMAGES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsAutoScroll(false);
                      setTimeout(() => setIsAutoScroll(true), 5000);
                    }}
                    className={`rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-2 h-2 bg-orange-500 shadow-lg'
                        : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/70 backdrop-blur-sm'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              {currentIndex + 1} / {SAFETY_IMAGES.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
