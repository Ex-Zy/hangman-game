<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useGame } from '@/stores/useGame'

const { randomWord } = storeToRefs(useGame())
</script>

<template>
  <div>Game View {{ randomWord }}</div>
</template>

<style scoped lang="scss"></style>
