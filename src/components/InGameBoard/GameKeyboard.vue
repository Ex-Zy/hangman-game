<script setup lang="ts">
import { storeToRefs } from 'pinia'

import KeyboardLetter from '@/components/InGameBoard/KeyboardLetter.vue'
import { useGame } from '@/stores/useGame'

const { keyboardAlphabet } = storeToRefs(useGame())
const { pickLetter } = useGame()
</script>

<template>
  <article class="keyboard">
    <template v-for="letter in keyboardAlphabet" :key="letter.name">
      <KeyboardLetter :letter="letter" @click="pickLetter(letter)" />
    </template>
  </article>
</template>

<style scoped lang="scss">
.keyboard {
  --gap: 8px;

  @include flex-row($gap: var(--gap));
}
</style>
