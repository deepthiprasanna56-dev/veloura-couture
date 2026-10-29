import React, { useState } from 'react';
import { Eye, Bookmark, Sparkles, SlidersHorizontal, Layers, Check } from 'lucide-react';
import { Outfit } from '../types/fashion';

interface InteractiveRunwayShowcaseProps {
  outfits: Outfit[];
  onSelectOutfit: (outfit: Outfit) => void;
  onToggleSave: (outfit: Outfit) => void;
  savedIds: string[];
}

export const InteractiveRunwayShowcase: React.FC<InteractiveRunwayShowcaseProps> = ({
  outfits,
  onSelectOutfit,
  onToggleSave,
  savedIds,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentLook = outfits[selectedIndex] || outfits[0];
  const isSaved = savedIds.includes(currentLook.id);

  return (
    <section className="w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#060608] border-t border-white/5 relative overflow-hidden">
      {/* Background Studio Light Beams */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#d4af37] font-mono tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Wardrobe Mixer</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-impact tracking-normal uppercase text-white leading-none">
              RUNWAY <span className="font-editorial italic font-light text-gold-gradient tracking-tight">LOOKBOOK</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-400 font-light leading-relaxed">
            Click through our signature runway looks below to examine fabric composition, palette harmony, and layer breakdown in real time.
          </p>
        </div>

        {/* Main Stage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-panel-gold rounded-3xl p-6 sm:p-10 border border-[#d4af37]/25 shadow-2xl">
          {/* Left: Featured Large Editorial Photography (7 Cols) */}
          <div className="lg:col-span-7 relative aspect-[4/5] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 group shadow-2xl">
            <img
              key={currentLook.id}
              src={currentLook.image}
              alt={currentLook.name}
              className="w-full h-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

            {/* Top Floating Badge */}
            <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
              <span className="px-3.5 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-[10px] font-mono uppercase tracking-widest text-[#d4af37]">
                {currentLook.category} · {currentLook.mood}
              </span>

              <button
                onClick={() => onToggleSave(currentLook)}
                className={`p-2.5 rounded-full backdrop-blur-md border transition-all cursor-pointer ${
                  isSaved
                    ? 'bg-[#d4af37] text-black border-[#d4af37]'
                    : 'bg-black/65 border-white/20 text-white hover:text-[#d4af37]'
                }`}
                aria-label="Save outfit"
              >
                <Bookmark className="w-4 h-4 fill-current" />
              </button>
            </div>

            {/* Bottom Overlay Label */}
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-1">
                {currentLook.label}
              </span>
              <h3 className="text-3xl sm:text-4xl font-editorial text-white tracking-tight">
                {currentLook.name}
              </h3>
            </div>
          </div>

          {/* Right: Detailed Specification & Interactive Wardrobe Breakdown (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-mono block mb-2">
                Silhouette Blueprint:
              </span>
              <h4 className="text-2xl font-editorial text-white mb-2">{currentLook.name}</h4>
              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                {currentLook.description}
              </p>
            </div>

            {/* Assembled Garment Breakdown */}
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-mono block">
                Garment Layers:
              </span>
              <div className="space-y-2">
                {currentLook.garments.slice(0, 3).map((g) => (
                  <div
                    key={g.id}
                    className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between"
                  >
                    <div>
                      <span className="text-xs font-medium text-white block">{g.name}</span>
                      <span className="text-[10px] text-zinc-400 font-light">{g.material}</span>
                    </div>
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-white/30 shrink-0"
                      style={{ backgroundColor: g.colorHex }}
                      title={g.colorName}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Color Palette */}
            <div>
              <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-mono block mb-2">
                Chromatic Harmony:
              </span>
              <div className="flex gap-2">
                {currentLook.colorPalette.map((col) => (
                  <div
                    key={col.name}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/40 border border-white/10"
                  >
                    <span
                      className="w-3 h-3 rounded-full border border-white/20 shrink-0"
                      style={{ backgroundColor: col.hex }}
                    />
                    <span className="text-[10px] font-mono text-zinc-300">{col.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action */}
            <button
              onClick={() => onSelectOutfit(currentLook)}
              className="w-full py-4 rounded-2xl bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-[#d4af37] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-[#d4af37]/25"
            >
              <Eye className="w-4 h-4" />
              <span>Inspect in 3D Studio</span>
            </button>
          </div>
        </div>

        {/* Thumbnail Selector Strip */}
        <div className="mt-8 flex gap-3 overflow-x-auto pb-4 pt-2">
          {outfits.map((outfit, idx) => (
            <button
              key={outfit.id}
              onClick={() => setSelectedIndex(idx)}
              className={`flex items-center gap-3 p-2.5 rounded-2xl border transition-all shrink-0 cursor-pointer ${
                selectedIndex === idx
                  ? 'bg-white/15 border-[#d4af37] scale-105 shadow-lg shadow-[#d4af37]/20'
                  : 'bg-white/[0.02] border-white/10 opacity-70 hover:opacity-100 hover:border-white/25'
              }`}
            >
              <img
                src={outfit.image}
                alt={outfit.name}
                className="w-12 h-14 object-cover rounded-xl"
              />
              <div className="text-left pr-2">
                <span className="text-[10px] font-mono text-[#d4af37] block">0{idx + 1}</span>
                <span className="text-xs font-medium text-white block truncate max-w-[120px]">
                  {outfit.name}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
