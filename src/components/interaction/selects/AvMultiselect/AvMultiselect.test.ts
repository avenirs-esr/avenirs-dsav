import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect } from 'vitest'
import { AvVIconStub } from '@/components/base'
import AvMultiselect, { type AvMultiselectProps } from '@/components/interaction/selects/AvMultiselect/AvMultiselect.vue'
import { BddTest } from '@/tests/utils'
import { MDI_ICONS } from '@/tokens/icons'

const stubs = {
  AvVIcon: AvVIconStub,
  DsfrMultiselect: {
    name: 'DsfrMultiselect',
    props: [
      'title',
      'modelValue',
      'options',
      'label',
      'required',
      'disabled',
      'hint',
      'name',
      'selectId',
      'errorMessage',
      'successMessage',
      'defaultUnselectedText',
      'selectedText',
      'selectAll',
      'selectAllLabel',
      'search',
      'dense'
    ],
    emits: ['update:model-value'],
    template: `
      <div class="dsfr-multiselect">
        <slot name="checkbox-label" v-for="option in options" :option="option">
          <div>{{ option.text }}</div>
        </slot>
        <select
          multiple
          @change="$emit('update:model-value', Array.from($event.target.selectedOptions).map(o => o.value))"
        >
          <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
            :selected="modelValue.includes(option.value)"
          >
            {{ option.text }}
          </option>
        </select>
      </div>
    `
  }
}

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' }
]

const defaultProps = {
  modelValue: [],
  defaultUnselectedText: 'Select options',
  options,
  label: 'My multiselect'
}

function mountWithProps (props = {}) {
  return mount(AvMultiselect, {
    props: { ...defaultProps, ...props },
    global: { stubs }
  })
}

BddTest().given('a multiselect component', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvMultiselect>>

  BddTest().and('with default props', () => {
    beforeEach(() => {
      wrapper = mountWithProps()
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should render the default title', () => {
        expect(wrapper.findComponent({ name: 'DsfrMultiselect' }).props('title')).toBe('Select options')
      })

      BddTest().then('it should display all available options', () => {
        expect(wrapper.text()).toContain('Option 1')
        expect(wrapper.text()).toContain('Option 2')
        expect(wrapper.text()).toContain('Option 3')
      })

      BddTest().then('it should render options checkboxes', () => {
        const avvicons = wrapper.findAllComponents({ name: 'AvVIcon' })
        const checkboxes = avvicons.filter(icon => icon.classes().includes('option-checkbox'))
        expect(checkboxes).toHaveLength(3)
      })

      BddTest().then('it should not render options with icon', () => {
        const avvicons = wrapper.findAllComponents({ name: 'AvVIcon' })
        const optionicons = avvicons.filter(icon => icon.classes().includes('option-icon'))
        expect(optionicons).toHaveLength(0)
      })
    })

    BddTest().when('the user selects multiple values', () => {
      BddTest().then('it should emit update:modelValue with selected values', async () => {
        await wrapper.find('select').setValue(['1', '2'])
        expect(wrapper.emitted('update:modelValue')).toBeTruthy()
        expect(wrapper.emitted('update:modelValue')![0]).toEqual([[
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' }
        ]])
      })

      BddTest().then('it should use the computed title based on selection count', async () => {
        wrapper.setProps({ modelValue: [{ label: 'Option 1', value: 1 }, { label: 'Option 2', value: 2 }] })
        await wrapper.vm.$nextTick()
        expect(wrapper.findComponent({ name: 'DsfrMultiselect' }).props('title'))
          .toBe('2 options sélectionnées')
      })
    })
  })

  BddTest().and('with a non-empty modelValue', () => {
    beforeEach(() => {
      wrapper = mountWithProps({ modelValue: ['2'] })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should use the computed title based on selection count', () => {
        expect(wrapper.findComponent({ name: 'DsfrMultiselect' }).props('title'))
          .toBe('1 option sélectionnée')
      })
    })
  })

  BddTest().and('with selectedText prop provided', () => {
    beforeEach(() => {
      wrapper = mountWithProps({ modelValue: ['1', '2'], selectedText: 'Plusieurs options sélectionnées' })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should display the custom selectedText', () => {
        expect(wrapper.findComponent({ name: 'DsfrMultiselect' }).props('title')).toBe('Plusieurs options sélectionnées')
      })
    })
  })

  BddTest().and('with additional props', () => {
    const customProps: AvMultiselectProps = {
      modelValue: [{ label: '1', value: '1' }],
      label: 'Mon label',
      selectId: 'mon-id',
      disabled: true,
      hint: 'Indice',
      name: 'monNom',
      successMessage: 'Bravo',
      errorMessage: 'Erreur',
      selectAll: true,
      selectAllLabel: ['Tout sélectionner', 'Tout désélectionner'],
      search: true,
      dense: true,
      defaultUnselectedText: 'placeholder'
    }

    beforeEach(() => {
      wrapper = mountWithProps(customProps)
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should forward those props to DsfrMultiselect', () => {
        const dsfrSelect = wrapper.findComponent({ name: 'DsfrMultiselect' })
        for (const key of Object.keys(customProps)) {
          if (key === 'modelValue') {
            const expectedModelValue = customProps.modelValue.map(selected => selected.value)
            expect(dsfrSelect.props(key)).toEqual(expectedModelValue)
          }
          else {
            expect(dsfrSelect.props(key)).toEqual(customProps[key as keyof typeof customProps])
          }
        }
      })

      BddTest().then('it should render option 1 as a selected option', () => {
        const avvicons = wrapper.findAllComponents({ name: 'AvVIcon' })
        const checkboxes = avvicons.filter(icon => icon.classes().includes('option-checkbox'))
        const firstOptionIcon = checkboxes[0]
        expect(firstOptionIcon.exists()).toBe(true)
        expect(firstOptionIcon.props('name')).toBe(MDI_ICONS.CHECKBOX_MARKED)
        expect(firstOptionIcon.props('color')).toBe('var(--dark-background-primary1)')

        const firstOptionLabel = wrapper.findAll('span')[0]
        expect(firstOptionLabel.classes()).toContain('b2-bold')
        expect(firstOptionLabel.classes()).not.toContain('b2-regular')
      })

      BddTest().then('it should render option 2 as a unselected option', () => {
        const avvicons = wrapper.findAllComponents({ name: 'AvVIcon' })
        const checkboxes = avvicons.filter(icon => icon.classes().includes('option-checkbox'))
        const secondOptionIcon = checkboxes[1]
        expect(secondOptionIcon.props('name')).toBe(MDI_ICONS.CHECKBOX_BLANK_OUTLINE)
        expect(secondOptionIcon.props('color')).toBe('var(--icon)')

        const secondOptionLabel = wrapper.findAll('span')[1]
        expect(secondOptionLabel.classes()).toContain('b2-regular')
        expect(secondOptionLabel.classes()).not.toContain('b2-bold')
      })
    })
  })

  BddTest().and('with icon options', () => {
    const iconOptions = [
      { value: '1', label: 'Option 1', icon: 'mdi:home-variant' },
      { value: '2', label: 'Option 2', icon: 'mdi:home-variant' },
      { value: '3', label: 'Option 3', icon: 'mdi:home-variant' }
    ]

    beforeEach(() => {
      wrapper = mountWithProps({ options: iconOptions })
    })

    BddTest().then('it should render options checkboxes', () => {
      const avvicons = wrapper.findAllComponents({ name: 'AvVIcon' })
      const checkboxes = avvicons.filter(icon => icon.classes().includes('option-checkbox'))
      expect(checkboxes).toHaveLength(3)
    })

    BddTest().then('it should not render options with icon', () => {
      const avvicons = wrapper.findAllComponents({ name: 'AvVIcon' })
      const optionicons = avvicons.filter(icon => icon.classes().includes('option-icon'))
      expect(optionicons).toHaveLength(3)
    })
  })
})
