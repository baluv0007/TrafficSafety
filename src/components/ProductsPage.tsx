import ProductsGrid from './ProductsGrid';

interface ProductsPageProps {
  onProductClick: (productId: string) => void;
  onNavigate: (page: string) => void;
}

export default function ProductsPage({ onProductClick, onNavigate }: ProductsPageProps) {
  return (
    <div className="pt-24 pb-16">
      <ProductsGrid onProductClick={onProductClick} onNavigate={onNavigate} />
    </div>
  );
}
