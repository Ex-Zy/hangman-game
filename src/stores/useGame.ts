import { defineStore } from 'pinia'
import { ref } from 'vue'

import router from '@/router'
import { useCategories } from '@/stores/useCategories'
import { useMenu } from '@/stores/useMenu'
import { createKeyboardAlphabet } from '@/stores/utils/createKeyboardAlphabet'
import { createRandomWord } from '@/stores/utils/createRandomWord'
import { enableLetter } from '@/stores/utils/enableLetter'
import { isLetterCorrectly } from '@/stores/utils/isLetterCorrectly'
import type { Categories, EncryptedWord, Letter, Word } from '@/types'

export const useGame = defineStore('game', () => {
  const categoriesStore = useCategories()
  const menuStore = useMenu()

  const initialRandomWord = ref('')
  const randomWord = ref<EncryptedWord>([])

  const keyboardAlphabet = ref(createKeyboardAlphabet())
  const health = ref(100)

  function getRandomWord(categories: Categories, category: string) {
    const words: Word[] = categories[category]

    return words[Math.floor(Math.random() * words.length)].name
  }

  function setRandomWordToStore() {
    initialRandomWord.value = getRandomWord(categoriesStore.categories, categoriesStore.category)
    randomWord.value = createRandomWord(initialRandomWord.value)
  }

  function pickLetter(letter: Letter) {
    if (isLetterCorrectly(randomWord.value, letter)) {
      setCorrectlyLetter(letter)

      if (isGameWon()) {
        menuStore.youWin()
      }
    } else {
      setWrongLetter(letter)

      if (isHealthOver()) {
        menuStore.youLose()
      }
    }
  }

  function isGameWon(): boolean {
    return randomWord.value.flat(1).every((letter) => letter.enable)
  }

  function setCorrectlyLetter(letter: Letter) {
    disableLetterOnKeyboard(letter)
    enableLetterInRandomWord(letter)
  }

  function setWrongLetter(letter: Letter) {
    disableLetterOnKeyboard(letter)
    decreaseHealth()
  }

  function decreaseHealth() {
    // only 8 available attempts for wrong choice
    const DECREASE_STEP = 100 / 8

    if (isHealthOkay()) {
      health.value -= DECREASE_STEP
    }
  }

  function isHealthOkay() {
    return health.value > 0
  }

  function isHealthOver() {
    return health.value <= 0
  }

  function enableLetterInRandomWord(letter: Letter) {
    randomWord.value = enableLetter(randomWord.value, letter)
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
    setRandomWordToStore()
    menuStore.close()
  }

  async function quitGame() {
    await resetAndNavigate('StartGameView')
  }

  function reset() {
    // Attention: we reset current game state, but don't reset category
    health.value = 100
    initialRandomWord.value = ''
    randomWord.value = []
    keyboardAlphabet.value = createKeyboardAlphabet()
  }

  return {
    initialRandomWord,
    keyboardAlphabet,
    randomWord,
    health,
    setRandomWordToStore,
    pickLetter,
    reset,
    newCategory,
    playAgain,
    quitGame
  }
})
