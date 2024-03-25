<script setup lang="ts">
import { reactive } from 'vue'

import HowToItem from '@/components/HowToItem.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
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
  <DefaultLayout title="How to Play">
    <dl class="how-to">
      <template v-for="(step, index) in howToSteps" :key="step.title">
        <HowToItem v-if="index % 2" v-motion-slide-visible-top :index="index" :step="step" />
        <HowToItem v-else v-motion-slide-visible-bottom :index="index" :step="step" />
      </template>
    </dl>
  </DefaultLayout>
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
