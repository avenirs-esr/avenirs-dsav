# Radio button set - `AvRadioButtonSet`

## ✨ Introduction

The `AvRadioButtonSet` automatically manages the addition of `AvRadioButton` in a group according to the `AvRadioButton` present in the `default` slot.

Radio buttons allow the user to select a single option from a list.

The radio button cannot be used on its own: a minimum of 2 options is required. It is preferable not to select a default option, so that the user choice is conscious (especially if the choice is mandatory).

## 🏗️ Structure

The `AvRadioButtonSet` component consists of the following elements:
- A `<div>` element encompassing the entire radio group.
- A `<fieldset>` element containing the radio buttons and associated messages.
- A legend (`legend`) defined by the legend prop and customizable with the legend slot.
- A hint (`hint`) defined by the hint prop and customizable with the hint slot.
- A group of individual radio buttons rendered by the `AvRadioButton` component.
- An information, error or validation message, displayed below the group of radio buttons (optional).

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `name` | `string` | | ✅ | Name of the radio group, applied to each radio `<input name>`. Used for form submission and accessibility. |
| `legend` | `string` | `undefined` | | Label (legend) for the radio group, rendered visually as a title. Helps screen readers understand the group context. |
| `modelValue` | `string \| number \| boolean \| undefined` | | ✅ | Current selected value in the radio group. Must match one of the options values. |
| `disabled` | `boolean` | `false` | | If true, disables all radio buttons in the group. |
| `required` | `boolean` | `false` | | If true, marks the group as required and shows a required indicator. |
| `small` | `boolean` | `false` | | If true, displays the radio buttons in compact (small) mode. |
| `inline` | `boolean` | `false` | | If true, displays the radio buttons inline (horizontally). |
| `errorMessage` | `string` | `undefined` | | Optional global error message displayed below the group. If set, indicates a validation error. |
| `validMessage` | `string` | `undefined` | | Optional global valid message displayed below the group. If set, confirms successful validation. |
| `hint` | `string` | `undefined` | | Optional hint text displayed below the legend. Provides guidance or extra information. |

## 🔊 Events

| Name | Data (*payload*) | Description |
| --- | --- | --- |
| `'update:modelValue'` | Value (`string \| number \| boolean`) of the selected radio button | Emitted when a radio button is selected. |

## 🎨 Slots

| Name | Description |
| --- | --- |
| `default` | Default slot for adding radio button (each radio button must be in an `AvRadioButton`). |

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-interaction-radios-avradiobuttonset--docs).

## 💡 Examples of use

```vue
<template>
  <AvRadioButtonSet
    v-model="selected"
    name="test-group"
    legend="Choisissez une option"
    hint="Ce choix est requis"
    :inline="true"
    :small="false"
    valid-message="Une erreur s’est produite"
  >
    <AvRadioButton value="option1">
      <div>
        <span class="b2-bold">Option 1</span><br>
        <span class="b2-regular">Contenu riche avec description</span>
      </div>
    </AvRadioButton>

    <AvRadioButton value="option2">
      <div>
        <span class="b2-bold">Option 2</span><br>
        <span class="b2-regular">Autre contenu personnalisé</span>
      </div>
    </AvRadioButton>

    <AvRadioButton
      value="option3"
      :disabled="true"
    >
      <div>
        <span class="b2-bold">Option 3 (désactivée)</span><br>
        <span class="b2-regular">Texte grisé et inaccessible</span>
      </div>
    </AvRadioButton>
  </AvRadioButtonSet>
</template>
```
