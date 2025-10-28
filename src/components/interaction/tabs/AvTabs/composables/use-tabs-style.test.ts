import type { Ref } from 'vue'
import { useTabsStyle } from '@/components/interaction/tabs/AvTabs/composables/use-tabs-style'
import { BddTest } from '@/tests'

BddTest().given('a tabs style composable', () => {
  let tablist: Ref<HTMLElement | null>
  let tabs: Ref<HTMLElement[]>
  let activeTab: Ref<number>
  let result: {
    tabsStyle: { value: Record<string, string> }
    updateTabsStyle: () => void
  }

  BddTest().and('with tablist, tabs and activeTab references', () => {
    beforeEach(() => {
      tablist = ref(null)
      tabs = ref([])
      activeTab = ref(0)
    })

    BddTest().when('the composable is used', () => {
      beforeEach(() => {
        result = useTabsStyle(tablist, tabs, activeTab)
      })

      BddTest().then('it should return tabsStyle and updateTabsStyle', () => {
        expect(result).toHaveProperty('tabsStyle')
        expect(result).toHaveProperty('updateTabsStyle')
        expect(result.tabsStyle.value).toEqual({ '--tabs-height': '100px' })
      })

      BddTest().when('updateTabsStyle is called with invalid activeTab', () => {
        beforeEach(() => {
          activeTab.value = -1
          result.updateTabsStyle()
        })

        BddTest().then('it should not update tabsStyle', () => {
          expect(result.tabsStyle.value).toEqual({ '--tabs-height': '100px' })
        })
      })

      BddTest().when('updateTabsStyle is called with no tablist or tabs', () => {
        beforeEach(() => {
          tablist.value = null
          tabs.value = []
          result.updateTabsStyle()
        })

        BddTest().then('it should not update tabsStyle', () => {
          expect(result.tabsStyle.value).toEqual({ '--tabs-height': '100px' })
        })
      })

      BddTest().when('updateTabsStyle is called with valid activeTab and elements', () => {
        beforeEach(() => {
          // Simulate elements with offsetHeight
          tablist.value = { offsetHeight: 50 } as unknown as HTMLElement
          tabs.value = [
            { offsetHeight: 100 } as unknown as HTMLElement,
            { offsetHeight: 150 } as unknown as HTMLElement
          ]
          activeTab.value = 1
          result.updateTabsStyle()
        })

        BddTest().then('it should update tabsStyle according to tablist and selected tab height', () => {
          expect(result.tabsStyle.value['--tabs-height']).toBe('200px') // 50 + 150
        })

        BddTest().when('activeTab changes and updateTabsStyle is called again', () => {
          beforeEach(() => {
            activeTab.value = 0
            result.updateTabsStyle()
          })

          BddTest().then('it should reflect new active tab height', () => {
            expect(result.tabsStyle.value['--tabs-height']).toBe('150px') // 50 + 100
          })
        })
      })
    })
  })
})
