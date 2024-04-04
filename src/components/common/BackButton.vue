<script setup lang="ts">
import IconBack from '@/components/icons/IconBack.vue'
</script>

<template>
  <button tabindex="0" type="button" class="btn-back">
    <IconBack class="btn-back__icon" />
  </button>
</template>

<style scoped lang="scss">
.btn-back {
  --size: 40px;
  --icon-width: 17px;
  --icon-height: 16px;
  --radius: 50%;

  @include sizer(var(--size));

  @include tablet {
    --size: 64px;
    --icon-width: 28px;
    --icon-height: 26px;

    box-shadow: inset 0 -6px 0 7px rgba(157, 45, 245, 0.25);
  }

  @include desktop {
    --size: 94px;
    --icon-width: 41px;
    --icon-height: 38px;
    --margin: 158px;
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
    fill: #fff;
  }
}
</style>
