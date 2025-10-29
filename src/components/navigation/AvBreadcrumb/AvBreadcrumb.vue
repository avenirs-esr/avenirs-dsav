<script setup lang="ts">
import type { RouteLocationAsPathGeneric, RouteLocationAsRelativeGeneric } from 'vue-router'
import { useCollapsable } from '@/composables/use-collapsable/use-collapsable'

/**
 * AvBreadcrumb component props.
 */
export interface AvBreadcrumbProps {
  /**
   * The unique identifier for the breadcrumb element.
   * @default `breadcrumb-${crypto.randomUUID}`
   */
  breadcrumbId?: string

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
  breadcrumbId = `breadcrumb-${crypto.randomUUID}`,
  links,
  navigationLabel = 'Vous êtes ici :',
  showBreadcrumbLabel = 'Voir le fil d’Ariane',
} = defineProps<AvBreadcrumbProps>()

const {
  collapse,
  collapsing,
  cssExpanded,
  doExpand,
  onTransitionEnd,
} = useCollapsable()

const expanded = ref(false)

watch(expanded, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    doExpand(newValue)
  }
})
</script>

<template>
  <nav
    v-if="links && links.length"
    role="navigation"
    class="av-breadcrumb fr-breadcrumb"
    :aria-label="navigationLabel"
  >
    <button
      v-if="!expanded"
      class="fr-breadcrumb__button"
      :aria-expanded="expanded"
      :aria-controls="breadcrumbId"
      @click="expanded = !expanded"
    >
      {{ showBreadcrumbLabel }}
    </button>
    <div
      :id="breadcrumbId"
      ref="collapse"
      class="fr-collapse"
      :class="{
        'fr-collapse--expanded': cssExpanded,
        'fr-collapsing': collapsing,
      }"
      @transitionend="onTransitionEnd(expanded)"
    >
      <ol class="fr-breadcrumb__list">
        <li
          v-for="(link, index) in links"
          :key="index"
          class="fr-breadcrumb__item"
        >
          <RouterLink
            v-if="link.to"
            class="b2-regular fr-breadcrumb__link"
            :to="link.to"
            :aria-current="index === links.length - 1 ? 'page' : undefined"
          >
            {{ link.text }}
          </RouterLink>
          <a
            v-if="!link.to"
            class="b2-regular fr-breadcrumb__link"
            :aria-current="index === links.length - 1 ? 'page' : undefined"
          >{{ link.text }}</a>
        </li>
      </ol>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.fr-breadcrumb__link {
  color: var(--text2);
}

li:not(:last-child) .fr-breadcrumb__link {
  color: var(--dark-background-primary1);
}

.fr-breadcrumb__link:not([href]) {
  color: var(--text2) !important;
  background-image: none !important;
  cursor: default;
}
</style>
