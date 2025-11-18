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
            "Building the Future of Intelligent Traffic Management"
          </h2>

          <div className="max-w-5xl mx-auto space-y-4 text-gray-200 text-lg leading-relaxed">
            <p>
             TrafficSafety is committed to providing innovative Traffic Signal Management Systems. As an emerging company with a vision for safer roads, we focus on delivering quality solutions for traffic management needs across India. Our dedication to excellence and cutting-edge technology positions us to serve municipalities and urban planners.
            </p>
            <p>
              Explore our comprehensive range of Intelligent Transport Systems (ITS) designed to meet the evolving needs of modern cities. From reducing congestion to coordinating emergency responses, our technology-driven approach aims to make cities smarter and safer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
