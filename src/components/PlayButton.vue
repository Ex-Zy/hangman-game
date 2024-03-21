<script setup lang="ts">
import IconPlay from '@/components/icons/IconPlay.vue'
</script>

<template>
  <button type="button" class="btn-play btn-play--centered">
    <IconPlay class="btn-play__icon" />
  </button>
</template>

<style scoped lang="scss">
.btn-play {
  @include sizer(160px);
  @include linear-gradient(bottom, #fe71fe #7199ff);

  cursor: pointer;
  border-radius: 50%;
  box-shadow:
    inset 0 -4px 0 5px #243041,
    inset 0 -12px 0 11px #9d2df5;
  transition: all 0.25s;

  &:hover {
    box-shadow:
      inset 0 -4px 0 10px #243041,
      inset 0 -12px 0 15px #9d2df5;
  }

  &__icon {
    @include center(both);

    position: absolute;
  }

  &--centered {
    @include center(both);

    position: absolute;
  }
}
</style>
