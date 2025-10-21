import type { Meta, StoryFn } from '@storybook/vue3'
import AvAccordion from '@/components/interaction/accordions/AvAccordion/AvAccordion.vue'
import AvAccordionsGroup, { type AvAccordionsGroupProps } from '@/components/interaction/accordions/AvAccordionsGroup/AvAccordionsGroup.vue'

/**
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvAccordionsGroup</code> component automatically manages the addition of <code>AvAccordion</code> in a group according to the <code>AvAccordion</code> present in the <code>default</code> slot.
 *   </span>
 * </p>
 *
 * <p>
 *   <span class="b2-regular">
 *     Accordions allow users to show and hide sections of content presented on a page.
 *   </span>
 * </p>
 *
 * <p>
 *   <span class="b2-regular">
 *     The accordions group lets you group several accordions into a single coherent unit. It manages active selection logic between child accordions, allowing you to open one accordion while closing the others. This component is essential for organizing interactively linked accordion sets.
 *   </span>
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <p>
 *   <span class="b2-regular">None.</span>
 * </p>
 */
const meta: Meta<AvAccordionsGroupProps> = {
  title: 'Components/Interaction/Accordions/AvAccordionsGroup',
  component: AvAccordionsGroup,
  tags: ['autodocs'],
  argTypes: {
    activeAccordion: {
      control: { type: 'number', min: 0, max: 2 },
      description: 'Index of the currently active accordion'
    }
  },
  args: {
    activeAccordion: undefined
  }
}

export default meta

const Template: StoryFn<AvAccordionsGroupProps> = args => ({
  components: { AvAccordionsGroup, AvAccordion },
  setup () {
    return { args }
  },
  template: `
    <AvAccordionsGroup v-bind="args" v-model="args.activeAccordion">
      <AvAccordion
        title="Accordion 1"
        icon="mdi:file-document-multiple-outline"
      >
        <span>First accordion content</span>
      </AvAccordion>
      <AvAccordion
        title="Accordion 2"
        icon="mdi:plus-circle-outline"
      >
        <span>Second accordion content</span>
      </AvAccordion>
    </AvAccordionsGroup>
  `,
})

export const Default = Template.bind({})
Default.args = {}

export const WithFirstAccordionOpen = Template.bind({})
WithFirstAccordionOpen.args = {
  activeAccordion: 0
}

export const WithSecondAccordionOpen = Template.bind({})
WithSecondAccordionOpen.args = {
  activeAccordion: 1
}
