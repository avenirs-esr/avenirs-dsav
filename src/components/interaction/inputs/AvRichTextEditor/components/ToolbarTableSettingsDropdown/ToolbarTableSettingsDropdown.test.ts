import type { VueWrapper } from '@vue/test-utils'
import type { ToolbarTableSettingsDropdownProps } from '@/components/interaction/inputs/AvRichTextEditor/components/ToolbarTableSettingsDropdown/ToolbarTableSettingsDropdown.vue'
import { mount } from '@vue/test-utils'
import { beforeEach, expect } from 'vitest'
import ToolbarTableSettingsDropdown from '@/components/interaction/inputs/AvRichTextEditor/components/ToolbarTableSettingsDropdown/ToolbarTableSettingsDropdown.vue'
import { AvDropdownStub, BddTest } from '@/tests'

BddTest().given('a toolbar table settings dropdown', () => {
  let wrapper: VueWrapper<InstanceType<typeof ToolbarTableSettingsDropdown>>

  const props: ToolbarTableSettingsDropdownProps = {
    deleteTableLabel: 'Supprimer le tableau',
    addColumnBeforeLabel: 'Ajouter une colonne avant',
    addColumnAfterLabel: 'Ajouter une colonne après',
    deleteColumnLabel: 'Supprimer la colonne',
    addRowBeforeLabel: 'Ajouter une ligne avant',
    addRowAfterLabel: 'Ajouter une ligne après',
    deleteRowLabel: 'Supprimer la ligne',
    tableSettingsLabel: 'Paramètres du tableau'
  }

  const events = [
    'deleteTable',
    'addColumnBefore',
    'addColumnAfter',
    'deleteColumn',
    'addRowBefore',
    'addRowAfter',
    'deleteRow'
  ]

  const stubs = {
    AvDropdown: AvDropdownStub
  }

  function mountComponent (componentProps = props) {
    wrapper = mount(ToolbarTableSettingsDropdown, {
      props: componentProps,
      global: { stubs }
    })
  }

  function getDropdown () {
    return wrapper.findComponent(AvDropdownStub)
  }

  beforeEach(() => {
    mountComponent()
  })

  BddTest().when('the component is mounted', () => {
    BddTest().then('it should render the dropdown with 7 menu items', () => {
      expect(getDropdown().exists()).toBe(true)
      expect(getDropdown().props('items')).toHaveLength(7)
    })

    BddTest().then('it should pass the correct props to the dropdown', () => {
      const dropdown = getDropdown()

      expect(dropdown.props()).toMatchObject({
        triggerAriaLabel: props.tableSettingsLabel,
        triggerIcon: expect.any(String),
        triggerActive: true,
        width: 'max-content'
      })
    })

    BddTest().then('it should pass the correct labels to menu items', () => {
      const items = getDropdown().props('items')

      expect(items.map((item: { label: string }) => item.label)).toEqual([
        props.deleteTableLabel,
        props.addColumnBeforeLabel,
        props.addColumnAfterLabel,
        props.deleteColumnLabel,
        props.addRowBeforeLabel,
        props.addRowAfterLabel,
        props.deleteRowLabel
      ])
    })

    BddTest().then('it should configure menu items as icon-only', () => {
      const items = getDropdown().props('items')

      expect(items.every(item => item.iconOnly)).toBe(true)
    })
  })

  events.forEach((event) => {
    BddTest().when(`the ${event} menu item is selected`, () => {
      BddTest().then(`it should emit the ${event}Selected event`, async () => {
        getDropdown().vm.$emit('item-selected', event)

        expect(wrapper.emitted(`${event}Selected`)).toHaveLength(1)
      })
    })
  })

  BddTest().when('the component is disabled', () => {
    beforeEach(() => {
      mountComponent({
        ...props,
        disabled: true
      })
    })

    BddTest().then('it should disable the dropdown trigger', () => {
      expect(getDropdown().props('triggerDisabled')).toBe(true)
    })

    BddTest().then('it should disable all menu items', () => {
      const items = getDropdown().props('items')

      expect(items.every(item => item.disabled)).toBe(true)
    })
  })

  BddTest().when('the component is loading', () => {
    beforeEach(() => {
      mountComponent({
        ...props,
        isLoading: true
      })
    })

    BddTest().then('it should pass the loading state to the dropdown trigger', () => {
      expect(getDropdown().props('triggerIsLoading')).toBe(true)
    })
  })

  BddTest().when('the component has a disabled tooltip', () => {
    const disabledTooltip = 'Action indisponible'

    beforeEach(() => {
      mountComponent({
        ...props,
        disabled: true,
        disabledTooltip
      })
    })

    BddTest().then('it should pass the tooltip to the trigger and menu items', () => {
      expect(getDropdown().props('triggerDisabledTooltip')).toBe(disabledTooltip)

      const items = getDropdown().props('items')

      expect(items.every(item => (item.disabledTooltip === disabledTooltip))).toBe(true)
    })
  })
})
