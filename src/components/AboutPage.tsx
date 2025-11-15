import { Shield, Users, Award, Target, Clock, ThumbsUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const hero = useScrollAnimation({ threshold: 0.2 });
  const story = useScrollAnimation({ threshold: 0.2 });
  const values_section = useScrollAnimation({ threshold: 0.1 });
  const mission = useScrollAnimation({ threshold: 0.2 });
  const stats = useScrollAnimation({ threshold: 0.2 });
  const founder = useScrollAnimation({ threshold: 0.2 });
  const cta = useScrollAnimation({ threshold: 0.2 });

  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Safety is at the core of everything we do. We maintain the highest standards to protect workers and the public.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering superior quality and innovative solutions.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We build lasting relationships with our clients based on trust, reliability, and mutual success.',
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Attention to detail and meticulous planning ensure flawless execution of every project.',
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: '24/7 availability and rapid response times make us the dependable choice for urgent needs.',
    },
    {
      icon: ThumbsUp,
      title: 'Quality',
      description: 'Premium equipment and professional service guarantee outstanding results every time.',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={hero.elementRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About TrafficSafety
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Leading the industry in traffic management solutions with over two
            decades of experience
          </p>
        </div>

        <div
          ref={story.elementRef}
          className={`grid lg:grid-cols-2 gap-12 mb-20 transition-all duration-1000 ${
            story.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg"
              alt="Traffic Management Team"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Founded with a vision to revolutionize traffic management,
                TrafficSafety has grown to become a trusted partner for
                construction companies, local authorities, and event organizers
                across the nation.
              </p>
              <p>
                Our journey began with a simple commitment: to provide the
                highest quality traffic management equipment and services while
                maintaining an unwavering focus on safety. Today, we serve
                hundreds of clients with the same dedication and attention to
                detail that defined our early days.
              </p>
              <p>
                With a fleet of modern equipment, a team of certified
                professionals, and a 24/7 support system, we're equipped to
                handle projects of any scale and complexity. From emergency
                roadworks to major infrastructure projects, we deliver solutions
                that exceed expectations.
              </p>
            </div>
          </div>
        </div>

        <div
          ref={values_section.elementRef}
          className="mb-20"
        >
          <h2
            className={`text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 transition-all duration-1000 ${
              values_section.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 ${
                  values_section.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={mission.elementRef}
          className={`bg-gradient-to-br from-slate-900 to-orange-900 rounded-2xl p-12 text-center shadow-2xl mb-20 transition-all duration-1000 ${
            mission.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            To provide innovative, reliable, and safe traffic management
            solutions that protect lives, minimize disruption, and enable
            infrastructure development. We are committed to excellence in every
            aspect of our service, from equipment quality to customer support.
          </p>
        </div>

        <div
          ref={stats.elementRef}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          <div
            className={`text-center transition-all duration-1000 ${
              stats.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-5xl font-bold text-orange-600 mb-2">20+</div>
            <div className="text-xl text-gray-600">Years of Experience</div>
          </div>
          <div
            className={`text-center transition-all duration-1000 ${
              stats.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="text-5xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-xl text-gray-600">Projects Completed</div>
          </div>
          <div
            className={`text-center transition-all duration-1000 ${
              stats.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="text-5xl font-bold text-orange-600 mb-2">100%</div>
            <div className="text-xl text-gray-600">Client Satisfaction</div>
          </div>
        </div>

        <div
          ref={founder.elementRef}
          className={`bg-white rounded-2xl shadow-2xl overflow-hidden mb-20 transition-all duration-1000 ${
            founder.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-[500px]">
              <img
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
                alt="Founder and CEO"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Founder & CEO
              </h2>
              <h3 className="text-2xl font-semibold text-orange-600 mb-6">
                Robert Anderson
              </h3>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  With over 25 years of experience in traffic management and civil engineering, Robert founded TrafficSafety with a clear vision: to create the safest, most efficient traffic management solutions in the industry.
                </p>
                <p>
                  His commitment to innovation and safety has driven the company's growth from a small local operation to a nationally recognized leader in traffic control services.
                </p>
                <p>
                  Under Robert's leadership, TrafficSafety has pioneered new technologies and best practices that have become industry standards, ensuring every project prioritizes the safety of workers and the public.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={cta.elementRef}
          className={`bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-12 text-center shadow-2xl transition-all duration-1000 ${
            cta.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with us for your next project and experience the difference
            that expertise and dedication can make
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 bg-white text-orange-600 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}
