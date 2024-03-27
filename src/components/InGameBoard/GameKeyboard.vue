<script setup lang="ts">
import { storeToRefs } from 'pinia'

import GameKeyboardLetter from '@/components/InGameBoard/GameKeyboardLetter.vue'
import { useGame } from '@/stores/useGame'
import type { Letter } from '@/types'

const { keyboardAlphabet } = storeToRefs(useGame())
const { pickLetter } = useGame()

function handlePickLetter(letter: Letter) {
  if (!letter.enable) return
  pickLetter(letter)
}
</script>

<template>
  <article class="keyboard">
    <template v-for="letter in keyboardAlphabet" :key="letter.name">
      <GameKeyboardLetter :letter="letter" @click="handlePickLetter(letter)" />
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
