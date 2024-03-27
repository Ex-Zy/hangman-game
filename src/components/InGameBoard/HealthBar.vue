<script setup lang="ts">
interface Props {
  value?: number
}
const props = withDefaults(defineProps<Props>(), {
  value: 0
})
</script>

<template>
  <div class="progress">
    <div class="progress__indicator" :style="{ width: `${props.value}%` }"></div>
  </div>
</template>

<style scoped lang="scss">
.progress {
  --radius: 96px;
  --width: 58px;
  --height: 16px;
  --indicator-height: 8px;
  --border-size: 4px;

  @include tablet {
    --width: 160px;
    --height: 32px;
    --indicator-height: 12px;
    --border-size: 10px;
  }

  @include desktop {
    --width: 240px;
  }

  @include sizer(var(--width), var(--height));

  overflow: hidden;
  background: var(--color-white);
  border: var(--border-size) solid transparent;
  border-radius: var(--radius);

  &__indicator {
    height: var(--indicator-height);
    background: var(--color-dark-navy);
    border-radius: var(--radius);
  }
}
</style>
