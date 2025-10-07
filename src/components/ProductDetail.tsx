import { Product } from '../types';
import { X, MapPin, Package, Award, Minus, Plus, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
}

export function ProductDetail({ product, onClose }: ProductDetailProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    onClose();
  };

  const discount = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full my-8 shadow-2xl">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>

          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div>
              <div className="relative rounded-2xl overflow-hidden bg-gray-100 aspect-square shadow-lg">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.isFeatured && (
                  <div className="absolute top-4 left-4 bg-amber-400 text-emerald-900 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                    <Award className="w-4 h-4" />
                    Featured Product
                  </div>
                )}
                {discount > 0 && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {discount}% OFF
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <div className="mb-2">
                <h2 className="text-3xl font-bold text-emerald-900 mb-2">
                  {product.name}
                </h2>
                <p className="text-lg text-teal-600 mb-4">{product.nameMl}</p>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600 bg-emerald-50 px-3 py-2 rounded-lg">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span className="font-medium">{product.originDistrict}, Kerala</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 bg-amber-50 px-3 py-2 rounded-lg">
                  <Package className="w-4 h-4 text-amber-600" />
                  <span className="font-medium">{product.weightGrams}g</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl font-bold text-emerald-800">
                    ₹{product.price}
                  </span>
                  {product.compareAtPrice && (
                    <span className="text-xl text-gray-400 line-through">
                      ₹{product.compareAtPrice}
                    </span>
                  )}
                </div>
                <div className="text-sm text-gray-600">
                  {product.isAvailable ? (
                    <span className="text-emerald-600 font-medium">
                      In Stock ({product.stockQuantity} available)
                    </span>
                  ) : (
                    <span className="text-red-600 font-medium">Out of Stock</span>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-emerald-900 mb-2">Description</h3>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>

              <div className="mb-6 bg-gradient-to-r from-amber-50 to-emerald-50 p-4 rounded-xl border border-amber-200">
                <h3 className="font-semibold text-emerald-900 mb-2 flex items-center gap-2">
                  <span className="text-xl">📜</span>
                  Cultural Heritage
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed italic">
                  {product.culturalStory}
                </p>
              </div>

              <div className="mt-auto">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center bg-gray-100 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-gray-200 transition-colors rounded-l-lg"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-6 font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(product.stockQuantity, quantity + 1))}
                      className="p-3 hover:bg-gray-200 transition-colors rounded-r-lg"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    disabled={!product.isAvailable}
                    className="flex-1 flex items-center justify-center gap-2 bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-emerald-800 transition-colors shadow-lg hover:shadow-xl disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                </div>

                <div className="text-center text-sm text-gray-600">
                  <p>Free delivery on orders above ₹500</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
