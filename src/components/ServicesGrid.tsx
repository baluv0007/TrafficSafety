import { ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { services } from '../data/services';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ServicesGridProps {
  onServiceClick: (serviceId: string) => void;
  onNavigate?: (page: string) => void;
}

export default function ServicesGrid({ onServiceClick, onNavigate }: ServicesGridProps) {
  const section = useScrollAnimation({ threshold: 0.1 });
  const cta = useScrollAnimation({ threshold: 0.2 });
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  return (
    <div ref={section.elementRef} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            section.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive traffic management solutions tailored to your specific
            needs and project requirements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => onServiceClick(service.id)}
              className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer group transform hover:scale-105 ${
                section.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: section.isVisible ? `${index * 100}ms` : '0ms'
              }}
            >
              <div className="relative w-full bg-gradient-to-br from-gray-100 to-gray-200" style={{ paddingBottom: '75%' }}>
                {!imageErrors[service.id] ? (
                  <img
                    src={service.images[0]}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="eager"
                    onError={() => setImageErrors(prev => ({ ...prev, [service.id]: true }))}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-orange-100 flex items-center justify-center">
                    <span className="text-orange-800 font-semibold text-center px-4">{service.title}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {service.shortDescription}
                </p>
                <div className="flex items-center text-orange-600 font-semibold group-hover:gap-2 transition-all">
                  Learn More
                  <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {onNavigate && (
          <div
            ref={cta.elementRef}
            className={`max-w-4xl mx-auto mt-16 bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-12 text-center border-2 border-orange-200 transition-all duration-1000 ${
              cta.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              If you don't find your needed service in the above list, please contact us for customized solutions
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-orange-600 text-white rounded-full font-semibold text-lg hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Us
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
