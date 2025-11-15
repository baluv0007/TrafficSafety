import LandingPage from './LandingPage';
import ProductsSection from './ProductsSection';
import ServicesSection from './ServicesSection';
import TestimonialsSection from './TestimonialsSection';
import WhyChooseSection from './WhyChooseSection';
import WhyChooseExpertiseSection from './WhyChooseExpertiseSection';
import AdditionalServicesSection from './AdditionalServicesSection';
import HowWeWorkSection from './HowWeWorkSection';
import MissionStatementSection from './MissionStatementSection';

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
      <MissionStatementSection />
      <WhyChooseSection />
      <WhyChooseExpertiseSection />
      <ProductsSection onProductClick={onProductClick} />
      <ServicesSection onServiceClick={onServiceClick} />
      <AdditionalServicesSection onNavigate={onNavigate} />
      <HowWeWorkSection />
      <TestimonialsSection />
    </div>
  );
}
