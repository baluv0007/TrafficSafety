import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import TrafficLightLogo from './TrafficLightLogo';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <TrafficLightLogo />
              <h3 className="text-2xl font-bold text-orange-500">FutureRoute Systems</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Leading provider of traffic management solutions, ensuring safety and efficiency on every project.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate?.('home')}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('products')}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('services')}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('about')}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  About Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">0800 123 4567</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">info@futureroute.com</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">123 Traffic Management Lane, Industrial Estate</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-orange-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-orange-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-orange-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-orange-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} FutureRoute Systems. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button
                onClick={() => onNavigate?.('privacy')}
                className="text-gray-400 hover:text-orange-500 text-sm transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => onNavigate?.('terms')}
                className="text-gray-400 hover:text-orange-500 text-sm transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
