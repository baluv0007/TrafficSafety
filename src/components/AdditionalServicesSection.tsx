import { Building, Calendar, Compass, Wrench, AlertTriangle, Package } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AdditionalServicesSectionProps {
  onNavigate?: (page: string) => void;
}

export default function AdditionalServicesSection({ onNavigate }: AdditionalServicesSectionProps) {
  const section = useScrollAnimation({ threshold: 0.1 });

  const handleCardClick = () => {
    if (onNavigate) {
      onNavigate('about');
    }
  };

  const services = [
    {
      icon: Building,
      title: 'Urban & Rural Plus High Speed',
      description: 'We can provide comprehensive traffic management services on highways and rural roads from basic works to multiphased complex traffic schemes in traffic sensitive areas.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Calendar,
      title: 'Event Management & Signage',
      description: 'In collaboration with the Last Mile, we provide a one stop solution for all your events needs from the initial route planning through to design and review and final implementation.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Compass,
      title: 'Design & Consultancy',
      description: 'Complete design and planning support service through site surveys, stakeholder liaison and using Cone software to produce rigorous CAD layouts for custom temporary traffic management.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Wrench,
      title: 'Planned Works',
      description: 'We offer complete surveying, design, planning, and deployment solutions for planned works. We have dedicated planning, drawing and operational teams that will support you every step of the way.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: AlertTriangle,
      title: 'Emergency Works',
      description: 'We can help with any emergency TM issue 24/7, 365 days a year. Your job will be desktop surveyed, an ETA given and we will be with you, ready to install site within 2 hours.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Package,
      title: 'Equipment Hire',
      description: 'We offer a range of hired services to extend and complement our traffic management solutions. In addition to the services you will find on other pages, we can dry hire of all our products.',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <div ref={section.elementRef} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            section.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Service Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From urban planning to emergency response, we deliver complete traffic management solutions tailored to every scenario
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={handleCardClick}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                section.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`bg-gradient-to-br ${service.color} p-8 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative">
                  <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick();
                  }}
                  className="text-orange-600 font-semibold hover:text-orange-700 transition-colors flex items-center gap-2 group-hover:gap-3 group-hover:translate-x-1"
                >
                  Learn More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
