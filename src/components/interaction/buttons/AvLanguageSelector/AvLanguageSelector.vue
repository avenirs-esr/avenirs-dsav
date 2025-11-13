<script lang="ts" setup>
import { useAvBreakpoints } from '@/composables'
import { useCollapsable } from '@/composables/use-collapsable/use-collapsable'
import { ICONS_DATA_URL, MDI_ICONS } from '@/tokens/icons'

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

const expanded = ref(false)

const styleVars = computed(() => ({
  '--icon-path': `url(${ICONS_DATA_URL.MDI_KEYBOARD_ARROW_DOWN})`,
}))

function selectLanguage (language: AvLanguageSelectorElement) {
  expanded.value = false
  emit('select', language)
}

watch(expanded, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    doExpand(newValue)
  }
})
</script>

<template>
  <nav
    role="navigation"
    class="av-translate av-nav"
  >
    <div class="av-nav__item">
      <AvButton
        class="av-translate__btn"
        :label="label"
        variant="OUTLINED"
        :aria-controls="realId"
        :aria-expanded="expanded"
        :icon="MDI_ICONS.TRANSLATE"
        :title
        no-sentence-case
        type="button"
        :style="styleVars"
        small
        @click.prevent.stop="expanded = !expanded"
      />
      <div
        :id="realId"
        ref="collapse"
        class="av-collapse av-translate__menu av-menu"
        :class="{
          'av-collapse--expanded': cssExpanded,
          'av-collapsing': collapsing,
        }"
        @transitionend="onTransitionEnd(expanded)"
      >
        <ul class="av-menu__list">
          <li
            v-for="language, idx in languages"
            :key="idx"
          >
            <a
              class="av-translate__language av-nav__link"
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

<style lang="scss" scoped>
@use '@/styles/settings/breakpoints' as *;

.av-translate {
  position: relative;

  &__btn {
    &::after, &::before {
      display:block;
    }

    &::after {
      background-color: currentColor;
      content: "";
      display: inline-block;
      flex: 0 0 auto;
      height: var(--dimension-sm);
      margin-left: auto;
      margin-right: var(--spacing-none);
      -webkit-mask-image: var(--icon-path);
      mask-image: var(--icon-path);
      -webkit-mask-size: 100% 100%;
      mask-size: 100% 100%;
      transition: transform .3s;
      vertical-align: calc((.75em - var(--dimension-sm))*.5);
      width: var(--dimension-sm);
    }

    &[aria-expanded=true]::after {
      transform: rotate(-180deg);
    }
  }

  &__language {
    white-space: nowrap;

    &[aria-current]:not([aria-current=false]) {
      display: none;
    }
  }

  .av-menu__list {
    padding: var(--spacing-none);
    width: auto;
  }

  .av-collapse {
    position: absolute;
    background: var(--other-background-base);
    top: var(--spacing-lg);
    left: var(--spacing-none);
    z-index: 1000;
    border: 1px solid var(--divider);
  }

  @include min-width(lg) {
    &__language[aria-current]:not([aria-current=false]) {
      display: inline-flex;
    }

    &__menu {
      margin: calc(-1 * var(--spacing-xxs)) calc(-1 * var(--spacing-sm));
    }

    .av-collapse {
      left: var(--spacing-sm);
    }
  }
}
</style>
