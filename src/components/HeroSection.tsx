import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { OUTFITS } from '../data/outfits';

interface HeroSectionProps {
  onExploreClick: () => void;
  onCreateLookClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onCreateLookClick,
}) => {
  const editorialLooks = OUTFITS.slice(0, 5);

  return (
    <section id="hero" className="editorial-hero">
      <div className="editorial-hero__wash" aria-hidden="true" />
      <div className="editorial-hero__topline">
        <span>VELOURA COUTURE // EDITION 2026</span>
        <span>PERSONAL STYLE, REIMAGINED</span>
      </div>

      <div className="editorial-hero__gallery" aria-label="Featured couture looks">
        {editorialLooks.map((look, index) => (
          <figure
            key={look.id}
            className={`editorial-hero__look editorial-hero__look--${index + 1}`}
          >
            <img src={look.image} alt={look.name} />
          </figure>
        ))}
      </div>

      <div className="editorial-hero__title-wrap">
        <span className="editorial-hero__overline">THE ART OF GETTING DRESSED</span>
        <h1 className="editorial-hero__title">STYLE</h1>
      </div>

      <div className="editorial-hero__bottom">
        <p>
          A considered wardrobe, composed around you.
          <span> Discover the pieces and proportions that feel unmistakably yours.</span>
        </p>
        <button type="button" onClick={onCreateLookClick} className="editorial-hero__cta">
          <span>Find your signature look</span>
          <ArrowUpRight aria-hidden="true" size={18} />
        </button>
      </div>

      <button
        type="button"
        onClick={onExploreClick}
        className="editorial-hero__scroll"
        aria-label="Explore the collection"
      >
        <span>SCROLL TO EXPLORE</span>
        <ArrowDownRight aria-hidden="true" size={16} />
      </button>
    </section>
  );
};
