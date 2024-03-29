import { shallowMount, VueWrapper } from '@vue/test-utils'
import { MotionPlugin } from '@vueuse/motion'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import type { ComponentPublicInstance } from 'vue'

import App from '@/App.vue'

describe('App test', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>

  beforeEach(() => {
    wrapper = shallowMount(App, {
      global: {
        plugins: [MotionPlugin]
      }
    }) as VueWrapper<ComponentPublicInstance>
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('mount App ', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('mount RouterView', () => {
    expect(wrapper.findComponent({ name: 'RouterView' }).exists()).toBe(true)
  })

  it('mount MenuGame', () => {
    expect(wrapper.findComponent({ name: 'MenuGame' }).exists()).toBe(true)
  })
})
