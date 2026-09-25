import React from 'react';
import {Easing, interpolate} from 'remotion';
import {clamp, Frame, LoopProps, ramp, THEMES, useSteps} from './common';

// 1. Le soir, brique par brique : cinq briques s'empilent en escalier.
export const Bricks: React.FC<LoopProps> = ({theme}) => {
  const c = THEMES[theme];
  const s = useSteps();
  const fadeOut = 1 - ramp(s, 52, 60);
  return (
    <Frame>
      <line x1={40} y1={104.5} x2={200} y2={104.5} stroke={c.ink} strokeOpacity={0.2} />
      {Array.from({length: 5}, (_, i) => {
        const drop = interpolate(s, [i * 8, i * 8 + 6], [0, 1], {...clamp, easing: Easing.out(Easing.bounce)});
        const y = 104 - (i + 1) * 16;
        const last = i === 4;
        return (
          <rect key={i} x={52 + i * 28} y={y - 60 * (1 - drop)} width={46} height={14} rx={4}
            fill={last ? c.accentSoft : c.ink} fillOpacity={last ? 1 : 0.35} stroke={last ? c.accent : 'none'} strokeWidth={1.4}
            opacity={(drop > 0 ? 1 : 0) * fadeOut} />
        );
      })}
    </Frame>
  );
};

// 2. Mercredi, tout glisse : les repères de la soirée se décalent, puis reviennent.
export const Slide: React.FC<LoopProps> = ({theme}) => {
  const c = THEMES[theme];
  const s = useSteps();
  const e = Easing.inOut(Easing.cubic);
  const shift = 34 * (e(ramp(s, 12, 24)) - e(ramp(s, 44, 56)));
  const marks = [42, 70, 96, 120, 150, 172];
  return (
    <Frame>
      <line x1={24} y1={60.5} x2={216} y2={60.5} stroke={c.ink} strokeOpacity={0.2} />
      {marks.map((x) => (
        <line key={`g${x}`} x1={x} y1={52} x2={x} y2={69} stroke={c.ink} strokeOpacity={0.15} strokeWidth={1.4} strokeLinecap="round" />
      ))}
      {marks.map((x, i) => (
        <g key={x} transform={`translate(${x + shift} 0)`}>
          <line x1={0} y1={46} x2={0} y2={60} stroke={shift > 1 ? c.accent : c.ink} strokeOpacity={0.6} strokeWidth={1.4} />
          <circle cx={0} cy={i % 2 ? 40 : 36} r={5} fill={shift > 1 ? c.accent : c.ink} fillOpacity={shift > 1 ? 1 : 0.55} />
        </g>
      ))}
      {/* flèche du décalage */}
      <path d={`M 42 84 H ${42 + shift}`} stroke={c.accent} strokeOpacity={shift > 2 ? 0.8 : 0} strokeWidth={1.6} strokeLinecap="round" />
      <path d={`M ${38 + shift} 80 L ${42 + shift} 84 L ${38 + shift} 88`} fill="none" stroke={c.accent} strokeOpacity={shift > 2 ? 0.8 : 0} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  );
};

// 3. Un jeu de données pour seize semaines : les semaines de vacances se colorent.
// Répartition indicative (zone A) : Toussaint, Noël, hiver, printemps, été.
const HOLIDAY_WEEKS = [1, 7, 8, 15, 16, 27, 28, 29, 30, 31, 32, 33, 34, 43, 44, 52];
export const Calendar: React.FC<LoopProps> = ({theme}) => {
  const c = THEMES[theme];
  const s = useSteps();
  const fadeOut = 1 - ramp(s, 52, 60);
  return (
    <Frame>
      {Array.from({length: 52}, (_, i) => {
        const w = i + 1;
        const x = 22 + (i % 13) * 15.5;
        const y = 26 + Math.floor(i / 13) * 17;
        const order = HOLIDAY_WEEKS.indexOf(w);
        const on = order >= 0 ? ramp(s, order * 2.5, order * 2.5 + 2) * fadeOut : 0;
        return (
          <g key={w}>
            <rect x={x} y={y} width={12} height={12} rx={3} fill={c.ink} fillOpacity={0.1} />
            {order >= 0 && <rect x={x} y={y} width={12} height={12} rx={3} fill={c.accent} opacity={on} />}
          </g>
        );
      })}
    </Frame>
  );
};
