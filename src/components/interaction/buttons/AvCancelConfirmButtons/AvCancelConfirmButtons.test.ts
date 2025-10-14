import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect } from 'vitest'
import { AvButtonStub } from '@/components/interaction/buttons/AvButton/AvButton.stub'
import AvCancelConfirmButtons from '@/components/interaction/buttons/AvCancelConfirmButtons/AvCancelConfirmButtons.vue'
import { BddTest } from '@/tests/utils'

BddTest().given('an AvCancelConfirmButtons component', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvCancelConfirmButtons>>

  const stubs = { AvButton: AvButtonStub }

  BddTest().and('no props are passed', () => {
    beforeEach(() => {
      wrapper = mount(AvCancelConfirmButtons, { global: { stubs } })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should not render anything', () => {
        expect(wrapper.findAllComponents({ name: 'AvButton' })).toHaveLength(0)
      })
    })
  })

  BddTest().and('a cancel label is passed', () => {
    beforeEach(() => {
      wrapper = mount(AvCancelConfirmButtons, {
        props: { cancelLabel: 'Cancel' },
        global: { stubs }
      })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should only render the cancel button', () => {
        const buttons = wrapper.findAllComponents({ name: 'AvButton' })
        expect(buttons).toHaveLength(1)
        expect(buttons[0].text()).toContain('Cancel')
      })

      BddTest().and('the cancel button is clicked', () => {
        BddTest().then('it should emit cancel', async () => {
          const buttons = wrapper.findAllComponents({ name: 'AvButton' })
          await buttons[0].trigger('click')
          expect(wrapper.emitted('cancel')).toBeDefined()
        })
      })
    })
  })

  BddTest().and('a confirm label is passed', () => {
    beforeEach(() => {
      wrapper = mount(AvCancelConfirmButtons, {
        props: { confirmLabel: 'Confirm' },
        global: { stubs }
      })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should only render the confirm button', () => {
        const buttons = wrapper.findAllComponents({ name: 'AvButton' })
        expect(buttons).toHaveLength(1)
        expect(buttons[0].text()).toContain('Confirm')
      })

      BddTest().and('the confirm button is clicked', () => {
        BddTest().then('it should emit confirm', async () => {
          const buttons = wrapper.findAllComponents({ name: 'AvButton' })
          await buttons[0].trigger('click')
          expect(wrapper.emitted('confirm')).toBeDefined()
        })
      })
    })
  })

  BddTest().and('cancel and confirm labels are passed', () => {
    beforeEach(() => {
      wrapper = mount(AvCancelConfirmButtons, {
        props: { cancelLabel: 'Cancel', confirmLabel: 'Confirm' },
        global: { stubs }
      })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should render the cancel and the confirm buttons', () => {
        const buttons = wrapper.findAllComponents({ name: 'AvButton' })
        expect(buttons).toHaveLength(2)
        expect(buttons[0].text()).toContain('Cancel')
        expect(buttons[1].text()).toContain('Confirm')
      })

      BddTest().and('the cancel button is clicked', () => {
        BddTest().then('it should emit cancel', async () => {
          const buttons = wrapper.findAllComponents({ name: 'AvButton' })
          await buttons[0].trigger('click')
          expect(wrapper.emitted('cancel')).toBeDefined()
        })
      })

      BddTest().and('the confirm button is clicked', () => {
        BddTest().then('it should emit confirm', async () => {
          const buttons = wrapper.findAllComponents({ name: 'AvButton' })
          await buttons[1].trigger('click')
          expect(wrapper.emitted('confirm')).toBeDefined()
        })
      })
    })
  })

  BddTest().and('cancel and confirm labels are passed with both disabled props', () => {
    beforeEach(() => {
      wrapper = mount(AvCancelConfirmButtons, {
        props: {
          cancelLabel: 'Cancel',
          confirmLabel: 'Confirm',
          cancelDisabled: true,
          confirmDisabled: true
        },
        global: { stubs }
      })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should render the cancel and the confirm buttons in disabled state', () => {
        const buttons = wrapper.findAllComponents({ name: 'AvButton' })
        expect(buttons).toHaveLength(2)
        expect(buttons[0].text()).toContain('Cancel')
        expect(buttons[1].text()).toContain('Confirm')
        expect(buttons[0].props('disabled')).toBe(true)
        expect(buttons[1].props('disabled')).toBe(true)
      })
    })
  })

  BddTest().and('cancel and confirm labels are passed with both loading props', () => {
    beforeEach(() => {
      wrapper = mount(AvCancelConfirmButtons, {
        props: {
          cancelLabel: 'Cancel',
          confirmLabel: 'Confirm',
          cancelIsLoading: true,
          confirmIsLoading: true
        },
        global: { stubs }
      })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should render the cancel and the confirm buttons in disabled state', () => {
        const buttons = wrapper.findAllComponents({ name: 'AvButton' })
        expect(buttons).toHaveLength(2)
        expect(buttons[0].text()).toContain('Cancel')
        expect(buttons[1].text()).toContain('Confirm')
        expect(buttons[0].props('isLoading')).toBe(true)
        expect(buttons[1].props('isLoading')).toBe(true)
      })
    })
  })
})
