<script setup lang="ts">
import StartGameBoard from '@/components/StartGameBoard/StartGameBoard.vue'
import StartGameLayout from '@/layouts/StartGameLayout.vue'

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
  <StartGameLayout>
    <StartGameBoard v-motion :initial="initialAnimation" :enter="enterAnimation" />
  </StartGameLayout>
</template>

<style lang="scss" scoped></style>
