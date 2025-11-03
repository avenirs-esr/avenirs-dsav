<script setup lang="ts">
import type { RouteLocationAsPathGeneric, RouteLocationAsRelativeGeneric } from 'vue-router'
import { useAvBreakpoints } from '@/composables'
import { useCollapsable } from '@/composables/use-collapsable/use-collapsable'
import { ICONS_DATA_URL } from '@/tokens'

/**
 * AvBreadcrumb component props.
 */
export interface AvBreadcrumbProps {
  /**
   * The unique identifier for the breadcrumb element.
   * @default `breadcrumb-${crypto.randomUUID()}`
   */
  id?: string

  /**
   * A table of objects representing the links in the breadcrumb. Each object can
   * have a ‘text’ property and, optionally, a ‘to’ property for routes.
   */
  links?: {
    to?: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric | undefined
    text: string
  }[] | undefined

  /**
   * Displayed label on the breadcrumb `nav` tag.
   * @default 'Vous êtes ici :'
   */
  navigationLabel?: string

  /**
   * Displayed breadcrumb button label.
   * @default 'Voir le fil d’Ariane'
   */
  showBreadcrumbLabel?: string
}

const {
  id,
  links,
  navigationLabel = 'Vous êtes ici :',
  showBreadcrumbLabel = 'Voir le fil d’Ariane',
} = defineProps<AvBreadcrumbProps>()

const {
  collapse,
  collapsing,
  cssExpanded,
  doExpand,
} = useCollapsable()

const { isAboveMd } = useAvBreakpoints()

const realId = computed(() => id ?? `breadcrumb-${crypto.randomUUID()}`)
const styleVars = computed(() => ({
  '--icon-path': `url(${ICONS_DATA_URL.MDI_KEYBOARD_ARROW_RIGHT})`,
}))

const expanded = ref(isAboveMd.value)

watch(expanded, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    doExpand(newValue)
  }
})

watch(isAboveMd, (newVal) => {
  expanded.value = newVal
})

onMounted(() => {
  doExpand(expanded.value)
})
</script>

<template>
  <nav
    v-if="links && links.length"
    role="navigation"
    class="av-breadcrumb"
    :aria-label="navigationLabel"
  >
    <AvButton
      v-if="!expanded"
      class="av-breadcrumb__button"
      :label="showBreadcrumbLabel"
      :aria-expanded="expanded"
      :aria-controls="realId"
      small
      @click="expanded = !expanded"
    />
    <div
      :id="realId"
      ref="collapse"
      class="av-collapse"
      :class="{
        'av-collapse--expanded': cssExpanded,
        'fr-collapsing': collapsing,
      }"
    >
      <ol class="av-breadcrumb__list">
        <li
          v-for="(link, index) in links"
          :key="index"
          class="av-breadcrumb__item"
          :style="styleVars"
        >
          <RouterLink
            v-if="link.to"
            class="b2-regular av-breadcrumb__link"
            :to="link.to"
            :aria-current="index === links.length - 1 ? 'page' : undefined"
          >
            {{ link.text }}
          </RouterLink>
          <a
            v-if="!link.to"
            class="b2-regular av-breadcrumb__link"
            :aria-current="index === links.length - 1 ? 'page' : undefined"
          >
            {{ link.text }}
          </a>
        </li>
      </ol>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use '@/styles/settings/breakpoints' as *;

.av-breadcrumb {
  margin: var(--spacing-sm) var(--spacing-none) var(--spacing-lg);

  &__list {
    transform:translateY(var(--spacing-xxs));

    & li {
      display: inline-flex;
      align-items: center;

      &:first-child::before {
        content: "";
        height: var(--dimension-sm);
      }

      &:not(:first-child)::before {
        background-color: currentColor;
        content: "";
        display: inline-block;
        flex: 0 0 auto;
        height: var(--dimension-sm);
        margin-left: var(--spacing-xxs);
        margin-right: var(--spacing-xxs);
        -webkit-mask-image: var(--icon-path);
        mask-image: var(--icon-path);
        -webkit-mask-size: 100% 100%;
        mask-size: 100% 100%;
        width: var(--dimension-sm);
      }
    }
  }

  &__link {
    color: var(--dark-background-primary1);
    padding: var(--spacing-none);

    &:not([href]) {
      color: var(--text2);
      background-image: none;
      cursor: default;
      pointer-events: none;
    }
  }

  .av-collapse {
    margin-left: calc(-1 * var(--spacing-xxs));
    margin-right: calc(-1 * var(--spacing-xxs));
    padding-left: var(--spacing-xxs);
    padding-right: var(--spacing-xxs);
    transform: translateY(var(--spacing-xxs));
  }

  @include min-width(md) {
    margin-bottom: var(--spacing-xl);

    &__button {
      display: none;
    }

    &__list {
      transform: none;
    }

    .av-collapse {
      margin-left: var(--spacing-none);
      margin-right: var(--spacing-none);
      padding-left: var(--spacing-none);
      padding-right: var(--spacing-none);
      max-height: none;
      overflow: visible;
      transform: none;
      visibility: inherit;
    }
  }
}
</style>
