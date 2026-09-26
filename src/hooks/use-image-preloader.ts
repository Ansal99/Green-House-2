import { useState, useEffect, useRef, useCallback } from 'react';
import { TOTAL_FRAMES, getFrameUrl } from '../lib/constants';

interface PreloaderState {
  loadedCount: number;
  progress: number;
  isFirstFrameLoaded: boolean;
  isComplete: boolean;
}

export function useImagePreloader() {
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const [state, setState] = useState<PreloaderState>({
    loadedCount: 0,
    progress: 0,
    isFirstFrameLoaded: false,
    isComplete: false,
  });

  const getNearestFrame = useCallback((targetIndex: number): HTMLImageElement | null => {
    const images = imagesRef.current;
    const clamped = Math.min(Math.max(0, targetIndex), TOTAL_FRAMES - 1);
    
    // Direct match
    if (images[clamped]) return images[clamped];

    // Search outwards for closest loaded frame
    for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
      const prev = clamped - offset;
      if (prev >= 0 && images[prev]) return images[prev];
      const next = clamped + offset;
      if (next < TOTAL_FRAMES && images[next]) return images[next];
    }

    return null;
  }, []);

  useEffect(() => {
    let isCancelled = false;
    let loaded = 0;

    const loadSingleImage = (index: number): Promise<HTMLImageElement> => {
      return new Promise((resolve) => {
        if (imagesRef.current[index]) {
          resolve(imagesRef.current[index]!);
          return;
        }

        const img = new Image();
        img.src = getFrameUrl(index);

        img.onload = async () => {
          if (isCancelled) return;
          try {
            if ('decode' in img) {
              await img.decode();
            }
          } catch {
            // decode error ignored, image is still valid
          }
          imagesRef.current[index] = img;
          loaded++;

          setState(prev => ({
            ...prev,
            loadedCount: loaded,
            progress: loaded / TOTAL_FRAMES,
            isFirstFrameLoaded: prev.isFirstFrameLoaded || index === 0,
            isComplete: loaded >= TOTAL_FRAMES,
          }));

          resolve(img);
        };

        img.onerror = () => {
          // Fallback resolution on error
          resolve(img);
        };
      });
    };

    const runPreloadQueue = async () => {
      // 1. Immediately load frame 0 for zero-latency initial hero paint
      await loadSingleImage(0);
      if (isCancelled) return;

      // 2. Preload strategic keyframes (every 4th frame) to ensure immediate smooth scrubbing
      const keyframeIndices: number[] = [];
      for (let i = 4; i < TOTAL_FRAMES; i += 4) {
        keyframeIndices.push(i);
      }

      // Load keyframes with concurrency limit of 6
      const concurrency = 6;
      let i = 0;
      const worker = async () => {
        while (i < keyframeIndices.length && !isCancelled) {
          const idx = keyframeIndices[i++];
          await loadSingleImage(idx);
        }
      };
      await Promise.all(Array.from({ length: concurrency }, worker));
      if (isCancelled) return;

      // 3. Load remaining intermediate frames in order
      const remainingIndices: number[] = [];
      for (let idx = 0; idx < TOTAL_FRAMES; idx++) {
        if (!imagesRef.current[idx]) {
          remainingIndices.push(idx);
        }
      }

      let remIndex = 0;
      const remainingWorker = async () => {
        while (remIndex < remainingIndices.length && !isCancelled) {
          const idx = remainingIndices[remIndex++];
          await loadSingleImage(idx);
        }
      };
      await Promise.all(Array.from({ length: concurrency }, remainingWorker));
    };

    runPreloadQueue();

    return () => {
      isCancelled = true;
    };
  }, []);

  const getImages = useCallback(() => imagesRef.current, []);

  return {
    ...state,
    getImages,
    getNearestFrame,
  };
}
