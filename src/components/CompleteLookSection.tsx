import React, { useState } from 'react';
import { Layers, Sparkles, Check, ArrowRight, Eye, ShieldCheck } from 'lucide-react';
import { Outfit } from '../types/fashion';

interface CompleteLookSectionProps {
  outfit: Outfit;
  onOpenViewer: (outfit: Outfit) => void;
}

export const CompleteLookSection: React.FC<CompleteLookSectionProps> = ({
  outfit,
  onOpenViewer,
}) => {
  const [selectedGarmentId, setSelectedGarmentId] = useState<string>(
    outfit.garments[0]?.id || ''
  );
  const [isAssembled, setIsAssembled] = useState(true);

  const selectedGarment =
    outfit.garments.find((g) => g.id === selectedGarmentId) || outfit.garments[0];

  return (
    <section id="complete-look" className="w-full py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0a0d] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#d4af37] font-mono tracking-widest uppercase mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Anatomy of Style</span>
            </div>
            <h2 className="text-5xl sm:text-7xl font-impact tracking-normal uppercase text-white leading-none">
              THE COMPLETE <span className="font-editorial italic font-light text-gold-gradient tracking-tight">LOOK</span>
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsAssembled(!isAssembled)}
              className="px-5 py-3 rounded-2xl border border-white/15 bg-white/5 text-xs font-mono uppercase text-white hover:border-[#d4af37] transition-all cursor-pointer"
            >
              Mode: {isAssembled ? 'Coordinated Ensemble' : 'Exploded View'}
            </button>
            <button
              onClick={() => onOpenViewer(outfit)}
              className="px-5 py-3 rounded-2xl bg-[#d4af37] text-black font-semibold text-xs font-mono uppercase hover:bg-white transition-all flex items-center gap-2 shadow-lg shadow-[#d4af37]/20 cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Open 3D Studio</span>
            </button>
          </div>
        </div>

        {/* Interactive Anatomy Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-panel-gold rounded-3xl p-6 sm:p-10 border border-[#d4af37]/25 shadow-2xl">
          {/* Left: Interactive Pieces Selector (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-mono text-[#d4af37] uppercase tracking-widest block mb-2">
              Select Garment Component to Inspect:
            </span>

            {outfit.garments.map((g, idx) => {
              const isSelected = selectedGarment.id === g.id;
              return (
                <div
                  key={g.id}
                  onClick={() => setSelectedGarmentId(g.id)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? 'bg-white/10 border-[#d4af37] shadow-lg shadow-[#d4af37]/15 translate-x-2'
                      : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono uppercase text-[#d4af37]">
                      0{idx + 1} // {g.type}
                    </span>
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-white/30"
                      style={{ backgroundColor: g.colorHex }}
                    />
                  </div>
                  <h4 className="text-base font-editorial text-white">{g.name}</h4>
                  <p className="text-[11px] text-zinc-400 font-light mt-1">{g.material}</p>
                </div>
              );
            })}
          </div>

          {/* Right: Focused Garment Spotlight & Full Silhouette Display (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="relative aspect-[4/5] sm:aspect-[16/11] w-full rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 shadow-2xl">
              <img
                src={outfit.secondaryImage || outfit.image}
                alt={outfit.name}
                className={`w-full h-full object-cover transition-all duration-1000 ${
                  isAssembled ? 'scale-100 opacity-90' : 'scale-110 opacity-70 filter contrast-125'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Garment Focus Tag Pill */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel-gold border border-white/20">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono uppercase text-[#d4af37] font-semibold">
                    Spotlight: {selectedGarment.name}
                  </span>
                  <span className="text-xs font-mono text-zinc-300">{selectedGarment.colorName}</span>
                </div>
                <p className="text-xs text-zinc-300 font-light">{selectedGarment.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
