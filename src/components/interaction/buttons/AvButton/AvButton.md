# Buttons - `AvButton`

## ✨ Introduction

The `AvButton` is an interaction element with an interface enabling the user to perform an action.

The `AvButton` is an elegant, reusable Vue component designed to simplify the creation of custom buttons. It features adjustable sizes (small and default), an optional icon and a click manager. It's easy to use, with the flexibility to adapt to different contexts.

The button allows three variants (`DEFAULT` without border, `OUTLINED` with border and `FLAT` with filled background and border) and three themes (`PRIMARY` blue, `SECONDARY` grey and `TERTIARY` white).

## 🏗️ Structure

Buttons consist of:

- A label - mandatory, using the `label` prop, enables label display when `iconOnly` is `false`, also enables connection to `title` and `aria-label`;
- An icon, which can be modified (see available icons) - optional.

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `variant` | `'DEFAULT' \| 'OUTLINED' \| 'FLAT'` | `'DEFAULT'` | | Button variant: without border (`DEFAULT`) or with border (`OUTLINED`) or with filled background and border (`FLAT`). |
| `theme` | `'PRIMARY' \| 'SECONDARY' \| 'TERTIARY'` | `'PRIMARY'` | | Button theme: blue (`PRIMARY`), gray (`SECONDARY`) or white (`TERTIARY`). |
| `isLoading` | `boolean` | `false` | | Indicates a loading status for the button. |
| `iconScale` | `number` | `undefined` | | Allows you to manually change the icon size (it is automatically calculated otherwise). |
| `noRadius` | `boolean` | `false` | | Allows you to remove radii from the button border. |
| `disabled` | `boolean` | `false` | | Indicates the disabled state of the button. |
| `disabledTooltip` | `string` | `undefined` | | Tooltip text to display when the button is disabled. |
| `label` | `string` | | ✅ | Text label for the button. |
| `iconOnly` | `boolean` | `false` | | Hide label text (`true`) or show it (`false`). |
| `small` | `boolean` | `false` | | Display the button in small size (`true`) or default size (`false`). |
| `icon` | `string \| InstanceType<typeof AvIcon>['$props']` | `undefined` | | Icon to be displayed in button. Can be a name or icon configuration. |
| `noSentenceCase` | `boolean` | `false` | | Disable sentence case transformation on the label. You should only use this on very specific cases. |
| `href` | `string` | `undefined` | | If provided, the button will be rendered as an anchor tag (`<a>`) with `'DEFAULT'` variant and will navigate to the specified URL when clicked. |
| `to` | `string \| RouteLocationRaw` | `undefined` | | If provided, the button will be rendered as a `RouterLink` with `'DEFAULT'` variant and will navigate to the specified route when clicked. |

📝 Notes:
- The `href` and `to` props are mutually exclusive. If both are provided, the button will prioritize the `href` prop and render as an anchor tag (`<a>`). If only the `to` prop is provided, the button will render as a `RouterLink`.
- When the button is rendered as an anchor tag (`<a>`) for an **external** URL (any `href` not starting with `#`), it will open the link in a new tab, use `rel="noopener noreferrer"` for security reasons, and automatically set the icon to `mdi:external-link`.
- When `href` is an internal anchor (starting with `#`, e.g. `#section1`), none of the above applies: the link behaves as a normal same-page anchor (no new tab, no `rel` attribute, no automatic icon).
- When the button is rendered as an anchor tag or a `RouterLink` (i.e. `href` or `to` is set and the button isn't disabled), the `click` event is **not** emitted — navigation is handled natively by the anchor/`RouterLink` instead.

## 🔊 Events

| Name | Data (*payload*) | Description |
| --- | --- | --- |
| `'click'` | `MouseEvent` | Emitted when the button is clicked (not emitted when rendered as a link or `RouterLink`, see notes above). |

## 🎨 Slots

None.

## 🛠️ Exposed methods

| Name | Parameters | Description |
| --- | --- | --- |
| `focus` | | Moves focus to the button (or to the underlying anchor/`RouterLink` element). |

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-interaction-buttons-avbutton--docs).

## 💡 Examples of use

```vue
<template>
  <AvButton
    label="See all"
    icon="mdi:arrow-right-thin"
    @click="navigateToStudentDeliverables"
  />
</template>
```

```vue
<template>
  <AvButton
    class="settings-btn"
    icon="mdi:dots-vertical"
    icon-only
    variant="OUTLINED"
    small
    label="Settings"
    @click="toggleSettingsMenu"
  />
</template>
```

```vue
<template>
  <AvButton
    label="Logout"
    icon="mdi:logout"
    variant="DEFAULT"
    theme="SECONDARY"
    small
    no-radius
  />
</template>
```

```vue
<template>
  <AvButton
    label="Save"
    icon="mdi:content-save"
    variant="FLAT"
    @click="saveData"
  />
</template>
```

```vue
<template>
  <AvButton
    label="View profile"
    to="/profile"
  />
</template>
```

```vue
<script lang="ts" setup>
const saveButtonRef = ref<InstanceType<typeof AvButton> | null>(null)

onMounted(() => saveButtonRef.value?.focus())
</script>

<template>
  <AvButton
    ref="saveButtonRef"
    label="Save"
    @click="saveData"
  />
</template>
```
