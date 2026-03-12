import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect } from 'vitest'
import ToolbarImagePopover, { type ToolbarImagePopoverProps } from '@/components/interaction/inputs/AvRichTextEditor/components/ToolbarImagePopover/ToolbarImagePopover.vue'
import { AvButtonStub, AvCancelConfirmButtonsStub, AvInputStub, AvPopoverStub, BddTest } from '@/tests'

BddTest().given('a toolbar image popover', () => {
  let wrapper: VueWrapper<InstanceType<typeof ToolbarImagePopover>>

  const props: ToolbarImagePopoverProps = {
    imageLabel: 'Image',
    imageNameLabel: 'Nom de l\'image',
    imageNamePlaceholder: 'Entrez le nom de l\'image',
    imageUrlLabel: 'URL de l\'image',
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
  const getTriggerButton = () => wrapper.findAllComponents(AvButtonStub).find(button => button.attributes('data-testid') === 'insert-image-button')
  const getImageNameInput = () => wrapper.find('[data-testid="image-inputs-container"]').findAllComponents(AvInputStub)[0]
  const getImageUrlInput = () => wrapper.find('[data-testid="image-inputs-container"]').findAllComponents(AvInputStub)[1]

  BddTest().when('the component is mounted', () => {
    beforeEach(() => {
      wrapper = mount(ToolbarImagePopover, { props, global: { stubs } })
    })

    BddTest().then('the trigger button should be rendered with the correct label', () => {
      const triggerButton = getTriggerButton()
      expect(triggerButton).toBeDefined()
      expect(triggerButton?.props('label')).toBe(props.imageLabel)
    })

    BddTest().then('the popover should contain the correct inputs and buttons', () => {
      const triggerButton = getTriggerButton()
      triggerButton?.trigger('click')

      const imageNameInput = getImageNameInput()
      expect(imageNameInput).toBeDefined()
      expect(imageNameInput?.props('label')).toBe(props.imageNameLabel)

      const imageUrlInput = getImageUrlInput()
      expect(imageUrlInput).toBeDefined()
      expect(imageUrlInput?.props('label')).toBe(props.imageUrlLabel)

      const cancelConfirmButtons = getCancelConfirmButtons()
      expect(cancelConfirmButtons).toBeDefined()
      expect(cancelConfirmButtons?.props('cancelLabel')).toBe(props.popoversCancelLabel)
      expect(cancelConfirmButtons?.props('confirmLabel')).toBe(props.popoversConfirmLabel)
    })

    BddTest().and('the user fills the inputs and confirms', () => {
      const testImageData = {
        name: 'Test Image',
        url: 'https://example.com/image.jpg'
      }

      beforeEach(() => {
        const triggerButton = getTriggerButton()
        triggerButton?.trigger('click')

        const imageNameInput = getImageNameInput()
        const imageUrlInput = getImageUrlInput()
        const cancelConfirmButtons = getCancelConfirmButtons()

        imageNameInput?.setValue(testImageData.name)
        imageUrlInput?.setValue(testImageData.url)
        cancelConfirmButtons?.vm.$emit('confirm')
      })

      BddTest().then('the component should emit the correct event with the image data', () => {
        expect(wrapper.emitted('confirm')).toBeTruthy()
        const emittedEvent = wrapper.emitted('confirm')?.[0][0]
        expect(emittedEvent).toEqual({
          name: testImageData.name,
          url: testImageData.url
        })
      })
    })
  })
})
