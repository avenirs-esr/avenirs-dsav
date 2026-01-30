import { mount, type VueWrapper } from '@vue/test-utils'
import AvIcon from '@/components/base/AvIcon/AvIcon.vue'
import { BddTest } from '@/tests/utils'

BddTest().given('an AvIcon component', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvIcon>>

  const animations = ['spin', 'wrench', 'pulse', 'spin-pulse', 'flash', 'float', 'ring']
  const speeds = ['slow', 'fast']

  BddTest().when('it is mounted with default props', () => {
    beforeEach(() => {
      wrapper = mount(AvIcon, {
        props: { name: 'mdi:test' },
      })
    })

    BddTest().then('it should render the icon', () => {
      const avIcon = wrapper.find('.av-icon')
      expect(avIcon.exists()).toBe(true)

      const icon = avIcon.find('.av-icon__icon')
      expect(icon.exists()).toBe(true)
      expect(icon.attributes('style')).toContain('--icon-path: var(--icon-mdi-test);')
    })

    BddTest().then('it should not have any animation classes', () => {
      const avIcon = wrapper.find('.av-icon')

      for (const animation of animations) {
        expect(avIcon.classes()).not.toContain(`av-icon--${animation}`)
      }
    })

    BddTest().then('it should not have any speed classes', () => {
      const avIcon = wrapper.find('.av-icon')

      for (const speed of speeds) {
        expect(avIcon.classes()).not.toContain(`av-icon--${speed}`)
      }
    })

    BddTest().then('it should not have title attribute', () => {
      const icon = wrapper.find('.av-icon')
      expect(icon.attributes('title')).toBeUndefined()
    })
  })

  BddTest().when('it is mounted with all props set', () => {
    beforeEach(() => {
      wrapper = mount(AvIcon, {
        props: {
          name: 'mdi:test',
          size: 2,
          color: 'red',
          animation: 'spin',
          speed: 'fast',
          flip: 'horizontal',
          title: 'Test Icon',
        },
      })
    })

    BddTest().then('it should have correct animation class', () => {
      const avIcon = wrapper.find('.av-icon')
      expect(avIcon.classes()).toContain('av-icon--spin')

      for (const animation of animations) {
        if (animation !== 'spin') {
          expect(avIcon.classes()).not.toContain(`av-icon--${animation}`)
        }
      }
    })

    BddTest().then('it should have correct speed class', () => {
      const avIcon = wrapper.find('.av-icon')
      expect(avIcon.classes()).toContain('av-icon--fast')

      for (const speed of speeds) {
        if (speed !== 'fast') {
          expect(avIcon.classes()).not.toContain(`av-icon--${speed}`)
        }
      }
    })

    BddTest().then('it should have correct flip styles', () => {
      const icon = wrapper.find('.av-icon__icon')
      expect(icon.attributes('style')).toContain('transform: scaleX(-1);')
    })

    BddTest().then('it should have title attribute set', () => {
      const icon = wrapper.find('.av-icon')
      expect(icon.attributes('title')).toBe('Test Icon')
    })
  })
})
