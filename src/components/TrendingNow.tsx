import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Outfit } from '../types/fashion';

interface TrendingNowProps {
  onSelectOutfit: (outfit: Outfit) => void;
  outfits: Outfit[];
}

export const TrendingNow: React.FC<TrendingNowProps> = ({ onSelectOutfit, outfits }) => {
  const trendingOutfits = outfits.slice(0, 4);

  return (
    <section id="trending" className="w-full py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#08080a] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#d4af37] font-mono tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Editorial Selection · SS26</span>
            </div>
            <h2 className="text-5xl sm:text-7xl font-impact tracking-normal uppercase text-white leading-none">
              TRENDING <span className="font-editorial italic font-light text-gold-gradient tracking-tight">NOW</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            The prevailing silhouettes shaping international runways this season, defined by drape, tactile contrast, and quiet luxury.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Hero Card (7 Cols) */}
          {trendingOutfits[0] && (
            <div
              onClick={() => onSelectOutfit(trendingOutfits[0])}
              className="lg:col-span-7 group relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-auto lg:h-[520px] rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#d4af37]/60 transition-all duration-700 shadow-2xl"
            >
              <img
                src={trendingOutfits[0].image}
                alt={trendingOutfits[0].name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

              <div className="absolute top-6 left-6">
                <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono uppercase tracking-widest text-[#d4af37]">
                  01 // FEATURED COVER EDIT
                </span>
              </div>

              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#d4af37] block mb-1">
                    {trendingOutfits[0].category} · {trendingOutfits[0].silhouette} Cut
                  </span>
                  <h3 className="text-3xl sm:text-5xl font-editorial text-white tracking-tight">
                    {trendingOutfits[0].name}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 font-light max-w-md mt-2 line-clamp-2">
                    {trendingOutfits[0].description}
                  </p>
                </div>
                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-500 shadow-xl shrink-0 ml-4">
                  <ArrowUpRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>
          )}

          {/* Secondary Stack (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:h-[520px]">
            {trendingOutfits.slice(1, 3).map((item, idx) => (
              <div
                key={item.id}
                onClick={() => onSelectOutfit(item)}
                className="group relative flex-1 min-h-[240px] rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#d4af37]/60 transition-all duration-700 shadow-xl"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4af37] block mb-1">
                      0{idx + 2} // {item.category}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-editorial text-white">{item.name}</h4>
                    <p className="text-xs text-zinc-400 font-light line-clamp-1 mt-0.5">{item.silhouette} Silhouette</p>
                  </div>
                  <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#d4af37] group-hover:text-black transition-all shrink-0 ml-3">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
