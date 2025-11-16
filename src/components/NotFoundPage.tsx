import { ArrowLeft, Home, Package, Wrench } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (page: string) => void;
}

const NotFoundPage = ({ onNavigate }: NotFoundPageProps) => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-orange-600 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. The page might have been moved,
            deleted, or the URL might be incorrect.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>

          <button
            onClick={() => onNavigate('home')}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
          >
            <Home size={20} />
            Home Page
          </button>
        </div>

        <div className="border-t pt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">You might be looking for:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => onNavigate('services')}
              className="flex items-center justify-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-orange-600 hover:bg-orange-50 transition-colors"
            >
              <Wrench size={20} className="text-orange-600" />
              <span className="text-gray-700 font-medium">Browse Services</span>
            </button>

            <button
              onClick={() => onNavigate('products')}
              className="flex items-center justify-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-orange-600 hover:bg-orange-50 transition-colors"
            >
              <Package size={20} className="text-orange-600" />
              <span className="text-gray-700 font-medium">Browse Products</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;