import type { Letter, Word } from '@/types'

export function enableLetter(multipleWords: Word, letter: Letter) {
  return multipleWords.map((word) => {
    return word.map((currentLetter) => {
      const isSameLetter = currentLetter.name === letter.name
      const enable = isSameLetter || currentLetter.enable
      return {
        ...currentLetter,
        enable
      }
    })
  })
}
