import type { VueWrapper } from '@vue/test-utils'
import type {
  AvSelectOption,
  AvSelectOptionGroup,
  AvSelectSelectedOption,
} from '@/components/interaction/selects/AvSelect/AvSelect.types'
import type { SelectCollapseProps } from '@/components/interaction/selects/AvSelect/components/SelectCollapse.vue'
import { mount } from '@vue/test-utils'
import { beforeEach, expect, vi } from 'vitest'
import { nextTick } from 'vue'
import { AvFieldsetStub } from '@/components/base/AvFieldset/AvFieldset.stub'
import { AvCheckboxStub } from '@/components/interaction/checkboxes/AvCheckbox/AvCheckbox.stub'
import SelectCollapse from '@/components/interaction/selects/AvSelect/components/SelectCollapse.vue'
import { AvButtonStub, AvCheckboxListItemStub } from '@/tests'
import { BddTest } from '@/tests/utils'

const defaultOptions: AvSelectOption[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
]

const groupedOptions: AvSelectOptionGroup[] = [
  {
    id: 'group-1',
    label: 'Group 1',
    children: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ],
  },
  {
    id: 'group-2',
    label: 'Group 2',
    children: [
      { label: 'Disabled option', value: '3', disabled: true },
      { label: 'Option 4', value: '4' },
    ],
  },
]

const groupedSelectedOptions: AvSelectSelectedOption[] = [
  {
    label: 'Option 1',
    value: '1',
    parentId: 'group-1',
  },
]

const defaultProps: SelectCollapseProps = {
  isVisible: true,
  selected: [],
  options: defaultOptions,
  id: 'test-collapse',
  multiple: true,
}

type SelectCollapseTestProps = Partial<SelectCollapseProps> & {
  modelValue?: (string | number)[]
}

function mountWithProps (
  props: SelectCollapseTestProps = {},
  attrs: Record<string, unknown> = {},
): VueWrapper<InstanceType<typeof SelectCollapse>> {
  return mount<typeof SelectCollapse>(SelectCollapse, {
    props: { modelValue: [], ...defaultProps, ...props },
    attrs,
    global: {
      stubs: {
        AvButton: AvButtonStub,
        AvCheckbox: AvCheckboxStub,
        AvFieldset: AvFieldsetStub,
        AvCheckboxListItem: AvCheckboxListItemStub,
        transition: false,
      },
    },
    attachTo: document.body,
  })
}

BddTest().given('a SelectCollapse component', () => {
  let wrapper: VueWrapper<InstanceType<typeof SelectCollapse>>
  let updateModelValue = vi.fn()

  const addSpy = vi.spyOn(document, 'addEventListener')
  const removeSpy = vi.spyOn(document, 'removeEventListener')

  const getAvButton = () => wrapper.findComponent(AvButtonStub)
  const getGroupCheckbox = (index = 0) =>
    wrapper.find(`[data-testid="input-checkbox-${defaultProps.id}-group-${index}"]`)
  const getCollapse = () => wrapper.find(`#${defaultProps.id}-collapse`)
  const getSearchInput = () => wrapper.find('input')
  const getOptionCheckboxes = () => wrapper.findAllComponents(AvCheckboxListItemStub)
  const getOptionCheckbox = (value: string) => getOptionCheckboxes().find(
    component => component.props('id') === value,
  )
  const selectValues = (optionValue: string, values: string[]) => {
    getOptionCheckbox(optionValue)?.vm.$emit('update:modelValue', values)
  }

  BddTest().and('default props', () => {
    beforeEach(() => {
      vi.clearAllMocks()
      updateModelValue = vi.fn()
      wrapper = mountWithProps({}, { 'onUpdate:modelValue': updateModelValue })
    })

    BddTest().when('the collapse is visible', () => {
      BddTest().then('it should render all checkboxes', () => {
        expect(getOptionCheckboxes().length).toBe(defaultOptions.length)
      })

      BddTest().and('select all button is enabled', () => {
        beforeEach(async () => {
          wrapper = mountWithProps(
            { selectAll: true },
            { 'onUpdate:modelValue': updateModelValue },
          )
        })

        BddTest().then('it should show the select all button', () => {
          const btn = getAvButton()

          expect(btn.exists()).toBe(true)
          expect(btn.text()).toContain('Tout sélectionner')
        })

        BddTest().then('clicking select all should emit all option values', async () => {
          await getAvButton().find('button').trigger('click')

          expect(updateModelValue).toHaveBeenCalledWith(
            defaultOptions.map(option => option.value),
          )
        })
      })

      BddTest().and('filtering options with search', () => {
        beforeEach(async () => {
          await wrapper.setProps({ search: true })
          await getSearchInput().setValue('Option 2')
        })

        BddTest().then('it should only show filtered options', () => {
          const checkboxes = getOptionCheckboxes()

          expect(checkboxes.length).toBe(1)
          expect(checkboxes[0].props('label')).toBe('Option 2')
        })
      })
    })

    BddTest().when('no results for search', () => {
      beforeEach(async () => {
        await wrapper.setProps({ search: true })
        await getSearchInput().setValue('Nothing')
      })

      BddTest().then('it should display the no results message', () => {
        expect(wrapper.text()).toContain('Pas de résultat')
      })
    })

    BddTest().when('the component is unmounted', () => {
      beforeEach(() => {
        wrapper.unmount()
      })

      BddTest().then('it should remove the click event listener', () => {
        expect(removeSpy).toHaveBeenCalledWith('click', expect.any(Function))
      })
    })

    BddTest().when('all options are selected', () => {
      beforeEach(async () => {
        await wrapper.setProps({
          selected: defaultOptions,
          modelValue: defaultOptions.map(option => option.value),
          selectAll: true,
        })
      })

      BddTest().then('it should show the deselect all label', () => {
        expect(getAvButton().text()).toContain('Tout désélectionner')
      })
    })
  })

  BddTest().and('single-selection mode', () => {
    BddTest().when('an option is selected', () => {
      beforeEach(() => {
        updateModelValue = vi.fn()
        wrapper = mountWithProps(
          {
            multiple: false,
            selected: null,
            modelValue: [],
          },
          { 'onUpdate:modelValue': updateModelValue },
        )
      })

      BddTest().then('it should emit only the selected option value', () => {
        selectValues('1', ['1'])

        expect(updateModelValue).toHaveBeenCalledWith(['1'])
      })

      BddTest().then('it should emit close after selecting an option', () => {
        selectValues('1', ['1'])

        expect(wrapper.emitted('close')).toBeTruthy()
      })
    })

    BddTest().when('the selected option is deselected', () => {
      beforeEach(() => {
        updateModelValue = vi.fn()
        wrapper = mountWithProps(
          {
            multiple: false,
            selected: defaultOptions[0],
            modelValue: ['1'],
          },
          { 'onUpdate:modelValue': updateModelValue },
        )
      })

      BddTest().then('it should emit an empty array', () => {
        selectValues('1', [])

        expect(updateModelValue).toHaveBeenCalledWith([])
      })
    })

    BddTest().when('a single option is selected initially', () => {
      beforeEach(() => {
        wrapper = mountWithProps({
          multiple: false,
          selected: defaultOptions[0],
          modelValue: ['1'],
        })
      })

      BddTest().then('it should mark the option as selected', () => {
        expect(getOptionCheckbox('1')!.props('modelValue')).toContain('1')
      })

      BddTest().then('it should accept the selected option as an object', () => {
        expect(wrapper.props('selected')).toEqual(defaultOptions[0])
      })
    })

    BddTest().when('no option is selected initially', () => {
      beforeEach(() => {
        wrapper = mountWithProps({
          multiple: false,
          selected: null,
          modelValue: [],
        })
      })

      BddTest().then('it should render all available options', () => {
        expect(getOptionCheckboxes().length).toBe(defaultOptions.length)
      })
    })

    BddTest().when('a disabled option is selected', () => {
      beforeEach(() => {
        updateModelValue = vi.fn()

        wrapper = mountWithProps(
          {
            options: groupedOptions,
            multiple: true,
            modelValue: [],
          },
          { 'onUpdate:modelValue': updateModelValue },
        )

        getOptionCheckbox('3')?.vm.$emit('update:modelValue', ['3'])
      })

      BddTest().then('it should not update the selection', () => {
        expect(updateModelValue).not.toHaveBeenCalled()
      })
    })

    BddTest().when('the required option is deselected', () => {
      beforeEach(() => {
        updateModelValue = vi.fn()

        wrapper = mountWithProps(
          {
            multiple: false,
            required: true,
            selected: defaultOptions[0],
            modelValue: ['1'],
          },
          { 'onUpdate:modelValue': updateModelValue },
        )

        selectValues('1', [])
      })

      BddTest().then('it should keep the current selection', () => {
        expect(updateModelValue).not.toHaveBeenCalled()
      })
    })
  })

  BddTest().when('an option is selected in multiple-selection mode', () => {
    beforeEach(() => {
      updateModelValue = vi.fn()

      wrapper = mountWithProps(
        { multiple: true, modelValue: [] },
        { 'onUpdate:modelValue': updateModelValue },
      )

      selectValues('1', ['1'])
    })

    BddTest().then('it should emit the selected values', () => {
      expect(updateModelValue).toHaveBeenCalledWith(['1'])
    })
  })

  BddTest().and('with grouped options', () => {
    BddTest().when('a group is selected', () => {
      beforeEach(async () => {
        updateModelValue = vi.fn()
        wrapper = mountWithProps(
          {
            options: groupedOptions,
            modelValue: [],
            selected: [],
          },
          { 'onUpdate:modelValue': updateModelValue },
        )

        await getGroupCheckbox().setValue(true)
      })

      BddTest().then('it should emit the active child values', async () => {
        await vi.waitFor(() => {
          expect(updateModelValue).toHaveBeenCalledWith(['1', '2'])
        })
      })
    })

    BddTest().when('a group contains selected and unselected children', () => {
      beforeEach(() => {
        updateModelValue = vi.fn()
        wrapper = mountWithProps(
          {
            options: groupedOptions,
            selected: [groupedOptions[0].children[0]],
            modelValue: ['1'],
          },
          { 'onUpdate:modelValue': updateModelValue },
        )
      })

      BddTest().then('its checkbox should expose the mixed state', () => {
        expect(getGroupCheckbox().attributes('aria-checked')).toBe('mixed')
      })

      BddTest().when('a single selected option belongs to a group', () => {
        beforeEach(() => {
          wrapper = mountWithProps({
            options: groupedOptions,
            selected: groupedOptions[0].children[0],
            modelValue: ['1'],
            multiple: true,
          })
        })

        BddTest().then('it should expose the mixed group state', () => {
          expect(getGroupCheckbox().attributes('aria-checked')).toBe('mixed')
        })
      })
    })

    BddTest().when('select all is clicked', () => {
      beforeEach(async () => {
        vi.clearAllMocks()

        updateModelValue = vi.fn()
        wrapper = mountWithProps(
          {
            options: groupedOptions,
            selectAll: true,
            selected: [],
            modelValue: [],
          },
          { 'onUpdate:modelValue': updateModelValue },
        )

        await getAvButton().find('button').trigger('click')
      })

      BddTest().then('it should ignore disabled children', async () => {
        await vi.waitFor(() => {
          expect(updateModelValue).toHaveBeenCalledWith(['1', '2', '4'])
        })
      })

      BddTest().then('clicking deselect all should emit an empty selection', async () => {
        await wrapper.setProps({
          selected: groupedOptions.flatMap(group => group.children)
            .filter(option => !option.disabled),
        })

        await getAvButton().find('button').trigger('click')

        expect(updateModelValue).toHaveBeenLastCalledWith([])
      })
    })

    BddTest().when('a selected group is clicked', () => {
      beforeEach(async () => {
        updateModelValue = vi.fn()
        wrapper = mountWithProps(
          {
            options: groupedOptions,
            selected: groupedOptions[0].children,
            modelValue: ['1', '2'],
          },
          { 'onUpdate:modelValue': updateModelValue },
        )

        await getGroupCheckbox().setValue(false)
      })

      BddTest().then('it should emit an empty selection', async () => {
        await vi.waitFor(() => {
          expect(updateModelValue).toHaveBeenCalledWith([])
        })
      })
    })

    BddTest().when('the selected option contains a parentId', () => {
      beforeEach(() => {
        wrapper = mountWithProps({
          options: groupedOptions,
          selected: groupedSelectedOptions,
          modelValue: ['1'],
        })
      })

      BddTest().then('it should render the selected child as selected', () => {
        const checkbox = getOptionCheckbox('1')

        expect(checkbox?.exists()).toBe(true)
        expect(checkbox!.props('modelValue')).toContain('1')
      })

      BddTest().then('it should accept the parentId on the selected option', () => {
        expect(wrapper.props('selected')).toEqual(groupedSelectedOptions)
      })
    })

    BddTest().when('the selected option has no parentId', () => {
      beforeEach(() => {
        wrapper = mountWithProps({
          options: groupedOptions,
          selected: [{ label: 'Option 1', value: '1' }],
          modelValue: ['1'],
        })
      })

      BddTest().then('it should still render the selected child as selected', () => {
        expect(getOptionCheckbox('1')!.props('modelValue')).toContain('1')
      })
    })
  })

  BddTest().and('isVisible is false', () => {
    beforeEach(() => {
      wrapper = mountWithProps({ isVisible: false })
    })

    BddTest().when('isVisible changes to true', () => {
      beforeEach(async () => {
        await wrapper.setProps({ isVisible: true })
        await nextTick()
      })

      BddTest().then('it should add a click event listener on document', () => {
        expect(addSpy).toHaveBeenCalledWith('click', expect.any(Function))
      })
    })

    BddTest().when('isVisible changes from true to false', () => {
      beforeEach(async () => {
        await wrapper.setProps({ isVisible: true })
        await nextTick()
        await wrapper.setProps({ isVisible: false })
      })

      BddTest().then('it should remove the click event listener from document', () => {
        expect(removeSpy).toHaveBeenCalledWith('click', expect.any(Function))
      })
    })
  })

  BddTest().when('the user clicks outside the component', () => {
    let close = vi.fn()

    beforeEach(async () => {
      const addCallsBefore = addSpy.mock.calls.length
      close = vi.fn()
      wrapper = mountWithProps({ isVisible: false }, { onClose: close })

      await wrapper.setProps({ isVisible: true })
      await nextTick()

      await vi.waitFor(() => {
        expect(addSpy.mock.calls.length).toBeGreaterThan(addCallsBefore)
      })
    })

    BddTest().then('it should emit close', () => {
      const outsideEl = document.createElement('div')
      document.body.appendChild(outsideEl)

      outsideEl.dispatchEvent(new MouseEvent('click', { bubbles: true }))
      outsideEl.dispatchEvent(new MouseEvent('click', { bubbles: true }))

      expect(close).toHaveBeenCalled()
      outsideEl.remove()
    })

    BddTest().when('the click target is inside the collapse element', () => {
      BddTest().then('it should not emit close', () => {
        document.body.dispatchEvent(new MouseEvent('click', { bubbles: true }))

        const collapseEl = getCollapse()
        const insideEl = document.createElement('span')
        collapseEl.element.appendChild(insideEl)

        insideEl.dispatchEvent(new MouseEvent('click', { bubbles: true }))

        expect(close).not.toHaveBeenCalled()
        insideEl.remove()
      })
    })
  })

  BddTest().when('the user clicks inside the component', () => {
    let close = vi.fn()

    beforeEach(async () => {
      const addCallsBefore = addSpy.mock.calls.length
      close = vi.fn()
      wrapper = mountWithProps({ isVisible: false }, { onClose: close })

      await wrapper.setProps({ isVisible: true })
      await nextTick()

      await vi.waitFor(() => {
        expect(addSpy.mock.calls.length).toBeGreaterThan(addCallsBefore)
      })
    })

    BddTest().then('it should not emit close', () => {
      const collapseEl = getCollapse()
      const insideEl = document.createElement('span')
      collapseEl.element.appendChild(insideEl)

      insideEl.dispatchEvent(new MouseEvent('click', { bubbles: true }))

      expect(close).not.toHaveBeenCalled()
      insideEl.remove()
    })

    BddTest().and('skipNextClickOutside is true (first click after becoming visible)', () => {
      BddTest().then('it should not emit close and clear the flag', () => {
        const outsideEl = document.createElement('div')
        document.body.appendChild(outsideEl)

        const dispatchOutsideClick = () => {
          outsideEl.dispatchEvent(new MouseEvent('click', { bubbles: true }))
        }

        dispatchOutsideClick()
        expect(close).not.toHaveBeenCalled()

        dispatchOutsideClick()
        expect(close).toHaveBeenCalled()
        outsideEl.remove()
      })
    })
  })

  BddTest().when('the user clicks the host element', () => {
    let close = vi.fn()

    beforeEach(async () => {
      close = vi.fn()
      wrapper = mountWithProps(
        { selectAll: true },
        { onClose: close },
      )

      await nextTick()
    })

    BddTest().then('it should not emit close', () => {
      document.body.dispatchEvent(new MouseEvent('click', { bubbles: true }))

      getAvButton().element.dispatchEvent(
        new MouseEvent('click', { bubbles: true }),
      )

      expect(close).not.toHaveBeenCalled()
    })
  })
})
