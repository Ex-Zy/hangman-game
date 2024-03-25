<script setup lang="ts">
const emit = defineEmits<(e: 'click') => void>()

function handleClick() {
  emit('click')
}
</script>

<template>
  <button class="btn" @click="handleClick"><slot>Default text</slot></button>
</template>

<style scoped lang="scss">
.btn {
  --font-size: 32px;
  --width: 260px;
  --height: 62px;

  @include sizer(var(--width), var(--height));
  @include btn-typography;
  @include btn-blue;
  @include btn-blue-hover;

  cursor: pointer;
  position: relative;
  transition: all 0.25s;
}
</style>
