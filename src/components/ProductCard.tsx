import { Product } from '../types';
import { ShoppingCart, MapPin, Award, Leaf } from 'lucide-react';
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
      className="group bg-white rounded-3xl overflow-hidden shadow-organic hover:shadow-organic-lg transition-organic transform hover:-translate-y-2 hover:scale-[1.02] cursor-pointer border border-earth-100/50"
    >
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-coconut-100 to-palm-50">
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
        />
        {product.isFeatured && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-spice-500 to-spice-600 text-white px-4 py-2 rounded-2xl text-xs font-bold flex items-center gap-1.5 shadow-organic animate-float">
            <Award className="w-3.5 h-3.5" />
            Featured
          </div>
        )}
        {discount > 0 && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-earth-600 to-earth-700 text-white px-4 py-2 rounded-2xl text-xs font-bold shadow-organic">
            {discount}% OFF
          </div>
        )}
        {!product.isAvailable && (
          <div className="absolute inset-0 bg-earth-900/60 backdrop-blur-sm flex items-center justify-center">
            <span className="bg-white px-6 py-3 rounded-2xl font-semibold text-earth-800 shadow-organic-lg">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      <div className="p-6 relative">
        <div className="absolute -top-6 right-6 w-12 h-12 bg-gradient-to-br from-palm-500 to-palm-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center shadow-organic-lg group-hover:rotate-12">
          <Leaf className="w-6 h-6 text-white" />
        </div>

        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-display font-bold text-xl text-earth-900 group-hover:text-palm-700 transition-colors line-clamp-1 mb-1">
              {product.name}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-earth-600 mb-3 bg-coconut-100 px-3 py-1.5 rounded-full inline-flex font-medium">
          <MapPin className="w-3.5 h-3.5 text-palm-600" />
          <span>{product.originDistrict}</span>
        </div>

        <p className="text-sm text-earth-600 line-clamp-2 mb-5 leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-end justify-between">
          <div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-3xl font-bold text-palm-700 font-display">
                ₹{product.price}
              </span>
              {product.compareAtPrice && (
                <span className="text-sm text-earth-400 line-through font-medium">
                  ₹{product.compareAtPrice}
                </span>
              )}
            </div>
            <div className="text-xs text-earth-500 font-medium bg-earth-50 px-2 py-1 rounded-lg inline-block">
              {product.weightGrams}g
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!product.isAvailable}
            className="group/btn flex items-center gap-2 bg-gradient-to-r from-palm-600 to-palm-700 text-white px-5 py-3 rounded-2xl font-semibold hover:from-palm-700 hover:to-palm-800 transition-all shadow-organic hover:shadow-organic-lg disabled:from-earth-300 disabled:to-earth-400 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
          >
            <ShoppingCart className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
