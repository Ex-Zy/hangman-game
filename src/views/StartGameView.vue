<script setup lang="ts">
import StartGameBoard from '@/components/StartGameBoard/StartGameBoard.vue'

const initialAnimation = {
  opacity: 0,
  y: 50
}

const enterAnimation = {
  opacity: 1,
  y: 0,
  transition: {
    type: 'spring',
    stiffness: '100',
    delay: 100
  }
}
</script>

<template>
  <div class="home">
    <StartGameBoard v-motion :initial="initialAnimation" :enter="enterAnimation" />
  </div>
</template>

<style lang="scss" scoped>
.home {
  @include flex-center;

  flex-grow: 1;
}
</style>
