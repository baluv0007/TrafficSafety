import ProductsGrid from './ProductsGrid';

interface ProductsPageProps {
  onProductClick: (productId: string) => void;
}

export default function ProductsPage({ onProductClick }: ProductsPageProps) {
  return (
    <div className="pt-24 pb-16">
      <ProductsGrid onProductClick={onProductClick} />
    </div>
  );
}
