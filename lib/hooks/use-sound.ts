"use client";

import { useEffect, useRef } from "react";

type UseSoundOptions = {
  src: string;
  autoPlay?: boolean;
};

export const useSound = ({ src, autoPlay = false }: UseSoundOptions) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Only instantiate on client
    if (typeof window !== "undefined") {
      audioRef.current = new window.Audio(src);
      
      if (autoPlay) {
        audioRef.current.play().catch(() => {
          // Ignore autoplay restrictions silently
        });
      }
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [src, autoPlay]);

  const play = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

  return { play };
};
