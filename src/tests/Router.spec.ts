import { createTestingPinia } from '@pinia/testing'
import { mount, VueWrapper } from '@vue/test-utils'
import { MotionPlugin } from '@vueuse/motion'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import type { ComponentPublicInstance } from 'vue'

import App from '@/App.vue'
import router from '@/router'
import HowToPlayView from '@/views/HowToPlayView.vue'
import InGameView from '@/views/InGameView.vue'
import PickCategoryView from '@/views/PickCategoryView.vue'
import StartGameView from '@/views/StartGameView.vue'

describe('App.vue', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>

  beforeEach(() => {
    wrapper = mount(App, {
      global: {
        plugins: [router, MotionPlugin, createTestingPinia({ createSpy: vi.fn })]
      }
    }) as VueWrapper<ComponentPublicInstance>
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('render StartGameView page for /start-game route', async () => {
    await router.push('/start-game')

    expect(wrapper.findComponent(StartGameView).exists()).toBe(true)
  })

  it('render HowToPlayView page for /how-to-play route', async () => {
    await router.push('/how-to-play')

    expect(wrapper.findComponent(HowToPlayView).exists()).toBe(true)
  })

  it('render PickCategoryView page for /pick-category route', async () => {
    await router.push('/pick-category')

    expect(wrapper.findComponent(PickCategoryView).exists()).toBe(true)
  })

  it('render InGameView page for /in-game route', async () => {
    await router.push('/in-game')

    expect(wrapper.findComponent(InGameView).exists()).toBe(true)
  })
})
