import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect, vi } from 'vitest'
import { nextTick } from 'vue'
import { AvFieldsetStub } from '@/components/base/AvFieldset/AvFieldset.stub'
import { AvCheckboxStub } from '@/components/interaction/checkboxes/AvCheckbox/AvCheckbox.stub'
import MultiselectCollapse, { type MultiselectCollapseProps } from '@/components/interaction/selects/AvMultiselect/components/MultiselectCollapse.vue'
import { AvButtonStub } from '@/tests'
import { BddTest } from '@/tests/utils'

const defaultOptions = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' }
]

const groupedOptions = [
  {
    label: 'Group 1',
    children: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ],
  },
  {
    label: 'Group 2',
    children: [
      { label: 'Disabled option', value: '3', disabled: true },
      { label: 'Option 4', value: '4' },
    ],
  },
]

const defaultProps: MultiselectCollapseProps = {
  isVisible: true,
  selected: [],
  options: defaultOptions,
  id: 'test-collapse',
}

type MultiselectCollapseTestProps = Partial<MultiselectCollapseProps> & {
  modelValue?: (string | number)[]
}

function mountWithProps (props: MultiselectCollapseTestProps = {}, attrs: Record<string, unknown> = {}):
VueWrapper<InstanceType<typeof MultiselectCollapse>> {
  return mount<typeof MultiselectCollapse>(MultiselectCollapse, {
    props: { modelValue: [], ...defaultProps, ...props },
    attrs,
    global: {
      stubs: {
        AvButton: AvButtonStub,
        AvCheckbox: AvCheckboxStub,
        AvFieldset: AvFieldsetStub,
        transition: false
      }
    },
    attachTo: document.body
  })
}

BddTest().given('a MultiselectCollapse component', () => {
  let wrapper: VueWrapper<InstanceType<typeof MultiselectCollapse>>
  let updateModelValue = vi.fn()
  const addSpy = vi.spyOn(document, 'addEventListener')
  const removeSpy = vi.spyOn(document, 'removeEventListener')
  const getAvButton = () => wrapper.findComponent(AvButtonStub)
  const getGroupCheckbox = (index = 0) => wrapper.find(`[data-testid="input-checkbox-${defaultProps.id}-group-${index}"]`)
  const getCollapse = () => wrapper.find(`#${defaultProps.id}-collapse`)
  const getSearchInput = () => wrapper.find('input')

  BddTest().and('default props', () => {
    beforeEach(() => {
      vi.clearAllMocks()
      updateModelValue = vi.fn()
      wrapper = mountWithProps({}, { 'onUpdate:modelValue': updateModelValue })
    })

    BddTest().when('the collapse is visible', () => {
      BddTest().then('it should render all checkboxes', () => {
        const checkboxes = wrapper.findAllComponents(AvCheckboxStub)
        expect(checkboxes.length).toBe(defaultOptions.length)
      })

      BddTest().and('select all button is enabled', () => {
        beforeEach(async () => {
          wrapper = mountWithProps({ selectAll: true }, { 'onUpdate:modelValue': updateModelValue })
        })

        BddTest().then('it should show the select all button', () => {
          const btn = getAvButton()
          expect(btn.exists()).toBe(true)
          expect(btn.text()).toContain('Tout sélectionner')
        })

        BddTest().then('clicking select all should emit all option values', async () => {
          const btn = getAvButton()
          await btn.find('button').trigger('click')
          expect(updateModelValue).toHaveBeenCalledWith(defaultOptions.map(option => option.value))
        })
      })

      BddTest().and('filtering options with search', () => {
        beforeEach(async () => {
          await wrapper.setProps({ search: true })
          const input = getSearchInput()
          await input.setValue('Option 2')
        })

        BddTest().then('it should only show filtered options', () => {
          const checkboxes = wrapper.findAllComponents(AvCheckboxStub)
          expect(checkboxes.length).toBe(1)
          expect(checkboxes[0].props('label')).toBe('Option 2')
        })
      })
    })

    BddTest().when('no results for search', () => {
      beforeEach(async () => {
        await wrapper.setProps({ search: true })
        const input = getSearchInput()
        await input.setValue('Nothing')
      })

      BddTest().then('it should display the no results slot', () => {
        expect(wrapper.text()).toContain('Pas de résultat')
      })
    })

    BddTest().when('the component is unmounted', () => {
      beforeEach(() => {
        wrapper.unmount()
      })

      BddTest().then('it should call clean', () => {
        expect(removeSpy).toHaveBeenCalledWith('click', expect.any(Function))
      })
    })

    BddTest().when('all options are selected', () => {
      beforeEach(async () => {
        await wrapper.setProps({ selected: defaultOptions, selectAll: true })
      })

      BddTest().then('it should show the deselect all label', () => {
        const btn = getAvButton()
        expect(btn.text()).toContain('Tout désélectionner')
      })
    })
  })

  BddTest().and('given grouped options', () => {
    BddTest().when('a group is selected', () => {
      beforeEach(async () => {
        updateModelValue = vi.fn()
        wrapper = mountWithProps({
          options: groupedOptions,
          modelValue: [],
          selected: [],
        }, { 'onUpdate:modelValue': updateModelValue })
        const groupCheckbox = getGroupCheckbox()
        await groupCheckbox.setValue(true)
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
        wrapper = mountWithProps({
          options: groupedOptions,
          selected: [groupedOptions[0].children[0]],
          modelValue: ['1'],
        }, { 'onUpdate:modelValue': updateModelValue })
      })

      BddTest().then('its checkbox should expose the mixed state', () => {
        const groupCheckbox = getGroupCheckbox()
        expect(groupCheckbox.attributes('aria-checked')).toBe('mixed')
      })
    })

    BddTest().when('select all is clicked', () => {
      beforeEach(async () => {
        updateModelValue = vi.fn()
        wrapper = mountWithProps({
          options: groupedOptions,
          selectAll: true,
          selected: [],
          modelValue: [],
        }, { 'onUpdate:modelValue': updateModelValue })
        await getAvButton().find('button').trigger('click')
      })

      BddTest().then('it should ignore disabled children', async () => {
        await vi.waitFor(() => {
          expect(updateModelValue).toHaveBeenCalledWith(['1', '2', '4'])
        })
      })
    })

    BddTest().when('a selected group is clicked', () => {
      beforeEach(async () => {
        updateModelValue = vi.fn()
        wrapper = mountWithProps({
          options: groupedOptions,
          selected: groupedOptions[0].children,
          modelValue: ['1', '2'],
        }, { 'onUpdate:modelValue': updateModelValue })
        await getGroupCheckbox().setValue(false)
      })

      BddTest().then('it should emit the group without its child values', async () => {
        await vi.waitFor(() => {
          expect(updateModelValue).toHaveBeenCalledWith([])
        })
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
      await vi.waitFor(() => expect(addSpy.mock.calls.length).toBeGreaterThan(addCallsBefore))
    })

    BddTest().then('it should emit close', () => {
      const outsideEl = document.createElement('div')
      document.body.appendChild(outsideEl)
      const dispatchOutsideClick = () => {
        outsideEl.dispatchEvent(new MouseEvent('click', { bubbles: true }))
      }
      dispatchOutsideClick()
      dispatchOutsideClick()
      expect(close).toHaveBeenCalled()
      outsideEl.remove()
    })

    BddTest().when('the click target is inside the collapse element', () => {
      BddTest().then('it should not emit close', () => {
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
      await vi.waitFor(() => expect(addSpy.mock.calls.length).toBeGreaterThan(addCallsBefore))
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
})
