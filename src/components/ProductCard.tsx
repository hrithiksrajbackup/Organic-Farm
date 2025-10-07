import { Product } from '../types';
import { ShoppingCart, MapPin, Award } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  const discount = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0;

  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-emerald-100"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.isFeatured && (
          <div className="absolute top-3 left-3 bg-amber-400 text-emerald-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
            <Award className="w-3 h-3" />
            Featured
          </div>
        )}
        {discount > 0 && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            {discount}% OFF
          </div>
        )}
        {!product.isAvailable && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-white px-4 py-2 rounded-lg font-semibold text-gray-800">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="font-bold text-lg text-emerald-900 group-hover:text-emerald-700 transition-colors line-clamp-1">
              {product.name}
            </h3>
            <p className="text-sm text-teal-600">{product.nameMl}</p>
          </div>
        </div>

        <div className="flex items-center gap-1 text-xs text-gray-600 mb-3">
          <MapPin className="w-3 h-3" />
          <span>{product.originDistrict}</span>
        </div>

        <p className="text-sm text-gray-600 line-clamp-2 mb-4 leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-emerald-800">
                ₹{product.price}
              </span>
              {product.compareAtPrice && (
                <span className="text-sm text-gray-400 line-through">
                  ₹{product.compareAtPrice}
                </span>
              )}
            </div>
            <div className="text-xs text-gray-500">{product.weightGrams}g</div>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!product.isAvailable}
            className="flex items-center gap-2 bg-emerald-700 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-emerald-800 transition-colors shadow-md hover:shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            <ShoppingCart className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
