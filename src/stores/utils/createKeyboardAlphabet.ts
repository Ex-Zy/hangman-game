import type { Letter } from '@/types'

export function createKeyboardAlphabet() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  const keyboardAlphabet: Record<string, Letter> = {}
  for (const letter of letters) {
    keyboardAlphabet[letter] = { name: letter, enable: true }
  }

  return keyboardAlphabet
}
