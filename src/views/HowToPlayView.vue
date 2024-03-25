<script setup lang="ts">
import { reactive } from 'vue'

import DefaultLayout from '@/layouts/DefaultLayout.vue'

interface Step {
  title: string
  body: string
}

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
      <div v-for="(step, index) in howToSteps" :key="step.title" class="ht-item">
        <dt class="ht-item__title">
          <span class="ht-item__index">0{{ index + 1 }}</span
          >{{ step.title }}
        </dt>
        <dd class="ht-item__body">{{ step.body }}</dd>
      </div>
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

.ht-item {
  --radius: 20px;
  --fs-title: 24px;
  --fs-index: 24px;
  --fs-body: 16px;
  --color-body: #887dc0;
  --bg: #fff;

  @include tablet {
    --fs-index: 88px;
    --fs-title: 40px;
    --fs-body: 20px;

    padding: 32px 40px 32px 140px;
  }

  @include desktop {
    padding: 60px 40px;
    text-align: center;
  }

  position: relative;
  padding: 32px;
  background: var(--bg);
  border-radius: var(--radius);

  &__title {
    @include desktop {
      flex-direction: column;
      gap: 50px;
    }

    display: flex;
    gap: 16px;

    font-size: var(--fs-title);
    font-weight: 400;
    line-height: 120%;
    color: var(--color-dark-navy);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  &__body {
    margin-top: 14px;

    font-size: var(--fs-body);
    font-weight: 400;
    line-height: 120%;
    color: var(--color-body);
    letter-spacing: 0.05em;
  }

  &__index {
    @include tablet-only {
      position: absolute;
      top: 50%;
      left: 40px;
      transform: translateY(-50%);
    }

    font-size: var(--fs-index);
    color: var(--color-blue);
  }
}
</style>
