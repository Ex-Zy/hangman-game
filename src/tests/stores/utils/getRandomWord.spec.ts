import { describe, expect, it } from 'vitest'

import { getRandomWord } from '@/stores/utils/getRandomWord'

describe('getRandomWord', () => {
  it('should get random word', async () => {
    const { categories } = await import('@/data/db.json')
    const category = 'Animals'

    const word = getRandomWord(categories, category)
    const categoryWords = categories[category].map((item) => item.name)

    expect(typeof word).toBe('string')
    expect(categoryWords).toContain(word)
  })
})
