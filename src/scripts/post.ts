import { throttle } from '@/scripts/throttle'
import { initGallery } from '@/scripts/gallery'

declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: Record<string, unknown>) => void
    }
  }
}

function initReadingProgress(): void {
  const bar = document.querySelector<HTMLElement>('[data-reading-progress]')
  if (!bar) return
  const update = () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = docHeight <= 0 ? 0 : Math.min(100, Math.max(0, (window.scrollY / docHeight) * 100))
    bar.style.width = `${progress}%`
  }
  window.addEventListener('scroll', throttle(update, 50), { passive: true })
  update()
}

const SCROLL_THRESHOLD = 400
const SCROLL_IDLE_DELAY = 1200

function initBackToTop(): void {
  const wrapper = document.querySelector<HTMLElement>('[data-back-to-top]')
  if (!wrapper) return
  const button = wrapper.querySelector('button')!
  let idleTimer: ReturnType<typeof setTimeout> | undefined

  const setScrolling = (scrolling: boolean) => {
    button.classList.toggle('opacity-100', scrolling)
    button.classList.toggle('scale-100', scrolling)
    button.classList.toggle('opacity-60', !scrolling)
    button.classList.toggle('scale-90', !scrolling)
  }
  const updateVisibility = () => {
    const visible = window.scrollY > SCROLL_THRESHOLD
    wrapper.classList.toggle('back-to-top-hidden', !visible)
    button.tabIndex = visible ? 0 : -1
  }

  window.addEventListener(
    'scroll',
    throttle(() => {
      updateVisibility()
      setScrolling(true)
      clearTimeout(idleTimer)
      idleTimer = setTimeout(() => setScrolling(false), SCROLL_IDLE_DELAY)
    }, 100),
    { passive: true }
  )
  button.addEventListener('click', () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  })
  updateVisibility()
}

const SCROLL_OFFSET = 80
const ACTIVE_HEADING_OFFSET = 100

function initTableOfContents(): void {
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-toc] a[href^="#"]'))
  if (links.length === 0) return
  const activeClasses = ['text-primary-600', 'dark:text-primary-400', 'bg-primary-50', 'dark:bg-primary-900/20', 'font-medium', 'border-l-2', 'border-primary-600', 'dark:border-primary-400']
  const targets = links.map((link) => document.getElementById(decodeURIComponent(link.hash.slice(1))))

  const update = () => {
    const position = window.scrollY + ACTIVE_HEADING_OFFSET
    let active = 0
    for (let i = targets.length - 1; i >= 0; i--) {
      const el = targets[i]
      if (el && el.getBoundingClientRect().top + window.scrollY <= position) {
        active = i
        break
      }
    }
    links.forEach((link, i) => {
      for (const c of activeClasses) link.classList.toggle(c, i === active)
    })
  }

  links.forEach((link, i) => {
    link.addEventListener('click', (event) => {
      const el = targets[i]
      if (!el) return
      event.preventDefault()
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET, behavior: 'smooth' })
    })
  })
  window.addEventListener('scroll', throttle(update, 100), { passive: true })
  window.addEventListener('load', update)
  update()
}

function initAbbrTooltips(content: HTMLElement): void {
  let tooltip: HTMLDivElement | null = null
  let activeAbbr: HTMLElement | null = null

  const ensureTooltip = () => {
    if (!tooltip) {
      tooltip = document.createElement('div')
      tooltip.className = 'abbr-tooltip'
      tooltip.setAttribute('role', 'tooltip')
      tooltip.style.visibility = 'hidden'
      document.body.appendChild(tooltip)
    }
    return tooltip
  }
  const hide = () => {
    if (tooltip) tooltip.style.visibility = 'hidden'
    activeAbbr = null
  }
  const show = (abbr: HTMLElement) => {
    const text = abbr.getAttribute('title')
    if (!text) return
    const tip = ensureTooltip()
    tip.textContent = text
    tip.style.left = '0px'
    tip.style.top = '0px'
    tip.style.visibility = 'hidden'

    const abbrRect = abbr.getBoundingClientRect()
    const tipRect = tip.getBoundingClientRect()
    const margin = 8
    let left = abbrRect.left + abbrRect.width / 2 - tipRect.width / 2
    left = Math.max(margin, Math.min(left, window.innerWidth - tipRect.width - margin))
    let top = abbrRect.bottom + 8
    if (top + tipRect.height > window.innerHeight - margin) top = abbrRect.top - tipRect.height - 8

    tip.style.left = `${left}px`
    tip.style.top = `${top}px`
    tip.style.visibility = 'visible'
    activeAbbr = abbr
  }

  for (const abbr of Array.from(content.querySelectorAll<HTMLElement>('abbr[title]'))) {
    abbr.setAttribute('tabindex', '0')
    const toggle = (event: Event) => {
      event.stopPropagation()
      if (activeAbbr === abbr) hide()
      else show(abbr)
    }
    abbr.addEventListener('click', toggle)
    abbr.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        toggle(event)
      }
    })
  }

  document.addEventListener('pointerdown', (event) => {
    if (!activeAbbr) return
    const target = event.target as Node
    if (tooltip?.contains(target) || activeAbbr.contains(target)) return
    hide()
  })
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') hide()
  })
  const onViewportChange = () => {
    if (activeAbbr) hide()
  }
  window.addEventListener('scroll', onViewportChange, true)
  window.addEventListener('resize', onViewportChange)
}

function initDiagramScrollFades(content: HTMLElement): void {
  const scrollers = Array.from(content.querySelectorAll<HTMLElement>('.diagram-scroll'))
  const update = (el: HTMLElement) => {
    el.classList.toggle('can-scroll-left', el.scrollLeft > 4)
    el.classList.toggle('can-scroll-right', el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }
  for (const el of scrollers) {
    update(el)
    el.addEventListener('scroll', () => update(el), { passive: true })
  }
  window.addEventListener('resize', () => scrollers.forEach(update))
}

const ENGAGEMENT_DWELL_MS = 10_000
const ENGAGEMENT_SCROLL_PCT = 50

function initEngagedReadBeacon(article: HTMLElement): void {
  if (article.dataset.draft === 'true') return
  let fired = false
  const fire = () => {
    if (fired) return
    fired = true
    window.removeEventListener('scroll', onScroll)
    const umami = window.umami
    if (!umami || typeof umami.track !== 'function') return
    try {
      let referrer = ''
      try {
        if (document.referrer && new URL(document.referrer).origin === window.location.origin) referrer = document.referrer
      } catch {
      }
      umami.track('engaged_read', { path: window.location.pathname, title: article.dataset.title || '', referrer })
    } catch {
    }
  }
  const onScroll = () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const pct = docHeight <= 0 ? 100 : (window.scrollY / docHeight) * 100
    if (pct >= ENGAGEMENT_SCROLL_PCT) fire()
  }
  setTimeout(fire, ENGAGEMENT_DWELL_MS)
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
}

const article = document.querySelector<HTMLElement>('[data-post]')
const content = document.querySelector<HTMLElement>('.post-content')
initReadingProgress()
initBackToTop()
initTableOfContents()
if (content) {
  initAbbrTooltips(content)
  initDiagramScrollFades(content)
  initGallery(content)
}
if (article) initEngagedReadBeacon(article)
