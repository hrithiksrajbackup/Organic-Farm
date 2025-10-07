export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-amber-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwNTk2NjkiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnpNNiAzNGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-6 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold shadow-sm">
            Authentic Products from God's Own Country
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-emerald-900 mb-6 leading-tight">
            Discover the Essence<br />of Kerala
          </h2>

          <p className="text-xl text-emerald-700 mb-4 leading-relaxed">
            സ്വന്തം നാട്ടിലെ രുചികളും സംസ്കാരവും നിങ്ങളുടെ വീട്ടിലേക്ക്
          </p>

          <p className="text-lg text-teal-600 mb-10 max-w-2xl mx-auto">
            Authentic spices, traditional snacks, handcrafted treasures, and more from the heart of Kerala.
            Each product carries the legacy of our rich cultural heritage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-emerald-700 text-white rounded-lg font-semibold text-lg hover:bg-emerald-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Explore Products
            </button>
            <button className="px-8 py-4 bg-white text-emerald-700 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-all shadow-md border-2 border-emerald-200">
              Our Story
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white/80 backdrop-blur p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-2">🌶️</div>
            <div className="text-2xl font-bold text-emerald-800">100+</div>
            <div className="text-sm text-teal-600">Authentic Products</div>
          </div>
          <div className="bg-white/80 backdrop-blur p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-2">🚚</div>
            <div className="text-2xl font-bold text-emerald-800">All India</div>
            <div className="text-sm text-teal-600">Free Delivery</div>
          </div>
          <div className="bg-white/80 backdrop-blur p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-2">✨</div>
            <div className="text-2xl font-bold text-emerald-800">Premium</div>
            <div className="text-sm text-teal-600">Quality Assured</div>
          </div>
          <div className="bg-white/80 backdrop-blur p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-2xl font-bold text-emerald-800">GI Tagged</div>
            <div className="text-sm text-teal-600">Certified Authentic</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}
