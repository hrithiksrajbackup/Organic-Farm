import { ShoppingCart, User, Menu, X, Search } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onCartClick: () => void;
  onCategoryClick: (categoryId: string | null) => void;
}

export function Header({ onCartClick, onCategoryClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <header className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onCategoryClick(null)}>
            <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center shadow-md">
              <span className="text-2xl">🌴</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Kerala Treasures</h1>
              <p className="text-xs text-emerald-100">കേരള നിധികൾ</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => onCategoryClick(null)}
              className="hover:text-amber-300 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => onCategoryClick('all')}
              className="hover:text-amber-300 transition-colors font-medium"
            >
              All Products
            </button>
            <button className="hover:text-amber-300 transition-colors font-medium">
              About
            </button>
            <button className="hover:text-amber-300 transition-colors font-medium">
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block p-2 hover:bg-emerald-600 rounded-lg transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-emerald-600 rounded-lg transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button
              onClick={onCartClick}
              className="relative p-2 hover:bg-emerald-600 rounded-lg transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-400 text-emerald-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-emerald-600 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-emerald-600 bg-emerald-800">
          <nav className="px-4 py-4 space-y-3">
            <button
              onClick={() => {
                onCategoryClick(null);
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 hover:text-amber-300 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => {
                onCategoryClick('all');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 hover:text-amber-300 transition-colors font-medium"
            >
              All Products
            </button>
            <button className="block w-full text-left py-2 hover:text-amber-300 transition-colors font-medium">
              About
            </button>
            <button className="block w-full text-left py-2 hover:text-amber-300 transition-colors font-medium">
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
