import { ShoppingCart, User, Menu, X, Search, Leaf } from 'lucide-react';
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
    <header className="bg-gradient-to-r from-palm-700 via-palm-600 to-backwater-600 text-white shadow-organic-lg sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => onCategoryClick(null)}
          >
            <div className="relative w-14 h-14 bg-gradient-to-br from-spice-400 to-spice-500 rounded-2xl flex items-center justify-center shadow-organic-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all">
              <Leaf className="w-7 h-7 text-white animate-leaf" />
              <div className="absolute inset-0 bg-white rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </div>
            <div>
              <h1 className="text-2xl font-display font-bold tracking-tight">God's Own Goodies</h1>
              <p className="text-xs text-palm-100 font-medium">Authentic Kerala Products</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => onCategoryClick(null)}
              className="px-5 py-2.5 hover:bg-white/10 rounded-xl transition-all font-medium backdrop-blur-sm border border-transparent hover:border-white/20"
            >
              Home
            </button>
            <button
              onClick={() => onCategoryClick('all')}
              className="px-5 py-2.5 hover:bg-white/10 rounded-xl transition-all font-medium backdrop-blur-sm border border-transparent hover:border-white/20"
            >
              All Products
            </button>
            <button className="px-5 py-2.5 hover:bg-white/10 rounded-xl transition-all font-medium backdrop-blur-sm border border-transparent hover:border-white/20">
              About
            </button>
            <button className="px-5 py-2.5 hover:bg-white/10 rounded-xl transition-all font-medium backdrop-blur-sm border border-transparent hover:border-white/20">
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-2">
            <button className="hidden md:block p-3 hover:bg-white/10 rounded-xl transition-all backdrop-blur-sm border border-transparent hover:border-white/20">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-3 hover:bg-white/10 rounded-xl transition-all backdrop-blur-sm border border-transparent hover:border-white/20">
              <User className="w-5 h-5" />
            </button>
            <button
              onClick={onCartClick}
              className="relative p-3 hover:bg-white/10 rounded-xl transition-all backdrop-blur-sm border border-transparent hover:border-white/20"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-spice-500 to-spice-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-organic animate-float">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-3 hover:bg-white/10 rounded-xl transition-all backdrop-blur-sm border border-transparent hover:border-white/20"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-palm-500 bg-palm-700/95 backdrop-blur-sm">
          <nav className="px-4 py-4 space-y-2">
            <button
              onClick={() => {
                onCategoryClick(null);
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-3 px-4 hover:bg-white/10 rounded-xl transition-all font-medium"
            >
              Home
            </button>
            <button
              onClick={() => {
                onCategoryClick('all');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-3 px-4 hover:bg-white/10 rounded-xl transition-all font-medium"
            >
              All Products
            </button>
            <button className="block w-full text-left py-3 px-4 hover:bg-white/10 rounded-xl transition-all font-medium">
              About
            </button>
            <button className="block w-full text-left py-3 px-4 hover:bg-white/10 rounded-xl transition-all font-medium">
              Contact
            </button>
          </nav>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,10 Q360,20 720,10 T1440,10 L1440,20 L0,20 Z" fill="white" fillOpacity="0.1"/>
        </svg>
      </div>
    </header>
  );
}
