<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useGame } from '@/stores/useGame'

const { keyboardAlphabet } = storeToRefs(useGame())
const { pickLetter } = useGame()
</script>

<template>
  <article class="keyboard">
    <span
      v-for="(letter, key) in keyboardAlphabet"
      :key="key"
      style="padding: 10px; border: 1px solid red; display: inline-flex"
      @click="pickLetter(letter)"
      >{{ key }}</span
    >
  </article>
</template>

<style scoped lang="scss"></style>
