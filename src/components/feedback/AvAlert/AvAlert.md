# Alerts - `AvAlert`

## ✨ Introduction

The `AvAlert` component is intended for use in the `AvToaster` component.

Alerts draw the user attention to information without interrupting their current task.

The alert is available in two sizes:

- medium size (MD, by default, if the `small` prop is absent or set to `false`) and
- small size (SM) if the `small` prop is set to `true`.

## 🏗️ Structure

The alert consists of the following elements:
- a title (prop `title`, of type `string`):
  - optional on the MD version (if the `small` prop is absent or set to `false`),
  - hidden on the SM version (if the `small` prop is set to `true`).
- an icon and a color determined by the `type` prop, which can be one of the following strings:
  - `info` (default value if the `type` prop is absent)
  - `success`
  - `warning`
  - `error`
- a description text (with the `description` prop, of type `string`):
  - optional on the MD version
  - mandatory on the SM version
  - the default `slot` can be used as a description
- a closing cross if the `closeable` prop is set to `true`

Other props:
- `closed` is used to indicate whether the alert should be present (`false`) or not (`true`) in the DOM.
- `closeButtonLabel` specifies the label and aria-label of the alert close button. By default, the value is `Close`.

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `id` | `string` | `alert-${crypto.randomUUID()}` | | The alert ID. |
| `type` | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` | | The alert type influences its color and associated icon. |
| `title` | `string` | `''` | | The alert title. |
| `description` | `string` | `undefined` | | The alert description text. |
| `small` | `boolean` | `false` | | Indicates whether the alert should be MD (`false`) or SM (`true`) in version. |
| `closed` | `boolean` | `false` | | Indicates whether the alert should be present (`false`) or not (`true`) in the DOM. |
| `closeable` | `boolean` | `false` | | Indicates whether the close button should be present (`true`) or not (`false`) in the alert. |
| `closeButtonLabel` | `string` | `'Close'` | | The label and aria-label of the alert close button. |

## 🔊 Events

| Name | Data (*payload*) | Description |
| --- | --- | --- |
| `'close'` | | Event triggered when the alert is closed. |

## 🎨 Slots

None.
