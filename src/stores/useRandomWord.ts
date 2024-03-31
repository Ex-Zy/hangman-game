import { defineStore } from 'pinia'
import { ref } from 'vue'

import { useCategories } from '@/stores/useCategories'
import { createRandomWord } from '@/stores/utils/createRandomWord'
import { enableLetter } from '@/stores/utils/enableLetter'
import { getRandomWord } from '@/stores/utils/getRandomWord'
import type { EncryptedWord, Letter } from '@/types'

export const useRandomWord = defineStore('randomWord', () => {
  const categoriesStore = useCategories()

  const initialRandomWord = ref('')
  const randomWord = ref<EncryptedWord>([])

  function setRandomWordToStore() {
    initialRandomWord.value = getRandomWord(categoriesStore.categories, categoriesStore.category)
    randomWord.value = createRandomWord(initialRandomWord.value)
  }

  function enableLetterInRandomWord(letter: Letter) {
    randomWord.value = enableLetter(randomWord.value, letter)
  }

  function isLetterCorrectly(letter: Letter) {
    return randomWord.value.flat(1).some((currentLetter) => currentLetter.name === letter.name)
  }

  function reset() {
    initialRandomWord.value = ''
    randomWord.value = []
  }

  return {
    initialRandomWord,
    randomWord,
    setRandomWordToStore,
    enableLetterInRandomWord,
    isLetterCorrectly,
    reset
  }
})
