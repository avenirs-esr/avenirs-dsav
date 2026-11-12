import type { VueWrapper } from '@vue/test-utils'
import type { ToolbarLinkPopoverProps } from '@/components/interaction/inputs/AvRichTextEditor/components/ToolbarLinkPopover/ToolbarLinkPopover.vue'
import { mount } from '@vue/test-utils'
import { beforeEach, expect } from 'vitest'
import ToolbarLinkPopover from '@/components/interaction/inputs/AvRichTextEditor/components/ToolbarLinkPopover/ToolbarLinkPopover.vue'
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

  function mountComponent (componentProps = props) {
    wrapper = mount(ToolbarLinkPopover, {
      props: componentProps,
      global: { stubs }
    })
  }

  const getTriggerButton = () => wrapper.findComponent(AvButtonStub)
  const getCancelConfirmButtons = () => wrapper.findComponent(AvCancelConfirmButtonsStub)
  const getInputsContainer = () => wrapper.find('[data-testid="link-inputs-container"]')
  const getLinkNameInput = () => getInputsContainer().findAllComponents(AvInputStub)[0]
  const getLinkUrlInput = () => getInputsContainer().findAllComponents(AvInputStub)[1]

  async function openPopover () {
    await getTriggerButton().trigger('click')
  }

  beforeEach(() => {
    mountComponent()
  })

  BddTest().when('the component is mounted', () => {
    BddTest().then('it should render the trigger button with the correct label', () => {
      expect(getTriggerButton().exists()).toBe(true)
      expect(getTriggerButton().props('label')).toBe(props.linkLabel)
    })

    BddTest().then('it should pass the correct props to the inputs and buttons', async () => {
      await openPopover()

      expect(getLinkNameInput().props('label')).toBe(props.linkNameLabel)
      expect(getLinkNameInput().props('placeholder')).toBe(props.linkNamePlaceholder)

      expect(getLinkUrlInput().props('label')).toBe(props.linkUrlLabel)
      expect(getLinkUrlInput().props('placeholder')).toBe('https://example.com')

      expect(getCancelConfirmButtons().props('cancelLabel')).toBe(props.popoversCancelLabel)
      expect(getCancelConfirmButtons().props('confirmLabel')).toBe(props.popoversConfirmLabel)
    })

    BddTest().then('it should disable the confirmation button when the URL is empty', async () => {
      await openPopover()

      expect(getCancelConfirmButtons().props('confirmDisabled')).toBe(true)
    })
  })

  BddTest().when('the user fills the inputs and confirms', () => {
    const testLinkData = {
      name: 'Test Link',
      url: 'https://example.com/link'
    }

    beforeEach(async () => {
      await openPopover()

      await getLinkNameInput().setValue(testLinkData.name)
      await getLinkUrlInput().setValue(testLinkData.url)

      getCancelConfirmButtons().vm.$emit('confirm')
    })

    BddTest().then('it should enable the confirmation button', () => {
      expect(getCancelConfirmButtons().props('confirmDisabled')).toBe(false)
    })

    BddTest().then('it should emit the correct event with the link data', () => {
      expect(wrapper.emitted('confirm')).toEqual([
        [{
          name: testLinkData.name,
          url: testLinkData.url
        }]
      ])
    })
  })

  BddTest().when('the user only fills the link URL and confirms', () => {
    const testLinkData = {
      url: 'https://example.com/link'
    }

    beforeEach(async () => {
      await openPopover()

      await getLinkUrlInput().setValue(testLinkData.url)

      getCancelConfirmButtons().vm.$emit('confirm')
    })

    BddTest().then('it should use the URL as the link name', () => {
      expect(wrapper.emitted('confirm')).toEqual([
        [{
          name: testLinkData.url,
          url: testLinkData.url
        }]
      ])
    })
  })

  BddTest().when('the component is mounted with an initial name', () => {
    const initialName = 'Initial Link Name'

    beforeEach(() => {
      mountComponent({ ...props, initialName })
    })

    BddTest().then('it should pre-fill the link name input', async () => {
      await openPopover()

      expect(getLinkNameInput().props('modelValue')).toBe(initialName)
    })

    BddTest().then('it should update the link name when the initial name changes', async () => {
      await openPopover()

      const updatedName = 'Updated Link Name'

      await wrapper.setProps({ initialName: updatedName })

      expect(getLinkNameInput().props('modelValue')).toBe(updatedName)
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
