<template>
  <button
    @click="toggle"
    class="language-toggle"
    :class="{ 'is-en': i18n.language.value === 'en' }"
    :aria-label="i18n.language.value === 'fr' ? 'Switch to English' : 'Passer en Français'"
    role="switch"
    :aria-checked="i18n.language.value === 'en'"
  >
    <FlagIcon lang="fr" class="language-toggle__flag" :class="{ active: i18n.language.value === 'fr' }" />
    <span class="language-toggle__track">
      <span class="language-toggle__thumb" />
    </span>
    <FlagIcon lang="en" class="language-toggle__flag" :class="{ active: i18n.language.value === 'en' }" />
  </button>
</template>

<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'
import FlagIcon from './FlagIcon.vue'

const i18n = useI18n()

function toggle() {
  i18n.switchLanguage(i18n.language.value === 'fr' ? 'en' : 'fr')
}
</script>

<style scoped>
.language-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  cursor: pointer;
  border: none;
  background: none;
  padding: 0.25rem;
  border-radius: 9999px;
  user-select: none;
}

.language-toggle__flag {
  width: 1.125rem;
  height: 1.125rem;
  transition: opacity 0.2s ease, filter 0.2s ease;
}

.language-toggle__flag:not(.active) {
  opacity: 0.35;
  filter: grayscale(1);
}

.language-toggle__track {
  position: relative;
  width: 2.25rem;
  height: 1.25rem;
  border-radius: 9999px;
  background-color: var(--color-gray-300, #d1d5db);
  transition: background-color 0.2s ease;
}

:where(.dark) .language-toggle__track {
  background-color: var(--color-zinc-600, #52525b);
}

.language-toggle__thumb {
  position: absolute;
  top: 0.125rem;
  left: 0.125rem;
  width: 1rem;
  height: 1rem;
  border-radius: 9999px;
  background-color: white;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
  transition: transform 0.2s ease;
}

.language-toggle.is-en .language-toggle__track {
  background-color: var(--color-primary-500, #0ea5e9);
}

:where(.dark) .language-toggle.is-en .language-toggle__track {
  background-color: var(--color-primary-600, #0284c7);
}

.language-toggle.is-en .language-toggle__thumb {
  transform: translateX(1rem);
}
</style>
