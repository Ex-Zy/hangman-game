<script setup lang="ts">
import { storeToRefs } from 'pinia'

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { useCategories } from '@/stores/useCategories'

const { categoriesName } = storeToRefs(useCategories())
const { pickCategory } = useCategories()

function handleClick(name: string) {
  pickCategory(name)
}
</script>

<template>
  <DefaultLayout title="Pick a Category">
    <ul class="categories">
      <template v-for="(name, index) in categoriesName" :key="name">
        <template v-if="index % 2">
          <li v-motion-slide-visible-top class="categories__item" @click="handleClick(name)">
            {{ name }}
          </li>
        </template>
        <template v-else>
          <li v-motion-slide-visible-bottom class="categories__item" @click="handleClick(name)">
            {{ name }}
          </li>
        </template>
      </template>
    </ul>
  </DefaultLayout>
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

    touch-action: none;
    cursor: pointer;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
