import React, { useState, useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eye, Bookmark, ArrowRight, Compass, Sparkles } from 'lucide-react';
import { OUTFITS } from '../data/outfits';
import { Outfit } from '../types/fashion';
import { ScrollSequence3DCanvas } from './ScrollSequence3DCanvas';

gsap.registerPlugin(ScrollTrigger);

interface ScrollFashionSequenceProps {
  onSelectOutfit: (outfit: Outfit) => void;
  onToggleSave: (outfit: Outfit) => void;
  onRegisterCollectionNavigation: (navigate: (index: number) => void) => void;
  savedIds: string[];
}

export const ScrollFashionSequence: React.FC<ScrollFashionSequenceProps> = ({
  onSelectOutfit,
  onToggleSave,
  onRegisterCollectionNavigation,
  savedIds,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [activeScene, setActiveScene] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);

  // Filter the 7 feature outfits corresponding to scenes 1 through 7
  const sceneOutfits = OUTFITS.filter((o) => o.featuredScene !== undefined).sort(
    (a, b) => (a.featuredScene || 0) - (b.featuredScene || 0)
  );

  const sceneTitles = [
    '01 / The Floating Jacket',
    '02 / Casual Essentials',
    '03 / Neo-Streetwear',
    '04 / Formal Elegance',
    '05 / Party & Evening',
    '06 / Traditional Style',
    '07 / Seasonal Collection',
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.6,
        onUpdate: (self) => {
          const progress = self.progress;
          setScrollProgress(progress);
          const rawScene = progress * (sceneOutfits.length - 1);
          const sceneIndex = Math.min(Math.floor(rawScene), sceneOutfits.length - 1);
          const localProgress = rawScene - sceneIndex;

          setActiveScene((prev) => {
            if (prev !== sceneIndex && cardRef.current) {
              // Smooth luxury card glide animation when scene changes
              gsap.fromTo(
                cardRef.current,
                { opacity: 0.7, y: 18, scale: 0.985 },
                { opacity: 1, y: 0, scale: 1, duration: 0.65, ease: 'power2.out' }
              );
            }
            return sceneIndex;
          });
          setSceneProgress(localProgress);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [sceneOutfits.length]);

  const currentOutfit = sceneOutfits[activeScene] || sceneOutfits[0];
  const isSaved = currentOutfit ? savedIds.includes(currentOutfit.id) : false;

  const scrollToScene = useCallback((index: number) => {
    if (!containerRef.current) return;
    const sceneElements = containerRef.current.querySelectorAll('.scene-milestone');
    if (sceneElements[index]) {
      sceneElements[index].scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    onRegisterCollectionNavigation(scrollToScene);
    return () => onRegisterCollectionNavigation(() => {});
  }, [onRegisterCollectionNavigation, scrollToScene]);

  return (
    <section
      id="garment-sequence"
      ref={containerRef}
      className="relative w-full scroll-mt-16 bg-[#08080a] text-[#f7f5f0]"
    >
      {/* Editorial Section Anchor Heading */}
      <div className="pt-14 sm:pt-20 pb-10 px-6 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#d4af37] font-mono tracking-widest uppercase mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Cinematic Runway Journey · 07 Pinned Acts</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-editorial tracking-tight">
            Fashion in Motion. <br />
            <span className="italic text-gold-gradient font-light font-serif">Every Outfit Comes Alive.</span>
          </h2>
        </div>
        <p className="max-w-md text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
          Scroll through seven bespoke editorial silhouettes. Each look transitions seamlessly with real-time 3D ambient space, textile breakdown, and curated accessory pairings.
        </p>
      </div>

      {/* Sticky Runway Stage: left 3D/editorial canvas, right outfit details panel */}
      <div className="sticky top-0 lg:top-[66px] h-screen lg:h-[calc(100vh-66px)] w-full overflow-hidden flex flex-col lg:flex-row pointer-events-none z-10">
        {/* Editorial look photograph with 3D overlay */}
        <div className="w-full lg:w-7/12 h-[46vh] lg:h-full relative pointer-events-auto">
          <ScrollSequence3DCanvas
            currentScene={activeScene}
            scrollProgress={scrollProgress}
            sceneProgress={sceneProgress}
            image={currentOutfit.image}
            imageAlt={`${currentOutfit.name} fashion editorial photograph`}
          />

          {/* Floating Runway Watermark */}
          <div className="absolute top-8 left-8 hidden sm:flex items-center gap-3 text-xs font-mono text-zinc-300 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/15">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping" />
            <span>LOOKBOOK FRAME {String(activeScene + 1).padStart(2, '0')} / 07</span>
          </div>

          {/* Quick Scene Jump Navigation Pills */}
          <div className="absolute bottom-6 inset-x-6 hidden md:flex items-center justify-center gap-2 overflow-x-auto py-2 px-3 bg-black/60 backdrop-blur-md rounded-full border border-white/15 max-w-max mx-auto shadow-2xl">
            {sceneTitles.map((title, i) => (
              <button
                key={i}
                onClick={() => scrollToScene(i)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-300 ${
                  activeScene === i
                    ? 'bg-[#d4af37] text-black font-semibold shadow-lg shadow-[#d4af37]/30 scale-105'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                0{i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Content Floating Panel */}
        <div className="w-full lg:w-5/12 h-[54vh] lg:h-full flex items-center justify-center px-4 sm:px-8 py-6 pointer-events-auto overflow-y-auto">
          <div
            ref={cardRef}
            className="w-full max-w-xl glass-panel-gold rounded-3xl p-6 sm:p-8 relative gold-glow-lg transition-all duration-500 border border-[#d4af37]/30"
          >
            {/* Top Scene Marker */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-mono">
                {currentOutfit.label}
              </span>
              <span className="text-xs font-mono text-zinc-400">
                SCENE 0{activeScene + 1} OF 07
              </span>
            </div>

            {/* Garment Title & Description */}
            <h3 className="text-3xl sm:text-4xl font-editorial tracking-tight mb-2 text-white">
              {currentOutfit.name}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mb-5 font-sans">
              {currentOutfit.description}
            </p>

            {/* Assembled Garment Breakdown */}
            <div className="space-y-2 mb-6">
              <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-mono block">
                Assembled Key Elements:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {currentOutfit.garments.slice(0, 4).map((g) => (
                  <div
                    key={g.id}
                    className="p-3 rounded-xl bg-black/50 border border-white/10 flex flex-col justify-between hover:border-white/25 transition-colors"
                  >
                    <span className="text-[10px] text-zinc-400 uppercase tracking-wider font-mono">
                      {g.type}
                    </span>
                    <span className="text-xs font-medium text-white line-clamp-1">{g.name}</span>
                    <span className="text-[10px] text-[#d4af37] font-light">{g.material}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Color Swatches & Notes */}
            <div className="flex items-center justify-between pt-2 pb-5 border-t border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-zinc-400">Palette:</span>
                <div className="flex gap-1.5">
                  {currentOutfit.colorPalette.map((c) => (
                    <span
                      key={c.name}
                      title={`${c.name} (${c.hex})`}
                      className="w-4 h-4 rounded-full border border-white/25 transition-transform hover:scale-125"
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </div>

              <span className="text-[11px] text-zinc-400 font-mono">
                {currentOutfit.weatherSuitability.join(' · ')}
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => onSelectOutfit(currentOutfit)}
                className="flex-1 py-3.5 px-4 rounded-xl bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-[#d4af37] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer shadow-lg hover:shadow-[#d4af37]/25"
              >
                <Eye className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>Inspect in 3D Studio</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onToggleSave(currentOutfit)}
                aria-label={isSaved ? 'Remove from saved' : 'Save this look'}
                className={`p-3.5 rounded-xl border transition-all duration-300 cursor-pointer ${
                  isSaved
                    ? 'bg-[#d4af37] text-black border-[#d4af37]'
                    : 'bg-white/5 border-white/15 text-white hover:border-[#d4af37]'
                }`}
              >
                <Bookmark className="w-4 h-4 fill-current" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pinned distance spacers (Distance for 7 scenes) */}
      <div className="relative pointer-events-none">
        {sceneOutfits.map((outfit, index) => (
          <div
            key={outfit.id}
            className="scene-milestone h-[115vh] w-full flex items-center justify-center opacity-0"
            aria-hidden="true"
          >
            <span className="text-zinc-800 text-6xl font-mono">SCENE 0{index + 1}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
