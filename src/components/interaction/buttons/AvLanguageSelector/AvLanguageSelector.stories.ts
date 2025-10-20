import type { Meta, StoryFn } from '@storybook/vue3'
import AvLanguageSelector, { type AvLanguageSelectorProps } from '@/components/interaction/buttons/AvLanguageSelector/AvLanguageSelector.vue'

/**
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvLanguageSelector</code> allows users to choose the language in which the site content is displayed, if it is available in several languages.
 *     It takes the form of a button that opens a drop-down list.
 *   </span>
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <p>
 *   <span class="b2-regular">The language selector is composed by:</span>
 * </p>
 *
 * <ul>
 *   <li><span class="b2-regular">a button that opens or closes a drop-down menu of languages</span></li>
 *   <li><span class="b2-regular">a drop-down menu of available languages</span></li>
 * </ul>
 */
const meta: Meta<AvLanguageSelectorProps> = {
  title: 'Components/Interaction/Buttons/AvLanguageSelector',
  component: AvLanguageSelector,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    languages: { control: false },
    currentLanguage: { control: 'select', options: ['fr', 'en'] },
    title: { control: 'text' }
  },
  args: {
    id: crypto.randomUUID(),
    languages: [{ codeIso: 'fr', label: 'Français' }, { codeIso: 'en', label: 'English' }],
    currentLanguage: 'fr',
    title: 'Select a language'
  },
  parameters: {
    docs: {
      story: {
        height: '10rem',
      },
    },
  }
}

export default meta

const Template: StoryFn<AvLanguageSelectorProps> = args => ({
  components: { AvLanguageSelector },
  setup () {
    return { args }
  },
  template: `<AvLanguageSelector v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = {}
