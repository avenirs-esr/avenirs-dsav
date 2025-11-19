import type { Meta, StoryFn } from '@storybook/vue3'
import AvIconText from '@/components/base/AvIconText/AvIconText.vue'
import AvButton from '@/components/interaction/buttons/AvButton/AvButton.vue'
import AvModal, { type AvModalProps } from '@/components/overlay/modals/AvModal/AvModal.vue'
import { MDI_ICONS } from '@/tokens'

/**
 * <h1 class="n1">Modals - <code>AvModal</code></h1>
 *
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p class="b2-regular">
 *   The <code>AvModal</code> allows the user's attention to be focused exclusively on a task or a piece of information,
 *   without losing the context of the current page. This component requires a user action to be opened or closed.
 * </p>
 *
 * <p class="b2-regular">
 *   The <code>AvModal</code> component is a configurable modal window offering advanced features such as focus trapping,
 *   escape key handling for closure, and action button management. This component is designed to display dialogs and alerts
 *   in an accessible and ergonomic way.
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <p class="b2-regular">
 *   The default modal is used to highlight information that does not require user action. It is displayed when a button is clicked.
 *   It consists of the following elements:
 * </p>
 *
 * <ul>
 *   <li>The title (slot <code>header</code>), optional,</li>
 *   <li>The content zone (slot <code>default</code>), mandatory,</li>
 *   <li>The right-justified footer zone, which can be filled using the <code>footer</code> slot.
 *       This zone always includes the close button to the left of the custom slot elements,
 *       and must contain buttons only.</li>
 * </ul>
 */
const meta: Meta<AvModalProps> = {
  title: 'Components/Overlay/Modals/AvModal',
  component: AvModal,
  tags: ['autodocs'],
  argTypes: {
    opened: { control: 'boolean' },
    isAlert: { control: 'boolean' },
    closeButtonLabel: { control: 'text', required: true },
    closeButtonIcon: { control: 'text' },
    closeButtonDisabled: { control: 'boolean' },
    confirmButtonLabel: { control: 'text' },
    confirmButtonIcon: { control: 'text' },
    confirmButtonDisabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
  },
  args: {
    opened: false,
    isAlert: false,
    closeButtonLabel: 'Close',
    closeButtonIcon: MDI_ICONS.CLOSE_CIRCLE_OUTLINE,
    closeButtonDisabled: false,
    confirmButtonLabel: 'Confirm',
    confirmButtonIcon: MDI_ICONS.CHECK_CIRCLE_OUTLINE,
    confirmButtonDisabled: false,
    isLoading: false,
  },
  parameters: {
    docs: {
      story: {
        height: '20rem',
      },
    },
  }
}

export default meta

const Template: StoryFn<AvModalProps> = args => ({
  components: { AvModal, AvIconText, AvButton },
  setup () {
    const show = ref(args.opened)
    return { args, show }
  },
  template: `
    <button @click="show = true">Open modal</button>
    <AvModal v-bind="args" :opened="show" @close="show = false">
      <template #header>
        <AvIconText
          icon="mdi:swap-horizontal"
          icon-color="var(--dark-background-primary1)"
          text="Changer d'univers"
          text-color="var(--title)"
          typography-class="n6"
          gap="var(--spacing-sm)"
        />
      </template>
      <div class="modal-content">
        <AvButton
          label="Enseignant"
          theme="SECONDARY"
          size="sm"
          @click="onTeacherButtonClick"
        />
        <AvButton
          label="Étudiant"
          theme="SECONDARY"
          size="sm"
          @click="onStudentButtonClick"
        />
      </div>
    </AvModal>
  `,
})

export const Default = Template.bind({})
Default.args = {}
