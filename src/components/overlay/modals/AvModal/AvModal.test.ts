import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect } from 'vitest'
import { nextTick } from 'vue'
import { AvButtonStub } from '@/components/interaction/buttons/AvButton/AvButton.stub'
import AvModal, { type AvModalProps } from '@/components/overlay/modals/AvModal/AvModal.vue'
import { BddTest, DsfrModalStub } from '@/tests'

BddTest().given('an AvModal', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvModal>>

  const stubs = {
    AvButton: AvButtonStub,
    DsfrModal: DsfrModalStub,
    Teleport: true
  }

  const props: AvModalProps = {
    opened: true,
    closeButtonLabel: 'Close'
  }

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
      const btn = wrapper.findComponent({ name: 'AvButton' })
      expect(btn.exists()).toBe(true)
      expect(btn.props('label')).toBe(props.closeButtonLabel)
      expect(btn.props('variant')).toBe('DEFAULT')
    })

    BddTest().then('it should emit "close" when the button is clicked', async () => {
      const btn = wrapper.findComponent({ name: 'AvButton' })
      expect(btn.exists()).toBe(true)
      await btn.trigger('click')
      expect(wrapper.emitted('close')).toHaveLength(1)
    })

    BddTest().then('it should emit "close" when Escape is pressed', async () => {
      const modal = wrapper.findComponent({ name: 'DsfrModal' })
      modal.vm.triggerEscape()
      expect(wrapper.emitted('close')).toHaveLength(1)
    })

    BddTest().then('it should pass isLoading to the button', async () => {
      wrapper.setProps({ isLoading: true })
      await nextTick()
      const btn = wrapper.findComponent({ name: 'AvButton' })
      expect(btn.props('isLoading')).toBe(true)
    })
  })
})
