<template>
  <svg class="flag-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <defs>
      <clipPath :id="clipId">
        <circle cx="12" cy="12" r="12" />
      </clipPath>
    </defs>
    <g :clip-path="`url(#${clipId})`">
      <template v-if="lang === 'fr'">
        <rect width="8" height="24" fill="#0055A4" />
        <rect x="8" width="8" height="24" fill="#FFFFFF" />
        <rect x="16" width="8" height="24" fill="#EF4135" />
      </template>
      <template v-else>
        <rect width="24" height="24" fill="#B22234" />
        <rect v-for="y in whiteStripes" :key="y" :y="y" width="24" height="1.85" fill="#FFFFFF" />
        <rect width="12" height="12.92" fill="#3C3B6E" />
        <circle v-for="([cx, cy], i) in stars" :key="i" :cx="cx" :cy="cy" r="0.6" fill="#FFFFFF" />
      </template>
    </g>
    <circle cx="12" cy="12" r="11.5" fill="none" stroke="currentColor" stroke-opacity="0.15" />
  </svg>
</template>

<script setup lang="ts">
import { useId } from 'vue'
import type { Language } from '@/types/i18n'

defineProps<{ lang: Language }>()

const clipId = `flag-clip-${useId()}`

const whiteStripes = [1.85, 5.54, 9.23, 12.92, 16.62, 20.31]

const evenRow = [1.8, 4.4, 7, 9.6]
const oddRow = [3.1, 5.7, 8.3, 10.9]
const stars: Array<[number, number]> = [2.1, 4.3, 6.5, 8.7, 10.9].flatMap((cy, row) =>
  (row % 2 === 0 ? evenRow : oddRow).map((cx): [number, number] => [cx, cy])
)
</script>

<style scoped>
.flag-icon {
  display: block;
  flex-shrink: 0;
}
</style>
