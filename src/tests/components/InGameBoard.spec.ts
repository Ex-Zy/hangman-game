import { createTestingPinia } from '@pinia/testing'
import { mount, type VueWrapper } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import InGameBoard from '@/components/InGameBoard/InGameBoard.vue'

const mockRandomWord = [
  [
    { name: 'T', enable: false },
    { name: 'E', enable: false },
    { name: 'S', enable: false },
    { name: 'T', enable: false }
  ]
]

vi.mock('@/stores/useGame', async (importOriginal) => {
  const original = await importOriginal<typeof import('@/stores/useGame')>()

  return {
    useGame: () => ({
      ...original.useGame(),
      reset: vi.fn()
    })
  }
})

vi.mock('@/stores/useRandomWord', async (importOriginal) => {
  const original = await importOriginal<typeof import('@/stores/useRandomWord')>()

  return {
    useRandomWord: () => ({
      ...original.useRandomWord(),
      randomWord: [...mockRandomWord],
      setRandomWordToStore: vi.fn()
    })
  }
})

describe('InGameBoard', () => {
  let wrapper: VueWrapper<InstanceType<typeof InGameBoard>>

  beforeEach(() => {
    const pinia = createTestingPinia({ createSpy: vi.fn })

    wrapper = mount(InGameBoard, {
      global: {
        plugins: [pinia],
        directives: {
          motionSlideVisibleOnceTop: vi.fn(),
          motionSlideVisibleOnceBottom: vi.fn()
        }
      }
    })
  })

  afterEach(() => {
    wrapper.unmount()
    vi.clearAllMocks()
  })

  it('should mount correctly', () => {
    expect(wrapper).toBeDefined()
  })

  it('should mount with randomWord', () => {
    const row = wrapper.find('[data-test="row"]')
    const letters = row.findAll('[data-test="letter"]')
    const randomWordLength = mockRandomWord[0].length

    expect(letters).toHaveLength(randomWordLength)
  })

  it('should mount with keyboard', () => {
    const keyboard = wrapper.find('[data-test="keyboard"]')
    const letters = keyboard.findAll('[data-test="letter"]')
    const keyboardLength = 26

    expect(letters).toHaveLength(keyboardLength)
  })
})
