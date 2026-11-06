import type { VueWrapper } from '@vue/test-utils'
import type { AvNoticeProps } from '@/components/base/AvNotice/AvNotice.vue'
import { mount } from '@vue/test-utils'
import { expect } from 'vitest'
import AvNotice from '@/components/base/AvNotice/AvNotice.vue'
import { BddTest } from '@/tests/utils'

BddTest().given('an AvNotice', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvNotice>>

  const props: AvNoticeProps = {
    title: 'Titre test',
    text: 'Texte sans mise en forme',
    type: 'info',
  }

  const mountNotice = (overrides: Partial<AvNoticeProps> = {}) => {
    wrapper = mount(AvNotice, {
      props: { ...props, ...overrides },
    })
  }

  BddTest().when('the component is mounted', () => {
    BddTest().then('it should display title correctly', () => {
      mountNotice()

      expect(wrapper.text()).toContain('Titre test')
    })

    BddTest().and('type is warning', () => {
      BddTest().then('it should manage the type of notice', () => {
        mountNotice({ type: 'warning' })

        expect(wrapper.find('.av-notice--warning').exists()).toBe(true)
      })
    })

    BddTest().and('type is alert', () => {
      BddTest().then('it should manage the type of notice', () => {
        mountNotice({ type: 'alert' })

        expect(wrapper.find('.av-notice--alert').exists()).toBe(true)
      })
    })

    BddTest().and('text with underlines is passed', () => {
      BddTest().then('it should format text between __ in span.text-underline', () => {
        mountNotice({ text: 'Voici un texte avec __partie soulignée__ ici.' })

        const span = wrapper.find('.text-underline')

        expect(span.exists()).toBe(true)
        expect(span.text()).toBe('partie soulignée')
      })
    })

    BddTest().and('there is no __ in the text', () => {
      BddTest().then('it should not create span.text-underline', () => {
        mountNotice()

        expect(wrapper.find('.text-underline').exists()).toBe(false)
      })
    })

    BddTest().and('the description contains malicious HTML', () => {
      BddTest().then('it should sanitize the description', () => {
        mountNotice({
          text: '<img src="x" onerror="alert(1)">',
        })

        const image = wrapper.find('img')

        expect(image.exists()).toBe(true)
        expect(image.attributes('onerror')).toBeUndefined()
      })
    })

    BddTest().and('the description contains a script tag', () => {
      BddTest().then('it should remove the script tag', () => {
        mountNotice({
          text: '<script>alert("XSS")</script>',
        })

        expect(wrapper.find('script').exists()).toBe(false)
      })
    })

    BddTest().and('the global prop is true', () => {
      BddTest().then('it should add the global classes', () => {
        mountNotice({ global: true })

        expect(wrapper.find('.av-notice--global').exists()).toBe(true)
        expect(wrapper.find('.av-container').exists()).toBe(true)
      })
    })

    BddTest().and('the global prop is false', () => {
      BddTest().then('it should not add the global classes', () => {
        mountNotice()

        expect(wrapper.find('.av-notice--global').exists()).toBe(false)
        expect(wrapper.find('.av-container').exists()).toBe(false)
      })
    })
  })
})
