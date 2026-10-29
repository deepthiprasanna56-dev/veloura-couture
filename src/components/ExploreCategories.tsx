import React, { useState } from 'react';
import { Sparkles, ArrowRight, Layers } from 'lucide-react';
import { CategoryType, Outfit } from '../types/fashion';
import { CATEGORIES_DATA } from '../data/categories';

interface ExploreCategoriesProps {
  onSelectCategory: (cat: CategoryType) => void;
  onSelectOutfit: (outfit: Outfit) => void;
  outfits: Outfit[];
}

export const ExploreCategories: React.FC<ExploreCategoriesProps> = ({
  onSelectOutfit,
  outfits,
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('Casual');

  const activeCategoryInfo =
    CATEGORIES_DATA.find((c) => c.id === activeCategory) || CATEGORIES_DATA[0];

  const categoryOutfits = outfits.filter((o) => o.category === activeCategory);

  return (
    <section id="categories" className="w-full py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#08080a] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#d4af37] font-mono tracking-widest uppercase mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Sartorial Taxonomy</span>
            </div>
            <h2 className="text-5xl sm:text-7xl font-impact tracking-normal uppercase text-white leading-none">
              EXPLORE <span className="font-editorial italic font-light text-gold-gradient tracking-tight">CATEGORIES</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            From Savile Row formal elegance to avant-garde streetwear and centuries-old artisanal craft.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap gap-3 mb-12">
          {CATEGORIES_DATA.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-3 rounded-2xl border text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-3 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#d4af37] text-black border-[#d4af37] font-semibold scale-105 shadow-xl shadow-[#d4af37]/25'
                  : 'bg-white/[0.03] border-white/10 text-zinc-400 hover:text-white hover:border-white/25'
              }`}
            >
              <span>{cat.title}</span>
              <span className="text-[10px] opacity-75 font-normal">({cat.count})</span>
            </button>
          ))}
        </div>

        {/* Active Category Editorial Spotlight Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 glass-panel-gold rounded-3xl p-6 sm:p-10 items-center border border-[#d4af37]/25 shadow-2xl">
          <div className="lg:col-span-5 aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 border border-white/10">
            <img
              src={activeCategoryInfo.image}
              alt={activeCategoryInfo.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono text-[#d4af37] uppercase tracking-widest block">
              {activeCategoryInfo.subtitle}
            </span>
            <h3 className="text-3xl sm:text-4xl font-editorial text-white">
              {activeCategoryInfo.title}
            </h3>
            <p className="text-sm text-zinc-300 font-light leading-relaxed">
              {activeCategoryInfo.description}
            </p>

            <div className="flex items-center gap-3 pt-3">
              <span className="text-xs font-mono text-zinc-400">Signature Palette:</span>
              <div className="flex gap-2">
                {activeCategoryInfo.palette.map((hex, i) => (
                  <span
                    key={i}
                    className="w-4 h-4 rounded-full border border-white/20"
                    style={{ backgroundColor: hex }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Outfits in Selected Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryOutfits.map((outfit) => (
            <div
              key={outfit.id}
              onClick={() => onSelectOutfit(outfit)}
              className="group glass-panel rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#d4af37]/60 transition-all duration-700 shadow-xl"
            >
              <div className="aspect-[3/4] relative overflow-hidden bg-zinc-900">
                <img
                  src={outfit.image}
                  alt={outfit.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-mono text-[#d4af37] uppercase block mb-1">
                    {outfit.label}
                  </span>
                  <h4 className="text-2xl font-editorial text-white">{outfit.name}</h4>
                </div>
              </div>

              <div className="p-5 flex items-center justify-between text-xs">
                <span className="text-zinc-400 font-light">{outfit.garments.length} Assembled Pieces</span>
                <span className="text-[#d4af37] font-medium flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
                  Inspect in 3D <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
