/** Leading + trailing throttle, like VueUse's useThrottleFn defaults. */
export function throttle(fn: () => void, ms: number): () => void {
  let last = 0
  let timer: ReturnType<typeof setTimeout> | undefined
  return () => {
    const now = Date.now()
    const remaining = ms - (now - last)
    if (remaining <= 0) {
      clearTimeout(timer)
      timer = undefined
      last = now
      fn()
    } else if (!timer) {
      timer = setTimeout(() => {
        timer = undefined
        last = Date.now()
        fn()
      }, remaining)
    }
  }
}
