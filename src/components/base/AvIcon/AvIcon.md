# Icons - `AvIcon`

## ✨ Introduction

The `AvIcon` component places an `span` (with the base64 icon as a mask image) in a square `div` of configurable size. It is a Vue.js component for displaying icons with a wide range of customization options, including animations, colors, and sizes. It's designed to be flexible and performant, with support for various display options, flip options, and accessible titles.

::: warning
Icon names must be those from [Iconify](https://icon-sets.iconify.design/).
:::

## 🏗️ Structure

The icon is composed of a square `div` of configurable size containing a `span` with a mask image for the icon.

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `size` | `number` | `1` | | The size in rem of the icon. |
| `name` | `string` | | ✅ | The name of the icon to display. |
| `animation` | `'spin' \| 'wrench' \| 'pulse' \| 'spin-pulse' \| 'flash' \| 'float' \| 'ring'` | `undefined` | | Animation type applied to the icon. |
| `speed` | `'fast' \| 'slow'` | `undefined` | | Animation speed, if defined. |
| `flip` | `'horizontal' \| 'vertical' \| 'both'` | `undefined` | | Flips the icon horizontally, vertically, or both. |
| `title` | `number` | `undefined` | | Icon title used for accessibility and tooltips. |
| `color` | `string` | `undefined` | | Main color of the icon. |
| `ssr` | `boolean` | `1` | | Enables server-side rendering. |

## 🔊 Events

None.

## 🎨 Slots

None.

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-base-avicon--docs).

## 💡 Examples of use

```vue
<template>
  <AvIcon
    name="mdi:warning-outline"
    color="var(--icon)"
    :size="2"
  />
</template>
```
