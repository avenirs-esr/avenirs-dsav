import type { VueWrapper } from '@vue/test-utils'
import type { ToolbarImagePopoverProps } from '@/components/interaction/inputs/AvRichTextEditor/components/ToolbarImagePopover/ToolbarImagePopover.vue'
import { mount } from '@vue/test-utils'
import { beforeEach, expect } from 'vitest'
import ToolbarImagePopover from '@/components/interaction/inputs/AvRichTextEditor/components/ToolbarImagePopover/ToolbarImagePopover.vue'
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

  function mountComponent (componentProps = props) {
    wrapper = mount(ToolbarImagePopover, {
      props: componentProps,
      global: { stubs }
    })
  }

  const getTriggerButton = () => wrapper.findComponent(AvButtonStub)
  const getCancelConfirmButtons = () => wrapper.findComponent(AvCancelConfirmButtonsStub)
  const getInputsContainer = () => wrapper.find('[data-testid="image-inputs-container"]')
  const getImageNameInput = () => getInputsContainer().findAllComponents(AvInputStub)[0]
  const getImageUrlInput = () => getInputsContainer().findAllComponents(AvInputStub)[1]

  async function openPopover () {
    await getTriggerButton().trigger('click')
  }

  beforeEach(() => {
    mountComponent()
  })

  BddTest().when('the component is mounted', () => {
    BddTest().then('it should render the trigger button with the correct label', () => {
      expect(getTriggerButton().exists()).toBe(true)
      expect(getTriggerButton().props('label')).toBe(props.imageLabel)
    })

    BddTest().then('it should render the inputs with the correct labels and placeholders', async () => {
      await openPopover()

      expect(getImageNameInput().props('label')).toBe(props.imageNameLabel)
      expect(getImageNameInput().props('placeholder')).toBe(props.imageNamePlaceholder)

      expect(getImageUrlInput().props('label')).toBe(props.imageUrlLabel)
      expect(getImageUrlInput().props('placeholder')).toBe('https://example.com/image.jpg')
    })

    BddTest().then('it should render the cancel and confirm buttons with the correct labels', async () => {
      await openPopover()

      expect(getCancelConfirmButtons().props('cancelLabel')).toBe(props.popoversCancelLabel)
      expect(getCancelConfirmButtons().props('confirmLabel')).toBe(props.popoversConfirmLabel)
    })

    BddTest().then('it should disable confirmation when both fields are empty', async () => {
      await openPopover()

      expect(getCancelConfirmButtons().props('confirmDisabled')).toBe(true)
    })
  })

  BddTest().when('the user only fills the image name', () => {
    beforeEach(async () => {
      await openPopover()
      await getImageNameInput().setValue('Test Image')
    })

    BddTest().then('it should keep confirmation disabled', () => {
      expect(getCancelConfirmButtons().props('confirmDisabled')).toBe(true)
    })
  })

  BddTest().when('the user only fills the image URL', () => {
    beforeEach(async () => {
      await openPopover()
      await getImageUrlInput().setValue('https://example.com/image.jpg')
    })

    BddTest().then('it should keep confirmation disabled', () => {
      expect(getCancelConfirmButtons().props('confirmDisabled')).toBe(true)
    })
  })

  BddTest().when('the user fills both fields and confirms', () => {
    const testImageData = {
      name: 'Test Image',
      url: 'https://example.com/image.jpg'
    }

    beforeEach(async () => {
      await openPopover()

      await getImageNameInput().setValue(testImageData.name)
      await getImageUrlInput().setValue(testImageData.url)

      getCancelConfirmButtons().vm.$emit('confirm')
    })

    BddTest().then('it should enable confirmation', () => {
      expect(getCancelConfirmButtons().props('confirmDisabled')).toBe(false)
    })

    BddTest().then('it should emit the correct image data', () => {
      expect(wrapper.emitted('confirm')).toEqual([
        [{
          name: testImageData.name,
          url: testImageData.url
        }]
      ])
    })
  })

  BddTest().when('the component is disabled', () => {
    beforeEach(() => {
      mountComponent({
        ...props,
        disabled: true
      })
    })

    BddTest().then('it should disable the trigger button', () => {
      expect(getTriggerButton().props('disabled')).toBe(true)
    })

    BddTest().then('it should pass the disabled tooltip to the trigger button', () => {
      const disabledTooltip = 'Action indisponible'

      mountComponent({
        ...props,
        disabled: true,
        disabledTooltip
      })

      expect(getTriggerButton().props('disabledTooltip')).toBe(disabledTooltip)
    })
  })

  BddTest().when('the component is loading', () => {
    beforeEach(() => {
      mountComponent({
        ...props,
        isLoading: true
      })
    })

    BddTest().then('it should pass the disabled state to the trigger button', () => {
      expect(getTriggerButton().props('disabled')).toBe(true)
    })
  })
})
