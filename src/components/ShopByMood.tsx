import React, { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { MoodType, Outfit } from '../types/fashion';
import { MOODS } from '../data/styleOptions';

interface ShopByMoodProps {
  onSelectOutfit: (outfit: Outfit) => void;
  outfits: Outfit[];
}

const MOOD_METADATA: Record<MoodType, { tag: string; description: string; previewColor: string }> = {
  Minimalist: {
    tag: 'PURE SILHOUETTES',
    description: 'Clean geometry, zero superficial hardware, pristine monochrome harmony.',
    previewColor: '#e8e5de',
  },
  Effortless: {
    tag: 'RELAXED ELEGANCE',
    description: 'Slub flax linens, unbuttoned popovers, and warm Riviera sunshine.',
    previewColor: '#85927c',
  },
  Bold: {
    tag: 'HIGH-CONTRAST IMPACT',
    description: 'Liquid silk-velvet, molten gold, dramatic shoulder lines, and after-hours intrigue.',
    previewColor: '#d4af37',
  },
  Sophisticated: {
    tag: 'SAVILE ROW MASTERY',
    description: 'Bespoke double-breasted tailoring, hand-rolled silks, and heirloom watches.',
    previewColor: '#181f33',
  },
  Sporty: {
    tag: 'ATHLETIC TECHNICAL',
    description: 'Dynamic movement, water-resistant bonded ripstop, and ergonomic cuts.',
    previewColor: '#525763',
  },
  Experimental: {
    tag: 'AVANT-GARDE PROPORTIONS',
    description: 'Exaggerated volumes, modular cargo construction, and neo-futuristic vibes.',
    previewColor: '#ff5e3a',
  },
};

export const ShopByMood: React.FC<ShopByMoodProps> = ({ onSelectOutfit, outfits }) => {
  const [selectedMood, setSelectedMood] = useState<MoodType>('Sophisticated');

  const filteredOutfits = outfits.filter((o) => o.mood === selectedMood);

  return (
    <section id="moods" className="w-full py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0a0e] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#d4af37] block mb-2">
              Sartorial Emotionality
            </span>
            <h2 className="text-5xl sm:text-7xl font-impact tracking-normal uppercase text-white leading-none">
              SHOP BY <span className="font-editorial italic font-light text-gold-gradient tracking-tight">MOOD</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Dress according to how you wish to feel. Explore intentional atmospheres tailored from quiet minimalism to unapologetic drama.
          </p>
        </div>

        {/* Mood Selector Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {MOODS.map((mood) => {
            const isSelected = selectedMood === mood;
            const meta = MOOD_METADATA[mood];

            return (
              <button
                key={mood}
                onClick={() => setSelectedMood(mood)}
                className={`px-5 py-3 rounded-2xl border text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-3 cursor-pointer ${
                  isSelected
                    ? 'bg-[#d4af37] text-black border-[#d4af37] font-semibold scale-105 shadow-xl shadow-[#d4af37]/25'
                    : 'bg-white/[0.03] border-white/10 text-zinc-400 hover:text-white hover:border-white/25'
                }`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: meta.previewColor }}
                />
                <span>{mood}</span>
              </button>
            );
          })}
        </div>

        {/* Mood Descriptor Card */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-white/10">
          <div>
            <span className="text-[11px] font-mono text-[#d4af37] uppercase tracking-widest block mb-1">
              {MOOD_METADATA[selectedMood].tag}
            </span>
            <h3 className="text-2xl sm:text-3xl font-editorial text-white">{selectedMood} State of Mind</h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-light mt-1">
              {MOOD_METADATA[selectedMood].description}
            </p>
          </div>
          <span className="text-xs font-mono text-zinc-400 bg-white/5 px-4 py-2 rounded-full border border-white/10 whitespace-nowrap">
            {filteredOutfits.length} Curated Looks Available
          </span>
        </div>

        {/* Mood Outfit Showcase Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOutfits.map((outfit) => (
            <div
              key={outfit.id}
              onClick={() => onSelectOutfit(outfit)}
              className="group glass-panel-gold rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#d4af37]/60 transition-all duration-700 flex flex-col justify-between shadow-xl"
            >
              <div className="aspect-[4/5] relative overflow-hidden bg-zinc-900">
                <img
                  src={outfit.image}
                  alt={outfit.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/65 backdrop-blur-md text-[10px] font-mono text-[#d4af37] uppercase border border-white/10">
                  {outfit.category}
                </span>
              </div>

              <div className="p-6 space-y-3">
                <h4 className="text-2xl font-editorial text-white group-hover:text-[#d4af37] transition-colors">
                  {outfit.name}
                </h4>
                <p className="text-xs text-zinc-400 font-light line-clamp-2 leading-relaxed">
                  {outfit.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs">
                  <span className="font-mono text-zinc-400">{outfit.silhouette} Cut</span>
                  <span className="text-[#d4af37] font-medium flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
                    Inspect in 3D <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
