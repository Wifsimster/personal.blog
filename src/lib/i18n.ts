import type { Language } from '@/types/i18n'
import { translations } from '@/i18n/translations'

export const LANGUAGES: Language[] = ['fr', 'en']

export function langPrefix(lang: Language): string {
  return lang === 'en' ? '/en' : ''
}

export function homePath(lang: Language): string {
  return langPrefix(lang) || '/'
}

export function switchLanguagePath(path: string, target: Language): string {
  if (target === 'en') {
    return path.startsWith('/en') ? path : '/en' + (path === '/' ? '' : path)
  }
  return path.startsWith('/en') ? path.replace('/en', '') || '/' : path
}

export function t(lang: Language, key: string, params?: Record<string, string>): string {
  let text = translations[lang]?.[key] || key
  if (params) {
    for (const param of Object.keys(params)) {
      text = text.replace(`{${param}}`, params[param])
    }
  }
  return text
}
