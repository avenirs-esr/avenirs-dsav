import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect } from 'vitest'
import ToolbarTableSettingsDropdown, { type ToolbarTableSettingsDropdownProps } from '@/components/interaction/inputs/AvRichTextEditor/components/ToolbarTableSettingsDropdown/ToolbarTableSettingsDropdown.vue'
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

  beforeEach(() => {
    wrapper = mount(ToolbarTableSettingsDropdown, { props, global: { stubs } })
  })

  BddTest().when('the component is mounted', () => {
    BddTest().then('it should render the dropdown with 7 menu items', () => {
      const dropdown = wrapper.findComponent({ name: 'AvDropdown' })
      expect(dropdown.exists()).toBe(true)
      expect(dropdown.props('items')).toHaveLength(7)
    })

    BddTest().then('it should pass correct props to dropdown', () => {
      const dropdown = wrapper.findComponent({ name: 'AvDropdown' })
      expect(dropdown.props('items')).toHaveLength(7)
      expect(dropdown.props('triggerAriaLabel')).toBe(props.tableSettingsLabel)
      expect(dropdown.props('triggerLabel')).toBeUndefined()
    })
  })

  events.forEach((event) => {
    BddTest().when(`the ${event} menu item is clicked`, () => {
      let button: ReturnType<typeof wrapper.find>

      beforeEach(() => {
        button = wrapper.find(`[data-name="${event}"]`)
        expect(button.exists()).toBe(true)
      })

      BddTest().then(`it should emit the ${event}Selected event`, async () => {
        await button.trigger('click')
        expect(wrapper.emitted(`${event}Selected`)).toHaveLength(1)
      })
    })
  })
})
