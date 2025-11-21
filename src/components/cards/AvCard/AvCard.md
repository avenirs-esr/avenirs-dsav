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
| `backgroundColor` | `string` | `'var(--card)'` | | The background color of the card. |
| `borderColor` | `string` | `'var(--stroke)'` | | The border color of the card. |
| `titleBackground` | `string` | `'var(--surface-background)'` | | The background color of the card title. |
| `titleHeight` | `string` | `undefined` | | The height of the card title. |
| `collapsible` | `boolean` | `false` | | Whether the card is collapsible. When collapsed, the title is still shown. This requires a title slot to be provided. |
| `collapsed` | `boolean` | `false` | | Whether the card is collapsed by default (only if collapsible is true). |

## 🔊 Events

None.

## 🎨 Slots

| Name | Description |
| --- | --- |
| `title` | Slot to add a title to the card. |
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
  <AvCard>
    <span>Du contenu général</span>
  </AvCard>
</template>
```
