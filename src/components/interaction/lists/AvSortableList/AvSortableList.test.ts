import type { VueWrapper } from '@vue/test-utils'
import type { AvSortableListItem } from '@/components/interaction/lists/AvSortableList/AvSortableList.vue'
import { flushPromises, mount } from '@vue/test-utils'
import { afterEach, beforeEach, expect, vi } from 'vitest'
import { nextTick } from 'vue'
import { AvIconStub } from '@/components/base/AvIcon/AvIcon.stub'
import { AvCardStub } from '@/components/cards/AvCard/AvCard.stub'
import { AvButtonStub } from '@/components/interaction/buttons/AvButton/AvButton.stub'
import AvSortableList from '@/components/interaction/lists/AvSortableList/AvSortableList.vue'
import { AvTooltipStub } from '@/components/overlay/tooltips/AvTooltip/AvTooltip.stub'
import { BddTest } from '@/tests/utils'

const VueDraggableStub = defineComponent({
  name: 'VueDraggable',
  props: {
    modelValue: {
      type: Array,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'start', 'end'],
  template: '<div class="vue-draggable-stub"><slot /></div>',
})

const stubs = {
  VueDraggable: VueDraggableStub,
  AvCard: AvCardStub,
  AvButton: AvButtonStub,
  AvIcon: AvIconStub,
  AvTooltip: AvTooltipStub,
}

const initialItems: AvSortableListItem[] = [
  { id: '1', label: 'Item 1' },
  { id: '2', label: 'Item 2' },
  { id: '3', label: 'Item 3' },
]

BddTest().given('an AvSortableList component', () => {
  let wrapper: VueWrapper

  function mountList (props: Record<string, unknown> = {}, slots: Record<string, unknown> = {}) {
    wrapper = mount(AvSortableList as any, {
      attachTo: document.body,
      props: {
        'modelValue': initialItems,
        'onUpdate:modelValue': (value: AvSortableListItem[]) => wrapper.setProps({ modelValue: value }),
        ...props,
      },
      slots,
      global: { stubs },
    })
  }

  const labels = () => wrapper.findAll('.av-card').map(card => card.find('.b2-regular').text())
  const buttons = (direction: 'up' | 'down') => wrapper.findAllComponents(AvButtonStub)
    .filter(button => button.attributes('data-move-direction') === direction)
  const draggable = () => wrapper.findComponent(VueDraggableStub)
  const announcement = () => wrapper.find('[aria-live="polite"]').text()
  const tooltips = () => wrapper.findAllComponents(AvTooltipStub)

  afterEach(() => {
    wrapper.unmount()
  })

  BddTest().when('the component is mounted with items', () => {
    beforeEach(() => {
      mountList()
    })

    BddTest().then('it should render one card per item', () => {
      expect(wrapper.findAll('.av-card')).toHaveLength(3)
    })

    BddTest().then('it should render the label of each item by default', () => {
      expect(labels()).toEqual(['Item 1', 'Item 2', 'Item 3'])
    })

    BddTest().then('it should render a move up and a move down button per item', () => {
      expect(buttons('up')).toHaveLength(3)
      expect(buttons('down')).toHaveLength(3)
    })

    BddTest().then('it should include the item label in the move button labels', () => {
      expect(buttons('up')[1].text()).toBe('Monter Item 2')
      expect(buttons('down')[1].text()).toBe('Descendre Item 2')
    })

    BddTest().then('it should disable the move up button of the first item only', () => {
      expect(buttons('up').map(button => button.attributes('disabled') !== undefined)).toEqual([true, false, false])
    })

    BddTest().then('it should disable the move down button of the last item only', () => {
      expect(buttons('down').map(button => button.attributes('disabled') !== undefined)).toEqual([false, false, true])
    })

    BddTest().then('it should render an empty live region', () => {
      expect(wrapper.find('[aria-live="polite"]').exists()).toBe(true)
      expect(announcement()).toBe('')
      expect(wrapper.find('[aria-live="polite"]').attributes('aria-atomic')).toBe('true')
    })

    BddTest().then('it should render a list with list items', () => {
      expect(draggable().attributes('role')).toBe('list')
      expect(wrapper.findAll('[role="listitem"]')).toHaveLength(3)
    })

    BddTest().then('it should enable dragging', () => {
      expect(draggable().props('disabled')).toBe(false)
    })

    BddTest().then('it should render a drag handle for each item', () => {
      expect(wrapper.findAll('[data-testid="drag-handle"]')).toHaveLength(3)
    })

    BddTest().then('it should display the default drag tooltip for each item', () => {
      expect(tooltips().map(tooltip => tooltip.props('content'))).toEqual([
        'Déplacer Item 1',
        'Déplacer Item 2',
        'Déplacer Item 3',
      ])
    })
  })

  BddTest().when('the component is mounted without items', () => {
    BddTest().then('it should not render any card', () => {
      mountList({ modelValue: [] })

      expect(wrapper.findAll('.av-card')).toHaveLength(0)
    })

    BddTest().then('it should still render the live region', () => {
      mountList({ modelValue: [] })

      expect(wrapper.find('[aria-live="polite"]').exists()).toBe(true)
      expect(announcement()).toBe('')
    })
  })

  BddTest().when('the list is disabled', () => {
    beforeEach(() => {
      mountList({ disabled: true })
    })

    BddTest().then('it should disable every move button', () => {
      expect([...buttons('up'), ...buttons('down')].every(button => button.attributes('disabled') !== undefined)).toBe(true)
    })

    BddTest().then('it should disable dragging', () => {
      expect(draggable().props('disabled')).toBe(true)
    })

    BddTest().then('it should not emit any update when a move is attempted', async () => {
      await buttons('down')[0].trigger('click')

      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    })

    BddTest().then('it should display the default disabled tooltip on move buttons', () => {
      expect(buttons('up')[1].props('disabledTooltip')).toBe('Cet élément est déjà en première position')
      expect(buttons('down')[0].props('disabledTooltip')).toBe('Cet élément est déjà en dernière position')
    })

    BddTest().then('it should display the default drag tooltip', () => {
      expect(tooltips()[0].props('content')).toBe('Déplacer Item 1')
    })

    BddTest().then('it should disable the drag tooltip when no global disabled tooltip is provided', () => {
      expect(tooltips()[0].props('disabled')).toBe(true)
    })

    BddTest().then('it should apply the disabled class to drag handles', () => {
      expect(wrapper.findAll('.drag-handle--disabled')).toHaveLength(3)
    })
  })

  BddTest().when('the list is loading', () => {
    beforeEach(() => {
      mountList({ isLoading: true })
    })

    BddTest().then('it should disable every move button', () => {
      expect([...buttons('up'), ...buttons('down')].every(button => button.attributes('disabled') !== undefined)).toBe(true)
    })

    BddTest().then('it should disable dragging', () => {
      expect(draggable().props('disabled')).toBe(true)
    })

    BddTest().then('it should render a loader instead of the drag handle', () => {
      expect(wrapper.findAll('[data-testid="loader"]')).toHaveLength(3)
      expect(wrapper.findAll('[data-testid="drag-handle"]')).toHaveLength(0)
    })

    BddTest().then('it should not emit any update when a move is attempted', async () => {
      await buttons('down')[0].trigger('click')

      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    })

    BddTest().then('it should not display disabled tooltips on move buttons', () => {
      expect(buttons('up')[1].props('disabledTooltip')).toBeUndefined()
      expect(buttons('down')[0].props('disabledTooltip')).toBeUndefined()
    })

    BddTest().then('it should not display the drag tooltip', () => {
      expect(tooltips()[0].props('content')).toBeUndefined()
    })

    BddTest().then('it should disable the drag tooltip', () => {
      expect(tooltips()[0].props('disabled')).toBe(true)
    })

    BddTest().then('it should not apply the drag handle class', () => {
      expect(wrapper.findAll('.drag-handle')).toHaveLength(0)
    })
  })

  BddTest().when('a custom disabled tooltip is provided', () => {
    BddTest().then('it should use it on move buttons when the list is disabled', () => {
      mountList({
        disabled: true,
        disabledTooltip: 'Liste indisponible',
      })

      expect(buttons('up')[1].props('disabledTooltip')).toBe('Liste indisponible')
      expect(buttons('down')[0].props('disabledTooltip')).toBe('Liste indisponible')
    })

    BddTest().then('it should use it on the drag handle tooltip', () => {
      mountList({
        disabled: true,
        disabledTooltip: 'Liste indisponible',
      })

      expect(tooltips()[0].props('content')).toBe('Liste indisponible')
    })

    BddTest().then('it should enable the drag tooltip when a custom disabled tooltip is provided', () => {
      mountList({
        disabled: true,
        disabledTooltip: 'Liste indisponible',
      })

      expect(tooltips()[0].props('disabled')).toBe(false)
    })
  })

  BddTest().when('a default slot is provided', () => {
    BddTest().then('it should render the slot for each item with its element and index', () => {
      mountList({}, {
        default: `<template #default="{ element, index }">
          <span class="custom-item">{{ index + 1 }} - {{ element.label }}</span>
        </template>`,
      })

      expect(wrapper.findAll('.custom-item').map(item => item.text())).toEqual([
        '1 - Item 1',
        '2 - Item 2',
        '3 - Item 3',
      ])
    })

    BddTest().then('it should replace the default label rendering', () => {
      mountList({}, {
        default: `<template #default="{ element }"><span class="custom-item">{{ element.label }}</span></template>`,
      })

      expect(wrapper.findAll('.b2-regular')).toHaveLength(0)
    })
  })

  BddTest().when('custom labels are provided', () => {
    BddTest().then('it should use them in the move buttons', () => {
      mountList({ moveUpLabel: 'Up', moveDownLabel: 'Down' })

      expect(buttons('up')[0].text()).toBe('Up Item 1')
      expect(buttons('down')[0].text()).toBe('Down Item 1')
    })

    BddTest().then('it should use the custom drag label', () => {
      mountList({ dragLabel: 'Reorder' })

      expect(tooltips()[0].props('content')).toBe('Reorder Item 1')
    })

    BddTest().then('it should use custom disabled tooltips', () => {
      mountList({
        disabled: true,
        moveUpDisabledTooltip: 'Cannot move up',
        moveDownDisabledTooltip: 'Cannot move down',
      })

      expect(buttons('up')[1].props('disabledTooltip')).toBe('Cannot move up')
      expect(buttons('down')[0].props('disabledTooltip')).toBe('Cannot move down')
    })
  })

  BddTest().when('a move down button is clicked', () => {
    beforeEach(async () => {
      mountList()
      await buttons('down')[0].trigger('click')
      await flushPromises()
    })

    BddTest().then('it should emit update:modelValue with the item moved down', () => {
      const emitted = wrapper.emitted('update:modelValue') as AvSortableListItem[][][]

      expect(emitted).toHaveLength(1)
      expect(emitted[0][0].map(item => item.id)).toEqual(['2', '1', '3'])
    })

    BddTest().then('it should render the items in the new order', () => {
      expect(labels()).toEqual(['Item 2', 'Item 1', 'Item 3'])
    })

    BddTest().then('it should not mutate the original items', () => {
      expect(initialItems.map(item => item.id)).toEqual(['1', '2', '3'])
    })

    BddTest().then('it should announce the move', () => {
      expect(announcement()).toBe('Élément Item 1 déplacé de la position 1 à la position 2')
    })

    BddTest().then('it should keep the focus on the move down button of the moved item', () => {
      expect(document.activeElement).toBe(buttons('down')[1].element)
    })
  })

  BddTest().when('a move up button is clicked', () => {
    beforeEach(async () => {
      mountList()
      await buttons('up')[2].trigger('click')
      await flushPromises()
    })

    BddTest().then('it should emit update:modelValue with the item moved up', () => {
      const emitted = wrapper.emitted('update:modelValue') as AvSortableListItem[][][]

      expect(emitted).toHaveLength(1)
      expect(emitted[0][0].map(item => item.id)).toEqual(['1', '3', '2'])
    })

    BddTest().then('it should render the items in the new order', () => {
      expect(labels()).toEqual(['Item 1', 'Item 3', 'Item 2'])
    })

    BddTest().then('it should announce the move', () => {
      expect(announcement()).toBe('Élément Item 3 déplacé de la position 3 à la position 2')
    })

    BddTest().then('it should keep the focus on the move up button of the moved item', () => {
      expect(document.activeElement).toBe(buttons('up')[1].element)
    })
  })

  BddTest().when('a move is attempted outside the list boundaries', () => {
    BddTest().then('it should not move the first item further up', async () => {
      mountList()

      await buttons('up')[0].trigger('click')

      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    })

    BddTest().then('it should not move the last item further down', async () => {
      mountList()

      await buttons('down')[2].trigger('click')

      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    })
  })

  BddTest().when('an item is moved with a custom announcement formatter', () => {
    BddTest().then('it should announce the formatted message', async () => {
      const announcementFormatter = vi.fn((element: AvSortableListItem, index: number, targetIndex: number) =>
        `${element.label}: ${index} -> ${targetIndex}`)
      mountList({ announcementFormatter })

      await buttons('down')[1].trigger('click')
      await flushPromises()

      expect(announcementFormatter).toHaveBeenCalledWith(initialItems[1], 1, 2)
      expect(announcement()).toBe('Item 2: 1 -> 2')
    })
  })

  BddTest().when('an item is dragged', () => {
    beforeEach(() => {
      vi.useFakeTimers()
      mountList()
    })

    afterEach(() => {
      vi.useRealTimers()
    })

    BddTest().then('it should flag the list as dragging between start and end', async () => {
      expect(draggable().classes()).not.toContain('is-dragging')

      draggable().vm.$emit('start')
      await nextTick()

      expect(draggable().classes()).toContain('is-dragging')

      draggable().vm.$emit('end', { oldIndex: 0, newIndex: 0 })
      await vi.advanceTimersByTimeAsync(250)

      expect(draggable().classes()).not.toContain('is-dragging')
    })

    BddTest().then('it should disable tooltips while dragging', async () => {
      draggable().vm.$emit('start')
      await nextTick()

      expect(tooltips().every(tooltip => tooltip.props('disabled'))).toBe(true)
    })

    BddTest().then('it should announce the move when the position changed', async () => {
      draggable().vm.$emit('update:modelValue', [initialItems[1], initialItems[2], initialItems[0]])
      await nextTick()

      draggable().vm.$emit('end', { oldIndex: 0, newIndex: 2 })
      await vi.advanceTimersByTimeAsync(250)

      expect(announcement()).toBe('Élément Item 1 déplacé de la position 1 à la position 3')
    })

    BddTest().then('it should not announce anything when the position did not change', async () => {
      draggable().vm.$emit('end', { oldIndex: 1, newIndex: 1 })
      await vi.advanceTimersByTimeAsync(250)

      expect(announcement()).toBe('')
    })

    BddTest().then('it should not announce anything when the old index is undefined', async () => {
      draggable().vm.$emit('end', { newIndex: 1 })
      await vi.advanceTimersByTimeAsync(250)

      expect(announcement()).toBe('')
    })

    BddTest().then('it should not announce anything when the new index is undefined', async () => {
      draggable().vm.$emit('end', { oldIndex: 1 })
      await vi.advanceTimersByTimeAsync(250)

      expect(announcement()).toBe('')
    })

    BddTest().then('it should not announce anything when the moved item does not exist', async () => {
      draggable().vm.$emit('update:modelValue', [])
      await nextTick()

      draggable().vm.$emit('end', { oldIndex: 0, newIndex: 2 })
      await vi.advanceTimersByTimeAsync(250)

      expect(announcement()).toBe('')
    })

    BddTest().then('it should reset the dragging state after the animation duration', async () => {
      draggable().vm.$emit('start')
      await nextTick()

      draggable().vm.$emit('end', { oldIndex: 0, newIndex: 0 })

      await vi.advanceTimersByTimeAsync(199)
      expect(draggable().classes()).toContain('is-dragging')

      await vi.advanceTimersByTimeAsync(1)
      expect(draggable().classes()).not.toContain('is-dragging')
    })
  })
})
