<script setup lang="ts">
import { RouterView } from 'vue-router'

import MenuGame from '@/components/InGameBoard/MenuGame.vue'
import { useMenu } from '@/stores/useMenu'

const menuStore = useMenu()
</script>

<template>
  <div class="out">
    <RouterView />
  </div>
  <MenuGame v-if="menuStore.isShow" v-motion-pop />
</template>

<style lang="scss" scoped></style>
