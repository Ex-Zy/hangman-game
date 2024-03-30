import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'

import { HEALTH_LOSS_STEP, MAX_HEALTH } from '@/constants'
import { useHealth } from '@/stores/useHealth'

describe('useHealth store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should be defined', () => {
    const healthStore = useHealth()
    expect(healthStore).toBeDefined()
  })

  it('should initialize with correct defaults', () => {
    const healthStore = useHealth()
    expect(healthStore.health).toBe(MAX_HEALTH)
  })

  it('should update health when decreaseHealth is called', () => {
    const healthStore = useHealth()
    healthStore.decreaseHealth()
    expect(healthStore.health).toBe(MAX_HEALTH - HEALTH_LOSS_STEP)
  })

  it('should reset health when reset is called', () => {
    const healthStore = useHealth()
    healthStore.decreaseHealth()
    healthStore.reset()
    expect(healthStore.health).toBe(MAX_HEALTH)
  })

  it('should not decrease health below 0 if decreaseHealth is called multiple times', () => {
    const healthStore = useHealth()
    for (let i = 0; i < 20; i++) {
      healthStore.decreaseHealth()
    }
    expect(healthStore.health).toBe(0)
  })

  it('should return true when isHealthOkay is called and health is above 0', () => {
    const healthStore = useHealth()
    healthStore.health = 1
    expect(healthStore.isHealthOkay()).toBe(true)
  })

  it('should return false when isHealthOkay is called and health is 0', () => {
    const healthStore = useHealth()
    healthStore.health = 0
    expect(healthStore.isHealthOkay()).toBe(false)
  })

  it('should return true when isHealthOver is called and health is 0', () => {
    const healthStore = useHealth()
    healthStore.health = 0
    expect(healthStore.isHealthOver()).toBe(true)
  })

  it('should return false when isHealthOver is called and health is above 0', () => {
    const healthStore = useHealth()
    healthStore.health = 10
    expect(healthStore.isHealthOver()).toBe(false)
  })
})
