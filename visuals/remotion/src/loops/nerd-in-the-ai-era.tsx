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
