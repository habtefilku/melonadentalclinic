import React, { useState, useRef, useEffect } from 'react';
import { MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  label?: string;
}

const BeforeAfterSlider = ({ beforeImage, afterImage, label }: BeforeAfterSliderProps) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  const handleMouseDown = () => setIsResizing(true);
  const handleMouseUp = () => setIsResizing(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isResizing) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isResizing) handleMove(e.touches[0].clientX);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPos(prev => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPos(prev => Math.min(100, prev + 5));
    }
  };

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      role="slider"
      aria-valuenow={Math.round(sliderPos)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label ? `Before and after slider for ${label}` : "Before and after comparison slider"}
      tabIndex={0}
      className="relative w-full h-full overflow-hidden select-none group cursor-ew-resize focus:outline-none focus:ring-2 focus:ring-primary rounded-3xl"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      onKeyDown={handleKeyDown}
    >
      {/* After Image (Background) */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${afterImage})` }}
        role="img"
        aria-label={label ? `After: ${label}` : "After comparison"}
      />

      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${beforeImage})`,
          clipPath: `inset(0 ${100 - sliderPos}% 0 0)`
        }}
        role="img"
        aria-label={label ? `Before: ${label}` : "Before comparison"}
      />

      {/* Labels */}
      <div className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-black/40 backdrop-blur-sm text-[10px] font-bold text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
        Before
      </div>
      <div className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-accent/80 backdrop-blur-sm text-[10px] font-bold text-accent-foreground uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
        After
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white/80 cursor-ew-resize flex items-center justify-center pointer-events-none"
        style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
      >
        <div className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center border border-accent/20">
          <MoveHorizontal className="size-4 text-primary" />
        </div>
      </div>

      {/* Bottom Label */}
      {label && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
          <p className="text-white text-xs font-semibold tracking-wide">{label}</p>
        </div>
      )}
    </div>
  );
};

export default BeforeAfterSlider;