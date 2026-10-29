import React, { useEffect, useState } from 'react';
import { ArrowRight, Bookmark, Menu, Sparkles, X } from 'lucide-react';

interface NavbarProps {
  savedCount: number;
  onOpenSaved: () => void;
  onFindMyStyle: () => void;
}

const navLinks = [
  { label: 'Discover', href: '#trending' },
  { label: 'The Runway', href: '#garment-sequence' },
  { label: 'Collections', href: '#categories' },
  { label: 'AI Stylist', href: '#ai-stylist' },
];

export const Navbar: React.FC<NavbarProps> = ({
  savedCount,
  onOpenSaved,
  onFindMyStyle,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const findMyStyle = () => {
    setMobileMenuOpen(false);
    onFindMyStyle();
  };

  return (
    <>
      <header className={`editorial-header${isScrolled ? ' editorial-header--scrolled' : ''}`}>
        <div className="editorial-header__inner">
          <a href="#hero" className="editorial-header__brand" aria-label="Veloura Couture home">
            VELOURA<span>*</span>
            <small>COUTURE</small>
          </a>

          <nav className="editorial-header__nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="editorial-header__actions">
            <button
              type="button"
              onClick={onOpenSaved}
              className="editorial-header__saved"
              aria-label={`View saved looks${savedCount ? `, ${savedCount} saved` : ''}`}
            >
              <Bookmark aria-hidden="true" size={17} />
              <span className="editorial-header__saved-count">{savedCount}</span>
            </button>
            <button type="button" onClick={findMyStyle} className="editorial-header__cta">
              <Sparkles aria-hidden="true" size={15} />
              <span>Style me</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="editorial-header__menu"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="editorial-menu">
          <nav aria-label="Mobile navigation">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="editorial-menu__index">0{index + 1}</span>
                <span>{link.label}</span>
                <ArrowRight aria-hidden="true" size={17} />
              </a>
            ))}
          </nav>
          <button type="button" onClick={findMyStyle} className="editorial-menu__cta">
            Find your signature look <ArrowRight aria-hidden="true" size={17} />
          </button>
        </div>
      )}
    </>
  );
};
