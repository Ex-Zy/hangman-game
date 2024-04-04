<script setup lang="ts">
import HamburgerButton from '@/components/common/HamburgerButton.vue'
import UiHeading from '@/components/common/UiHeading.vue'
import IconHeart from '@/components/icons/IconHeart.vue'
import HealthBar from '@/components/InGameBoard/HealthBar.vue'
import { useMenu } from '@/stores/useMenu'

interface Props {
  title: string
  health: number
}
const props = defineProps<Props>()

const menuStore = useMenu()

function handleClickHamburger() {
  menuStore.paused()
}
</script>

<template>
  <section class="layout">
    <div class="layout__in">
      <header v-motion-slide-bottom class="layout__header">
        <HamburgerButton class="layout__btn" @click="handleClickHamburger" />
        <UiHeading
          data-test="title"
          class="layout__title"
          tag="h2"
          type="large"
          :text="props.title"
          :has-gradient="false"
        />
        <div style="margin: auto" />
        <HealthBar :value="props.health" />
        <IconHeart />
      </header>
      <main class="layout__main">
        <slot />
      </main>
    </div>
  </section>
</template>

<style scoped lang="scss">
.layout {
  --padding-block: 46px;
  --margin: 78px;
  --width: 328px;
  --gap: 16px;

  @include background-image('@/assets/background-mobile.svg');
  @include flex-column($horizontal: true, $height: 100svh);

  @include tablet {
    --padding-block: 60px;
    --width: 704px;
    --margin: 114px;
    --gap: 32px;

    @include background-image('@/assets/background-tablet.svg');
  }

  @include desktop {
    --width: 1216px;
    --gap: 40px;
    --margin: 88px;

    @include background-image('@/assets/background-desktop.svg');
  }

  position: relative;
  z-index: 1;
  padding-block: var(--padding-block);

  &::after {
    @include backdrop-pseudo;
  }

  &__in {
    width: 100%;
    max-width: var(--width);
  }

  &__title {
    white-space: nowrap;
  }

  &__header {
    display: flex;
    gap: var(--gap);
    align-items: center;
  }

  &__main {
    margin-top: var(--margin);
  }
}
</style>
