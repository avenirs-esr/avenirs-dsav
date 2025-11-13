import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect } from 'vitest'
import AvMessage, { type AvMessageProps } from '@/components/base/AvMessage/AvMessage.vue'
import { AvIconTextStub } from '@/tests'
import { BddTest } from '@/tests/utils'

BddTest().given('an AvMessage', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvMessage>>
  const stubs = { AvIconText: AvIconTextStub }

  BddTest().and('the info type', () => {
    const props: AvMessageProps = { type: 'info', message: 'This is an info message' }

    BddTest().when('the component is mounted', () => {
      beforeEach(() => {
        wrapper = mount(AvMessage, { props, stubs })
      })

      BddTest().then('it should render the AvIconText with info icon and message', () => {
        const avIconText = wrapper.findComponent(AvIconTextStub)
        expect(avIconText.exists()).toBe(true)
        expect(avIconText.props('icon')).toBe('mdi:information-box-outline')
        expect(avIconText.props('text')).toBe('This is an info message')
      })
    })
  })

  BddTest().and('the success type', () => {
    const props: AvMessageProps = { type: 'success', message: 'This is a success message' }

    BddTest().when('the component is mounted', () => {
      beforeEach(() => {
        wrapper = mount(AvMessage, { props, stubs })
      })

      BddTest().then('it should render the AvIconText with success icon and message', () => {
        const avIconText = wrapper.findComponent(AvIconTextStub)
        expect(avIconText.exists()).toBe(true)
        expect(avIconText.props('icon')).toBe('mdi:success-circle-outline')
        expect(avIconText.props('text')).toBe('This is a success message')
      })
    })
  })

  BddTest().and('the warning type', () => {
    const props: AvMessageProps = { type: 'warning', message: 'This is a warning message' }

    BddTest().when('the component is mounted', () => {
      beforeEach(() => {
        wrapper = mount(AvMessage, { props, stubs })
      })

      BddTest().then('it should render the AvIconText with warning icon and message', () => {
        const avIconText = wrapper.findComponent(AvIconTextStub)
        expect(avIconText.exists()).toBe(true)
        expect(avIconText.props('icon')).toBe('mdi:warning-outline')
        expect(avIconText.props('text')).toBe('This is a warning message')
      })
    })
  })

  BddTest().and('the error type', () => {
    const props: AvMessageProps = { type: 'error', message: 'This is an error message' }

    BddTest().when('the component is mounted', () => {
      beforeEach(() => {
        wrapper = mount(AvMessage, { props, stubs })
      })

      BddTest().then('it should render the AvIconText with error icon and message', () => {
        const avIconText = wrapper.findComponent(AvIconTextStub)
        expect(avIconText.exists()).toBe(true)
        expect(avIconText.props('icon')).toBe('mdi:close-octagon')
        expect(avIconText.props('text')).toBe('This is an error message')
      })
    })
  })

  BddTest().and('no message provided', () => {
    const props: AvMessageProps = { type: 'info' }

    BddTest().when('the component is mounted', () => {
      beforeEach(() => {
        wrapper = mount(AvMessage, { props, stubs })
      })

      BddTest().then('it should not render the AvIconText', () => {
        const avIconText = wrapper.findComponent(AvIconTextStub)
        expect(avIconText.exists()).toBe(false)
      })
    })
  })

  BddTest().and('multiple messages provided', () => {
    const props: AvMessageProps = {
      type: 'error',
      message: ['Error 1 occurred', 'Error 2 occurred', 'Error 3 occurred'],
    }

    BddTest().when('the component is mounted', () => {
      beforeEach(() => {
        wrapper = mount(AvMessage, { props, stubs })
      })

      BddTest().then('it should render multiple AvIconText components with error icon and messages', () => {
        const avIconTextComponents = wrapper.findAllComponents(AvIconTextStub)
        expect(avIconTextComponents.length).toBe(3)

        avIconTextComponents.forEach((component, index) => {
          expect(component.props('icon')).toBe('mdi:close-octagon')
          expect(component.props('text')).toBe(`Error ${index + 1} occurred`)
        })
      })
    })
  })
})
