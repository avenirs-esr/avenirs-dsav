<script setup lang="ts">
import { formatTextToHtml } from '@/utils/string/string'

/**
 * AvNotice component props.
 */
export interface AvNoticeProps {
  /**
   * The banner title.
   * @default ''
   */
  title?: string

  /**
   * The banner text. Any text surrounded by a ** will be underlined.
   * @default ''
   */
  text?: string

  /**
   * The banner type.
   * Can be 'info', 'warning', or 'alert'.
   */
  type: 'info' | 'warning' | 'alert'
}

const { title = '', text = '', type } = defineProps<AvNoticeProps>()

const formattedDesc = computed(() => formatTextToHtml(text))
</script>

<template>
  <div
    class="fr-notice"
    :class="`fr-notice--${type}`"
  >
    <div class="fr-container">
      <div class="fr-notice__body">
        <p>
          <span class="fr-notice__title">
            {{ title }}
          </span>
          <span class="fr-notice__desc">
            <span v-html="formattedDesc" />
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

</style>
