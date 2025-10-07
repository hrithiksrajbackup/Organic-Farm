import { Category } from '../types';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
  onClick: () => void;
}

export function CategoryCard({ category, onClick }: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-3xl shadow-organic hover:shadow-organic-lg transition-organic transform hover:-translate-y-2 hover:scale-[1.02]"
    >
      <div className="aspect-[4/3] relative">
        <img
          src={category.imageUrl}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 via-earth-900/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-palm-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-spice-400 animate-float" />
            <h3 className="text-3xl font-display font-bold">{category.name}</h3>
          </div>
          <p className="text-sm text-coconut-200 line-clamp-2 leading-relaxed">{category.description}</p>
        </div>

        <div className="absolute top-4 right-4 w-14 h-14 bg-gradient-to-br from-spice-400 to-spice-500 rounded-2xl flex items-center justify-center shadow-organic-lg group-hover:scale-110 group-hover:rotate-12 transition-all">
          <ArrowRight className="w-6 h-6 text-white" />
        </div>
      </div>
    </button>
  );
}
