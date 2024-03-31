import { createPinia, setActivePinia } from 'pinia'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { MAX_HEALTH } from '@/constants'
import { useGame } from '@/stores/useGame'
import { useHealth } from '@/stores/useHealth'
import { useKeyboard } from '@/stores/useKeyboard'
import { useMenu } from '@/stores/useMenu'
import { useRandomWord } from '@/stores/useRandomWord'
import { createKeyboardAlphabet } from '@/stores/utils/createKeyboardAlphabet'
import type { EncryptedWord } from '@/types'

describe('useGame store', () => {
  const initialRandomWordExpected = 'Elephant'
  const randomWordExpected: EncryptedWord = [
    [
      { name: 'E', enable: false },
      { name: 'L', enable: false },
      { name: 'E', enable: false },
      { name: 'P', enable: false },
      { name: 'H', enable: false },
      { name: 'A', enable: false },
      { name: 'N', enable: false },
      { name: 'T', enable: false }
    ]
  ]
  const keyboardAlphabetExpected = createKeyboardAlphabet()

  beforeEach(() => {
    setActivePinia(createPinia())

    const randomWordStore = useRandomWord()
    const keyboardStore = useKeyboard()
    const healthStore = useHealth()
    const menuStore = useMenu()

    // Set up initial game state
    randomWordStore.initialRandomWord = initialRandomWordExpected
    randomWordStore.randomWord = randomWordExpected
    keyboardStore.keyboardAlphabet = keyboardAlphabetExpected
    healthStore.health = MAX_HEALTH
    menuStore.type = null
    menuStore.isShow = false
  })

  afterEach(() => {
    const gameStore = useGame()

    vi.resetAllMocks()
    gameStore.reset()
  })

  it('should be defined', () => {
    const gameStore = useGame()
    expect(gameStore).toBeDefined()
  })

  it('should pick letter correctly', () => {
    const gameStore = useGame()
    const randomWordStore = useRandomWord()
    const keyboardStore = useKeyboard()

    const correctLetter = { name: 'E', enable: true }

    gameStore.pickLetter(correctLetter)

    // check if the letter is disabled on the keyboard
    expect(keyboardStore.keyboardAlphabet[correctLetter.name].enable).toBe(false)

    // check if the letter is enabled on the randomWord
    expect(randomWordStore.randomWord[0][0].enable).toBe(true)
  })

  it('should pick letter wrongly', () => {
    const gameStore = useGame()
    const keyboardStore = useKeyboard()
    const healthStore = useHealth()

    const wrongLetter = { name: 'Z', enable: true }

    gameStore.pickLetter(wrongLetter)

    // check if the letter is disabled on the keyboard
    expect(keyboardStore.keyboardAlphabet[wrongLetter.name].enable).toBe(false)

    // check if the health is decreased
    expect(healthStore.health).toBeLessThan(MAX_HEALTH)
  })

  it('should check is game won correctly', () => {
    const gameStore = useGame()
    const menuStore = useMenu()
    const healthStore = useHealth()

    // Set correct 8 letters
    gameStore.pickLetter({ name: 'E', enable: true })
    gameStore.pickLetter({ name: 'L', enable: true })
    gameStore.pickLetter({ name: 'E', enable: true })
    gameStore.pickLetter({ name: 'P', enable: true })
    gameStore.pickLetter({ name: 'H', enable: true })
    gameStore.pickLetter({ name: 'A', enable: true })
    gameStore.pickLetter({ name: 'N', enable: true })
    gameStore.pickLetter({ name: 'T', enable: true })

    expect(healthStore.isHealthOver()).toBe(false)
    expect(gameStore.isGameWon()).toBe(true)
    expect(menuStore.type).toBe('win')
  })

  it('should check is game lost correctly', () => {
    const gameStore = useGame()
    const menuStore = useMenu()
    const healthStore = useHealth()

    // Set wrong 8 letters
    gameStore.pickLetter({ name: 'Z', enable: true })
    gameStore.pickLetter({ name: 'Y', enable: true })
    gameStore.pickLetter({ name: 'X', enable: true })
    gameStore.pickLetter({ name: 'W', enable: true })
    gameStore.pickLetter({ name: 'V', enable: true })
    gameStore.pickLetter({ name: 'U', enable: true })
    gameStore.pickLetter({ name: 'O', enable: true })
    gameStore.pickLetter({ name: 'S', enable: true })

    expect(healthStore.isHealthOver()).toBe(true)
    expect(gameStore.isGameWon()).toBe(false)
    expect(menuStore.type).toBe('lose')
  })
})
