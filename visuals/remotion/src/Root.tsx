import React from 'react';
import {Composition} from 'remotion';
import {Breaker, Federation, LOOP, Threshold} from './Loops';

// Une composition par boucle et par thème : `<nom>-<thème>`.
const LOOPS = {
  federation: {component: Federation, fps: 20},
  threshold: {component: Threshold, fps: 12},
  breaker: {component: Breaker, fps: 20},
};

export const Root: React.FC = () => (
  <>
    {Object.entries(LOOPS).flatMap(([name, {component, fps}]) =>
      (['light', 'dark'] as const).map((theme) => (
        <Composition
          key={`${name}-${theme}`}
          id={`${name}-${theme}`}
          component={component}
          durationInFrames={LOOP.seconds * fps}
          fps={fps}
          width={LOOP.width}
          height={LOOP.height}
          defaultProps={{theme}}
        />
      )),
    )}
  </>
);
