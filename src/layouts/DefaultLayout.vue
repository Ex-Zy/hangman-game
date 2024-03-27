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
        <UiHeading tag="h1" type="extra-large" :text="props.title" />
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

  @include tablet {
    --padding-block: 60px;
    --padding-inline: 60px;
    --width: 680px;
    --margin: 100px;
  }

  @include desktop {
    --width: 1240px;
  }

  padding: var(--padding-block) var(--padding-inline);

  &__in {
    width: 100%;
    max-width: var(--width);
    margin: 0 auto;
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
