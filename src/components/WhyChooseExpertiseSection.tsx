import { Rocket, Building2, MapPin, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function WhyChooseExpertiseSection() {
  const section = useScrollAnimation({ threshold: 0.1 });

  const highlights = [
    {
      icon: Rocket,
      title: '17+ Years of Industry Leadership',
      description: 'Proven track record in traffic management solutions.'
    },
    {
      icon: Building2,
      title: 'Innovative ITS Solutions',
      description: 'Advanced technologies for reducing congestion and enhancing urban mobility.'
    },
    {
      icon: MapPin,
      title: 'Nationwide Operations',
      description: 'Presence in major cities with extensive project experience.'
    },
    {
      icon: Award,
      title: 'ISO 9001-2008 Certified',
      description: 'Commitment to quality and continuous improvement.'
    }
  ];

  return (
    <div ref={section.elementRef} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${
              section.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <p className="text-orange-600 font-bold text-sm uppercase tracking-wider mb-4">
              Why Choose TrafficSafety
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Unmatched Expertise, Innovation, and Reliability in Traffic Management Solutions
            </h2>
          </div>

          <div
            className={`grid sm:grid-cols-2 gap-6 transition-all duration-1000 ${
              section.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
