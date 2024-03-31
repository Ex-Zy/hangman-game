import { describe, expect, it } from 'vitest'

import { enableLetter } from '@/stores/utils/enableLetter'

describe('enableLetter', () => {
  it('should enable letter for multipleWords', () => {
    const multipleWords = [
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
    ]
    const letter = { name: 'I', enable: true }

    const result = enableLetter(multipleWords, letter)

    expect(result).toEqual([
      [
        { name: 'U', enable: false },
        { name: 'N', enable: false },
        { name: 'I', enable: true },
        { name: 'T', enable: false },
        { name: 'E', enable: false },
        { name: 'D', enable: false }
      ],
      [
        { name: 'K', enable: false },
        { name: 'I', enable: true },
        { name: 'N', enable: false },
        { name: 'G', enable: false },
        { name: 'D', enable: false },
        { name: 'O', enable: false },
        { name: 'M', enable: false }
      ]
    ])
  })
})
