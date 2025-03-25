import { useState } from 'react';
import ProductModal from './ProductModal';

export default function ProductCard({ product, onAddToCart }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    onAddToCart(product);
  };

  return (
    <>
      <div 
        className="group relative cursor-pointer transition-transform duration-200 hover:scale-105"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 lg:aspect-none group-hover:opacity-75 h-60 sm:h-72 lg:h-80">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center transition-transform duration-200 group-hover:scale-110"
          />
        </div>
        <div className="mt-4 space-y-2 px-2">
          <div className="flex justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900 sm:text-base">
                {product.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
            </div>
            <p className="text-sm font-medium text-gray-900 sm:text-base">${product.price}</p>
          </div>
          <button
            onClick={handleAddToCart}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transform transition-colors duration-200 text-sm sm:text-base"
          >
            Add to Bag
          </button>
        </div>
      </div>

      <ProductModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={onAddToCart}
      />
    </>
  );
}