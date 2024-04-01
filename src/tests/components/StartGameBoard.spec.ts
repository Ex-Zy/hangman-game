import { flushPromises, type VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import UiButton from '@/components/common/UiButton.vue'
import AppLogo from '@/components/StartGameBoard/AppLogo.vue'
import PlayButton from '@/components/StartGameBoard/PlayButton.vue'
import StartGameBoard from '@/components/StartGameBoard/StartGameBoard.vue'

const mockRouter = vi.hoisted(() => {
  return {
    push: vi.fn()
  }
})
vi.mock('@/router', () => {
  return {
    default: { ...mockRouter }
  }
})

describe('StartGameBoard', () => {
  let wrapper: VueWrapper<InstanceType<typeof StartGameBoard>>

  beforeEach(() => {
    wrapper = mount(StartGameBoard)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('should mount correctly', () => {
    expect(wrapper).toBeDefined()
  })

  it('should mount with AppLogo', () => {
    expect(wrapper.findComponent(AppLogo).exists()).toBe(true)
  })

  it('should mount with PlayButton', () => {
    expect(wrapper.findComponent(PlayButton).exists()).toBe(true)
  })

  it('should mount with UiButton', () => {
    expect(wrapper.findComponent(UiButton).exists()).toBe(true)
  })

  it('should redirect to HowToPlayView when click on UiButton', async () => {
    await wrapper.findComponent(UiButton).trigger('click')
    await flushPromises()

    expect(mockRouter.push).toHaveBeenCalledWith('/how-to-play')
  })

  it('should redirect to PickCategoryView when click on PlayButton', async () => {
    await wrapper.findComponent(PlayButton).trigger('click')
    await flushPromises()

    expect(mockRouter.push).toHaveBeenCalledWith('/pick-category')
  })
})
