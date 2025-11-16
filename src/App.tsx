import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ProductsPage from './components/ProductsPage';
import ServicesPage from './components/ServicesPage';
import ProductDetail from './components/ProductDetail';
import ServiceDetail from './components/ServiceDetail';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import CareersPage from './components/CareersPage';
import NotFoundPage from './components/NotFoundPage';
import Footer from './components/Footer';
import { services } from './data/services';
import { products } from './data/products';

type Page = 'home' | 'products' | 'services' | 'about' | 'contact' | 'careers' | 'notfound';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const parseUrl = (path: string) => {
    const cleanPath = path.trim().replace(/\/$/, '');

    if (cleanPath === '' || cleanPath === '/') {
      setCurrentPage('home');
      setSelectedProduct(null);
      setSelectedService(null);
    } else if (cleanPath.startsWith('/ourproducts/')) {
      const urlSegment = cleanPath.replace('/ourproducts/', '');
      const productId = urlSegment.toLowerCase().replace(/_/g, '-');
      setSelectedProduct(productId);
      setCurrentPage('products');
    } else if (cleanPath === '/ourproducts') {
      setCurrentPage('products');
      setSelectedProduct(null);
      setSelectedService(null);
    } else if (cleanPath.startsWith('/ourservices/')) {
      const urlSegment = cleanPath.replace('/ourservices/', '');
      const serviceId = urlSegment.toLowerCase().replace(/_/g, '-');
      setSelectedService(serviceId);
      setCurrentPage('services');
    } else if (cleanPath === '/ourservices') {
      setCurrentPage('services');
      setSelectedProduct(null);
      setSelectedService(null);
    } else if (cleanPath === '/about') {
      setCurrentPage('about');
      setSelectedProduct(null);
      setSelectedService(null);
    } else if (cleanPath === '/contact') {
      setCurrentPage('contact');
      setSelectedProduct(null);
      setSelectedService(null);
    } else if (cleanPath === '/careers') {
      setCurrentPage('careers');
      setSelectedProduct(null);
      setSelectedService(null);
    }
  };

  useEffect(() => {
    parseUrl(window.location.pathname);

    const handlePopState = () => {
      parseUrl(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    setSelectedProduct(null);
    setSelectedService(null);
    const path = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductClick = (productId: string) => {
    setSelectedProduct(productId);
    setCurrentPage('products');
    const urlFriendlyId = productId.replace(/-/g, '_').split('_').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('_');
    window.history.pushState({}, '', `/ourproducts/${urlFriendlyId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(serviceId);
    setCurrentPage('services');
    const urlFriendlyId = serviceId.replace(/-/g, '_').split('_').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('_');
    window.history.pushState({}, '', `/ourservices/${urlFriendlyId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToProducts = () => {
    setSelectedProduct(null);
    window.history.pushState({}, '', '/ourproducts');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToServices = () => {
    setSelectedService(null);
    window.history.pushState({}, '', '/ourservices');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        onNavigate={handleNavigate}
        onProductClick={handleProductClick}
        onServiceClick={handleServiceClick}
        currentPage={currentPage}
      />

      {currentPage === 'home' && (
        <HomePage
          onNavigate={handleNavigate}
          onProductClick={handleProductClick}
          onServiceClick={handleServiceClick}
        />
      )}

      {currentPage === 'products' && !selectedProduct && (
        <ProductsPage onProductClick={handleProductClick} onNavigate={handleNavigate} />
      )}

      {currentPage === 'products' && selectedProduct && (
        <ProductDetail
          productId={selectedProduct}
          onBack={handleBackToProducts}
          onNavigate={handleNavigate}
        />
      )}

      {currentPage === 'services' && !selectedService && (
        <ServicesPage onServiceClick={handleServiceClick} onNavigate={handleNavigate} />
      )}

      {currentPage === 'services' && selectedService && (
        <ServiceDetail
          serviceId={selectedService}
          onBack={handleBackToServices}
          onNavigate={handleNavigate}
        />
      )}

      {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}

      {currentPage === 'contact' && <ContactPage />}

      {currentPage === 'careers' && <CareersPage />}

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
