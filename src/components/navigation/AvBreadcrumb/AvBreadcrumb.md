# Breadcrumb - `AvBreadcrumb`

## ✨ Introduction

The `AvBreadcrumb` guides users through the different levels of your application.

The breadcrumb is a secondary navigation system that allows users to see where they are on the site they are visiting.

## 🏗️ Structure

It consists of the following elements:

- a link to the root of the site (home page) - mandatory;
- links to pages separating the root of the site from the current page - mandatory if the site hierarchy has more than one level;
- the current page, the only non-clickable element - mandatory.

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `breadcrumbId` | `string` | `breadcrumb-${crypto.randomUUID}` | | The unique identifier for the breadcrumb element. |
| `links` | `{ to?: string \| RouteLocationAsRelativeGeneric \| RouteLocationAsPathGeneric \| undefined; text: string }[] \| undefined` | `undefined` | | A table of objects representing the links in the breadcrumb. Each object can have a ‘text’ property and, optionally, a ‘to’ property for routes. |
| `navigationLabel` | `string` | `undefined` | | Displayed label on the breadcrumb `nav` tag. |
| `showBreadcrumbLabel` | `string` | `undefined` | | Displayed breadcrumb button label. |

## 🔊 Events

None.

## 🎨 Slots

None.

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-navigation-avbreadcrumb--docs).

## 💡 Examples of use

```vue
<template>
  <AvNavigation :nav-items="navItems" />
</template>
```
