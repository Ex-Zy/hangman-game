<script setup lang="ts">
import InGameBoard from '@/components/InGameBoard/InGameBoard.vue'
import InGameLayout from '@/layouts/InGameLayout.vue'
import { useCategories } from '@/stores/useCategories'
import { useHealth } from '@/stores/useHealth'

const categoriesStore = useCategories()
const healthStore = useHealth()
</script>

<template>
  <InGameLayout :title="categoriesStore.category" :health="healthStore.health">
    <InGameBoard />
  </InGameLayout>
</template>

<style scoped lang="scss"></style>
