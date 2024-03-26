<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useGame } from '@/stores/useGame'

const { randomWord, health } = storeToRefs(useGame())
</script>

<template>
  <div>Health: {{ health }}</div>
  <article class="random-word">
    <template v-for="word in randomWord" :key="word">
      <div class="random-word__row">
        <span
          v-for="(letter, i) in word"
          :key="letter.name + i"
          :class="{ 'random-word__letter--picked': letter.enable }"
          class="random-word__letter"
          >{{ letter.name }}</span
        >
      </div>
    </template>
  </article>
</template>

<style scoped lang="scss">
.random-word {
  &__row {
    display: flex;
    gap: 8px;
  }

  &__letter {
    @include font($fs: 40px);

    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 66px;

    color: transparent;

    opacity: 0.25;
    background: var(--color-blue);
    border-radius: 12px;
    box-shadow:
      inset 0 1px 0 6px #3c74ff,
      inset 0 -2px 0 3px #140e66;

    transition: all 0.25s;
  }

  &__letter--picked {
    color: var(--color-white);
    opacity: 1;
  }
}
</style>
