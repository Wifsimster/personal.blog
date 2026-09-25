import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Easing} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';

const {fontFamily} = loadFont('normal', {weights: ['400', '500', '600', '700'], subsets: ['latin']});

export type Props = {lang: 'fr' | 'en'; theme: 'light' | 'dark'; format: 'wide' | 'tall'};

// Mêmes valeurs que main.css (--diagram-accent / fond de page), pour que la vidéo se fonde dans l'article.
const THEMES = {
  light: {bg: '#ffffff', ink: '#111827', accent: '#0284c7', accentSoft: 'rgba(2,132,199,0.18)'},
  dark: {bg: '#18181b', ink: '#f4f4f5', accent: '#38bdf8', accentSoft: 'rgba(56,189,248,0.22)'},
};

const TEXT = {
  fr: {
    eyebrow: 'PRISE TV · JOURNAL DU SOIR',
    h1: 'La coupure ne tient pas',
    h2: 'Le journal désigne\nle coupable',
    h3: 'Une condition,\net la coupure tient',
    lane: 'Prise TV',
    on: 'allumée',
    off: 'coupée',
    cut: 'routine : coupure',
    guard: 'garde-fou : rallumage',
    guardBlocked: 'garde-fou : ne se déclenche plus',
    log: '19:30:10  Prise TV allumée\n← automatisation garde-fou',
    logNote: 'aucune condition',
    fix: '+ condition ajoutée par l’agent',
    ticks: ['19:30:00', '19:30:10', '19:30:20'],
  },
  en: {
    eyebrow: 'TV PLUG · EVENING LOGBOOK',
    h1: 'The cut does not hold',
    h2: 'The logbook names\nthe culprit',
    h3: 'One condition,\nand the cut holds',
    lane: 'TV plug',
    on: 'on',
    off: 'off',
    cut: 'routine: cut',
    guard: 'guard: back on',
    guardBlocked: 'guard: no longer fires',
    log: '19:30:10  TV plug on\n← guard automation',
    logNote: 'no conditions',
    fix: '+ condition added by the agent',
    ticks: ['19:30:00', '19:30:10', '19:30:20'],
  },
};

// Deux mises en page : « wide » (canevas de 640 unités comme les diagrammes du
// blog, rendu ×2) et « tall » pour les écrans étroits, où le texte garde ~13 px.
const LAYOUTS = {
  wide: {W: 640, H: 320, X0: 48, X1: 592, M: 32, head: [76], barY: 150, cut: [214, 0], guard: [244, 0], axisY: 284,
    centerLabels: false, log: {y: 112, h: 62}, fixY: 204, oneLine: true},
  tall: {W: 360, H: 420, X0: 24, X1: 336, M: 24, head: [70, 98], barY: 160, cut: [236, 20], guard: [296, 20], axisY: 360,
    centerLabels: true, log: {y: 128, h: 92}, fixY: 262, oneLine: false},
};
const T_MIN = -5; // secondes, fenêtre 19:29:55 → 19:30:25
const T_MAX = 25;

// Découpage en images (30 i/s)
const A1 = [0, 150]; // 1re soirée : la coupure ne tient pas
const A2 = [150, 250]; // lecture du journal, condition ajoutée
const A3 = [250, 400]; // 2e soirée : la coupure tient
export const DURATION = 460;

const sweep = (frame: number, [a, b]: number[]) =>
  interpolate(frame, [a + 10, b - 20], [T_MIN, T_MAX], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.inOut(Easing.cubic),
  });
const reach = (t: number, [a, b]: number[]) => {
  for (let f = a; f < b; f++) if (sweep(f, [a, b]) >= t) return f;
  return b;
};

export const CoupureTv: React.FC<Props> = ({lang, theme, format}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const c = THEMES[theme];
  const t = TEXT[lang];
  const L = LAYOUTS[format];
  const tx = (s: number) => L.X0 + ((s - T_MIN) / (T_MAX - T_MIN)) * (L.X1 - L.X0);
  const lines = (s: string) => (L.oneLine ? [s.replace('\n', ' ')] : s.split('\n'));

  const act = frame < A2[0] ? 1 : frame < A3[0] ? 2 : 3;
  const range = act === 3 ? A3 : A1;
  // Tête de lecture : balaye en actes 1 et 3, s'arrête en acte 2.
  const head = act === 2 ? T_MAX : sweep(frame, range);

  const fade = (start: number, len = 12) =>
    interpolate(frame, [start, start + len], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const pop = (start: number) => spring({frame: frame - start, fps, config: {damping: 14, stiffness: 160}});

  const headline = act === 1 ? t.h1 : act === 2 ? t.h2 : t.h3;
  const headlineOpacity = fade(act === 1 ? 0 : act === 2 ? A2[0] : A3[0], 10);

  const segments =
    act === 3
      ? [
          {from: T_MIN, to: 0, on: true},
          {from: 0, to: T_MAX, on: false, win: true},
        ]
      : [
          {from: T_MIN, to: 0, on: true},
          {from: 0, to: 10, on: false},
          {from: 10, to: T_MAX, on: true, bad: true},
        ];

  const BAR_H = 36;
  const cutPop = act === 2 ? 1 : pop(reach(0, range));
  const guardPop = act === 2 ? 1 : pop(reach(10, range));

  const logOpacity = act === 2 ? fade(A2[0] + 8, 14) : 0;
  const fixOpacity = act === 2 ? fade(A2[0] + 50, 12) : 0;
  const fixScale = act === 2 ? 0.9 + 0.1 * pop(A2[0] + 50) : 1;

  const ink = (o: number) => ({fill: c.ink, fillOpacity: o});
  const mono = "ui-monospace, 'DejaVu Sans Mono', monospace";

  const event = (at: number, [y, dy]: number[], label: string, hollow: boolean, o: number) => {
    const x = tx(at);
    const lx = L.centerLabels ? Math.max(L.X0 + 58, Math.min(L.X1 - 58, x)) : x + 10;
    return (
      <g opacity={o}>
        <line x1={x} y1={L.barY + BAR_H + 2} x2={x} y2={y - 8} stroke={c.ink} strokeOpacity={0.35} strokeDasharray="3 3" />
        <circle cx={x} cy={y} r={5} fill={hollow ? 'none' : c.ink} fillOpacity={0.7} stroke={c.ink} strokeOpacity={hollow ? 0.45 : 0} />
        <text x={lx} y={y + 5 + dy} fontSize={13} textAnchor={L.centerLabels ? 'middle' : 'start'} {...ink(hollow ? 0.5 : 0.8)}>
          {label}
        </text>
      </g>
    );
  };

  return (
    <AbsoluteFill style={{backgroundColor: c.bg, fontFamily}}>
      <svg viewBox={`0 0 ${L.W} ${L.H}`} width="100%" height="100%">
        <text x={L.M} y={40} fontSize={format === 'wide' ? 14.5 : 13} fontWeight={600} letterSpacing={1.6} {...ink(0.55)}>
          {t.eyebrow}
        </text>
        <text fontSize={format === 'wide' ? 26 : 23} fontWeight={650} {...ink(1)} opacity={headlineOpacity}>
          {lines(headline).map((l, i) => (
            <tspan key={i} x={L.M} y={L.head[i]}>
              {l}
            </tspan>
          ))}
        </text>

        <text x={L.X0} y={L.barY - 10} fontSize={13} fontWeight={500} {...ink(0.6)}>
          {t.lane}
        </text>
        <rect x={L.X0} y={L.barY} width={L.X1 - L.X0} height={BAR_H} rx={8} fill={c.ink} fillOpacity={0.04} />

        {segments.map((s, i) => {
          const end = Math.min(s.to, head);
          if (end <= s.from) return null;
          const x = tx(s.from);
          const w = tx(end) - x;
          return (
            <g key={i}>
              <rect x={x + 1} y={L.barY + 1} width={Math.max(0, w - 2)} height={BAR_H - 2} rx={7}
                fill={s.win ? c.accentSoft : c.ink} fillOpacity={s.win ? 1 : s.on ? (s.bad ? 0.42 : 0.28) : 0.08}
                stroke={s.win ? c.accent : 'none'} strokeWidth={1.5} />
              {w > 64 && (
                <text x={x + 10} y={L.barY + BAR_H / 2 + 5} fontSize={13} fontWeight={600}
                  fill={s.win ? c.accent : c.ink} fillOpacity={s.win ? 1 : s.on ? 0.95 : 0.55}>
                  {s.on ? t.on : t.off}
                </text>
              )}
            </g>
          );
        })}

        {head >= 0 && event(0, L.cut, t.cut, false, cutPop)}
        {head >= 10 && event(10, L.guard, act === 3 ? t.guardBlocked : t.guard, act === 3, guardPop)}

        {act !== 2 && head > T_MIN && head < T_MAX && (
          <line x1={tx(head)} y1={L.barY - 6} x2={tx(head)} y2={L.barY + BAR_H + 6} stroke={c.ink} strokeOpacity={0.55} strokeWidth={1.5} />
        )}

        <line x1={L.X0} y1={L.axisY} x2={L.X1} y2={L.axisY} stroke={c.ink} strokeOpacity={0.15} />
        {[0, 10, 20].map((s, i) => (
          <text key={s} x={tx(s)} y={L.axisY + 20} fontSize={13} textAnchor="middle" {...ink(0.5)}>
            {t.ticks[i]}
          </text>
        ))}

        {act === 2 && (
          <g>
            <rect x={0} y={L.head[L.head.length - 1] + 14} width={L.W} height={L.H} fill={c.bg} fillOpacity={logOpacity} />
            <g opacity={logOpacity}>
              <rect x={L.M} y={L.log.y} width={L.W - 2 * L.M} height={L.log.h} rx={8} fill={c.ink} fillOpacity={0.05} stroke={c.ink} strokeOpacity={0.2} />
              {[...lines(t.log), `└ ${t.logNote}`].map((l, i, arr) => (
                <text key={i} x={L.M + 16} y={L.log.y + 26 + i * 22} fontSize={13} fontFamily={mono} {...ink(i === arr.length - 1 ? 0.55 : 0.9)}>
                  {l}
                </text>
              ))}
            </g>
            <g opacity={fixOpacity} transform={`translate(${L.W / 2} ${L.fixY + 23}) scale(${fixScale}) translate(${-L.W / 2} ${-(L.fixY + 23)})`}>
              <rect x={L.W / 2 - 150} y={L.fixY} width={300} height={46} rx={23} fill={c.accentSoft} stroke={c.accent} strokeWidth={1.5} />
              <text x={L.W / 2} y={L.fixY + 29} fontSize={15} fontWeight={650} textAnchor="middle" fill={c.accent}>
                {t.fix}
              </text>
            </g>
          </g>
        )}
      </svg>
    </AbsoluteFill>
  );
};
