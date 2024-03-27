<script setup lang="ts">
import { computed } from 'vue'

import type { Letter } from '@/types'

interface Props {
  letter: Letter
}

const props = defineProps<Props>()
const classes = computed(() => {
  const root = 'letter'
  const disable = 'disable'

  return {
    [root]: true,
    [`${root}--${disable}`]: !props.letter.enable
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
  --width: 28px;
  --height: 56px;
  --radius: 8px;
  --font-size: 24px;

  @include sizer(var(--width), var(--height));
  @include flex-center;
  @include font($fs: var(--font-size), $color: var(--color-dark-navy));

  cursor: pointer;
  background: var(--color-white);
  border-radius: var(--radius);

  &--disable {
    background: rgba(255, 255, 255, 0.25);
  }
}
</style>
