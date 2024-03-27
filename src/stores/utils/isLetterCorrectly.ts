import type { EncryptedWord, Letter } from '@/types'

export function isLetterCorrectly(multipleWord: EncryptedWord, letter: Letter) {
  return multipleWord.flat(1).some((currentLetter) => currentLetter.name === letter.name)
}
