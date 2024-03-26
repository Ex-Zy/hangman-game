import { defineStore, storeToRefs } from 'pinia'
import { onBeforeMount, ref } from 'vue'

import { useCategories } from '@/stores/useCategories'
import type { Category } from '@/types'
import { CategoriesEnum } from '@/types'

export const useGame = defineStore('game', () => {
  const { categories, category } = storeToRefs(useCategories())

  const randomWord = ref('')

  onBeforeMount(storeRandomWord)

  function getRandomWord() {
    const words: Category[] = category.value
      ? categories.value[category.value as CategoriesEnum]
      : categories.value[CategoriesEnum.countries]

    return words[Math.floor(Math.random() * words.length)].name
  }

  function storeRandomWord() {
    randomWord.value = getRandomWord()
  }

  return {
    randomWord,
    getRandomWord,
    storeRandomWord
  }
})
