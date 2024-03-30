import { defineStore } from 'pinia'
import { ref } from 'vue'

import router from '@/router'
import { useCategories } from '@/stores/useCategories'
import { useHealth } from '@/stores/useHealth'
import { useMenu } from '@/stores/useMenu'
import { createKeyboardAlphabet } from '@/stores/utils/createKeyboardAlphabet'
import { createRandomWord } from '@/stores/utils/createRandomWord'
import { enableLetter } from '@/stores/utils/enableLetter'
import { isLetterCorrectly } from '@/stores/utils/isLetterCorrectly'
import type { Categories, EncryptedWord, Letter, Word } from '@/types'

export const useGame = defineStore('game', () => {
  const categoriesStore = useCategories()
  const menuStore = useMenu()
  const healthStore = useHealth()

  const initialRandomWord = ref('')
  const randomWord = ref<EncryptedWord>([])

  const keyboardAlphabet = ref(createKeyboardAlphabet())

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

      if (healthStore.isHealthOver()) {
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
    healthStore.decreaseHealth()
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
    healthStore.reset()
    initialRandomWord.value = ''
    randomWord.value = []
    keyboardAlphabet.value = createKeyboardAlphabet()
  }

  return {
    initialRandomWord,
    keyboardAlphabet,
    randomWord,
    setRandomWordToStore,
    pickLetter,
    reset,
    newCategory,
    playAgain,
    quitGame
  }
})
