<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount } from 'vue'

import GameKeyboard from '@/components/InGameBoard/GameKeyboard.vue'
import RandomWord from '@/components/InGameBoard/RandomWord.vue'
import { useGame } from '@/stores/useGame'
import { useRandomWord } from '@/stores/useRandomWord'

const gameStore = useGame()
const randomWordStore = useRandomWord()
onBeforeMount(randomWordStore.setRandomWordToStore)
onBeforeUnmount(gameStore.reset)
</script>

<template>
  <section class="in-game">
    <RandomWord v-motion-slide-visible-once-bottom />
    <GameKeyboard v-motion-slide-visible-once-top />
  </section>
</template>

<style scoped lang="scss">
.in-game {
  --gap: 120px;

  @include tablet {
    --gap: 134px;
  }

  @include desktop {
    --gap: 120px;
  }

  display: flex;
  flex-direction: column;
  gap: var(--gap);
}
</style>
