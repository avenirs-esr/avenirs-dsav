---
layout: page
lastUpdated: true
---

# Spacing

## ✨ Introduction

This `spacing` utility generates margin and padding classes for all defined spacing sizes, both globally and directionally, with responsive variants.

## 🏷️ Class patterns

| Class pattern | Description | Responsive variants |
|---------------|-------------|---------------------|
| `.av-m{direction?}-{spacing}` | Applies `margin`; optional direction: `t` (`top`), `r` (`right`), `b` (`bottom`), `l` (`left`), `x` (`horizontal`), `y` (`vertical`) | `--sm`, `--md`, `--lg`, `--xl` |
| `.av--m{direction?}-{spacing}` | Applies negative `margin`; optional direction: `t` (`top`), `r` (`right`), `b` (`bottom`), `l` (`left`), `x` (`horizontal`), `y` (`vertical`) | `--sm`, `--md`, `--lg`, `--xl` |
| `.av-p{direction?}-{spacing}` | Applies `padding`; optional direction: `t` (`top`), `r` (`right`), `b` (`bottom`), `l` (`left`), `x` (`horizontal`), `y` (`vertical`) | `--sm`, `--md`, `--lg`, `--xl` |
| `.av--p{direction?}-{spacing}` | Applies negative `padding`; optional direction: `t` (`top`), `r` (`right`), `b` (`bottom`), `l` (`left`), `x` (`horizontal`), `y` (`vertical`) | `--sm`, `--md`, `--lg`, `--xl` |

📝 Notes:
- `{spacing}` corresponds to the spacing scale defined in the core: `none`, `xxxs`, `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `4xl`, `5xl`.

## 🎨 Some CSS results

### Global margin

```css
.av-m-sm {
  margin: var(--spacing-sm) !important;
}

.av--m-md {
  margin: calc(-1 * var(--spacing-md)) !important;
}

@media (min-width: 36rem) {
  .av-m-sm--md {
    margin: var(--spacing-sm) !important;
  }
}
```

### Directional margin

```css
.av-mt-sm {
  margin-top: var(--spacing-sm) !important;
}

.av--mb-lg {
  margin-bottom: calc(-1 * var(--spacing-lg)) !important;
}

@media (min-width: 48rem) {
  .av-my-lg--md {
    margin-top: var(--spacing-lg) !important;
    margin-bottom: var(--spacing-lg) !important;
  }
}
```

### Global padding

```css
.av-p-md {
  padding: var(--spacing-md) !important;
}

.av--p-xl {
  padding: calc(-1 * var(--spacing-xl)) !important;
}

@media (min-width: 64rem) {
  .av-p-md--lg {
    padding: var(--spacing-md) !important;
  }
}
```

### Directional padding

```css
.av-pb-lg--md {
  padding-bottom: var(--spacing-lg) !important;
}

.av--pt-xs {
  padding-top: calc(-1 * var(--spacing-xs)) !important;
}

@media (min-width: 48rem) {
  .av-px-lg--md {
    padding-left: var(--spacing-lg) !important;
    padding-right: var(--spacing-lg) !important;
  }
}
```

## 💡 Examples of use

```html
<div class="av-mt-md av-mb-lg--md av-px-sm av-py-xl--lg">
  <!-- mt-md: top margin md on all screens -->
  <!-- mb-lg--md: bottom margin lg on medium screens and up -->
  <!-- px-sm: horizontal padding sm -->
  <!-- py-xl--lg: vertical padding xl on large screens and up -->
</div>
```
