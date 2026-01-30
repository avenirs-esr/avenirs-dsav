import type { AvLanguageSelectorElement } from '@/components/interaction/buttons/AvLanguageSelector/AvLanguageSelector.vue'

export interface AvHeaderMenuDrawerEmits {
  /**
   * Event emitted when the user change the language.
   * @event languageSelect
   * @param payload Selected language.
   */
  (e: 'languageSelect', payload: AvLanguageSelectorElement): void
}

export interface AvHeaderSearchDrawerEmits {
  /**
   * Event emitted when updating the searchbar value.
   * @event update:modelValue
   * @param payload Content of the searchbar.
   */
  (e: 'update:modelValue', payload: string): void

  /**
   * Event emitted when a search is executed.
   * @event search
   * @param payload Content of the searchbar.
   */
  (e: 'search', payload: string): void
}

/**
 * Emits interface for AvHeader component.
 */
export interface AvHeaderEmits extends AvHeaderMenuDrawerEmits, AvHeaderSearchDrawerEmits {}

export type DrawerMode = 'closed' | 'search' | 'menu'
