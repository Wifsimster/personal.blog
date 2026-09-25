import React from 'react';
import {Easing, interpolate} from 'remotion';
import {clamp, Frame, LoopProps, ramp, THEMES, useSteps} from './common';

// 1. La chaîne audio n'était pas en cause : l'enceinte émet, sans accroc.
export const Speaker: React.FC<LoopProps> = ({theme}) => {
  const c = THEMES[theme];
  const s = useSteps();
  return (
    <Frame>
      <rect x={70} y={22} width={46} height={76} rx={9} fill={c.ink} fillOpacity={0.05} stroke={c.ink} strokeOpacity={0.4} strokeWidth={1.4} />
      <circle cx={93} cy={70} r={15} fill="none" stroke={c.ink} strokeOpacity={0.45} strokeWidth={1.4} />
      <circle cx={93} cy={70} r={6} fill={c.ink} fillOpacity={0.55} />
      <circle cx={93} cy={38} r={4} fill={c.ink} fillOpacity={0.4} />
      {[0, 1, 2].map((j) => {
        const t = ((s / 20 + j / 3) % 1);
        const r = 14 + t * 44;
        return (
          <path key={j} d={`M ${124 + r * 0.25} ${60 - r * 0.55} A ${r} ${r} 0 0 1 ${124 + r * 0.25} ${60 + r * 0.55}`} fill="none"
            stroke={c.accent} strokeOpacity={0.85 * (1 - t)} strokeWidth={1.8} strokeLinecap="round" />
        );
      })}
    </Frame>
  );
};

// 2. Huit règles, écrites après coup : les lignes s'écrivent une à une.
export const Rules: React.FC<LoopProps> = ({theme}) => {
  const c = THEMES[theme];
  const s = useSteps();
  const widths = [96, 72, 110, 84, 64, 102, 78, 90];
  const fadeOut = 1 - ramp(s, 52, 60);
  return (
    <Frame>
      <rect x={52} y={8} width={136} height={104} rx={7} fill={c.ink} fillOpacity={0.04} stroke={c.ink} strokeOpacity={0.3} strokeWidth={1.3} />
      {widths.map((w, i) => {
        const k = ramp(s, i * 5.5, i * 5.5 + 5);
        const y = 20 + i * 11.5;
        return (
          <g key={i} opacity={fadeOut}>
            <circle cx={66} cy={y} r={2.6} fill={c.accent} opacity={k > 0 ? 1 : 0} />
            <line x1={74} y1={y} x2={74 + w * k} y2={y} stroke={c.ink} strokeOpacity={k > 0 ? 0.45 : 0} strokeWidth={3.2} strokeLinecap="round" />
          </g>
        );
      })}
    </Frame>
  );
};

// 3. Le réveil : la musique monte d'abord, la consigne arrive à la fin.
export const Wakeup: React.FC<LoopProps> = ({theme}) => {
  const c = THEMES[theme];
  const s = useSteps();
  const fadeOut = 1 - ramp(s, 52, 60);
  const bubble = interpolate(s, [38, 44], [0, 1], {...clamp, easing: Easing.out(Easing.back(2.5))}) * fadeOut;
  return (
    <Frame>
      <line x1={30} y1={100.5} x2={150} y2={100.5} stroke={c.ink} strokeOpacity={0.2} />
      {Array.from({length: 10}, (_, i) => {
        const k = ramp(s, i * 3.4, i * 3.4 + 3);
        const h = (10 + i * 7) * k;
        return <rect key={i} x={32 + i * 12} y={100 - h} width={8} height={h} rx={3} fill={c.ink} fillOpacity={0.3 * fadeOut} />;
      })}
      <g opacity={bubble} transform={`translate(186 44) scale(${0.6 + 0.4 * bubble}) translate(-186 -44)`}>
        <rect x={160} y={26} width={52} height={34} rx={10} fill={c.accentSoft} stroke={c.accent} strokeWidth={1.5} />
        <path d="M 172 60 L 168 70 L 180 60" fill={c.accentSoft} stroke={c.accent} strokeWidth={1.5} strokeLinejoin="round" />
        {[0, 1, 2].map((j) => (
          <circle key={j} cx={176 + j * 10} cy={43} r={2.6} fill={c.accent} />
        ))}
      </g>
    </Frame>
  );
};
