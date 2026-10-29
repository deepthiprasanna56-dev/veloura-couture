import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export type HeroGarmentStyle = 'obsidian' | 'blazer' | 'gold';
export type HeroLightingPreset = 'runway' | 'golden' | 'editorial';

interface Hero3DCanvasProps {
  garmentStyle: HeroGarmentStyle;
  lightingPreset: HeroLightingPreset;
}

const editorialLooks: Record<
  HeroGarmentStyle,
  {
    image: string;
    alt: string;
    material: string;
    accentColor: number;
    badge: string;
  }
> = {
  obsidian: {
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=90',
    alt: 'High-fashion model wearing sculptural black jacket in editorial runway setting',
    material: 'OILED CALFSKIN & PALLADIUM',
    accentColor: 0xd4af37,
    badge: 'PARIS EDITORIAL 01',
  },
  blazer: {
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=90',
    alt: 'Model in refined midnight blue Savile Row tailoring',
    material: 'SUPER 150S CHARCOAL WOOL',
    accentColor: 0x90b0e0,
    badge: 'SAVILE ROW 02',
  },
  gold: {
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=90',
    alt: 'High fashion editorial model in golden hour monochrome attire',
    material: 'LUMINESCENT RAW SILK',
    accentColor: 0xf5d061,
    badge: 'MILAN ATELIER 03',
  },
};

const lightingFilters: Record<HeroLightingPreset, string> = {
  runway: 'brightness(.9) contrast(1.1) saturate(.88)',
  golden: 'brightness(1.02) contrast(1.05) saturate(1.15) sepia(.1)',
  editorial: 'brightness(.88) contrast(1.18) saturate(.65)',
};

export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = ({ garmentStyle, lightingPreset }) => {
  const look = editorialLooks[garmentStyle];
  const threeMountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = threeMountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 4.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    container.appendChild(renderer.domElement);

    // Dynamic 3D ambient particle constellation
    const count = 75;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 5.5;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 5.5;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 3;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));

    const pMat = new THREE.PointsMaterial({
      color: look.accentColor,
      size: 0.04,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const points = new THREE.Points(geo, pMat);
    scene.add(points);

    let animId: number;
    let clock = new THREE.Clock();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      points.rotation.y = t * 0.04;
      points.rotation.x = Math.sin(t * 0.03) * 0.08;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      geo.dispose();
      pMat.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [garmentStyle, look.accentColor]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0d0d10]">
      {/* Editorial High-Fashion Photo with Parallax & Lighting Transition */}
      <img
        key={look.image}
        src={look.image}
        alt={look.alt}
        className="hero-editorial-image"
        style={{ filter: lightingFilters[lightingPreset] }}
      />

      {/* Atmospheric Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/35" />
      <div className="hero-photo-grain" aria-hidden="true" />

      {/* Interactive 3D Canvas Layer */}
      <div ref={threeMountRef} className="absolute inset-0 pointer-events-none z-10" />

      {/* Haute Couture Hologram Badge */}
      <div className="absolute top-4 left-4 z-20 pointer-events-none">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono tracking-widest text-[#d4af37]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-ping" />
          {look.badge}
        </span>
      </div>

      <span className="sr-only">{look.material}</span>
    </div>
  );
};
