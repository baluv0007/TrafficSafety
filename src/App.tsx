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
    console.log('Parsing path:', cleanPath);

    if (cleanPath === '' || cleanPath === '/') {
      console.log('Setting to home');
      setCurrentPage('home');
      setSelectedProduct(null);
      setSelectedService(null);
      return;
    }

    if (cleanPath.startsWith('/ourproducts/')) {
      const urlSegment = cleanPath.replace('/ourproducts/', '');
      const productId = urlSegment.toLowerCase().replace(/ /g, '-').replace(/_/g, '-');

      // Check if product exists
      const productExists = products.some(p => p.id === productId);
      if (productExists) {
        setSelectedProduct(productId);
        setCurrentPage('products');
        setSelectedService(null);
      } else {
        setCurrentPage('notfound');
      }
      return;
    }

    if (cleanPath === '/ourproducts') {
      setCurrentPage('products');
      setSelectedProduct(null);
      setSelectedService(null);
      return;
    }

    if (cleanPath.startsWith('/ourservices/')) {
      const urlSegment = cleanPath.replace('/ourservices/', '');
      const serviceId = urlSegment.toLowerCase().replace(/ /g, '-').replace(/_/g, '-');

      // Check if service exists
      const serviceExists = services.some(s => s.id === serviceId);
      if (serviceExists) {
        setSelectedService(serviceId);
        setCurrentPage('services');
        setSelectedProduct(null);
      } else {
        setCurrentPage('notfound');
      }
      return;
    }

    if (cleanPath === '/ourservices') {
      setCurrentPage('services');
      setSelectedProduct(null);
      setSelectedService(null);
      return;
    }

    if (cleanPath === '/about') {
      setCurrentPage('about');
      setSelectedProduct(null);
      setSelectedService(null);
      return;
    }

    if (cleanPath === '/contact') {
      setCurrentPage('contact');
      setSelectedProduct(null);
      setSelectedService(null);
      return;
    }

    if (cleanPath === '/careers') {
      setCurrentPage('careers');
      setSelectedProduct(null);
      setSelectedService(null);
      return;
    }

    // If no route matches, show 404
    setCurrentPage('notfound');
    setSelectedProduct(null);
    setSelectedService(null);
  };

  useEffect(() => {
    const initialPath = window.location.pathname;
    console.log('Initial path:', initialPath);
    parseUrl(initialPath);

    const handlePopState = () => {
      const currentPath = window.location.pathname;
      console.log('Popstate path:', currentPath);
      parseUrl(currentPath);
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
    window.history.pushState({}, '', `/ourproducts/${productId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(serviceId);
    setCurrentPage('services');
    window.history.pushState({}, '', `/ourservices/${serviceId}`);
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

      {currentPage === 'notfound' && <NotFoundPage onNavigate={handleNavigate} />}

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
