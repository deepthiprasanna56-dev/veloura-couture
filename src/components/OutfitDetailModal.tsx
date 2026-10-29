import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import confetti from 'canvas-confetti';
import { X, RotateCcw, Sun, Sparkles, Bookmark, Check, ShieldCheck, ChevronRight, Eye, Layers } from 'lucide-react';
import { Outfit } from '../types/fashion';

interface OutfitDetailModalProps {
  outfit: Outfit | null;
  onClose: () => void;
  onToggleSave: (outfit: Outfit) => void;
  isSaved: boolean;
}

type LightingMode = 'runway' | 'golden' | 'editorial' | 'neon';
type AnglePreset = 'front' | 'side' | 'back' | 'perspective';

export const OutfitDetailModal: React.FC<OutfitDetailModalProps> = ({
  outfit,
  onClose,
  onToggleSave,
  isSaved,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [lightingMode, setLightingMode] = useState<LightingMode>('runway');
  const [activeTab, setActiveTab] = useState<'3d' | 'editorial' | 'anatomy'>('3d');
  const [activeAngle, setActiveAngle] = useState<AnglePreset>('perspective');

  // Layer toggles
  const [layerOuterwear, setLayerOuterwear] = useState(true);
  const [layerBottom, setLayerBottom] = useState(true);
  const [layerShoes, setLayerShoes] = useState(true);
  const [layerAccessories, setLayerAccessories] = useState(true);
  const [layerParticles, setLayerParticles] = useState(true);

  // References for live 3D updates
  const controlsRef = useRef<OrbitControls | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const lightsRef = useRef<{
    ambient: THREE.AmbientLight;
    spot: THREE.SpotLight;
    rim: THREE.DirectionalLight;
  } | null>(null);

  const meshesRef = useRef<{
    outerwear: THREE.Group;
    bottom: THREE.Group;
    shoes: THREE.Group;
    accessories: THREE.Group;
    particles: THREE.Points;
  } | null>(null);

  // Trigger celebration on save
  const handleSaveWithCelebration = () => {
    if (!outfit) return;
    onToggleSave(outfit);
    if (!isSaved) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#d4af37', '#f7f0df', '#aa8428', '#ffffff'],
      });
    }
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Three.js 3D Setup
  useEffect(() => {
    if (!outfit) return;
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0a0d, 0.04);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(2.2, 0.4, 4.2);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxDistance = 8;
    controls.minDistance = 2;
    controls.target.set(0, 0, 0);
    controlsRef.current = controls;

    // Groups for toggleable layers
    const outerwearGroup = new THREE.Group();
    const bottomGroup = new THREE.Group();
    const shoesGroup = new THREE.Group();
    const accessoriesGroup = new THREE.Group();

    // 1. Mannequin Torso Core
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x18181e,
      roughness: 0.3,
      metalness: 0.8,
    });
    const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.36, 1.3, 32), coreMat);
    torso.position.y = 0.2;
    scene.add(torso);

    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.2, 0.4, 24), coreMat);
    neck.position.y = 0.95;
    scene.add(neck);

    // 2. Outerwear Garment Layer
    const garmentMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(outfit.threeDConfig.primaryColor),
      roughness: outfit.threeDConfig.roughness,
      metalness: outfit.threeDConfig.metalness,
    });

    const leftLapel = new THREE.Mesh(new THREE.BoxGeometry(0.36, 1.15, 0.5), garmentMat);
    leftLapel.position.set(-0.38, 0.22, 0.06);
    leftLapel.rotation.z = 0.1;
    outerwearGroup.add(leftLapel);

    const rightLapel = new THREE.Mesh(new THREE.BoxGeometry(0.36, 1.15, 0.5), garmentMat);
    rightLapel.position.set(0.38, 0.22, 0.06);
    rightLapel.rotation.z = -0.1;
    outerwearGroup.add(rightLapel);

    // Collar / Shawl
    const collarMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(outfit.threeDConfig.metalColor || '#d4af37'),
      roughness: 0.3,
      metalness: 0.7,
    });
    const collar = new THREE.Mesh(
      new THREE.TorusGeometry(0.44, 0.1, 16, 40, Math.PI * 1.15),
      collarMat
    );
    collar.position.set(0, 0.75, 0.08);
    collar.rotation.x = Math.PI * 0.42;
    collar.rotation.z = -Math.PI * 0.08;
    outerwearGroup.add(collar);
    scene.add(outerwearGroup);

    // 3. Trousers / Bottom Layer
    const trouserMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(outfit.threeDConfig.secondaryColor),
      roughness: 0.65,
      metalness: 0.15,
    });
    const leftLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.15, 1.35, 24), trouserMat);
    leftLeg.position.set(-0.22, -1.05, 0);
    const rightLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.15, 1.35, 24), trouserMat);
    rightLeg.position.set(0.22, -1.05, 0);
    bottomGroup.add(leftLeg, rightLeg);
    scene.add(bottomGroup);

    // 4. Footwear Layer
    const shoeMat = new THREE.MeshStandardMaterial({
      color: 0x111114,
      roughness: 0.25,
      metalness: 0.6,
    });
    const leftShoe = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.16, 0.52), shoeMat);
    leftShoe.position.set(-0.24, -1.78, 0.06);
    const rightShoe = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.16, 0.52), shoeMat);
    rightShoe.position.set(0.24, -1.78, 0.06);
    shoesGroup.add(leftShoe, rightShoe);
    scene.add(shoesGroup);

    // 5. Floating High-Jewelry / Timepiece Layer
    const accMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(outfit.threeDConfig.metalColor || '#d4af37'),
      roughness: 0.15,
      metalness: 0.95,
    });
    const watchHalo = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.025, 16, 32), accMat);
    watchHalo.position.set(0.85, -0.1, 0.35);
    watchHalo.rotation.x = Math.PI / 2.5;
    accessoriesGroup.add(watchHalo);

    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.02, 16, 24), accMat);
    ring.position.set(-0.85, 0.3, 0.2);
    accessoriesGroup.add(ring);
    scene.add(accessoriesGroup);

    // 6. Floating Silk & Gold Dust Particles
    const particleCount = 140;
    const particleGeom = new THREE.BufferGeometry();
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 5;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    particleGeom.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xd4af37,
      size: 0.035,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);

    meshesRef.current = {
      outerwear: outerwearGroup,
      bottom: bottomGroup,
      shoes: shoesGroup,
      accessories: accessoriesGroup,
      particles,
    };

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambient);

    const spot = new THREE.SpotLight(0xfff0dd, 30, 14, Math.PI * 0.3, 0.4);
    spot.position.set(2.5, 4.5, 3.5);
    scene.add(spot);

    const rim = new THREE.DirectionalLight(0xd4af37, 3.2);
    rim.position.set(-3, 2, -2);
    scene.add(rim);

    lightsRef.current = { ambient, spot, rim };

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Render loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      controls.update();

      // Subtle breath
      particles.rotation.y = elapsed * 0.06;
      watchHalo.rotation.y = elapsed * 0.8;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      scene.traverse(obj => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry?.dispose();
          if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
          else obj.material?.dispose();
        }
      });
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [outfit]);

  // Handle Layer toggles dynamically
  useEffect(() => {
    if (!meshesRef.current) return;
    meshesRef.current.outerwear.visible = layerOuterwear;
    meshesRef.current.bottom.visible = layerBottom;
    meshesRef.current.shoes.visible = layerShoes;
    meshesRef.current.accessories.visible = layerAccessories;
    meshesRef.current.particles.visible = layerParticles;
  }, [layerOuterwear, layerBottom, layerShoes, layerAccessories, layerParticles]);

  // Handle Lighting Modes
  useEffect(() => {
    if (!lightsRef.current) return;
    const { ambient, spot, rim } = lightsRef.current;

    switch (lightingMode) {
      case 'golden':
        ambient.color.setHex(0xffe4cc);
        ambient.intensity = 0.45;
        spot.color.setHex(0xffaa44);
        spot.intensity = 35;
        rim.color.setHex(0xffd700);
        break;
      case 'editorial':
        ambient.color.setHex(0xffffff);
        ambient.intensity = 0.85;
        spot.color.setHex(0xf5f5fa);
        spot.intensity = 25;
        rim.color.setHex(0xcccccc);
        break;
      case 'neon':
        ambient.color.setHex(0x1a0a2a);
        ambient.intensity = 0.3;
        spot.color.setHex(0x00f0ff);
        spot.intensity = 38;
        rim.color.setHex(0xff0077);
        break;
      case 'runway':
      default:
        ambient.color.setHex(0xffffff);
        ambient.intensity = 0.4;
        spot.color.setHex(0xfff0dd);
        spot.intensity = 30;
        rim.color.setHex(0xd4af37);
        break;
    }
  }, [lightingMode]);

  // Handle Angle Presets
  const setCameraAngle = (angle: AnglePreset) => {
    if (!cameraRef.current || !controlsRef.current) return;
    setActiveAngle(angle);
    const camera = cameraRef.current;
    const controls = controlsRef.current;

    switch (angle) {
      case 'front':
        camera.position.set(0, 0.2, 4.5);
        break;
      case 'side':
        camera.position.set(4.5, 0.2, 0);
        break;
      case 'back':
        camera.position.set(0, 0.2, -4.5);
        break;
      case 'perspective':
        camera.position.set(2.2, 0.4, 4.2);
        break;
    }
    controls.target.set(0, 0, 0);
    controls.update();
  };

  if (!outfit) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn">
      {/* Main Modal Box */}
      <div className="relative w-full max-w-6xl h-[92vh] glass-panel-gold rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-[#d4af37]/30">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37]" />
            <span className="text-xs uppercase font-mono tracking-widest text-[#d4af37]">
              {outfit.label}
            </span>
            <span className="hidden sm:inline text-zinc-600">|</span>
            <span className="hidden sm:inline text-xs font-mono text-zinc-400">
              {outfit.category} Edition
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Save Button */}
            <button
              onClick={handleSaveWithCelebration}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium flex items-center gap-2 border transition-all ${
                isSaved
                  ? 'bg-[#d4af37] text-black border-[#d4af37]'
                  : 'bg-white/5 border-white/10 text-white hover:border-[#d4af37]'
              }`}
            >
              {isSaved ? <Check className="w-3.5 h-3.5" /> : <Bookmark className="w-3.5 h-3.5" />}
              <span>{isSaved ? 'Saved to Closet' : 'Save Look'}</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center Content Body */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
          {/* Left: Interactive 3D Viewport (7 Cols) */}
          <div className="lg:col-span-7 h-[45vh] lg:h-full relative bg-gradient-to-b from-[#0a0a0d] to-[#060608]">
            <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

            {/* 3D Viewport Controls Overlay */}
            {/* Camera Angle Presets */}
            <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/50 backdrop-blur-md p-1.5 rounded-xl border border-white/10">
              {(['perspective', 'front', 'side', 'back'] as AnglePreset[]).map((angle) => (
                <button
                  key={angle}
                  onClick={() => setCameraAngle(angle)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-mono capitalize transition-all ${
                    activeAngle === angle
                      ? 'bg-[#d4af37] text-black font-semibold'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {angle}
                </button>
              ))}
            </div>

            {/* Studio Lighting Mood Toggles */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/50 backdrop-blur-md p-1.5 rounded-xl border border-white/10">
              <span className="text-[10px] text-zinc-400 uppercase font-mono px-1">Lighting:</span>
              {(['runway', 'golden', 'editorial', 'neon'] as LightingMode[]).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setLightingMode(mode)}
                  className={`px-2 py-1 rounded-lg text-[10px] font-mono capitalize transition-all ${
                    lightingMode === mode
                      ? 'bg-white/20 text-[#d4af37] border border-[#d4af37]/40'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>

            {/* Layer Toggles Pills */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 overflow-x-auto py-1">
              <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs">
                <Layers className="w-3.5 h-3.5 text-[#d4af37]" />
                <span className="text-[11px] font-mono text-zinc-400 mr-1">Layers:</span>

                <button
                  onClick={() => setLayerOuterwear(!layerOuterwear)}
                  className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                    layerOuterwear ? 'bg-[#d4af37]/20 text-[#d4af37]' : 'text-zinc-500 line-through'
                  }`}
                >
                  Coat/Jacket
                </button>

                <button
                  onClick={() => setLayerBottom(!layerBottom)}
                  className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                    layerBottom ? 'bg-[#d4af37]/20 text-[#d4af37]' : 'text-zinc-500 line-through'
                  }`}
                >
                  Trousers
                </button>

                <button
                  onClick={() => setLayerShoes(!layerShoes)}
                  className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                    layerShoes ? 'bg-[#d4af37]/20 text-[#d4af37]' : 'text-zinc-500 line-through'
                  }`}
                >
                  Shoes
                </button>

                <button
                  onClick={() => setLayerAccessories(!layerAccessories)}
                  className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                    layerAccessories ? 'bg-[#d4af37]/20 text-[#d4af37]' : 'text-zinc-500 line-through'
                  }`}
                >
                  Jewelry
                </button>
              </div>
            </div>
          </div>

          {/* Right: Detailed Specification & Editorial Notes (5 Cols) */}
          <div className="lg:col-span-5 h-[47vh] lg:h-full bg-[#0a0a0d] border-t lg:border-t-0 lg:border-l border-white/10 p-6 sm:p-8 overflow-y-auto">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-mono">
              Haute Couture Anatomy
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif tracking-tight text-white mt-1 mb-2">
              {outfit.name}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mb-6">
              {outfit.editorialNotes}
            </p>

            {/* Tabs */}
            <div className="flex border-b border-white/10 mb-6 gap-6">
              {(['3d', 'editorial', 'anatomy'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2.5 text-xs font-mono uppercase tracking-wider transition-all relative ${
                    activeTab === tab
                      ? 'text-[#d4af37] border-b-2 border-[#d4af37]'
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  {tab === '3d' ? 'Garments' : tab === 'editorial' ? 'Styling Tips' : 'Palette & Fit'}
                </button>
              ))}
            </div>

            {/* Tab 1: Itemized Garments Breakdown */}
            {activeTab === '3d' && (
              <div className="space-y-3">
                {outfit.garments.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-white">{item.name}</span>
                      <span className="text-[10px] font-mono text-[#d4af37] uppercase">
                        {item.type}
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-400 font-light mb-2">{item.description}</p>
                    <div className="flex items-center gap-3 text-[10px] text-zinc-400 font-mono">
                      <span>Fabric: {item.material}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1.5">
                        Color:
                        <span
                          className="w-2.5 h-2.5 rounded-full border border-white/20 inline-block"
                          style={{ backgroundColor: item.colorHex }}
                        />
                        {item.colorName}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 2: Editorial Styling Tips */}
            {activeTab === 'editorial' && (
              <div className="space-y-4">
                <div className="space-y-2.5">
                  <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-mono block">
                    Curator’s Styling Tips:
                  </span>
                  {outfit.stylingTips.map((tip, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3"
                    >
                      <Sparkles className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                      <p className="text-xs text-zinc-300 font-light leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-mono block mb-2">
                    Finishing Accessories:
                  </span>
                  <div className="space-y-2">
                    {outfit.accessories.map((acc, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between text-xs p-2 rounded-lg bg-black/30 border border-white/5"
                      >
                        <span className="text-white font-medium">{acc.name}</span>
                        <span className="text-[11px] text-[#d4af37] font-mono">{acc.material}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Palette & Silhouette Fit */}
            {activeTab === 'anatomy' && (
              <div className="space-y-6">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-mono block mb-2">
                    Harmonized Color Story:
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {outfit.colorPalette.map((col) => (
                      <div
                        key={col.name}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/5"
                      >
                        <span
                          className="w-5 h-5 rounded-full border border-white/20 shrink-0"
                          style={{ backgroundColor: col.hex }}
                        />
                        <div>
                          <span className="text-xs text-white block">{col.name}</span>
                          <span className="text-[10px] font-mono text-zinc-400">{col.hex}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase block">
                      Silhouette
                    </span>
                    <span className="text-xs font-medium text-white">{outfit.silhouette} Cut</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase block">
                      Climate Suitability
                    </span>
                    <span className="text-xs font-medium text-white">
                      {outfit.weatherSuitability.join(', ')}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase block">
                      Tier
                    </span>
                    <span className="text-xs font-medium text-[#d4af37]">{outfit.budget} Atelier</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase block">
                      Mood Expression
                    </span>
                    <span className="text-xs font-medium text-white">{outfit.mood}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
