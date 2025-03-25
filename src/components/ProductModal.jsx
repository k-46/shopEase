import { IoClose } from 'react-icons/io5';
import { IoStar } from 'react-icons/io5';

export default function ProductModal({ product, isOpen, onClose, onAddToCart }) {
  const averageRating = product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-25"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <div className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
            <div className="flex justify-between items-center">
              <h3 className="text-lg sm:text-xl font-medium leading-6 text-gray-900">
                {product.name}
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-500"
              >
                <IoClose className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-4">
              <div className="w-full h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                <IoStar className="h-5 w-5 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">{averageRating.toFixed(1)}</span>
              </div>
              <p className="mt-2 text-sm text-gray-500">{product.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-lg font-medium text-gray-900">${product.price}</p>
                <button
                  onClick={() => {
                    onAddToCart(product);
                    onClose();
                  }}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}