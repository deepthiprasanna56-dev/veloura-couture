import React from 'react';
import { Sparkles } from 'lucide-react';

interface LoadingAnimationProps {
  currentStage: string;
  stepIndex: number;
  totalSteps: number;
}

export const LoadingAnimation: React.FC<LoadingAnimationProps> = ({
  currentStage,
  stepIndex,
  totalSteps,
}) => {
  const percentage = Math.round(((stepIndex + 1) / totalSteps) * 100);

  return (
    <div className="w-full py-16 px-6 glass-panel-gold rounded-3xl flex flex-col items-center justify-center text-center gold-glow animate-fadeIn">
      {/* Central 3D Halo Spinner */}
      <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
        {/* Outer glowing ring */}
        <div className="absolute inset-0 rounded-full border-2 border-[#d4af37]/20 border-t-[#d4af37] animate-spin" />
        {/* Counter-rotating ring */}
        <div
          className="absolute inset-2 rounded-full border border-white/20 border-b-[#f7f0df] animate-spin"
          style={{ animationDirection: 'reverse', animationDuration: '2s' }}
        />
        {/* Center Sparkle */}
        <Sparkles className="w-8 h-8 text-[#d4af37] animate-pulse" />
      </div>

      <div className="max-w-md space-y-3">
        <span className="text-xs uppercase tracking-widest text-[#d4af37] font-mono">
          ATELIER NEURAL STYLING ENGINE // {percentage}%
        </span>
        <h4 className="text-xl sm:text-2xl font-serif text-white tracking-tight">
          {currentStage}
        </h4>
        <p className="text-xs text-zinc-400 font-light">
          Synthesizing Savile Row tailoring principles with contemporary silhouette proportions.
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden mt-6">
          <div
            className="h-full bg-gradient-to-r from-[#d4af37] to-[#f7f0df] transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};
