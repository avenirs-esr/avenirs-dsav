import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect } from 'vitest'
import ToolbarLinkPopover, { type ToolbarLinkPopoverProps } from '@/components/interaction/inputs/AvRichTextEditor/components/ToolbarLinkPopover/ToolbarLinkPopover.vue'
import { AvButtonStub, AvCancelConfirmButtonsStub, AvInputStub, AvPopoverStub, BddTest } from '@/tests'

BddTest().given('a toolbar link popover', () => {
  let wrapper: VueWrapper<InstanceType<typeof ToolbarLinkPopover>>

  const props: ToolbarLinkPopoverProps = {
    linkLabel: 'Lien',
    linkNameLabel: 'Nom du lien',
    linkNamePlaceholder: 'Entrez le nom du lien',
    linkUrlLabel: 'URL du lien',
    popoversCancelLabel: 'Annuler',
    popoversConfirmLabel: 'Confirmer'
  }

  const stubs = {
    AvButton: AvButtonStub,
    AvInput: AvInputStub,
    AvPopover: AvPopoverStub,
    AvCancelConfirmButtons: AvCancelConfirmButtonsStub
  }

  const getCancelConfirmButtons = () => wrapper.findComponent(AvCancelConfirmButtonsStub)
  const getTriggerButton = () => wrapper.findAllComponents(AvButtonStub).find(button => button.attributes('data-testid') === 'insert-link-button')
  const getLinkNameInput = () => wrapper.find('[data-testid="link-inputs-container"]').findAllComponents(AvInputStub)[0]
  const getLinkUrlInput = () => wrapper.find('[data-testid="link-inputs-container"]').findAllComponents(AvInputStub)[1]

  BddTest().when('the component is mounted', () => {
    beforeEach(() => {
      wrapper = mount(ToolbarLinkPopover, { props, global: { stubs } })
    })

    BddTest().then('the trigger button should be rendered with the correct label', () => {
      const triggerButton = getTriggerButton()
      expect(triggerButton).toBeDefined()
      expect(triggerButton?.props('label')).toBe(props.linkLabel)
    })

    BddTest().then('the popover should contain the correct inputs and buttons', () => {
      const triggerButton = getTriggerButton()
      triggerButton?.trigger('click')

      const linkNameInput = getLinkNameInput()
      expect(linkNameInput).toBeDefined()
      expect(linkNameInput?.props('label')).toBe(props.linkNameLabel)

      const linkUrlInput = getLinkUrlInput()
      expect(linkUrlInput).toBeDefined()
      expect(linkUrlInput?.props('label')).toBe(props.linkUrlLabel)

      const cancelConfirmButtons = getCancelConfirmButtons()
      expect(cancelConfirmButtons).toBeDefined()
      expect(cancelConfirmButtons?.props('cancelLabel')).toBe(props.popoversCancelLabel)
      expect(cancelConfirmButtons?.props('confirmLabel')).toBe(props.popoversConfirmLabel)
    })

    BddTest().and('the user fills the inputs and confirms', () => {
      const testLinkData = {
        name: 'Test Link',
        url: 'https://example.com/link'
      }

      beforeEach(() => {
        const triggerButton = getTriggerButton()
        triggerButton?.trigger('click')

        const linkNameInput = getLinkNameInput()
        const linkUrlInput = getLinkUrlInput()
        const cancelConfirmButtons = getCancelConfirmButtons()

        linkNameInput?.setValue(testLinkData.name)
        linkUrlInput?.setValue(testLinkData.url)
        cancelConfirmButtons?.vm.$emit('confirm')
      })

      BddTest().then('the component should emit the correct event with the link data', () => {
        expect(wrapper.emitted('confirm')).toBeTruthy()
        const emittedEvent = wrapper.emitted('confirm')?.[0][0]
        expect(emittedEvent).toEqual({
          name: testLinkData.name,
          url: testLinkData.url
        })
      })
    })

    BddTest().and('the user only fills the link url input and confirms', () => {
      const testLinkData = {
        url: 'https://example.com/link'
      }

      beforeEach(() => {
        const triggerButton = getTriggerButton()
        triggerButton?.trigger('click')

        const linkUrlInput = getLinkUrlInput()
        const cancelConfirmButtons = getCancelConfirmButtons()

        linkUrlInput?.setValue(testLinkData.url)
        cancelConfirmButtons?.vm.$emit('confirm')
      })

      BddTest().then('the component should emit the correct event with the link data and use the url as name', () => {
        expect(wrapper.emitted('confirm')).toBeTruthy()
        const emittedEvent = wrapper.emitted('confirm')?.[0][0]
        expect(emittedEvent).toEqual({
          name: testLinkData.url,
          url: testLinkData.url
        })
      })
    })
  })

  BddTest().when('the component is mounted with an initial name', () => {
    const initialName = 'Initial Link Name'

    beforeEach(() => {
      wrapper = mount(ToolbarLinkPopover, { props: { ...props, initialName }, global: { stubs } })
    })

    BddTest().then('the link name input should be pre-filled with the initial name', () => {
      const triggerButton = getTriggerButton()
      triggerButton?.trigger('click')

      const linkNameInput = getLinkNameInput()
      expect(linkNameInput).toBeDefined()
      expect(linkNameInput?.props('modelValue')).toBe(initialName)
    })
  })
})
