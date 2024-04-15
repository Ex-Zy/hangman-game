<script setup lang="ts">
import { chunk } from 'lodash'
import { computed } from 'vue'

import GameKeyboardLetter from '@/components/InGameBoard/GameKeyboardLetter.vue'
import { useGame } from '@/stores/useGame'
import { useKeyboard } from '@/stores/useKeyboard'
import type { Letter } from '@/types'

const keyboardStore = useKeyboard()
const keyboardChunks = computed(() => chunk(Object.values(keyboardStore.keyboardAlphabet), 9))
const { pickLetter } = useGame()

function handlePickLetter(letter: Letter) {
  if (!letter.enable) return
  pickLetter(letter)
}
</script>

<template>
  <div>
    <form
      v-kbd-trap.roving.autofocus
      role="grid"
      class="keyboard"
      data-test="keyboard"
      @submit.prevent
    >
      <template v-for="row in keyboardChunks" :key="row[0].name">
        <div role="row" class="keyboard__row">
          <template v-for="letter of row" :key="letter.name">
            <GameKeyboardLetter
              v-wave
              role="gridcell"
              data-test="letter"
              tabindex="0"
              :letter="letter"
              @click.prevent="handlePickLetter(letter)"
            />
          </template>
        </div>
      </template>
    </form>
  </div>
</template>

<style scoped lang="scss">
.keyboard {
  --gap: 8px;

  @include mobile {
    row-gap: 26px;
  }

  @include tablet {
    --gap: 16px;
  }

  @include desktop {
    --gap: 24px;

    max-width: 1174px;
    margin: 0 auto;
  }

  @include flex-column($gap: var(--gap));

  position: relative;

  &__row {
    @include flex-row($wrap: nowrap, $gap: var(--gap));
  }
}
</style>
