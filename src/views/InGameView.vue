<script setup lang="ts">
import InGameBoard from '@/components/InGameBoard/InGameBoard.vue'
import InGameLayout from '@/layouts/InGameLayout.vue'
import { useCategories } from '@/stores/useCategories'

const categoriesStore = useCategories()
</script>

<template>
  <InGameLayout :title="categoriesStore.category">
    <InGameBoard />
  </InGameLayout>
</template>

<style scoped lang="scss"></style>
