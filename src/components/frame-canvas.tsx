import React, { useEffect, useRef } from 'react';

interface FrameCanvasProps {
  frameIndex: number;
  getNearestFrame: (index: number) => HTMLImageElement | null;
  className?: string;
}

export const FrameCanvas: React.FC<FrameCanvasProps> = ({
  frameIndex,
  getNearestFrame,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const lastDrawnIndexRef = useRef<number>(-1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      const targetIndex = Math.round(frameIndex);
      const image = getNearestFrame(targetIndex);

      if (!image) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      // Check if canvas size matches window size
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2 for performance
      const displayWidth = window.innerWidth;
      const displayHeight = window.innerHeight;

      const neededWidth = Math.floor(displayWidth * dpr);
      const neededHeight = Math.floor(displayHeight * dpr);

      let sizeChanged = false;
      if (canvas.width !== neededWidth || canvas.height !== neededHeight) {
        canvas.width = neededWidth;
        canvas.height = neededHeight;
        sizeChanged = true;
      }

      // If neither frame index nor dimensions changed, skip redraw
      if (!sizeChanged && lastDrawnIndexRef.current === targetIndex) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.save();
      ctx.scale(dpr, dpr);

      // High quality rendering
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      // Source image dimensions (1920x1080)
      const imgWidth = image.naturalWidth || 1920;
      const imgHeight = image.naturalHeight || 1080;

      // Object-fit: cover calculation
      const canvasAspect = displayWidth / displayHeight;
      const imageAspect = imgWidth / imgHeight;

      let drawWidth = displayWidth;
      let drawHeight = displayHeight;
      let offsetX = 0;
      let offsetY = 0;

      if (canvasAspect > imageAspect) {
        // Viewport is wider than image
        drawWidth = displayWidth;
        drawHeight = displayWidth / imageAspect;
        offsetY = (displayHeight - drawHeight) / 2;
      } else {
        // Viewport is taller than image (mobile / portrait)
        drawHeight = displayHeight;
        drawWidth = displayHeight * imageAspect;
        offsetX = (displayWidth - drawWidth) / 2;
      }

      // Draw the frame
      ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);

      // Subtle light luxury warm grading overlay (very delicate, 3% warm gold/cream)
      // Preserves original frame integrity while blending harmoniously with page ivory palette
      const gradient = ctx.createLinearGradient(0, 0, 0, displayHeight);
      gradient.addColorStop(0, 'rgba(248, 245, 239, 0.08)');
      gradient.addColorStop(0.15, 'rgba(248, 245, 239, 0)');
      gradient.addColorStop(0.85, 'rgba(248, 245, 239, 0)');
      gradient.addColorStop(1, 'rgba(248, 245, 239, 0.15)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, displayWidth, displayHeight);

      ctx.restore();
      lastDrawnIndexRef.current = targetIndex;

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [frameIndex, getNearestFrame]);

  return (
    <canvas
      ref={canvasRef}
      className={`block w-full h-full object-cover pointer-events-none ${className}`}
      style={{ willChange: 'transform' }}
    />
  );
};

