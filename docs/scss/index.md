# Using SCSS Mixins in Your Project

_Last updated: 2026-01-08_

This document explains how to use the mixins exported by the `@avenirs-esr/avenirs-dsav` library.

## Installation

Make sure you have installed the library:

```bash
npm install @avenirs-esr/avenirs-dsav
```

## Importing Mixins

To use the mixins in a Vue component, import them in the `<style>` tag:

```vue
<style lang="scss" scoped>
@use '@avenirs-esr/avenirs-dsav/mixins' as dsav;

.my-class {
  @include dsav.min-width(md) {
    // Your styles for md screen and above
  }
}
</style>
```

## Available Mixins

### Responsive Breakpoints

#### `min-width($size)`

Applies styles for screens **greater than or equal to** the specified breakpoint.

**Parameter:** `$size` - Breakpoint name (`sm`, `md`, `lg`, `xl`)

**Example:**

```scss
@use '@avenirs-esr/avenirs-dsav/mixins' as dsav;

.card {
  width: 100%;

  @include dsav.min-width(md) {
    width: 50%;  // Applied from 768px onwards
  }
}
```

#### `max-width($size)`

Applies styles for screens **less than or equal to** the specified breakpoint.

**Parameter:** `$size` - Breakpoint name (`sm`, `md`, `lg`, `xl`)

**Example:**

```scss
@use '@avenirs-esr/avenirs-dsav/mixins' as dsav;

.sidebar {
  display: block;

  @include dsav.max-width(md) {
    display: none;  // Hidden on screens <= 768px
  }
}
```

### Breakpoint Values

| Name | Value (rem) | Value (px) |
|------|-------------|------------|
| `sm` | 36rem | 576px |
| `md` | 48rem | 768px |
| `lg` | 64rem | 1024px |
| `xl` | 90rem | 1440px |

## Complete Example

```vue
<template>
  <div class="responsive-card">
    <h2 class="card-title">
      My title
    </h2>
    <p class="card-content">
      My content
    </p>
  </div>
</template>

<style lang="scss" scoped>
@use '@avenirs-esr/avenirs-dsav/mixins' as dsav;

.responsive-card {
  width: 100%;
  padding: 1rem;

  // Mobile first: base styles for mobile

  @include dsav.min-width(sm) {
    // Small screens (≥576px)
    padding: 1.5rem;
  }

  @include dsav.min-width(md) {
    // Medium screens (≥768px)
    width: 50%;
    padding: 2rem;
  }

  @include dsav.min-width(lg) {
    // Large screens (≥1024px)
    width: 33.33%;
  }

  @include dsav.min-width(xl) {
    // Extra large screens (≥1440px)
    width: 25%;
  }
}

.card-title {
  font-size: 1.5rem;

  @include dsav.min-width(md) {
    font-size: 2rem;
  }
}

.card-content {
  @include dsav.max-width(sm) {
    // Specific styles for small screens (≤576px)
    font-size: 0.875rem;
  }
}
</style>
```

## Important Notes

1. **Always use `@use` instead of `@import`**: Modern Sass recommends `@use` which prevents multiple imports
2. **Recommended alias**: Use a short alias like `dsav` to facilitate usage
3. **Mobile-first**: It is recommended to define base styles for mobile, then use `min-width` for larger screens
4. **Validation**: If you use a non-existent breakpoint, a warning will be displayed in the console

## Benefits

- ✅ More readable and maintainable code
- ✅ Centralized breakpoints
- ✅ Automatic value validation
- ✅ Consistency across the entire project
- ✅ Less code duplication
