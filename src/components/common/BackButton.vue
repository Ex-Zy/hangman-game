<script setup lang="ts">
import IconBack from '@/components/icons/IconBack.vue'
</script>

<template>
  <button type="button" class="btn-back">
    <IconBack class="btn-back__icon" />
  </button>
</template>

<style scoped lang="scss">
.btn-back {
  --size: 40px;
  --radius: 50%;

  @include sizer(var(--size));

  @include tablet {
    --size: 64px;

    box-shadow: inset 0 -6px 0 7px rgba(157, 45, 245, 0.25);
  }

  @include linear-gradient(bottom, #fe71fe #7199ff);

  cursor: pointer;

  display: flex;

  border-radius: var(--radius);
  box-shadow: inset 0 -5px 0 -1px rgba(157, 45, 245, 0.25);

  transition: all 0.25s;

  &:hover {
    box-shadow: inset 0 -10px 0 -8px rgba(157, 45, 245, 0.25);
  }

  &__icon {
    @include tablet {
      width: 28px;
      height: 26px;
    }

    width: 17px;
    height: 16px;
    margin: auto;
    fill: #fff;
  }
}
</style>
