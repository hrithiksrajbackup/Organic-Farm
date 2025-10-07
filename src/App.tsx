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
      <div className="min-h-screen bg-coconut-50">
        <Header
          onCartClick={() => setShowCart(true)}
          onCategoryClick={(categoryId) => setSelectedCategory(categoryId)}
        />

        {!selectedCategory && <Hero />}

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {!selectedCategory ? (
            <>
              <div className="mb-12">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-earth-900 mb-3">
                    Shop by Category
                  </h2>
                  <p className="text-lg text-earth-600">
                    Explore our authentic Kerala collections
                  </p>
                </div>
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
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-earth-900 mb-3">
                    Featured Products
                  </h2>
                  <p className="text-lg text-earth-600">
                    Our handpicked selection of premium Kerala products
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
              </div>
            </>
          ) : (
            <div>
              <div className="mb-8">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="text-palm-700 hover:text-palm-900 font-semibold mb-6 flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-palm-50 transition-all"
                >
                  ← Back to Home
                </button>
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-earth-900 mb-3">
                    {selectedCategory === 'all'
                      ? 'All Products'
                      : categories.find((c) => c.id === selectedCategory)?.name}
                  </h2>
                  <p className="text-lg text-earth-600">
                    {selectedCategory === 'all'
                      ? 'Browse our complete collection'
                      : categories.find((c) => c.id === selectedCategory)?.description}
                  </p>
                </div>
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

          <div className="mt-20 bg-gradient-to-r from-palm-50 via-coconut-100 to-backwater-50 rounded-3xl p-12 shadow-organic-lg kerala-pattern border border-earth-200/50">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-earth-900 mb-6">
                Why Choose God's Own Goodies?
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mt-10">
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-organic transition-organic hover:shadow-organic-lg hover:-translate-y-1">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-palm-400 to-palm-500 rounded-2xl flex items-center justify-center text-3xl text-white">✓</div>
                  <h4 className="font-display font-bold text-earth-900 mb-3 text-lg">
                    100% Authentic
                  </h4>
                  <p className="text-sm text-earth-600 leading-relaxed">
                    Sourced directly from Kerala artisans and farmers
                  </p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-organic transition-organic hover:shadow-organic-lg hover:-translate-y-1">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-palm-400 to-palm-500 rounded-2xl flex items-center justify-center text-3xl">🌿</div>
                  <h4 className="font-display font-bold text-earth-900 mb-3 text-lg">Natural & Pure</h4>
                  <p className="text-sm text-earth-600 leading-relaxed">
                    No artificial additives or preservatives
                  </p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-organic transition-organic hover:shadow-organic-lg hover:-translate-y-1">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-palm-400 to-palm-500 rounded-2xl flex items-center justify-center text-3xl">💚</div>
                  <h4 className="font-display font-bold text-earth-900 mb-3 text-lg">
                    Supporting Local
                  </h4>
                  <p className="text-sm text-earth-600 leading-relaxed">
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
