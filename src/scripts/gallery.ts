/**
 * Full-screen image gallery for article photos (replaces PrimeVue Galleria).
 * Click a photo to open it; arrows, thumbnails or ←/→ move through every photo
 * of the article, circularly; Esc, the close button or a click beside the
 * image closes it.
 */
export function initGallery(content: HTMLElement): void {
  const dialog = document.querySelector<HTMLDialogElement>('[data-gallery]')
  const images = Array.from(content.querySelectorAll<HTMLImageElement>('img[data-gallery-image]'))
    .filter((img) => img.getAttribute('src'))
  if (!dialog || images.length === 0) return

  const main = dialog.querySelector<HTMLImageElement>('[data-gallery-image-main]')!
  const counter = dialog.querySelector<HTMLElement>('[data-gallery-counter]')!
  const thumbs = dialog.querySelector<HTMLElement>('[data-gallery-thumbs]')!
  const prev = dialog.querySelector<HTMLButtonElement>('[data-gallery-prev]')!
  const next = dialog.querySelector<HTMLButtonElement>('[data-gallery-next]')!
  const stage = dialog.querySelector<HTMLElement>('[data-gallery-stage]')!
  const sources = images.map((img) => ({ src: img.getAttribute('src')!, alt: img.getAttribute('alt') || '' }))
  const several = sources.length > 1
  let index = 0

  counter.hidden = !several
  prev.hidden = !several
  next.hidden = !several
  thumbs.hidden = !several
  main.classList.add(several ? 'max-h-[calc(100dvh-9.5rem)]' : 'max-h-[calc(100dvh-3rem)]')

  const thumbButtons = several
    ? sources.map((source, i) => {
        const button = document.createElement('button')
        button.type = 'button'
        button.className = 'gallery-thumb shrink-0 rounded-lg focus-ring'
        button.setAttribute('aria-label', `${i + 1} / ${sources.length}`)
        const img = document.createElement('img')
        img.src = source.src
        img.alt = source.alt
        img.loading = 'lazy'
        img.className = 'w-14 h-14 sm:w-20 sm:h-20 object-cover rounded-lg cursor-pointer transition-all hover:opacity-90 hover:scale-105 shadow-md'
        button.appendChild(img)
        button.addEventListener('click', () => show(i))
        thumbs.appendChild(button)
        return button
      })
    : []

  function show(i: number): void {
    index = (i + sources.length) % sources.length
    main.src = sources[index].src
    main.alt = sources[index].alt
    counter.textContent = `${index + 1} / ${sources.length}`
    thumbButtons.forEach((button, j) => button.classList.toggle('is-active', j === index))
    thumbButtons[index]?.scrollIntoView({ block: 'nearest', inline: 'center' })
  }

  images.forEach((img, i) => {
    // Two photos can share a file; open on the first one, as before.
    const first = sources.findIndex((s) => s.src === img.getAttribute('src'))
    img.addEventListener('click', () => {
      // Open first: the thumbnail strip can only scroll once it is laid out.
      dialog.showModal()
      show(first >= 0 ? first : i)
    })
  })

  prev.addEventListener('click', () => show(index - 1))
  next.addEventListener('click', () => show(index + 1))
  dialog.querySelector('[data-gallery-close]')!.addEventListener('click', () => dialog.close())
  // The dialog fills the screen, so a click on the empty space around the
  // image lands on the stage itself.
  stage.addEventListener('click', (event) => {
    if (event.target === stage) dialog.close()
  })
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') show(index - 1)
    else if (event.key === 'ArrowRight') show(index + 1)
  })
}
