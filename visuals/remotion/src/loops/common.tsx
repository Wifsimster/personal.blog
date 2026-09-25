import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

// Petites boucles sans texte, façon GIF, posées sous un titre de section.
// Fond transparent : seules l'encre et l'accent changent avec le thème
// (mêmes valeurs que --diagram-accent dans main.css).
export type LoopProps = {theme: 'light' | 'dark'; slug: string};

export const THEMES = {
  light: {ink: '#111827', accent: '#0284c7', accentSoft: 'rgba(2,132,199,0.18)'},
  dark: {ink: '#f4f4f5', accent: '#38bdf8', accentSoft: 'rgba(56,189,248,0.22)'},
};

// 3 s par boucle ; la cadence est réglée par boucle dans Root (moins d'images = fichier plus léger).
export const LOOP = {seconds: 3, width: 480, height: 240};
export const W = 240;
export const H = 120;

export const Frame: React.FC<{children: React.ReactNode}> = ({children}) => (
  <AbsoluteFill>
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="100%">
      {children}
    </svg>
  </AbsoluteFill>
);

// Temps de la boucle exprimé sur 60 pas, quelle que soit la cadence :
// les minutages s'écrivent une fois, en « pas ».
export const useSteps = () => {
  const f = useCurrentFrame();
  const n = useVideoConfig().durationInFrames;
  return (f / n) * 60;
};

export const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
// 0 → 1 entre a et b (en pas)
export const ramp = (s: number, a: number, b: number) => interpolate(s, [a, b], [0, 1], clamp);
