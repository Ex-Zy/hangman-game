<script setup lang="ts">
import { storeToRefs } from 'pinia'

import RandomWordLetter from '@/components/InGameBoard/RandomWordLetter.vue'
import { useGame } from '@/stores/useGame'

const { randomWord, health } = storeToRefs(useGame())
</script>

<template>
  <div>Health: {{ health }}</div>
  <article class="random-word">
    <template v-for="word in randomWord" :key="word">
      <div class="random-word__row">
        <template v-for="(letter, i) in word" :key="letter.name + i">
          <RandomWordLetter :letter="letter" />
        </template>
      </div>
    </template>
  </article>
</template>

<style scoped lang="scss">
.random-word {
  --gap: 12px;

  @include flex-row($horizontal: true, $gap: var(--gap));

  &__row {
    --gap: 8px;

    @include flex-center($gap: var(--gap));

    flex-wrap: wrap;
  }
}
</style>
