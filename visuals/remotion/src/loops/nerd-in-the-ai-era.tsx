import React from 'react';
import {Easing, interpolate} from 'remotion';
import {clamp, Frame, LoopProps, ramp, THEMES, useSteps} from './common';

// Chaque boucle est décalée pour que l'image 0 (le PNG servi sous
// prefers-reduced-motion) montre l'état complet, pas un cadre vide.
const shifted = (s: number, offset: number) => (s + offset) % 60;

// 1. Une timeline déjà racontée : un point parcourt la ligne, les récits
// s'allument au passage, et « aujourd'hui » répond par une onde.
export const Timeline: React.FC<LoopProps> = ({theme}) => {
  const c = THEMES[theme];
  const s = shifted(useSteps(), 46);
  const Y = 66;
  const X0 = 22;
  const NOW = 202;
  const marks = [44, 76, 108, 136, 160];
  const travel = interpolate(s, [2, 38], [X0, NOW], {...clamp, easing: Easing.inOut(Easing.quad)});
  const fade = 1 - ramp(s, 52, 59);
  const wave = ramp(s, 38, 52);
  return (
    <Frame>
      <line x1={X0} y1={Y} x2={NOW} y2={Y} stroke={c.ink} strokeOpacity={0.22} strokeWidth={1.6} strokeLinecap="round" />
      <line x1={X0} y1={Y} x2={travel} y2={Y} stroke={c.accent} strokeOpacity={0.7 * fade} strokeWidth={2} strokeLinecap="round" />
      {marks.map((x, i) => {
        const lit = ramp(travel, x - 4, x + 2) * fade;
        const up = i % 2 === 0;
        const pop = 1 + 0.35 * Math.max(0, 1 - Math.abs(travel - x) / 10);
        return (
          <g key={i}>
            <line x1={x} y1={up ? Y - 8 : Y + 8} x2={x} y2={up ? Y - 22 : Y + 22} stroke={c.ink} strokeOpacity={0.18 + 0.27 * lit} strokeWidth={1.4} strokeLinecap="round" />
            <rect x={x - 9} y={up ? Y - 34 : Y + 22} width={18} height={12} rx={3} fill={c.ink} fillOpacity={0.08 + 0.17 * lit} />
            <circle cx={x} cy={Y} r={4.5 * pop} fill={c.ink} fillOpacity={0.25} />
            <circle cx={x} cy={Y} r={4.5 * pop} fill={c.accent} fillOpacity={lit} />
          </g>
        );
      })}
      <circle cx={NOW} cy={Y} r={8 + 22 * wave} fill="none" stroke={c.accent} strokeOpacity={0.8 * (1 - wave) * (wave > 0 ? 1 : 0)} strokeWidth={1.6} />
      <circle cx={NOW} cy={Y} r={9} fill={c.accentSoft} stroke={c.accent} strokeWidth={2} />
      <circle cx={NOW} cy={Y} r={3.5} fill={c.accent} />
      <circle cx={travel} cy={Y} r={3} fill={c.accent} opacity={travel < NOW - 1 ? fade : 0} />
    </Frame>
  );
};

// 2. Plus petit que dans les films : une maison, trois pièces, et la voix
// qui ne parle que dans la bonne pièce, l'une après l'autre.
export const House: React.FC<LoopProps> = ({theme}) => {
  const c = THEMES[theme];
  const s = shifted(useSteps(), 8);
  // pièces : [x, y, largeur, hauteur]
  const rooms: [number, number, number, number][] = [
    [68, 42, 104, 28],
    [68, 72, 50, 32],
    [122, 72, 50, 32],
  ];
  const active = Math.floor(s / 20) % 3;
  const local = (s % 20) / 20;
  return (
    <Frame>
      <path d="M 58 44 L 120 12 L 182 44" fill="none" stroke={c.ink} strokeOpacity={0.45} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
      <rect x={66} y={40} width={108} height={66} rx={4} fill={c.ink} fillOpacity={0.04} stroke={c.ink} strokeOpacity={0.4} strokeWidth={1.4} />
      <line x1={66} y1={71} x2={174} y2={71} stroke={c.ink} strokeOpacity={0.3} strokeWidth={1.2} />
      <line x1={120} y1={71} x2={120} y2={106} stroke={c.ink} strokeOpacity={0.3} strokeWidth={1.2} />
      {rooms.map(([x, y, w, h], i) => {
        const on = i === active ? interpolate(local, [0, 0.12, 0.8, 1], [0, 1, 1, 0], clamp) : 0;
        const cx = x + w / 2;
        const cy = y + h / 2;
        return (
          <g key={i}>
            <rect x={x + 2} y={y + 1} width={w - 4} height={h - 4} rx={3} fill={c.accentSoft} opacity={on} />
            <circle cx={cx - 6} cy={cy} r={3.6} fill={c.ink} fillOpacity={0.35 + 0.3 * on} />
            {[0, 1].map((j) => {
              const t = (local * 2 + j / 2) % 1;
              const r = 3 + t * 12;
              return (
                <path key={j} d={`M ${cx - 1 + r * 0.3} ${cy - r * 0.7} A ${r} ${r} 0 0 1 ${cx - 1 + r * 0.3} ${cy + r * 0.7}`} fill="none"
                  stroke={c.accent} strokeOpacity={on * (1 - t)} strokeWidth={1.5} strokeLinecap="round" />
              );
            })}
          </g>
        );
      })}
    </Frame>
  );
};

// 3. Le prix du premier essai : la barre du premier essai s'effondre
// (son ancien coût reste en pointillé), puis les essais suivants s'enchaînent.
export const Tries: React.FC<LoopProps> = ({theme}) => {
  const c = THEMES[theme];
  const s = shifted(useSteps(), 48);
  const BASE = 102;
  const fade = 1 - ramp(s, 52, 59);
  const drop = interpolate(s, [4, 14], [0, 1], {...clamp, easing: Easing.out(Easing.back(1.6))}) * fade;
  const h0 = 80 - 64 * drop;
  const tries = [0, 1, 2, 3, 4, 5];
  return (
    <Frame>
      <line x1={28} y1={BASE + 0.5} x2={212} y2={BASE + 0.5} stroke={c.ink} strokeOpacity={0.18} />
      <rect x={36} y={BASE - 80} width={20} height={80} rx={5} fill="none" stroke={c.ink} strokeOpacity={0.3} strokeWidth={1.3} strokeDasharray="3 4" />
      <rect x={36} y={BASE - h0} width={20} height={h0} rx={5} fill={c.ink} fillOpacity={0.2 + 0.1 * (1 - drop)} />
      {tries.map((i) => {
        const k = interpolate(s, [16 + i * 5, 20 + i * 5], [0, 1], {...clamp, easing: Easing.out(Easing.back(2.2))}) * fade;
        const h = 16 * k;
        const x = 72 + i * 23;
        return (
          <rect key={i} x={x} y={BASE - h} width={16} height={h} rx={4} fill={c.accentSoft} stroke={c.accent}
            strokeOpacity={k > 0.01 ? 1 : 0} strokeWidth={1.4} />
        );
      })}
    </Frame>
  );
};
