import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'

import data from '@/data/db.json'
import type { Categories } from '@/types'

export const useCategories = defineStore('categories', () => {
  const categories = reactive<Categories>(data.categories)
  const categoriesName = computed<string[]>(() => Object.keys(categories).map((key) => key))

  const category = ref('')

  function pickCategory(newCategory: string) {
    category.value = newCategory
  }

  return {
    categories,
    categoriesName,
    category,
    pickCategory
  }
})
