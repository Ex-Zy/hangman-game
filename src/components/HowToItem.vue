<script setup lang="ts">
import type { Step } from '@/types'

interface Props {
  index: number
  step: Step
}

defineProps<Props>()
</script>

<template>
  <div class="ht-item">
    <dt class="ht-item__title">
      <span class="ht-item__index">0{{ index + 1 }}</span
      >{{ step.title }}
    </dt>
    <dd class="ht-item__body">{{ step.body }}</dd>
  </div>
</template>

<style scoped lang="scss">
.ht-item {
  --radius: 20px;
  --fs-title: 24px;
  --fs-index: 24px;
  --fs-body: 16px;
  --color-body: #887dc0;
  --bg: #fff;
  --padding: 32px;

  @include tablet {
    --fs-index: 88px;
    --fs-title: 40px;
    --fs-body: 20px;
    --padding: 32px 40px 32px 140px;
  }

  @include desktop {
    --padding: 60px 40px;

    text-align: center;
  }

  position: relative;
  padding: var(--padding);
  background: var(--bg);
  border-radius: var(--radius);

  &__title {
    @include desktop {
      flex-direction: column;
      gap: 50px;
    }

    display: flex;
    gap: 16px;

    font-size: var(--fs-title);
    font-weight: 400;
    line-height: 120%;
    color: var(--color-dark-navy);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  &__body {
    margin-top: 14px;

    font-size: var(--fs-body);
    font-weight: 400;
    line-height: 120%;
    color: var(--color-body);
    letter-spacing: 0.05em;
  }

  &__index {
    @include tablet-only {
      position: absolute;
      top: 50%;
      left: 40px; /* stylelint-disable-line */
      transform: translateY(-50%);
    }

    font-size: var(--fs-index);
    color: var(--color-blue);
  }
}
</style>
