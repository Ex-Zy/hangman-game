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
  const modifierClass = `${mainClass}--${props.tag}`

  return {
    [mainClass]: true,
    'title--has-gradient': props.hasGradient,
    [modifierClass]: props.type
  }
})
</script>

<template>
  <component :is="props.tag" :class="classes">{{ props.text }}</component>
</template>

<style scoped lang="scss">
// desktop variants
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

  &--h1 {
    @include mobile {
      font-size: 48px;
    }

    @include tablet {
      font-size: 104px;
      letter-spacing: -0.01em;
    }

    @include desktop {
      font-size: 136px;
    }
  }

  &--h2 {
    @include mobile {
      font-size: 40px;
      letter-spacing: -0.01em;
    }

    @include tablet {
      font-size: 48px;
    }

    @include desktop {
      font-size: 88px;
    }
  }
}
</style>
