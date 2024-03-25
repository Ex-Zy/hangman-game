import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/how-to-play',
      name: 'HowToPlay',
      component: () => import('@/views/HowToPlayView.vue')
    },
    {
      path: '/pick-category',
      name: 'PickCategory',
      component: () => import('@/views/PickCategoryView.vue')
    }
  ]
})

export default router
