import type { AvAutocompleteOption } from '@/components/interaction/selects/AvAutocomplete/AvAutocomplete.types'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, expect, vi } from 'vitest'
import AvAutocomplete from '@/components/interaction/selects/AvAutocomplete/AvAutocomplete.vue'
import { BddTest } from '@/tests/utils'

const scrollState = reactive({ bottom: false })

vi.mock('@vueuse/core', async () => {
  const actual = await vi.importActual<typeof import('@vueuse/core')>('@vueuse/core')

  return {
    ...actual,
    useScroll: () => ({
      arrivedState: scrollState
    })
  }
})

interface TestOption extends AvAutocompleteOption {
  id: string
  name: string
}

const mockOptions: TestOption[] = [
  { id: '1', label: 'Option 1', value: '1', name: 'First Option' },
  { id: '2', label: 'Option 2', value: '2', name: 'Second Option' },
  { id: '3', label: 'Option 3', value: '3', name: 'Third Option' }
]

function mountAutocomplete (props: Record<string, unknown> = {}, slots: Record<string, string> = {}) {
  return mount(AvAutocomplete, {
    attachTo: document.body,
    props: {
      options: mockOptions,
      modelValue: [],
      ...props
    },
    slots
  })
}

BddTest().given('an autocomplete component', () => {
  let wrapper: ReturnType<typeof mount<typeof AvAutocomplete>>

  beforeEach(() => {
    scrollState.bottom = false
    wrapper = mountAutocomplete()
  })

  afterEach(() => {
    wrapper.unmount()
    vi.useRealTimers()
  })

  BddTest().when('the component is mounted', () => {
    BddTest().then('it should render the autocomplete wrapper', () => {
      expect(wrapper.find('.av-autocomplete').exists()).toBe(true)
      expect(wrapper.find('.av-autocomplete__wrapper').exists()).toBe(true)
    })

    BddTest().then('it should render the input component', () => {
      const input = wrapper.findComponent({ name: 'AvAutocompleteInput' })
      expect(input.exists()).toBe(true)
    })

    BddTest().then('it should render the dropdown component', () => {
      const dropdown = wrapper.findComponent({ name: 'AvAutocompleteDropdown' })
      expect(dropdown.exists()).toBe(true)
    })

    BddTest().then('it should render the selected tags component', () => {
      const selectedTags = wrapper.findComponent({ name: 'AvAutocompleteSelectedTags' })
      expect(selectedTags.exists()).toBe(true)
    })

    BddTest().then('it should keep dropdown closed by default', () => {
      expect(wrapper.find('.av-autocomplete-dropdown').exists()).toBe(false)
    })

    BddTest().then('it should open dropdown on input focus', async () => {
      await wrapper.find('input').trigger('focus')

      expect(wrapper.find('.av-autocomplete-dropdown').exists()).toBe(true)
      expect(wrapper.text()).toContain('Option 1')
      expect(wrapper.text()).toContain('Option 2')
      expect(wrapper.text()).toContain('Option 3')
    })
  })

  BddTest().when('input is typed with debounce', () => {
    BddTest().then('it should update search and filter options after debounce delay', async () => {
      vi.useFakeTimers()
      wrapper = mountAutocomplete({ debounceDelay: 100 })

      await wrapper.find('input').trigger('focus')
      await wrapper.find('input').setValue('Option 2')

      expect(wrapper.text()).toContain('Option 1')

      vi.advanceTimersByTime(100)
      await wrapper.vm.$nextTick()

      expect(wrapper.emitted('update:search')).toBeTruthy()
      expect(wrapper.emitted('update:search')?.at(-1)).toEqual(['Option 2'])
      expect(wrapper.text()).toContain('Option 2')
      expect(wrapper.text()).not.toContain('Option 1')
    })
  })

  BddTest().when('server side filtering is enabled', () => {
    BddTest().then('it should not filter options on the client', async () => {
      vi.useFakeTimers()
      wrapper = mountAutocomplete({ serverSideFiltering: true, debounceDelay: 50 })

      await wrapper.find('input').trigger('focus')
      await wrapper.find('input').setValue('does-not-exist')
      vi.advanceTimersByTime(50)
      await wrapper.vm.$nextTick()

      expect(wrapper.text()).toContain('Option 1')
      expect(wrapper.text()).toContain('Option 2')
      expect(wrapper.text()).toContain('Option 3')
    })
  })

  BddTest().when('a custom filter function is provided', () => {
    BddTest().then('it should use custom filtering logic', async () => {
      vi.useFakeTimers()
      wrapper = mountAutocomplete({
        filterOptions: (options: TestOption[], query: string) => {
          if (query === 'x') {
            return [options[2]]
          }
          return options
        },
        debounceDelay: 0
      })

      await wrapper.find('input').trigger('focus')
      await wrapper.find('input').setValue('x')
      vi.runAllTimers()
      await wrapper.vm.$nextTick()

      expect(wrapper.text()).toContain('Option 3')
      expect(wrapper.text()).not.toContain('Option 1')
      expect(wrapper.text()).not.toContain('Option 2')
    })
  })

  BddTest().when('maxResults is provided', () => {
    BddTest().then('it should cap displayed options', async () => {
      wrapper = mountAutocomplete({ maxResults: 2 })

      await wrapper.find('input').trigger('focus')

      const listItems = wrapper.findAll('[data-testid="av-list-item"]')
      expect(listItems).toHaveLength(2)
      expect(wrapper.text()).toContain('Option 1')
      expect(wrapper.text()).toContain('Option 2')
      expect(wrapper.text()).not.toContain('Option 3')
    })
  })

  BddTest().when('selecting an option in single select mode', () => {
    BddTest().then('it should update modelValue, close dropdown and clear search query', async () => {
      vi.useFakeTimers()
      wrapper = mountAutocomplete({ debounceDelay: 0 })

      await wrapper.find('input').trigger('focus')
      await wrapper.find('input').setValue('Option 2')
      vi.runAllTimers()
      await wrapper.vm.$nextTick()

      const visibleOption = wrapper.findAll('[data-testid="av-list-item"]')[0]
      await visibleOption.trigger('click')

      expect(wrapper.emitted('update:modelValue')).toBeTruthy()
      expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([[mockOptions[1]]])
      expect(wrapper.find('.av-autocomplete-dropdown').exists()).toBe(false)
      expect(wrapper.emitted('update:search')?.at(-1)).toEqual([''])
    })
  })

  BddTest().when('selecting options in multi-select mode', () => {
    BddTest().then('it should toggle selection without closing dropdown', async () => {
      wrapper = mountAutocomplete({ multiSelect: true })

      await wrapper.find('input').trigger('focus')

      const firstOption = wrapper.findAll('[data-testid="av-list-item"]')[0]
      await firstOption.trigger('click')

      expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([[mockOptions[0]]])
      expect(wrapper.find('.av-autocomplete-dropdown').exists()).toBe(true)

      await firstOption.trigger('click')

      expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([[]])
      expect(wrapper.find('.av-autocomplete-dropdown').exists()).toBe(true)
    })

    BddTest().then('it should ignore disabled options', async () => {
      const optionsWithDisabled = [
        { ...mockOptions[0], disabled: true },
        mockOptions[1]
      ]

      wrapper = mountAutocomplete({ options: optionsWithDisabled, multiSelect: true })
      await wrapper.find('input').trigger('focus')

      const firstOption = wrapper.findAll('[data-testid="av-list-item"]')[0]
      await firstOption.trigger('click')

      expect(wrapper.emitted('update:modelValue')).toBeFalsy()
    })
  })

  BddTest().when('custom option getters are provided', () => {
    BddTest().then('it should use getOptionLabel and getOptionKey for display and selection', async () => {
      wrapper = mountAutocomplete({
        getOptionLabel: (option: TestOption) => option.name,
        getOptionKey: (option: TestOption) => option.id
      })

      await wrapper.find('input').trigger('focus')
      expect(wrapper.text()).toContain('First Option')

      const firstOption = wrapper.findAll('[data-testid="av-list-item"]')[0]
      await firstOption.trigger('click')

      expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([[mockOptions[0]]])
      expect((wrapper.find('input').element as HTMLInputElement).value).toBe('First Option')
    })
  })

  BddTest().when('blur happens outside of dropdown', () => {
    BddTest().then('it should close dropdown after blurCloseDelay', async () => {
      vi.useFakeTimers()
      wrapper = mountAutocomplete({ blurCloseDelay: 100 })

      const input = wrapper.find('input')
      await input.trigger('focus')
      expect(wrapper.find('.av-autocomplete-dropdown').exists()).toBe(true)

      await input.trigger('blur')
      expect(wrapper.find('.av-autocomplete-dropdown').exists()).toBe(true)

      vi.advanceTimersByTime(100)
      await wrapper.vm.$nextTick()

      expect(wrapper.find('.av-autocomplete-dropdown').exists()).toBe(false)
    })

    BddTest().then('it should not close when blur target is inside dropdown', async () => {
      vi.useFakeTimers()
      wrapper = mountAutocomplete({ blurCloseDelay: 100 })

      const input = wrapper.find('input')
      await input.trigger('focus')

      const dropdown = wrapper.find('.av-autocomplete-dropdown')
      await input.trigger('blur', { relatedTarget: dropdown.element })
      vi.advanceTimersByTime(100)
      await wrapper.vm.$nextTick()

      expect(wrapper.find('.av-autocomplete-dropdown').exists()).toBe(true)
    })

    BddTest().then('it should close on click outside', async () => {
      wrapper = mountAutocomplete()

      await wrapper.find('input').trigger('focus')
      expect(wrapper.find('.av-autocomplete-dropdown').exists()).toBe(true)

      document.body.click()
      await wrapper.vm.$nextTick()

      expect(wrapper.find('.av-autocomplete-dropdown').exists()).toBe(false)
    })
  })

  BddTest().when('clear search is used from input suffix button', () => {
    BddTest().then('it should emit clear and clear update:search', async () => {
      vi.useFakeTimers()
      wrapper = mountAutocomplete({
        modelValue: [mockOptions[0]],
        clearLabel: 'Clear search',
        debounceDelay: 0
      })

      await wrapper.find('input').setValue('will-be-cleared')
      vi.runAllTimers()
      await wrapper.vm.$nextTick()

      const clearButton = wrapper.find('button[aria-label="Clear search"]')
      expect(clearButton.exists()).toBe(true)

      await clearButton.trigger('click')

      expect(wrapper.emitted('clear')).toBeTruthy()
      expect(wrapper.emitted('update:search')?.at(-1)).toEqual([''])
    })
  })

  BddTest().when('clear selection button is enabled in dropdown', () => {
    BddTest().then('it should clear selected items and emit clearSelection', async () => {
      wrapper = mountAutocomplete({
        multiSelect: true,
        showClearSelectionButton: true,
        modelValue: [mockOptions[0]]
      })

      await wrapper.find('input').trigger('focus')

      const clearSelectionButton = wrapper.find('button[aria-label="Clear selection"]')
      expect(clearSelectionButton.exists()).toBe(true)

      await clearSelectionButton.trigger('click')

      expect(wrapper.emitted('clearSelection')).toBeTruthy()
      expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([[]])
    })

    BddTest().then('it should disable clear selection button when no item is selected', async () => {
      wrapper = mountAutocomplete({
        multiSelect: true,
        showClearSelectionButton: true,
        modelValue: []
      })

      await wrapper.find('input').trigger('focus')

      const clearSelectionButton = wrapper.find('button[aria-label="Clear selection"]')
      expect(clearSelectionButton.attributes('disabled')).toBeDefined()
    })
  })

  BddTest().when('showSelectedSection is enabled', () => {
    BddTest().then('it should show selected tags and allow removing a tag', async () => {
      wrapper = mountAutocomplete({
        multiSelect: true,
        showSelectedSection: true,
        modelValue: [mockOptions[0], mockOptions[1]]
      })

      expect(wrapper.find('.av-autocomplete-selected-tags').exists()).toBe(true)
      expect(wrapper.text()).toContain('Option 1')
      expect(wrapper.text()).toContain('Option 2')

      const tagButtons = wrapper.findAll('.av-autocomplete-selected-tags button')
      await tagButtons[0].trigger('click')

      expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([[mockOptions[1]]])
    })

    BddTest().then('it should use selectedItemsCountLabel in input when displaySelectionInInput is true', () => {
      wrapper = mountAutocomplete({
        multiSelect: true,
        showSelectedSection: true,
        selectedItemsCountLabel: 'items chosen',
        modelValue: [mockOptions[0], mockOptions[1]]
      })

      expect((wrapper.find('input').element as HTMLInputElement).value).toBe('items chosen')
    })

    BddTest().then('it should show search query in input when displaySelectionInInput is false', async () => {
      vi.useFakeTimers()
      wrapper = mountAutocomplete({
        multiSelect: true,
        showSelectedSection: true,
        displaySelectionInInput: false,
        modelValue: [mockOptions[0], mockOptions[1]],
        debounceDelay: 0
      })

      await wrapper.find('input').trigger('focus')
      await wrapper.find('input').setValue('abc')
      vi.runAllTimers()
      await wrapper.vm.$nextTick()

      expect((wrapper.find('input').element as HTMLInputElement).value).toBe('abc')
    })
  })

  BddTest().when('loading state is enabled', () => {
    BddTest().then('it should render loading content when dropdown is open', async () => {
      wrapper = mountAutocomplete({ loading: true })

      await wrapper.find('input').trigger('focus')

      expect(wrapper.find('[data-testid="av-autocomplete-dropdown__loading"]').exists()).toBe(true)
      expect(wrapper.text()).toContain('Loading...')
    })
  })

  BddTest().when('no options are available while open', () => {
    BddTest().then('it should render default empty state', async () => {
      wrapper = mountAutocomplete({ options: [] })

      await wrapper.find('input').trigger('focus')

      expect(wrapper.text()).toContain('No results found')
    })

    BddTest().then('it should render custom empty slot', async () => {
      wrapper = mountAutocomplete({ options: [] }, { empty: '<div class="empty-state">No match</div>' })

      await wrapper.find('input').trigger('focus')

      expect(wrapper.find('.empty-state').exists()).toBe(true)
      expect(wrapper.text()).toContain('No match')
    })
  })

  BddTest().when('custom slots are provided', () => {
    BddTest().then('it should render requiredTip slot in input', () => {
      wrapper = mountAutocomplete({}, { requiredTip: '<div class="required-tip">Required</div>' })

      expect(wrapper.find('.required-tip').exists()).toBe(true)
    })

    BddTest().then('it should render item slot in dropdown', async () => {
      wrapper = mountAutocomplete({}, { item: '<div class="custom-item">Custom Item</div>' })

      await wrapper.find('input').trigger('focus')

      expect(wrapper.findAll('.custom-item')).toHaveLength(mockOptions.length)
    })

    BddTest().then('it should render selectedItem slot in selected tags section', () => {
      wrapper = mountAutocomplete({
        multiSelect: true,
        showSelectedSection: true,
        modelValue: [mockOptions[0]]
      }, {
        selectedItem: '<div class="custom-selected">Custom Selected</div>'
      })

      expect(wrapper.find('.custom-selected').exists()).toBe(true)
    })
  })

  BddTest().when('load more is enabled and bottom is reached', () => {
    BddTest().then('it should emit loadMore with throttle', async () => {
      vi.useFakeTimers()
      wrapper = mountAutocomplete({ enableLoadMore: true, loadMoreThrottleDelay: 100 })

      await wrapper.find('input').trigger('focus')

      scrollState.bottom = true
      await wrapper.vm.$nextTick()
      vi.advanceTimersByTime(100)
      await wrapper.vm.$nextTick()

      expect(wrapper.emitted('loadMore')).toBeTruthy()
      expect(wrapper.emitted('loadMore')?.at(0)).toEqual([])
    })
  })

  BddTest().when('options with description are provided and dropdown is opened', () => {
    BddTest().then('it should render description only for options that have one', async () => {
      const optionsWithDescription: AvAutocompleteOption[] = [
        { label: 'Option A', value: 'a', description: 'Description for A' },
        { label: 'Option B', value: 'b' }
      ]

      wrapper = mountAutocomplete({
        options: optionsWithDescription,
        serverSideFiltering: true
      })

      await wrapper.find('input').trigger('focus')

      expect(wrapper.text()).toContain('Description for A')
      expect(wrapper.findAll('.caption-light')).toHaveLength(1)
    })
  })
})
