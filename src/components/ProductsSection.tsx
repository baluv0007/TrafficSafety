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

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      const newScrollLeft =
        scrollRef.current.scrollLeft +
        (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    if (!section.isVisible || !isAutoScrolling) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const cardWidth = 320 + 24;

        if (scrollLeft + clientWidth >= scrollWidth - 50) {
          scrollRef.current.scrollTo({
            left: 0,
            behavior: 'smooth',
          });
        } else {
          scrollRef.current.scrollBy({
            left: cardWidth,
            behavior: 'smooth',
          });
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [section.isVisible, isAutoScrolling]);

  return (
    <div ref={section.elementRef} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            section.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
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
            onMouseEnter={() => setIsAutoScrolling(false)}
            onMouseLeave={() => setIsAutoScrolling(true)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-orange-50 transition-all duration-300 hover:scale-110"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-orange-600" />
          </button>

          <div
            ref={scrollRef}
            onMouseEnter={() => setIsAutoScrolling(false)}
            onMouseLeave={() => setIsAutoScrolling(true)}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product, index) => (
              <div
                key={product.id}
                onClick={() => onProductClick(product.id)}
                className="flex-shrink-0 w-80 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group transform hover:scale-105"
                style={{
                  animation: section.isVisible ? `slideIn 0.6s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
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
            onMouseEnter={() => setIsAutoScrolling(false)}
            onMouseLeave={() => setIsAutoScrolling(true)}
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
