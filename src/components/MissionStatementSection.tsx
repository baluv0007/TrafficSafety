import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function MissionStatementSection() {
  const section = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={section.elementRef}
      className="relative py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            section.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-4 text-center">
            YOUR PARTNER IN ADVANCED TRAFFIC TECHNOLOGY
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6 leading-tight">
            "Leading the Way in Intelligent Traffic Management"
          </h2>

          <div className="max-w-5xl mx-auto space-y-4 text-gray-200 text-lg leading-relaxed">
            <p>
              TrafficSafety is a leading provider of Traffic Signal Management Systems. With a strong nationwide presence, we operate the highest number of traffic signals across major cities including metropolitan and regional areas. Our commitment to quality and innovation has made us a trusted partner for municipalities and urban planners.
            </p>
            <p>
              Explore our comprehensive range of Intelligent Transport Systems (ITS) designed to meet the evolving needs of modern cities. From reducing congestion to coordinating emergency responses, our technology-driven approach is making cities smarter and safer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
