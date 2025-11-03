import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect } from 'vitest'
import AvFieldset, { type AvFieldsetProps } from '@/components/base/AvFieldset/AvFieldset.vue'
import { BddTest } from '@/tests/utils'

const defaultProps: AvFieldsetProps = {
  legend: 'My legend',
  legendId: 'legend-id',
  legendClass: 'custom-legend',
  hint: 'My hint',
  hintClass: 'custom-hint'
}

function mountWithProps (props: Partial<AvFieldsetProps> = {}, slots = {}) {
  return mount(AvFieldset, {
    props: { ...defaultProps, ...props },
    slots
  })
}

BddTest().given('an AvFieldset component', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvFieldset>>

  BddTest().when('mounted with default props', () => {
    beforeEach(() => {
      wrapper = mountWithProps({}, { default: '<p>Default content</p>' })
    })

    BddTest().then('it should render the legend with text and class', () => {
      const legendEl = wrapper.find('legend')
      expect(legendEl.exists()).toBe(true)
      expect(legendEl.text()).toContain('My legend')
      expect(legendEl.attributes('id')).toBe('legend-id')
      expect(legendEl.classes()).toContain('custom-legend')
    })

    BddTest().then('it should render the hint with text and class', () => {
      const hintEl = wrapper.find('span.av-hint-text')
      expect(hintEl.exists()).toBe(true)
      expect(hintEl.text()).toContain('My hint')
      expect(hintEl.classes()).toContain('custom-hint')
    })

    BddTest().then('it should render the default slot', () => {
      const contentEl = wrapper.find('div.av-fieldset__content p')
      expect(contentEl.exists()).toBe(true)
      expect(contentEl.text()).toBe('Default content')
    })
  })

  BddTest().when('legend slot is provided', () => {
    beforeEach(() => {
      wrapper = mountWithProps({}, { legend: '<span>Legend Slot</span>' })
    })

    BddTest().then('it should render the legend slot content', () => {
      const legendEl = wrapper.find('legend')
      expect(legendEl.html()).toContain('Legend Slot')
    })
  })

  BddTest().when('hint slot is provided', () => {
    beforeEach(() => {
      wrapper = mountWithProps({}, { hint: '<span>Hint Slot</span>' })
    })

    BddTest().then('it should render the hint slot content', () => {
      const hintEl = wrapper.find('span.av-hint-text')
      expect(hintEl.html()).toContain('Hint Slot')
    })
  })
})
