import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Post from '@/views/Post.vue'
import Archives from '@/views/Archives.vue'
import Tag from '@/views/Tag.vue'
import Privacy from '@/views/Privacy.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, top: 80, behavior: 'smooth' }
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/en',
      name: 'HomeEn',
      component: Home
    },
    {
      path: '/posts/:slug',
      name: 'Post',
      component: Post
    },
    {
      path: '/en/posts/:slug',
      name: 'PostEn',
      component: Post
    },
    {
      path: '/archives',
      name: 'Archives',
      component: Archives
    },
    {
      path: '/en/archives',
      name: 'ArchivesEn',
      component: Archives
    },
    {
      path: '/tags/:tag',
      name: 'Tag',
      component: Tag
    },
    {
      path: '/en/tags/:tag',
      name: 'TagEn',
      component: Tag
    },
    {
      path: '/privacy',
      name: 'Privacy',
      component: Privacy
    },
    {
      path: '/en/privacy',
      name: 'PrivacyEn',
      component: Privacy
    }
  ]
})

export default router
