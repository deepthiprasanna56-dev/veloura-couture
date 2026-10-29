import React, { useState } from 'react';
import { Palette, Sparkles, Copy, Check } from 'lucide-react';
import { COLOR_STORIES } from '../data/colorStories';
import { Outfit } from '../types/fashion';

interface ColorStoriesSectionProps {
  onSelectOutfit: (outfit: Outfit) => void;
  outfits: Outfit[];
}

export const ColorStoriesSection: React.FC<ColorStoriesSectionProps> = ({
  onSelectOutfit,
  outfits,
}) => {
  const [activeStoryId, setActiveStoryId] = useState(COLOR_STORIES[0].id);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const activeStory = COLOR_STORIES.find((s) => s.id === activeStoryId) || COLOR_STORIES[0];

  const handleCopyHex = (hex: string) => {
    navigator.clipboard?.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1500);
  };

  const matchingOutfits = outfits.filter((o) => activeStory.suggestedLookIds.includes(o.id));

  return (
    <section id="color-stories" className="w-full py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#08080a] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#d4af37] font-mono tracking-widest uppercase mb-4">
              <Palette className="w-3.5 h-3.5" />
              <span>Chromatic Harmonization</span>
            </div>
            <h2 className="text-5xl sm:text-7xl font-impact tracking-normal uppercase text-white leading-none">
              COLOR <span className="font-editorial italic font-light text-gold-gradient tracking-tight">STORIES</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Coordinated tonal palettes calibrated to enhance mood, skin undertone, and fabric luminescence.
          </p>
        </div>

        {/* Stories Navigation Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {COLOR_STORIES.map((story) => (
            <button
              key={story.id}
              onClick={() => setActiveStoryId(story.id)}
              className={`px-5 py-3 rounded-2xl border text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-3 cursor-pointer ${
                activeStoryId === story.id
                  ? 'bg-[#d4af37] text-black border-[#d4af37] font-semibold scale-105 shadow-xl shadow-[#d4af37]/25'
                  : 'bg-white/[0.03] border-white/10 text-zinc-400 hover:text-white hover:border-white/25'
              }`}
            >
              <span>{story.title}</span>
            </button>
          ))}
        </div>

        {/* Active Color Story Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-panel-gold rounded-3xl p-6 sm:p-10 border border-[#d4af37]/25 mb-10 shadow-2xl">
          {/* Left Swatches (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono text-[#d4af37] uppercase tracking-widest block mb-1">
                {activeStory.season}
              </span>
              <h3 className="text-3xl sm:text-4xl font-editorial text-white">{activeStory.title}</h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-light mt-2 leading-relaxed">
                {activeStory.description}
              </p>
            </div>

            {/* Interactive Swatches with Copy Hex */}
            <div className="space-y-2.5 pt-2">
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                Click swatch to copy HEX code:
              </span>
              <div className="grid grid-cols-2 gap-2.5">
                {activeStory.palette.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => handleCopyHex(c.hex)}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-black/50 border border-white/10 hover:border-[#d4af37] transition-all text-left group cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="w-5 h-5 rounded-full border border-white/20 shrink-0"
                        style={{ backgroundColor: c.hex }}
                      />
                      <div>
                        <span className="text-xs text-white block group-hover:text-[#d4af37]">
                          {c.name}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-400">{c.hex}</span>
                      </div>
                    </div>
                    {copiedHex === c.hex ? (
                      <Check className="w-3.5 h-3.5 text-[#d4af37]" />
                    ) : (
                      <Copy className="w-3 h-3 text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Editorial Image (7 Cols) */}
          <div className="lg:col-span-7 aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl">
            <img
              src={activeStory.editorialImage}
              alt={activeStory.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Matching Curated Looks from this Color Story */}
        {matchingOutfits.length > 0 && (
          <div className="space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37] block">
              Looks Built From This Story:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {matchingOutfits.map((outfit) => (
                <div
                  key={outfit.id}
                  onClick={() => onSelectOutfit(outfit)}
                  className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-[#d4af37]/50 cursor-pointer flex items-center gap-5 transition-all shadow-lg"
                >
                  <img
                    src={outfit.image}
                    alt={outfit.name}
                    className="w-20 h-24 object-cover rounded-xl shrink-0"
                  />
                  <div>
                    <span className="text-[10px] font-mono text-[#d4af37] uppercase block">
                      {outfit.category}
                    </span>
                    <h4 className="text-xl font-editorial text-white">{outfit.name}</h4>
                    <p className="text-xs text-zinc-400 font-light line-clamp-1 mt-1">
                      {outfit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
