<script lang="ts" setup>
import { useCollapsable } from '@/composables/use-collapsable/use-collapsable'

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

const {
  collapse,
  collapsing,
  cssExpanded,
  doExpand,
  onTransitionEnd,
} = useCollapsable()

const realId = computed(() => id ?? `language-selector-${crypto.randomUUID()}`)

const expanded = ref(false)

function selectLanguage (language: AvLanguageSelectorElement) {
  expanded.value = false
  emit('select', language)
}

const currentLanguageObject = computed(
  () => languages.find(({ codeIso }) => codeIso === currentLanguage),
)

watch(expanded, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    doExpand(newValue)
  }
})
</script>

<template>
  <nav
    role="navigation"
    class="fr-translate  fr-nav"
  >
    <div class="fr-nav__item">
      <button
        class="fr-translate__btn fr-btn fr-btn--tertiary"
        :aria-controls="realId"
        :aria-expanded="expanded"
        :title
        type="button"
        @click.prevent.stop="expanded = !expanded"
      >
        {{ currentLanguageObject?.codeIso.toUpperCase() }}<span class="fr-hidden-lg">&nbsp;- {{ currentLanguageObject?.label }}</span>
      </button>
      <div
        :id="realId"
        ref="collapse"
        class="av-collapse fr-translate__menu fr-menu"
        :class="{
          'av-collapse--expanded': cssExpanded,
          'fr-collapsing': collapsing,
        }"
        @transitionend="onTransitionEnd(expanded)"
      >
        <ul class="fr-menu__list">
          <li
            v-for="language, idx in languages"
            :key="idx"
          >
            <a
              class="fr-translate__language  fr-nav__link"
              :hreflang="language.codeIso"
              :lang="language.codeIso"
              :aria-current="currentLanguage === language.codeIso ? true : undefined"
              :href="`#${language.codeIso}`"
              @click.prevent.stop="selectLanguage(language)"
            >{{ `${language.codeIso.toUpperCase()} - ${language.label}` }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
