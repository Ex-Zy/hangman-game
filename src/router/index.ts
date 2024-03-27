import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/start-game' },
    { path: '/game', redirect: '/in-game' },
    {
      path: '/start-game',
      name: 'StartGameView',
      component: () => import('@/views/StartGameView.vue')
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
      path: '/in-game',
      name: 'InGameView',
      component: () => import('@/views/InGameView.vue')
    }
  ]
})

export default router
