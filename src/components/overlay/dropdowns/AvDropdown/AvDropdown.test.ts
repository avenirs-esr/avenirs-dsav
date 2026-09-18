import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach } from 'vitest'
import AvDropdown, { type AvDropdownProps } from '@/components/overlay/dropdowns/AvDropdown/AvDropdown.vue'
import { AvButtonStub, AvPopoverStub, BddTest } from '@/tests'
import { MDI_ICONS } from '@/tokens'

BddTest().given('an AvDropdown', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvDropdown>>

  const props: AvDropdownProps = {
    items: [
      { name: 'edit', label: 'Edit', icon: MDI_ICONS.PENCIL_OUTLINE },
      {
        name: 'share',
        label: 'Share',
        icon: MDI_ICONS.SHARE_VARIANT_OUTLINE,
        disabled: true,
        disabledTooltip: 'This action is not available yet',
      },
    ],
    triggerAriaLabel: 'Actions menu',
  }

  const stubs = { AvButton: AvButtonStub, AvPopover: AvPopoverStub }

  BddTest().when('the component is mounted', () => {
    beforeEach(() => {
      wrapper = mount(AvDropdown, { props, global: { stubs } })
    })

    BddTest().then('it should render the trigger button', () => {
      const triggerButton = wrapper.findAllComponents(AvButtonStub)[0]

      expect(triggerButton.props('label')).toBe(props.triggerAriaLabel)
      expect(triggerButton.props('iconOnly')).toBe(true)
    })

    BddTest().then('it should render the menu items', () => {
      const itemButtons = wrapper.findAllComponents(AvButtonStub).slice(1)

      expect(itemButtons).toHaveLength(props.items.length)
      expect(itemButtons[0].props('label')).toBe(props.items[0].label)
      expect(itemButtons[1].props('label')).toBe(props.items[1].label)
    })

    BddTest().then('it should pass disabledTooltip to disabled item buttons', () => {
      const itemButtons = wrapper.findAllComponents(AvButtonStub).slice(1)

      expect(itemButtons[1].props('disabled')).toBe(true)
      expect(itemButtons[1].props('disabledTooltip')).toBe(props.items[1].disabledTooltip)
    })
  })
})
