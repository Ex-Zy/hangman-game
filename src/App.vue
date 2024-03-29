<script setup lang="ts">
import { RouterView } from 'vue-router'

import MenuGame from '@/components/InGameBoard/MenuGame.vue'
</script>

<template>
  <div class="out">
    <RouterView />
  </div>
  <MenuGame v-motion-pop />
</template>

<style lang="scss" scoped></style>
