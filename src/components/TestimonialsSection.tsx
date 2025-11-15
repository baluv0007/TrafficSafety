import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Project Manager',
    company: 'BuildRight Construction',
    content: 'TrafficSafety has been instrumental in the success of our major highway project. Their rapid deployment team responded within hours when we had an emergency, and their equipment is always top-notch.',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Operations Director',
    company: 'Metro Events Ltd',
    content: 'We have worked with TrafficSafety for over five years on various large-scale events. Their professional approach and attention to detail ensure smooth traffic flow every time. Highly recommended!',
    rating: 5,
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
  },
  {
    id: 3,
    name: 'Emma Williams',
    role: 'Site Supervisor',
    company: 'Urban Infrastructure Co',
    content: 'The quality of their equipment and the expertise of their team is unmatched. TrafficSafety provides excellent value and their 24/7 support has saved us multiple times during critical phases.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
  },
  {
    id: 4,
    name: 'David Martinez',
    role: 'Safety Coordinator',
    company: 'Highway Solutions Inc',
    content: 'Safety is our top priority, and TrafficSafety understands this completely. Their traffic management plans are comprehensive, and their deployment teams are always professional and efficient.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
  },
  {
    id: 5,
    name: 'Jennifer Taylor',
    role: 'Contract Manager',
    company: 'City Works Department',
    content: 'From initial consultation to project completion, TrafficSafety delivers exceptional service. Their flexible rental options and transparent pricing make budget management straightforward.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('testimonials-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div
      id="testimonials-section"
      className={`py-20 bg-gradient-to-b from-white to-gray-50 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by industry leaders for exceptional traffic management solutions
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-32 h-32 rounded-full object-cover shadow-lg"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{currentTestimonial.content}"
                </p>
                <div>
                  <p className="text-xl font-bold text-gray-900">
                    {currentTestimonial.name}
                  </p>
                  <p className="text-orange-600 font-semibold">
                    {currentTestimonial.role}
                  </p>
                  <p className="text-gray-600">{currentTestimonial.company}</p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-orange-50 transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-orange-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-orange-50 transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-orange-600" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-orange-600'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
