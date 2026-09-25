// Rend chaque composition en WebM + MP4 + une affiche JPEG (dernière image = conclusion)
// dans public/visuals/<slug>/ du blog.
import {bundle} from '@remotion/bundler';
import {renderMedia, renderStill, selectComposition, getCompositions} from '@remotion/renderer';
import {mkdirSync} from 'node:fs';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, '..', '..', 'public', 'visuals', 'cost-of-trying');
mkdirSync(out, {recursive: true});
const browserExecutable = process.env.REMOTION_BROWSER || undefined;
const only = process.argv[2];

const serveUrl = await bundle({entryPoint: join(here, 'src', 'index.ts')});
const comps = await getCompositions(serveUrl, {browserExecutable});
for (const {id} of comps) {
  if (only && !id.includes(only)) continue;
  const composition = await selectComposition({serveUrl, id, browserExecutable});
  // WebM (VP9) d'abord : Chromium et Firefox sans codecs système ne lisent pas le H.264.
  // Le MP4 reste en secours pour les anciens Safari.
  for (const [codec, ext, crf] of [['vp9', 'webm', 38], ['h264', 'mp4', 26]]) {
    await renderMedia({
      composition, serveUrl, codec, crf, pixelFormat: 'yuv420p',
      outputLocation: join(out, `${id}.${ext}`), browserExecutable, muted: true,
    });
  }
  await renderStill({
    composition, serveUrl, frame: composition.durationInFrames - 1, imageFormat: 'jpeg', jpegQuality: 85,
    output: join(out, `${id}.jpg`), browserExecutable,
  });
  console.log('ok', id);
}
