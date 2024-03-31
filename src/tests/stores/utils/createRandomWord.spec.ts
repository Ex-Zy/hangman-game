import { describe, expect, it } from 'vitest'

import { createRandomWord } from '@/stores/utils/createRandomWord'

describe('createRandomWord', () => {
  it('should create correct random word', () => {
    const multiWord = 'United Kingdom'
    const randomWord = createRandomWord(multiWord)

    expect(randomWord).toEqual([
      [
        { name: 'U', enable: false },
        { name: 'N', enable: false },
        { name: 'I', enable: false },
        { name: 'T', enable: false },
        { name: 'E', enable: false },
        { name: 'D', enable: false }
      ],
      [
        { name: 'K', enable: false },
        { name: 'I', enable: false },
        { name: 'N', enable: false },
        { name: 'G', enable: false },
        { name: 'D', enable: false },
        { name: 'O', enable: false },
        { name: 'M', enable: false }
      ]
    ])
  })
})
