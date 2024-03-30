import { createTestingPinia } from '@pinia/testing'
import { mount, VueWrapper } from '@vue/test-utils'
import { MotionPlugin } from '@vueuse/motion'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import type { ComponentPublicInstance } from 'vue'

import HealthBar from '@/components/InGameBoard/HealthBar.vue'
import InGameBoard from '@/components/InGameBoard/InGameBoard.vue'
import InGameLayout from '@/layouts/InGameLayout.vue'
import InGameView from '@/views/InGameView.vue'

describe('InGameView page', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>

  beforeEach(() => {
    wrapper = mount(InGameView, {
      global: {
        plugins: [
          MotionPlugin,
          createTestingPinia({
            initialState: {
              categories: {
                category: 'Movies'
              },
              game: {
                health: 100
              }
            },
            createSpy: vi.fn
          })
        ]
      }
    }) as VueWrapper<ComponentPublicInstance>
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('mount with InGameLayout', () => {
    expect(wrapper.findComponent(InGameLayout).exists()).toBe(true)
  })

  it('InGameLayout mount with title "Movies"', () => {
    expect(wrapper.find('[data-test="title"]').text()).toMatch('Movies')
  })

  it('InGameLayout mount with health "100"', () => {
    const healthBarWrapper = wrapper.findComponent(HealthBar)
    const healthBarVm = healthBarWrapper.vm as ComponentPublicInstance & { value: number }
    expect(healthBarVm.value).toEqual(100)
  })

  it('mount with InGameBoard', () => {
    expect(wrapper.findComponent(InGameBoard).exists()).toBe(true)
  })
})
