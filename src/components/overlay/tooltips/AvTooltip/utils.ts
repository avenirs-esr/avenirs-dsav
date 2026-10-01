interface GetAvTooltipContentParams {
  content?: string
  disabled?: boolean
  disabledTooltip?: string
}

export function getAvTooltipContent ({ content, disabled, disabledTooltip }: GetAvTooltipContentParams) {
  return disabled && disabledTooltip ? disabledTooltip : content
}

interface IsAvTooltipEnabledParams {
  iconOnly?: boolean
  disabled?: boolean
  disabledTooltip?: string
  enableTooltip?: boolean
}

export function isAvTooltipEnabled ({ iconOnly, disabled, disabledTooltip, enableTooltip }: IsAvTooltipEnabledParams) {
  const isDisabled = disabled ?? false
  return (iconOnly || enableTooltip || (isDisabled && !!disabledTooltip))
}
