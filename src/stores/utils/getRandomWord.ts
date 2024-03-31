import type { Categories, Word } from '@/types'

export function getRandomWord(categories: Categories, category: string) {
  const words: Word[] = categories[category]

  return words[Math.floor(Math.random() * words.length)].name
}
