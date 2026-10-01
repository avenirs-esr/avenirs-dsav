import { mount } from '@vue/test-utils'
import { afterEach, expect } from 'vitest'
import { useTooltipVisibilityCoordination } from '@/composables/use-tooltip-visibility-coordination/use-tooltip-visibility-coordination'
import { BddTest, mountComposable } from '@/tests/utils'

BddTest().given('a useTooltipVisibilityCoordination composable', () => {
  BddTest().when('used by a single, non-nested tooltip', () => {
    const isTriggered = ref(false)
    const { result, unmount } = mountComposable(() => useTooltipVisibilityCoordination(isTriggered))

    afterEach(() => {
      isTriggered.value = false
      unmount()
    })

    BddTest().then('it should not show by default', () => {
      expect(result.shouldShow.value).toBe(false)
    })

    BddTest().and('the tooltip is triggered', () => {
      beforeEach(() => {
        isTriggered.value = true
      })

      BddTest().then('it should show', () => {
        expect(result.shouldShow.value).toBe(true)
      })
    })
  })

  BddTest().when('a child tooltip is nested within a parent tooltip in the same component tree', () => {
    const parentTriggered = ref(false)
    const childTriggered = ref(false)

    const Child = defineComponent({
      setup () {
        const { shouldShow } = useTooltipVisibilityCoordination(childTriggered)
        return { shouldShow }
      },
      template: '<span />'
    })

    const Parent = defineComponent({
      components: { Child },
      setup () {
        const { shouldShow } = useTooltipVisibilityCoordination(parentTriggered)
        return { shouldShow }
      },
      template: '<div><Child ref="child" /></div>'
    })

    let wrapper: ReturnType<typeof mount<typeof Parent>>

    beforeEach(() => {
      parentTriggered.value = false
      childTriggered.value = false
      wrapper = mount(Parent)
    })

    afterEach(() => {
      wrapper.unmount()
    })

    function childShouldShow (): boolean {
      return (wrapper.vm.$refs.child as { shouldShow: boolean }).shouldShow
    }

    BddTest().and('both the parent and the child are triggered', () => {
      beforeEach(async () => {
        parentTriggered.value = true
        childTriggered.value = true
        await wrapper.vm.$nextTick()
      })

      BddTest().then('it should hide the parent and show only the child', () => {
        expect(wrapper.vm.shouldShow).toBe(false)
        expect(childShouldShow()).toBe(true)
      })

      BddTest().and('the child is no longer triggered', () => {
        beforeEach(async () => {
          childTriggered.value = false
          await wrapper.vm.$nextTick()
        })

        BddTest().then('it should show the parent again', () => {
          expect(wrapper.vm.shouldShow).toBe(true)
          expect(childShouldShow()).toBe(false)
        })
      })
    })
  })
})
