import { defineStore, storeToRefs } from 'pinia'
import { ref } from 'vue'

import { useCategories } from '@/stores/useCategories'
import { createKeyboardAlphabet } from '@/stores/utils/createKeyboardAlphabet'
import { createRandomWord } from '@/stores/utils/createRandomWord'
import { enableLetter } from '@/stores/utils/enableLetter'
import { isLetterCorrectly } from '@/stores/utils/isLetterCorrectly'
import type { Category, Letter, Word } from '@/types'
import { CategoriesEnum } from '@/types'

export const useGame = defineStore('game', () => {
  const { categories, category } = storeToRefs(useCategories())

  const initialRandomWord = ref('')
  const randomWord = ref<Word>([])

  const keyboardAlphabet = ref(createKeyboardAlphabet())
  const health = ref(100)
  const DECREASE_STEP = 100 / 8 // only 8 available attempts for wrong choice

  function getRandomWord() {
    const words: Category[] = category.value
      ? categories.value[category.value as CategoriesEnum]
      : categories.value[CategoriesEnum.countries]

    return words[Math.floor(Math.random() * words.length)].name
  }

  function saveRandomWordInStore() {
    initialRandomWord.value = getRandomWord()
    randomWord.value = createRandomWord(initialRandomWord.value)
  }

  function pickLetter(letter: Letter) {
    if (isLetterCorrectly(randomWord.value, letter)) {
      setCorrectlyLetter(letter)
      return
    }

    setWrongLetter(letter)
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
    health.value -= DECREASE_STEP
  }

  function enableLetterInRandomWord(letter: Letter) {
    randomWord.value = enableLetter(randomWord.value, letter)
  }

  function disableLetterOnKeyboard(letter: Letter) {
    keyboardAlphabet.value[letter.name].enable = false
  }

  function reset() {
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
    getRandomWord,
    saveRandomWordInStore,
    pickLetter,
    reset
  }
})
