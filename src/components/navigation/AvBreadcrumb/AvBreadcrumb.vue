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
   * @default 'Fil d\'Ariane'
   */
  navigationLabel?: string

  /**
   * Displayed breadcrumb button label.
   * @default 'Voir le fil d\'Ariane'
   */
  showBreadcrumbLabel?: string
}

const {
  id,
  links,
  navigationLabel = 'Fil d\'Ariane',
  showBreadcrumbLabel = 'Voir le fil d\'Ariane',
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
    :aria-label="navigationLabel"
    class="av-breadcrumb"
  >
    <AvButton
      v-if="!expanded"
      :aria-expanded="expanded"
      :aria-controls="realId"
      class="av-breadcrumb__button"
      :label="showBreadcrumbLabel"
      small
      no-sentence-case
      @click="expanded = !expanded"
    />
    <div
      :id="realId"
      ref="collapse"
      class="av-collapse"
      :class="{
        'av-collapse--expanded': cssExpanded,
        'av-collapsing': collapsing,
      }"
    >
      <ol class="av-breadcrumb__list av-list-reset">
        <li
          v-for="(link, index) in links"
          :key="index"
          class="av-breadcrumb__item"
          :style="styleVars"
        >
          <RouterLink
            v-if="link.to"
            :aria-current="index === links.length - 1 ? 'page' : undefined"
            class="b2-regular av-breadcrumb__link av-p-none"
            :to="link.to"
          >
            {{ link.text }}
          </RouterLink>
          <a
            v-else
            :aria-current="index === links.length - 1 ? 'page' : undefined"
            class="b2-regular av-breadcrumb__link av-p-none"
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

    &[href]:hover {
      text-decoration: underline;
    }

    &:not([href]) {
      color: var(--text2);
      background-image: none;
      cursor: default;
      pointer-events: none;
    }
  }

  @include min-width(md) {
    &__button {
      display: none;
    }

    &__list {
      transform: none;
    }

    .av-collapse {
      max-height: none;
      overflow: visible;
      transform: none;
      visibility: inherit;
    }
  }
}
</style>
