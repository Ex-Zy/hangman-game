import { createTestingPinia } from '@pinia/testing'
import { flushPromises, shallowMount, type VueWrapper } from '@vue/test-utils'
import { MotionPlugin } from '@vueuse/motion'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import PickCategory from '@/components/PickCategory/PickCategory.vue'
import router from '@/router'
import { useCategories } from '@/stores/useCategories'

vi.mock('@/stores/useCategories', async (importOriginal) => {
  const useCategoriesModule = await importOriginal<typeof import('@/stores/useCategories')>()

  return {
    ...useCategoriesModule,
    pickCategory: vi.fn()
  }
})

vi.mock('@/router', async (importOriginal) => {
  const routerModule = await importOriginal<typeof import('@/router')>()

  return {
    default: {
      ...routerModule,
      push: vi.fn()
    }
  }
})

describe('PickCategory', () => {
  let wrapper: VueWrapper<InstanceType<typeof PickCategory>>

  beforeEach(() => {
    wrapper = shallowMount(PickCategory, {
      global: {
        plugins: [
          MotionPlugin,
          createTestingPinia({
            createSpy: () => vi.fn()
          })
        ]
      }
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('should mount correctly', () => {
    expect(wrapper).toBeDefined()
  })

  it('should render categories', () => {
    const expectedCategoriesLength = useCategories().categoriesName.length
    expect(wrapper.findAll('[data-test="category"]')).toHaveLength(expectedCategoriesLength)
  })

  it('should redirect to InGameView when pick category', async () => {
    const categoryItem = wrapper.find('[data-test="category"]')

    await categoryItem.trigger('click')
    await flushPromises()

    expect(useCategories().pickCategory).toHaveBeenCalled()
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(router.push).toHaveBeenCalledWith('/in-game')
  })
})
