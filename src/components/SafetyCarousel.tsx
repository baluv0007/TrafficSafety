import { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import safety01 from '../assets/safety01.jpg';
import safety02 from '../assets/safety02.jpg';
import safety03 from '../assets/safety03.jpeg.jpg';
import safety04 from '../assets/safety04.jpeg.jpg';
import safety05 from '../assets/saftey05.jpeg.jpg';

const SAFETY_IMAGES = [
  { src: safety01, alt: 'Road construction safety procedures - Safety vests and helmets' },
  { src: safety02, alt: 'Night construction safety - Workers with proper lighting and equipment' },
  { src: safety03, alt: 'Road safety measures - Current unsafe practices vs recommended safety measures' },
  { src: safety04, alt: 'Night work zone safety - Lighting and visibility at construction sites' },
  { src: safety05, alt: 'Night construction operations - Safe work procedures and practices' },
];

export default function SafetyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScroll, setIsAutoScroll] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState<Set<number>>(new Set());
  const { isVisible, elementRef } = useScrollAnimation({ threshold: 0.1 });

  useEffect(() => {
    if (!isAutoScroll) return;

    const autoScrollInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SAFETY_IMAGES.length);
    }, 1000);

    return () => clearInterval(autoScrollInterval);
  }, [isAutoScroll]);

  const handleImageLoad = (index: number) => {
    setImagesLoaded((prev) => new Set([...prev, index]));
  };

  const handleMouseEnter = () => {
    setIsAutoScroll(false);
  };

  const handleMouseLeave = () => {
    setIsAutoScroll(true);
  };

  const getImagePosition = (index: number) => {
    const totalImages = SAFETY_IMAGES.length;
    let position = (index - currentIndex) % totalImages;
    if (position < 0) position += totalImages;

    if (position === 0) return 'translate-x-0';
    return `translate-x-[${position * 100}%]`;
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

      <div
        className="relative w-full overflow-hidden rounded-2xl shadow-2xl bg-white h-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full flex">
              {SAFETY_IMAGES.map((image, index) => {
                const position = (index - currentIndex + SAFETY_IMAGES.length) % SAFETY_IMAGES.length;
                const translateValue = position * 100;

                return (
                  <div
                    key={index}
                    className="absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out"
                    style={{
                      transform: `translateX(${translateValue}%)`,
                    }}
                  >
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className={`max-w-full max-h-full object-contain p-8 transition-all duration-500 ${
                          imagesLoaded.has(index) ? 'opacity-100' : 'opacity-0'
                        }`}
                        loading="lazy"
                        decoding="async"
                        onLoad={() => handleImageLoad(index)}
                        onError={() => handleImageLoad(index)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10">
            {SAFETY_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoScroll(false);
                  setTimeout(() => setIsAutoScroll(true), 5000);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-orange-600 shadow-lg'
                    : 'w-2 bg-white/60 hover:bg-white/80 backdrop-blur-sm'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl" />
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600 text-lg">
          Image {currentIndex + 1} of {SAFETY_IMAGES.length} • Auto-scrolling every second
        </p>
      </div>
    </div>
  );
}
