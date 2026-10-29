import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ScrollSequence3DCanvasProps {
  currentScene: number;
  scrollProgress: number;
  sceneProgress: number;
  image: string;
  imageAlt: string;
}

const SCENE_PALETTES = [
  { primary: 0xd4af37, name: 'OBSIDIAN & BRUSHED GOLD' },
  { primary: 0x85927c, name: 'ALABASTER & OLIVE LINEN' },
  { primary: 0xff3300, name: 'ACID ORANGE & CHARCOAL' },
  { primary: 0x5a7ca8, name: 'MIDNIGHT BLUE & SILVER' },
  { primary: 0xd4af37, name: 'METALLIC GOLD & NOIR' },
  { primary: 0xb55a30, name: 'CRIMSON & VARANASI SILK' },
  { primary: 0xa8a090, name: 'TERRACOTTA & CASHMERE' },
];

export const ScrollSequence3DCanvas: React.FC<ScrollSequence3DCanvasProps> = ({
  currentScene,
  scrollProgress,
  sceneProgress,
  image,
  imageAlt,
}) => {
  const threeMountRef = useRef<HTMLDivElement>(null);
  const sceneColor = SCENE_PALETTES[currentScene]?.primary || 0xd4af37;

  useEffect(() => {
    const container = threeMountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    container.appendChild(renderer.domElement);

    // Dynamic Dust Particles
    const pCount = 90;
    const pGeo = new THREE.BufferGeometry();
    const pos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 3;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));

    const pMat = new THREE.PointsMaterial({
      color: sceneColor,
      size: 0.035,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const points = new THREE.Points(pGeo, pMat);
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

      points.rotation.y = t * 0.035;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      pGeo.dispose();
      pMat.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [currentScene, sceneColor]);

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#0d0d10]" aria-label={imageAlt}>
      {/* High-Resolution Editorial Lookbook Photo with Subtle Camera Motion */}
      <img
        key={currentScene}
        src={image}
        alt={imageAlt}
        className="runway-editorial-image"
        style={{
          objectPosition: `${50 + (sceneProgress - 0.5) * 6}% center`,
          transform: `scale(${1.03 + scrollProgress * 0.04})`,
        }}
      />

      {/* Cinematic Studio Spotlight Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/30 pointer-events-none" />
      <div className="runway-photo-grain" aria-hidden="true" />

      {/* 3D Realtime Three.js Overlay Canvas */}
      <div ref={threeMountRef} className="absolute inset-0 pointer-events-none z-10" />

      {/* Runway Coordinates Watermark */}
      <div className="absolute top-6 right-6 hidden md:flex items-center gap-2 bg-black/65 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-[10px] font-mono text-zinc-300 pointer-events-none z-20">
        <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
        <span>PARIS RUNWAY STAGE // SS26</span>
      </div>

      <div className="absolute bottom-6 left-6 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] text-white/80 pointer-events-none z-20 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
        ATELIER RUNWAY · FRAME 0{currentScene + 1} / 07
      </div>
    </div>
  );
};
