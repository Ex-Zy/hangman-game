<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="out">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.out {
  @include background-image('@/assets/background-mobile.svg');

  @include tablet {
    @include background-image('@/assets/background-tablet.svg');
  }

  @include desktop {
    @include background-image('@/assets/background-desktop.svg');
  }

  display: flex;
  flex-direction: column;
  min-height: 100svh;
}
</style>
