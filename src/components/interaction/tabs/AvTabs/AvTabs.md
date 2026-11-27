# Tabs - `AvTabs`

## ✨ Introduction

The `AvTabs` component automatically manages the addition of `AvTab` components provided through its `default` slot.

It supports both statically declared tabs and dynamically generated tabs using directives such as `v-for`.

The tab component allows users to navigate different content sections within the same page.

Individual `AvTab` entries can be disabled, display a loading state, and provide a `disabledTooltip` message; see the `AvTab` props.

The tab system helps group different contents together in a limited space, allowing dense content to be divided into individually accessible sections and making reading easier for users.

## 🏗️ Structure

Each tab consists of the following elements:
- An optional icon to the left of the title.
- A clickable title (mandatory) that displays the associated content zone.

If the number of tabs exceeds the width of the container, horizontal scrolling allows users to navigate between tabs.

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `ariaLabel` | `string` | `undefined` | | Aria label of tab list. |
| `modelValue` | `number` | `0` | | Index of selected tab at loading (starts at 0). |
| `compact` | `boolean` | `false` | | Allows compact display: underline without central pipe. |
| `lazyRender` | `boolean` | `true` | | If false, all tab contents are rendered in the DOM regardless of their active state. |

## 🔊 Events

| Name | Data (*payload*) | Description |
| --- | --- | --- |
| `'update:modelValue'` | Index (`number`) of the selected tab | Issued when a tab is selected. |

## 🎨 Slots

| Name | Description |
| --- | --- |
| `default` | Default slot for adding `AvTab` components. Tabs can be declared statically or generated dynamically using `v-for`. |

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-interaction-tabs-avtabs--docs).

## 💡 Examples of use

### Static tabs

```vue
<template>
  <AvTabs v-model="activeTab">
    <AvTab
      title="My RPA list"
      icon="mdi:format-list-bulleted"
    >
      <AmsListContainer />
    </AvTab>
    <AvTab
      title="RPA Planning"
      icon="mdi:calendar-month-outline"
    >
      <AmsPlanningContainer />
    </AvTab>
  </AvTabs>
</template>
```

### Dynamically generated tabs

```vue
<script setup lang="ts">
const tabs = [
  { title: 'My RPA list', icon: 'mdi:format-list-bulleted' },
  { title: 'RPA Planning', icon: 'mdi:calendar-month-outline' }
]
</script>

<template>
  <AvTabs v-model="activeTab">
    <AvTab
      v-for="tab in tabs"
      :key="tab.title"
      :title="tab.title"
      :icon="tab.icon"
    >
      <!-- Tab content -->
    </AvTab>
  </AvTabs>
</template>
```

### Compact tabs

```vue
<template>
  <AvTabs
    v-model="activeTab"
    compact
  >
    <AvTab
      title="My RPA list"
      icon="mdi:format-list-bulleted"
    >
      <AmsListContainer />
    </AvTab>
    <AvTab
      title="RPA Planning"
      icon="mdi:calendar-month-outline"
      is-loading
    >
      <AmsPlanningContainer />
    </AvTab>
  </AvTabs>
</template>
```

### Disabled tabs

```vue
<template>
  <AvTabs
    v-model="activeTab"
    compact
  >
    <AvTab
      title="My RPA list"
      icon="mdi:format-list-bulleted"
      disabled
    >
      <AmsListContainer />
    </AvTab>
    <AvTab
      title="RPA Planning"
      icon="mdi:calendar-month-outline"
    >
      <AmsPlanningContainer />
    </AvTab>
  </AvTabs>
</template>
```