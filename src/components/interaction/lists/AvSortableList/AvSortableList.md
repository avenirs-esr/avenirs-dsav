# Lists - `AvSortableList`

## ✨ Introduction

The `AvSortableList` component displays a collection of items that users can reorder by dragging or with move-up and move-down buttons. It keeps the item order in a `v-model` and provides accessible announcements when an item is moved.

Each item must have a unique `id` and a `label`. The label is used for the default item rendering and to identify the move and drag controls to assistive technologies.

## 🏗️ Structure

Each item is rendered inside an `AvCard` and contains:
- Move-up and move-down buttons, disabled at the beginning and end of the list.
- A drag handle with a tooltip.
- The default slot content, or the item's `label` when no slot is provided.

The component also provides a polite live region to announce reorder operations. The default slot is rendered by the component's internal draggable list; consumers customize each item's content without implementing the loop themselves.

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `modelValue` | `T[]` (`T` extends `{ id: string; label: string }`) | `[]` | | Items to display and reorder. Bind with `v-model`; each item must have a unique `id` and a `label`. |
| `disabled` | `boolean` | `false` | | Disables the whole list: drag and drop and every move button. |
| `disabledTooltip` | `string` | `undefined` | | Tooltip explaining why the list is disabled, shown on the move buttons and the drag handle when `disabled` is `true`. |
| `dragLabel` | `string` | `'Déplacer'` | | Text used in the drag handle's tooltip. |
| `moveUpLabel` | `string` | `'Monter'` | | Text used in the accessible label of each move-up button. |
| `moveUpDisabledTooltip` | `string` | `'Cet élément est déjà en première position'` | | Tooltip shown when a move-up button is disabled. |
| `moveDownLabel` | `string` | `'Descendre'` | | Text used in the accessible label of each move-down button. |
| `moveDownDisabledTooltip` | `string` | `'Cet élément est déjà en dernière position'` | | Tooltip shown when a move-down button is disabled. |
| `announcementFormatter` | `(element: T, index: number, targetIndex: number) => string` | Announces the item's label and its old and new positions in French. | | Creates the live-region message after an item is moved. Indexes are zero-based. |

## 🔊 Events

| Name | Description |
| --- | --- |
| `update:modelValue` | Emitted with the reordered items when an item is moved, by drag and drop or with the move buttons. Use `v-model` to keep the order in sync. |

## 🎨 Slots

| Name | Props | Description |
| --- | --- | --- |
| `default` | `{ element: T; index: number }` | Custom content for an item. The index is zero-based. If omitted, the component displays `element.label`. |

## 🚀 Storybook demos

You can find examples of use and demos of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-interaction-lists-avsortablelist--docs).

## 💡 Examples of use

### Basic Sortable List

```vue
<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  { id: 'first', label: 'First item' },
  { id: 'second', label: 'Second item' },
  { id: 'third', label: 'Third item' }
])
</script>

<template>
  <AvSortableList v-model="items" />
</template>
```

### Custom Item Content

```vue
<template>
  <AvSortableList v-model="items">
    <template #default="{ element, index }">
      <AvListItem
        :index="index + 1"
        :title="element.label"
        :description="element.description"
      />
    </template>
  </AvSortableList>
</template>
```

### AvListItem with Icons

The slot can pass an icon to each `AvListItem`; use icon names from `MDI_ICONS` so the design system's generated icon assets are used.

```vue
<template>
  <AvSortableList v-model="items">
    <template #default="{ element, index }">
      <AvListItem
        :index="index + 1"
        :title="element.label"
        :description="element.description"
        :icon="element.icon"
      />
    </template>
  </AvSortableList>
</template>
```

### Sortable List of Buttons

The default slot can render an `AvButton` as the content of each sortable item. The drag handle and move controls remain available alongside each button.

```vue
<template>
  <AvSortableList v-model="items">
    <template #default="{ element, index }">
      <AvButton
        style="flex: 1"
        :label="element.label"
        :icon="element.icon"
        variant="OUTLINED"
        :aria-label="element.label"
      />
    </template>
  </AvSortableList>
</template>
```

### Persisting the Order

The order is part of the `v-model`: save it with the rest of the list, with an autosave or a save button.

#### Autosave

```vue
<script setup lang="ts">
const { data: subActivities } = useGetApiSubActivities()
const { mutate: saveApiSubActivities } = useSaveApiSubActivities()

// Reordering, adding and removing items all go through the model
watch(
  subActivities,
  (items, previousItems) => {
    // Ignore the initial load from the back
    if (!previousItems) {
      return
    }

    saveApiSubActivities(items)
  },
  { deep: true }
)
</script>

<template>
  <AvSortableList v-model="subActivities" />
</template>
```

#### Manual save

```vue
<script setup lang="ts">
const { data: subActivities } = useGetApiSubActivities()
const { mutate: saveApiSubActivities, isPending: isSaving } = useSaveApiSubActivities()
</script>

<template>
  <div class="av-col av-gap-md">
    <AvSortableList v-model="subActivities" />

    <AvButton
      label="Enregistrer"
      :icon="MDI_ICONS.CONTENT_SAVE_OUTLINE"
      :is-loading="isSaving"
      @click="saveApiSubActivities(subActivities)"
    />
  </div>
</template>
```

### Adding a Sub-Activity

Adding an item is a separate mutation: the back creates it and returns its `id`, then the list is invalidated to fetch it. The refetch replaces the `v-model`, so unsaved changes would be lost. Make sure nothing is pending before adding.

#### With autosave

Disable the add button while a save is in progress.

```vue
<script setup lang="ts">
const queryClient = useQueryClient()
const { data: subActivities } = useGetApiSubActivities()
const { mutate: saveApiSubActivities, isPending: isSaving } = useSaveApiSubActivities()
const { mutate: addApiSubActivity, isPending: isAdding } = useAddApiSubActivity()

function addSubActivity () {
  addApiSubActivity(undefined, {
    onSuccess: () => queryClient.invalidateQueries({ queryKey: getGetApiSubActivitiesQueryKey() })
  })
}

watch(
  subActivities,
  (items, previousItems) => {
    if (previousItems) {
      saveApiSubActivities(items)
    }
  },
  { deep: true }
)
</script>

<template>
  <div class="av-col av-gap-md">
    <AvSortableList v-model="subActivities" />

    <AvButton
      label="Ajouter une sous-activité"
      :icon="MDI_ICONS.PLUS"
      :is-loading="isSaving || isAdding"
      @click="addSubActivity"
    />
  </div>
</template>
```

#### With manual save

Track unsaved changes and disable the add button until they are saved.

```vue
<script setup lang="ts">
const queryClient = useQueryClient()
const { data: subActivities } = useGetApiSubActivities()
const { mutate: saveApiSubActivities, isPending: isSaving } = useSaveApiSubActivities()
const { mutate: addApiSubActivity, isPending: isAdding } = useAddApiSubActivity()

const hasUnsavedChanges = ref(false)

function save () {
  saveApiSubActivities(subActivities.value, {
    onSuccess: () => {
      hasUnsavedChanges.value = false
    }
  })
}

function addSubActivity () {
  addApiSubActivity(undefined, {
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: getGetApiSubActivitiesQueryKey() })
      // The refetch replaced the list, which is not a user change
      hasUnsavedChanges.value = false
    }
  })
}

watch(
  subActivities,
  (_, previousItems) => {
    // Ignore the initial load from the back
    if (previousItems) {
      hasUnsavedChanges.value = true
    }
  },
  { deep: true }
)
</script>

<template>
  <div class="av-col av-gap-md">
    <AvSortableList v-model="subActivities" />

    <div class="av-row av-gap-sm">
      <AvButton
        label="Ajouter une sous-activité"
        :icon="MDI_ICONS.PLUS"
        :disabled="hasUnsavedChanges"
        disabled-tooltip="Enregistrez vos modifications avant d'ajouter une sous-activité"
        :is-loading="isAdding"
        @click="addSubActivity"
      />
      <AvButton
        label="Enregistrer"
        :icon="MDI_ICONS.CONTENT_SAVE_OUTLINE"
        :disabled="!hasUnsavedChanges"
        :is-loading="isSaving"
        @click="save"
      />
    </div>
  </div>
</template>
```

### Forms in Items

Each item can hold its own form. Keep the form state keyed by the item's `id`, never by its `index`, so edits in progress follow the item when it is moved.

```vue
<template>
  <AvSortableList v-model="subActivities">
    <template #default="{ element }">
      <SubActivityForm
        class="av-w-full"
        :sub-activity="element"
        @save="saveSubActivity"
      />
    </template>
  </AvSortableList>
</template>
```

### Disabled List

```vue
<template>
  <AvSortableList
    v-model="subActivities"
    :disabled="isSaving"
    disabled-tooltip="Enregistrement en cours"
  />
</template>
```

### Custom Control Labels

```vue
<template>
  <AvSortableList
    v-model="items"
    move-up-label="Déplacer vers le haut"
    move-down-label="Déplacer vers le bas"
    drag-label="Faire glisser"
    move-up-disabled-tooltip="Cet élément est déjà en tête de liste"
    move-down-disabled-tooltip="Cet élément est déjà en fin de liste"
  />
</template>
```

### Custom Move Announcement

```vue
<script setup lang="ts">
function formatAnnouncement (
  element: { id: string; label: string },
  index: number,
  targetIndex: number
) {
  return `${element.label} : position ${index + 1} vers ${targetIndex + 1}`
}
</script>

<template>
  <AvSortableList
    v-model="items"
    :announcement-formatter="formatAnnouncement"
  />
</template>
```
