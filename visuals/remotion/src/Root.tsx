import React from 'react';
import {Composition} from 'remotion';
import {LOOP} from './loops/common';
import * as costOfTrying from './loops/cost-of-trying';
import * as dailyRhythm from './loops/daily-rhythm';
import * as noChoices from './loops/no-choices';
import * as notTheSun from './loops/not-the-sun';
import * as tenYears from './loops/ten-years-of-home-automation';

// Une composition par boucle et par thème : `<nom>-<thème>`, rendue dans
// public/visuals/<slug>/. fps bas = fichier plus léger quand tout bouge.
const LOOPS = [
  {slug: 'ten-years-of-home-automation', name: 'solder', component: tenYears.Solder, fps: 20},
  {slug: 'ten-years-of-home-automation', name: 'inventory', component: tenYears.Inventory, fps: 20},
  {slug: 'ten-years-of-home-automation', name: 'doorbell', component: tenYears.Doorbell, fps: 20},
  {slug: 'cost-of-trying', name: 'federation', component: costOfTrying.Federation, fps: 20},
  {slug: 'cost-of-trying', name: 'threshold', component: costOfTrying.Threshold, fps: 12},
  {slug: 'cost-of-trying', name: 'breaker', component: costOfTrying.Breaker, fps: 20},
  {slug: 'daily-rhythm', name: 'bricks', component: dailyRhythm.Bricks, fps: 20},
  {slug: 'daily-rhythm', name: 'slide', component: dailyRhythm.Slide, fps: 20},
  {slug: 'daily-rhythm', name: 'calendar', component: dailyRhythm.Calendar, fps: 20},
  {slug: 'no-choices', name: 'speaker', component: noChoices.Speaker, fps: 20},
  {slug: 'no-choices', name: 'rules', component: noChoices.Rules, fps: 20},
  {slug: 'no-choices', name: 'wakeup', component: noChoices.Wakeup, fps: 20},
  {slug: 'not-the-sun', name: 'shutters', component: notTheSun.Shutters, fps: 12},
  {slug: 'not-the-sun', name: 'facades', component: notTheSun.Facades, fps: 15},
  {slug: 'not-the-sun', name: 'phases', component: notTheSun.Phases, fps: 15},
];

export const Root: React.FC = () => (
  <>
    {LOOPS.flatMap(({slug, name, component, fps}) =>
      (['light', 'dark'] as const).map((theme) => (
        <Composition
          key={`${name}-${theme}`}
          id={`${name}-${theme}`}
          component={component}
          durationInFrames={LOOP.seconds * fps}
          fps={fps}
          width={LOOP.width}
          height={LOOP.height}
          defaultProps={{theme, slug}}
        />
      )),
    )}
  </>
);
