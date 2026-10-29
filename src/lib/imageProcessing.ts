function wrapInPicture(document: Document, img: HTMLImageElement): HTMLPictureElement {
  const picture = document.createElement('picture')
  const src = img.getAttribute('src') || ''
  const avifSrc = src.replace(/\.(jpe?g|png)(\?.*)?$/i, '.avif$2')
  if (avifSrc !== src) {
    const source = document.createElement('source')
    source.setAttribute('type', 'image/avif')
    source.setAttribute('srcset', avifSrc)
    picture.appendChild(source)
  }
  picture.appendChild(img)
  return picture
}

export function processPostImages(html: string, document: Document): string {
  if (!html || typeof html !== 'string') {
    return html || ''
  }

  const tempDiv = document.createElement('div')
  tempDiv.innerHTML = html

  const paragraphs = Array.from(tempDiv.querySelectorAll('p'))
  const imageGroups: HTMLParagraphElement[][] = []
  let currentGroup: HTMLParagraphElement[] = []

  paragraphs.forEach((p) => {
    const img = p.querySelector('img')
    if (img) {
      currentGroup.push(p as HTMLParagraphElement)
    } else {
      if (currentGroup.length > 0) {
        imageGroups.push([...currentGroup])
        currentGroup = []
      }
    }
  })

  if (currentGroup.length > 0) {
    imageGroups.push(currentGroup)
  }

  imageGroups.forEach((group) => {
    if (group.length === 0) return

    const gridContainer = document.createElement('div')
    gridContainer.className = 'grid grid-cols-2 md:grid-cols-3 gap-4 my-4'

    group.forEach((p) => {
      const img = p.querySelector('img')
      if (img) {
        const imageWrapper = document.createElement('div')
        imageWrapper.className = 'flex items-center justify-center'

        const imgClone = img.cloneNode(true) as HTMLImageElement
        imgClone.className = 'w-full h-auto object-contain rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow hover:scale-105'

        imgClone.setAttribute('data-gallery-image', 'true')

        if (!imgClone.getAttribute('loading')) imgClone.setAttribute('loading', 'lazy')
        if (!imgClone.getAttribute('decoding')) imgClone.setAttribute('decoding', 'async')

        imageWrapper.appendChild(wrapInPicture(document, imgClone))
        gridContainer.appendChild(imageWrapper)
      }
    })

    const firstParagraph = group[0]
    const parent = firstParagraph.parentElement
    if (parent) {
      parent.insertBefore(gridContainer, firstParagraph)
      
      group.forEach((p) => {
        const img = p.querySelector('img')
        if (img && (p.textContent?.trim() === '' || p.children.length === 1)) {
          p.remove()
        } else if (img) {
          img.remove()
        }
      })
    }
  })

  const remainingImages = Array.from(tempDiv.querySelectorAll('p > img'))
  remainingImages.forEach((img) => {
    const imgElement = img as HTMLImageElement
    const parent = imgElement.parentElement

    if (parent && parent.tagName === 'P') {
      imgElement.className = 'w-full h-auto object-contain rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow hover:scale-105 block my-4'
      imgElement.setAttribute('data-gallery-image', 'true')

      if (!imgElement.getAttribute('loading')) imgElement.setAttribute('loading', 'lazy')
      if (!imgElement.getAttribute('decoding')) imgElement.setAttribute('decoding', 'async')

      const next = imgElement.nextSibling
      imgElement.remove()
      const picture = wrapInPicture(document, imgElement)
      if (next && next.parentNode === parent) {
        parent.insertBefore(picture, next)
      } else {
        parent.appendChild(picture)
      }
    }
  })

  return tempDiv.innerHTML
}
