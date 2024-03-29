import { mount, VueWrapper } from '@vue/test-utils'
import { MotionPlugin } from '@vueuse/motion'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import type { ComponentPublicInstance } from 'vue'

import HowToPlay from '@/components/HowToPlay/HowToPlay.vue'
import HowToPlayView from '@/views/HowToPlayView.vue'

describe('HowToPlayView page', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>

  beforeEach(() => {
    wrapper = mount(HowToPlayView, {
      global: {
        plugins: [MotionPlugin]
      }
    }) as VueWrapper<ComponentPublicInstance>
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('mount with DefaultLayout', () => {
    expect(wrapper.findComponent({ name: 'DefaultLayout' }).exists()).toBe(true)
  })

  it('DefaultLayout mount with title "How to play"', () => {
    expect(wrapper.find('h1').text()).toMatch('How to Play')
  })

  it('mount with HowToPlay component', () => {
    expect(wrapper.findComponent(HowToPlay).exists()).toBe(true)
  })
})
