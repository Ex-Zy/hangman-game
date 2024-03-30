import { mount, VueWrapper } from '@vue/test-utils'
import { MotionPlugin } from '@vueuse/motion'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import type { ComponentPublicInstance } from 'vue'

import StartGameBoard from '@/components/StartGameBoard/StartGameBoard.vue'
import StartGameLayout from '@/layouts/StartGameLayout.vue'
import StartGameView from '@/views/StartGameView.vue'

describe('StartGameView page', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>

  beforeEach(() => {
    wrapper = mount(StartGameView, {
      global: {
        plugins: [MotionPlugin]
      }
    }) as VueWrapper<ComponentPublicInstance>
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('mount with StartGameLayout', () => {
    expect(wrapper.findComponent(StartGameLayout).exists()).toBe(true)
  })

  it('mount with StartGameBoard', () => {
    expect(wrapper.findComponent(StartGameBoard).exists()).toBe(true)
  })
})
