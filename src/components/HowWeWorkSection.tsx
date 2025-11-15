import { FileText, Pencil, Wrench, Headphones } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface HowWeWorkSectionProps {
  onNavigate: (page: string) => void;
}

export default function HowWeWorkSection({ onNavigate }: HowWeWorkSectionProps) {
  const section = useScrollAnimation({ threshold: 0.1 });

  const steps = [
    {
      icon: FileText,
      title: 'Consultation & Requirement Analysis',
      description: 'We begin by understanding your unique traffic challenges through detailed consultations, ensuring our solutions are tailored to your city\'s needs.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Pencil,
      title: 'Our Custom Design & Engineering',
      description: 'Our team of experts designs customized traffic management systems, integrating cutting-edge technology to optimize traffic flow and safety.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Wrench,
      title: 'Our Seamless Installation',
      description: 'Our experienced installation teams work efficiently to implement systems with minimal disruption, ensuring smooth integration with existing infrastructure.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Headphones,
      title: 'Ongoing Maintenance & Support',
      description: 'We provide continuous maintenance and 24/7 support to keep systems running smoothly, ensuring long-term efficiency and performance.',
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <div ref={section.elementRef} className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            section.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At TrafficSafety, our approach to traffic management is driven by precision, innovation, and reliability. Here's a brief overview of our process:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-orange-500 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                section.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`bg-gradient-to-br ${step.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
              <button onClick={() => onNavigate('about')} className="mt-6 px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-orange-500 hover:text-orange-600 transition-colors font-semibold">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
