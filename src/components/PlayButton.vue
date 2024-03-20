<script setup lang="ts">
import IconPlay from '@/components/icons/IconPlay.vue'
</script>

<template>
  <button type="button" class="btn-play btn-play--centered">
    <IconPlay />
  </button>
</template>

<style scoped lang="scss">
.btn-play {
  @include sizer(160px);

  &--centered {
    @include center(both);

    position: absolute;
  }
}
</style>
