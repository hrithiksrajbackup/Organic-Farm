import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartProps {
  onClose: () => void;
}

export function Cart({ onClose }: CartProps) {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();

  const shippingCost = getCartTotal() >= 500 ? 0 : 50;
  const total = getCartTotal() + shippingCost;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-emerald-700" />
            <h2 className="text-2xl font-bold text-emerald-900">Your Cart</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🛒</div>
              <p className="text-xl text-gray-600 mb-2">Your cart is empty</p>
              <p className="text-sm text-gray-500">Add some Kerala treasures to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 bg-gray-50 rounded-xl p-4 border border-gray-200"
                >
                  <img
                    src={item.product.imageUrl}
                    alt={item.product.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-emerald-900 mb-1">
                      {item.product.name}
                    </h3>
                    <p className="text-sm text-teal-600 mb-2">{item.product.nameMl}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center bg-white rounded-lg border border-gray-300">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-2 hover:bg-gray-100 transition-colors rounded-l-lg"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-2 hover:bg-gray-100 transition-colors rounded-r-lg"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-right">
                        <div className="font-bold text-lg text-emerald-800">
                          ₹{item.product.price * item.quantity}
                        </div>
                        <div className="text-xs text-gray-500">
                          ₹{item.product.price} each
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="p-2 h-fit hover:bg-red-50 text-red-600 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}

              {cartItems.length > 0 && (
                <button
                  onClick={clearCart}
                  className="w-full py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  Clear Cart
                </button>
              )}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 p-6 bg-gray-50">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal</span>
                <span className="font-semibold">₹{getCartTotal()}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Shipping</span>
                <span className="font-semibold">
                  {shippingCost === 0 ? (
                    <span className="text-emerald-600">FREE</span>
                  ) : (
                    `₹${shippingCost}`
                  )}
                </span>
              </div>
              {getCartTotal() < 500 && (
                <p className="text-xs text-amber-600">
                  Add ₹{500 - getCartTotal()} more for free delivery!
                </p>
              )}
              <div className="flex justify-between text-lg font-bold text-emerald-900 pt-2 border-t border-gray-300">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>

            <button className="w-full bg-emerald-700 text-white py-4 rounded-lg font-semibold text-lg hover:bg-emerald-800 transition-colors shadow-lg hover:shadow-xl">
              Proceed to Checkout
            </button>

            <p className="text-center text-xs text-gray-500 mt-3">
              Secure checkout powered by trusted payment partners
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
