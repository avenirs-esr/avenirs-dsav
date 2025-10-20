import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach } from 'vitest'
import AvSearchBar, { type AvSearchBarProps } from '@/components/interaction/inputs/AvSearchBar/AvSearchBar.vue'
import { AvButtonStub, BddTest } from '@/tests'

BddTest().given('a search bar', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvSearchBar>>

  const stubs = {
    AvInput: {
      name: 'AvInput',
      props: {
        label: String,
        modelValue: String,
        placeholder: String,
      },
      emits: ['update:modelValue'],
      template: `
        <input
          class="av-input"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
        />
      `
    },
    AvButton: AvButtonStub
  }

  BddTest().and('given no props', () => {
    BddTest().when('the component is mounted', () => {
      beforeEach(() => {
        wrapper = mount(AvSearchBar, { global: { stubs } })
      })

      BddTest().then('it should render with default props', () => {
        const input = wrapper.findComponent({ name: 'AvInput' })
        const button = wrapper.findComponent({ name: 'AvButton' })

        expect(input.exists()).toBe(true)
        expect(input.props('label')).toBe('Recherche')
        expect(input.props('placeholder')).toBe('Rechercher...')

        expect(button.exists()).toBe(true)
        expect(button.props('label')).toBe('Recherche')
      })

      BddTest().and('some text is typed', () => {
        const newInputValue = 'This is a new value for the input'

        beforeEach(async () => {
          await wrapper.findComponent({ name: 'AvInput' }).setValue(newInputValue)
        })

        BddTest().then('it should emit update:modelValue', () => {
          expect(wrapper.emitted('update:modelValue')).toBeTruthy()
          expect(wrapper.emitted('update:modelValue')![0][0]).toEqual(newInputValue)
        })
      })

      BddTest().and('all the text is deleted or undefined', () => {
        const newInputValue = undefined

        beforeEach(async () => {
          await wrapper.findComponent({ name: 'AvInput' }).setValue(newInputValue)
        })

        BddTest().then('it should emit update:modelValue', () => {
          expect(wrapper.emitted('update:modelValue')).toBeTruthy()
          expect(wrapper.emitted('update:modelValue')![0][0]).toEqual('')
        })
      })
    })
  })

  BddTest().and('given a modelValue', () => {
    const props: AvSearchBarProps = { modelValue: 'new model value' }
    beforeEach(() => {
      wrapper = mount(AvSearchBar, { props, global: { stubs } })
    })

    BddTest().when('clicking on the button', () => {
      beforeEach(async () => {
        await wrapper.findComponent({ name: 'AvButton' }).trigger('click')
      })

      BddTest().then('it should emit search with the modelValue', () => {
        expect(wrapper.emitted('search')).toBeTruthy()
        expect(wrapper.emitted('search')![0][0]).toEqual(props.modelValue)
      })
    })
  })
})
