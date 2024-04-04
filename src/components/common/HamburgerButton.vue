<script setup lang="ts">
import IconHamburger from '@/components/icons/IconHamburger.vue'
</script>

<template>
  <button tabindex="0" type="button" class="btn-hamburger">
    <IconHamburger class="btn-hamburger__icon" />
  </button>
</template>

<style scoped lang="scss">
.btn-hamburger {
  --size: 40px;
  --radius: 50%;
  --icon-width: 18px;
  --icon-height: 14px;

  @include sizer(var(--size));

  @include tablet {
    --size: 64px;
    --icon-width: 26px;
    --icon-height: 22px;

    box-shadow: inset 0 -6px 0 7px rgba(157, 45, 245, 0.25);
  }

  @include desktop {
    --size: 94px;
    --icon-width: 38px;
    --icon-height: 32px;
  }

  @include linear-gradient(bottom, #fe71fe #7199ff);
  @include focus;

  cursor: pointer;

  display: flex;

  border-radius: var(--radius);
  box-shadow: inset 0 -5px 0 -1px rgba(157, 45, 245, 0.25);

  transition: all 0.25s;

  &:hover {
    box-shadow: inset 0 -10px 0 -8px rgba(157, 45, 245, 0.25);
  }

  &__icon {
    width: var(--icon-width);
    height: var(--icon-height);
    margin: auto;
    fill: var(--color-white);
  }
}
</style>
