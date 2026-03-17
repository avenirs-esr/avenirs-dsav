# Lists - `AvCheckboxListItem`

## ✨ Introduction

The AvCheckboxListItem component represents an individual checkbox item within a list container. It provides a flexible and accessible way to display content with optional icons, titles, descriptions, and interactive capabilities while maintaining consistent styling and behavior patterns.

The `AvCheckboxListItem` component is designed to work seamlessly within `AvList` containers, offering extensive customization for various use cases including navigation menus, content lists, action items, and interactive elements. It supports full accessibility compliance with proper ARIA attributes and keyboard navigation.

It features comprehensive interaction states (hover, focus, active, disabled, selected), flexible content structure with slots, and dynamic tag rendering for different semantic contexts while maintaining visual consistency with the design system.

## 🏗️ Structure

The checkbox list item consists of the following elements:
- The AvListItem wrapper
- The icon (optional): Visual indicator displayed between the checkbox and the content
- The content area (mandatory): Contains label and/or custom content
- Custom content slot (optional): Allows insertion of any custom elements within the content area

The checkbox list item integrates:
- Full accessibility support with ARIA attributes and keyboard navigation
- Comprehensive interaction states and visual feedback
- Flexible content structure with icon, label, and slot support

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `id` | `string` | | | Unique ID of the checkbox list item. |
| `listId` | `string` | | | Unique ID of the parent checkbox list, used for accessibility and focus management. |
| `label` | `string` | | | Label for the checkbox list item. |
| `icon` | `string` | | | Icon to display alongside the checkbox list item. |
| `disabled` | `boolean` | `false` | | Whether the checkbox list item is disabled. |
| `ariaLabel` | `string` | | | Custom ARIA label for accessibility. |
| `ariaDescribedby` | `string` | | | ID of element that describes the list item. |

## 🔊 Events

None.

## 🎨 Slots

| Name | Description |
| --- | --- |
| `default` | Default slot for custom content within the ckeckbox list item. |

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-interaction-lists-avcheckboxlistitem--docs).

## 💡 Examples of use

### Basic Checkbox List Item

```vue
<script lang="ts" setup>
const selectedItems = ref<string[]>([])
</script>

<template>
  <AvList>
    <AvCheckboxListItem
      id="first-item"
      v-model="selectedItems"
      list-id="checkbox-list"
      label="First Item"
    />
    <AvCheckboxListItem
      id="second-item"
      v-model="selectedItems"
      list-id="checkbox-list"
      label="Second Item"
    />
    <AvCheckboxListItem
      id="third-item"
      v-model="selectedItems"
      list-id="checkbox-list"
      label="Third Item (disabled)"
      :disabled="true"
    />
  </AvList>
</template>
```

### Checkbox List Item with Icon

```vue
<script lang="ts" setup>
import { MDI_ICONS } from '@/utils/constants'

const selectedItems = ref<string[]>([])
</script>

<template>
  <AvList>
    <AvCheckboxListItem
      id="first-item"
      v-model="selectedItems"
      list-id="checkbox-list"
      label="First Item"
    />
    <AvCheckboxListItem
      id="second-item"
      v-model="selectedItems"
      list-id="checkbox-list"
      label="Second Item"
      :icon="MDI_ICONS.STAR"
    />
    <AvCheckboxListItem
      id="third-item"
      v-model="selectedItems"
      list-id="checkbox-list"
      label="Third Item (disabled)"
      :disabled="true"
    />
  </AvList>
</template>
```

### Checkbox List Item with Custom Content

```vue
<script lang="ts" setup>
const selectedItems = ref<string[]>([])
</script>

<template>
  <AvList>
    <AvCheckboxListItem
      id="first-item"
      v-model="selectedItems"
      list-id="checkbox-list"
    >
      <div class="custom-content">
        <h3>First Item</h3>
        <p>This is a custom description for the first item.</p>
      </div>
    </AvCheckboxListItem>
    <AvCheckboxListItem
      id="second-item"
      v-model="selectedItems"
      list-id="checkbox-list"
    >
      <div class="custom-content">
        <h3>Second Item</h3>
        <p>This is a custom description for the second item.</p>
      </div>
    </AvCheckboxListItem>
    <AvCheckboxListItem
      id="third-item"
      v-model="selectedItems"
      list-id="checkbox-list"
      :disabled="true"
    >
      <div class="custom-content">
        <h3>Third Item (disabled)</h3>
        <p>This is a custom description for the third item.</p>
      </div>
    </AvCheckboxListItem>
  </AvList>
</template>
