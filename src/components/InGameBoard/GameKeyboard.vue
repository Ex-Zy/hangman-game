<script setup lang="ts">
import { storeToRefs } from 'pinia'

import GameKeyboardLetter from '@/components/InGameBoard/GameKeyboardLetter.vue'
import { useGame } from '@/stores/useGame'

const { keyboardAlphabet } = storeToRefs(useGame())
const { pickLetter } = useGame()
</script>

<template>
  <article class="keyboard">
    <template v-for="letter in keyboardAlphabet" :key="letter.name">
      <GameKeyboardLetter :letter="letter" @click="pickLetter(letter)" />
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
