import LandingPage from './LandingPage';
import ProductsSection from './ProductsSection';
import ServicesSection from './ServicesSection';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onProductClick: (productId: string) => void;
  onServiceClick: (serviceId: string) => void;
}

export default function HomePage({
  onNavigate,
  onProductClick,
  onServiceClick,
}: HomePageProps) {
  return (
    <div>
      <LandingPage onNavigate={onNavigate} />
      <ProductsSection onProductClick={onProductClick} />
      <ServicesSection onServiceClick={onServiceClick} />
    </div>
  );
}
