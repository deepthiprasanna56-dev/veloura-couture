import React, { useState } from 'react';
import { Bookmark, Eye, Sparkles, RefreshCw, Layers, Compass, ArrowUpRight } from 'lucide-react';
import { Outfit } from '../types/fashion';

interface OutfitRecommendationCardProps {
  outfit: Outfit;
  index: number;
  onViewCompleteLook: (outfit: Outfit) => void;
  onGenerateSimilar: (outfit: Outfit) => void;
  onToggleSave: (outfit: Outfit) => void;
  isSaved: boolean;
}

export const OutfitRecommendationCard: React.FC<OutfitRecommendationCardProps> = ({
  outfit,
  index,
  onViewCompleteLook,
  onGenerateSimilar,
  onToggleSave,
  isSaved,
}) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // 3D tilt calculation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 10, y: -y * 10 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <article
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
      }}
      className="group relative rounded-3xl overflow-hidden glass-panel-gold border border-white/10 hover:border-[#d4af37]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#d4af37]/15 flex flex-col justify-between"
    >
      {/* Light sweep highlight on hover */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity overflow-hidden z-20">
        <div className="w-[200%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-sweep" />
      </div>

      {/* Top Image Preview Wrap */}
      <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden bg-zinc-900">
        <img
          src={outfit.image}
          alt={outfit.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/30 to-transparent" />

        {/* Top Floating Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="px-3.5 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-[10px] font-mono uppercase tracking-wider text-[#d4af37]">
            {outfit.category} // 0{index + 1}
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave(outfit);
            }}
            aria-label={isSaved ? 'Remove from saved' : 'Save outfit'}
            className={`p-2.5 rounded-full backdrop-blur-md border transition-all cursor-pointer ${
              isSaved
                ? 'bg-[#d4af37] text-black border-[#d4af37]'
                : 'bg-black/65 border-white/20 text-white hover:text-[#d4af37]'
            }`}
          >
            <Bookmark className="w-4 h-4 fill-current" />
          </button>
        </div>

        {/* Bottom Image Overlay Details */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-1">
            {outfit.label}
          </span>
          <h3 className="text-2xl sm:text-3xl font-editorial text-white tracking-tight">
            {outfit.name}
          </h3>
        </div>
      </div>

      {/* Editorial Content & Details Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <p className="text-xs text-zinc-300 font-light leading-relaxed line-clamp-2">
          {outfit.description}
        </p>

        {/* Assembled Key Garments Pills */}
        <div className="space-y-1.5">
          <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-400 block">
            Core Elements:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {outfit.garments.slice(0, 3).map((g) => (
              <span
                key={g.id}
                className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] text-zinc-300 font-light"
              >
                {g.name}
              </span>
            ))}
          </div>
        </div>

        {/* Color Palette & Suitability */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10">
          <div className="flex items-center gap-1.5">
            {outfit.colorPalette.map((c) => (
              <span
                key={c.name}
                title={c.name}
                className="w-3.5 h-3.5 rounded-full border border-white/20 transition-transform group-hover:scale-110"
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>
          <span className="text-[10px] font-mono text-zinc-400">
            {outfit.silhouette} Cut · {outfit.budget}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2.5 pt-2">
          <button
            onClick={() => onViewCompleteLook(outfit)}
            className="w-full py-3 px-3 rounded-xl bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-[#d4af37] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>3D Studio</span>
          </button>

          <button
            onClick={() => onGenerateSimilar(outfit)}
            className="w-full py-3 px-3 rounded-xl bg-white/5 border border-white/15 text-zinc-300 hover:text-white hover:border-[#d4af37] text-xs font-mono tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer hover:bg-white/10"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Similar</span>
          </button>
        </div>
      </div>
    </article>
  );
};
