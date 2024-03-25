<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
const route = useRoute()

const isInnerPage = computed(() => route.name !== 'home')
</script>

<template>
  <div class="out" :class="{ 'out--inner': isInnerPage }">
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

  &--inner {
    position: relative;
    z-index: 1;
  }

  &--inner::after {
    content: '';

    position: absolute;
    z-index: -1;
    inset: 0;

    display: block;

    opacity: 0.75;
    background: linear-gradient(180deg, #1a043a 0%, #151278 70.31%, #2b1677 100%);
  }
}
</style>
