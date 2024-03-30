import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHealth = defineStore('health', () => {
  const health = ref(100)
  // only 8 available attempts for wrong choice
  const DECREASE_STEP = 100 / 8

  function isHealthOkay() {
    return health.value > 0
  }

  function isHealthOver() {
    return health.value <= 0
  }

  function decreaseHealth() {
    health.value = isHealthOkay() ? health.value - DECREASE_STEP : 0
  }

  function reset() {
    health.value = 100
  }

  return {
    health,
    isHealthOkay,
    isHealthOver,
    decreaseHealth,
    reset
  }
})
