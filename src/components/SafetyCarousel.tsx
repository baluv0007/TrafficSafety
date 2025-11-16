import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import safety01 from '../assets/safety01.jpg';
import safety02 from '../assets/safety02.jpg';
import safety03 from '../assets/safety03.jpeg.jpg';
import safety04 from '../assets/safety04.jpeg.jpg';
import safety05 from '../assets/saftey05.jpeg.jpg';

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
  const { isVisible, elementRef } = useScrollAnimation({ threshold: 0.1 });

  useEffect(() => {
    if (!isAutoScroll) return;

    const autoScrollInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SAFETY_IMAGES.length);
    }, 1000);

    return () => clearInterval(autoScrollInterval);
  }, [isAutoScroll]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + SAFETY_IMAGES.length) % SAFETY_IMAGES.length);
    setIsAutoScroll(false);
    setTimeout(() => setIsAutoScroll(true), 5000);
  };

  const handleNext = () => {
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
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
        Safety at Every Step
      </h2>

      <div className="flex justify-center px-4">
        <div className="relative w-full max-w-4xl group">
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-900">
            <div className="relative w-full h-[500px]">
              <div className="absolute inset-0 overflow-hidden">
                {SAFETY_IMAGES.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === currentIndex
                        ? 'opacity-100 translate-x-0'
                        : index < currentIndex
                        ? 'opacity-0 -translate-x-full'
                        : 'opacity-0 translate-x-full'
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>

              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
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
                      ? 'w-8 h-2 bg-orange-500 shadow-lg'
                      : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600 font-medium">
              {currentIndex + 1} / {SAFETY_IMAGES.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
