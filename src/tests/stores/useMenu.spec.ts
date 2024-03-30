import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'

import { useMenu } from '@/stores/useMenu'

describe('useMenu store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should be defined', () => {
    const menuStore = useMenu()
    expect(menuStore).toBeDefined()
  })

  it('should initialize with correct defaults', () => {
    const menuStore = useMenu()
    expect(menuStore.isShow).toBe(false)
    expect(menuStore.type).toBeNull()
  })

  it('should update isShow and type when callMenu is called', () => {
    const menuStore = useMenu()
    menuStore.paused()
    expect(menuStore.isShow).toBe(true)
    expect(menuStore.type).toBe('pause')
  })

  it('should reset isShow and type when close is called', () => {
    const menuStore = useMenu()
    menuStore.close()
    expect(menuStore.isShow).toBe(false)
    expect(menuStore.type).toBeNull()
  })

  it('should set isShow to true and type to win when youWin is called', () => {
    const menuStore = useMenu()
    menuStore.youWin()
    expect(menuStore.isShow).toBe(true)
    expect(menuStore.type).toBe('win')
  })

  it('should set isShow to true and type to lose when youLose is called', () => {
    const menuStore = useMenu()
    menuStore.youLose()
    expect(menuStore.isShow).toBe(true)
    expect(menuStore.type).toBe('lose')
  })

  it('should set isShow to true and type to pause when paused is called', () => {
    const menuStore = useMenu()
    menuStore.paused()
    expect(menuStore.isShow).toBe(true)
    expect(menuStore.type).toBe('pause')
  })
})
