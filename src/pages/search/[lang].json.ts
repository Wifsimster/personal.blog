import type { APIRoute, GetStaticPaths } from 'astro'
import { getAllPosts } from '@/posts'
import { htmlToText } from '@/lib/render'
import type { Language } from '@/types/i18n'

export const getStaticPaths: GetStaticPaths = () => [{ params: { lang: 'fr' } }, { params: { lang: 'en' } }]

export const GET: APIRoute = ({ params }) => {
  const lang = params.lang as Language
  const index = Object.fromEntries(getAllPosts(lang).map((post) => [post.slug, htmlToText(post.html).toLowerCase()]))
  return new Response(JSON.stringify(index), { headers: { 'Content-Type': 'application/json' } })
}
