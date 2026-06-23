# Cards - `AvCard`

## ✨ Introduction

The `AvCard` component is used to create customizable, styled containers.
It provides a structured layout with optional sections and can include collapsible behavior for advanced interactions.

## 🏗️ Structure

The card consists of the following elements:
- a main wrapper `div`,
- a title area rendered through the `title` slot,
- a `default` slot for general content,
- a body section rendered through the `body` slot,
- a footer section rendered through the `footer` slot.

When the `collapsible` prop is enabled, the card displays only the `title` slot along with a toggle button that expands or collapses the rest of the content.

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `titleOnly` | `boolean` | `false` | | If true, the card will be displayed in title-only mode. |
| `backgroundColor` | `string` | `'var(--card)'` | | The background color of the card. |
| `borderColor` | `string` | `'var(--stroke)'` | | The border color of the card. |
| `titleBackground` | `string` | `'var(--surface-background)'` | | The background color of the card title. |
| `titleHeight` | `string` | `undefined` | | The height of the card title. |
| `collapsible` | `boolean` | `false` | | Whether the card is collapsible. When collapsed, the title is still shown. This requires a title slot to be provided. |
| `collapsed` | `boolean` | `false` | | Whether the card is collapsed by default (only if collapsible is true). |
| `collapseLabel` | `string` | `'Collapse card'` | | ARIA label for the collapse button when the card is expanded. |
| `expandLabel` | `string` | `'Expand card'` | | ARIA label for the expand button when the card is collapsed. |

## 🔊 Events

None.

## 🔓 Exposed API

| Name | Type | Description |
| --- | --- | --- |
| `toggleCollapsed` | `() => void` | Toggles the collapsed state when `collapsible` is `true`. No effect when `collapsible` is `false`. |

## 🎨 Slots

| Name | Description |
| --- | --- |
| `title` | Slot to add a title to the card. Exposes a scoped prop `collapsed` (`boolean`) when used with a collapsible card. |
| `body` | Slot to add a body to the card. |
| `footer` | Slot to add a footer to the card. |
| `default` | Default slot for additional card content. |

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-cards-avcard--docs).

## 💡 Examples of use

```vue
<template>
  <AvCard
    background-color="var(--other-background-base)"
    title-background="var(--other-background-base)"
    title-height="6rem"
  >
    <template #title>
      <span>Some content in title</span>
    </template>
    <template #body>
      <span>Some content in body</span>
    </template>
    <template #footer>
      <span>Some content in footer</span>
    </template>
  </AvCard>
</template>
```

```vue
<template>
  <AvCard
    collapsible
    background-color="var(--other-background-base)"
    title-background="var(--other-background-base)"
    title-height="6rem"
  >
    <template #title="{ collapsed }">
      <span>{{ collapsed ? 'Collapsed title' : 'Expanded title' }}</span>
    </template>
    <template #body>
      <span>Some content in body</span>
    </template>
    <template #footer>
      <span>Some content in footer</span>
    </template>
  </AvCard>
</template>
```

```vue
<script lang="ts" setup>
import { ref } from 'vue'
import AvCard from '@/components/cards/AvCard/AvCard.vue'
import AvButton from '@/components/interaction/buttons/AvButton/AvButton.vue'

const cardRef = ref<InstanceType<typeof AvCard> | null>(null)

function toggleCardFromParent () {
  cardRef.value?.toggleCollapsed()
}
</script>

<template>
  <AvButton
    label="Toggle card"
    @click="toggleCardFromParent"
  />

  <AvCard
    ref="cardRef"
    collapsible
  >
    <template #title>
      <span>Card title</span>
    </template>
    <template #default>
      <span>Card content</span>
    </template>
  </AvCard>
</template>
```

```vue
<template>
  <AvCard>
    <span>Du contenu général</span>
  </AvCard>
</template>
```
