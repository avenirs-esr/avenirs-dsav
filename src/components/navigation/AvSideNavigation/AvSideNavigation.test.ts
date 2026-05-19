import { mount } from '@vue/test-utils'
import { beforeEach, expect } from 'vitest'
import AvSideNavigation, { type AvSideNavigationMenuItem } from '@/components/navigation/AvSideNavigation/AvSideNavigation.vue'
import { BddTest } from '@/tests/utils'
import { MDI_ICONS } from '@/tokens'

const mockItems: AvSideNavigationMenuItem[] = [
  {
    id: 'careers',
    label: 'Career Information',
    icon: MDI_ICONS.BRIEFCASE_VARIANT_OUTLINE
  },
  {
    id: 'educations',
    label: 'Educational Background',
    icon: MDI_ICONS.SCHOOL_OUTLINE
  },
  {
    id: 'experiences',
    label: 'Professional Experience',
    icon: MDI_ICONS.VECTOR_POLYGON_VARIANT
  },
  {
    id: 'activities',
    label: 'Activities & Projects',
    icon: MDI_ICONS.TARGET_ARROW
  },
  {
    id: 'with-subitems',
    label: 'Item with Subitems',
    icon: MDI_ICONS.ACCOUNT_CIRCLE_OUTLINE,
    children: [
      {
        id: 'subitem-1',
        label: 'Subitem 1',
        icon: MDI_ICONS.FILE
      },
      {
        id: 'subitem-2',
        label: 'Subitem 2',
        icon: MDI_ICONS.FILE
      }
    ]
  }
]

const stubs = {
  AvSideMenu: {
    name: 'AvSideMenu',
    props: ['collapsed', 'collapsedWidth'],
    emits: ['update:collapsed'],
    template: '<div class="av-side-menu-stub"><slot /></div>'
  },
  AvList: {
    name: 'AvList',
    props: ['size', 'role'],
    template: '<div class="av-list-stub"><slot /></div>'
  },
  AvListItem: {
    name: 'AvListItem',
    props: ['title', 'icon', 'iconSize', 'selected', 'role'],
    emits: ['click'],
    template: `
      <button class="av-list-item-stub" @click="$emit(\'click\')" :data-selected="selected" :data-icon="icon" :data-title="title" v-bind="$attrs">
        {{ title }}
        <slot />
      </button>
    `
  }
}

BddTest().given('an AvSideNavigation component', () => {
  let wrapper: ReturnType<typeof mount<typeof AvSideNavigation>>

  function getExpandedMenu () {
    return wrapper.find(`[data-testid="expanded-menu-${mockItems[4].id}"]`)
  }

  function getCollapsedMenu () {
    return wrapper.find(`[data-testid="collapsed-menu-${mockItems[4].id}"]`)
  }

  BddTest().when('mounted with default props', () => {
    beforeEach(() => {
      wrapper = mount(AvSideNavigation, {
        props: {
          items: mockItems
        },
        global: {
          stubs
        }
      })
    })

    BddTest().then('it should render AvSideMenu with default props', () => {
      const sideMenu = wrapper.findComponent({ name: 'AvSideMenu' })
      expect(sideMenu.exists()).toBe(true)
      expect(sideMenu.props('collapsedWidth')).toBe('3.5rem')
    })

    BddTest().then('it should render AvList with correct props', () => {
      const list = wrapper.findComponent({ name: 'AvList' })
      expect(list.exists()).toBe(true)
      expect(list.props('size')).toBe('small')
      expect(list.props('role')).toBe('menu')
    })

    BddTest().then('it should render navigation items with correct properties', () => {
      const listItems = wrapper.findAllComponents({ name: 'AvListItem' })
      expect(listItems).toHaveLength(7)

      expect(listItems[0].props()).toMatchObject({
        title: 'Career Information',
        icon: MDI_ICONS.BRIEFCASE_VARIANT_OUTLINE,
        iconSize: 1.8,
        selected: false,
        role: 'menuitem',
      })

      expect(listItems[1].props()).toMatchObject({
        title: 'Educational Background',
        icon: MDI_ICONS.SCHOOL_OUTLINE,
        iconSize: 1.8,
        selected: false,
        role: 'menuitem',
      })

      expect(listItems[2].props()).toMatchObject({
        title: 'Professional Experience',
        icon: MDI_ICONS.VECTOR_POLYGON_VARIANT,
        iconSize: 1.8,
        selected: false,
        role: 'menuitem',
      })

      expect(listItems[3].props()).toMatchObject({
        title: 'Activities & Projects',
        icon: MDI_ICONS.TARGET_ARROW,
        iconSize: 1.8,
        selected: false,
        role: 'menuitem',
      })
    })
  })

  BddTest().when('mounted with selectedItem prop', () => {
    beforeEach(() => {
      wrapper = mount(AvSideNavigation, {
        props: {
          items: mockItems,
          selectedItem: { itemId: 'educations' }
        },
        global: {
          stubs
        }
      })
    })

    BddTest().then('it should mark the correct item as selected', () => {
      const listItems = wrapper.findAllComponents({ name: 'AvListItem' })

      expect(listItems[0].props('selected')).toBe(false)
      expect(listItems[1].props('selected')).toBe(true)
      expect(listItems[2].props('selected')).toBe(false)
      expect(listItems[3].props('selected')).toBe(false)
    })
  })

  BddTest().when('mounted with custom collapsedWidth', () => {
    beforeEach(() => {
      wrapper = mount(AvSideNavigation, {
        props: {
          items: mockItems,
          collapsedWidth: '5rem'
        },
        global: {
          stubs
        }
      })
    })

    BddTest().then('it should pass collapsedWidth to AvSideMenu', () => {
      const sideMenu = wrapper.findComponent({ name: 'AvSideMenu' })
      expect(sideMenu.props('collapsedWidth')).toBe('5rem')
    })
  })

  BddTest().when('side menu is collapsed', () => {
    beforeEach(() => {
      wrapper = mount(AvSideNavigation, {
        props: {
          items: mockItems,
          isSideMenuCollapsed: true
        },
        global: {
          stubs
        }
      })
    })

    BddTest().then('it should still show titles for list items', () => {
      const listItems = wrapper.findAllComponents({ name: 'AvListItem' })

      listItems.forEach((item) => {
        expect(item.props('title')).toBeDefined()
      })
    })

    BddTest().then('it should apply collapsed CSS class to list items', () => {
      const listItems = wrapper.findAllComponents({ name: 'AvListItem' })

      listItems.forEach((item) => {
        expect(item.classes()).toContain('av-side-navigation__menu-item--collapsed')
      })
    })
  })

  BddTest().when('side menu is not collapsed', () => {
    beforeEach(() => {
      wrapper = mount(AvSideNavigation, {
        props: {
          items: mockItems,
          isSideMenuCollapsed: false
        },
        global: {
          stubs
        }
      })
    })

    BddTest().then('it should show titles for list items', () => {
      const listItems = wrapper.findAllComponents({ name: 'AvListItem' })

      expect(listItems[0].props('title')).toBe('Career Information')
      expect(listItems[1].props('title')).toBe('Educational Background')
      expect(listItems[2].props('title')).toBe('Professional Experience')
      expect(listItems[3].props('title')).toBe('Activities & Projects')
    })

    BddTest().then('it should not apply collapsed CSS class to list items', () => {
      const listItems = wrapper.findAllComponents({ name: 'AvListItem' })

      listItems.forEach((item) => {
        expect(item.classes()).not.toContain('av-side-navigation__menu-item--collapsed')
      })
    })
  })

  BddTest().when('a navigation item is clicked', () => {
    beforeEach(() => {
      wrapper = mount(AvSideNavigation, {
        props: {
          items: mockItems
        },
        global: {
          stubs
        }
      })
    })

    BddTest().then('it should emit update:selectedItem event', async () => {
      const listItems = wrapper.findAllComponents({ name: 'AvListItem' })

      await listItems[2].trigger('click')

      expect(wrapper.emitted('update:selectedItem')).toBeTruthy()
      expect(wrapper.emitted('update:selectedItem')?.[0]).toEqual([{ itemId: 'experiences' }])
    })

    BddTest().then('it should update the selected state when selectedItem prop changes', async () => {
      const listItems = wrapper.findAllComponents({ name: 'AvListItem' })

      await wrapper.setProps({ selectedItem: { itemId: 'activities' } })

      expect(listItems[0].props('selected')).toBe(false)
      expect(listItems[1].props('selected')).toBe(false)
      expect(listItems[2].props('selected')).toBe(false)
      expect(listItems[3].props('selected')).toBe(true)
      expect(listItems[4].props('selected')).toBe(false)
      expect(listItems[5].props('selected')).toBe(false)
      expect(listItems[6].props('selected')).toBe(false)
    })
  })

  BddTest().when('a navigation item with children is clicked multiple times', () => {
    beforeEach(async () => {
      wrapper = mount(AvSideNavigation, {
        props: {
          items: mockItems
        },
        global: {
          stubs
        }
      })
    })

    BddTest().then('it should toggle the expanded state of the item', async () => {
      expect(getExpandedMenu().exists()).toBe(false)
      expect(getCollapsedMenu().exists()).toBe(true)

      await getCollapsedMenu().trigger('click')

      expect(getExpandedMenu().exists()).toBe(true)
      expect(getCollapsedMenu().exists()).toBe(false)

      await getExpandedMenu().trigger('click')

      expect(getExpandedMenu().exists()).toBe(false)
      expect(getCollapsedMenu().exists()).toBe(true)
    })
  })

  BddTest().when('a navigation subitem is clicked', () => {
    beforeEach(async () => {
      wrapper = mount(AvSideNavigation, {
        props: {
          items: mockItems
        },
        global: {
          stubs
        }
      })

      expect(getExpandedMenu().exists()).toBe(false)
      expect(getCollapsedMenu().exists()).toBe(true)

      await getCollapsedMenu().trigger('click')

      expect(getExpandedMenu().exists()).toBe(true)
      expect(getCollapsedMenu().exists()).toBe(false)
    })

    BddTest().then('it should emit update:selectedItem event', async () => {
      const listItems = wrapper.findAllComponents({ name: 'AvListItem' })

      await listItems[5].trigger('click')

      expect(wrapper.emitted('update:selectedItem')).toBeTruthy()
      expect(wrapper.emitted('update:selectedItem')?.[0]).toEqual([{ itemId: 'subitem-1', parentId: 'with-subitems' }])
    })

    BddTest().then('it should update the selected state when selectedItem prop changes', async () => {
      const listItems = wrapper.findAllComponents({ name: 'AvListItem' })

      await wrapper.setProps({ selectedItem: { itemId: 'subitem-1', parentId: 'with-subitems' } })

      expect(listItems[0].props('selected')).toBe(false)
      expect(listItems[1].props('selected')).toBe(false)
      expect(listItems[2].props('selected')).toBe(false)
      expect(listItems[3].props('selected')).toBe(false)
      expect(listItems[4].props('selected')).toBe(true)
      expect(listItems[5].props('selected')).toBe(true)
      expect(listItems[6].props('selected')).toBe(false)
    })

    BddTest().then('it should keep backward compatibility with child-only selectedItem', async () => {
      const listItems = wrapper.findAllComponents({ name: 'AvListItem' })

      await wrapper.setProps({ selectedItem: { itemId: 'subitem-1' } })

      expect(listItems[4].props('selected')).toBe(true)
      expect(listItems[5].props('selected')).toBe(true)
      expect(listItems[6].props('selected')).toBe(false)
    })
  })

  BddTest().when('isSideMenuCollapsed model changes', () => {
    beforeEach(() => {
      wrapper = mount(AvSideNavigation, {
        props: {
          items: mockItems,
          isSideMenuCollapsed: false
        },
        global: {
          stubs
        }
      })
    })

    BddTest().then('it should emit update:isSideMenuCollapsed event', async () => {
      const sideMenu = wrapper.findComponent({ name: 'AvSideMenu' })

      await sideMenu.vm.$emit('update:collapsed', true)

      expect(wrapper.emitted('update:isSideMenuCollapsed')).toBeTruthy()
      expect(wrapper.emitted('update:isSideMenuCollapsed')?.[0]).toEqual([true])
    })
  })

  BddTest().when('component has proper CSS classes', () => {
    beforeEach(() => {
      wrapper = mount(AvSideNavigation, {
        props: {
          items: mockItems
        },
        global: {
          stubs
        }
      })
    })

    BddTest().then('it should apply base CSS class to list items', () => {
      const listItems = wrapper.findAllComponents({ name: 'AvListItem' })

      listItems.forEach((item) => {
        expect(item.classes()).toContain('av-side-navigation__menu-item')
      })
    })
  })
})
