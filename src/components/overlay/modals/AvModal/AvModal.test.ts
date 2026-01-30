import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect } from 'vitest'
import { nextTick } from 'vue'
import { AvCancelConfirmButtonsStub } from '@/components/interaction/buttons/AvCancelConfirmButtons/AvCancelConfirmButtons.stub'
import AvModal, { type AvModalProps } from '@/components/overlay/modals/AvModal/AvModal.vue'
import { BddTest } from '@/tests/utils'

BddTest().given('an AvModal', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvModal>>

  const stubs = {
    AvCancelConfirmButtons: AvCancelConfirmButtonsStub,
    Teleport: true,
    FocusTrap: {
      name: 'FocusTrap',
      template: '<div><slot /></div>',
    },
  }

  const props: AvModalProps = {
    opened: true,
    closeButtonLabel: 'Close'
  }

  const propsWithConfirm: AvModalProps = {
    opened: true,
    closeButtonLabel: 'Close',
    confirmButtonLabel: 'Confirm'
  }

  BddTest().and('a confirm label is passed', () => {
    BddTest().when('the modal is mounted', () => {
      beforeEach(() => {
        wrapper = mount(AvModal, {
          props: propsWithConfirm,
          slots: {
            default: '<div class="content">Hello</div>',
            header: '<div class="header-slot">Header</div>',
            footer: '<div class="footer-slot">Footer</div>'
          },
          global: { stubs }
        })
      })

      BddTest().then('it should render the confirm button', () => {
        const buttons = wrapper.findComponent({ name: 'AvCancelConfirmButtons' })
        expect(buttons.exists()).toBe(true)
        expect(buttons.text()).toContain(propsWithConfirm.confirmButtonLabel)
      })
    })
  })

  BddTest().when('the modal is mounted', () => {
    beforeEach(() => {
      wrapper = mount(AvModal, {
        props,
        slots: {
          default: '<div class="content">Hello</div>',
          header: '<div class="header-slot">Header</div>',
          footer: '<div class="footer-slot">Footer</div>'
        },
        global: { stubs }
      })
    })

    BddTest().then('it should render the slots', () => {
      expect(wrapper.find('.header-slot').exists()).toBe(true)
      expect(wrapper.find('.content').exists()).toBe(true)
      expect(wrapper.find('.footer-slot').exists()).toBe(true)
    })

    BddTest().then('it should render the close button with correct props', () => {
      const buttons = wrapper.findComponent({ name: 'AvCancelConfirmButtons' })
      expect(buttons.exists()).toBe(true)
      expect(buttons.text()).toBe(props.closeButtonLabel)
    })

    BddTest().then('it should emit "close" when the close button is clicked', async () => {
      const buttons = wrapper.findComponent({ name: 'AvCancelConfirmButtons' })
      expect(buttons.exists()).toBe(true)
      await buttons.find('.cancel').trigger('click')
      expect(wrapper.emitted('close')).toHaveLength(1)
    })

    BddTest().then('it should emit "close" when Escape is pressed', async () => {
      const modal = wrapper.find('dialog')
      await modal.trigger('keydown.esc')
      expect(wrapper.emitted('close')).toHaveLength(1)
    })

    BddTest().then('it should emit "confirm" when the confirm button is clicked', async () => {
      const buttons = wrapper.findComponent({ name: 'AvCancelConfirmButtons' })
      expect(buttons.exists()).toBe(true)
      await buttons.find('.confirm').trigger('click')
      expect(wrapper.emitted('confirm')).toHaveLength(1)
    })

    BddTest().then('it should pass isLoading to the button', async () => {
      wrapper.setProps({ isLoading: true })
      await nextTick()
      const btn = wrapper.findComponent({ name: 'AvCancelConfirmButtons' })
      expect(btn.props('cancelIsLoading')).toBe(true)
      expect(btn.props('confirmIsLoading')).toBe(true)
    })
  })

  BddTest().and('the prop isAlert is true', () => {
    BddTest().when('the modal is mounted', () => {
      beforeEach(() => {
        wrapper = mount(AvModal, {
          props: { ...props, isAlert: true },
          global: { stubs }
        })
      })

      BddTest().then('it should have role alertdialog', () => {
        const modal = wrapper.find('dialog')
        expect(modal.attributes('role')).toBe('alertdialog')
      })
    })
  })

  BddTest().and('the prop isAlert is false', () => {
    BddTest().when('the modal is mounted', () => {
      beforeEach(() => {
        wrapper = mount(AvModal, {
          props: { ...props, isAlert: false },
          global: { stubs }
        })
      })

      BddTest().then('it should have role dialog', () => {
        const modal = wrapper.find('dialog')
        expect(modal.attributes('role')).toBe('dialog')
      })
    })
  })

  BddTest().and('the modal is opened', () => {
    BddTest().when('the component is mounted', () => {
      beforeEach(() => {
        wrapper = mount(AvModal, {
          props,
          global: { stubs }
        })
      })

      BddTest().then('the modal should be visible', () => {
        expect(wrapper.find('dialog').exists()).toBe(true)
      })

      BddTest().then('it should have the body class', () => {
        expect(document.body.classList.contains('modal-open')).toBe(true)
      })

      BddTest().and('the component is unmounted', () => {
        BddTest().when('the component is unmounted', () => {
          beforeEach(() => {
            wrapper.unmount()
          })

          BddTest().then('it should remove the body class', () => {
            expect(document.body.classList.contains('modal-open')).toBe(false)
          })
        })
      })
    })
  })

  BddTest().and('the modal is closed', () => {
    BddTest().when('the component is mounted', () => {
      beforeEach(() => {
        wrapper = mount(AvModal, {
          props: { ...props, opened: false },
          global: { stubs }
        })
      })

      BddTest().then('the modal should not be visible', () => {
        expect(wrapper.find('dialog').exists()).toBe(false)
      })

      BddTest().then('it should not have the body class', () => {
        expect(document.body.classList.contains('modal-open')).toBe(false)
      })

      BddTest().and('the modal is opened by prop change', () => {
        beforeEach(async () => {
          await wrapper.setProps({ opened: true })
        })

        BddTest().then('the modal should be visible', () => {
          expect(wrapper.find('dialog').exists()).toBe(true)
        })

        BddTest().then('it should have the body class', () => {
          expect(document.body.classList.contains('modal-open')).toBe(true)
        })
      })
    })
  })
})
