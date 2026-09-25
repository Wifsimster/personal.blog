import React from 'react';
import {Composition} from 'remotion';
import {CoupureTv, DURATION, type Props} from './CoupureTv';

const VARIANTS: Props[] = (['fr', 'en'] as const).flatMap((lang) =>
  (['light', 'dark'] as const).flatMap((theme) =>
    (['wide', 'tall'] as const).map((format) => ({lang, theme, format})),
  ),
);

export const Root: React.FC = () => (
  <>
    {VARIANTS.map((p) => (
      <Composition
        key={`${p.lang}-${p.theme}-${p.format}`}
        id={`coupure-tv-${p.lang}-${p.theme}${p.format === 'tall' ? '-tall' : ''}`}
        component={CoupureTv}
        durationInFrames={DURATION}
        fps={30}
        width={p.format === 'wide' ? 1280 : 720}
        height={p.format === 'wide' ? 640 : 840}
        defaultProps={p}
      />
    ))}
  </>
);
