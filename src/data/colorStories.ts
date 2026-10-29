import { ColorStory } from '../types/fashion';

export const COLOR_STORIES: ColorStory[] = [
  {
    id: 'story-monochrome-noir',
    title: 'Obsidian & Alabaster',
    season: 'Autumn / Winter Editorial',
    description: 'High-contrast monochromatic balance. Deep carbon blacks tempered by milky off-whites and cool palladium metallic highlights.',
    editorialImage: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=85',
    suggestedLookIds: ['look-jacket-sculpt', 'look-minimal-studio'],
    palette: [
      { name: 'Obsidian Jet', hex: '#0a0a0c' },
      { name: 'Cold Charcoal', hex: '#222228' },
      { name: 'Milk Alabaster', hex: '#e8e5de' },
      { name: 'Brushed Palladium', hex: '#a8a9b2' }
    ]
  },
  {
    id: 'story-warm-sandstone',
    title: 'Sun-Drenched Riviera',
    season: 'Spring / Summer Capsule',
    description: 'Warm, tactile earthy pigments evoking Tuscan stucco and Mediterranean sea breezes. Natural linen tones blended with rich cognac leather.',
    editorialImage: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=85',
    suggestedLookIds: ['look-casual-essentials', 'look-seasonal-cocoon'],
    palette: [
      { name: 'Normandy Sage', hex: '#85927c' },
      { name: 'Ecru Chino', hex: '#e8e0d0' },
      { name: 'Sandstone Suede', hex: '#c7bba7' },
      { name: 'Raw Cognac', hex: '#b38243' }
    ]
  },
  {
    id: 'story-midnight-bordeaux',
    title: 'After-Hours Luminescence',
    season: 'Evening Couture',
    description: 'Deep jewel tones that capture candlelight and velvet reflections. Intoxicating wine bordeaux with molten 24k gold leaf and caviar obsidian.',
    editorialImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85',
    suggestedLookIds: ['look-party-night', 'look-party-cocktail'],
    palette: [
      { name: 'Bordeaux Noir', hex: '#3a131b' },
      { name: 'Molten Gold', hex: '#d4af37' },
      { name: 'Caviar Black', hex: '#0d0d10' },
      { name: 'Champagne Shimmer', hex: '#d8c7b0' }
    ]
  },
  {
    id: 'story-imperial-heritage',
    title: 'Imperial Raw Silk & Zari',
    season: 'Ceremonial Archive',
    description: 'Ancestral heritage rendered in modern proportion. Hand-dyed deep ochre, lustrous antique gold bullion, and precious emerald stone.',
    editorialImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=85',
    suggestedLookIds: ['look-traditional-royal'],
    palette: [
      { name: 'Imperial Ochre', hex: '#996515' },
      { name: 'Antique Zari Gold', hex: '#d4af37' },
      { name: 'Zambian Emerald', hex: '#194d33' },
      { name: 'Chanderi Ivory', hex: '#f4ede2' }
    ]
  }
];
