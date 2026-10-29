import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

export type LoopProps = {theme: 'light' | 'dark'; slug: string};

export const THEMES = {
  light: {ink: '#111827', accent: '#0284c7', accentSoft: 'rgba(2,132,199,0.18)'},
  dark: {ink: '#f4f4f5', accent: '#38bdf8', accentSoft: 'rgba(56,189,248,0.22)'},
};

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

export const useSteps = () => {
  const f = useCurrentFrame();
  const n = useVideoConfig().durationInFrames;
  return (f / n) * 60;
};

export const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
export const ramp = (s: number, a: number, b: number) => interpolate(s, [a, b], [0, 1], clamp);
