<script setup lang="ts"></script>

<template>
  <button class="btn"><slot>Default text</slot></button>
</template>

<style scoped lang="scss">
.btn {
  cursor: pointer;

  width: 260px;
  height: 62px;

  font-size: 32px;
  font-weight: 400;
  line-height: 120%;
  color: #fff;
  text-align: center;
  text-transform: uppercase;

  background: var(--color-blue);
  border-radius: 40px;
  box-shadow:
    inset 0 1px 0 6px rgb(60, 116, 255),
    inset 0 -2px 0 3px rgb(20, 14, 102);
}
</style>
