import { OccasionType, StyleType, ColorPreference, ClothingPreference, WeatherType, BudgetType, BodyFitType, MoodType } from '../types/fashion';

export interface StyleOption<T> {
  value: T;
  label: string;
  sublabel: string;
  icon?: string;
}

export const OCCASIONS: StyleOption<OccasionType>[] = [
  { value: 'Casual', label: 'Casual & Weekend', sublabel: 'Off-duty gallery strolls & espresso runs' },
  { value: 'Office', label: 'Office & Executive', sublabel: 'Boardroom presence & high-stakes meetings' },
  { value: 'Wedding', label: 'Wedding & Ceremonial', sublabel: 'Black tie, bespoke guest & celebrations' },
  { value: 'Party', label: 'Cocktail & Evening', sublabel: 'Intimate dinner parties & midnight galas' },
  { value: 'Date Night', label: 'Date Night', sublabel: 'Understated allure & candlelit dinners' },
  { value: 'Travel', label: 'Resort & Travel', sublabel: 'Effortless airport transit & coastal getaways' },
  { value: 'Festival', label: 'Avant-Garde & Festival', sublabel: 'Experimental runway & creative gatherings' }
];

export const STYLES: StyleOption<StyleType>[] = [
  { value: 'Minimal', label: 'Minimalist Clean', sublabel: 'Pure geometry, neutral palette, zero excess' },
  { value: 'Old Money', label: 'Old Money Aristocrat', sublabel: 'Savile Row heritage, tweed, polo knitwear' },
  { value: 'Streetwear', label: 'Neo-Tokyo Street', sublabel: 'Boxy drop-shoulders, technical ripstop' },
  { value: 'Smart Casual', label: 'Smart Casual Pivot', sublabel: 'Deconstructed blazers, luxury sneakers' },
  { value: 'Classic', label: 'Timeless Classic', sublabel: 'Flawless tailoring, crisp poplin, fine leather' },
  { value: 'Bold', label: 'Bold High-Contrast', sublabel: 'Sculptural statements, liquid metallics, edge' },
  { value: 'Traditional', label: 'Artisanal Heritage', sublabel: 'Brocades, hand-woven silks, rich zari' }
];

export interface ColorOption {
  value: ColorPreference;
  label: string;
  hex: string;
  border?: string;
}

export const COLOR_OPTIONS: ColorOption[] = [
  { value: 'Black', label: 'Obsidian Noir', hex: '#111113' },
  { value: 'White', label: 'Pristine Alabaster', hex: '#F7F6F2', border: '#444' },
  { value: 'Navy', label: 'Midnight Navy', hex: '#162238' },
  { value: 'Beige', label: 'Warm Champagne Ecru', hex: '#D6C7B2' },
  { value: 'Earth Tones', label: 'Umber & Terracotta', hex: '#875338' },
  { value: 'Pastels', label: 'Muted Sage & Lavender', hex: '#8E9A88' },
  { value: 'Custom', label: 'Curated Palette', hex: '#D4AF37' }
];

export const CLOTHING_PREFERENCES: StyleOption<ClothingPreference>[] = [
  { value: 'Jackets', label: 'Tailored Jackets & Coats', sublabel: 'Structured outerwear as the centerpiece' },
  { value: 'Shirts', label: 'Crisp & Fluid Shirts', sublabel: 'Poplins, slub linens, and silk shirts' },
  { value: 'T-shirts', label: 'Mercerized Base Knits', sublabel: 'Heavyweight organic tees & mock necks' },
  { value: 'Trousers', label: 'Pleated Flannel Trousers', sublabel: 'Hollywood waistbands and fluid puddles' },
  { value: 'Jeans', label: 'Japanese Selvedge Denim', sublabel: 'Raw indigo and washed vintage cuts' },
  { value: 'Dresses', label: 'Sculptural Dresses & Slips', sublabel: 'Liquid lamé, silk georgette, column cuts' },
  { value: 'Traditional Wear', label: 'Heritage Achkans & Kurtas', sublabel: 'Hand-loomed brocades & chanderi' }
];

export const WEATHERS: StyleOption<WeatherType>[] = [
  { value: 'Hot', label: 'High Summer (>28°C)', sublabel: 'Airy linens, breathable silks, open collar' },
  { value: 'Mild', label: 'Temperate Spring (18–25°C)', sublabel: 'Lightweight trench, transitional knits' },
  { value: 'Cold', label: 'Crisp Autumn / Winter (<12°C)', sublabel: 'Baby alpaca, heavy shearling, cashmere' },
  { value: 'Rainy', label: 'Inclement & Wet', sublabel: 'Waterproof bonded fabrics, lugged soles' }
];

export const BUDGETS: StyleOption<BudgetType>[] = [
  { value: 'Affordable', label: 'Curated Essentials', sublabel: 'Accessible luxury & everyday quality' },
  { value: 'Mid-range', label: 'Contemporary Designer', sublabel: 'Elevated independent houses & artisanal craft' },
  { value: 'Premium', label: 'Haute Couture / Bespoke', sublabel: 'Handmade Savile Row, bespoke silk & rare wools' }
];

export const BODY_FITS: StyleOption<BodyFitType>[] = [
  { value: 'Relaxed', label: 'Relaxed & Fluid', sublabel: 'Effortless drape that skims without restriction' },
  { value: 'Regular', label: 'Balanced Proportion', sublabel: 'Classic tailored silhouette with natural ease' },
  { value: 'Slim', label: 'Sharp & Contoured', sublabel: 'Precision-cut waist, tapered ankle, close fit' },
  { value: 'Oversized', label: 'Architectural Oversized', sublabel: 'Dropped shoulders, exaggerated volume, runway presence' }
];

export const MOODS: MoodType[] = [
  'Minimalist',
  'Effortless',
  'Bold',
  'Sophisticated',
  'Sporty',
  'Experimental'
];
