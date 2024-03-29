<script setup lang="ts">
import { computed } from 'vue'

import UiButton from '@/components/common/UiButton.vue'
import { useMenu } from '@/stores/useMenu'
import type { MenuType } from '@/types'

const menuStore = useMenu()

const GAME_VARIANTS: Record<MenuType, string> = {
  win: 'You Win',
  lose: 'You Lose',
  pause: 'Paused'
}

const menuTitle = computed(() => {
  return menuStore.type ? GAME_VARIANTS[menuStore.type] : GAME_VARIANTS.pause
})

const isPause = computed(() => menuStore.type === 'pause')
const isGameOver = computed(() => menuStore.type === 'win' || menuStore.type === 'lose')

function handleCloseMenu() {
  if (isGameOver.value) return
  menuStore.close()
}

function handlePlayAgain() {
  menuStore.playAgain()
}

async function handleNewCategory() {
  await menuStore.newCategory()
}
async function handleQuitGame() {
  await menuStore.quitGame()
}
</script>

<template>
  <div v-if="menuStore.isShow" class="outer">
    <div class="outer__backdrop" @click="handleCloseMenu" />
    <div class="menu-game">
      <h1 class="menu-game__title">{{ menuTitle }}</h1>
      <div class="menu-game__buttons">
        <UiButton v-if="isGameOver" @click="handlePlayAgain">PLAY AGAIN</UiButton>
        <UiButton v-if="isPause" @click="handleCloseMenu">CONTINUE</UiButton>
        <UiButton @click="handleNewCategory">NEW CATEGORY</UiButton>
        <UiButton variant="secondary" @click="handleQuitGame">QUIT GAME</UiButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.outer {
  @include flex-center;

  position: fixed;
  z-index: 100;
  inset: 0;

  &__backdrop {
    @include backdrop-pseudo;
  }
}

.menu-game {
  --gap: 34px;
  --width: 324px;
  --height: 445px;
  --radius: 48px;
  --title-fs-size: 94px;
  --letter-spacing: -0.01em;

  @include sizer(var(--width), var(--height));
  @include linear-gradient(bottom, #344aba #001479);
  @include flex-center;

  @include tablet {
    --width: 592px;
    --height: 500px;
    --radius: 72px;
  }

  position: relative;
  border-radius: var(--radius);
  box-shadow:
    inset 0 -8px 0 4px #140e66,
    inset 0 6px 0 8px var(--color-blue);

  &__title {
    @include font($fs: var(--title-fs-size), $ls: var(--letter-spacing), $align: center);
    @include linear-gradient(bottom, #67b6ff #fff);

    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);

    white-space: nowrap;

    background-clip: text;

    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 4px #243041;
  }

  &__buttons {
    @include flex-column(var(--gap), $horizontal: true);
  }
}
</style>
