'use client';

import { useRef, useCallback } from 'react';

export function useVideoPlayback() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const play = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      // Handle the play promise to avoid uncaught errors
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Autoplay was prevented — this is normal in some browsers
          console.log('Video autoplay prevented:', error);
        });
      }
    }
  }, []);

  const pause = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      video.pause();
    }
  }, []);

  return { videoRef, play, pause };
}