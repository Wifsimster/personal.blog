(function () {
  var stored = null
  try { stored = localStorage.getItem('vueuse-color-scheme') } catch { }
  var dark = stored === 'dark' || ((!stored || stored === 'auto') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  if (dark) document.documentElement.classList.add('dark')
})()
