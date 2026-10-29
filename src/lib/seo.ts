import type { Language } from '@/types/i18n'
import { langPrefix } from '@/lib/i18n'

export const SITE_URL = 'https://blog.battistella.ovh'
export const SITE_NAME = 'Wifsimster Blog'
export const AUTHOR_NAME = 'Wifsimster'

export function alternatesFor(pathWithoutLang: string) {
  return {
    fr: `${SITE_URL}${pathWithoutLang || '/'}`,
    en: `${SITE_URL}/en${pathWithoutLang === '/' ? '' : pathWithoutLang}`
  }
}

export function pageTitle(title: string): string {
  return `${title} | ${SITE_NAME}`
}

export function localPath(lang: Language, pathWithoutLang: string): string {
  if (lang === 'fr') return pathWithoutLang || '/'
  return `${langPrefix(lang)}${pathWithoutLang === '/' ? '' : pathWithoutLang}`
}
