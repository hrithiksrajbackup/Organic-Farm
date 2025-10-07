import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryCard } from './components/CategoryCard';
import { ProductCard } from './components/ProductCard';
import { ProductDetail } from './components/ProductDetail';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';
import { CartProvider } from './context/CartContext';
import { categories, products } from './data/mockData';
import { Product } from './types';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showCart, setShowCart] = useState(false);

  const filteredProducts =
    selectedCategory && selectedCategory !== 'all'
      ? products.filter((p) => p.categoryId === selectedCategory)
      : selectedCategory === 'all'
      ? products
      : products.filter((p) => p.isFeatured);

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header
          onCartClick={() => setShowCart(true)}
          onCategoryClick={(categoryId) => setSelectedCategory(categoryId)}
        />

        {!selectedCategory && <Hero />}

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {!selectedCategory ? (
            <>
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-emerald-900 mb-2">
                  Shop by Category
                </h2>
                <p className="text-teal-600 mb-8">
                  വിഭാഗങ്ങൾ അനുസരിച്ച് ഷോപ്പ് ചെയ്യുക
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categories.map((category) => (
                    <CategoryCard
                      key={category.id}
                      category={category}
                      onClick={() => setSelectedCategory(category.id)}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-emerald-900 mb-2">
                  Featured Products
                </h2>
                <p className="text-teal-600 mb-8">
                  Our handpicked selection of premium Kerala products
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onClick={() => setSelectedProduct(product)}
                    />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div>
              <div className="mb-8">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="text-emerald-700 hover:text-emerald-900 font-medium mb-4"
                >
                  ← Back to Home
                </button>
                <h2 className="text-3xl font-bold text-emerald-900 mb-2">
                  {selectedCategory === 'all'
                    ? 'All Products'
                    : categories.find((c) => c.id === selectedCategory)?.name}
                </h2>
                <p className="text-teal-600">
                  {selectedCategory === 'all'
                    ? 'Browse our complete collection'
                    : categories.find((c) => c.id === selectedCategory)?.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() => setSelectedProduct(product)}
                  />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-600">
                    No products found in this category
                  </p>
                </div>
              )}
            </div>
          )}

          <div className="mt-16 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-200">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">
                Why Choose Kerala Treasures?
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-3xl mb-3">✓</div>
                  <h4 className="font-semibold text-emerald-900 mb-2">
                    100% Authentic
                  </h4>
                  <p className="text-sm text-gray-600">
                    Sourced directly from Kerala artisans and farmers
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-3xl mb-3">🌿</div>
                  <h4 className="font-semibold text-emerald-900 mb-2">Natural & Pure</h4>
                  <p className="text-sm text-gray-600">
                    No artificial additives or preservatives
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-3xl mb-3">💚</div>
                  <h4 className="font-semibold text-emerald-900 mb-2">
                    Supporting Local
                  </h4>
                  <p className="text-sm text-gray-600">
                    Every purchase supports Kerala communities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />

        {selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}

        {showCart && <Cart onClose={() => setShowCart(false)} />}
      </div>
    </CartProvider>
  );
}

export default App;
