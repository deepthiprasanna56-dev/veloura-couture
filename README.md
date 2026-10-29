# Veloura Couture

**A fashion discovery and personal styling experience, inspired by the visual language of luxury editorials.**

Veloura Couture brings together an image-led landing page, an interactive runway, and a preference-based AI stylist in one responsive web application. Explore curated outfits, compare garments and palettes, and save looks to revisit later.

## Features

- **Editorial landing page** — layered fashion photography, oversized typography, a soft color wash, and responsive navigation.
- **Scroll-driven runway** — seven outfit scenes presented in a pinned, Three.js-powered experience, with scene navigation and garment details.
- **Interactive lookbook** — browse outfits, inspect their garments, and save favorites.
- **Personal stylist** — choose an occasion, aesthetic, palette, garment, weather, budget, and silhouette to receive ranked outfit recommendations.
- **Outfit detail studio** — inspect a look with orbit controls, camera angles, lighting modes, and garment-layer toggles.
- **Explore and discover** — browse trends, moods, categories, complete-look details, color stories, and style-journal articles.
- **Saved looks** — keep a personal shortlist between visits using browser local storage.
- **Responsive and motion-aware** — layouts adapt to smaller screens, and animations respect reduced-motion preferences.

## Technology

- React 19 and TypeScript
- Vite 8
- Tailwind CSS 4
- Three.js for interactive 3D scenes
- GSAP ScrollTrigger and Lenis for scroll-driven experiences
- Lucide React for interface icons

## Getting started

### Requirements

- Node.js 20.19+ or 22.12+
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL printed by Vite in your terminal.

### Build and preview

```bash
npm run build
npm run preview
```

### Lint

```bash
npm run lint
```

## Project structure

```text
src/
├── App.tsx                    # Page composition and shared application state
├── main.tsx                   # React entry point
├── index.css                  # Global styles, theme, and responsive motion
├── components/                # Page sections, navigation, runway, and overlays
├── data/                      # Outfit, category, palette, and editorial content
├── hooks/                     # Outfit recommendation logic
├── types/                     # Shared TypeScript domain types
└── assets/                    # Local visual assets
```

## How recommendations work

The stylist ranks the bundled outfit catalogue against the selected preferences. Recommendations are generated locally in the browser; this project does not currently require an AI service or backend API. Saved looks are stored in `localStorage` on the current browser.

## Content and external assets

Outfit, category, color-story, and journal content is defined in `src/data/`. Some editorial photography is loaded from Unsplash, and the typefaces are loaded from Google Fonts, so those assets require an internet connection.

## Browser support

The 3D runway and outfit studio require a browser with WebGL support. If WebGL is unavailable, the rest of the page remains available, but 3D scenes may not render.
