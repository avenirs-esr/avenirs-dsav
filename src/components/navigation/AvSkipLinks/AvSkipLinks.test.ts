import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach } from 'vitest'
import AvSkipLinks from '@/components/navigation/AvSkipLinks/AvSkipLinks.vue'
import { AvButtonStub, BddTest } from '@/tests'

BddTest().given('an AvSkipLinks component', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvSkipLinks>>

  const stubs = { AvButton: AvButtonStub }

  const skipLinks = [
    { label: 'Aller au contenu principal', id: 'main' },
    { label: 'Aller au pied de page', id: 'footer' },
  ]

  BddTest().when('the component is mounted with skip links', () => {
    beforeEach(() => {
      wrapper = mount(AvSkipLinks, {
        props: { skipLinks },
        global: { stubs },
      })
    })

    BddTest().then('it should render the nav', () => {
      expect(wrapper.find('nav').exists()).toBe(true)
    })

    BddTest().then('it should render the skip links', () => {
      const skipLinksElements = wrapper.findAll('a')
      expect(skipLinksElements).toHaveLength(skipLinks.length)

      skipLinks.forEach((link, index) => {
        const skipLinkElement = skipLinksElements[index]
        expect(skipLinkElement.text()).toBe(link.label)
        expect(skipLinkElement.attributes('href')).toBe(`#${link.id}`)
      })
    })
  })

  BddTest().when('the component is mounted without skip links', () => {
    beforeEach(() => {
      wrapper = mount(AvSkipLinks, {
        props: { skipLinks: [] },
        global: { stubs },
      })
    })

    BddTest().then('it should not render the nav', () => {
      expect(wrapper.find('nav').exists()).toBe(false)
    })

    BddTest().then('it should not render any skip links', () => {
      expect(wrapper.findAll('a')).toHaveLength(0)
    })
  })
})
