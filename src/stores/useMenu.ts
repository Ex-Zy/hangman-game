import { defineStore } from 'pinia'
import { ref } from 'vue'

import router from '@/router'
import { useCategories } from '@/stores/useCategories'
import { useGame } from '@/stores/useGame'
import type { MenuType } from '@/types'

export const useMenu = defineStore('menu', () => {
  const gameStore = useGame()
  const categoriesStore = useCategories()

  const isShow = ref(false)
  const type = ref<MenuType | null>(null)

  function callMenu(show: boolean, menuType: MenuType | null) {
    isShow.value = show
    type.value = menuType
  }

  function close() {
    callMenu(false, null)
  }

  async function newCategory() {
    gameStore.reset()
    categoriesStore.reset()
    close()
    await router.push('/pick-category')
  }

  function playAgain() {
    gameStore.reset()
    gameStore.setRandomWordToStore()
    close()
  }

  async function quitGame() {
    gameStore.reset()
    categoriesStore.reset()
    close()
    await router.push('/start-game')
  }

  function paused() {
    callMenu(true, 'pause')
  }

  function youWin() {
    callMenu(true, 'win')
  }

  function youLose() {
    callMenu(true, 'lose')
  }

  return {
    isShow,
    type,
    paused,
    playAgain,
    newCategory,
    quitGame,
    youWin,
    youLose,
    close
  }
})
