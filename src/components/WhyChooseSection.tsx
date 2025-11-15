import { Lightbulb, Award, Shield, Rocket } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function WhyChooseSection() {
  const section = useScrollAnimation({ threshold: 0.1 });
  const cards = useScrollAnimation({ threshold: 0.1 });

  const features = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We are committed to continuous innovation, integrating the latest technologies to develop cutting-edge traffic management solutions that meet the evolving needs of modern cities.'
    },
    {
      icon: Award,
      title: 'Quality and Reliability',
      description: 'Our dedication to quality and reliability ensures that our systems and services consistently meet the highest standards, providing safe and efficient traffic solutions.'
    },
    {
      icon: Shield,
      title: 'Safety and Accident Reduction',
      description: 'We prioritize safety in all our projects, designing systems and technologies aimed at reducing accidents and enhancing overall road safety through intelligent traffic management solutions.'
    },
    {
      icon: Rocket,
      title: 'Expertise and Experience',
      description: 'Our extensive experience in traffic management makes us a trusted partner in keeping the city\'s traffic flowing smoothly.'
    }
  ];

  return (
    <div ref={section.elementRef} className="py-14 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-12 transition-all duration-1000 ${
            section.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-4 text-center">
            WHY CHOOSE US
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Your Trusted Partner in Seamless Traffic Management
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto text-center leading-relaxed">
            At TrafficSafety, we pride ourselves on delivering unparalleled quality in the installation and operation of traffic signaling systems. As the largest operator of traffic signals in the country, we are dedicated to maintaining the highest standards and ensuring that our systems operate flawlessly, even in challenging conditions.
          </p>
        </div>

        <div className="mb-8 text-white max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed mb-4">
            <span className="font-bold">Here's why you should choose us:</span>
          </p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold mt-1">1.</span>
              <div>
                <span className="font-semibold text-white">Expertise and Experience:</span> Our extensive experience in traffic management makes us a trusted partner in keeping the city's traffic flowing smoothly.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold mt-1">2.</span>
              <div>
                <span className="font-semibold text-white">Commitment to Quality:</span> We prioritize the operational efficiency of our systems, focusing on proactive operations rather than just maintenance, to ensure continuous service.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold mt-1">3.</span>
              <div>
                <span className="font-semibold text-white">Reliability:</span> We understand the critical role traffic signals play in public safety and convenience, and we work tirelessly to prevent disruptions.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold mt-1">4.</span>
              <div>
                <span className="font-semibold text-white">Innovation:</span> Our approach to traffic management involves cutting-edge technology and innovative solutions, keeping us at the forefront of the industry.
              </div>
            </li>
          </ul>
        </div>

        <div
          ref={cards.elementRef}
          className="grid md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-orange-500 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 ${
                cards.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
