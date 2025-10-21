import type { Ref } from 'vue'
import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect } from 'vitest'
import { AvAccordionStub } from '@/components/interaction/accordions/AvAccordion/AvAccordion.stub'
import AvAccordionsGroup from '@/components/interaction/accordions/AvAccordionsGroup/AvAccordionsGroup.vue'
import { BddTest } from '@/tests/utils'

BddTest().given('multiple accordions inside the group', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvAccordionsGroup>>

  const slots = {
    default: `
      <AvAccordion title="Accordion 1" icon="icon-1">Content 1</AvAccordion>
      <AvAccordion title="Accordion 2" icon="icon-2">Content 2</AvAccordion>
      <AvAccordion title="Accordion 3" icon="icon-3">Content 3</AvAccordion>
    `,
  }

  const stubs = { AvAccordion: AvAccordionStub }

  beforeEach(() => {
    wrapper = mount(AvAccordionsGroup, {
      slots,
      props: { activeAccordion: 1 },
      global: { stubs }
    })
  })

  BddTest().when('the accordions group is mounted', () => {
    BddTest().then('it should initialize the activeAccordion computed correctly', () => {
      const vm = wrapper.vm as unknown as { activeAccordion: Ref<boolean>, localActive: Ref<boolean> }
      const localActive = vm.activeAccordion
      expect(localActive).toBeDefined()
      expect(vm.localActive).toBe(1)
    })

    BddTest().then('it should render all accordions', () => {
      const accordions = wrapper.findAllComponents({ name: 'AvAccordion' })
      expect(accordions.length).toBe(3)
      expect(accordions[0].props('title')).toBe('Accordion 1')
      expect(accordions[1].props('title')).toBe('Accordion 2')
      expect(accordions[2].props('title')).toBe('Accordion 3')
    })
  })

  BddTest().when('clicking on an accordion', () => {
    BddTest().then('it should emit the update event for v-model', async () => {
      const buttons = wrapper.findAll('.fr-accordion__btn')
      await buttons[2].trigger('click')

      const emitted = wrapper.emitted('update:activeAccordion')
      expect(emitted).toBeTruthy()
      expect(emitted![0][0]).toEqual(2)
    })
  })
})
