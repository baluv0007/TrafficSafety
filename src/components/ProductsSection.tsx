import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../data/products';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ProductsSectionProps {
  onProductClick: (productId: string) => void;
}

export default function ProductsSection({ onProductClick }: ProductsSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const section = useScrollAnimation({ threshold: 0.1 });
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const animationFrameRef = useRef<number>();
  const pauseTimeoutRef = useRef<number>();
  const duplicatedProducts = [...products, ...products, ...products];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      setIsAutoScrolling(false);

      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }

      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });

      pauseTimeoutRef.current = window.setTimeout(() => {
        setIsAutoScrolling(true);
      }, 3000);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || !section.isVisible) return;

    const singleSetWidth = (320 + 24) * products.length;
    container.scrollLeft = singleSetWidth;

    let lastTimestamp = 0;
    const scrollSpeed = 0.3;

    const autoScroll = (timestamp: number) => {
      if (!isAutoScrolling || !container) {
        animationFrameRef.current = requestAnimationFrame(autoScroll);
        return;
      }

      if (lastTimestamp) {
        const delta = timestamp - lastTimestamp;
        container.scrollLeft += scrollSpeed * (delta / 16);

        if (container.scrollLeft >= singleSetWidth * 2) {
          container.scrollLeft = singleSetWidth;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft = singleSetWidth;
        }
      }

      lastTimestamp = timestamp;
      animationFrameRef.current = requestAnimationFrame(autoScroll);
    };

    animationFrameRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, [section.isVisible, isAutoScrolling, products.length]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const singleSetWidth = (320 + 24) * products.length;

      if (container.scrollLeft >= singleSetWidth * 2) {
        container.scrollLeft = singleSetWidth;
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft = singleSetWidth;
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [products.length]);

  return (
    <div ref={section.elementRef} className="py-14 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-10 transition-all duration-1000 ${
            section.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-leading traffic management equipment designed for safety,
            reliability, and ease of use
          </p>
        </div>

        <div
          className={`relative transition-all duration-1000 ${
            section.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-orange-50 transition-all duration-300 hover:scale-110"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-orange-600" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {duplicatedProducts.map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                onClick={() => onProductClick(product.id)}
                className="flex-shrink-0 w-80 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group transform hover:scale-105"
              >
                <div className="relative w-80 h-80 overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="eager"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {product.shortDescription}
                  </p>
                  <div className="flex items-center text-orange-600 font-semibold group-hover:gap-2 transition-all">
                    Learn More
                    <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-orange-50 transition-all duration-300 hover:scale-110"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-orange-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
