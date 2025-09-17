import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect, vi } from 'vitest'
import EsupLogo from '@/components/header/EsupLogo.vue'
import { BddTest } from '@/tests'

vi.mock('@/assets/icons/esup-logo.svg', () => ({
  default: {
    name: 'EsupLogoSvg',
    props: ['height', 'width'],
    template: '<svg :width="width" :height="height"><path/></svg>'
  }
}))

BddTest().given('an ESUP logo', () => {
  let wrapper: VueWrapper<InstanceType<typeof EsupLogo>>

  BddTest().when('the logo is mounted', () => {
    BddTest().and('no props are given', () => {
      beforeEach(() => {
        wrapper = mount(EsupLogo)
      })

      BddTest().then('it should render the SVG wrapper and the logo', () => {
        expect(wrapper.find('.svg-wrapper').exists()).toBe(true)
        expect(wrapper.findComponent({ name: 'EsupLogoSvg' }).exists()).toBe(true)
      })
    })

    BddTest().and('width and height are given', () => {
      beforeEach(() => {
        wrapper = mount(EsupLogo, { props: { width: '120', height: '80' } })
      })

      BddTest().then('it should forward width and height to the SVG', () => {
        const svg = wrapper.findComponent({ name: 'EsupLogoSvg' })
        expect(svg.attributes('width')).toBe('120')
        expect(svg.attributes('height')).toBe('80')
      })
    })

    BddTest().and('color is given', () => {
      beforeEach(() => {
        wrapper = mount(EsupLogo, { props: { color: 'red' } })
      })

      BddTest().then('it should apply the given color', () => {
        expect(wrapper.props('color')).toBe('red')
      })
    })
  })
})
