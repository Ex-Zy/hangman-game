<script setup lang="ts">
import { computed } from 'vue'

import type { Letter } from '@/types'

interface Props {
  letter: Letter
}

const props = defineProps<Props>()
const classes = computed(() => {
  const root = 'letter'
  const picked = 'picked'

  return {
    [root]: true,
    [`${root}--${picked}`]: !props.letter.enable
  }
})
</script>

<template>
  <button type="button" :class="classes">
    {{ props.letter.name }}
  </button>
</template>

<style scoped lang="scss">
.letter {
  --width: 29px;
  --height: 56px;
  --radius: 8px;
  --font-size: 24px;

  @include tablet {
    --width: 64px;
    --height: 84px;
    --radius: 24px;
    --font-size: 48px;
  }

  @include desktop {
    --width: 109px;
    --height: 84px;
    --radius: 24px;
    --font-size: 48px;
  }

  @include sizer(var(--width), var(--height));
  @include flex-center;
  @include font($fs: var(--font-size), $color: var(--color-dark-navy));
  @include focus;

  cursor: pointer;

  flex-grow: 0;
  flex-shrink: 0;

  background: var(--color-white);
  border-radius: var(--radius);

  transition: all 0.5s;

  &--picked {
    background: rgba(255, 255, 255, 0.25);
  }
}
</style>
