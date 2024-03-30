import { defineStore } from 'pinia'
import { ref } from 'vue'

import { createKeyboardAlphabet } from '@/stores/utils/createKeyboardAlphabet'
import type { Letter } from '@/types'

export const useKeyboard = defineStore('keyboard', () => {
  const keyboardAlphabet = ref(createKeyboardAlphabet())

  function disableLetterOnKeyboard(letter: Letter) {
    keyboardAlphabet.value[letter.name].enable = false
  }

  function reset() {
    keyboardAlphabet.value = createKeyboardAlphabet()
  }

  return {
    keyboardAlphabet,
    disableLetterOnKeyboard,
    reset
  }
})
