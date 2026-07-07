import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect, vi } from 'vitest'
import AvToggle from '@/components/interaction/toggles/AvToggle/AvToggle.vue'
import { BddTest } from '@/tests/utils'

vi.mock('@/components/interaction/toggles/AvToggle/assets/toggle-active.svg?url', () => ({
  default: 'toggle-active.svg',
}))

vi.mock('@/components/interaction/toggles/AvToggle/assets/toggle-inactive.svg?url', () => ({
  default: 'toggle-inactive.svg',
}))

vi.mock('@/components/interaction/toggles/AvToggle/assets/toggle-active-disabled.svg?url', () => ({
  default: 'toggle-active-disabled.svg',
}))

vi.mock('@/components/interaction/toggles/AvToggle/assets/toggle-inactive-disabled.svg?url', () => ({
  default: 'toggle-inactive-disabled.svg',
}))

BddTest().given('an AvToggle', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvToggle>>

  const defaultProps = {
    modelValue: false,
    description: 'test description',
    activeText: 'Yes',
    inactiveText: 'No',
    name: 'status-toggle',
  }

  BddTest().and('with default props', () => {
    beforeEach(() => {
      wrapper = mount(AvToggle, {
        props: defaultProps,
      })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should render the inactive text', () => {
        expect(wrapper.text()).toContain('No')
      })

      BddTest().then('it should not render the active text', () => {
        expect(wrapper.text()).not.toContain('Yes')
      })

      BddTest().then('the input should be unchecked', () => {
        const input = wrapper.find('input[type="checkbox"]')
        expect((input.element as HTMLInputElement).checked).toBe(false)
      })

      BddTest().then('it should render the description text', () => {
        expect(wrapper.text()).toContain('test description')
      })

      BddTest().then('it should render the inactive svg', () => {
        expect(wrapper.find('image').attributes('href')).toBe('toggle-inactive.svg')
      })
    })

    BddTest().when('the toggle is clicked', () => {
      BddTest().then('it should emit an update:modelValue event', async () => {
        const input = wrapper.find('input')
        await input.setValue(true)

        expect(wrapper.emitted('update:modelValue')).toBeTruthy()
        expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true])
      })
    })
  })

  BddTest().and('initially active', () => {
    beforeEach(() => {
      wrapper = mount(AvToggle, {
        props: { ...defaultProps, modelValue: true },
      })
    })

    BddTest().when('the toggle is mounted', () => {
      BddTest().then('it should render the active text', () => {
        expect(wrapper.text()).toContain('Yes')
      })

      BddTest().then('the input should be checked', () => {
        const input = wrapper.find('input[type="checkbox"]')
        expect((input.element as HTMLInputElement).checked).toBe(true)
      })

      BddTest().then('it should render the active svg', () => {
        expect(wrapper.find('image').attributes('href')).toBe('toggle-active.svg')
      })
    })
  })

  BddTest().and('disabled and inactive', () => {
    beforeEach(() => {
      wrapper = mount(AvToggle, {
        props: { ...defaultProps, disabled: true },
      })
    })

    BddTest().when('the toggle is mounted', () => {
      BddTest().then('it should have disabled class and input disabled', () => {
        const label = wrapper.find('label')
        expect(label.classes()).toContain('av-toggle--disabled')

        const input = wrapper.find('input')
        expect(input.attributes('disabled')).toBeDefined()
        expect(input.attributes('aria-disabled')).toBe('true')
      })

      BddTest().then('it should render the inactive disabled svg', () => {
        expect(wrapper.find('image').attributes('href')).toBe('toggle-inactive-disabled.svg')
      })
    })
  })

  BddTest().and('disabled and active', () => {
    beforeEach(() => {
      wrapper = mount(AvToggle, {
        props: { ...defaultProps, modelValue: true, disabled: true },
      })
    })

    BddTest().when('the toggle is mounted', () => {
      BddTest().then('it should render the active disabled svg', () => {
        expect(wrapper.find('image').attributes('href')).toBe('toggle-active-disabled.svg')
      })
    })
  })

  BddTest().and('without id', () => {
    beforeEach(() => {
      wrapper = mount(AvToggle, { props: { description: 'noId' } })
    })

    BddTest().when('the toggle is mounted', () => {
      BddTest().then('it should generate a random input id', () => {
        const input = wrapper.find('input[type="checkbox"]')
        const inputId = input.attributes('id')
        expect(inputId).toBeDefined()

        const label = wrapper.find('label')
        expect(label.attributes('for')).toBe(inputId)
        expect(label.attributes('id')).toContain(`${inputId}-label`)
      })
    })
  })
})
