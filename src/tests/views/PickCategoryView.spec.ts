import { createTestingPinia } from '@pinia/testing'
import { mount, VueWrapper } from '@vue/test-utils'
import { MotionPlugin } from '@vueuse/motion'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import type { ComponentPublicInstance } from 'vue'

import PickCategory from '@/components/PickCategory/PickCategory.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PickCategoryView from '@/views/PickCategoryView.vue'

describe('PickCategoryView page', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>

  beforeEach(() => {
    wrapper = mount(PickCategoryView, {
      global: {
        plugins: [MotionPlugin, createTestingPinia({ createSpy: vi.fn })]
      }
    }) as VueWrapper<ComponentPublicInstance>
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('mount with DefaultLayout', () => {
    expect(wrapper.findComponent(DefaultLayout).exists()).toBe(true)
  })

  it('DefaultLayout mount with title "Pick a Category"', () => {
    expect(wrapper.find('[data-test="title"]').text()).toMatch('Pick a Category')
  })

  it('mount with PickCategory', () => {
    expect(wrapper.findComponent(PickCategory).exists()).toBe(true)
  })
})
