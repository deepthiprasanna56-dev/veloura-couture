import { useState, useCallback, useMemo } from 'react';
import { Outfit, StylistPreferences } from '../types/fashion';
import { OUTFITS } from '../data/outfits';

export const AI_ANALYSIS_STEPS = [
  'Scanning aesthetic parameters & silhouette...',
  'Evaluating textile drape & climate adaptability...',
  'Harmonizing chromatic palette with skin undertones...',
  'Curating high-jewelry & luxury accessories...',
  'Finalizing tailored Haute Couture ensemble...'
];

export function useOutfitRecommendations() {
  const [preferences, setPreferences] = useState<StylistPreferences>({
    occasion: 'Casual',
    style: 'Minimal',
    preferredColor: 'Beige',
    clothingPreference: 'Jackets',
    weather: 'Mild',
    budget: 'Premium',
    bodyFit: 'Relaxed'
  });

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStepIndex, setAnalysisStepIndex] = useState(0);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [activeLookIndex, setActiveLookIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);

  // Score outfits based on user preferences
  const rankedOutfits = useMemo(() => {
    return [...OUTFITS].map(outfit => {
      let score = 0;

      // Occasion match (weight: 35)
      if (outfit.occasions.includes(preferences.occasion)) {
        score += 35;
      }

      // Style match (weight: 30)
      if (outfit.styles.includes(preferences.style)) {
        score += 30;
      }

      // Weather suitability (weight: 20)
      if (outfit.weatherSuitability.includes(preferences.weather)) {
        score += 20;
      }

      // Silhouette match (weight: 15)
      if (outfit.silhouette === preferences.bodyFit) {
        score += 15;
      }

      // Budget match (weight: 10)
      if (outfit.budget === preferences.budget) {
        score += 10;
      }

      // Clothing preference match (weight: 15)
      const hasPreferredClothing = outfit.garments.some(g => {
        if (preferences.clothingPreference === 'Jackets' && (g.threeDType === 'jacket' || g.type === 'outerwear')) return true;
        if (preferences.clothingPreference === 'Shirts' && g.threeDType === 'shirt') return true;
        if (preferences.clothingPreference === 'T-shirts' && g.threeDType === 'shirt') return true;
        if (preferences.clothingPreference === 'Trousers' && g.threeDType === 'pants') return true;
        if (preferences.clothingPreference === 'Dresses' && (g.threeDType === 'dress' || g.threeDType === 'cape')) return true;
        if (preferences.clothingPreference === 'Traditional Wear' && (g.threeDType === 'cape' || outfit.category === 'Traditional')) return true;
        return false;
      });
      if (hasPreferredClothing) score += 15;

      return { outfit, score };
    }).sort((a, b) => b.score - a.score).map(item => item.outfit);
  }, [preferences]);

  // Current recommended look
  const currentRecommendation = useMemo(() => {
    if (!rankedOutfits.length) return OUTFITS[0];
    const index = activeLookIndex % rankedOutfits.length;
    return rankedOutfits[index];
  }, [rankedOutfits, activeLookIndex]);

  // Top recommendations list
  const topRecommendations = useMemo(() => {
    if (!rankedOutfits.length) return OUTFITS.slice(0, 3);
    const start = activeLookIndex % rankedOutfits.length;
    const rotated = [...rankedOutfits.slice(start), ...rankedOutfits.slice(0, start)];
    return rotated.slice(0, 3);
  }, [rankedOutfits, activeLookIndex]);

  // Generate look trigger with staged simulation
  const generateLook = useCallback((prefs?: StylistPreferences) => {
    if (prefs) setPreferences(prefs);
    setIsAnalyzing(true);
    setAnalysisStepIndex(0);
    setError(null);

    const stepInterval = 450;
    const totalSteps = AI_ANALYSIS_STEPS.length;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      if (step < totalSteps) {
        setAnalysisStepIndex(step);
      } else {
        clearInterval(timer);
        setIsAnalyzing(false);
        setHasGenerated(true);
        setActiveLookIndex(prev => prev + 1);
      }
    }, stepInterval);
  }, []);

  // Generate a different variation / new look
  const generateNextLook = useCallback(() => {
    setIsAnalyzing(true);
    setAnalysisStepIndex(1);
    setTimeout(() => {
      setActiveLookIndex(prev => prev + 1);
      setIsAnalyzing(false);
      setHasGenerated(true);
    }, 600);
  }, []);

  return {
    preferences,
    setPreferences,
    isAnalyzing,
    analysisStep: AI_ANALYSIS_STEPS[analysisStepIndex],
    analysisStepIndex,
    hasGenerated,
    currentRecommendation,
    topRecommendations,
    allRanked: rankedOutfits,
    generateLook,
    generateNextLook,
    error,
    setError
  };
}
