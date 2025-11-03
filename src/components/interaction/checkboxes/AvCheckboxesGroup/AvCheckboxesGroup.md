# Checkboxes groups - `AvCheckboxesGroup`

## ✨ Introduction

The `AvCheckboxesGroup` allows you to manage a set of `AvCheckbox`. It consists of a label (legend), individual options represented by the `AvCheckbox` component, and a global information, error, or validation message.

Checkboxes can be used alone or in a list. Avoid lists with more than 5 items, and when you want to restrict the choice to a single item, use radio buttons (see `AvRadioButton`).

## 🏗️ Structure

The `AvCheckboxesGroup` component consists of the following elements:
- a `<fieldset>` element containing all the checkboxes,
- a legend defined by the `legend` prop and customizable with the `legend` slot
- a group of individual checkboxes rendered by the `AvCheckbox` component
- an information, error, or validation message displayed below the group of checkboxes

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `id` | `string` | `checkboxes-group-${crypto.randomUUID()}` | | Unique ID of the component |
| `legend` | `string` | `''` | | Fieldset caption |
| `legendId` | `string` | `''` | | `<legend>` tag id |
| `errorMessage` | `string` | `''` | | Error message to be displayed under the checkboxes |
| `successMessage` | `string` | `''` | | Success message to be displayed under the checkboxes |
| `hint` | `string` | `''` | | Hint to be displayed under the checkboxes |
| `inline` | `boolean` | `false` | | Display checkboxes inline |

## 🔊 Events

None.

## 🎨 Slots

None.

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-interaction-checkboxes-avcheckboxesgroup--docs).

## 💡 Examples of use

```vue
<template>
  <AvCheckboxesGroup
    legend="Make some choices"
  >
    <AvCheckbox
      v-model="model"
      name="checkbox-1"
      label="Checkbox 1"
      :value="1"
    />
    <AvCheckbox
      v-model="model"
      name="checkbox-2"
      label="Checkbox 2"
      :value="2"
    />
    <AvCheckbox
      v-model="model"
      name="checkbox-3"
      label="Checkbox 3"
      :value="3"
    />
  </AvCheckboxesGroup>
</template>
```
