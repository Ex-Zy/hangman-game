import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { MenuType } from '@/types'

export const useMenu = defineStore('menu', () => {
  const isShow = ref(false)
  const type = ref<MenuType | null>(null)

  function callMenu(show: boolean, menuType: MenuType | null) {
    isShow.value = show
    type.value = menuType
  }

  function close() {
    callMenu(false, null)
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
    youWin,
    youLose,
    close
  }
})
