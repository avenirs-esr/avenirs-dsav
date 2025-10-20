import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach } from 'vitest'
import AvLanguageSelector, { type AvLanguageSelectorProps } from '@/components/interaction/buttons/AvLanguageSelector/AvLanguageSelector.vue'
import { BddTest } from '@/tests'

BddTest().given('a language selector', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvLanguageSelector>>

  const props: AvLanguageSelectorProps = {
    languages: [{ codeIso: 'fr', label: 'Français' }, { codeIso: 'en', label: 'English' }]
  }

  BddTest().and('given only languages prop', () => {
    beforeEach(() => {
      wrapper = mount(AvLanguageSelector, { props })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should render with default props', () => {
        const expectedDefault = 'FR - Français'
        const expectedCustom = 'EN - English'

        const button = wrapper.find('button')
        expect(button.exists()).toBe(true)
        expect(button.attributes('title')).toBe('Sélectionner une langue')

        const links = wrapper.findAll('a')
        expect(links).toHaveLength(2)
        expect(links[0].text()).toBe(expectedDefault)
        expect(links[1].text()).toBe(expectedCustom)
        expect(links[0].attributes('aria-current')).toBeDefined()
        expect(links[1].attributes('lang')).toBeDefined()
      })
    })

    BddTest().when('the second language link is clicked', () => {
      beforeEach(async () => {
        await wrapper.findAll('a')[1].trigger('click')
      })

      BddTest().then('it should select the second language', () => {
        expect(wrapper.emitted('select')).toBeTruthy()
        expect(wrapper.emitted('select')![0][0]).toEqual(props.languages[1])
      })
    })
  })

  BddTest().and('given languages, currentLanguage and title props', () => {
    const newProps: AvLanguageSelectorProps = {
      ...props,
      currentLanguage: 'en',
      title: 'Select a language'
    }

    beforeEach(() => {
      wrapper = mount(AvLanguageSelector, { props: newProps })
    })

    BddTest().then('it should render with given props', () => {
      const expectedCustom = 'FR - Français'
      const expectedDefault = 'EN - English'

      const button = wrapper.find('button')
      expect(button.exists()).toBe(true)
      expect(button.attributes('title')).toBe(newProps.title)

      const links = wrapper.findAll('a')
      expect(links).toHaveLength(2)
      expect(links[0].text()).toBe(expectedCustom)
      expect(links[1].text()).toBe(expectedDefault)
      expect(links[0].attributes('lang')).toBeDefined()
      expect(links[1].attributes('aria-current')).toBeDefined()
    })
  })
})
