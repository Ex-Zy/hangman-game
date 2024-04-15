<script setup lang="ts">
import IconPlay from '@/components/icons/IconPlay.vue'
</script>

<template>
  <button tabindex="0" type="button" class="btn-play">
    play
    <IconPlay class="btn-play__icon" />
  </button>
</template>

<style scoped lang="scss">
.btn-play {
  --size: 160px;

  @include sizer(var(--size));
  @include linear-gradient(bottom, #fe71fe #7199ff);
  @include focus;
  @include font-hide;

  @include tablet {
    --size: 200px;
  }

  @include flex-center;

  cursor: pointer;

  font-size: 0;
  color: transparent;

  border-radius: 50%;
  box-shadow:
    inset 0 -4px 0 5px #243041,
    inset 0 -12px 0 11px #9d2df5;

  transition:
    box-shadow 0.25s,
    transform 0.25s;

  &:hover {
    box-shadow:
      inset 0 -4px 0 10px #243041,
      inset 0 -12px 0 15px #9d2df5;
  }

  @media (hover: hover) {
    &:hover {
      box-shadow:
        inset 0 -4px 0 10px #243041,
        inset 0 -12px 0 15px #9d2df5;
    }
  }

  @media (hover: none) {
    &:active {
      box-shadow:
        inset 0 -4px 0 10px #243041,
        inset 0 -12px 0 15px #9d2df5;
    }
  }
}
</style>
