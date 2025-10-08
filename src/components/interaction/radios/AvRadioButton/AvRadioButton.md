# Radio buttons - `AvRadioButton`

## ✨ Introduction

The `AvRadioButton` is a declarative component used exclusively in the `default` slot of `AvRadioButtonSet`.
`AvRadioButton` allows you to configure a radio button by passing its props (such as `value`, `label`, `description` and `disabled`) to the `AvRadioButtonSet` component without rendering.

It acts as a proxy component: it exposes information (props) used by `AvRadioButtonSet` to generate the interface.

🚫 This component does not display anything by itself and should not be used outside `AvRadioButtonSet`.

## 🏗️ Structure

None.

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `value` | `string \| number \| boolean` | | ✅ | Value of the radio button. |
| `label` | `string` | `''` | | Optional fallback label, used if no custom label slot is provided. |
| `description` | `string` | `''` | | Optional description shown under the radio label, providing more context. |
| `disabled` | `boolean` | `false` | | If true, disables this radio button. |

## 🔊 Events

None.

## 🎨 Slots

| Name | Description |
| --- | --- |
| `default` | Default slot for radio content. |

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-interaction-radios-avradiobutton--docs).

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
