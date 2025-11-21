import { Mail, ExternalLink } from 'lucide-react';
import { whyWorkWithUs, careerOpenings } from '../data/careers';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function CareersPage() {
  const headerSection = useScrollAnimation({ threshold: 0.1 });
  const benefitsSection = useScrollAnimation({ threshold: 0.1 });
  const openingsSection = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      <div ref={headerSection.elementRef} className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-5xl md:text-6xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${
            headerSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Join Our Team
          </h1>
          <p className={`text-xl text-gray-600 transition-all duration-1000 ${
            headerSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            transitionDelay: headerSection.isVisible ? '100ms' : '0ms'
          }}>
            FutureRoute Systems is growing, and we're looking for talented individuals to join our passionate team. If you're ready to make an impact and grow your career in traffic management and safety solutions, we'd love to hear from you.
          </p>
        </div>
      </div>

      <div ref={benefitsSection.elementRef} className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center text-gray-900 mb-16 transition-all duration-1000 ${
            benefitsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Why Work With Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyWorkWithUs.map((item, index) => (
              <div
                key={item.title}
                className={`bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 ${
                  benefitsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: benefitsSection.isVisible ? `${index * 100}ms` : '0ms'
                }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div ref={openingsSection.elementRef} className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center text-gray-900 mb-16 transition-all duration-1000 ${
            openingsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Current Openings
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {careerOpenings.map((opening, index) => (
              <div
                key={opening.id}
                className={`bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-orange-500 hover:shadow-lg transition-all duration-300 ${
                  openingsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: openingsSection.isVisible ? `${index * 100}ms` : '0ms'
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{opening.title}</h3>
                    <p className="text-orange-600 font-semibold text-sm">{opening.department}</p>
                  </div>
                  <ExternalLink className="w-6 h-6 text-orange-600 flex-shrink-0" />
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{opening.description}</p>
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200">
                  Apply Now
                </button>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-12 border border-orange-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Don't See Your Position?
            </h3>
            <p className="text-gray-600 text-center mb-8 text-lg">
              We're always looking for exceptional talent. Send us your resume and let us know how you can contribute to our team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Mail className="w-6 h-6 text-orange-600" />
              <a
                href="mailto:careers@futureroute.com"
                className="text-orange-600 font-bold text-lg hover:text-orange-700 transition-colors"
              >
                careers@futureroute.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
