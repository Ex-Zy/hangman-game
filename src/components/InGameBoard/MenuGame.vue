<script setup lang="ts">
import { useEventListener } from '@vueuse/core'
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'
import { computed, nextTick, ref, watch } from 'vue'

import UiButton from '@/components/common/UiButton.vue'
import { useGame } from '@/stores/useGame'
import { useMenu } from '@/stores/useMenu'
import type { MenuType } from '@/types'

const menuStore = useMenu()
const gameStore = useGame()

const toggleMenuClass = (isShow: boolean) => {
  const toggle = isShow ? 'add' : 'remove'
  document.body.classList[toggle]('is-lock-scroll')
}

watch(() => menuStore.isShow, toggleMenuClass)

const closeOnEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && menuStore.isShow) {
    handleCloseMenu()
  }
}

useEventListener(document, 'keyup', closeOnEscape)

const menuRef = ref<HTMLDivElement | null>(null)
const { activate, deactivate } = useFocusTrap(menuRef)
const toggleActivateMenuFocus = async (isShow: boolean) => {
  if (isShow) {
    await nextTick()
    activate()
  } else {
    deactivate()
  }
}

watch(() => menuStore.isShow, toggleActivateMenuFocus)

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
  // prevent closing menu when game is over
  if (isGameOver.value) return
  menuStore.close()
}

function handlePlayAgain() {
  gameStore.playAgain()
}

async function handleNewCategory() {
  await gameStore.newCategory()
}
async function handleQuitGame() {
  await gameStore.quitGame()
}
</script>

<template>
  <div
    v-if="menuStore.isShow"
    class="outer"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
    @keyup.esc="handleCloseMenu"
  >
    <div tabindex="0" class="outer__backdrop" role="presentation" @click="handleCloseMenu" />
    <div ref="menuRef" class="menu-game">
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
  overscroll-behavior: contain;

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
