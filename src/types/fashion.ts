export type OccasionType = 'Casual' | 'Office' | 'Wedding' | 'Party' | 'Date Night' | 'Travel' | 'Festival';
export type StyleType = 'Minimal' | 'Old Money' | 'Streetwear' | 'Smart Casual' | 'Classic' | 'Bold' | 'Traditional' | 'Effortless';
export type ColorPreference = 'Black' | 'White' | 'Navy' | 'Beige' | 'Earth Tones' | 'Pastels' | 'Custom';
export type ClothingPreference = 'Shirts' | 'T-shirts' | 'Trousers' | 'Jeans' | 'Jackets' | 'Dresses' | 'Traditional Wear';
export type WeatherType = 'Hot' | 'Mild' | 'Cold' | 'Rainy';
export type BudgetType = 'Affordable' | 'Mid-range' | 'Premium';
export type BodyFitType = 'Relaxed' | 'Regular' | 'Slim' | 'Oversized';
export type CategoryType = 'All' | 'Casual' | 'Formal' | 'Party' | 'Streetwear' | 'Traditional' | 'Seasonal';
export type MoodType = 'Minimalist' | 'Effortless' | 'Bold' | 'Sophisticated' | 'Sporty' | 'Experimental';

export interface GarmentItem {
  id: string;
  name: string;
  type: 'outerwear' | 'top' | 'bottom' | 'footwear' | 'accessory';
  material: string;
  colorName: string;
  colorHex: string;
  description: string;
  threeDType: 'jacket' | 'shirt' | 'hoodie' | 'pants' | 'sneakers' | 'shoes' | 'watch' | 'bag' | 'dress' | 'cape';
}

export interface AccessoryItem {
  name: string;
  type: string;
  material: string;
  detail: string;
}

export interface ColorSwatch {
  name: string;
  hex: string;
}

export interface Outfit {
  id: string;
  name: string;
  label: string;
  category: CategoryType;
  mood: MoodType;
  image: string;
  secondaryImage?: string;
  description: string;
  editorialNotes: string;
  garments: GarmentItem[];
  accessories: AccessoryItem[];
  colorPalette: ColorSwatch[];
  stylingTips: string[];
  weatherSuitability: WeatherType[];
  occasions: OccasionType[];
  styles: StyleType[];
  silhouette: BodyFitType;
  budget: BudgetType;
  featuredScene?: number; // 1 to 7 corresponding to scroll scenes
  threeDConfig: {
    primaryColor: string;
    secondaryColor: string;
    metalColor: string;
    garmentType: 'jacket' | 'blazer' | 'hoodie' | 'gown' | 'trench' | 'kurta' | 'streetwear';
    roughness: number;
    metalness: number;
    fabricName: string;
  };
}

export interface StylistPreferences {
  occasion: OccasionType;
  style: StyleType;
  preferredColor: ColorPreference;
  customColorHex?: string;
  clothingPreference: ClothingPreference;
  weather: WeatherType;
  budget: BudgetType;
  bodyFit: BodyFitType;
}

export interface ColorStory {
  id: string;
  title: string;
  season: string;
  description: string;
  palette: ColorSwatch[];
  suggestedLookIds: string[];
  editorialImage: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
  tags: string[];
}
