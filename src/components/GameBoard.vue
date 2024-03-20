<script setup lang="ts">
import UiButton from '@/components/common/UiButton.vue'
import PlayButton from '@/components/PlayButton.vue'
</script>

<template>
  <div class="gboard">
    <h1 class="logo logo--centered">The Hangman Game</h1>
    <PlayButton />
    <UiButton class="gboard__how-to-btn">how to play</UiButton>
  </div>
</template>

<style lang="scss" scoped>
.gboard {
  @include background-image('@/assets/game-board.svg');
  @include sizer(324px, 481px);

  position: relative;

  &__how-to-btn {
    position: absolute;
    bottom: 64px;
    left: 50%;
    transform: translateX(-50%);
  }
}

.logo {
  @include background-image('@/assets/logo.svg');
  @include sizer(263px, 130px);
  @include font-hide;

  &--centered {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
