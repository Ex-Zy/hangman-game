import { createTestingPinia } from '@pinia/testing'
import { flushPromises, shallowMount, type VueWrapper } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import PickCategory from '@/components/PickCategory/PickCategory.vue'
import router from '@/router'
import { useCategories } from '@/stores/useCategories'

vi.mock('@/stores/useCategories')
vi.mock('@/router')

describe('PickCategory', () => {
  let wrapper: VueWrapper<InstanceType<typeof PickCategory>>

  const mockStore = {
    ...useCategories(),
    categoriesName: ['Sports', 'Animals'],
    pickCategory: vi.fn()
  }

  vi.mocked(useCategories).mockReturnValue(mockStore)
  vi.mocked(router).push = vi.fn()

  beforeEach(() => {
    const pinia = createTestingPinia({
      createSpy: vi.fn
    })

    wrapper = shallowMount(PickCategory, {
      global: {
        plugins: [pinia, router],
        directives: {
          motionSlideVisibleOnceLeft: vi.fn(),
          motionSlideVisibleOnceRight: vi.fn()
        }
      }
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('should mount correctly', () => {
    expect(wrapper).toBeDefined()
  })

  it('should mount categories', () => {
    const expectedCategoriesLength = mockStore.categoriesName.length
    expect(wrapper.findAll('[data-test="category"]')).toHaveLength(expectedCategoriesLength)
  })

  it('should pick category', async () => {
    const categoryItem = wrapper.find('[data-test="category"]')
    const expectedCategory = mockStore.categoriesName[0]

    await categoryItem.trigger('click')
    await flushPromises()

    expect(useCategories().pickCategory).toHaveBeenCalledWith(expectedCategory)
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(router.push).toHaveBeenCalledWith('/in-game')
  })
})
