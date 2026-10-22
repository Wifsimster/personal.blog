// Runs synchronously in <head>, before first paint. Same storage key and
// values the Vue app used (VueUse useDark), so a reader's choice survives the
// migration: 'dark', 'light', or 'auto'/absent to follow the system.
(function () {
  var stored = null
  try { stored = localStorage.getItem('vueuse-color-scheme') } catch { /* private mode */ }
  var dark = stored === 'dark' || ((!stored || stored === 'auto') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  if (dark) document.documentElement.classList.add('dark')
})()
