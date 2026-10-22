/**
 * Client-side filtering for the home page and the tag pages: free-text search
 * over title, description and body, plus (home only) one tag filter. Cards are
 * already in the page; this only toggles their visibility.
 *
 * Body text is not in the page. It loads once, from /search/<lang>.json, the
 * first time the reader focuses or types in the search box. Until it arrives,
 * the search matches titles and descriptions only.
 */

type SearchIndex = Record<string, string>

const indexCache: Partial<Record<string, Promise<SearchIndex>>> = {}

function loadIndex(lang: string): Promise<SearchIndex> {
  indexCache[lang] ??= fetch(`/search/${lang}.json`)
    .then((res) => (res.ok ? (res.json() as Promise<SearchIndex>) : {}))
    .catch(() => ({}))
  return indexCache[lang]!
}

export function initListing(): void {
  const root = document.querySelector<HTMLElement>('[data-listing]')
  if (!root) return

  const lang = root.dataset.lang || 'fr'
  const isHome = root.dataset.mode === 'home'
  const input = root.querySelector<HTMLInputElement>('[data-listing-search]')!
  const clearSearchButton = root.querySelector<HTMLButtonElement>('[data-listing-clear-search]')!
  const countBadge = root.querySelector<HTMLElement>('[data-listing-count]')!
  const clearFilters = root.querySelector<HTMLElement>('[data-listing-clear-filters]')!
  const results = root.querySelector<HTMLElement>('[data-listing-results]')!
  const empty = root.querySelector<HTMLElement>('[data-listing-empty]')!
  const cards = Array.from(root.querySelectorAll<HTMLElement>('[data-post-card]'))
  const groups = Array.from(root.querySelectorAll<HTMLElement>('[data-year-group]'))
  const tagButtons = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-tag-filter]'))
  const pillIdle = (root.dataset.pillIdle || '').split(' ')
  const pillActive = (root.dataset.pillActive || '').split(' ')

  let bodies: SearchIndex = {}
  let selectedTag: string | null = null

  const ensureIndex = () => {
    void loadIndex(lang).then((index) => {
      bodies = index
      apply()
    })
  }

  function matches(card: HTMLElement, query: string): boolean {
    if (selectedTag && !(card.dataset.tags || '').split('|').includes(selectedTag)) return false
    if (!query) return true
    return (
      (card.dataset.title || '').includes(query) ||
      (card.dataset.description || '').includes(query) ||
      (bodies[card.dataset.slug || ''] || '').includes(query)
    )
  }

  function apply(): void {
    const query = input.value.toLowerCase().trim()
    let shown = 0
    for (const card of cards) {
      const visible = matches(card, query)
      card.hidden = !visible
      if (visible) shown++
    }
    for (const group of groups) {
      const visibleCards = group.querySelectorAll('[data-post-card]:not([hidden])').length
      group.hidden = visibleCards === 0
      group.querySelector('[data-year-count]')!.textContent = `(${visibleCards})`
    }
    results.hidden = shown === 0
    empty.hidden = shown > 0

    clearSearchButton.hidden = input.value === ''
    const showCount = input.value === '' && selectedTag !== null
    countBadge.hidden = !showCount
    countBadge.textContent = (shown === 1 ? root!.dataset.countOne! : root!.dataset.countMany!).replace('{count}', String(shown))
    input.classList.toggle('pr-24', showCount)
    input.classList.toggle('pr-10', !showCount)
    clearFilters.hidden = input.value.trim() === '' && selectedTag === null

    for (const button of tagButtons) {
      const active = button.dataset.tagFilter === selectedTag
      button.classList.remove(...(active ? pillIdle : pillActive))
      button.classList.add(...(active ? pillActive : pillIdle))
      button.setAttribute('aria-pressed', String(active))
    }

    // Keep the query in the URL, so Back from an article restores the list.
    if (isHome) {
      const url = new URL(window.location.href)
      if (input.value.trim()) url.searchParams.set('q', input.value)
      else url.searchParams.delete('q')
      history.replaceState(history.state, '', url)
    }
    document.dispatchEvent(new CustomEvent('blog:search-changed', { detail: input.value }))
  }

  input.addEventListener('focus', ensureIndex, { once: true })
  input.addEventListener('input', () => {
    ensureIndex()
    apply()
  })
  clearSearchButton.addEventListener('click', () => {
    input.value = ''
    apply()
  })
  clearFilters.querySelector('button')!.addEventListener('click', () => {
    input.value = ''
    selectedTag = null
    apply()
  })
  for (const button of tagButtons) {
    button.addEventListener('click', () => {
      const tag = button.dataset.tagFilter || null
      selectedTag = selectedTag === tag ? null : tag
      apply()
    })
  }

  // The sidebar and mobile-menu search boxes hand their query over here.
  document.addEventListener('blog:search', (event) => {
    input.value = (event as CustomEvent<string>).detail
    ensureIndex()
    apply()
  })

  const initial = new URLSearchParams(window.location.search).get('q')
  if (isHome && initial) {
    input.value = initial
    ensureIndex()
  }
  apply()
}
