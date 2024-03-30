import { defineStore } from 'pinia'
import { ref } from 'vue'

import { HEALTH_LOSS_STEP, MAX_HEALTH, MIN_HEALTH } from '@/constants'

export const useHealth = defineStore('health', () => {
  const health = ref(MAX_HEALTH)
  function isHealthOkay() {
    return health.value > MIN_HEALTH
  }

  function isHealthOver() {
    return health.value <= MIN_HEALTH
  }

  function decreaseHealth() {
    health.value = isHealthOkay() ? health.value - HEALTH_LOSS_STEP : MIN_HEALTH
  }

  function reset() {
    health.value = MAX_HEALTH
  }

  return {
    health,
    isHealthOkay,
    isHealthOver,
    decreaseHealth,
    reset
  }
})
