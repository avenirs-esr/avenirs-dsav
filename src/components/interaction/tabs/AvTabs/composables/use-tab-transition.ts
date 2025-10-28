import type { ComputedRef, Ref } from 'vue'

/**
 * Return type of useTabTransition composable
 */
interface UseTabTransitionReturn {
  /**
   * Translate value for the "from" state of the transition.
   * Used for the .slide-fade-enter-from class.
   */
  translateValueFrom: ComputedRef<string>

  /**
   * Translate value for the "to" state of the transition.
   * Used for the .slide-fade-leave-to class.
   */
  translateValueTo: ComputedRef<string>
}

/**
 * Composable managing tab transition values based on the direction of the tab change.
 * @param asc - Boolean indicating if the tab change is in ascending order.
 * @returns An object containing computed properties for transition translate values.
 */
export function useTabTransition (asc: Ref<boolean>): UseTabTransitionReturn {
  const values = { true: '100%', false: '-100%' }

  const translateValueFrom = computed(() => (asc.value ? values.true : values.false))
  const translateValueTo = computed(() => (asc.value ? values.false : values.true))

  return {
    translateValueFrom,
    translateValueTo,
  }
}
