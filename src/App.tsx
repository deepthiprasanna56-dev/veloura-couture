import React, { useState, useEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ScrollFashionSequence } from './components/ScrollFashionSequence';
import { TrendingNow } from './components/TrendingNow';
import { ShopByMood } from './components/ShopByMood';
import { ExploreCategories } from './components/ExploreCategories';
import { CompleteLookSection } from './components/CompleteLookSection';
import { ColorStoriesSection } from './components/ColorStoriesSection';
import { AIStylistSection } from './components/AIStylistSection';
import { StyleJournalSection } from './components/StyleJournalSection';
import { Footer } from './components/Footer';
import { OutfitDetailModal } from './components/OutfitDetailModal';
import { SavedLooksDrawer } from './components/SavedLooksDrawer';
import { CustomCursor } from './components/CustomCursor';
import { LuxuryEditorialMarquee } from './components/LuxuryEditorialMarquee';
import { InteractiveRunwayShowcase } from './components/InteractiveRunwayShowcase';
import { useOutfitRecommendations } from './hooks/useOutfitRecommendations';
import { OUTFITS } from './data/outfits';
import { Outfit, CategoryType } from './types/fashion';

export function App() {
  const collectionNavigator = useRef<(index: number) => void>(() => {});
  const registerCollectionNavigation = useCallback((navigate: (index: number) => void) => {
    collectionNavigator.current = navigate;
  }, []);
  const {
    preferences,
    setPreferences,
    isAnalyzing,
    analysisStep,
    analysisStepIndex,
    hasGenerated,
    currentRecommendation,
    topRecommendations,
    generateLook,
    generateNextLook,
  } = useOutfitRecommendations();

  // Modal 3D Viewer Outfit
  const [inspectingOutfit, setInspectingOutfit] = useState<Outfit | null>(null);

  // Saved Outfits
  const [savedOutfits, setSavedOutfits] = useState<Outfit[]>(() => {
    try {
      const stored = localStorage.getItem('atelier_ai_saved_outfits');
      if (stored) return JSON.parse(stored);
    } catch (e) {
      // Fallback
    }
    // Default initial saved look
    return [OUTFITS[0]];
  });

  const [savedDrawerOpen, setSavedDrawerOpen] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis Smooth Scrolling and synchronize with GSAP ScrollTrigger
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('atelier_ai_saved_outfits', JSON.stringify(savedOutfits));
    } catch (e) {
      // Storage unavailable or quota
    }
  }, [savedOutfits]);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
    );

    document.querySelectorAll<HTMLElement>('main > section:not(#hero):not(#categories)').forEach((section) => {
      const revealTarget = Array.from(section.children).find(
        (child): child is HTMLElement =>
          child instanceof HTMLElement &&
          child.tagName === 'DIV' &&
          !child.classList.contains('absolute')
      );

      if (!revealTarget) return;
      revealTarget.classList.add('scroll-reveal');
      observer.observe(revealTarget);
    });

    return () => observer.disconnect();
  }, []);

  const toggleSaveOutfit = (outfit: Outfit) => {
    setSavedOutfits((prev) => {
      const exists = prev.some((o) => o.id === outfit.id);
      if (exists) {
        return prev.filter((o) => o.id !== outfit.id);
      } else {
        return [outfit, ...prev];
      }
    });
  };

  const savedIds = savedOutfits.map((o) => o.id);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(el, { offset: -40, duration: 1.4 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="editorial-theme relative min-h-screen bg-[#08080a] text-[#f7f5f0] overflow-x-clip selection:bg-[#e62318] selection:text-white">
      {/* Precision Luxury Custom Cursor */}
      <CustomCursor />

      {/* Luxury Editorial Film Grain Overlay */}
      <div className="film-grain" aria-hidden="true" />

      {/* Navigation Bar */}
      <Navbar
        savedCount={savedOutfits.length}
        onOpenSaved={() => setSavedDrawerOpen(true)}
        onFindMyStyle={() => scrollToSection('ai-stylist')}
      />

      <main>
        {/* 1. Cinematic 3D Hero Experience */}
        <HeroSection
          onCreateLookClick={() => scrollToSection('ai-stylist')}
          onExploreClick={() => scrollToSection('garment-sequence')}
        />

        {/* High-Fashion Editorial Marquee Banner */}
        <LuxuryEditorialMarquee />

        {/* 2. Every Garment Comes Alive While Scrolling (Scenes 1 - 7) */}
        <ScrollFashionSequence
          onSelectOutfit={(outfit) => setInspectingOutfit(outfit)}
          onToggleSave={toggleSaveOutfit}
          onRegisterCollectionNavigation={registerCollectionNavigation}
          savedIds={savedIds}
        />

        {/* 3. Interactive Runway Showcase / Wardrobe Mixer */}
        <InteractiveRunwayShowcase
          outfits={OUTFITS}
          onSelectOutfit={(outfit) => setInspectingOutfit(outfit)}
          onToggleSave={toggleSaveOutfit}
          savedIds={savedIds}
        />

        {/* 4. AI Personal Stylist Studio */}
        <AIStylistSection
          preferences={preferences}
          setPreferences={setPreferences}
          isAnalyzing={isAnalyzing}
          analysisStep={analysisStep}
          analysisStepIndex={analysisStepIndex}
          hasGenerated={hasGenerated}
          topRecommendations={topRecommendations}
          currentRecommendation={currentRecommendation}
          onGenerateLook={generateLook}
          onGenerateNextLook={generateNextLook}
          onViewCompleteLook={(outfit) => setInspectingOutfit(outfit)}
          onToggleSave={toggleSaveOutfit}
          savedIds={savedIds}
        />

        {/* 4. Trending Now Editorial Layout */}
        <TrendingNow
          onSelectOutfit={(outfit) => setInspectingOutfit(outfit)}
          outfits={OUTFITS}
        />

        {/* 5. Shop by Mood */}
        <ShopByMood
          onSelectOutfit={(outfit) => setInspectingOutfit(outfit)}
          outfits={OUTFITS}
        />

        {/* 6. Explore Categories */}
        <ExploreCategories
          onSelectCategory={(cat: CategoryType) => {}}
          onSelectOutfit={(outfit) => setInspectingOutfit(outfit)}
          outfits={OUTFITS}
        />

        {/* 7. The Complete Look (Interactive Anatomy Breakdown) */}
        <CompleteLookSection
          outfit={inspectingOutfit || OUTFITS[3]}
          onOpenViewer={(outfit) => setInspectingOutfit(outfit)}
        />

        {/* 8. Color Stories */}
        <ColorStoriesSection
          onSelectOutfit={(outfit) => setInspectingOutfit(outfit)}
          outfits={OUTFITS}
        />

        {/* 9. Style Journal Essays */}
        <StyleJournalSection />
      </main>

      {/* Footer */}
      <Footer onNavigateCollection={(index) => collectionNavigator.current(index)} />

      {/* Interactive 3D Outfit Detail Viewer Modal */}
      <OutfitDetailModal
        outfit={inspectingOutfit}
        onClose={() => setInspectingOutfit(null)}
        onToggleSave={toggleSaveOutfit}
        isSaved={inspectingOutfit ? savedIds.includes(inspectingOutfit.id) : false}
      />

      {/* Saved Looks Drawer */}
      <SavedLooksDrawer
        isOpen={savedDrawerOpen}
        onClose={() => setSavedDrawerOpen(false)}
        savedOutfits={savedOutfits}
        onRemove={toggleSaveOutfit}
        onViewOutfit={(outfit) => setInspectingOutfit(outfit)}
      />
    </div>
  );
}

export default App;
