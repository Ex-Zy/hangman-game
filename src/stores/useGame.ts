import { defineStore } from 'pinia'
import { ref } from 'vue'

import router from '@/router'
import { useCategories } from '@/stores/useCategories'
import { useHealth } from '@/stores/useHealth'
import { useMenu } from '@/stores/useMenu'
import { useRandomWord } from '@/stores/useRandomWord'
import { createKeyboardAlphabet } from '@/stores/utils/createKeyboardAlphabet'
import { enableLetter } from '@/stores/utils/enableLetter'
import { isLetterCorrectly } from '@/stores/utils/isLetterCorrectly'
import type { Letter } from '@/types'

export const useGame = defineStore('game', () => {
  const categoriesStore = useCategories()
  const randomWordStore = useRandomWord()
  const menuStore = useMenu()
  const healthStore = useHealth()

  const keyboardAlphabet = ref(createKeyboardAlphabet())

  function pickLetter(letter: Letter) {
    if (isLetterCorrectly(randomWordStore.randomWord, letter)) {
      setCorrectlyLetter(letter)

      if (isGameWon()) {
        menuStore.youWin()
      }
    } else {
      setWrongLetter(letter)

      if (healthStore.isHealthOver()) {
        menuStore.youLose()
      }
    }
  }

  function isGameWon(): boolean {
    return randomWordStore.randomWord.flat(1).every((letter) => letter.enable)
  }

  function setCorrectlyLetter(letter: Letter) {
    disableLetterOnKeyboard(letter)
    enableLetterInRandomWord(letter)
  }

  function setWrongLetter(letter: Letter) {
    disableLetterOnKeyboard(letter)
    healthStore.decreaseHealth()
  }

  function enableLetterInRandomWord(letter: Letter) {
    randomWordStore.randomWord = enableLetter(randomWordStore.randomWord, letter)
  }

  function disableLetterOnKeyboard(letter: Letter) {
    keyboardAlphabet.value[letter.name].enable = false
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
    keyboardAlphabet.value = createKeyboardAlphabet()
  }

  return {
    keyboardAlphabet,
    pickLetter,
    reset,
    newCategory,
    playAgain,
    quitGame
  }
})
