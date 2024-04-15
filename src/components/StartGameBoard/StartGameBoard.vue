<script setup lang="ts">
import UiButton from '@/components/common/UiButton.vue'
import AppLogo from '@/components/StartGameBoard/AppLogo.vue'
import PlayButton from '@/components/StartGameBoard/PlayButton.vue'
import router from '@/router'

async function redirectTo(page: 'how-to-play' | 'pick-category') {
  await router.push(`/${page}`)
}
</script>

<template>
  <div class="gboard">
    <AppLogo class="gboard__logo" />
    <PlayButton class="gboard__play" @click="redirectTo('pick-category')" />
    <UiButton class="gboard__how-to-btn" @click="redirectTo('how-to-play')">how to play</UiButton>
  </div>
</template>

<style lang="scss" scoped>
.gboard {
  --width: 324px;
  --height: 481px;
  --radius: 48px;

  @include sizer(var(--width), var(--height));
  @include flex-center;

  @include tablet {
    --width: 592px;
    --height: 500px;
    --radius: 72px;
  }

  @include linear-gradient(bottom, #344aba #001479);

  position: relative;
  border-radius: var(--radius);
  box-shadow:
    inset 0 -8px 0 4px #140e66,
    inset 0 6px 0 8px var(--color-blue);

  &__logo {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__how-to-btn {
    @include tablet {
      bottom: 51px;
    }

    position: absolute;
    bottom: 64px;
    left: 50%;
    transform: translateX(-50%);
  }

  &__play {
    margin: auto;
  }
}
</style>
