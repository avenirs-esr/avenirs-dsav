# Floating Panel - `AvFloatingPanel`

## ✨ Introduction

The `AvFloatingPanel` component is a fixed panel anchored at the bottom-right of the viewport.
It wraps an `AvCard` in collapsible mode and is intended for contextual content that must stay available without interrupting the current page.

## 🏗️ Structure

The floating panel consists of the following elements:
- a fixed container positioned in the bottom-right corner,
- a header area with an icon and a title,
- an optional subtitle displayed on the same header line,
- a collapsible `AvCard` used to render the panel body,
- the default slot for the panel content.

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `title` | `string` | | ✅ | Title displayed in the panel header. |
| `subtitle` | `string` | `undefined` | | Subtitle displayed in the panel header. |
| `icon` | `string` | `MDI_ICONS.CHAT_BUBBLE_OUTLINE` | | Icon displayed next to the title. Accepts MDI or any iconify icon name. |
| `defaultCollapsed` | `boolean` | `true` | | Controls the initial collapsed state of the panel. |
| `width` | `string` | `'var(--dimension-8xl)'` | | Width of the panel. |

## 🔊 Events

None.

## 🎨 Slots

| Name | Description |
| --- | --- |
| `default` | Default slot for panel content. |

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-overlay-floatingpanel-avfloatingpanel--docs).

## 💡 Examples of use

```vue
<template>
  <AvFloatingPanel title="Contextual help">
    <p class="b3-regular">
      Here is some contextual information about the current page.
    </p>
  </AvFloatingPanel>
</template>
```

```vue
<template>
  <AvFloatingPanel
    title="Project overview"
    subtitle="Updated 2 minutes ago"
    icon="mdi:information-outline"
    :default-collapsed="false"
    width="24rem"
  >
    <ul class="b3-regular">
      <li>CV submitted on 01/06/2026</li>
      <li>Interview scheduled on 10/06/2026</li>
    </ul>
  </AvFloatingPanel>
</template>
```
