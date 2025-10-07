import { Leaf, Sparkles, Award, Truck } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-palm-50 via-coconut-50 to-backwater-50">
      <div className="absolute inset-0 kerala-pattern"></div>

      <div className="absolute top-0 left-0 w-96 h-96 bg-palm-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-backwater-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-earth-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-white/80 backdrop-blur-sm text-earth-700 rounded-full text-sm font-medium shadow-organic border border-earth-200/50 transition-organic hover:shadow-organic-lg hover:scale-105">
            <Leaf className="w-4 h-4 text-palm-600 animate-leaf" />
            <span>Authentic Products from God's Own Country</span>
            <Leaf className="w-4 h-4 text-palm-600 animate-leaf" style={{ animationDelay: '1s' }} />
          </div>

          <h2 className="text-5xl md:text-7xl font-display font-bold text-earth-900 mb-6 leading-tight">
            Authentic Flavors from
            <span className="block mt-2 bg-gradient-to-r from-palm-600 via-palm-500 to-backwater-600 bg-clip-text text-transparent">
              God's Own Country
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-earth-600 mb-8 leading-relaxed font-light">
            Experience the rich taste of Kerala with premium spices, traditional snacks,
            <br className="hidden md:block" />
            aromatic tea and coffee. Each product brings you the authentic essence of our heritage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group px-8 py-4 bg-gradient-to-r from-palm-600 to-palm-700 text-white rounded-2xl font-semibold text-lg shadow-organic-lg transition-organic hover:shadow-xl hover:scale-105 hover:from-palm-700 hover:to-palm-800 flex items-center gap-2">
              <span>Explore Products</span>
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/90 backdrop-blur-sm text-earth-700 rounded-2xl font-semibold text-lg shadow-organic border-2 border-earth-200 transition-organic hover:shadow-organic-lg hover:scale-105 hover:bg-white hover:border-palm-300">
              Our Story
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-organic transition-organic hover:shadow-organic-lg hover:scale-105 hover:-translate-y-1 border border-earth-100/50">
              <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-spice-100 to-spice-200 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform">
                <Leaf className="w-7 h-7 text-spice-600" />
              </div>
              <div className="text-2xl font-bold text-earth-800 mb-1">100+</div>
              <div className="text-sm text-earth-600 font-medium">Authentic Products</div>
            </div>

            <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-organic transition-organic hover:shadow-organic-lg hover:scale-105 hover:-translate-y-1 border border-earth-100/50">
              <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-backwater-100 to-backwater-200 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform">
                <Truck className="w-7 h-7 text-backwater-600" />
              </div>
              <div className="text-2xl font-bold text-earth-800 mb-1">All India</div>
              <div className="text-sm text-earth-600 font-medium">Free Delivery</div>
            </div>

            <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-organic transition-organic hover:shadow-organic-lg hover:scale-105 hover:-translate-y-1 border border-earth-100/50">
              <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-palm-100 to-palm-200 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform">
                <Sparkles className="w-7 h-7 text-palm-600" />
              </div>
              <div className="text-2xl font-bold text-earth-800 mb-1">Premium</div>
              <div className="text-sm text-earth-600 font-medium">Quality Assured</div>
            </div>

            <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-organic transition-organic hover:shadow-organic-lg hover:scale-105 hover:-translate-y-1 border border-earth-100/50">
              <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-earth-100 to-earth-200 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform">
                <Award className="w-7 h-7 text-earth-600" />
              </div>
              <div className="text-2xl font-bold text-earth-800 mb-1">GI Tagged</div>
              <div className="text-sm text-earth-600 font-medium">Certified Authentic</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,64 C320,120 420,120 720,64 C1020,8 1120,8 1440,64 L1440,120 L0,120 Z" fill="white" fillOpacity="0.9"/>
          <path d="M0,80 C360,40 540,40 720,80 C900,120 1080,120 1440,80 L1440,120 L0,120 Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
}
