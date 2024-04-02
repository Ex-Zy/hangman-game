<script setup lang="ts">
import GameKeyboardLetter from '@/components/InGameBoard/GameKeyboardLetter.vue'
import { useGame } from '@/stores/useGame'
import { useKeyboard } from '@/stores/useKeyboard'
import type { Letter } from '@/types'

const keyboardStore = useKeyboard()
const { pickLetter } = useGame()

function handlePickLetter(letter: Letter) {
  if (!letter.enable) return
  pickLetter(letter)
}
</script>

<template>
  <article class="keyboard" data-test="keyboard">
    <template v-for="letter in keyboardStore.keyboardAlphabet" :key="letter.name">
      <GameKeyboardLetter data-test="letter" :letter="letter" @click="handlePickLetter(letter)" />
    </template>
  </article>
</template>

<style scoped lang="scss">
.keyboard {
  --gap: 8px;

  @include tablet {
    --gap: 16px;
  }

  @include desktop {
    --gap: 24px;
  }

  @include flex-row($gap: var(--gap));
}
</style>
