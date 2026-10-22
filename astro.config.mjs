import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

// Static output: every route is a pre-rendered HTML file under dist/, served
// by nginx as is. `directory` keeps the URL shape the blog always had
// (/posts/<slug> → dist/posts/<slug>/index.html).
export default defineConfig({
  site: 'https://blog.battistella.ovh',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
    assets: 'assets'
  },
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Never inline a script as a data: URL — the CSP (nginx.conf) only
      // allows scripts from 'self'. Other assets keep Vite's default.
      assetsInlineLimit: (file) => (file.endsWith('.js') ? false : undefined)
    }
  }
})
