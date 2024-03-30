import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'

import { categories } from '@/data/db.json'
import { useCategories } from '@/stores/useCategories'

describe('useCategories store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should be defined', () => {
    const categoriesStore = useCategories()
    expect(categoriesStore).toBeDefined()
  })

  it('should initialize with correct defaults', () => {
    const categoriesStore = useCategories()
    expect(categoriesStore.category).toBe('')
    expect(categoriesStore.categories).toEqual(categories)
  })

  it('should update category when pickCategory is called', () => {
    const categoriesStore = useCategories()
    categoriesStore.pickCategory('Animals')
    expect(categoriesStore.category).toBe('Animals')
  })

  it('should reset category when reset is called', () => {
    const categoriesStore = useCategories()
    categoriesStore.pickCategory('Animals')
    categoriesStore.reset()
    expect(categoriesStore.category).toBe('')
  })

  it('should save category in localStorage when pickCategory is called', () => {
    const categoriesStore = useCategories()
    categoriesStore.pickCategory('Animals')
    expect(localStorage.getItem('category')).toBe('Animals')
  })

  it('should remove category from localStorage when reset is called', () => {
    const categoriesStore = useCategories()
    categoriesStore.pickCategory('Animals')
    categoriesStore.reset()
    expect(localStorage.getItem('category')).toBeNull()
  })
})
