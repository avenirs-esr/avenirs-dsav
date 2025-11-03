# Checkboxes - `AvCheckbox`

## ✨ Introduction

The `AvCheckbox` allow the user to select one or more options from a list. They are used to make multiple selections (from 0 to N items) or to allow a binary choice, where the user can select or deselect a single option.

Checkboxes can be used alone or in a list. Avoid lists with more than 5 items, and when you want to restrict the choice to a single item, use radio buttons (see `AvRadioButton`).

Checkboxes must be used inside an `AvCheckboxesGroup` in order to benefit from `AvFieldset`.

## 🏗️ Structure

The `AvCheckbox` component consists of the following elements:

- a checkbox `<input type="checkbox">`
- a label associated with the checkbox, defined by the `label` prop
- an information, error (`errorMessage` prop), or validation (`validMessage` prop) message, displayed below the checkbox

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `id` | `string` | `checkbox-${crypto.randomUUID()}` | | Unique ID of the component |
| `icon` | `string` | | | Custom icon to add between the checkbox and the label (Iconify naming convention) |
| `name` | `string` | | ✅ | Name of the field `<input>` |
| `required` | `boolean` | `false` | | Indicates if the checkbox is mandatory |
| `value` | `string \| number \| boolean` | | ✅ | Value associated to the checkbox |
| `small` | `boolean` | `false` | | Displays the checkbox in its small version |
| `inline` | `boolean` | `false` | | Displays the chekbox in its inline version |
| `disabled` | `boolean` | `false` | | Simulates a disabled state to make the checkbox as disabled |
| `label` | `string` | | ✅ | Label to be displayed next to the checkbox |
| `errorMessage` | `string` | `''` | | Error message to be displayed under the checkbox |
| `validMessage` | `string` | `''` | | Valid message to be displayed under the checkbox |
| `hint` | `string` | `''` | | Hint to be displayed under the checkbox |

## 🔊 Events

None.

## 🎨 Slots

None.

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-interaction-checkboxes-avcheckbox--docs).

## 💡 Examples of use

```vue
<template>
  <AvCheckbox
    id="some-checkbox-id"
    v-model="model"
    :value="1"
    label="Some checkbox"
    icon="mdi:home"
    name="some-checkbox"
    small
    @keydown.down="handleFocusNextCheckbox"
    @keydown.right="handleFocusNextCheckbox"
    @keydown.up="handleFocusPreviousCheckbox"
    @keydown.left="handleFocusPreviousCheckbox"
    @keydown.tab="handleFocusNextElementUsingTab"
  />
</template>
```
