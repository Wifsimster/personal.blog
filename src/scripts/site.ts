/** Behaviour shared by every page: theme, mobile header, search shortcuts, spotlight. */
import { throttle } from '@/scripts/throttle'

const STORAGE_KEY = 'vueuse-color-scheme'

function initThemeToggle(): void {
  const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]'))
  const sync = () => {
    const dark = document.documentElement.classList.contains('dark')
    for (const button of buttons) {
      const label = dark ? button.dataset.labelLight : button.dataset.labelDark
      if (label) button.setAttribute('aria-label', label)
    }
  }
  for (const button of buttons) {
    button.addEventListener('click', () => {
      const dark = document.documentElement.classList.toggle('dark')
      try {
        localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light')
      } catch {
        // Private mode: the choice lasts for this page only.
      }
      sync()
    })
  }
  // No saved choice (or 'auto'): follow the system theme when it changes.
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    let stored: string | null = null
    try {
      stored = localStorage.getItem(STORAGE_KEY)
    } catch {
      // Private mode: treat as no saved choice.
    }
    if (stored && stored !== 'auto') return
    document.documentElement.classList.toggle('dark', e.matches)
    sync()
  })
  sync()
}

/**
 * Slide the mobile header away while reading down, bring it back on the first
 * upward scroll. Small deltas are ignored so it doesn't flicker on momentum
 * bounce; the header always stays visible near the top and while the menu is
 * open. The state is mirrored on <html data-header-hidden> for the reading
 * progress bar, which follows the header edge.
 */
function initHeader(): void {
  const header = document.querySelector<HTMLElement>('[data-site-header]')
  if (!header) return
  const toggle = header.querySelector<HTMLButtonElement>('[data-menu-toggle]')!
  const menu = header.querySelector<HTMLElement>('[data-menu]')!
  const icon = toggle.querySelector('i')!
  let menuOpen = false
  let lastScrollY = window.scrollY

  const setHidden = (hidden: boolean) => {
    header.classList.toggle('-translate-y-full', hidden)
    header.classList.toggle('translate-y-0', !hidden)
    document.documentElement.dataset.headerHidden = String(hidden)
  }

  const setMenu = (open: boolean) => {
    menuOpen = open
    menu.hidden = !open
    toggle.setAttribute('aria-expanded', String(open))
    icon.className = `${open ? 'pi pi-times' : 'pi pi-bars'} text-sm text-gray-700 dark:text-zinc-300`
    if (open) setHidden(false)
  }

  toggle.addEventListener('click', () => setMenu(!menuOpen))
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)))

  window.addEventListener(
    'scroll',
    throttle(() => {
      const y = window.scrollY
      if (menuOpen || y < 64) setHidden(false)
      else if (y > lastScrollY + 4) setHidden(true)
      else if (y < lastScrollY - 4) setHidden(false)
      lastScrollY = y
    }, 100),
    { passive: true }
  )
}

/**
 * Sidebar and mobile-menu search: Enter sends the query to the home page's
 * list — directly when it is on screen, through `?q=` otherwise.
 */
function initSearchShortcuts(): void {
  const inputs = Array.from(document.querySelectorAll<HTMLInputElement>('[data-search-shortcut]'))
  const clear = document.querySelector<HTMLButtonElement>('[data-search-shortcut-clear]')
  const listingIsHome = document.querySelector<HTMLElement>('[data-listing][data-mode="home"]') !== null

  const mirror = (value: string) => {
    for (const input of inputs) input.value = value
    if (clear) clear.hidden = value === ''
  }

  for (const input of inputs) {
    input.addEventListener('input', () => {
      if (clear) clear.hidden = input.value === ''
    })
    input.addEventListener('keyup', (event) => {
      if (event.key !== 'Enter') return
      const query = input.value.trim()
      if (!query) return
      if (listingIsHome) {
        document.dispatchEvent(new CustomEvent('blog:search', { detail: query }))
        document.querySelector<HTMLElement>('[data-site-header] [data-menu]')?.setAttribute('hidden', '')
      } else {
        window.location.href = `${input.dataset.home}?q=${encodeURIComponent(query)}`
      }
    })
  }

  clear?.addEventListener('click', () => {
    mirror('')
    if (listingIsHome) document.dispatchEvent(new CustomEvent('blog:search', { detail: '' }))
  })

  document.addEventListener('blog:search-changed', (event) => mirror((event as CustomEvent<string>).detail))
}

/**
 * Cursor spotlight over the background dot grid. Decorative only — the layer
 * lives in CSS (.tech-spotlight); this feeds it the pointer position,
 * rAF-throttled so the DOM is touched once a frame.
 */
function initSpotlight(): void {
  const el = document.querySelector<HTMLElement>('.tech-spotlight')
  if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  let rafId = 0
  let x = 0
  let y = 0
  const apply = () => {
    rafId = 0
    el.style.setProperty('--spot-x', `${x}px`)
    el.style.setProperty('--spot-y', `${y}px`)
    el.classList.add('is-active')
  }
  window.addEventListener(
    'pointermove',
    (e) => {
      x = e.clientX
      y = e.clientY
      if (!rafId) rafId = requestAnimationFrame(apply)
    },
    { passive: true }
  )
  const leave = () => el.classList.remove('is-active')
  document.addEventListener('pointerleave', leave)
  window.addEventListener('blur', leave)
}

initThemeToggle()
initHeader()
initSearchShortcuts()
initSpotlight()
