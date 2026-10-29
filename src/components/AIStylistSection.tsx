import React, { useState } from 'react';
import { Sparkles, RefreshCw, Wand2, ArrowRight, Sliders, CheckCircle2, ChevronRight } from 'lucide-react';
import { Outfit, StylistPreferences, OccasionType, StyleType, ColorPreference, ClothingPreference, WeatherType, BudgetType, BodyFitType } from '../types/fashion';
import { OCCASIONS, STYLES, COLOR_OPTIONS, CLOTHING_PREFERENCES, WEATHERS, BUDGETS, BODY_FITS } from '../data/styleOptions';
import { LoadingAnimation } from './LoadingAnimation';
import { OutfitRecommendationCard } from './OutfitRecommendationCard';

interface AIStylistSectionProps {
  preferences: StylistPreferences;
  setPreferences: React.Dispatch<React.SetStateAction<StylistPreferences>>;
  isAnalyzing: boolean;
  analysisStep: string;
  analysisStepIndex: number;
  hasGenerated: boolean;
  topRecommendations: Outfit[];
  currentRecommendation: Outfit;
  onGenerateLook: (prefs?: StylistPreferences) => void;
  onGenerateNextLook: () => void;
  onViewCompleteLook: (outfit: Outfit) => void;
  onToggleSave: (outfit: Outfit) => void;
  savedIds: string[];
}

export const AIStylistSection: React.FC<AIStylistSectionProps> = ({
  preferences,
  setPreferences,
  isAnalyzing,
  analysisStep,
  analysisStepIndex,
  hasGenerated,
  topRecommendations,
  currentRecommendation,
  onGenerateLook,
  onGenerateNextLook,
  onViewCompleteLook,
  onToggleSave,
  savedIds,
}) => {
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};

    if (!preferences.occasion) errors.occasion = 'Please select your target occasion';
    if (!preferences.style) errors.style = 'Please choose an aesthetic style direction';
    if (!preferences.preferredColor) errors.preferredColor = 'Select your preferred palette';
    if (!preferences.clothingPreference) errors.clothingPreference = 'Choose a focal garment';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    onGenerateLook();
  };

  return (
    <section id="ai-stylist" className="relative w-full py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#08080a] border-t border-white/5">
      {/* Background ambient gold aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#d4af37]/6 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#d4af37] font-mono tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Neural Styling Studio</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-editorial tracking-tight text-white uppercase">
            YOUR STYLE. <span className="italic text-gold-gradient font-light font-serif">REIMAGINED.</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-light max-w-xl mx-auto">
            Tell us the occasion. Choose your mood. Discover a bespoke Haute Couture look calibrated by intelligent sartorial algorithms.
          </p>
        </div>

        {/* Two-Column Studio Layout: Form on Left, Output on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form (7 Cols) */}
          <div className="lg:col-span-7 glass-panel-gold rounded-3xl p-6 sm:p-8 gold-glow border border-[#d4af37]/25">
            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              {/* Field 1: Occasion */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-[#d4af37] mb-2.5">
                  01 // Where are you dressing for?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {OCCASIONS.map((item) => (
                    <button
                      type="button"
                      key={item.value}
                      onClick={() => {
                        setPreferences((prev) => ({ ...prev, occasion: item.value }));
                        setFormErrors((prev) => ({ ...prev, occasion: '' }));
                      }}
                      className={`p-3.5 rounded-2xl border text-left transition-all ${
                        preferences.occasion === item.value
                          ? 'bg-[#d4af37]/20 border-[#d4af37] text-white shadow-lg shadow-[#d4af37]/15 scale-[1.02]'
                          : 'bg-white/[0.02] border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
                      }`}
                    >
                      <span className="text-xs font-medium block text-white">{item.label}</span>
                      <span className="text-[10px] text-zinc-500 font-light block line-clamp-1 mt-0.5">
                        {item.sublabel}
                      </span>
                    </button>
                  ))}
                </div>
                {formErrors.occasion && (
                  <p className="text-rose-400 text-xs mt-1 font-mono">{formErrors.occasion}</p>
                )}
              </div>

              {/* Field 2: Aesthetic Style Direction */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-[#d4af37] mb-2.5">
                  02 // Choose your signature aesthetic
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {STYLES.map((item) => (
                    <button
                      type="button"
                      key={item.value}
                      onClick={() => {
                        setPreferences((prev) => ({ ...prev, style: item.value }));
                        setFormErrors((prev) => ({ ...prev, style: '' }));
                      }}
                      className={`p-3.5 rounded-2xl border text-left transition-all ${
                        preferences.style === item.value
                          ? 'bg-[#d4af37]/20 border-[#d4af37] text-white shadow-lg shadow-[#d4af37]/15 scale-[1.02]'
                          : 'bg-white/[0.02] border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
                      }`}
                    >
                      <span className="text-xs font-medium block text-white">{item.label}</span>
                      <span className="text-[10px] text-zinc-500 font-light block line-clamp-1 mt-0.5">
                        {item.sublabel}
                      </span>
                    </button>
                  ))}
                </div>
                {formErrors.style && (
                  <p className="text-rose-400 text-xs mt-1 font-mono">{formErrors.style}</p>
                )}
              </div>

              {/* Field 3: Color Palette Swatches */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-[#d4af37] mb-2.5">
                  03 // Chromatic Palette Direction
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {COLOR_OPTIONS.map((item) => (
                    <button
                      type="button"
                      key={item.value}
                      onClick={() => {
                        setPreferences((prev) => ({ ...prev, preferredColor: item.value }));
                        setFormErrors((prev) => ({ ...prev, preferredColor: '' }));
                      }}
                      className={`px-3.5 py-2.5 rounded-xl border flex items-center gap-2.5 transition-all ${
                        preferences.preferredColor === item.value
                          ? 'bg-white/15 border-[#d4af37] text-white scale-105 shadow-md shadow-[#d4af37]/15'
                          : 'bg-white/[0.02] border-white/10 text-zinc-400 hover:border-white/20'
                      }`}
                    >
                      <span
                        className="w-4 h-4 rounded-full border border-white/30 shrink-0"
                        style={{ backgroundColor: item.hex }}
                      />
                      <span className="text-xs font-mono">{item.label}</span>
                    </button>
                  ))}
                </div>
                {formErrors.preferredColor && (
                  <p className="text-rose-400 text-xs mt-1 font-mono">{formErrors.preferredColor}</p>
                )}
              </div>

              {/* Field 4 & 5: Clothing Focal Piece & Climate */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#d4af37] mb-2">
                    04 // Focal Clothing Piece
                  </label>
                  <select
                    value={preferences.clothingPreference}
                    onChange={(e) =>
                      setPreferences((prev) => ({
                        ...prev,
                        clothingPreference: e.target.value as ClothingPreference,
                      }))
                    }
                    className="w-full bg-[#121216] border border-white/15 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  >
                    {CLOTHING_PREFERENCES.map((c) => (
                      <option key={c.value} value={c.value}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#d4af37] mb-2">
                    05 // Climate & Temperature
                  </label>
                  <select
                    value={preferences.weather}
                    onChange={(e) =>
                      setPreferences((prev) => ({
                        ...prev,
                        weather: e.target.value as WeatherType,
                      }))
                    }
                    className="w-full bg-[#121216] border border-white/15 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  >
                    {WEATHERS.map((w) => (
                      <option key={w.value} value={w.value}>
                        {w.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Field 6 & 7: Budget Tier & Silhouette Cut */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#d4af37] mb-2">
                    06 // Wardrobe Tier
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {BUDGETS.map((b) => (
                      <button
                        type="button"
                        key={b.value}
                        onClick={() =>
                          setPreferences((prev) => ({ ...prev, budget: b.value }))
                        }
                        className={`py-2.5 px-1 text-center rounded-xl border text-[11px] font-mono transition-all ${
                          preferences.budget === b.value
                            ? 'bg-[#d4af37] text-black font-semibold shadow-md shadow-[#d4af37]/20'
                            : 'bg-white/[0.02] border-white/10 text-zinc-400 hover:text-white'
                        }`}
                      >
                        {b.value}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#d4af37] mb-2">
                    07 // Preferred Silhouette Cut
                  </label>
                  <div className="grid grid-cols-4 gap-1.5">
                    {BODY_FITS.map((f) => (
                      <button
                        type="button"
                        key={f.value}
                        onClick={() =>
                          setPreferences((prev) => ({ ...prev, bodyFit: f.value }))
                        }
                        className={`py-2.5 px-1 text-center rounded-xl border text-[10px] font-mono transition-all ${
                          preferences.bodyFit === f.value
                            ? 'bg-[#d4af37] text-black font-semibold shadow-md shadow-[#d4af37]/20'
                            : 'bg-white/[0.02] border-white/10 text-zinc-400 hover:text-white'
                        }`}
                      >
                        {f.value}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="submit"
                disabled={isAnalyzing}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#d4af37] via-[#f7f0df] to-[#d4af37] text-black font-semibold text-xs tracking-widest uppercase hover:shadow-2xl hover:shadow-[#d4af37]/30 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Sparkles className="w-4 h-4 transition-transform group-hover:rotate-12" />
                <span className="font-bold">Generate My Tailored Look</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>

          {/* Right Output: Loading State, Empty State, or Curated Look Result (5 Cols) */}
          <div className="lg:col-span-5 w-full">
            {isAnalyzing ? (
              <LoadingAnimation
                currentStage={analysisStep}
                stepIndex={analysisStepIndex}
                totalSteps={5}
              />
            ) : !hasGenerated ? (
              /* Polished Initial State Before Generation */
              <div className="glass-panel rounded-3xl p-8 border border-white/10 text-center flex flex-col items-center justify-center min-h-[540px]">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-5 text-[#d4af37]">
                  <Wand2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-editorial text-white tracking-tight mb-2">
                  Awaiting Your Style Parameters
                </h3>
                <p className="text-xs text-zinc-400 font-light max-w-sm mb-6 leading-relaxed">
                  Configure your preferences on the left and tap Generate. The Neural Stylist will calibrate textile weight, harmony, and occasion tailoring into an interactive 3D look.
                </p>
                <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] bg-white/5 px-4 py-2 rounded-full border border-[#d4af37]/20">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Deterministic Sizing & Tone Matching</span>
                </div>
              </div>
            ) : (
              /* Generated Outfit Showcase */
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between px-2">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4af37] block">
                      Curated For You
                    </span>
                    <h4 className="text-2xl font-editorial text-white">Recommended Ensemble</h4>
                  </div>

                  {/* Re-roll / Generate New Look Button */}
                  <button
                    onClick={onGenerateNextLook}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/15 hover:border-[#d4af37] text-xs font-mono text-white flex items-center gap-2 transition-all hover:bg-white/10"
                    title="Generate alternative look with current preferences"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Generate New Look</span>
                  </button>
                </div>

                <OutfitRecommendationCard
                  outfit={currentRecommendation}
                  index={0}
                  onViewCompleteLook={onViewCompleteLook}
                  onGenerateSimilar={onGenerateNextLook}
                  onToggleSave={onToggleSave}
                  isSaved={savedIds.includes(currentRecommendation.id)}
                />

                {/* Subtext info */}
                <p className="text-[11px] text-zinc-500 font-mono text-center">
                  Calibrated for {preferences.occasion} · {preferences.style} aesthetic · {preferences.weather} weather
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Shortlist Recommendations Carousel if Generated */}
        {hasGenerated && topRecommendations.length > 1 && (
          <div className="mt-20 pt-12 border-t border-white/10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37]">
                  Alternative Harmonizations
                </span>
                <h3 className="text-3xl font-editorial text-white tracking-tight">
                  More Looks Matching Your Profile
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {topRecommendations.map((outfit, idx) => (
                <OutfitRecommendationCard
                  key={outfit.id}
                  outfit={outfit}
                  index={idx}
                  onViewCompleteLook={onViewCompleteLook}
                  onGenerateSimilar={onGenerateNextLook}
                  onToggleSave={onToggleSave}
                  isSaved={savedIds.includes(outfit.id)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
