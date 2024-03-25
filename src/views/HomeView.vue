<script setup lang="ts">
import GameBoard from '@/components/GameBoard.vue'
</script>

<template>
  <div class="home">
    <GameBoard
      v-motion
      :initial="{
        opacity: 0,
        y: 50
      }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          stiffness: '100',
          delay: 100
        }
      }"
    />
  </div>
</template>

<style lang="scss" scoped>
.home {
  @include flex-center;

  flex-grow: 1;
}
</style>
