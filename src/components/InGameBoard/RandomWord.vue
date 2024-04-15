<script setup lang="ts">
import RandomWordLetter from '@/components/InGameBoard/RandomWordLetter.vue'
import { useRandomWord } from '@/stores/useRandomWord'
import type { Letter } from '@/types'
const randomWordStore = useRandomWord()

const chunkKey = (chunk: Letter[]): string => chunk.map((l) => l.name).join('')
</script>

<template>
  <article class="random-word">
    <template v-for="word in randomWordStore.randomWord" :key="chunkKey(word)">
      <div class="random-word__row" data-test="row">
        <template v-for="letter in word" :key="letter.name">
          <RandomWordLetter data-test="letter" :letter="letter" />
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
