import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import safety01 from '../assets/safety01.jpg';
import safety02 from '../assets/safety02.jpg';
import safety03 from '../assets/safety03.jpeg.jpg';
import safety04 from '../assets/safety04.jpeg.jpg';
import safety05 from '../assets/saftey05.jpeg.jpg';
import safety01Copy from '../assets/safety01 copy.jpg';
import safety02Copy from '../assets/safety02 copy.jpg';
import safety03Copy from '../assets/safety03.jpeg copy.jpg';
import safety04Copy from '../assets/safety04.jpeg copy.jpg';
import safety05Copy from '../assets/saftey05.jpeg copy.jpg';

const SAFETY_IMAGES = [
  { src: safety01, alt: 'Road construction safety procedures' },
  { src: safety02, alt: 'Night construction safety' },
  { src: safety03, alt: 'Road safety measures comparison' },
  { src: safety04, alt: 'Night work zone safety' },
  { src: safety05, alt: 'Night construction operations' },
  { src: safety01Copy, alt: 'Road construction safety procedures' },
  { src: safety02Copy, alt: 'Night construction safety' },
  { src: safety03Copy, alt: 'Road safety measures comparison' },
  { src: safety04Copy, alt: 'Night work zone safety' },
  { src: safety05Copy, alt: 'Night construction operations' },
];

export default function SafetyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScroll, setIsAutoScroll] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const { isVisible, elementRef } = useScrollAnimation({ threshold: 0.1 });
  const autoScrollRef = useRef<number>();

  useEffect(() => {
    if (!isAutoScroll || isPaused) {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
      return;
    }

    autoScrollRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SAFETY_IMAGES.length);
    }, 1000);

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isAutoScroll, isPaused]);

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

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
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
        <div
          className="relative w-full max-w-5xl group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white border-2 border-gray-200">
            <div className="relative w-full" style={{ height: '450px' }}>
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-white">
                {SAFETY_IMAGES.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out flex items-center justify-center ${
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
                      className="max-w-full max-h-full w-auto h-auto object-contain"
                      loading="eager"
                      decoding="async"
                      style={{
                        maxHeight: '100%',
                        maxWidth: '100%',
                        width: 'auto',
                        height: 'auto'
                      }}
                    />
                  </div>
                ))}
              </div>

              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white text-gray-800 rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100 border border-gray-200"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white text-gray-800 rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100 border border-gray-200"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10 px-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg flex gap-2">
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
                        ? 'w-8 h-2 bg-orange-500 shadow-md'
                        : 'w-2 h-2 bg-gray-400 hover:bg-gray-600'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
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
