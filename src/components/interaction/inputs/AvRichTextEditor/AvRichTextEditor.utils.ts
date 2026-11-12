import type { AvButtonProps } from '@/components/interaction/buttons'
import type { AvInteractiveProps } from '@/types/interfaces.types'

interface GetAvButtonPropsParams extends AvInteractiveProps {
  id: string
  localDisabled?: boolean
  size?: 'SM' | 'MD' | 'LG'
}

/**
 * Generates the props for a toolbar button based on the provided parameters.
 * @param param0 The parameters for configuring the toolbar button props.
 * @param param0.id The ID of the toolbar button.
 * @param param0.localDisabled Whether the button is locally disabled.
 * @param param0.size The size of the button.
 * @param param0.disabled Whether the button is globally disabled.
 * @param param0.disabledTooltip The tooltip to show when the button is disabled.
 * @param param0.isLoading Whether the button is in a loading state.
 * @returns The props to be applied to the toolbar button component.
 */
export function getToolbarButtonProps ({
  id,
  localDisabled = false,
  size = 'LG',
  disabled,
  disabledTooltip,
  isLoading
}: GetAvButtonPropsParams): Partial<AvButtonProps & { 'data-testid': string }> {
  return {
    'iconOnly': true,
    size,
    'disabled': localDisabled || disabled || isLoading,
    'disabledTooltip': disabled ? disabledTooltip : undefined,
    'variant': localDisabled || disabled || isLoading ? 'DEFAULT' : 'FLAT',
    'data-testid': `${id}-button`,
  }
}
