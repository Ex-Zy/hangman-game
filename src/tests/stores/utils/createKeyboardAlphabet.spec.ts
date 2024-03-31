import { describe, expect, it } from 'vitest'

import { createKeyboardAlphabet } from '@/stores/utils/createKeyboardAlphabet'

describe('createKeyboardAlphabet', () => {
  it('should create valid keyboard alphabet', () => {
    const keyboardAlphabet = createKeyboardAlphabet()

    expect(keyboardAlphabet).toEqual({
      A: { name: 'A', enable: true },
      B: { name: 'B', enable: true },
      C: { name: 'C', enable: true },
      D: { name: 'D', enable: true },
      E: { name: 'E', enable: true },
      F: { name: 'F', enable: true },
      G: { name: 'G', enable: true },
      H: { name: 'H', enable: true },
      I: { name: 'I', enable: true },
      J: { name: 'J', enable: true },
      K: { name: 'K', enable: true },
      L: { name: 'L', enable: true },
      M: { name: 'M', enable: true },
      N: { name: 'N', enable: true },
      O: { name: 'O', enable: true },
      P: { name: 'P', enable: true },
      Q: { name: 'Q', enable: true },
      R: { name: 'R', enable: true },
      S: { name: 'S', enable: true },
      T: { name: 'T', enable: true },
      U: { name: 'U', enable: true },
      V: { name: 'V', enable: true },
      W: { name: 'W', enable: true },
      X: { name: 'X', enable: true },
      Y: { name: 'Y', enable: true },
      Z: { name: 'Z', enable: true }
    })
  })
})
