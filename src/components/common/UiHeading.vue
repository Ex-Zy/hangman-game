<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  tag: 'h1' | 'h2' | 'h3' | 'h4'
  type: 'extra-large' | 'large' | 'medium' | 'small'
  text: string
  hasGradient?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  hasGradient: true
})

const classes = computed(() => {
  const mainClass = 'title'
  const prefix = 'title--'

  return {
    [mainClass]: true,
    'title--has-gradient': props.hasGradient,
    [prefix + 'h1']: props.type === 'extra-large',
    [prefix + 'h2']: props.type === 'large',
    [prefix + 'h3']: props.type === 'medium',
    [prefix + 'h4']: props.type === 'small'
  }
})
</script>

<template>
  <component :is="props.tag" :class="classes">{{ props.text }}</component>
</template>

<style scoped lang="scss">
$font-size: (
  'h1': 136px,
  'h2': 88px,
  'h3': 48px,
  'h4': 32px
);

.title {
  font-family: 'Mouse Memoirs', sans-serif;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: 0.05em;

  &--has-gradient {
    @include linear-gradient(bottom, #67b6ff #fff);

    background-clip: text;

    -webkit-text-fill-color: transparent;
  }

  @each $class, $fs in $font-size {
    &--#{$class} {
      font-size: $fs;
    }
  }

  &--h3 {
    @include tablet {
      font-size: 104px;
      letter-spacing: -0.01em;
    }
  }
}
</style>
