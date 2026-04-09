import type { VueWrapper } from '@vue/test-utils'
import { beforeEach, expect, vi } from 'vitest'
import AvHeader from '@/components/header/AvHeader/AvHeader.vue'
import { AvCancelConfirmButtonsStub, AvDrawerStub } from '@/tests'
import { BddTest, mountWithRouter } from '@/tests/utils'

vi.mock('@/composables', () => ({
  useAvBreakpoints: () => ({ isBelowLg: true }),
}))

BddTest().given('an AvHeader', () => {
  let wrapper: VueWrapper

  const stubs = {
    AvDrawer: AvDrawerStub,
    AvCancelConfirmButtons: AvCancelConfirmButtonsStub,
    AvLanguageSelector: {
      name: 'AvLanguageSelector',
      template: '<div></div>',
      emits: ['select']
    }
  }

  const homeLabel = 'Accueil - Cofolio étudiant'
  const quickLinks = [{ text: 'Lien', to: '/' }]
  const showSearch = true
  const modelValue = ''
  const currentLanguage = 'fr'
  const languages = [{ codeIso: 'fr', label: 'Français' }, { codeIso: 'en', label: 'English' }]

  function getMenuDrawer () {
    return wrapper.findAllComponents(AvDrawerStub).find(drawer => drawer.attributes('data-testid') === 'header-menu-drawer')
  }

  function getSearchDrawer () {
    return wrapper.findAllComponents(AvDrawerStub).find(drawer => drawer.attributes('data-testid') === 'header-search-drawer')
  }

  BddTest().when('the component is mounted', () => {
    beforeEach(async () => {
      wrapper = await mountWithRouter(AvHeader, { global: { stubs } })
    })

    BddTest().then('it should display default logo and text', async () => {
      expect(wrapper.get('[data-testid="header-logo"]')).toBeTruthy()
    })
  })

  BddTest().when('the menu button is clicked', () => {
    beforeEach(async () => {
      wrapper = await mountWithRouter(AvHeader, {
        props: { homeLabel, quickLinks },
        global: { stubs }
      })
    })

    BddTest().then('it should open menu', async () => {
      const menuButton = wrapper.get('[data-testid="open-menu-btn"]')
      await menuButton.trigger('click')

      const drawer = getMenuDrawer()
      expect(drawer?.exists()).toBe(true)
      expect(drawer!.props('show')).toBe(true)
    })
  })

  BddTest().when('using the search bar', () => {
    beforeEach(async () => {
      wrapper = await mountWithRouter(AvHeader, {
        props: { showSearch, modelValue },
        global: { stubs }
      })
    })

    BddTest().then('it should emit a search event', async () => {
      const searchInput = wrapper.find('input')
      await searchInput.setValue('recherche')
      await searchInput.trigger('keydown.enter')

      expect(wrapper.emitted('search')).toBeTruthy()
    })
  })

  BddTest().when('the menu drawer is opened', () => {
    BddTest().and('the search button is clicked', () => {
      beforeEach(async () => {
        wrapper = await mountWithRouter<typeof AvHeader>(AvHeader, {
          props: { homeLabel, showSearch },
          global: { stubs }
        })

        const searchButton = wrapper.find('[data-testid="open-search-btn"]')
        expect(searchButton.exists()).toBe(true)
        await searchButton.trigger('click')
      })

      BddTest().then('it should open search drawer', async () => {
        const searchDrawer = getSearchDrawer()
        expect(searchDrawer?.exists()).toBe(true)
        expect(searchDrawer!.props('show')).toBe(true)
      })

      BddTest().then('it should close menu drawer', async () => {
        const menuDrawer = getMenuDrawer()
        expect(menuDrawer?.exists()).toBe(true)
        expect(menuDrawer!.props('show')).toBe(false)
      })
    })

    BddTest().and('the close button is clicked', () => {
      beforeEach(async () => {
        wrapper = await mountWithRouter(AvHeader, {
          props: { homeLabel, quickLinks },
          global: { stubs }
        })
      })

      BddTest().then('it should close the menu drawer when close button is clicked', async () => {
        const menuDrawer = getMenuDrawer()

        const openBtn = wrapper.get('[data-testid="open-menu-btn"]')
        await openBtn.trigger('click')
        expect(menuDrawer?.exists()).toBe(true)
        expect(menuDrawer!.props('show')).toBe(true)

        await menuDrawer!.findComponent({ name: 'AvCancelConfirmButtons' }).vm.$emit('cancel')
        expect(menuDrawer!.props('show')).toBe(false)
      })
    })

    BddTest().and('the escape key is pressed', () => {
      beforeEach(async () => {
        wrapper = await mountWithRouter(AvHeader, {
          props: { homeLabel, quickLinks },
          global: { stubs }
        })
      })

      BddTest().then('it should close the menu drawer when escape key is pressed', async () => {
        const menuDrawer = getMenuDrawer()

        const openBtn = wrapper.get('[data-testid="open-menu-btn"]')
        await openBtn.trigger('click')
        expect(menuDrawer?.exists()).toBe(true)
        expect(menuDrawer!.props('show')).toBe(true)

        const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' })
        document.dispatchEvent(escapeEvent)
        await wrapper.vm.$nextTick()

        expect(menuDrawer!.props('show')).toBe(false)
      })
    })
  })

  BddTest().when('AvLanguageSelector emits "select"', () => {
    beforeEach(async () => {
      wrapper = await mountWithRouter(AvHeader, {
        props: {
          homeLabel,
          languageSelector: {
            currentLanguage,
            languages
          }
        },
        global: { stubs }
      })
    })

    BddTest().then('it should emit "languageSelect" event', async () => {
      const languageSelector = wrapper.findComponent({ name: 'AvLanguageSelector' })
      expect(languageSelector.exists()).toBe(true)

      const payload = { codeIso: 'en', label: 'English' }
      await languageSelector.vm.$emit('select', payload)

      expect(wrapper.emitted('languageSelect')).toBeTruthy()
      expect(wrapper.emitted('languageSelect')![0]).toEqual([payload])
    })
  })

  BddTest().when('the component is unmounted', () => {
    beforeEach(async () => {
      vi.clearAllMocks()
      wrapper = await mountWithRouter(AvHeader, { global: { stubs } })
    })

    BddTest().then('it should remove keydown event listener', () => {
      const spy = vi.spyOn(document, 'removeEventListener')
      wrapper.unmount()
      expect(spy).toHaveBeenCalledWith('keydown', expect.any(Function))
      spy.mockRestore()
    })
  })
})
