import React from 'react';

const MARQUEE_ITEMS = [
  'HAUTE COUTURE SS26',
  '•',
  'NEURAL SILHOUETTE SYNTHESIS',
  '•',
  'PARIS · MILAN · LONDON · TOKYO',
  '•',
  'SAVILE ROW ARCHITECTURE',
  '•',
  'CINEMATIC 3D ATELIER',
  '•',
  'PURE TEXTILE PRECISION',
  '•',
  'VELOURA COUTURE INTELLIGENCE',
  '•',
];

export const LuxuryEditorialMarquee: React.FC = () => {
  return (
    <div className="w-full bg-[#050507] border-y border-white/10 py-4 overflow-hidden relative select-none">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050507] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050507] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-editorial-marquee">
        {/* Loop twice for continuous infinite scroll */}
        {[0, 1].map((copyIndex) => (
          <div key={copyIndex} className="flex items-center gap-8 px-4 shrink-0">
            {MARQUEE_ITEMS.map((item, idx) => (
              <span
                key={`${copyIndex}-${idx}`}
                className={`text-xs sm:text-sm font-mono tracking-[0.3em] uppercase ${
                  item === '•'
                    ? 'text-[#d4af37] text-base animate-pulse'
                    : 'text-zinc-400 font-light hover:text-white transition-colors'
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
