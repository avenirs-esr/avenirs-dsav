# Tabs - `AvTab`

## ✨ Introduction

The `AvTab` is a declarative component used exclusively in the `default` slot of `AvTabs`.
`AvTab` allows you to configure a tab by passing its props (such as `title` and `icon`) to the `AvTabs` component without rendering.

It acts as a proxy component: it exposes information (props) used by `AvTabs` to generate the interface.

🚫 This component does not display anything by itself and should not be used outside `AvTabs`.

## 🏗️ Structure

None.

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `title` | `string` | | ✅ | Title of tab displayed in tab bar. |
| `icon` | `string` | `undefined` | | Tab icon. |
| `disabled` | `boolean` | | | Whether the tab is disabled. |
| `isLoading` | `boolean` | | | Whether the tab is in loading state. |

## 🔊 Events

None.

## 🎨 Slots

| Name | Description |
| --- | --- |
| `default` | Default slot for tab contents. |

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-interaction-tabs-avtab--docs).

## 💡 Examples of use

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
      title="RPA planning"
      icon="mdi:calendar-month-outline"
    >
      <AmsPlanningContainer />
    </AvTab>
  </AvTabs>
</template>
```
