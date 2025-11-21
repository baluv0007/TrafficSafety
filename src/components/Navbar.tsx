import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import TrafficLightLogo from './TrafficLightLogo';
import { products } from '../data/products';
import { services } from '../data/services';

interface NavbarProps {
  onNavigate: (page: string) => void;
  onProductClick: (productId: string) => void;
  onServiceClick: (serviceId: string) => void;
  currentPage: string;
}

export default function Navbar({ onNavigate, onProductClick, onServiceClick, currentPage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownTimeout = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (dropdown: string) => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleProductSelect = (productId: string) => {
    onProductClick(productId);
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    setMobileProductsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceSelect = (serviceId: string) => {
    onServiceClick(serviceId);
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    setMobileServicesOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAllProducts = () => {
    onNavigate('products');
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    setMobileProductsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAllServices = () => {
    onNavigate('services');
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    setMobileServicesOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Home', value: 'home', hasDropdown: false },
    { label: 'About Us', value: 'about', hasDropdown: false },
    { label: 'Our Products', value: 'products', hasDropdown: true },
    { label: 'Our Services', value: 'services', hasDropdown: true },
    { label: 'Careers', value: 'careers', hasDropdown: false },
    { label: 'Contact Us', value: 'contact', hasDropdown: false },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <TrafficLightLogo />
            <div className="text-2xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
              FutureRoute Systems
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.value}
                className="relative"
                onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.value)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => !item.hasDropdown && onNavigate(item.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                    currentPage === item.value
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.value ? 'rotate-180' : ''}`} />
                  )}
                </button>

                {item.hasDropdown && activeDropdown === item.value && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fadeIn">
                    {item.value === 'products' && (
                      <>
                        <button
                          onClick={handleAllProducts}
                          className="w-full text-left px-4 py-2.5 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition-colors border-b border-gray-100"
                        >
                          All Products
                        </button>
                        {products.map((product) => (
                          <button
                            key={product.id}
                            onClick={() => handleProductSelect(product.id)}
                            className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                          >
                            {product.title}
                          </button>
                        ))}
                      </>
                    )}

                    {item.value === 'services' && (
                      <>
                        <button
                          onClick={handleAllServices}
                          className="w-full text-left px-4 py-2.5 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition-colors border-b border-gray-100"
                        >
                          All Services
                        </button>
                        {services.map((service) => (
                          <button
                            key={service.id}
                            onClick={() => handleServiceSelect(service.id)}
                            className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                          >
                            {service.title}
                          </button>
                        ))}
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="px-4 py-4 space-y-2">
            <button
              onClick={() => {
                onNavigate('home');
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                currentPage === 'home'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => {
                onNavigate('about');
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                currentPage === 'about'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              About Us
            </button>

            <div className="space-y-1">
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  currentPage === 'products'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                Our Products
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileProductsOpen && (
                <div className="pl-4 space-y-1">
                  <button
                    onClick={handleAllProducts}
                    className="w-full text-left px-4 py-2.5 text-sm font-semibold text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    All Products
                  </button>
                  {products.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => handleProductSelect(product.id)}
                      className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors"
                    >
                      {product.title}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-1">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  currentPage === 'services'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                Our Services
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 space-y-1">
                  <button
                    onClick={handleAllServices}
                    className="w-full text-left px-4 py-2.5 text-sm font-semibold text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    All Services
                  </button>
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => handleServiceSelect(service.id)}
                      className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors"
                    >
                      {service.title}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => {
                onNavigate('careers');
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                currentPage === 'careers'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              Careers
            </button>

            <button
              onClick={() => {
                onNavigate('contact');
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                currentPage === 'contact'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
