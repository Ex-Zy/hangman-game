<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount } from 'vue'

import GameKeyboard from '@/components/InGameBoard/GameKeyboard.vue'
import RandomWord from '@/components/InGameBoard/RandomWord.vue'
import { useGame } from '@/stores/useGame'

const { setRandomWordToStore, reset } = useGame()
onBeforeMount(setRandomWordToStore)
onBeforeUnmount(reset)
</script>

<template>
  <section class="in-game">
    <RandomWord />
    <GameKeyboard />
  </section>
</template>

<style scoped lang="scss">
.in-game {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
