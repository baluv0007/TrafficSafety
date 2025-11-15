import ServicesGrid from './ServicesGrid';

interface ServicesPageProps {
  onServiceClick: (serviceId: string) => void;
  onNavigate: (page: string) => void;
}

export default function ServicesPage({ onServiceClick, onNavigate }: ServicesPageProps) {
  return (
    <div className="pt-24 pb-16">
      <ServicesGrid onServiceClick={onServiceClick} onNavigate={onNavigate} />
    </div>
  );
}
