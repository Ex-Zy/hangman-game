<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary'
})
const emit = defineEmits<(e: 'click') => void>()

const classes = computed(() => {
  const root = 'btn'
  return {
    [root]: true,
    [`${root}--primary`]: props.variant === 'primary',
    [`${root}--secondary`]: props.variant === 'secondary'
  }
})

function handleClick() {
  emit('click')
}
</script>

<template>
  <button tabindex="0" :class="classes" @click="handleClick"><slot>Default text</slot></button>
</template>

<style scoped lang="scss">
.btn {
  --font-size: 32px;
  --width: 260px;
  --height: 62px;

  @include sizer(var(--width), var(--height));
  @include btn-typography;
  @include focus;

  cursor: pointer;
  position: relative;
  transition: all 0.25s;

  &--primary {
    @include btn-blue;
    @include btn-blue-hover;
  }

  &--secondary {
    @include btn-pink;
    @include btn-pink-hover;
  }
}
</style>
