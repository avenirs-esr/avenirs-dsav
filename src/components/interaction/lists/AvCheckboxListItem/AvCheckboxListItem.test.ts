import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect } from 'vitest'
import AvCheckboxListItem, { type AvCheckboxListItemProps } from '@/components/interaction/lists/AvCheckboxListItem/AvCheckboxListItem.vue'
import { AvCheckboxStub, AvListItemStub } from '@/tests'
import { BddTest } from '@/tests/utils'

BddTest().given('an AvCheckboxListItem component', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvCheckboxListItem>>

  const props: AvCheckboxListItemProps & { modelValue: string[] } = {
    id: 'test-item',
    listId: 'test-list',
    label: 'Test Item',
    modelValue: [],
  }

  const stubs = {
    AvCheckbox: AvCheckboxStub,
    AvListItem: AvListItemStub
  }

  BddTest().when('the component is mounted', () => {
    beforeEach(() => {
      wrapper = mount(AvCheckboxListItem, { props, global: { stubs } })
    })

    BddTest().then('it should render an AvListItem', () => {
      expect(wrapper.findComponent(AvListItemStub).exists()).toBe(true)
    })

    BddTest().then('it should render an AvCheckbox', () => {
      expect(wrapper.findComponent(AvCheckboxStub).exists()).toBe(true)
    })

    BddTest().and('the user clicks the checkbox', () => {
      beforeEach(async () => {
        wrapper.findComponent(AvCheckboxStub).vm.$emit('update:modelValue', ['test-item'])
      })

      BddTest().then('it should emit an update:modelValue event with the item id', () => {
        expect(wrapper.emitted('update:modelValue')).toBeTruthy()
        expect(wrapper.emitted('update:modelValue')![0][0]).toEqual(['test-item'])
      })
    })

    BddTest().and('focusing the checkbox', () => {
      let checkboxInput: HTMLInputElement
      beforeEach(() => {
        wrapper = mount(AvCheckboxListItem, { props, global: { stubs }, attachTo: document.body })
        checkboxInput = wrapper.find('input[type="checkbox"]').element as HTMLInputElement
        checkboxInput.focus()
      })

      BddTest().then('the checkbox should be focused', () => {
        expect(document.activeElement).toBe(checkboxInput)
      })
    })
  })
})

BddTest().given('multiple AvCheckboxListItem mounted in the DOM', () => {
  let wrappers: VueWrapper<InstanceType<typeof AvCheckboxListItem>>[]
  const baseProps = (id: string) => ({
    id,
    listId: 'list',
    label: `Item ${id}`,
    modelValue: [],
  })
  const stubs = {
    AvCheckbox: AvCheckboxStub,
    AvListItem: AvListItemStub
  }

  BddTest().when('the components are mounted with attachTo: document.body', () => {
    beforeEach(() => {
      wrappers = [
        mount(AvCheckboxListItem, { props: baseProps('a'), global: { stubs }, attachTo: document.body }),
        mount(AvCheckboxListItem, { props: baseProps('b'), global: { stubs }, attachTo: document.body }),
        mount(AvCheckboxListItem, { props: baseProps('c'), global: { stubs }, attachTo: document.body }),
      ]
    })
    afterEach(() => {
      wrappers.forEach(w => w.unmount())
    })

    BddTest().and('the focus is on the first checkbox', () => {
      let firstInput: HTMLInputElement
      beforeEach(() => {
        firstInput = wrappers[0].find('input[type="checkbox"]').element as HTMLInputElement
        firstInput.focus()
      })

      BddTest().then('ArrowDown focuses the next checkbox', async () => {
        const secondInput = wrappers[1].find('input[type="checkbox"]').element as HTMLInputElement
        await wrappers[0].find('input[type="checkbox"]').trigger('keydown', { key: 'ArrowDown' })
        expect(document.activeElement).toBe(secondInput)
      })

      BddTest().then('ArrowUp focuses the last checkbox', async () => {
        const lastInput = wrappers[2].find('input[type="checkbox"]').element as HTMLInputElement
        await wrappers[0].find('input[type="checkbox"]').trigger('keydown', { key: 'ArrowUp' })
        expect(document.activeElement).toBe(lastInput)
      })
    })
  })
})
