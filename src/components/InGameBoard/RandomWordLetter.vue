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
    [`${root}--${picked}`]: props.letter.enable
  }
})
</script>

<template>
  <div :class="classes">
    {{ props.letter.name }}
  </div>
</template>

<style scoped lang="scss">
.letter {
  --width: 40px;
  --height: 66px;
  --radius: 12px;
  --font-size: 40px;
  --color: transparent;
  --opacity: 0.25;

  @include tablet {
    --width: 89px;
    --height: 112px;
    --radius: 32px;
    --font-size: 64px;
  }

  @include desktop {
    --width: 112px;
    --height: 128px;
    --radius: 40px;
    --font-size: 88px;
  }

  @include font($fs: var(--font-size), $color: var(--color));
  @include flex-center(inline-flex);
  @include sizer(var(--width), var(--height));

  opacity: var(--opacity);
  background: var(--color-blue);
  border-radius: var(--radius);
  box-shadow:
    inset 0 -2px 0 3px #140e66,
    inset 0 1px 0 6px #3c74ff;

  &--picked {
    --color: var(--color-white);
    --opacity: 1;
  }
}
</style>
