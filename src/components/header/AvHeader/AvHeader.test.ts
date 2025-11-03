import type { VueWrapper } from '@vue/test-utils'
import { afterEach, beforeEach, expect, vi } from 'vitest'
import { nextTick } from 'vue'
import AvHeader from '@/components/header/AvHeader/AvHeader.vue'
import { BddTest, mountWithRouter } from '@/tests/utils'

vi.mock('@/composables', () => ({
  useAvBreakpoints: () => ({ isBelowLg: false }),
}))

BddTest().given('an AvHeader', () => {
  let wrapper: VueWrapper

  const stubs = {
    AvModal: {
      name: 'AvModal',
      template: `
      <div class="av-modal-stub">
        <slot name="header" />
        <slot />
      </div>
    `,
      props: ['opened', 'id', 'closeButtonLabel', 'confirmButtonLabel'],
      emits: ['close', 'confirm']
    }
  }

  const serviceTitle = 'Service title'
  const quickLinks = [{ text: 'Lien', to: '/' }]
  const showSearch = true
  const modelValue = ''
  const currentLanguage = 'fr'
  const languages = [{ codeIso: 'fr', label: 'Français' }, { codeIso: 'en', label: 'English' }]

  BddTest().when('the component is mounted', () => {
    beforeEach(async () => {
      wrapper = await mountWithRouter(AvHeader, { global: { stubs } })
    })

    BddTest().then('ot should display default logo and text', async () => {
      expect(wrapper.get('[data-testid="header-logo"]')).toBeTruthy()
    })

    BddTest().and('service title is provided', () => {
      beforeEach(async () => {
        wrapper = await mountWithRouter(AvHeader, {
          props: { serviceTitle },
          global: { stubs }
        })
      })

      BddTest().then('it should display service title', async () => {
        expect(wrapper.text()).toContain(serviceTitle)
      })
    })
  })

  BddTest().when('the menu button is clicked', () => {
    beforeEach(async () => {
      wrapper = await mountWithRouter(AvHeader, {
        props: { quickLinks },
        global: { stubs }
      })
    })

    BddTest().then('it should open menu', async () => {
      const menuButton = wrapper.get('[data-testid="open-menu-btn"]')
      await menuButton.trigger('click')
      expect(wrapper.findComponent({ name: 'AvModal' }).props('opened')).toBe(true)
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

  BddTest().when('the menu modal is opened', () => {
    BddTest().and('the search button is clicked', () => {
      beforeEach(async () => {
        wrapper = await mountWithRouter<typeof AvHeader>(AvHeader, {
          props: { showSearch },
          global: { stubs }
        })
      })

      BddTest().then('it should open search modal and close menu modal', async () => {
        const searchButton = wrapper.find('.search-button')
        expect(searchButton.exists()).toBe(true)

        await searchButton.trigger('click')

        const headerMenu = wrapper.find('.av-header__menu-modal')
        const searchBar = headerMenu.find('.av-search-bar')
        expect(searchBar.exists()).toBe(true)
        const menuLinks = wrapper.find('.av-header__menu-modal-links')
        const quickLinks = menuLinks.find('[aria-label="Menu secondaire"]')
        expect(quickLinks.exists()).toBe(false)
      })
    })

    BddTest().and('the close button is clicked', () => {
      beforeEach(async () => {
        wrapper = await mountWithRouter(AvHeader, {
          props: { serviceTitle, quickLinks },
          global: { stubs }
        })
      })

      BddTest().then('it should close the menu modal when close button is clicked', async () => {
        const menuModal = wrapper.findComponent({ name: 'AvModal' })

        const openBtn = wrapper.get('[data-testid="open-menu-btn"]')
        await openBtn.trigger('click')
        expect(menuModal.props('opened')).toBe(true)

        await menuModal.vm.$emit('close')
        expect(menuModal.props('opened')).toBe(false)
      })
    })

    BddTest().and('has a focus', () => {
      const focusMock = vi.fn()

      let menuBtn: HTMLButtonElement

      beforeEach(async () => {
        vi.clearAllMocks()

        menuBtn = document.createElement('button')
        menuBtn.setAttribute('id', 'button-menu')
        menuBtn.focus = focusMock
        document.body.appendChild(menuBtn)

        wrapper = await mountWithRouter(AvHeader, {
          props: { quickLinks },
          global: { stubs }
        })
      })

      afterEach(() => {
        document.body.removeChild(menuBtn)
      })

      BddTest().and('clicking the close button', () => {
        BddTest().then('it should focus #button-menu', async () => {
          expect(wrapper.find('[data-testid="open-menu-btn"]').exists()).toBe(true)
          await wrapper.get('[data-testid="open-menu-btn"]').trigger('click')
          await wrapper.findComponent({ name: 'AvModal' }).vm.$emit('close')

          expect(focusMock).toHaveBeenCalled()
        })
      })

      BddTest().and('pressing Escape', () => {
        BddTest().then('it should trigger hideModal and focus #button-menu', async () => {
          const event = new KeyboardEvent('keydown', { key: 'Escape' })
          document.dispatchEvent(event)
          await nextTick()

          expect(focusMock).toHaveBeenCalled()
        })
      })
    })

    BddTest().when('opening the menu', () => {
      const focusMock = vi.fn()

      let closeBtn: HTMLButtonElement

      beforeEach(async () => {
        vi.clearAllMocks()

        closeBtn = document.createElement('button')
        closeBtn.setAttribute('id', 'close-button')
        closeBtn.focus = focusMock
        document.body.appendChild(closeBtn)

        wrapper = await mountWithRouter(AvHeader, {
          props: { quickLinks },
          global: { stubs }
        })
      })

      afterEach(() => {
        document.body.removeChild(closeBtn)
      })

      BddTest().then('it should focus #close-button', async () => {
        const openBtn = wrapper.get('[data-testid="open-menu-btn"]')
        await openBtn.trigger('click')
        await new Promise(resolve => setTimeout(resolve))

        expect(focusMock).toHaveBeenCalled()
      })
    })
  })

  BddTest().when('AvLanguageSelector emits "select"', () => {
    beforeEach(async () => {
      wrapper = await mountWithRouter(AvHeader, {
        props: {
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
