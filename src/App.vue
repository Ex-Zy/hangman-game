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

  display: flex;
  flex-direction: column;
  min-height: 100svh;
}
</style>
