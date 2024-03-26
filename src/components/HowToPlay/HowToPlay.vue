<script setup lang="ts">
import { reactive } from 'vue'

import HowToItem from '@/components/HowToPlay/HowToItem.vue'
import type { Step } from '@/types'

const howToSteps = reactive<Step[]>([
  {
    title: 'Choose a category',
    body: 'First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.'
  },
  {
    title: 'Guess letters',
    body: 'Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses.'
  },
  {
    title: 'Win or lose',
    body: 'You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.'
  }
])
</script>

<template>
  <dl class="how-to">
    <template v-for="(step, index) in howToSteps" :key="step.title">
      <template v-if="index % 2">
        <HowToItem v-motion-slide-visible-once-left :index="index" :step="step" />
      </template>
      <template v-else>
        <HowToItem v-motion-slide-visible-once-right :index="index" :step="step" />
      </template>
    </template>
  </dl>
</template>

<style scoped lang="scss">
.how-to {
  --gap: 24px;

  @include desktop {
    --gap: 32px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  display: flex;
  flex-direction: column;
  gap: var(--gap);
}
</style>
