<script setup lang="ts">
import BackButton from '@/components/common/BackButton.vue'
import UiHeading from '@/components/common/UiHeading.vue'
import router from '@/router'

interface Props {
  title: string
}
const props = defineProps<Props>()

async function redirectBack() {
  await router.push('/start-game')
}
</script>

<template>
  <section class="layout">
    <div class="layout__in">
      <header v-motion-slide-bottom class="layout__header">
        <BackButton class="layout__back-btn" @click="redirectBack" />
        <UiHeading data-test="title" tag="h1" type="extra-large" :text="props.title" />
      </header>
      <main class="layout__main">
        <slot />
      </main>
    </div>
  </section>
</template>

<style scoped lang="scss">
.layout {
  --padding-block: 32px;
  --margin: 98px;
  --width: 328px;

  @include background-image('@/assets/background-mobile.svg');
  @include flex-column($horizontal: true, $height: 100svh);

  @include tablet {
    --padding-block: 60px;
    --width: 704px;
    --margin: 114px;

    @include background-image('@/assets/background-tablet.svg');
  }

  @include desktop {
    --width: 1216px;
    --margin: 88px;
    --padding-block: 80px;

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

  &__header {
    @include tablet {
      position: relative;
      justify-content: center;
    }

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__main {
    margin-top: var(--margin);
  }

  &__back-btn {
    @include tablet {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  }
}
</style>
