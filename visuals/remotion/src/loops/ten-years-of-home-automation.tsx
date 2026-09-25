import React from 'react';
import {Easing, interpolate} from 'remotion';
import {clamp, Frame, LoopProps, ramp, THEMES, useSteps} from './common';

// 1. L'époque du fer à souder : quatre soudures, une à une.
export const Solder: React.FC<LoopProps> = ({theme}) => {
  const c = THEMES[theme];
  const s = useSteps();
  const pads = [34, 52, 70, 88].map((y) => ({x: 168, y}));
  // la panne se pose sur chaque pastille pendant 12 pas, puis tout s'efface
  const i = Math.min(3, Math.floor(s / 12));
  const k = Easing.inOut(Easing.quad)(ramp(s - i * 12, 0, 5));
  const REST = {x: 200, y: 44};
  const from = i === 0 ? REST : pads[i - 1];
  const tip = s < 48 ? {x: from.x + (pads[i].x - from.x) * k, y: from.y + (pads[i].y - from.y) * k} : REST;
  const fadeOut = 1 - ramp(s, 52, 60);
  return (
    <Frame>
      <rect x={36} y={22} width={150} height={80} rx={7} fill={c.ink} fillOpacity={0.05} stroke={c.ink} strokeOpacity={0.35} strokeWidth={1.4} />
      <rect x={62} y={48} width={48} height={28} rx={4} fill={c.ink} fillOpacity={0.65} />
      {pads.map((p, j) => (
        <g key={j}>
          <path d={`M 110 ${56 + j * 4} H 136 L ${p.x - 10} ${p.y}`} fill="none" stroke={c.ink} strokeOpacity={0.3} strokeWidth={1.3} strokeLinejoin="round" />
          <circle cx={p.x} cy={p.y} r={4.5} fill="none" stroke={c.ink} strokeOpacity={0.45} strokeWidth={1.3} />
          {/* soudure faite : pastille pleine, en accent */}
          <circle cx={p.x} cy={p.y} r={4.5} fill={c.accent} opacity={ramp(s, j * 12 + 5, j * 12 + 7) * fadeOut} />
          <circle cx={p.x} cy={p.y} r={5 + 7 * ramp(s, j * 12 + 5, j * 12 + 11)} fill="none" stroke={c.accent}
            strokeOpacity={s >= j * 12 + 5 && s < j * 12 + 11 ? 0.6 * (1 - ramp(s, j * 12 + 5, j * 12 + 11)) : 0} strokeWidth={1.2} />
        </g>
      ))}
      {/* fer : panne + manche */}
      <g transform={`translate(${tip.x} ${tip.y})`}>
        <line x1={0} y1={0} x2={13} y2={-10} stroke={c.ink} strokeOpacity={0.7} strokeWidth={2.5} strokeLinecap="round" />
        <line x1={13} y1={-10} x2={28} y2={-22} stroke={c.ink} strokeOpacity={0.45} strokeWidth={7} strokeLinecap="round" />
      </g>
    </Frame>
  );
};

// 2. Ce qu'il y a dans la maison aujourd'hui : la maison se remplit d'appareils.
export const Inventory: React.FC<LoopProps> = ({theme}) => {
  const c = THEMES[theme];
  const s = useSteps();
  const dots = Array.from({length: 15}, (_, i) => ({x: 92 + (i % 5) * 14, y: 58 + Math.floor(i / 5) * 14, accent: i === 3 || i === 7 || i === 13}));
  const fadeOut = 1 - ramp(s, 52, 60);
  return (
    <Frame>
      <path d="M 72 108 V 48 L 120 14 L 168 48 V 108 Z" fill={c.ink} fillOpacity={0.04} stroke={c.ink} strokeOpacity={0.4} strokeWidth={1.5} strokeLinejoin="round" />
      {dots.map((d, i) => {
        const k = interpolate(s, [i * 2.8, i * 2.8 + 3], [0, 1], {...clamp, easing: Easing.out(Easing.back(3))});
        return <circle key={i} cx={d.x} cy={d.y} r={4.2 * k} fill={d.accent ? c.accent : c.ink} fillOpacity={(d.accent ? 1 : 0.5) * fadeOut} />;
      })}
    </Frame>
  );
};

// 3. Un visiophone qui ne parlait à personne : des ondes perdues, puis un pont.
export const Doorbell: React.FC<LoopProps> = ({theme}) => {
  const c = THEMES[theme];
  const s = useSteps();
  const bridge = ramp(s, 30, 36) * (1 - ramp(s, 54, 60));
  const wave = (s % 10) / 10;
  const reach = bridge > 0.5 ? 1 : 0.45; // sans pont, les ondes s'éteignent à mi-chemin
  return (
    <Frame>
      {/* platine */}
      <rect x={34} y={24} width={40} height={74} rx={7} fill={c.ink} fillOpacity={0.05} stroke={c.ink} strokeOpacity={0.4} strokeWidth={1.4} />
      {[36, 42, 48].map((y) => (
        <line key={y} x1={44} y1={y} x2={64} y2={y} stroke={c.ink} strokeOpacity={0.35} strokeWidth={1.6} strokeLinecap="round" />
      ))}
      <circle cx={54} cy={74} r={7} fill={c.ink} fillOpacity={0.55} />
      {/* ondes */}
      {[0, 1, 2].map((j) => {
        const t = (wave + j / 3) % 1;
        const x = 84 + t * 90 * reach;
        const o = (1 - t) * (bridge > 0.5 ? 0.9 : 0.4);
        return <path key={j} d={`M ${x} 50 q 6 11 0 22`} fill="none" stroke={bridge > 0.5 ? c.accent : c.ink} strokeOpacity={o} strokeWidth={1.6} strokeLinecap="round" />;
      })}
      {/* pont vers le téléphone */}
      <line x1={80} y1={98} x2={170} y2={98} stroke={c.accent} strokeOpacity={bridge} strokeWidth={1.5} strokeDasharray="3 4" strokeLinecap="round" />
      {/* téléphone */}
      <rect x={176} y={30} width={30} height={60} rx={6} fill={c.ink} fillOpacity={0.05} stroke={c.ink} strokeOpacity={0.4} strokeWidth={1.4} />
      <rect x={181} y={38} width={20} height={40} rx={3} fill={c.ink} fillOpacity={0.1} />
      <rect x={181} y={38} width={20} height={40} rx={3} fill={c.accentSoft} stroke={c.accent} strokeWidth={1.2} opacity={bridge} />
    </Frame>
  );
};
