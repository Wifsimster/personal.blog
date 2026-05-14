/**
 * Processes HTML content to wrap consecutive images in responsive Tailwind CSS grid containers.
 * Images are grouped into rows: 2 columns on mobile, 3 columns on desktop.
 * 
 * @param html - The HTML string to process
 * @returns Processed HTML with images wrapped in grid containers
 */
export function processPostImages(html: string): string {
  if (!html || typeof html !== 'string') {
    return html || ''
  }

  // Check if we're in a browser environment
  if (typeof document === 'undefined') {
    return html
  }

  // Create a temporary DOM element to parse and manipulate the HTML
  const tempDiv = document.createElement('div')
  tempDiv.innerHTML = html

  // Find all paragraphs containing images
  const paragraphs = Array.from(tempDiv.querySelectorAll('p'))
  const imageGroups: HTMLParagraphElement[][] = []
  let currentGroup: HTMLParagraphElement[] = []

  // Group consecutive paragraphs that contain images
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

  // Add last group if exists
  if (currentGroup.length > 0) {
    imageGroups.push(currentGroup)
  }

  // Process each group of consecutive images
  imageGroups.forEach((group) => {
    if (group.length === 0) return

    // Create grid container
    const gridContainer = document.createElement('div')
    gridContainer.className = 'grid grid-cols-2 md:grid-cols-3 gap-4 my-4'

    // Extract images from paragraphs and add to grid
    group.forEach((p) => {
      const img = p.querySelector('img')
      if (img) {
        // Create wrapper div for each image
        const imageWrapper = document.createElement('div')
        imageWrapper.className = 'flex items-center justify-center'

        // Clone the image and apply styles
        const imgClone = img.cloneNode(true) as HTMLImageElement
        imgClone.className = 'w-full h-auto object-contain rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow hover:scale-105'

        // Add data attribute to identify images for click handling
        imgClone.setAttribute('data-gallery-image', 'true')

        // Defer off-screen image loading (CWV: LCP/payload)
        if (!imgClone.getAttribute('loading')) imgClone.setAttribute('loading', 'lazy')
        if (!imgClone.getAttribute('decoding')) imgClone.setAttribute('decoding', 'async')

        imageWrapper.appendChild(imgClone)
        gridContainer.appendChild(imageWrapper)
      }
    })

    // Insert grid container before the first paragraph of the group
    const firstParagraph = group[0]
    const parent = firstParagraph.parentElement
    if (parent) {
      parent.insertBefore(gridContainer, firstParagraph)
      
      // Remove the original paragraphs (they only contained images)
      group.forEach((p) => {
        // Check if paragraph only contains the image (or is empty after removing image)
        const img = p.querySelector('img')
        if (img && (p.textContent?.trim() === '' || p.children.length === 1)) {
          p.remove()
        } else if (img) {
          // Remove just the image if paragraph has other content
          img.remove()
        }
      })
    }
  })

  // Handle single images that weren't in groups (standalone images not in consecutive groups)
  const remainingImages = Array.from(tempDiv.querySelectorAll('p > img'))
  remainingImages.forEach((img) => {
    const imgElement = img as HTMLImageElement
    const parent = imgElement.parentElement
    
    if (parent && parent.tagName === 'P') {
      // Apply styles directly to single images
      imgElement.className = 'w-full h-auto object-contain rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow hover:scale-105 block my-4'
      imgElement.setAttribute('data-gallery-image', 'true')

      // Defer off-screen image loading (CWV: LCP/payload)
      if (!imgElement.getAttribute('loading')) imgElement.setAttribute('loading', 'lazy')
      if (!imgElement.getAttribute('decoding')) imgElement.setAttribute('decoding', 'async')
    }
  })

  return tempDiv.innerHTML
}
