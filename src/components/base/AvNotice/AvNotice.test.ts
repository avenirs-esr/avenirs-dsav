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
    BddTest().then('it should display the title', () => {
      mountNotice()

      expect(wrapper.find('.b2-bold').text()).toBe('Titre test')
    })

    BddTest().and('no title is provided', () => {
      BddTest().then('it should not render the title element', () => {
        mountNotice({ title: '' })

        expect(wrapper.find('.b2-bold').exists()).toBe(false)
      })
    })

    BddTest().and('no title is provided', () => {
      BddTest().then('it should still render the content', () => {
        mountNotice({ title: '' })

        expect(wrapper.find('.av-notice__content').exists()).toBe(true)
        expect(wrapper.find('.b2-regular').text()).toBe('Texte sans mise en forme')
      })
    })

    BddTest().and('text is provided', () => {
      BddTest().then('it should display the text', () => {
        mountNotice()

        expect(wrapper.find('.b2-regular').text()).toBe('Texte sans mise en forme')
      })
    })

    BddTest().and('text contains safe HTML', () => {
      BddTest().then('it should render the HTML', () => {
        mountNotice({
          text: '<strong>Texte important</strong>',
        })

        const strong = wrapper.find('.b2-regular strong')

        expect(strong.exists()).toBe(true)
        expect(strong.text()).toBe('Texte important')
      })
    })

    BddTest().and('text contains malicious HTML', () => {
      BddTest().then('it should remove dangerous attributes', () => {
        mountNotice({
          text: '<img src="x" onerror="alert(1)">',
        })

        const image = wrapper.find('img')

        expect(image.exists()).toBe(true)
        expect(image.attributes('onerror')).toBeUndefined()
      })
    })

    BddTest().and('text contains a script tag', () => {
      BddTest().then('it should remove the script tag and its content', () => {
        mountNotice({
          text: '<script>alert("XSS")</script>',
        })

        expect(wrapper.find('script').exists()).toBe(false)
        expect(wrapper.html()).not.toContain('alert("XSS")')
      })
    })

    BddTest().and('text contains a javascript URL', () => {
      BddTest().then('it should remove the dangerous URL', () => {
        mountNotice({
          text: '<a href="javascript:alert(1)">Clique ici</a>',
        })

        const link = wrapper.find('a')

        expect(link.exists()).toBe(true)
        expect(link.attributes('href')).toBeUndefined()
        expect(link.text()).toBe('Clique ici')
      })
    })

    BddTest().and('text is empty', () => {
      BddTest().then('it should render an empty description', () => {
        mountNotice({ text: '' })

        expect(wrapper.find('.b2-regular').exists()).toBe(true)
        expect(wrapper.find('.b2-regular').text()).toBe('')
      })
    })

    BddTest().and('type is warning', () => {
      BddTest().then('it should add the warning class', () => {
        mountNotice({ type: 'warning' })

        expect(wrapper.find('.av-notice--warning').exists()).toBe(true)
      })
    })

    BddTest().and('type is alert', () => {
      BddTest().then('it should add the alert class', () => {
        mountNotice({ type: 'alert' })

        expect(wrapper.find('.av-notice--alert').exists()).toBe(true)
      })
    })

    BddTest().and('type is info', () => {
      BddTest().then('it should add the info class', () => {
        mountNotice({ type: 'info' })

        expect(wrapper.find('.av-notice--info').exists()).toBe(true)
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
