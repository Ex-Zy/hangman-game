<script setup lang="ts"></script>

<template>
  <div class="layout">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  @include flex-column($vertical: true, $horizontal: true, $height: 100svh);

  @include background-image('@/assets/background-mobile.svg');

  @include tablet {
    @include background-image('@/assets/background-tablet.svg');
  }

  @include desktop {
    @include background-image('@/assets/background-desktop.svg');
  }
}
</style>
