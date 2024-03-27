<script setup lang="ts">
import InGameBoard from '@/components/InGameBoard/InGameBoard.vue'
import InGameLayout from '@/layouts/InGameLayout.vue'
import { useCategories } from '@/stores/useCategories'
import { useGame } from '@/stores/useGame'

const categoriesStore = useCategories()
const gameStore = useGame()
</script>

<template>
  <InGameLayout :title="categoriesStore.category" :health="gameStore.health">
    <InGameBoard />
  </InGameLayout>
</template>

<style scoped lang="scss"></style>
