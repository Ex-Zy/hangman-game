<script setup lang="ts">
import router from '@/router'
import { useCategories } from '@/stores/useCategories'

const categoriesStore = useCategories()

async function handleClick(name: string) {
  categoriesStore.pickCategory(name)
  await router.push('/in-game')
}
</script>

<template>
  <div class="categories">
    <template v-for="(name, index) in categoriesStore.categoriesName" :key="name">
      <template v-if="index % 2">
        <button
          v-motion-slide-visible-once-left
          tabindex="0"
          class="categories__item"
          data-test="category"
          @click="handleClick(name)"
          @keyup.enter="handleClick(name)"
        >
          {{ name }}
        </button>
      </template>
      <template v-else>
        <button
          v-motion-slide-visible-once-right
          tabindex="0"
          class="categories__item"
          data-test="category"
          @click="handleClick(name)"
          @keyup.enter="handleClick(name)"
        >
          {{ name }}
        </button>
      </template>
    </template>
  </div>
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
    @include focus;

    cursor: pointer;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
