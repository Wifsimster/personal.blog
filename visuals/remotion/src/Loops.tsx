import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig, Easing} from 'remotion';

// Petites boucles sans texte, façon GIF, posées sous un titre de section.
// Fond transparent : seules l'encre et l'accent changent avec le thème
// (mêmes valeurs que --diagram-accent dans main.css).
export type LoopProps = {theme: 'light' | 'dark'};

const THEMES = {
  light: {ink: '#111827', accent: '#0284c7', accentSoft: 'rgba(2,132,199,0.18)'},
  dark: {ink: '#f4f4f5', accent: '#38bdf8', accentSoft: 'rgba(56,189,248,0.22)'},
};

// 3 s par boucle ; la cadence est réglée par boucle dans Root (moins d'images = fichier plus léger).
export const LOOP = {seconds: 3, width: 480, height: 240};
const W = 240;
const H = 120;

const Frame: React.FC<{children: React.ReactNode}> = ({children}) => (
  <AbsoluteFill>
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="100%">
      {children}
    </svg>
  </AbsoluteFill>
);

// 1. Fédération : neuf écosystèmes autour d'un seul nœud.
export const Federation: React.FC<LoopProps> = ({theme}) => {
  const c = THEMES[theme];
  const f = useCurrentFrame();
  const p = f / useVideoConfig().durationInFrames; // 0 → 1 sur la boucle
  const cx = W / 2;
  const cy = H / 2;
  const sats = Array.from({length: 9}, (_, i) => {
    const a = ((i * 40 - 90) * Math.PI) / 180;
    return {x: cx + 92 * Math.cos(a), y: cy + 44 * Math.sin(a), phase: (p - i / 9 + 1) % 1};
  });
  return (
    <Frame>
      {sats.map((s, i) => (
        <line key={`l${i}`} x1={s.x} y1={s.y} x2={cx} y2={cy} stroke={c.ink} strokeOpacity={0.14} strokeWidth={1.2} />
      ))}
      {sats.map((s, i) => {
        if (s.phase > 0.2) return null; // une impulsion à la fois fait le tour
        const k = Easing.inOut(Easing.quad)(s.phase / 0.2);
        return (
          <circle key={`p${i}`} cx={s.x + (cx - s.x) * k} cy={s.y + (cy - s.y) * k} r={2.6} fill={c.accent}
            fillOpacity={interpolate(k, [0, 0.15, 0.85, 1], [0, 1, 1, 0])} />
        );
      })}
      {sats.map((s, i) => (
        <circle key={`s${i}`} cx={s.x} cy={s.y} r={5.5} fill={c.ink} fillOpacity={0.55} />
      ))}
      <circle cx={cx} cy={cy} r={15} fill={c.accentSoft} stroke={c.accent} strokeWidth={2} />
      <circle cx={cx} cy={cy} r={5} fill={c.accent} />
    </Frame>
  );
};

// 2. Seuil : le coût des idées baisse en avançant ; sous la ligne, elles démarrent.
export const Threshold: React.FC<LoopProps> = ({theme}) => {
  const c = THEMES[theme];
  const f = useCurrentFrame();
  const SP = 36; // espacement ; la boucle décale d'exactement un espacement
  const shift = (f / useVideoConfig().durationInFrames) * SP;
  const BASE = 104;
  const LINE = 66;
  const bars = Array.from({length: 9}, (_, i) => {
    const x = W + 8 - i * SP - shift;
    // hauteur = coût : haute à droite, basse à gauche
    const h = interpolate(x, [0, W], [18, 84], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
    const under = interpolate(BASE - h, [LINE - 4, LINE + 4], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
    const edge = interpolate(x, [-14, 12, W - 30, W + 4], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
    return {x, h, under, edge};
  });
  return (
    <Frame>
      <line x1={8} y1={BASE + 0.5} x2={W - 8} y2={BASE + 0.5} stroke={c.ink} strokeOpacity={0.15} />
      {bars.map((b, i) => (
        <g key={i} opacity={b.edge}>
          <rect x={b.x - 8} y={BASE - b.h} width={16} height={b.h} rx={5} fill={c.ink} fillOpacity={0.2 * (1 - b.under)} />
          <rect x={b.x - 8} y={BASE - b.h} width={16} height={b.h} rx={5} fill={c.accentSoft} fillOpacity={b.under}
            stroke={c.accent} strokeOpacity={b.under} strokeWidth={1.5} />
        </g>
      ))}
      <line x1={8} y1={LINE} x2={W - 8} y2={LINE} stroke={c.ink} strokeOpacity={0.45} strokeWidth={1.4} strokeDasharray="5 5" strokeLinecap="round" />
    </Frame>
  );
};

// 3. Ce qui reste aux humains : couper le bon disjoncteur.
export const Breaker: React.FC<LoopProps> = ({theme}) => {
  const c = THEMES[theme];
  const frame = useCurrentFrame();
  const f = (frame / useVideoConfig().durationInFrames) * 60; // minutage exprimé sur 60 pas
  const snap = Easing.out(Easing.back(2));
  // 0-18 en marche · 18-23 bascule · 23-40 coupé · 40-45 réarmé · 45-60 en marche
  const down = f < 18 ? 0 : f < 23 ? snap((f - 18) / 5) : f < 40 ? 1 : f < 45 ? 1 - snap((f - 40) / 5) : 0;
  const on = interpolate(down, [0, 1], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const BX = 64;
  const BY = 16;
  return (
    <Frame>
      {/* disjoncteur */}
      <rect x={BX} y={BY} width={44} height={88} rx={8} fill={c.ink} fillOpacity={0.05} stroke={c.ink} strokeOpacity={0.4} strokeWidth={1.5} />
      <rect x={BX + 13} y={BY + 24} width={18} height={44} rx={5} fill={c.ink} fillOpacity={0.08} />
      <rect x={BX + 15} y={BY + 27 + 18 * down} width={14} height={20} rx={4} fill={c.ink} fillOpacity={0.7} />
      <circle cx={BX + 22} cy={BY + 12} r={3.5} fill={on > 0.5 ? c.accent : c.ink} fillOpacity={on > 0.5 ? 1 : 0.2} />
      {/* ligne */}
      <path d={`M ${BX + 44} 60 H 142`} stroke={c.ink} strokeOpacity={0.25} strokeWidth={1.5} strokeDasharray="3 4" strokeLinecap="round" />
      <path d={`M ${BX + 44} 60 H 142`} stroke={c.accent} strokeOpacity={on} strokeWidth={1.5} strokeDasharray="3 4"
        strokeDashoffset={-((f * 7) / 5) % 7} strokeLinecap="round" />
      {/* maison */}
      <path d="M 146 62 L 170 40 L 194 62 V 96 H 146 Z" fill={c.ink} fillOpacity={0.05} stroke={c.ink} strokeOpacity={0.4} strokeWidth={1.5} strokeLinejoin="round" />
      <rect x={160} y={66} width={20} height={16} rx={3} fill={c.ink} fillOpacity={0.12} />
      <rect x={160} y={66} width={20} height={16} rx={3} fill={c.accentSoft} stroke={c.accent} strokeWidth={1.2} opacity={on} />
    </Frame>
  );
};
