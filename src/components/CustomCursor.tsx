import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [followerPosition, setFollowerPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with mouse pointer
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice || window.innerWidth < 1024) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if target is clickable
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'SELECT' ||
          target.closest('button') !== null ||
          target.closest('a') !== null ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('cursor-pointer');
        setIsPointer(!!isClickable);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Smooth follower lerp
    let animId: number;
    const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;
    let currX = -100;
    let currY = -100;

    const followLoop = () => {
      currX = lerp(currX, position.x, 0.18);
      currY = lerp(currY, position.y, 0.18);
      setFollowerPosition({ x: currX, y: currY });
      animId = requestAnimationFrame(followLoop);
    };

    animId = requestAnimationFrame(followLoop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [position.x, position.y]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision Core Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 mix-blend-difference"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isClicking ? 0.7 : isPointer ? 1.4 : 1})`,
        }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-[#d4af37]" />
      </div>

      {/* Luxury Trailing Ring with Pulse */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"
        style={{
          transform: `translate3d(${followerPosition.x}px, ${followerPosition.y}px, 0) scale(${
            isClicking ? 0.8 : isPointer ? 1.8 : 1
          })`,
          opacity: isPointer ? 0.9 : 0.45,
        }}
      >
        <div
          className={`w-9 h-9 rounded-full border transition-all duration-300 ${
            isPointer
              ? 'border-[#d4af37] bg-[#d4af37]/10 backdrop-blur-[1px] scale-125'
              : 'border-white/40'
          }`}
        />
      </div>
    </>
  );
};
