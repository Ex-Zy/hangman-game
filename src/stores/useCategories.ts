import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'

import data from '@/data/db.json'
import type { Categories } from '@/types'

export const useCategories = defineStore('categories', () => {
  const categories = reactive<Categories>(data.categories)
  const names = computed<string[]>(() => Object.keys(categories).map((key) => key))

  return {
    categories,
    names
  }
})
