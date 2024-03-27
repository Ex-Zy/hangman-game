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
        <template v-for="letter in word" :key="letter.name">
          <RandomWordLetter :letter="letter" />
        </template>
      </div>
    </template>
  </article>
</template>

<style scoped lang="scss">
.random-word {
  --gap: 8px;

  @include tablet {
    --gap: 12px;
  }

  @include desktop {
    --gap: 16px;
  }

  @include flex-row($horizontal: true, $gap: var(--gap));

  &__row {
    @include flex-center($gap: var(--gap), $wrap: wrap);
  }
}
</style>
