import type { EncryptedWord } from '@/types'

export const createRandomWord = (multiWord: string): EncryptedWord => {
  const words = multiWord.split(' ')

  return words.map((word) => {
    const letters = word.split('')

    return letters.map((letter) => {
      return { name: letter.toUpperCase(), enable: false }
    })
  })
}
