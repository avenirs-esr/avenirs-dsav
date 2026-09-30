interface GetAvTooltipContentParams {
  content?: string
  disabled?: boolean
  disabledTooltip?: string
}

export function getAvTooltipContent ({ content, disabled, disabledTooltip }: GetAvTooltipContentParams) {
  return disabled && disabledTooltip ? disabledTooltip : content
}

interface IsAvTooltipDisabledParams {
  iconOnly?: boolean
  disabled?: boolean
  disabledTooltip?: string
}

export function isAvTooltipDisabled ({ iconOnly, disabled, disabledTooltip }: IsAvTooltipDisabledParams) {
  const isDisabled = disabled ?? false
  return (!iconOnly && !isDisabled) || (isDisabled && !disabledTooltip)
}

interface GetAvTooltipForceFocusableParams {
  iconOnly?: boolean
  disabled?: boolean
  disabledTooltip?: string
}

export function getAvTooltipForceFocusable ({ iconOnly, disabled, disabledTooltip }: GetAvTooltipForceFocusableParams) {
  const isDisabled = disabled ?? false
  return (iconOnly && !isDisabled) || (isDisabled && !!disabledTooltip)
}
