import { Outfit } from '../types/fashion';

export const OUTFITS: Outfit[] = [
  {
    id: 'look-jacket-sculpt',
    name: 'The Obsidian Flight',
    label: 'SCENE 01 / SCULPTURAL LEATHER',
    category: 'Seasonal',
    mood: 'Bold',
    featuredScene: 1,
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=85',
    description: 'An architectural biker-shearling hybrid crafted from oiled calfskin with brushed palladium hardware and an exaggerated dropped collar.',
    editorialNotes: 'The piece commands the room through pure silhouette. The grain of the leather reflects low ambient light while the shearling interior creates plush dimensional contrast.',
    garments: [
      {
        id: 'g-1',
        name: 'Sculpted Biker Jacket',
        type: 'outerwear',
        material: 'Washed Calfskin & Shearling',
        colorName: 'Obsidian Black',
        colorHex: '#121214',
        description: 'Heavy gauge asymmetrical zip with articulated shoulder gussets.',
        threeDType: 'jacket'
      },
      {
        id: 'g-2',
        name: 'Mercerized Cotton Base Tee',
        type: 'top',
        material: '100% Egyptian Giza Cotton',
        colorName: 'Alabaster',
        colorHex: '#e8e5de',
        description: 'Micro-rib collar with a clean draped chest.',
        threeDType: 'shirt'
      },
      {
        id: 'g-3',
        name: 'Tapered Heavy Twill Trousers',
        type: 'bottom',
        material: 'High-Twist Wool Twill',
        colorName: 'Charcoal Wash',
        colorHex: '#252528',
        description: 'Deep forward pleats with a sharp crease falling over the ankle.',
        threeDType: 'pants'
      },
      {
        id: 'g-4',
        name: 'Combat Chelsea Boots',
        type: 'footwear',
        material: 'Brushed Box Calf',
        colorName: 'Pure Onyx',
        colorHex: '#0c0c0e',
        description: 'Chunky lugged Commando rubber outsole with Goodyear welt.',
        threeDType: 'shoes'
      }
    ],
    accessories: [
      { name: 'Brushed Titanium Signet', type: 'Jewelry', material: 'Grade 5 Titanium', detail: 'Matte beveled edge' },
      { name: 'Full-Grain Structured Messenger', type: 'Bag', material: 'Vachetta Leather', detail: 'Concealed magnetic latch' },
      { name: 'Smoked Acetate D-Frames', type: 'Eyewear', material: 'Japanese Acetate', detail: 'Anti-reflective green tint' }
    ],
    colorPalette: [
      { name: 'Obsidian', hex: '#121214' },
      { name: 'Smoked Charcoal', hex: '#2c2c34' },
      { name: 'Muted Alabaster', hex: '#e8e5de' },
      { name: 'Palladium', hex: '#a6a7ad' }
    ],
    stylingTips: [
      'Leave the collar half-unzipped to expose the mercerized cotton neckline.',
      'Ground the volume with substantial leather boots rather than slim trainers.',
      'Keep metallic accessories strictly matte titanium or silver.'
    ],
    weatherSuitability: ['Cold', 'Mild'],
    occasions: ['Casual', 'Date Night', 'Party', 'Travel'],
    styles: ['Bold', 'Streetwear', 'Minimal'],
    silhouette: 'Relaxed',
    budget: 'Premium',
    threeDConfig: {
      primaryColor: '#121214',
      secondaryColor: '#2b2b32',
      metalColor: '#a6a7ad',
      garmentType: 'jacket',
      roughness: 0.35,
      metalness: 0.45,
      fabricName: 'Oiled Calfskin & Palladium'
    }
  },
  {
    id: 'look-casual-essentials',
    name: 'The Riviera Popover',
    label: 'SCENE 02 / CASUAL ESSENTIALS',
    category: 'Casual',
    mood: 'Effortless',
    featuredScene: 2,
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=1200&q=85',
    description: 'Breezy French Normandy linen meets pleated ecru trousers, creating the quintessential Mediterranean silhouette designed for effortless sunlight.',
    editorialNotes: 'A lesson in tactile simplicity. The irregular texture of slub linen balances the razor-crisp drape of tailored chino cloth.',
    garments: [
      {
        id: 'g-5',
        name: 'Open-Collar Slub Linen Shirt',
        type: 'top',
        material: 'Normandy Flax Linen',
        colorName: 'Sun-Bleached Sage',
        colorHex: '#85927c',
        description: 'Camp collar with real mother-of-pearl buttons.',
        threeDType: 'shirt'
      },
      {
        id: 'g-6',
        name: 'Single-Pleat Linen-Cotton Chinos',
        type: 'bottom',
        material: '60% Linen, 40% Long-Staple Cotton',
        colorName: 'Warm Ecru',
        colorHex: '#e8e0d0',
        description: 'Mid-rise with subtle side adjusters and a relaxed taper.',
        threeDType: 'pants'
      },
      {
        id: 'g-7',
        name: 'Deconstructed Suede Low-Tops',
        type: 'footwear',
        material: 'Italian Calf Suede',
        colorName: 'Sandstone',
        colorHex: '#c7bba7',
        description: 'Unlined construction with Margom natural rubber cupsole.',
        threeDType: 'sneakers'
      }
    ],
    accessories: [
      { name: 'Woven Raffia Market Tote', type: 'Bag', material: 'Madagascar Raffia', detail: 'Bridle leather shoulder straps' },
      { name: 'Braided Suede Belt', type: 'Belt', material: 'Brushed Suede', detail: 'Solid brass roller buckle' },
      { name: 'Vintage Gold Tank Watch', type: 'Timepiece', material: '18k Yellow Gold Plated', detail: 'Hand-stitched cognac alligator strap' }
    ],
    colorPalette: [
      { name: 'Normandy Sage', hex: '#85927c' },
      { name: 'Warm Ecru', hex: '#e8e0d0' },
      { name: 'Sandstone Suede', hex: '#c7bba7' },
      { name: 'Cognac Gold', hex: '#b38243' }
    ],
    stylingTips: [
      'Roll the shirt sleeves twice to sit precisely below the elbow.',
      'Skip socks entirely and let the ankle breathe above the low-top sneaker.',
      'Pair with warm gold jewelry to echo the sun-drenched palette.'
    ],
    weatherSuitability: ['Hot', 'Mild'],
    occasions: ['Casual', 'Travel', 'Date Night'],
    styles: ['Effortless', 'Minimal', 'Old Money', 'Smart Casual'],
    silhouette: 'Relaxed',
    budget: 'Mid-range',
    threeDConfig: {
      primaryColor: '#85927c',
      secondaryColor: '#e8e0d0',
      metalColor: '#c5a059',
      garmentType: 'jacket',
      roughness: 0.8,
      metalness: 0.1,
      fabricName: 'Flax Slub Linen & Cotton Chino'
    }
  },
  {
    id: 'look-streetwear-cyber',
    name: 'Neo-Tokyo Technical Hood',
    label: 'SCENE 03 / STREETWEAR',
    category: 'Streetwear',
    mood: 'Experimental',
    featuredScene: 3,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=85',
    description: 'An aggressive drop-shoulder heavyweight hoodie engineered with water-repellent bonded fleece, multi-pocket modular cargos, and reflective trail runners.',
    editorialNotes: 'Urban brutalism brought to life through sculptural geometry, industrial webbing, and contrast neon accents.',
    garments: [
      {
        id: 'g-8',
        name: '500GSM Structured Boxy Hoodie',
        type: 'outerwear',
        material: 'Heavyweight Loopback French Terry',
        colorName: 'Concrete Slate',
        colorHex: '#3b3e47',
        description: 'Double-layered hood with hidden kangaroo zip compartment.',
        threeDType: 'hoodie'
      },
      {
        id: 'g-9',
        name: 'Modular 3D Cargo Pants',
        type: 'bottom',
        material: 'Cordura Ripstop & Nylon',
        colorName: 'Pitch Black',
        colorHex: '#141416',
        description: 'Articulated knee darts, fidlock magnetic buckles, and adjustable cuffs.',
        threeDType: 'pants'
      },
      {
        id: 'g-10',
        name: 'Vibram-Sole Chunky Trail Sneakers',
        type: 'footwear',
        material: 'Gore-Tex Mesh & Rubberized Leather',
        colorName: 'Storm Grey / Cyber Orange',
        colorHex: '#525763',
        description: 'Quick-lace toggle system with 3M reflective chevron hits.',
        threeDType: 'sneakers'
      }
    ],
    accessories: [
      { name: 'Tactical Chest Rig', type: 'Bag', material: 'Ballistic Nylon', detail: 'MOLLE compatible straps' },
      { name: 'Industrial Carabiner Keyring', type: 'Hardware', material: 'Anodized Aluminum', detail: 'Laser-etched serial logo' },
      { name: 'Wrap-Around Shield Shades', type: 'Eyewear', material: 'Polycarbonate', detail: 'Mirror iridium finish' }
    ],
    colorPalette: [
      { name: 'Concrete Slate', hex: '#3b3e47' },
      { name: 'Pitch Black', hex: '#141416' },
      { name: 'Cyber Mandarin', hex: '#ff5e3a' },
      { name: 'Industrial Steel', hex: '#8b8e98' }
    ],
    stylingTips: [
      'Cinch the ankle toggles tight to accentuate the sculpted shape of the technical sneaker.',
      'Layer a longer curved-hem waffle tee beneath the hoodie for proportional depth.',
      'Allow the neon hardware to be the singular chromatic focal point.'
    ],
    weatherSuitability: ['Mild', 'Cold', 'Rainy'],
    occasions: ['Casual', 'Festival', 'Travel'],
    styles: ['Streetwear', 'Bold'],
    silhouette: 'Oversized',
    budget: 'Mid-range',
    threeDConfig: {
      primaryColor: '#3b3e47',
      secondaryColor: '#141416',
      metalColor: '#ff5e3a',
      garmentType: 'hoodie',
      roughness: 0.6,
      metalness: 0.25,
      fabricName: 'Heavyweight Loopback & Cordura Ripstop'
    }
  },
  {
    id: 'look-formal-elegance',
    name: 'The Mayfair Double-Breasted',
    label: 'SCENE 04 / FORMAL ELEGANCE',
    category: 'Formal',
    mood: 'Sophisticated',
    featuredScene: 4,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=85',
    description: 'A bespoke 6x2 double-breasted blazer spun from superfine 150s Merino wool, paired with high-rise Hollywood trousers and hand-patinated oxfords.',
    editorialNotes: 'The absolute pinnacle of contemporary tailoring. The generous 4.5-inch peak lapels draw the eye upward to create a commanding V-taper.',
    garments: [
      {
        id: 'g-11',
        name: 'Peak Lapel Cashmere-Wool Blazer',
        type: 'outerwear',
        material: 'Super 150s Wool & Mongolian Cashmere',
        colorName: 'Midnight Navy',
        colorHex: '#181f33',
        description: 'Half-canvassed construction with horn buttons and Milanese buttonhole.',
        threeDType: 'jacket'
      },
      {
        id: 'g-12',
        name: 'Sea Island Cotton Poplin Shirt',
        type: 'top',
        material: '200/2 Sea Island Cotton',
        colorName: 'Pristine White',
        colorHex: '#fcfcfc',
        description: 'Cutaway spread collar with mother-of-pearl collar stays.',
        threeDType: 'shirt'
      },
      {
        id: 'g-13',
        name: 'Extended-Tab Hollywood Trousers',
        type: 'bottom',
        material: 'Super 150s Wool Flannel',
        colorName: 'Midnight Navy',
        colorHex: '#181f33',
        description: 'Continuous waistband with dual reverse pleats and 2-inch turn-up cuffs.',
        threeDType: 'pants'
      },
      {
        id: 'g-14',
        name: 'Wholecut Hand-Stained Oxfords',
        type: 'footwear',
        material: 'French Box Calfskin',
        colorName: 'Museum Espresso',
        colorHex: '#2b1b17',
        description: 'Cut from a single piece of flawless leather with fiddleback bevelled waist.',
        threeDType: 'shoes'
      }
    ],
    accessories: [
      { name: 'Ultra-Thin Skeleton Timepiece', type: 'Timepiece', material: 'Rose Gold & Sapphire', detail: 'Hand-finished Geneva stripes' },
      { name: 'Hand-Rolled Mulberry Silk Pocket Square', type: 'Accessory', material: '100% Silk Twill', detail: 'Subtle micro-paisley motif' },
      { name: 'Solid Silver Guilloché Cufflinks', type: 'Jewelry', material: '925 Sterling Silver', detail: 'Engine-turned hobnail pattern' }
    ],
    colorPalette: [
      { name: 'Midnight Navy', hex: '#181f33' },
      { name: 'Pristine White', hex: '#fcfcfc' },
      { name: 'Museum Espresso', hex: '#2b1b17' },
      { name: 'Rose Gold', hex: '#d4af37' }
    ],
    stylingTips: [
      'Fasten only the middle anchor button when standing; unbutton instantly when seated.',
      'Show exactly half an inch of clean white shirt cuff past the jacket sleeve.',
      'Tuck the pocket square in an unstructured puff fold for nonchalant elegance.'
    ],
    weatherSuitability: ['Mild', 'Cold'],
    occasions: ['Office', 'Wedding', 'Party'],
    styles: ['Classic', 'Old Money', 'Minimal', 'Smart Casual'],
    silhouette: 'Slim',
    budget: 'Premium',
    threeDConfig: {
      primaryColor: '#181f33',
      secondaryColor: '#2b1b17',
      metalColor: '#d4af37',
      garmentType: 'blazer',
      roughness: 0.4,
      metalness: 0.3,
      fabricName: 'Super 150s Wool & Rose Gold'
    }
  },
  {
    id: 'look-party-night',
    name: 'The Midnight Starlight Velvet',
    label: 'SCENE 05 / PARTY & EVENING',
    category: 'Party',
    mood: 'Bold',
    featuredScene: 5,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
    description: 'A liquid silk-velvet cocktail blazer paired with sheer organza layering, high-shine patent boots, and sculpted molten gold jewelry.',
    editorialNotes: 'Designed for after-hours luminescence. Under direct spotlights, the rich velvet absorbs and refracts light with deep multidimensional iridescence.',
    garments: [
      {
        id: 'g-15',
        name: 'Draped Liquid Velvet Dinner Jacket',
        type: 'outerwear',
        material: 'Mulberry Silk-Rayon Velvet',
        colorName: 'Bordeaux Noir',
        colorHex: '#3a131b',
        description: 'Shawl satin lapel with hidden hook closure and tonal jet pockets.',
        threeDType: 'jacket'
      },
      {
        id: 'g-16',
        name: 'Translucent Silk Georgette Shirt',
        type: 'top',
        material: '100% Habotai Silk',
        colorName: 'Smoky Champagne',
        colorHex: '#d8c7b0',
        description: 'Fluid drape with elongated button cuffs and subtle sheen.',
        threeDType: 'shirt'
      },
      {
        id: 'g-17',
        name: 'Ultra-High Rise Tuxedo Cigarette Pants',
        type: 'bottom',
        material: 'Virgin Wool Barathea',
        colorName: 'Caviar Black',
        colorHex: '#0d0d10',
        description: 'Silk grosgrain side stripes with satin-faced waistband.',
        threeDType: 'pants'
      },
      {
        id: 'g-18',
        name: 'Cuban-Heel Patent Leather Boots',
        type: 'footwear',
        material: 'High-Gloss Patent Calf',
        colorName: 'Mirror Black',
        colorHex: '#08080a',
        description: '45mm stacked Cuban heel with inside brass zipper.',
        threeDType: 'shoes'
      }
    ],
    accessories: [
      { name: 'Molten Gold Sculptural Choker', type: 'Jewelry', material: '24k Gold Vermeil', detail: 'Hand-cast organic fluid curvature' },
      { name: 'Beveled Minaudière Evening Clutch', type: 'Bag', material: 'Brushed Brass & Black Onyx', detail: 'Concealed drop-in snake chain' },
      { name: 'Stacked Black Diamond Rings', type: 'Jewelry', material: 'Black Rhodium & Pavé Diamonds', detail: 'Asscher and baguette cuts' }
    ],
    colorPalette: [
      { name: 'Bordeaux Noir', hex: '#3a131b' },
      { name: 'Smoky Champagne', hex: '#d8c7b0' },
      { name: 'Caviar Black', hex: '#0d0d10' },
      { name: 'Molten Gold', hex: '#e5c583' }
    ],
    stylingTips: [
      'Drape the dinner jacket effortlessly over the shoulders without putting arms through sleeves.',
      'Allow the sheer silk shirt to reveal the warm glow of the molten choker underneath.',
      'Keep hair sleeked back or sculpted to frame the dramatic collar profile.'
    ],
    weatherSuitability: ['Mild', 'Cold'],
    occasions: ['Party', 'Date Night', 'Festival'],
    styles: ['Bold', 'Classic', 'Old Money'],
    silhouette: 'Slim',
    budget: 'Premium',
    threeDConfig: {
      primaryColor: '#3a131b',
      secondaryColor: '#d8c7b0',
      metalColor: '#e5c583',
      garmentType: 'jacket',
      roughness: 0.25,
      metalness: 0.65,
      fabricName: 'Silk-Rayon Velvet & 24k Gold'
    }
  },
  {
    id: 'look-traditional-royal',
    name: 'The Varanasi Heritage Sherwani',
    label: 'SCENE 06 / TRADITIONAL STYLE',
    category: 'Traditional',
    mood: 'Sophisticated',
    featuredScene: 6,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=85',
    description: 'An artisanal hand-loomed raw silk achkan woven with antique Zari gold bullion embroidery, layered over ivory churidar trousers and emerald-studded juttis.',
    editorialNotes: 'Generations of craft reimagined through a modern minimalist lens. The structured high mandarin bandhgala collar frames the posture with regal grace.',
    garments: [
      {
        id: 'g-19',
        name: 'Hand-Loomed Brocade Achkan',
        type: 'outerwear',
        material: 'Varanasi Raw Mulberry Silk & Pure Zari',
        colorName: 'Royal Deep Ochre & Gold',
        colorHex: '#996515',
        description: 'Concealed front placket with handcrafted enamel meenakari buttons.',
        threeDType: 'cape'
      },
      {
        id: 'g-20',
        name: 'Chanderi Fine Silk Draped Kurta',
        type: 'top',
        material: 'Chanderi Cotton-Silk Weave',
        colorName: 'Muted Ivory Cream',
        colorHex: '#f4ede2',
        description: 'Asymmetric side drape with fine zari piping along hemline.',
        threeDType: 'shirt'
      },
      {
        id: 'g-21',
        name: 'Bespoke Tapered Churidar',
        type: 'bottom',
        material: 'Giza Cotton Silk',
        colorName: 'Antique Cream',
        colorHex: '#ede4d4',
        description: 'Ruched gather above ankle with tailored calf gusset.',
        threeDType: 'pants'
      },
      {
        id: 'g-22',
        name: 'Embroidered Mojari Juttis',
        type: 'footwear',
        material: 'Camel Leather & Velvet',
        colorName: 'Gold Embroidered Velvet',
        colorHex: '#734d10',
        description: 'Cushioned memory foam insole with hand-braided sole stitch.',
        threeDType: 'shoes'
      }
    ],
    accessories: [
      { name: 'Carved Zambian Emerald Mala', type: 'Jewelry', material: 'Emerald Beads & Seed Pearls', detail: '7-strand graded necklace' },
      { name: 'Kashmiri Pashmina Jamawar Shawl', type: 'Drape', material: '100% Cashmere Pashmina', detail: 'Antique paisley needle embroidery' },
      { name: 'Gold-Plated Hand-Chased Kalgi Brooch', type: 'Jewelry', material: 'Silver-Gold Vermeil & Polki', detail: 'Feather mount setting' }
    ],
    colorPalette: [
      { name: 'Imperial Ochre', hex: '#996515' },
      { name: 'Ivory Cream', hex: '#f4ede2' },
      { name: 'Zambian Emerald', hex: '#194d33' },
      { name: 'Polki Gold', hex: '#d4af37' }
    ],
    stylingTips: [
      'Drape the Jamawar shawl neatly over one forearm to show the rich achkan embroidery.',
      'Fasten the bandhgala completely for formal entry, loosening the top button later in the evening.',
      'Coordinate the gemstone color in your ring with the emerald bead mala.'
    ],
    weatherSuitability: ['Mild', 'Cold'],
    occasions: ['Wedding', 'Party'],
    styles: ['Traditional', 'Classic', 'Old Money'],
    silhouette: 'Regular',
    budget: 'Premium',
    threeDConfig: {
      primaryColor: '#996515',
      secondaryColor: '#f4ede2',
      metalColor: '#d4af37',
      garmentType: 'kurta',
      roughness: 0.5,
      metalness: 0.55,
      fabricName: 'Varanasi Raw Silk & Antique Zari'
    }
  },
  {
    id: 'look-seasonal-cocoon',
    name: 'The Alpaca Cocoon Mantle',
    label: 'SCENE 07 / SEASONAL COLLECTION',
    category: 'Seasonal',
    mood: 'Minimalist',
    featuredScene: 7,
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=85',
    description: 'A sculptural double-faced baby alpaca wrap coat worn over a seamless brushed cashmere turtleneck, flannel peg trousers, and leather chelsea boots.',
    editorialNotes: 'An ode to tactile warmth in sub-zero weather. The unlined double-face fabric wraps the body like a soft architectural cocoon.',
    garments: [
      {
        id: 'g-23',
        name: 'Double-Faced Baby Alpaca Wrap Coat',
        type: 'outerwear',
        material: '80% Baby Alpaca, 20% Virgin Wool',
        colorName: 'Toasted Caramel Camel',
        colorHex: '#9c6f44',
        description: 'Drop shoulder silhouette with self-tie belt and deep patch pockets.',
        threeDType: 'jacket'
      },
      {
        id: 'g-24',
        name: 'Seamless 12-Gauge Cashmere Turtleneck',
        type: 'top',
        material: '100% Inner Mongolian Cashmere',
        colorName: 'Warm Oat Melange',
        colorHex: '#d8ccb8',
        description: 'Ribbed roll-neck with seamless circular knit construction.',
        threeDType: 'shirt'
      },
      {
        id: 'g-25',
        name: 'Pleated Wool Flannel Peg Trousers',
        type: 'bottom',
        material: 'Vitale Barberis Flannel',
        colorName: 'Dark Peat Brown',
        colorHex: '#3b2f28',
        description: 'High-rise with clean side tabs and gentle drape over the boot.',
        threeDType: 'pants'
      },
      {
        id: 'g-26',
        name: 'Goodyear Welted Calf Chelsea Boots',
        type: 'footwear',
        material: 'Aniline Waxed Leather',
        colorName: 'Chestnut Brown',
        colorHex: '#42281a',
        description: 'Dainite studded rubber sole with pull tabs and tone-on-tone elastic.',
        threeDType: 'shoes'
      }
    ],
    accessories: [
      { name: 'Brushed Suede Slouchy Weekender', type: 'Bag', material: 'Nubuck Calfskin', detail: 'Polished horn hardware accents' },
      { name: 'Cashmere Fringe Oversized Scarf', type: 'Accessory', material: '2-Ply Cashmere', detail: 'Tone-on-tone woven label' },
      { name: 'Tortoiseshell Horn Spectacles', type: 'Eyewear', material: 'Real Water Buffalo Horn', detail: 'Warm honey striations' }
    ],
    colorPalette: [
      { name: 'Caramel Camel', hex: '#9c6f44' },
      { name: 'Oat Melange', hex: '#d8ccb8' },
      { name: 'Dark Peat', hex: '#3b2f28' },
      { name: 'Chestnut', hex: '#42281a' }
    ],
    stylingTips: [
      'Tie the belt in an effortless knot at the front without threading through buckle.',
      'Slightly slouch the turtleneck collar rather than folding it rigidly flat.',
      'Allow the oat cashmere sleeves to peek 2 inches past the coat cuffs.'
    ],
    weatherSuitability: ['Cold', 'Rainy'],
    occasions: ['Casual', 'Travel', 'Office'],
    styles: ['Minimal', 'Old Money', 'Smart Casual'],
    silhouette: 'Oversized',
    budget: 'Premium',
    threeDConfig: {
      primaryColor: '#9c6f44',
      secondaryColor: '#d8ccb8',
      metalColor: '#42281a',
      garmentType: 'trench',
      roughness: 0.85,
      metalness: 0.1,
      fabricName: 'Double-Faced Alpaca & Inner Mongolian Cashmere'
    }
  },
  {
    id: 'look-minimal-studio',
    name: 'The Monochrome Architect',
    label: 'LOOK 08 / MODERN MINIMALIST',
    category: 'Casual',
    mood: 'Minimalist',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1200&q=85',
    description: 'A masterclass in proportions: crisp oversized poplin shirt, ultra-wide fluid wool trousers, and minimalist architectural leather mules.',
    editorialNotes: 'Stripped of all unnecessary ornamentation. Every line and stitch serves a structural purpose.',
    garments: [
      {
        id: 'g-27',
        name: 'Oversized Crisp Poplin Blouse',
        type: 'top',
        material: 'High-Density Organic Cotton Poplin',
        colorName: 'Optic White',
        colorHex: '#f5f5f7',
        description: 'Dramatic curved hem with exaggerated cuffs and hidden placket.',
        threeDType: 'shirt'
      },
      {
        id: 'g-28',
        name: 'Wide-Leg Draped Crepe Trousers',
        type: 'bottom',
        material: 'Triple Crepe Wool Blend',
        colorName: 'Pitch Charcoal',
        colorHex: '#1e1e24',
        description: 'Floor-skimming puddle hems with deep trouser pleats.',
        threeDType: 'pants'
      },
      {
        id: 'g-29',
        name: 'Square-Toe Glove Leather Mules',
        type: 'footwear',
        material: 'Supple Nappa Leather',
        colorName: 'Black Onyx',
        colorHex: '#101012',
        description: 'Block heel with padded footbed and minimalist top edge.',
        threeDType: 'shoes'
      }
    ],
    accessories: [
      { name: 'Geometric Sculptural Brass Ear Cuff', type: 'Jewelry', material: 'Cast Brass', detail: 'Brushed satin finish' },
      { name: 'Pillow Leather Frame Clutch', type: 'Bag', material: 'Padded Nappa Leather', detail: 'Concealed magnetic frame' },
      { name: 'Slim Leather Cinch Belt', type: 'Belt', material: 'Saddlery Leather', detail: 'Minimal peg closure' }
    ],
    colorPalette: [
      { name: 'Optic White', hex: '#f5f5f7' },
      { name: 'Pitch Charcoal', hex: '#1e1e24' },
      { name: 'Onyx Black', hex: '#101012' },
      { name: 'Satin Brass', hex: '#d4af37' }
    ],
    stylingTips: [
      'French-tuck only the center three inches of the poplin shirt into the high waistband.',
      'Keep accessories strictly geometric to complement the angular silhouettes.',
      'Wear with neutral lip and slicked-back hairstyle for editorial balance.'
    ],
    weatherSuitability: ['Hot', 'Mild'],
    occasions: ['Casual', 'Office', 'Date Night'],
    styles: ['Minimal', 'Smart Casual', 'Bold'],
    silhouette: 'Relaxed',
    budget: 'Mid-range',
    threeDConfig: {
      primaryColor: '#f5f5f7',
      secondaryColor: '#1e1e24',
      metalColor: '#d4af37',
      garmentType: 'jacket',
      roughness: 0.5,
      metalness: 0.2,
      fabricName: 'Organic Poplin & Triple Crepe Wool'
    }
  },
  {
    id: 'look-oldmoney-equestrian',
    name: 'The Windsor Country Estate',
    label: 'LOOK 09 / OLD MONEY CLASSIC',
    category: 'Formal',
    mood: 'Sophisticated',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=1200&q=85',
    description: 'Heritage houndstooth hacking jacket with suede elbow patches, cable-knit cricket sweater, tailored breeches, and riding boots.',
    editorialNotes: 'Evoking the timeless leisure of English country estates. Rich earth tones harmonize with tactile textures of wool, cable-knit, and bridle leather.',
    garments: [
      {
        id: 'g-30',
        name: 'Heritage Houndstooth Tweed Jacket',
        type: 'outerwear',
        material: 'Scottish Harris Tweed',
        colorName: 'Forest Brown & Tan Houndstooth',
        colorHex: '#5e4b37',
        description: 'Slanted flap ticket pocket with genuine woven leather buttons.',
        threeDType: 'jacket'
      },
      {
        id: 'g-31',
        name: 'V-Neck Heavy Cable-Knit Sweater',
        type: 'top',
        material: '100% Pure British Wool',
        colorName: 'Clotted Cream',
        colorHex: '#eee6d8',
        description: 'Heritage honeycomb cables with contrast burgundy neck stripe.',
        threeDType: 'shirt'
      },
      {
        id: 'g-32',
        name: 'Tailored Moleskin Riding Trousers',
        type: 'bottom',
        material: 'Heavyweight Cotton Moleskin',
        colorName: 'Olive Drab',
        colorHex: '#484b3d',
        description: 'Suede-reinforced inner thigh seams with tapered ankle vents.',
        threeDType: 'pants'
      },
      {
        id: 'g-33',
        name: 'Handcrafted Polished Field Boots',
        type: 'footwear',
        material: 'French Box Calf Leather',
        colorName: 'Dark Mahogany',
        colorHex: '#351c14',
        description: 'Full-length rear brass zipper with spur rests and punched toe cap.',
        threeDType: 'shoes'
      }
    ],
    accessories: [
      { name: 'Waxed Canvas Cartridge Bag', type: 'Bag', material: 'Scottish Waxed Cotton', detail: 'Brass buckle and bridle leather trim' },
      { name: 'Tattersall Check Wool Scarf', type: 'Accessory', material: 'Superfine Lambswool', detail: 'Fringed ends with subtle check' },
      { name: 'Vintage Gold Signet Ring', type: 'Jewelry', material: '18k Yellow Gold', detail: 'Intaglio crest engraving' }
    ],
    colorPalette: [
      { name: 'Tweed Brown', hex: '#5e4b37' },
      { name: 'Clotted Cream', hex: '#eee6d8' },
      { name: 'Olive Drab', hex: '#484b3d' },
      { name: 'Dark Mahogany', hex: '#351c14' }
    ],
    stylingTips: [
      'Layer the cable-knit directly over a soft Tattersall button-down shirt.',
      'Tuck trousers neatly into tall riding boots for an authentic equestrian line.',
      'Allow natural scuffs on the leather boots to develop a rich vintage patina.'
    ],
    weatherSuitability: ['Cold', 'Mild'],
    occasions: ['Travel', 'Casual', 'Office'],
    styles: ['Old Money', 'Classic', 'Smart Casual'],
    silhouette: 'Regular',
    budget: 'Premium',
    threeDConfig: {
      primaryColor: '#5e4b37',
      secondaryColor: '#eee6d8',
      metalColor: '#351c14',
      garmentType: 'blazer',
      roughness: 0.9,
      metalness: 0.15,
      fabricName: 'Harris Tweed & British Lambswool'
    }
  },
  {
    id: 'look-party-cocktail',
    name: 'The Golden Hour Lamé Slip',
    label: 'LOOK 10 / LUMINOUS COCKTAIL',
    category: 'Party',
    mood: 'Bold',
    image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1200&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85',
    description: 'A bias-cut liquid metallic gold slip gown paired with a tailored tuxedo capelet, crystal-embellished sandals, and sculpted pearl drops.',
    editorialNotes: 'Captures the magic of the twilight transition. The bias-cut fabric skims the natural contours of the body with fluid water-like motion.',
    garments: [
      {
        id: 'g-34',
        name: 'Bias-Cut Liquid Gold Lamé Gown',
        type: 'top',
        material: 'Silk-Lurex Metallic Knit',
        colorName: 'Molten Champagne Gold',
        colorHex: '#d8b979',
        description: 'Cowl back with micro-spaghetti straps and floor-grazing puddle hem.',
        threeDType: 'dress'
      },
      {
        id: 'g-35',
        name: 'Cropped Tailored Tuxedo Capelet',
        type: 'outerwear',
        material: 'Wool Crepe & Silk Satin',
        colorName: 'Smoky Charcoal',
        colorHex: '#222228',
        description: 'Padded sharp shoulders with open arm slits for effortless movement.',
        threeDType: 'cape'
      },
      {
        id: 'g-36',
        name: 'Barely-There Stiletto Sandals',
        type: 'footwear',
        material: 'Metallic Specchio Leather',
        colorName: 'Pale Gold',
        colorHex: '#dec48d',
        description: 'Delicate 95mm stiletto heel with ankle wrap strap and crystal buckle.',
        threeDType: 'shoes'
      }
    ],
    accessories: [
      { name: 'Baroque Keshi Pearl Drop Earrings', type: 'Jewelry', material: 'Natural Keshi Pearls & 18k Gold', detail: 'Asymmetrical organic silhouettes' },
      { name: 'Hammered Brass Shell Clutch', type: 'Bag', material: 'Solid Hammered Brass', detail: 'Magnetic clasp with velvet lining' },
      { name: 'Delicate Snake Chain Bracelet', type: 'Jewelry', material: '18k Yellow Gold', detail: 'Liquid-movement diamond cut link' }
    ],
    colorPalette: [
      { name: 'Molten Champagne', hex: '#d8b979' },
      { name: 'Smoky Charcoal', hex: '#222228' },
      { name: 'Baroque Pearl', hex: '#faf7f2' },
      { name: 'Pale Gold', hex: '#dec48d' }
    ],
    stylingTips: [
      'Let the gown take center stage; avoid heavy necklaces that compete with the cowl neckline.',
      'Carry the tuxedo capelet loosely across one shoulder during cocktail hour.',
      'Opt for dewy skin and neutral bronze eye makeup to reflect the warm metallic hues.'
    ],
    weatherSuitability: ['Hot', 'Mild'],
    occasions: ['Party', 'Wedding', 'Date Night'],
    styles: ['Bold', 'Classic', 'Minimal'],
    silhouette: 'Slim',
    budget: 'Premium',
    threeDConfig: {
      primaryColor: '#d8b979',
      secondaryColor: '#222228',
      metalColor: '#faf7f2',
      garmentType: 'gown',
      roughness: 0.2,
      metalness: 0.8,
      fabricName: 'Silk-Lurex Lamé & Liquid Specchio'
    }
  }
];
