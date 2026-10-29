import { CategoryType } from '../types/fashion';

export interface CategoryInfo {
  id: CategoryType;
  title: string;
  subtitle: string;
  count: string;
  image: string;
  description: string;
  palette: string[];
}

export const CATEGORIES_DATA: CategoryInfo[] = [
  {
    id: 'Casual',
    title: 'Casual Essentials',
    subtitle: 'UNDERSTATED REFINEMENT',
    count: '14 Looks',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=85',
    description: 'Slub linens, unlined tailoring, and tactile knitwear designed for living between the lines of work and leisure.',
    palette: ['#85927c', '#e8e0d0', '#c7bba7', '#b38243']
  },
  {
    id: 'Formal',
    title: 'Modern Tailoring',
    subtitle: 'THE SAVILE ROW CODE',
    count: '12 Looks',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=85',
    description: 'High-twist wool flannels, dramatic peak lapels, and razor-sharp Hollywood waistbands cut for presence.',
    palette: ['#181f33', '#fcfcfc', '#2b1b17', '#d4af37']
  },
  {
    id: 'Party',
    title: 'Evening & Gala',
    subtitle: 'AFTER-HOURS LUMINESCENCE',
    count: '10 Looks',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85',
    description: 'Molten silk lamé, liquid midnight velvet, and sculptural hand-cast metals made for celebration.',
    palette: ['#3a131b', '#d8c7b0', '#0d0d10', '#e5c583']
  },
  {
    id: 'Streetwear',
    title: 'Neo-Streetwear',
    subtitle: 'ARCHITECTURAL VOLUME',
    count: '16 Looks',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=85',
    description: '500GSM loopback fleece, Cordura modular cargo structures, and high-performance trail footwear.',
    palette: ['#3b3e47', '#141416', '#ff5e3a', '#8b8e98']
  },
  {
    id: 'Traditional',
    title: 'Artisanal Heritage',
    subtitle: 'MODERN HEIRLOOMS',
    count: '09 Looks',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=85',
    description: 'Varanasi raw silk brocades, hand-beaten silver kalgis, and antique Zari embroidery celebrating legacy craft.',
    palette: ['#996515', '#f4ede2', '#194d33', '#d4af37']
  },
  {
    id: 'Seasonal',
    title: 'Seasonal Capsule',
    subtitle: 'TACTILE CLIMATE LAYERS',
    count: '11 Looks',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=85',
    description: 'Double-faced baby alpaca coats, seamless 12-gauge Inner Mongolian cashmere, and weather-proof shearling.',
    palette: ['#9c6f44', '#d8ccb8', '#3b2f28', '#42281a']
  }
];
