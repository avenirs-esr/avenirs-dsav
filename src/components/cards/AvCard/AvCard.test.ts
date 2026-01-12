import type { VueWrapper } from '@vue/test-utils'
import { expect } from 'vitest'
import AvCard from '@/components/cards/AvCard/AvCard.vue'
import { AvButtonStub } from '@/tests'
import { BddTest, mountWithRouter } from '@/tests/utils'
import { MDI_ICONS } from '@/tokens'

BddTest().given('an AvCard', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvCard>>

  const stubs = { AvButton: AvButtonStub }

  BddTest().when('the component is mounted', () => {
    BddTest().and('with a default slot content', () => {
      BddTest().then('it should render the default slot content', async () => {
        wrapper = await mountWithRouter<typeof AvCard>(AvCard, {
          slots: {
            default: '<p>Contenu principal</p>',
          },
          global: {
            stubs,
          },
        })
        expect(wrapper.text()).toContain('Contenu principal')
      })
    })

    BddTest().and('with title and titleBackground', () => {
      BddTest().then('it should renduer title slot with correct class and background', async () => {
        wrapper = await mountWithRouter<typeof AvCard>(AvCard, {
          props: {
            titleBackground: 'red',
          },
          slots: {
            title: '<h2>Titre</h2>',
          },
          global: {
            stubs,
          },
        })

        const title = wrapper.get('.av-card__title')
        expect(title.text()).toContain('Titre')
        expect(title.attributes('style')).toContain('background: red')
      })
    })

    BddTest().and('with body and footer slots', () => {
      BddTest().then('it should render body and footer slots', async () => {
        wrapper = await mountWithRouter<typeof AvCard>(AvCard, {
          slots: {
            body: '<div>Corps de la carte</div>',
            footer: '<div>Pied de carte</div>',
          },
          global: {
            stubs,
          },
        })
        expect(wrapper.get('.av-card__body').text()).toBe('Corps de la carte')
        expect(wrapper.get('.av-card__footer').text()).toBe('Pied de carte')
      })
    })

    BddTest().and('with custom style props', () => {
      BddTest().then('it should apply style', async () => {
        wrapper = await mountWithRouter<typeof AvCard>(AvCard, {
          props: {
            borderColor: 'blue',
            height: '200px',
            width: '300px',
          },
        })

        const card = wrapper.get('.av-card')
        const style = card.attributes('style')

        expect(style).toContain('border-color: blue')
      })
    })

    BddTest().and('is not collapsible', () => {
      beforeEach(async () => {
        wrapper = await mountWithRouter<typeof AvCard>(AvCard, {
          props: {
            collapsible: false,
          },
          slots: {
            title: '<h2>Titre</h2>',
            default: '<p>Contenu principal</p>',
          },
          global: {
            stubs,
          },
        })
      })

      BddTest().then('it should not render the toggle button', () => {
        const toggleButton = wrapper.findComponent(AvButtonStub)
        expect(toggleButton.exists()).toBe(false)
      })

      BddTest().then('it should always show content', async () => {
        const content = wrapper.find('.av-card__content-collapsible')
        expect(content.isVisible()).toBe(true)
      })

      BddTest().and('the cursor is moved into an interactive element inside the card', () => {
        beforeEach(async () => {
          const interactiveElement = document.createElement('button')
          interactiveElement.className = 'interactive-element'
          wrapper.element.querySelector('.av-card__title')?.appendChild(interactiveElement)
          await wrapper.find('.interactive-element').trigger('mousemove')
        })

        BddTest().then('it should not render hovering-interactive class', () => {
          const card = wrapper.get('.av-card')
          expect(card.classes()).not.toContain('av-card--hovering-interactive')
        })
      })
    })

    BddTest().and('is collapsible and not collapsed', () => {
      beforeEach(async () => {
        wrapper = await mountWithRouter<typeof AvCard>(AvCard, {
          props: {
            collapsible: true,
            collapsed: false,
          },
          slots: {
            title: '<h2>Titre</h2>',
            default: '<p>Contenu principal</p>',
          },
          global: {
            stubs,
          },
        })
      })

      BddTest().then('it should render the toggle button', () => {
        const toggleButton = wrapper.findComponent(AvButtonStub)
        expect(toggleButton.exists()).toBe(true)
      })

      BddTest().then('it should render the non collapsed icon', () => {
        const toggleButton = wrapper.findComponent(AvButtonStub)
        expect(toggleButton.props('icon')).toBe(MDI_ICONS.CHEVRON_LEFT)
      })

      BddTest().and('the card is clicked', () => {
        beforeEach(async () => {
          await wrapper.find('.av-card').trigger('click')
        })

        BddTest().then('it should render the collapsed icon', () => {
          const toggleButton = wrapper.findComponent(AvButtonStub)
          expect(toggleButton.props('icon')).toBe(MDI_ICONS.CHEVRON_DOWN)
        })
      })

      BddTest().and('the card is clicked on an interactive tag element', () => {
        beforeEach(async () => {
          const interactiveElement = document.createElement('button')
          interactiveElement.className = 'interactive-element'
          wrapper.element.querySelector('.av-card__title')?.appendChild(interactiveElement)
          await wrapper.find('.interactive-element').trigger('click')
        })

        BddTest().then('it should still render the non collapsed icon', () => {
          const toggleButton = wrapper.findComponent(AvButtonStub)
          expect(toggleButton.props('icon')).toBe(MDI_ICONS.CHEVRON_LEFT)
        })
      })

      BddTest().and('the card is clicked on a non-interactive tag element', () => {
        beforeEach(async () => {
          const nonInteractiveElement = document.createElement('div')
          nonInteractiveElement.className = 'non-interactive-element'
          wrapper.element.querySelector('.av-card__title')?.appendChild(nonInteractiveElement)
          await wrapper.find('.non-interactive-element').trigger('click')
        })

        BddTest().then('it should render the collapsed icon', () => {
          const toggleButton = wrapper.findComponent(AvButtonStub)
          expect(toggleButton.props('icon')).toBe(MDI_ICONS.CHEVRON_DOWN)
        })
      })

      BddTest().and('the card is clicked on an interactive role element', () => {
        beforeEach(async () => {
          const interactiveElement = document.createElement('div')
          interactiveElement.setAttribute('role', 'button')
          interactiveElement.className = 'interactive-role-element'
          wrapper.element.querySelector('.av-card__title')?.appendChild(interactiveElement)
          await wrapper.find('.interactive-role-element').trigger('click')
        })

        BddTest().then('it should still render the non collapsed icon', () => {
          const toggleButton = wrapper.findComponent(AvButtonStub)
          expect(toggleButton.props('icon')).toBe(MDI_ICONS.CHEVRON_LEFT)
        })
      })

      BddTest().and('the card is clicked on a non-interactive role element', () => {
        beforeEach(async () => {
          const nonInteractiveElement = document.createElement('div')
          nonInteractiveElement.setAttribute('role', 'article')
          nonInteractiveElement.className = 'non-interactive-role-element'
          wrapper.element.querySelector('.av-card__title')?.appendChild(nonInteractiveElement)
          await wrapper.find('.non-interactive-role-element').trigger('click')
        })

        BddTest().then('it should render the collapsed icon', () => {
          const toggleButton = wrapper.findComponent(AvButtonStub)
          expect(toggleButton.props('icon')).toBe(MDI_ICONS.CHEVRON_DOWN)
        })
      })

      BddTest().and('the card is clicked on an element with interactive tabindex', () => {
        beforeEach(async () => {
          const interactiveElement = document.createElement('div')
          interactiveElement.setAttribute('tabindex', '0')
          interactiveElement.className = 'interactive-tabindex-element'
          wrapper.element.querySelector('.av-card__title')?.appendChild(interactiveElement)
          await wrapper.find('.interactive-tabindex-element').trigger('click')
        })

        BddTest().then('it should still render the non collapsed icon', () => {
          const toggleButton = wrapper.findComponent(AvButtonStub)
          expect(toggleButton.props('icon')).toBe(MDI_ICONS.CHEVRON_LEFT)
        })
      })

      BddTest().and('the card is clicked on an element with non-interactive tabindex', () => {
        beforeEach(async () => {
          const nonInteractiveElement = document.createElement('div')
          nonInteractiveElement.setAttribute('tabindex', '-1')
          nonInteractiveElement.className = 'non-interactive-tabindex-element'
          wrapper.element.querySelector('.av-card__title')?.appendChild(nonInteractiveElement)
          await wrapper.find('.non-interactive-tabindex-element').trigger('click')
        })

        BddTest().then('it should render the collapsed icon', () => {
          const toggleButton = wrapper.findComponent(AvButtonStub)
          expect(toggleButton.props('icon')).toBe(MDI_ICONS.CHEVRON_DOWN)
        })
      })

      BddTest().and('the cursor is moved into the card', () => {
        beforeEach(async () => {
          await wrapper.find('.av-card').trigger('mousemove')
        })

        BddTest().then('it should not render hovering-interactive class', () => {
          const card = wrapper.get('.av-card')
          expect(card.classes()).not.toContain('av-card--hovering-interactive')
        })
      })

      BddTest().and('the cursor is moved into an interactive element inside the card', () => {
        beforeEach(async () => {
          const interactiveElement = document.createElement('button')
          interactiveElement.className = 'interactive-element'
          wrapper.element.querySelector('.av-card__title')?.appendChild(interactiveElement)
          await wrapper.find('.interactive-element').trigger('mousemove')
        })

        BddTest().then('it should render hovering-interactive class', () => {
          const card = wrapper.get('.av-card')
          expect(card.classes()).toContain('av-card--hovering-interactive')
        })
      })

      BddTest().and('the cursor is moved into the collapse toggle button', () => {
        beforeEach(async () => {
          const toggleButton = wrapper.findComponent(AvButtonStub)
          await toggleButton.trigger('mousemove')
        })

        BddTest().then('it should not render hovering-interactive class', () => {
          const card = wrapper.get('.av-card')
          expect(card.classes()).not.toContain('av-card--hovering-interactive')
        })
      })

      BddTest().and('the toggle button is clicked', () => {
        beforeEach(async () => {
          const toggleButton = wrapper.findComponent(AvButtonStub)
          await toggleButton.trigger('click')
        })

        BddTest().then('it should render the collapsed icon', () => {
          const toggleButton = wrapper.findComponent(AvButtonStub)
          expect(toggleButton.props('icon')).toBe(MDI_ICONS.CHEVRON_DOWN)
        })
      })
    })

    BddTest().and('is collapsible and collapsed', () => {
      beforeEach(async () => {
        wrapper = await mountWithRouter<typeof AvCard>(AvCard, {
          props: {
            collapsible: true,
            collapsed: true,
          },
          slots: {
            title: '<h2>Titre</h2>',
            default: '<p>Contenu principal</p>',
          },
          global: {
            stubs,
          },
        })
      })

      BddTest().then('it should render the collapsed icon', () => {
        const toggleButton = wrapper.findComponent(AvButtonStub)
        expect(toggleButton.props('icon')).toBe(MDI_ICONS.CHEVRON_DOWN)
      })
    })

    BddTest().and('is in title only mode', () => {
      beforeEach(async () => {
        wrapper = await mountWithRouter<typeof AvCard>(AvCard, {
          props: {
            titleOnly: true,
          },
          slots: {
            title: '<h2>Titre</h2>',
            default: '<p>Contenu principal</p>',
          },
          global: {
            stubs,
          },
        })
      })

      BddTest().then('it should apply the title-only class to the title section', () => {
        const title = wrapper.get('.av-card__title')
        expect(title.classes()).toContain('av-card__title--title-only')
      })

      BddTest().then('it should render the title slot content', () => {
        expect(wrapper.text()).toContain('Titre')
      })

      BddTest().then('it should not render the toggle button', () => {
        const toggleButton = wrapper.findComponent(AvButtonStub)
        expect(toggleButton.exists()).toBe(false)
      })

      BddTest().then('it should not show the content section', () => {
        expect(wrapper.text()).not.toContain('Contenu principal')
      })
    })
  })
})
