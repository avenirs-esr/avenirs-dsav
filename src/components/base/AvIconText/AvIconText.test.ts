import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect, vi } from 'vitest'
import AvIconText from '@/components/base/AvIconText/AvIconText.vue'
import { DEFAULT_ICON_SIZE_REM } from '@/components/base/AvIconText/utils'
import { AvIconStub, AvTooltipStub } from '@/tests'
import { BddTest } from '@/tests/utils'
import { MDI_ICONS } from '@/tokens'

BddTest().given('an AvIconText', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvIconText>>
  const stubs = { AvIcon: AvIconStub, AvTooltip: AvTooltipStub }

  const baseProps = {
    icon: MDI_ICONS.ACCOUNT_CIRCLE_OUTLINE,
    text: 'test',
  } as const

  const allProps = {
    ...baseProps,
    iconColor: 'var(--icon-color)',
    textColor: 'var(--text-color)',
    typographyClass: 'typography'
  }

  BddTest().when('the component is mounted', () => {
    beforeEach(() => {
      wrapper = mount(AvIconText, { props: baseProps, global: { stubs } })
    })

    BddTest().then('it should render properly', async () => {
      const icon = wrapper.findComponent({ name: 'AvIcon' })
      expect(icon.exists()).toBe(true)
      expect(icon.props('name')).toBe(baseProps.icon)
      expect(icon.props('color')).toBe('var(--text1)')

      const text = wrapper.find('.icon-text--text')
      expect(text.exists()).toBe(true)
      expect(text.text()).toContain(baseProps.text)
      expect(text.classes()).toContain('b2-regular')
    })

    BddTest().and('given props', () => {
      beforeEach(() => {
        wrapper = mount(AvIconText, { props: allProps, global: { stubs } })
      })

      BddTest().then('it should render properly', async () => {
        const icon = wrapper.findComponent({ name: 'AvIcon' })
        expect(icon.exists()).toBe(true)
        expect(icon.props('name')).toBe(allProps.icon)
        expect(icon.props('color')).toBe(allProps.iconColor)

        const text = wrapper.find('.icon-text--text')
        expect(text.exists()).toBe(true)
        expect(text.text()).toContain(allProps.text)
        expect(text.classes()).toContain(allProps.typographyClass)
      })
    })

    BddTest().and('given the inline prop', () => {
      beforeEach(() => {
        wrapper = mount(AvIconText, { props: { ...baseProps, inline: true }, global: { stubs } })
      })

      BddTest().then('it should not render the ellipsis classes', async () => {
        expect(wrapper.classes()).not.toContain('ellipsis-container')
        const text = wrapper.find('.icon-text--text')
        expect(text.classes()).not.toContain('av-max-lines')
      })
    })

    BddTest().and('not given the inline prop', () => {
      beforeEach(() => {
        wrapper = mount(AvIconText, { props: { ...baseProps, inline: false }, global: { stubs } })
      })

      BddTest().then('it should render the ellipsis classes', async () => {
        expect(wrapper.classes()).toContain('ellipsis-container')
        const text = wrapper.find('.icon-text--text')
        expect(text.classes()).toContain('av-max-lines')
      })
    })

    BddTest().and('given wrapAnywhere as true', () => {
      beforeEach(() => {
        wrapper = mount(AvIconText, { props: { ...baseProps, wrapAnywhere: true }, global: { stubs } })
      })

      BddTest().then('it should render wrapping class and disable ellipsis classes', async () => {
        expect(wrapper.classes()).not.toContain('ellipsis-container')

        const text = wrapper.find('.icon-text--text')
        expect(text.classes()).toContain('av-wrap-anywhere')
        expect(text.classes()).not.toContain('av-max-lines')
      })
    })

    BddTest().and('given a specific line height', () => {
      const expectedIconSize = 3

      beforeEach(() => {
        vi.spyOn(window, 'getComputedStyle').mockReturnValue({
          lineHeight: `${expectedIconSize}rem`,
          fontSize: '1rem',
        } as CSSStyleDeclaration)

        wrapper = mount(AvIconText, { props: { ...baseProps }, global: { stubs } })
      })

      BddTest().then('it should update the icon size accordingly', async () => {
        const icon = wrapper.findComponent({ name: 'AvIcon' })
        expect(icon.exists()).toBe(true)
        expect(icon.props('size')).toBe(expectedIconSize)
      })
    })

    BddTest().and('given null line height and font size', () => {
      const expectedIconSize = DEFAULT_ICON_SIZE_REM

      beforeEach(() => {
        vi.spyOn(window, 'getComputedStyle').mockReturnValue({
          lineHeight: '0',
          fontSize: '0',
        } as CSSStyleDeclaration)

        wrapper = mount(AvIconText, { props: { ...baseProps }, global: { stubs } })
      })

      BddTest().then('it should fallback the icon size to default icon size', async () => {
        const icon = wrapper.findComponent({ name: 'AvIcon' })
        expect(icon.exists()).toBe(true)
        expect(icon.props('size')).toBe(expectedIconSize)
      })
    })
  })
})
