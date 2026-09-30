import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect, vi } from 'vitest'
import { h, type VNode } from 'vue'
import AvToggle, { type AvToggleProps } from '@/components/interaction/toggles/AvToggle/AvToggle.vue'
import { AvTooltipStub } from '@/tests'
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

  const stubs = {
    AvTooltip: AvTooltipStub
  }

  const mountWith = (
    props: Partial<AvToggleProps> = {},
    options: {
      attrs?: Record<string, unknown>
      slots?: {
        default?: (props: { active: boolean }) => VNode
      }
    } = {}
  ) => {
    wrapper = mount(AvToggle, {
      props,
      ...options,
      global: { stubs },
    })
  }

  const getTextContent = () => wrapper.find('.toggle-text span')
  const getText = () => wrapper.find('.toggle-text')
  const getToggle = () => wrapper.find('.toggle')
  const getImage = () => wrapper.find('image')
  const getInput = () => wrapper.find('input')
  const getLabelContent = () => wrapper.find('label > span')
  const getLabel = () => wrapper.find('label')
  const getTooltip = () => wrapper.findComponent(AvTooltipStub)

  const vModel = (value = false) => ({
    'modelValue': value,
    'onUpdate:modelValue': (newValue: boolean) => wrapper.setProps({ modelValue: newValue }),
  })

  BddTest().and('with default props', () => {
    beforeEach(() => {
      mountWith({
        modelValue: false,
        description: 'test description',
        name: 'status-toggle',
      })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should render the default inactive text', () => {
        expect(getTextContent().text()).toBe('Off')
      })

      BddTest().then('it should render the inactive text with the regular style', () => {
        const classes = getTextContent().classes()
        expect(classes).toContain('caption-regular')
        expect(classes).not.toContain('caption-bold')
      })

      BddTest().then('the input should be an unchecked checkbox', () => {
        expect((getInput().element as HTMLInputElement).checked).toBe(false)
      })

      BddTest().then('the input should have the given name', () => {
        expect(getInput().attributes('name')).toBe('status-toggle')
      })

      BddTest().then('it should render the description text', () => {
        expect(wrapper.text()).toContain('test description')
      })

      BddTest().then('it should render the inactive svg', () => {
        expect(getImage().attributes('href')).toBe('toggle-inactive.svg')
      })

      BddTest().then('it should not be disabled', () => {
        const input = getInput()
        expect(getLabel().classes()).not.toContain('av-toggle--disabled')
        expect(input.attributes('disabled')).toBeUndefined()
        expect(input.attributes('aria-disabled')).toBe('false')
      })
    })

    BddTest().when('the input is checked', () => {
      BddTest().then('it should emit an update:modelValue event with true', async () => {
        await getInput().setValue(true)

        expect(wrapper.emitted('update:modelValue')).toEqual([[true]])
      })
    })
  })

  BddTest().and('without v-model', () => {
    beforeEach(() => {
      mountWith({ description: 'no v-model' })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should be inactive by default', () => {
        expect((getInput().element as HTMLInputElement).checked).toBe(false)
        expect(getTextContent().text()).toBe('Off')
      })
    })

    BddTest().when('the input is checked', () => {
      BddTest().then('it should keep its own state and become active', async () => {
        await getInput().setValue(true)

        expect(getTextContent().text()).toBe('On')
        expect(getImage().attributes('href')).toBe('toggle-active.svg')
      })
    })
  })

  BddTest().and('bound to a parent through v-model', () => {
    beforeEach(() => {
      mountWith({ ...vModel(false), description: 'v-model' })
    })

    BddTest().when('the input is checked', () => {
      BddTest().then('it should switch to the active state', async () => {
        await getInput().setValue(true)

        expect(wrapper.emitted('update:modelValue')).toEqual([[true]])
        expect(getTextContent().text()).toBe('On')
        expect(getImage().attributes('href')).toBe('toggle-active.svg')
      })
    })

    BddTest().when('the input is checked then unchecked', () => {
      BddTest().then('it should go back to the inactive state', async () => {
        const input = getInput()

        await input.setValue(true)
        await input.setValue(false)

        expect(wrapper.emitted('update:modelValue')).toEqual([[true], [false]])
        expect(getTextContent().text()).toBe('Off')
        expect(getImage().attributes('href')).toBe('toggle-inactive.svg')
      })
    })
  })

  BddTest().and('initially active', () => {
    beforeEach(() => {
      mountWith({ modelValue: true, description: 'test description' })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should render the default active text', () => {
        expect(getTextContent().text()).toBe('On')
      })

      BddTest().then('it should render the active text with the bold style', () => {
        const classes = getTextContent().classes()
        expect(classes).toContain('caption-bold')
        expect(classes).not.toContain('caption-regular')
      })

      BddTest().then('the input should be checked', () => {
        expect((getInput().element as HTMLInputElement).checked).toBe(true)
      })

      BddTest().then('it should render the active svg', () => {
        expect(getImage().attributes('href')).toBe('toggle-active.svg')
      })
    })

    BddTest().when('the input is unchecked', () => {
      BddTest().then('it should emit an update:modelValue event with false', async () => {
        await getInput().setValue(false)

        expect(wrapper.emitted('update:modelValue')).toEqual([[false]])
      })
    })
  })

  BddTest().and('without description', () => {
    beforeEach(() => {
      mountWith()
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should not render any description', () => {
        expect(getLabelContent().exists()).toBe(false)
      })
    })
  })

  BddTest().and('disabled and inactive', () => {
    beforeEach(() => {
      mountWith({ modelValue: false, description: 'test description', disabled: true })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should have the disabled classes and a disabled input', () => {
        const input = getInput()
        expect(getLabel().classes()).toContain('av-toggle--disabled')
        expect(getToggle().classes()).toContain('toggle--disabled')
        expect(input.attributes('disabled')).toBeDefined()
        expect(input.attributes('aria-disabled')).toBe('true')
      })

      BddTest().then('it should render the inactive disabled svg', () => {
        expect(getImage().attributes('href')).toBe('toggle-inactive-disabled.svg')
      })
    })
  })

  BddTest().and('disabled and active', () => {
    beforeEach(() => {
      mountWith({ modelValue: true, description: 'test description', disabled: true })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should render the active disabled svg', () => {
        expect(getImage().attributes('href')).toBe('toggle-active-disabled.svg')
      })
    })
  })

  BddTest().and('without id', () => {
    beforeEach(() => {
      mountWith({ description: 'noId' })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should generate an id for the input', () => {
        expect(getInput().attributes('id')).toMatch(/^toggle-.+/)
      })

      BddTest().then('it should link the label to the input', () => {
        const label = getLabel()
        const input = getInput()
        const inputId = input.attributes('id')

        expect(label.attributes('for')).toBe(inputId)
        expect(label.attributes('id')).toBe(`${inputId}-label`)
        expect(input.attributes('aria-describedby')).toBe(getLabel().attributes('id'))
      })

      BddTest().then('it should generate the test ids of the input and of the label', () => {
        expect(getInput().attributes('data-testid')).toMatch(/^av-toggle-.+-input$/)
        expect(getLabel().attributes('data-testid')).toMatch(/^av-toggle-.+-label$/)
      })
    })

    BddTest().when('another toggle is mounted', () => {
      BddTest().then('it should not share its generated id with the other one', () => {
        const firstInputId = getInput().attributes('id')

        mountWith({ description: 'other' })

        expect(getInput().attributes('id')).not.toBe(firstInputId)

        wrapper.unmount()
      })
    })
  })

  BddTest().and('with an id', () => {
    beforeEach(() => {
      mountWith({ id: 'my-toggle', description: 'with id' })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should use it as the id of the input', () => {
        expect(getInput().attributes('id')).toBe('my-toggle')
      })

      BddTest().then('it should link the label to the input', () => {
        const label = getLabel()
        expect(label.attributes('for')).toBe('my-toggle')
        expect(label.attributes('id')).toBe('my-toggle-label')
        expect(getInput().attributes('aria-describedby')).toBe('my-toggle-label')
      })

      BddTest().then('it should use it as the base of the test ids', () => {
        expect(getInput().attributes('data-testid')).toBe('my-toggle-input')
        expect(getLabel().attributes('data-testid')).toBe('my-toggle-label')
      })
    })
  })

  BddTest().and('with a data-testid attribute', () => {
    beforeEach(() => {
      mountWith({ id: 'my-toggle' }, { attrs: { 'data-testid': 'custom-toggle' } })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should use it as the base of the test ids, even when an id is given', () => {
        expect(getInput().attributes('data-testid')).toBe('custom-toggle-input')
        expect(getLabel().attributes('data-testid')).toBe('custom-toggle-label')
      })
    })
  })

  BddTest().and('without tooltip', () => {
    beforeEach(() => {
      mountWith()
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should disable the tooltip', () => {
        expect(getTooltip().props()).toEqual({ content: '', disabled: true, forceFocusable: false })
      })
    })
  })

  BddTest().and('with a tooltip', () => {
    beforeEach(() => {
      mountWith({ tooltip: 'Toggle info' })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should give the tooltip to AvTooltip', () => {
        expect(getTooltip().props()).toEqual({ content: 'Toggle info', disabled: false, forceFocusable: false })
      })
    })
  })

  BddTest().and('disabled with a tooltip only', () => {
    beforeEach(() => {
      mountWith({ tooltip: 'Toggle info', disabled: true })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should not display the regular tooltip', () => {
        expect(getTooltip().props()).toEqual({ content: '', disabled: true, forceFocusable: false })
      })
    })
  })

  BddTest().and('disabled with a disabledTooltip', () => {
    beforeEach(() => {
      mountWith({ tooltip: 'Toggle info', disabled: true, disabledTooltip: 'Not available' })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should display the disabledTooltip and make the toggle focusable', () => {
        expect(getTooltip().props()).toEqual({ content: 'Not available', disabled: false, forceFocusable: true })
      })
    })
  })

  BddTest().and('disabled with disabledTooltip set to true', () => {
    beforeEach(() => {
      mountWith({ tooltip: 'Toggle info', disabled: true, disabledTooltip: true })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should keep displaying the regular tooltip and make the toggle focusable', () => {
        expect(getTooltip().props()).toEqual({ content: 'Toggle info', disabled: false, forceFocusable: true })
      })
    })
  })

  BddTest().and('disabled with disabledTooltip set to true but without tooltip', () => {
    beforeEach(() => {
      mountWith({ disabled: true, disabledTooltip: true })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should disable the tooltip and not make the toggle focusable', () => {
        expect(getTooltip().props()).toEqual({ content: '', disabled: true, forceFocusable: false })
      })
    })
  })

  BddTest().and('enabled with both a tooltip and a disabledTooltip', () => {
    beforeEach(() => {
      mountWith({ tooltip: 'Toggle info', disabledTooltip: 'Not available' })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should ignore the disabledTooltip', () => {
        expect(getTooltip().props()).toEqual({ content: 'Toggle info', disabled: false, forceFocusable: false })
      })
    })
  })

  BddTest().and('with a custom default slot', () => {
    beforeEach(() => {
      mountWith(vModel(false), {
        slots: {
          default: ({ active }) => h('span', { class: 'custom-status' }, active ? 'Yes' : 'No'),
        },
      })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should render the slot instead of the default text', () => {
        expect(getText().exists()).toBe(false)
        expect(wrapper.find('.custom-status').text()).toBe('No')
      })
    })

    BddTest().when('the input is checked', () => {
      BddTest().then('it should give the new state to the slot', async () => {
        await getInput().setValue(true)
        expect(wrapper.find('.custom-status').text()).toBe('Yes')
      })
    })
  })
})
