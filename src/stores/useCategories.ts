import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'

import data from '@/data/db.json'
import type { Categories } from '@/types'

export const useCategories = defineStore('categories', () => {
  const categories = reactive<Categories>(data.categories)
  const categoriesName = computed<string[]>(() => Object.keys(categories).map((key) => key))

  const category = ref(defaultCategory())

  function defaultCategory() {
    return (
      (import.meta.env.VITE_APP_CATEGORY || localStorage.getItem('category')) ??
      import.meta.env.VITE_APP_DEFAULT_CATEGORY
    )
  }

  function pickCategory(newCategory: string) {
    category.value = newCategory
    localStorage.setItem('category', newCategory)
  }

  function reset() {
    category.value = ''
    localStorage.removeItem('category')
  }

  return {
    categories,
    categoriesName,
    category,
    pickCategory,
    reset
  }
})
