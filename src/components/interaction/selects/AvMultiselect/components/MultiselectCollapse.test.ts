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

const defaultProps: MultiselectCollapseProps = {
  isVisible: true,
  selected: [],
  options: defaultOptions,
  id: 'test-collapse',
}

function mountWithProps (props: Partial<MultiselectCollapseProps> = {}):
VueWrapper<InstanceType<typeof MultiselectCollapse>> {
  return mount<typeof MultiselectCollapse>(MultiselectCollapse, {
    props: { modelValue: [], ...defaultProps, ...props },
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
  const addSpy = vi.spyOn(document, 'addEventListener')
  const removeSpy = vi.spyOn(document, 'removeEventListener')

  BddTest().and('default props', () => {
    beforeEach(() => {
      vi.clearAllMocks()
      wrapper = mountWithProps()
    })

    BddTest().when('the collapse is visible', () => {
      BddTest().then('it should render all checkboxes', () => {
        const checkboxes = wrapper.findAllComponents({ name: 'AvCheckbox' })
        expect(checkboxes.length).toBe(defaultOptions.length)
      })

      BddTest().and('select all button is enabled', () => {
        beforeEach(async () => {
          await wrapper.setProps({ selectAll: true })
        })

        BddTest().then('it should show the select all button', () => {
          const btn = wrapper.findComponent({ name: 'AvButton' })
          expect(btn.exists()).toBe(true)
          expect(btn.text()).toContain('Tout sélectionner')
        })

        BddTest().then('clicking select all should select all options', async () => {
          const btn = wrapper.findComponent({ name: 'AvButton' })
          await btn.trigger('click')
          expect((wrapper.vm as unknown as { model: unknown }).model).toEqual(defaultOptions.map(o => o.value))
        })
      })

      BddTest().and('filtering options with search', () => {
        beforeEach(async () => {
          await wrapper.setProps({ search: true })
          const input = wrapper.find('input')
          await input.setValue('Option 2')
        })

        BddTest().then('it should only show filtered options', () => {
          const checkboxes = wrapper.findAllComponents({ name: 'AvCheckbox' })
          expect(checkboxes.length).toBe(1)
          expect(checkboxes[0].props('label')).toBe('Option 2')
        })
      })
    })

    BddTest().when('no results for search', () => {
      beforeEach(async () => {
        await wrapper.setProps({ search: true })
        const input = wrapper.find('input')
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
      beforeEach(() => {
        wrapper.setProps({ selected: defaultOptions })
      })

      BddTest().then('isAllSelected should be true', () => {
        const vm = wrapper.vm as unknown as { isAllSelected: boolean }
        expect(vm.isAllSelected).toBe(true)
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
    let capturedHandler: ((e: MouseEvent) => void) | undefined

    beforeEach(async () => {
      vi.spyOn(document, 'addEventListener').mockImplementation((type, listener) => {
        if (type === 'click') {
          capturedHandler = listener as (e: MouseEvent) => void
        }
      })
      wrapper = mountWithProps({ isVisible: false })
      await wrapper.setProps({ isVisible: true })
      await nextTick()
    })

    BddTest().then('it should emit close', () => {
      const outsideEl = document.createElement('div')
      document.body.appendChild(outsideEl)
      capturedHandler!(new MouseEvent('click', { bubbles: true }) as MouseEvent)
      Object.defineProperty(MouseEvent.prototype, 'target', { value: outsideEl, configurable: true })
      const event = new MouseEvent('click', { bubbles: true })
      capturedHandler!(event)
      expect(wrapper.emitted('close')).toBeTruthy()
      outsideEl.remove()
    })

    BddTest().when('the click target is inside the collapse element', () => {
      BddTest().then('it should not emit close', () => {
        const collapseEl = wrapper.find(`#test-collapse-collapse`)
        const insideEl = document.createElement('span')
        collapseEl.element.appendChild(insideEl)

        const event = Object.assign(new MouseEvent('click', { bubbles: true }), {})
        Object.defineProperty(event, 'target', { value: insideEl, configurable: true })
        capturedHandler!(event)

        expect(wrapper.emitted('close')).toBeFalsy()
        insideEl.remove()
      })
    })
  })

  BddTest().when('the user clicks inside the component', () => {
    let capturedHandler: ((e: MouseEvent) => void) | undefined

    beforeEach(async () => {
      vi.spyOn(document, 'addEventListener').mockImplementation((type, listener) => {
        if (type === 'click') {
          capturedHandler = listener as (e: MouseEvent) => void
        }
      })
      wrapper = mountWithProps({ isVisible: false })
      await wrapper.setProps({ isVisible: true })
      await nextTick()
    })

    BddTest().then('it should not emit close', () => {
      const collapseEl = wrapper.find(`#test-collapse-collapse`)
      const insideEl = document.createElement('span')
      collapseEl.element.appendChild(insideEl)

      const event = Object.assign(new MouseEvent('click', { bubbles: true }), {})
      Object.defineProperty(event, 'target', { value: insideEl, configurable: true })
      capturedHandler!(event)

      expect(wrapper.emitted('close')).toBeFalsy()
      insideEl.remove()
    })

    BddTest().and('skipNextClickOutside is true (first click after becoming visible)', () => {
      BddTest().then('it should not emit close and clear the flag', () => {
        const outsideEl = document.createElement('div')
        document.body.appendChild(outsideEl)
        const event = Object.assign(new MouseEvent('click', { bubbles: true }), {})
        Object.defineProperty(event, 'target', { value: outsideEl, configurable: true })

        capturedHandler!(event)
        expect(wrapper.emitted('close')).toBeFalsy()

        capturedHandler!(event)
        expect(wrapper.emitted('close')).toBeTruthy()
        outsideEl.remove()
      })
    })
  })
})
