# Language selector - `AvLanguageSelector`

## ✨ Introduction

The `AvLanguageSelector` allows users to choose the language in which the site content is displayed, if it is available in several languages.
It takes the form of a button that opens a drop-down list.

## 🏗️ Structure

The language selector is composed by:
- a button that opens or closes a drop-down menu of languages
- a drop-down menu of available languages

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `id` | `string` | `language-selector-${crypto.randomUUID()}` | | Unique id for accessibility. |
| `languages` | `AvLanguageSelectorElement[]` | | ✅ | Available languages list. Each language is represented by an object containing a `codeIso` and a `label`. |
| `currentLanguage` | `string` | `'fr'` | | ISO code of the current selected language. |
| `title` | `string` | `'Sélectionner une langue'` | | Title attribute for accessibility. |

## 🔊 Events

| Name | Data (*payload*) | Description |
| --- | --- | --- |
| `select` | `AvLanguageSelectorElement` | Event triggered when the a language is selected |

## 🎨 Slots

None.

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-interaction-buttons-avlanguageselector--docs).

## 💡 Examples of use

```vue
<script>
const state = ref(false)
</script>

<template>
  <AvLanguageSelector
    v-bind="languageSelectorRef"
    @select="emit('languageSelect', $event)"
  />
</template>
```
