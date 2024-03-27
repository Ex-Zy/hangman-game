<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'

import MenuGame from '@/components/InGameBoard/MenuGame.vue'
import { useMenu } from '@/stores/useMenu'
const route = useRoute()

const isInnerPage = computed(() => route.name !== 'home')

const menuStore = useMenu()
</script>

<template>
  <div class="out" :class="{ 'out--inner': isInnerPage }">
    <RouterView />
  </div>
  <MenuGame v-if="menuStore.isShow" />
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
    @include backdrop-pseudo;
  }
}
</style>
