import { defineStore } from 'pinia'
import { ref } from 'vue'

import { useCategories } from '@/stores/useCategories'
import { createRandomWord } from '@/stores/utils/createRandomWord'
import type { Categories, EncryptedWord, Word } from '@/types'

export const useRandomWord = defineStore('randomWord', () => {
  const categoriesStore = useCategories()

  const initialRandomWord = ref('')
  const randomWord = ref<EncryptedWord>([])

  function getRandomWord(categories: Categories, category: string) {
    const words: Word[] = categories[category]

    return words[Math.floor(Math.random() * words.length)].name
  }

  function setRandomWordToStore() {
    initialRandomWord.value = getRandomWord(categoriesStore.categories, categoriesStore.category)
    randomWord.value = createRandomWord(initialRandomWord.value)
  }

  function reset() {
    initialRandomWord.value = ''
    randomWord.value = []
  }

  return {
    initialRandomWord,
    randomWord,
    getRandomWord,
    setRandomWordToStore,
    reset
  }
})
