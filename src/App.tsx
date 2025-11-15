import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ProductDetail from './components/ProductDetail';
import ServiceDetail from './components/ServiceDetail';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

type Page = 'home' | 'products' | 'services' | 'about' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    setSelectedProduct(null);
    setSelectedService(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductClick = (productId: string) => {
    setSelectedProduct(productId);
    setCurrentPage('products');
  };

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(serviceId);
    setCurrentPage('services');
  };

  const handleBackToProducts = () => {
    setSelectedProduct(null);
  };

  const handleBackToServices = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />

      {currentPage === 'home' && (
        <HomePage
          onNavigate={handleNavigate}
          onProductClick={handleProductClick}
          onServiceClick={handleServiceClick}
        />
      )}

      {currentPage === 'products' && !selectedProduct && (
        <div className="pt-24 pb-16">
          <HomePage
            onNavigate={handleNavigate}
            onProductClick={handleProductClick}
            onServiceClick={handleServiceClick}
          />
        </div>
      )}

      {currentPage === 'products' && selectedProduct && (
        <ProductDetail
          productId={selectedProduct}
          onBack={handleBackToProducts}
          onNavigate={handleNavigate}
        />
      )}

      {currentPage === 'services' && !selectedService && (
        <div className="pt-24 pb-16">
          <HomePage
            onNavigate={handleNavigate}
            onProductClick={handleProductClick}
            onServiceClick={handleServiceClick}
          />
        </div>
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
    </div>
  );
}

export default App;
