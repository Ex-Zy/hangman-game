<script setup lang="ts"></script>

<template>
  <button class="btn"><slot>Default text</slot></button>
</template>

<style scoped lang="scss">
.btn {
  --radius: 40px;
  --font-size: 32px;
  --width: 260px;
  --height: 62px;

  @include sizer(var(--width), var(--height));

  cursor: pointer;

  position: relative;

  font-size: var(--font-size);
  font-weight: 400;
  line-height: 120%;
  color: #fff;
  text-align: center;
  text-transform: uppercase;

  background: var(--color-blue);
  border-radius: var(--radius);
  box-shadow:
    inset 0 -2px 0 3px #140e66,
    inset 0 1px 0 6px #3c74ff;

  transition: all 0.25s;

  &::before {
    content: '';

    position: absolute;
    inset: 0;

    display: block;

    opacity: 0;
    background: rgba(255, 255, 255, 0.25);
    border-radius: var(--radius);
    box-shadow:
      inset 0 -2px 0 3px #140e66,
      inset 0 1px 0 6px #3c74ff;

    transition: opacity 0.25s;
  }

  @media (hover: hover) {
    &:hover::before {
      opacity: 1;
    }
  }

  @media (hover: none) {
    &:active::before {
      opacity: 1;
    }
  }
}
</style>
