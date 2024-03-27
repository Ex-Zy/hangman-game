<script setup lang="ts">
import { storeToRefs } from 'pinia'

import router from '@/router'
import { useCategories } from '@/stores/useCategories'

const { categoriesName } = storeToRefs(useCategories())
const { pickCategory } = useCategories()

async function handleClick(name: string) {
  pickCategory(name)
  await router.push('/in-game')
}
</script>

<template>
  <ul class="categories">
    <template v-for="(name, index) in categoriesName" :key="name">
      <template v-if="index % 2">
        <li v-motion-slide-visible-once-left class="categories__item" @click="handleClick(name)">
          {{ name }}
        </li>
      </template>
      <template v-else>
        <li v-motion-slide-visible-once-right class="categories__item" @click="handleClick(name)">
          {{ name }}
        </li>
      </template>
    </template>
  </ul>
</template>

<style scoped lang="scss">
.categories {
  --radius: 20px;
  --fs-size: 24px;
  --height: 77px;
  --gap: 16px;

  @include tablet {
    --height: 182px;
    --radius: 40px;
    --gap: 32px;
    --fs-size: 48px;

    grid-template-columns: 1fr 1fr;
  }

  @include desktop {
    --height: 190px;

    grid-template-columns: 1fr 1fr 1fr;
  }

  display: grid;
  grid-auto-rows: var(--height);
  grid-template-columns: 1fr;
  gap: var(--gap);

  &__item {
    @include btn-typography;
    @include btn-blue;
    @include btn-blue-hover;

    cursor: pointer;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
