# Layout

_Last updated: 2026-06-05_

## ✨ Introduction

This file contains layout-related utility classes for managing the overall structure and alignment of elements within the application. These utilities help in creating responsive designs and ensuring consistent spacing and alignment across different components.

## 🏷️ Class patterns

| Class pattern | Description | Responsive variants |
|---------------|-------------|---------------------|
| `.av-container` | Centers content, sets max-width | `--sm`, `--md`, `--lg`, `--xl` |
| `.av-container-fluid` | Full-width container, no horizontal padding | None |
| `.av-row` | `display: flex; flex-direction: row` | `--sm`, `--md`, `--lg`, `--xl` |
| `.av-col` | `display: flex; flex-direction: column` | `--sm`, `--md`, `--lg`, `--xl` |
| `.av-wrap` | `flex-wrap: wrap` | `--sm`, `--md`, `--lg`, `--xl` |
| `.av-nowrap` | `flex-wrap: nowrap` | `--sm`, `--md`, `--lg`, `--xl` |
| `.av-sr-only` | Hides element visually but keeps it accessible to screen readers | `--sm`, `--md`, `--lg`, `--xl` |
| `.av-hidden` | `display: none !important` | `--sm`, `--md`, `--lg`, `--xl` |
| `.av-unhidden` | `display: inherit !important` | `--sm`, `--md`, `--lg`, `--xl` |
| `.av-gap-{spacing}` | Sets `gap` between flex items | `--sm`, `--md`, `--lg`, `--xl` |
| `.av-flex-fill` | `flex: 1 1 0%` (grow and fill available space) | `--sm`, `--md`, `--lg`, `--xl` |
| `.av-w-full` | `width: 100%` | `--sm`, `--md`, `--lg`, `--xl` |
| `.av-h-full` | `height: 100%` | `--sm`, `--md`, `--lg`, `--xl` |
| `.av-w-unset` | `width: unset` | `--sm`, `--md`, `--lg`, `--xl` |
| `.av-h-unset` | `height: unset` | `--sm`, `--md`, `--lg`, `--xl` |
| `.av-align-{alignment}` | Sets `align-items`: `start` (`flex-start`), `center`, `end` (`flex-end`), `stretch`, `baseline` | `--sm`, `--md`, `--lg`, `--xl` |
| `.av-justify-{justification}` | Sets `justify-content`: `start` (`flex-start`), `center`, `end` (`flex-end`), `between` (`space-between`), `around` (`space-around`), `evenly` (`space-evenly`) | `--sm`, `--md`, `--lg`, `--xl` |
| `.av-floating-{position}` | `position: fixed` with specified position (`left` or `right`) and spacing | None |

📝 Notes:
- `{spacing}` corresponds to the spacing scale defined in the core: `none`, `xxxs`, `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `4xl`, `5xl`.
- `{alignment}` options include: `start`, `center`, `end`, `stretch`, `baseline`.
- `{justification}` options include: `start`, `center`, `end`, `between`, `around`, `evenly`.
- `{position}` options include: `left`, `right`.

## 🎨 Some CSS results

### Containers

```css
.av-container {
  max-width: 90rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--spacing-sm);
  padding-right: var(--spacing-sm);
}

.av-container-fluid {
  max-width: none;
  padding-left: var(--spacing-none);
  padding-right: var(--spacing-none);
  overflow: hidden;
}

@media (min-width: 36rem) {
  .av-container--sm {
    width: 100%;
    max-width: 36rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--spacing-sm);
    padding-right: var(--spacing-sm);
  }
}

@media (min-width: 48rem) {
  .av-container--md {
    width: 100%;
    max-width: 48rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--spacing-sm);
    padding-right: var(--spacing-sm);
  }
}

@media (min-width: 64rem) {
  .av-container--lg {
    width: 100%;
    max-width: 64rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--spacing-md);
    padding-right: var(--spacing-md);
  }
}
```

### Rows and colums

```css
.av-row {
  display: flex;
  flex-direction: row;
}

@media (min-width: 36rem) {
  .av-row--sm {
    display: flex;
    flex-direction: row;
  }
}

.av-col {
  display: flex;
  flex-direction: column;
}

@media (min-width: 36rem) {
  .av-col--sm {
    display: flex;
    flex-direction: column;
  }
}
```

### Flex wrap

```css
.av-wrap {
  flex-wrap: wrap;
}

.av-nowrap {
  flex-wrap: nowrap;
}
```

### Accessibility

```css
.av-sr-only {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

@media (min-width: 36rem) {
  .av-sr-only--sm {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }
}
```

### Visibility

```css
.av-hidden {
  display: none !important;
}

@media (min-width: 36rem) {
  .av-hidden--sm {
    display: none !important;
  }
}

.av-unhidden {
  display: inherit !important;
}

@media (min-width: 36rem) {
  .av-unhidden--sm {
    display: inherit !important;
  }
}
```

### Gapped layouts

```css
.av-gap-sm {
  gap: var(--spacing-sm);
}

@media (min-width: 48rem) {
  .av-gap-lg--md {
    gap: var(--spacing-lg);
  }
}
```

### Flex fill

```css
.av-flex-fill {
  flex: 1 1 0%;
}

@media (min-width: 36rem) {
  .av-flex-fill--sm {
    flex: 1 1 0%;
  }
}
```

### Full width and height

```css
.av-w-full {
  width: 100%;
}

@media (min-width: 36rem) {
  .av-w-full--sm {
    width: 100%;
  }
}

.av-h-full {
  height: 100%;
}

@media (min-width: 36rem) {
  .av-h-full--sm {
    height: 100%;
  }
}
```

### Unset width and height

```css
.av-w-unset {
  width: unset;
}

@media (min-width: 36rem) {
  .av-w-unset--sm {
    width: unset;
  }
}

.av-h-unset {
  height: unset;
}

@media (min-width: 36rem) {
  .av-h-unset--sm {
    height: unset;
  }
}
```

### Alignment

```css
.av-align-start {
  align-items: flex-start;
}

.av-align-center {
  align-items: center;
}

.av-align-end {
  align-items: flex-end;
}

.av-align-stretch {
  align-items: stretch;
}

.av-align-baseline {
  align-items: baseline;
}

@media (min-width: 36rem) {
  .av-align-center--sm {
    align-items: center;
  }
}
```

### Justification

```css
.av-justify-start {
  justify-content: flex-start;
}

.av-justify-center {
  justify-content: center;
}

.av-justify-end {
  justify-content: flex-end;
}

.av-justify-between {
  justify-content: space-between;
}

.av-justify-around {
  justify-content: space-around;
}

.av-justify-evenly {
  justify-content: space-evenly;
}

@media (min-width: 36rem) {
  .av-justify-center--sm {
    justify-content: center;
  }
}
```

### Floating layout

```css
.av-floating-left {
  position: fixed !important;
  left: var(--spacing-lg) !important;
  bottom: var(--spacing-lg) !important;
  z-index: 1000 !important;
}

.av-floating-right {
  position: fixed !important;
  right: var(--spacing-lg) !important;
  bottom: var(--spacing-lg) !important;
  z-index: 1000 !important;
}
```

## 💡 Examples of use

```html
<div class="av-container">
  <!-- Row with medium gap -->
  <div class="av-row av-gap-md">

    <!-- Column with centered and spaced items -->
    <div class="av-col av-align-center av-justify-between">
      <div>Item 1</div>
      <!-- Visible only on large devices -->
      <div class="av-hidden av-unhidden-lg">Item 2</div>
    </div>

    <!-- Flexible column filling remaining space -->
    <div class="av-col av-flex-fill">
      <div class="av-w-full av-h-full">Item 3</div>
    </div>

    <!-- Floating button on the right -->
    <button class="av-floating-right">Floating Button</button>
  </div>
</div>
```
