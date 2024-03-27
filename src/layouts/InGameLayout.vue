<script setup lang="ts">
import HamburgerButton from '@/components/common/HamburgerButton.vue'
import UiHeading from '@/components/common/UiHeading.vue'
import IconHeart from '@/components/icons/IconHeart.vue'
import HealthBar from '@/components/InGameBoard/HealthBar.vue'
import router from '@/router'

interface Props {
  title: string
  health: number
}
const props = defineProps<Props>()

function redirectBack() {
  router.back()
}
</script>

<template>
  <section class="layout">
    <div class="layout__in">
      <header v-motion-slide-bottom class="layout__header">
        <HamburgerButton class="layout__btn" @click="redirectBack" />
        <UiHeading tag="h2" type="large" :text="props.title" :has-gradient="false" />
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
  --padding-block: 32px;
  --padding-inline: 32px;
  --margin: 78px;
  --width: 324px;
  --gap: 16px;

  @include tablet {
    --padding-block: 60px;
    --padding-inline: 60px;
    --width: 680px;
    --margin: 100px;
    --gap: 32px;
  }

  @include desktop {
    --width: 1240px;
    --gap: 40px;
  }

  padding: var(--padding-block) var(--padding-inline);

  &__in {
    width: 100%;
    max-width: var(--width);
    margin: 0 auto;
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
