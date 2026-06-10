<script lang="ts" setup>
import AvTooltip from '@/components/overlay/tooltips/AvTooltip/AvTooltip.vue'
import { useAvBreakpoints } from '@/composables'
import { MDI_ICONS } from '@/tokens/icons'

/**
 * Interface of a language selector dropdown element
 */
export interface AvLanguageSelectorElement {
  codeIso: string
  label: string
}

/**
 * AvLanguageSelector component props
 */
export interface AvLanguageSelectorProps {
  /**
   * Unique id for accessibility
   * @default crypto.randomUUID()
   */
  id?: string

  /**
   * Available languages list.
   * Each language is represented by an object containing a `codeIso` and a `label`
   */
  languages: AvLanguageSelectorElement[]

  /**
   * ISO code of the current selected language
   * @default 'fr'
   */
  currentLanguage?: string

  /**
   * Title attribute for accessibility
   * @default 'Sélectionner une langue'
   */
  title?: string
}

const {
  id,
  languages,
  currentLanguage = 'fr',
  title = 'Sélectionner une langue'
} = defineProps<AvLanguageSelectorProps>()

/**
 * Events emitted by AvAlert.
 * @event select - Event triggered when the a language is selected.
 */
const emit = defineEmits<{ (
  /**
   * Event triggered when the a language is selected
   * @param payload Selected language.
   */
  e: 'select', payload: AvLanguageSelectorElement): void }>()

const { isBelowLg } = useAvBreakpoints()

const realId = computed(() => id ?? `language-selector-${crypto.randomUUID()}`)
const currentLanguageObject = computed(
  () => languages.find(({ codeIso }) => codeIso === currentLanguage),
)
const label = computed(() => {
  const defaultLabel = currentLanguageObject.value?.codeIso.toUpperCase() ?? ''
  const extendedLabel = `${defaultLabel} - ${currentLanguageObject.value?.label}`
  return isBelowLg.value ? extendedLabel : defaultLabel
})

const menuItems = computed(() => {
  return languages.map(language => ({
    name: language.codeIso,
    label: `${language.codeIso.toUpperCase()} - ${language.label}`,
  }))
})

function handleItemSelected (itemName: string) {
  const selectedLanguage = languages.find(
    language => language.codeIso === itemName,
  )
  if (selectedLanguage) {
    emit('select', selectedLanguage)
  }
}
</script>

<template>
  <AvTooltip :content="title">
    <nav
      role="navigation"
      class="av-translate av-nav"
    >
      <AvDropdown
        :id="realId"
        :items="menuItems"
        :trigger-aria-label="label"
        :trigger-label="label"
        :trigger-icon="MDI_ICONS.TRANSLATE"
        trigger-small
        width="max-content"
        trigger-no-sentence-case
        @item-selected="handleItemSelected"
      />
    </nav>
  </AvTooltip>
</template>
