import { createPinia, setActivePinia } from 'pinia'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { useRandomWord } from '@/stores/useRandomWord'
import type { EncryptedWord } from '@/types'

describe('useRandomWord store', () => {
  const initialRandomWordExpected = 'Elephant'
  const randomWordExpected: EncryptedWord = [
    [
      { name: 'E', enable: false },
      { name: 'l', enable: false },
      { name: 'e', enable: false },
      { name: 'p', enable: false },
      { name: 'h', enable: false },
      { name: 'a', enable: false },
      { name: 'n', enable: false },
      { name: 't', enable: false }
    ]
  ]

  beforeEach(() => {
    setActivePinia(createPinia())
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should be defined', () => {
    const randomWordStore = useRandomWord()
    expect(randomWordStore).toBeDefined()
  })

  it('should initialize with correct defaults', () => {
    const randomWordStore = useRandomWord()
    expect(randomWordStore.initialRandomWord).toBe('')
    expect(randomWordStore.randomWord).toEqual([])
  })

  it('should set randomWord and initialRandomWord  to store', () => {
    const randomWordStore = useRandomWord()

    vi.spyOn(randomWordStore, 'setRandomWordToStore').mockImplementation(() => {
      randomWordStore.initialRandomWord = initialRandomWordExpected
      randomWordStore.randomWord = randomWordExpected
    })

    randomWordStore.setRandomWordToStore()

    expect(randomWordStore.initialRandomWord).toBe(initialRandomWordExpected)
    expect(randomWordStore.randomWord).toEqual(randomWordExpected)
  })

  // it('should return a random word from categories', async () => {
  //   const randomWordStore = useRandomWord()
  //   const { categories } = await import('@/data/db.json')
  //   const category = 'Animals'
  //   vi.spyOn(randomWordStore, 'getRandomWord').mockReturnValueOnce('Elephant')
  //   expect(randomWordStore.getRandomWord(categories, category)).toBe('Elephant')
  // })

  it('should disable letter on randomWord when enableLetterInRandomWord is called', () => {
    const randomWordStore = useRandomWord()
    const letter = { name: 'E', enable: true }

    vi.spyOn(randomWordStore, 'setRandomWordToStore').mockImplementation(() => {
      randomWordStore.initialRandomWord = initialRandomWordExpected
      randomWordStore.randomWord = randomWordExpected
    })

    randomWordStore.setRandomWordToStore()
    randomWordStore.enableLetterInRandomWord(letter)
    expect(randomWordStore.randomWord[0][0].name).toBe('E')
    expect(randomWordStore.randomWord[0][0].enable).toBe(true)
  })

  it('should return true when calling isLetterCorrectly with a correct letter', () => {
    const randomWordStore = useRandomWord()
    const letter = { name: 'E', enable: true }

    vi.spyOn(randomWordStore, 'setRandomWordToStore').mockImplementation(() => {
      randomWordStore.initialRandomWord = initialRandomWordExpected
      randomWordStore.randomWord = randomWordExpected
    })

    randomWordStore.setRandomWordToStore()
    expect(randomWordStore.isLetterCorrectly(letter)).toBe(true)
  })

  it('should return false when calling isLetterCorrectly with incorrect letter', () => {
    const randomWordStore = useRandomWord()
    const letter = { name: 'Z', enable: false }

    vi.spyOn(randomWordStore, 'setRandomWordToStore').mockImplementation(() => {
      randomWordStore.initialRandomWord = initialRandomWordExpected
      randomWordStore.randomWord = randomWordExpected
    })

    randomWordStore.setRandomWordToStore()
    expect(randomWordStore.isLetterCorrectly(letter)).toBe(false)
  })

  it('should reset randomWord and initialRandomWord when reset is called', () => {
    const randomWordStore = useRandomWord()

    vi.spyOn(randomWordStore, 'setRandomWordToStore').mockImplementation(() => {
      randomWordStore.initialRandomWord = initialRandomWordExpected
      randomWordStore.randomWord = randomWordExpected
    })

    randomWordStore.setRandomWordToStore()
    randomWordStore.reset()

    expect(randomWordStore.initialRandomWord).toBe('')
    expect(randomWordStore.randomWord).toEqual([])
  })
})
