# Navigation - `AvNavigation`

## ✨ Introduction

The `AvNavigation` is the main navigation therefore the central navigation system within a site. It guides the user through the site main and secondary sections.

## 🏗️ Structure

The navigation component can be used to create a navigation bar with different types of navigation items:
- direct link
- submenu
- mega-menu

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `navItems` | `(DsfrNavigationMenuLinkProps \| DsfrNavigationMenuProps \| DsfrNavigationMegaMenuProps)[]` | | ✅ | List of navigation items. Each item can be:<br>• A direct navigation link (`DsfrNavigationMenuLinkProps`) with the `to` and `text` props.<br>• A navigation submenu (`DsfrNavigationMenuProps`) with the `title`, `links` and `active` props.<br>• A navigation mega-menu (`DsfrNavigationMegaMenuProps`) with the `title`, `link`, `active` and `menus` props. |

## 🔊 Events

None.

## 🎨 Slots

None.

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-navigation-avnavigation--docs).

## 💡 Examples of use

```vue
<template>
  <AvNavigation :nav-items="navItems" />
</template>
```
