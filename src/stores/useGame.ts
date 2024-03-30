import { defineStore } from 'pinia'

import router from '@/router'
import { useCategories } from '@/stores/useCategories'
import { useHealth } from '@/stores/useHealth'
import { useKeyboard } from '@/stores/useKeyboard'
import { useMenu } from '@/stores/useMenu'
import { useRandomWord } from '@/stores/useRandomWord'
import type { Letter } from '@/types'

export const useGame = defineStore('game', () => {
  const categoriesStore = useCategories()
  const randomWordStore = useRandomWord()
  const menuStore = useMenu()
  const healthStore = useHealth()
  const keyboardStore = useKeyboard()

  function pickLetter(letter: Letter) {
    if (randomWordStore.isLetterCorrectly(letter)) {
      setCorrectlyLetter(letter)
    } else {
      setWrongLetter(letter)
    }

    checkGameStatus()
  }

  function checkGameStatus() {
    if (isGameWon()) {
      menuStore.youWin()
    } else if (healthStore.isHealthOver()) {
      menuStore.youLose()
    }
  }

  function isGameWon(): boolean {
    return randomWordStore.randomWord.flat(1).every((letter) => letter.enable)
  }

  function setCorrectlyLetter(letter: Letter) {
    keyboardStore.disableLetterOnKeyboard(letter)
    randomWordStore.enableLetterInRandomWord(letter)
  }

  function setWrongLetter(letter: Letter) {
    keyboardStore.disableLetterOnKeyboard(letter)
    healthStore.decreaseHealth()
  }

  async function resetAndNavigate(routeName: string) {
    reset()
    categoriesStore.reset()
    menuStore.close()
    await router.push({ name: routeName })
  }

  async function newCategory() {
    await resetAndNavigate('PickCategoryView')
  }

  function playAgain() {
    reset()
    randomWordStore.setRandomWordToStore()
    menuStore.close()
  }

  async function quitGame() {
    await resetAndNavigate('StartGameView')
  }

  function reset() {
    // Attention: we reset current game state, but don't reset category
    healthStore.reset()
    randomWordStore.reset()
    keyboardStore.reset()
  }

  return {
    pickLetter,
    reset,
    newCategory,
    playAgain,
    quitGame
  }
})
