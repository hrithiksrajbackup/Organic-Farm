import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
  onClick: () => void;
}

export function CategoryCard({ category, onClick }: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="aspect-[4/3] relative">
        <img
          src={category.imageUrl}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-1">{category.name}</h3>
          <p className="text-sm text-amber-300 mb-2">{category.nameMl}</p>
          <p className="text-sm text-gray-200 line-clamp-2">{category.description}</p>
        </div>

        <div className="absolute top-4 right-4 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <span className="text-2xl">→</span>
        </div>
      </div>
    </button>
  );
}
