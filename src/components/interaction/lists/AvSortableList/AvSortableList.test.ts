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

const DraggableStub = defineComponent({
  name: 'Draggable',
  props: ['modelValue', 'itemKey', 'disabled'],
  emits: ['update:modelValue', 'start', 'end'],
  template: `
    <div class="draggable-stub">
      <template v-for="(element, index) in modelValue" :key="element[itemKey]">
        <slot name="item" :element="element" :index="index" />
      </template>
    </div>`
})

const stubs = {
  Draggable: DraggableStub,
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
  const buttons = (direction: 'up' | 'down') => wrapper.findAll(`[data-move-direction="${direction}"]`)
  const draggable = () => wrapper.findComponent(DraggableStub)
  const announcement = () => wrapper.find('[aria-live="polite"]').text()

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
    })
  })

  BddTest().when('the component is mounted without items', () => {
    BddTest().then('it should not render any card', () => {
      mountList({ modelValue: [] })
      expect(wrapper.findAll('.av-card')).toHaveLength(0)
    })
  })

  BddTest().when('the list is disabled', () => {
    BddTest().then('it should disable every move button', () => {
      mountList({ disabled: true })

      expect([...buttons('up'), ...buttons('down')].every(button => button.attributes('disabled') !== undefined)).toBe(true)
    })

    BddTest().then('it should disable dragging', () => {
      mountList({ disabled: true })

      expect(draggable().props('disabled')).toBe(true)
    })

    BddTest().then('it should not emit any update when a move is attempted', async () => {
      mountList({ disabled: true })

      await buttons('down')[0].trigger('click')

      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
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

    BddTest().then('it should announce the move', () => {
      expect(announcement()).toBe('Élément Item 3 déplacé de la position 3 à la position 2')
    })

    BddTest().then('it should keep the focus on the move up button of the moved item', () => {
      expect(document.activeElement).toBe(buttons('up')[1].element)
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
  })
})
