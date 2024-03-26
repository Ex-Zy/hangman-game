import type { Letter, Word } from '@/types'

export function isLetterCorrectly(multipleWord: Word, letter: Letter) {
  return multipleWord.flat(1).some((currentLetter) => currentLetter.name === letter.name)
}
