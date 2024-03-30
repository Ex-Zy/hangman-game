import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'

import { useKeyboard } from '@/stores/useKeyboard'
import { createKeyboardAlphabet } from '@/stores/utils/createKeyboardAlphabet'

describe('useKeyboard store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should be defined', () => {
    const keyboardStore = useKeyboard()
    expect(keyboardStore).toBeDefined()
  })

  it('should initialize with correct defaults', () => {
    const keyboardStore = useKeyboard()
    expect(keyboardStore.keyboardAlphabet).toEqual(createKeyboardAlphabet())
  })

  it('should disable letter on keyboardAlphabet when disableLetterOnKeyboard is called', () => {
    const keyboardStore = useKeyboard()
    const letter = { name: 'A', enable: true }
    keyboardStore.disableLetterOnKeyboard(letter)
    expect(keyboardStore.keyboardAlphabet.A.enable).toBe(false)
  })

  it('should not disable letter on keyboardAlphabet if it is already disabled', () => {
    const keyboardStore = useKeyboard()
    const letter = { name: 'A', enable: false }
    keyboardStore.disableLetterOnKeyboard(letter)
    expect(keyboardStore.keyboardAlphabet.A.enable).toBe(false)
  })

  it('should reset keyboardAlphabet when reset is called', () => {
    const keyboardStore = useKeyboard()
    keyboardStore.keyboardAlphabet.A.enable = false
    keyboardStore.keyboardAlphabet.B.enable = false
    keyboardStore.keyboardAlphabet.C.enable = false
    keyboardStore.reset()
    expect(keyboardStore.keyboardAlphabet).toEqual(createKeyboardAlphabet())
  })
})
