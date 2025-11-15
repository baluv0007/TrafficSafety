import ServicesGrid from './ServicesGrid';

interface ServicesPageProps {
  onServiceClick: (serviceId: string) => void;
}

export default function ServicesPage({ onServiceClick }: ServicesPageProps) {
  return (
    <div className="pt-24 pb-16">
      <ServicesGrid onServiceClick={onServiceClick} />
    </div>
  );
}
