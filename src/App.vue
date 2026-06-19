<template>
  <div class="min-h-screen transition-colors duration-200">
    <AppLayout>
      <RouterView />
    </AppLayout>
  </div>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue'
import { RouterView } from 'vue-router'
import AppLayout from './components/layout/AppLayout.vue'
import { useI18n } from '@/composables/useI18n'

const i18n = useI18n()

watchEffect(() => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = i18n.language.value
  }
})
</script>
