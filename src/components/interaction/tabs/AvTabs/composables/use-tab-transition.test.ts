import { useTabTransition } from '@/components/interaction/tabs/AvTabs/composables/use-tab-transition'
import { BddTest } from '@/tests'

BddTest().given('a tab transition composable', () => {
  BddTest().when('the direction is ascending', () => {
    const { translateValueFrom, translateValueTo } = useTabTransition(ref(true))

    BddTest().then('the translateValueFrom should be "100%"', () => {
      expect(translateValueFrom.value).toBe('100%')
    })

    BddTest().then('the translateValueTo should be "-100%"', () => {
      expect(translateValueTo.value).toBe('-100%')
    })
  })

  BddTest().when('the direction is descending', () => {
    const { translateValueFrom, translateValueTo } = useTabTransition(ref(false))

    BddTest().then('the translateValueFrom should be "-100%"', () => {
      expect(translateValueFrom.value).toBe('-100%')
    })

    BddTest().then('the translateValueTo should be "100%"', () => {
      expect(translateValueTo.value).toBe('100%')
    })
  })
})
