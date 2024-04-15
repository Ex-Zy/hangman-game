<script setup lang="ts">
import { ref, watch } from 'vue'

interface Props {
  value?: number
}
const props = withDefaults(defineProps<Props>(), {
  value: 0
})

const indicatorRef = ref<HTMLDivElement>()
const actions = ref<(() => void)[]>([])
const DURATION = 1000
const isAnimating = ref(false)

function animate() {
  isAnimating.value = true
  setTimeout(() => {
    isAnimating.value = false
  }, DURATION)
}

function pushActions(health: number, oldHealth: number) {
  if (health < oldHealth) {
    actions.value.push(animate)
  }
}

function popActions() {
  const firstAction = actions.value.shift()
  firstAction?.()
}

watch(() => props.value, pushActions)
watch(() => actions.value.length, popActions)
</script>

<template>
  <div ref="indicatorRef" class="progress" :class="{ 'progress--animate': isAnimating }">
    <div class="progress__indicator" :style="{ width: `${props.value}%` }"></div>
  </div>
</template>

<style scoped lang="scss">
.progress {
  --radius: 96px;
  --width: 58px;
  --height: 16px;
  --indicator-height: 8px;
  --indicator-color: var(--color-dark-navy);
  --border-size: 4px;

  @include tablet {
    --width: 160px;
    --height: 32px;
    --indicator-height: 12px;
    --border-size: 10px;
  }

  @include desktop {
    --width: 240px;
  }

  @include sizer(var(--width), var(--height));

  overflow: hidden;
  background: var(--color-white);
  border: var(--border-size) solid transparent;
  border-radius: var(--radius);

  &__indicator {
    height: var(--indicator-height);
    background: var(--indicator-color);
    border-radius: var(--radius);
    transition:
      width 2s,
      background 0.5s;
  }

  &--animate {
    --indicator-color: #ca3256;

    animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
  }
}

@keyframes shake-horizontal {
  0%,
  100% {
    transform: translateX(0);
  }

  10%,
  30%,
  50%,
  70% {
    transform: translateX(-10px);
  }

  20%,
  40%,
  60% {
    transform: translateX(10px);
  }

  80% {
    transform: translateX(8px);
  }

  90% {
    transform: translateX(-8px);
  }
}
</style>
