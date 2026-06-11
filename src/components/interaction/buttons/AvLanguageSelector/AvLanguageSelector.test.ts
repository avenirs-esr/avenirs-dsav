import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach } from 'vitest'
import AvLanguageSelector, { type AvLanguageSelectorProps } from '@/components/interaction/buttons/AvLanguageSelector/AvLanguageSelector.vue'
import { AvDropdownStub, AvTooltipStub, BddTest } from '@/tests'

vi.mock('@/composables', () => ({
  useAvBreakpoints: () => ({ isBelowLg: false }),
}))

BddTest().given('a language selector', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvLanguageSelector>>

  const props: AvLanguageSelectorProps = {
    languages: [{ codeIso: 'fr', label: 'Français' }, { codeIso: 'en', label: 'English' }],
    title: 'Sélectionner une langue',
  }

  const stubs = { AvDropdown: AvDropdownStub, AvTooltip: AvTooltipStub }

  BddTest().when('the component is mounted', () => {
    beforeEach(() => {
      wrapper = mount(AvLanguageSelector, { props, global: { stubs } })
    })

    BddTest().then('it should render the dropdown', () => {
      const dropdown = wrapper.findComponent(AvDropdownStub)
      expect(dropdown.exists()).toBe(true)
    })

    BddTest().then('it should render the default language as label', () => {
      const button = wrapper.find('button')
      const expectedLabel = 'FR - Français'
      expect(button.exists()).toBe(true)
      expect(button.text()).toBe(expectedLabel)
    })

    BddTest().then('it should render the default items', () => {
      const dropdown = wrapper.findComponent(AvDropdownStub)
      const items = dropdown.props('items')
      expect(items).toHaveLength(2)
      expect(items).toEqual([
        { name: 'fr', label: 'FR - Français' },
        { name: 'en', label: 'EN - English' },
      ])
    })

    BddTest().and('the second language is clicked', () => {
      beforeEach(async () => {
        wrapper.findComponent(AvDropdownStub).vm.$emit('itemSelected', props.languages[1].codeIso)
        await wrapper.vm.$nextTick()
      })

      BddTest().then('it should select the second language', () => {
        expect(wrapper.emitted('select')).toBeTruthy()
        expect(wrapper.emitted('select')![0][0]).toEqual(props.languages[1])
      })
    })
  })
})
