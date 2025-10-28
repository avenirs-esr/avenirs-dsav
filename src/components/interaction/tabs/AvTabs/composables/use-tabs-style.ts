import type { Ref } from 'vue'

/**
 * Return type of useTabsStyle composable
 */
export interface UseTabsStyleReturn {
  /**
   * Reactive tabs style object to bind to the tabs container
   */
  tabsStyle: Ref<Record<string, string>>

  /**
   * Function to update the tabs style (height)
   */
  updateTabsStyle: () => void
}

/**
 * Composable to manage the tabs style (height) based on the active tab and tablist height
 * @param tablist tablist element reference
 * @param tabs tabs elements reference array
 * @param activeTab active tab index reference
 * @returns tabsStyle and updateTabsStyle function
 */
export function useTabsStyle (
  tablist: Ref<HTMLElement | null>,
  tabs: Ref<HTMLElement[]>,
  activeTab: Ref<number>,
) {
  const tabsStyle = ref({ '--tabs-height': '100px' })

  function updateTabsStyle () {
    if (activeTab.value < 0) {
      return
    }
    if (!tablist.value || !tablist.value.offsetHeight) {
      return
    }
    const tablistHeight = tablist.value.offsetHeight

    const selectedTab = tabs.value[activeTab.value]
    if (!selectedTab || !selectedTab.offsetHeight) {
      return
    }

    const selectedTabHeight = selectedTab.offsetHeight
    tabsStyle.value['--tabs-height'] = `${tablistHeight + selectedTabHeight}px`
  }

  return { tabsStyle, updateTabsStyle }
}
