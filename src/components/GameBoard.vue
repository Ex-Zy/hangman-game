<script setup lang="ts">
import AppLogo from '@/components/AppLogo.vue'
import UiButton from '@/components/common/UiButton.vue'
import PlayButton from '@/components/PlayButton.vue'
</script>

<template>
  <div class="gboard">
    <AppLogo class="gboard__logo" />
    <PlayButton class="gboard__play" />
    <UiButton class="gboard__how-to-btn">how to play</UiButton>
  </div>
</template>

<style lang="scss" scoped>
.gboard {
  --width: 324px;
  --height: 481px;
  --radius: 48px;

  @include sizer(var(--width), var(--height));

  @include tablet {
    --width: 592px;
    --height: 500px;
    --radius: 72px;
  }

  position: relative;
  background: linear-gradient(180deg, #344aba 0%, #001479 100%);
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
    @include center(both);

    position: absolute;
  }
}
</style>
