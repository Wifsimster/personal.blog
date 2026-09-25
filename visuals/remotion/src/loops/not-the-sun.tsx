import React from 'react';
import {Frame, LoopProps, ramp, THEMES, useSteps} from './common';

// 1. Six décisions séparées : le soleil passe, chaque volet descend à son tour.
export const Shutters: React.FC<LoopProps> = ({theme}) => {
  const c = THEMES[theme];
  const s = useSteps();
  const sx = 4 + (s / 60) * 232;
  const sy = 16 + ((sx - 120) / 116) ** 2 * 24;
  const sunO = ramp(s, 0, 4) * (1 - ramp(s, 56, 60));
  const wins = [30, 66, 102, 138, 174, 210];
  return (
    <Frame>
      <circle cx={sx} cy={sy} r={8} fill={c.accent} opacity={sunO} />
      <circle cx={sx} cy={sy} r={13} fill="none" stroke={c.accent} strokeOpacity={0.35 * sunO} strokeWidth={1.2} />
      {wins.map((x) => {
        const close = Math.max(0, Math.min(1, (34 - Math.abs(sx - x)) / 14)) * sunO;
        return (
          <g key={x}>
            <rect x={x - 13} y={64} width={26} height={36} rx={4} fill={c.ink} fillOpacity={0.06} stroke={c.ink} strokeOpacity={0.4} strokeWidth={1.3} />
            <rect x={x - 12} y={65} width={24} height={34 * close} rx={3} fill={c.accentSoft} stroke={c.accent} strokeOpacity={close > 0.02 ? 1 : 0} strokeWidth={1.2} />
          </g>
        );
      })}
    </Frame>
  );
};

// 2. Le cadastre : une façade s'allume quand le soleil est à moins de 65° de sa normale.
export const Facades: React.FC<LoopProps> = ({theme}) => {
  const c = THEMES[theme];
  const s = useSteps();
  const cx = 120;
  const cy = 60;
  const rot = -24; // faîtage désaxé, comme une vraie parcelle
  const sunA = (s / 60) * 360; // un tour par boucle
  const sun = {x: cx + 96 * Math.cos(((sunA - 90) * Math.PI) / 180), y: cy + 48 * Math.sin(((sunA - 90) * Math.PI) / 180)};
  const hw = 32;
  const hh = 20;
  // façades : normale (degrés, 0 = nord, sens horaire) et segment
  const faces = [
    {n: 0, a: [-hw, -hh], b: [hw, -hh]},
    {n: 90, a: [hw, -hh], b: [hw, hh]},
    {n: 180, a: [hw, hh], b: [-hw, hh]},
    {n: 270, a: [-hw, hh], b: [-hw, -hh]},
  ];
  const r = (rot * Math.PI) / 180;
  const pt = ([x, y]: number[]) => [cx + x * Math.cos(r) - y * Math.sin(r), cy + x * Math.sin(r) + y * Math.cos(r)];
  return (
    <Frame>
      <ellipse cx={cx} cy={cy} rx={96} ry={48} fill="none" stroke={c.ink} strokeOpacity={0.12} strokeDasharray="2 5" />
      <polygon points={[[-hw, -hh], [hw, -hh], [hw, hh], [-hw, hh]].map((p) => pt(p).join(',')).join(' ')}
        fill={c.ink} fillOpacity={0.05} stroke={c.ink} strokeOpacity={0.35} strokeWidth={1.3} strokeLinejoin="round" />
      {faces.map((f, i) => {
        let d = Math.abs(((sunA - (f.n + rot) + 540) % 360) - 180);
        const lit = Math.max(0, Math.min(1, (65 - d) / 12));
        const [x1, y1] = pt(f.a);
        const [x2, y2] = pt(f.b);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={c.accent} strokeOpacity={lit} strokeWidth={3.5} strokeLinecap="round" />;
      })}
      <circle cx={sun.x} cy={sun.y} r={7} fill={c.accent} />
    </Frame>
  );
};

// 3. Le tableau électrique : A reste calme, B et C font des pointes brèves.
export const Phases: React.FC<LoopProps> = ({theme}) => {
  const c = THEMES[theme];
  const s = useSteps();
  const p = s / 60;
  const spike = (at: number) => Math.exp(-((((p - at + 1.5) % 1 - 0.5) / 0.045) ** 2));
  const bars = [
    {x: 72, h: 34 + 3 * Math.sin(p * Math.PI * 4), calm: true},
    {x: 120, h: 38 + 44 * spike(0.3) + 4 * Math.sin(p * Math.PI * 6)},
    {x: 168, h: 36 + 40 * spike(0.72) + 4 * Math.sin(p * Math.PI * 2)},
  ];
  return (
    <Frame>
      <line x1={50} y1={104.5} x2={190} y2={104.5} stroke={c.ink} strokeOpacity={0.2} />
      <line x1={50} y1={26} x2={190} y2={26} stroke={c.ink} strokeOpacity={0.4} strokeWidth={1.3} strokeDasharray="5 5" strokeLinecap="round" />
      {bars.map((b) => (
        <rect key={b.x} x={b.x - 12} y={104 - b.h} width={24} height={b.h} rx={5}
          fill={b.calm ? c.accentSoft : c.ink} fillOpacity={b.calm ? 1 : 0.3} stroke={b.calm ? c.accent : 'none'} strokeWidth={1.5} />
      ))}
    </Frame>
  );
};
