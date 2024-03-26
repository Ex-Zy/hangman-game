import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/how-to-play',
      name: 'HowToPlayView',
      component: () => import('@/views/HowToPlayView.vue')
    },
    {
      path: '/pick-category',
      name: 'PickCategoryView',
      component: () => import('@/views/PickCategoryView.vue')
    },
    {
      path: '/game',
      name: 'GameView',
      component: () => import('@/views/GameView.vue')
    }
  ]
})

export default router
